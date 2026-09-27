import { Product } from '../models/product.model';

// Fotos de productos: precios y nombres de ejemplo hasta definir el catálogo final.
export const PRODUCTS: readonly Product[] = [
  {
    id: 'sol-de-tarde', name: 'Sol de tarde', description: 'Flores amarillas para iluminar el día.',
    price: 28500, images: [{ src: '/assets/products/producto_1.jpeg', alt: 'Ramo de flores amarillas Sol de tarde' }],
    accent: 'sunny'
  },
  {
    id: 'dias-bonitos', name: 'Rayito de sol', description: 'Un detalle amarillo lleno de alegría.',
    price: 24500, images: [
      { src: '/assets/products/producto_2_1.jpeg', alt: 'Ramo de flores amarillas Rayito de sol, primera foto' },
      { src: '/assets/products/producto_2_2.jpeg', alt: 'Ramo de flores amarillas Rayito de sol, segunda foto' }
    ],
    accent: 'peach'
  },
  {
    id: 'abrazo-suave', name: 'Luz de miel', description: 'Flores doradas para regalar una sonrisa.',
    price: 32000, images: [{ src: '/assets/products/producto_3.jpeg', alt: 'Ramo de flores amarillas Luz de miel' }],
    accent: 'sage'
  }
];
