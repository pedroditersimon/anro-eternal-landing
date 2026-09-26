import { CurrencyPipe } from '@angular/common';
import { afterNextRender, Component, ElementRef, HostListener, inject, output, Signal, signal, viewChild } from '@angular/core';
import { LucideArrowUpRight, LucideMinus, LucidePlus, LucideTrash2, LucideX } from '@lucide/angular';
import { DeliveryMethod } from '../../../../core/models/order.model';
import { Product } from '../../../../core/models/product.model';
import { DeliveryMethodPipe } from '../../../../core/pipes/delivery-method-es.pipe';
import { CartService } from '../../../../core/services/cart.service';
import { orderUrl } from '../../services/order-message';

interface CartEntry { product: Product; quantity: number }

@Component({
  selector: 'app-cart-drawer',
  imports: [CurrencyPipe, DeliveryMethodPipe, LucideArrowUpRight, LucideMinus, LucidePlus, LucideTrash2, LucideX],
  templateUrl: './cart-drawer.html',
  styleUrl: './cart-drawer.css'
})
export class CartDrawer {
  readonly cart = inject(CartService);
  readonly close = output<void>();
  protected readonly entries: Signal<CartEntry[]> = this.cart.items;
  protected readonly deliveryMethod = DeliveryMethod;
  protected readonly delivery = signal(DeliveryMethod.PICKUP);
  private readonly closeButton = viewChild.required<ElementRef<HTMLButtonElement>>('closeButton');

  constructor() {
    afterNextRender(() => this.closeButton().nativeElement.focus());
  }

  protected checkout(): void {
    if (!this.cart.count()) return;
    window.open(orderUrl(this.entries(), this.delivery()), '_blank', 'noopener,noreferrer');
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void { this.close.emit(); }
}
