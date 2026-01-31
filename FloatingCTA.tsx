
import React from 'react';
import { MessageCircle, ShoppingBag } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform group relative"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-darkBrown px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Quick Order on WhatsApp
        </span>
      </a>

      {/* Floating Order Button (Mobile Only) */}
      <button className="md:hidden bg-warmOrange text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
        <ShoppingBag className="w-7 h-7" />
      </button>
    </div>
  );
};

export default FloatingCTA;
