export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: readonly ProductImage[];
  accent: string;
}
