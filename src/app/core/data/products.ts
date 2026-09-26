import { Product } from '../models/product.model';

// Fotos de productos: precios y nombres de ejemplo hasta definir el catálogo final.
export const PRODUCTS: readonly Product[] = [
  {
    id: 'sol-de-tarde', name: 'Producto 1', description: 'Ramo artesanal.',
    price: 28500, images: [{ src: '/assets/products/producto_1.jpeg', alt: 'Foto del producto 1' }],
    accent: 'sunny'
  },
  {
    id: 'dias-bonitos', name: 'Producto 2', description: 'Ramo artesanal.',
    price: 24500, images: [
      { src: '/assets/products/producto_2_1.jpeg', alt: 'Foto 1 del producto 2' },
      { src: '/assets/products/producto_2_2.jpeg', alt: 'Foto 2 del producto 2' }
    ],
    accent: 'peach'
  },
  {
    id: 'abrazo-suave', name: 'Producto 3', description: 'Ramo artesanal.',
    price: 32000, images: [{ src: '/assets/products/producto_3.jpeg', alt: 'Foto del producto 3' }],
    accent: 'sage'
  }
];
