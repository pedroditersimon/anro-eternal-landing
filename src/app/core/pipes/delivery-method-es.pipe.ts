import { Pipe, PipeTransform } from '@angular/core';
import { DeliveryMethod, DeliveryMethodES } from '../models/order.model';

@Pipe({ name: 'deliveryMethod' })
export class DeliveryMethodPipe implements PipeTransform {

  transform(value: DeliveryMethod): DeliveryMethodES {
    return DeliveryMethodPipe.transform(value);
  }

  static transform(value: DeliveryMethod): DeliveryMethodES {
    return DeliveryMethodES[value];
  }
}
