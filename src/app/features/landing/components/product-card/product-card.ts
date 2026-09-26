import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, input, output, signal } from '@angular/core';
import { LucideChevronRight, LucidePlus, LucideShoppingBag } from '@lucide/angular';
import { Product } from '../../../../core/models/product.model';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, LucideChevronRight, LucidePlus, LucideShoppingBag],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  private readonly cart = inject(CartService);
  readonly product = input.required<Product>();
  readonly decoration = input.required<string>();
  readonly add = output<Product>();
  readonly openCart = output<void>();
  protected readonly imageIndex = signal(0);
  protected readonly currentImage = computed(() => this.product().images[this.imageIndex()] ?? this.product().images[0]);
  protected readonly quantityInCart = computed(() =>
    this.cart.items().find((item) => item.product.id === this.product().id)?.quantity ?? 0
  );

  protected nextImage(): void {
    this.imageIndex.update((index) => (index + 1) % this.product().images.length);
  }
}
