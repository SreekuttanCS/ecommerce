// Define a Price type
export type Price = {
  original: number;
  discounted: number;
};

// Define a Product type
export interface Product {
  id: string;
  name: string;
  image: string;
  price: Price;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  specifications: {
    item_weight?: string;
    color: string[];
    material: string;
    product_dimensions?: string;
    pattern?: string;
    sleeve?: string;
    size?: string[];
  };
  brand: string;
}
