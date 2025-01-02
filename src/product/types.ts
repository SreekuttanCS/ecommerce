// Define a Price type
export type Price = {
  original: number;
  discounted: number;
};

// Define a Product type
export interface Product {
  id: number;
  name: string;
  image: string;
  price: Price;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  specifications: {
    color: string[];
    fabric?: string;
    pattern?: string;
    neck?: string;
    sleeve?: string;
    size?: string[];
  };
  featuers: string[];
  brand: string;
}
