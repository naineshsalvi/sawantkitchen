
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  image: string;
  isVeg: boolean;
  tag?: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: string;
  duration: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}
