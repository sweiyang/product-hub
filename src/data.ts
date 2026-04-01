import { Product } from './types';
import productsData from '../products.yaml';

declare global {
  interface Window {
    __PRODUCTS__?: Product[];
  }
}

export const PRODUCTS: Product[] = (window.__PRODUCTS__ ?? productsData) as Product[];
