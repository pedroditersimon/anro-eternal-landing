import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { LucideArrowDown, LucideArrowUp, LucideArrowUpRight, LucideShoppingBag } from '@lucide/angular';
import { PRODUCTS } from '../../../../core/data/products';
import { CartService } from '../../../../core/services/cart.service';
import { CartDrawer } from '../../components/cart-drawer/cart-drawer';
import { ProductCard } from '../../components/product-card/product-card';
import { DECORATION_ASSETS } from '../../data/decorations';

@Component({
  selector: 'app-home-page',
  imports: [ProductCard, CartDrawer, LucideArrowDown, LucideArrowUp, LucideArrowUpRight, LucideShoppingBag],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css'
})
export class HomePage {
  protected readonly products = PRODUCTS;
  protected readonly decorations = this.shuffleDecorations();
  protected readonly cart = inject(CartService);
  protected readonly cartOpen = signal(false);
  protected readonly contactUrl = `https://wa.me/${import.meta.env?.NG_APP_WHATSAPP_NUMBER || '15555550100'}?text=${encodeURIComponent('¡Hola, AnRo! Quiero consultar por un ramo personalizado. ¿Podemos charlar?')}`;
  private readonly cartTrigger = viewChild.required<ElementRef<HTMLButtonElement>>('cartTrigger');

  protected closeCart(): void {
    this.cartOpen.set(false);
    this.cartTrigger().nativeElement.focus();
  }

  private shuffleDecorations(): string[] {
    const assets: string[] = [...DECORATION_ASSETS];
    for (let i = assets.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      [assets[i], assets[random]] = [assets[random], assets[i]];
    }
    return assets;
  }
}
