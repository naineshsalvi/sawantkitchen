
import React from 'react';
import { MenuItem, SubscriptionPlan, Testimonial } from './types';
import { Utensils, Sprout, ShieldCheck, Clock } from 'lucide-react';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Paneer Thali',
    description: 'Soft paneer butter masala, yellow dal tadka, and jeera rice served in a traditional 3-tier steel dabba.',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800',
    isVeg: true,
    tag: "Chef's Special"
  },
  {
    id: '2',
    name: 'Home-style Chicken Curry',
    description: 'Succulent chicken in a robust gravy with 3 soft rotis, packed hot in a layered thermal tiffin.',
    image: 'https://images.unsplash.com/photo-1606471191009-63991c533f39?auto=format&fit=crop&q=80&w=800',
    isVeg: false,
    tag: "Popular"
  },
  {
    id: '3',
    name: 'Seasonal Veg & Phulka',
    description: 'Aromatic Mixed Veg Handi with 4 ghee-smeared phulkas, salad, and pickle in a premium lunch box.',
    image: 'https://images.unsplash.com/photo-1621447509323-5705b5ff7f96?auto=format&fit=crop&q=80&w=800',
    isVeg: true
  }
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'weekly',
    name: 'Weekly Trial',
    price: '₹1200',
    duration: 'per week',
    features: ['6 Full Meals', 'Change menu daily', 'Eco-friendly packaging', 'No delivery charges']
  },
  {
    id: 'monthly',
    name: 'Monthly Classic',
    price: '₹4500',
    duration: 'per month',
    features: ['24 Full Meals', 'Free dessert on weekends', 'Pause anytime', 'Dedicated support'],
    recommended: true
  },
  {
    id: 'family',
    name: 'Family Pack',
    price: '₹12000',
    duration: 'per month',
    features: ['Large portions for 4', 'Kids special menu', 'Priority delivery', 'Custom diet options']
  }
];

export const FEATURES = [
  {
    title: 'Home-style Cooking',
    desc: 'Recipes passed down through generations, cooked with minimal oil and spices.',
    icon: <Utensils className="w-8 h-8 text-warmOrange" />
  },
  {
    title: 'Fresh Ingredients',
    desc: 'We source daily from local farms to ensure the highest nutritional value.',
    icon: <Sprout className="w-8 h-8 text-leafGreen" />
  },
  {
    title: 'Hygienic Kitchen',
    desc: 'ISO certified kitchen with regular quality checks and strict safety protocols.',
    icon: <ShieldCheck className="w-8 h-8 text-leafGreen" />
  },
  {
    title: 'On-time Delivery',
    desc: 'Hot and fresh meals delivered to your doorstep exactly when you need them.',
    icon: <Clock className="w-8 h-8 text-warmOrange" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Anjali Sharma',
    role: 'Software Engineer',
    content: "The food tastes exactly like what my mom makes back home. It's not heavy on spices and feels so light on the stomach. Best tiffin service in town!",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: 't2',
    name: 'Rahul Verma',
    role: 'Final Year Student',
    content: "I've tried many tiffin services, but Sawant’s Kitchen is consistent. The packaging is premium and the delivery is always punctual.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100'
  }
];
