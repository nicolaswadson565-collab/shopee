
export interface Product {
  id: string;
  title: string;
  rating: number;
  reviewsCount: number;
  price: number;
  originalPrice: number;
  discount: number;
  images: string[];
  colors: string[];
}

export interface Seller {
  name: string;
  lastLogin: string;
  evaluations: string;
  products: number;
  chatResponseRate: string;
  chatResponseTime: string;
  joined: string;
  followers: string;
  logo: string;
}
