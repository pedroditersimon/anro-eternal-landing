import { isPlatformBrowser } from '@angular/common';
import { computed, effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { PRODUCTS } from '../data/products';
import { Product } from '../models/product.model';

interface StoredCartEntry { id: string; quantity: number }
const STORAGE_KEY = 'anro-cart-v1';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly entries = signal<StoredCartEntry[]>(this.readStoredEntries());

  readonly items = computed(() => this.entries().flatMap(({ id, quantity }) => {
    const product = PRODUCTS.find((item) => item.id === id);
    return product ? [{ product, quantity }] : [];
  }));
  readonly count = computed(() => this.items().reduce((sum, item) => sum + item.quantity, 0));
  readonly subtotal = computed(() => this.items().reduce((sum, item) => sum + item.product.price * item.quantity, 0));

  constructor() {
    effect(() => {
      if (!this.browser) return;
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.entries())); } catch { /* Storage opcional. */ }
    });
  }

  add(product: Product): void {
    this.entries.update((entries) => {
      const existing = entries.find((entry) => entry.id === product.id);
      return existing
        ? entries.map((entry) => entry.id === product.id ? { ...entry, quantity: Math.min(99, entry.quantity + 1) } : entry)
        : [...entries, { id: product.id, quantity: 1 }];
    });
  }

  decrease(id: string): void {
    this.entries.update((entries) => entries
      .map((entry) => entry.id === id ? { ...entry, quantity: entry.quantity - 1 } : entry)
      .filter((entry) => entry.quantity > 0));
  }

  remove(id: string): void {
    this.entries.update((entries) => entries.filter((entry) => entry.id !== id));
  }

  private readStoredEntries(): StoredCartEntry[] {
    if (!this.browser) return [];
    try {
      const parsed: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
      if (!Array.isArray(parsed)) return [];
      const entries: StoredCartEntry[] = [];
      for (const entry of parsed) {
        if (typeof entry !== 'object' || entry === null ||
          !Number.isSafeInteger(entry.quantity) || entry.quantity < 1 || entry.quantity > 99) continue;
        // Antes, la segunda foto del producto 2 figuraba como producto 4.
        const id = entry.id === 'luz-de-manana' ? 'dias-bonitos' : entry.id;
        if (!PRODUCTS.some((product) => product.id === id)) continue;
        const existing = entries.find((item) => item.id === id);
        if (existing) existing.quantity = Math.min(99, existing.quantity + entry.quantity);
        else entries.push({ id, quantity: entry.quantity });
      }
      return entries;
    } catch { return []; }
  }
}
