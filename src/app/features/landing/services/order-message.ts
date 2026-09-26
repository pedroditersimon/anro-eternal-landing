import { DeliveryMethod } from '../../../core/models/order.model';
import { Product } from '../../../core/models/product.model';

export function orderUrl(items: readonly { product: Product; quantity: number }[], delivery: DeliveryMethod): string {
  const format = (amount: number) => new Intl.NumberFormat('es-AR', {
    style: 'currency', currency: 'ARS', maximumFractionDigits: 0
  }).format(amount);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const lines = [
    '¡Hola, AnRo! Quiero hacer este pedido:', '',
    ...items.map(({ product, quantity }) => `• ${product.name} × ${quantity} — ${format(product.price * quantity)}`),
    '', `Subtotal: ${format(subtotal)}`,
    delivery === DeliveryMethod.PICKUP ? 'Entrega: retiro a coordinar.' : 'Entrega: envío (a cotizar según mi zona).'
  ];
  return `https://wa.me/${import.meta.env?.NG_APP_WHATSAPP_NUMBER || '15555550100'}?text=${encodeURIComponent(lines.join('\n'))}`;
}
