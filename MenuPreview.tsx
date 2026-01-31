
import React from 'react';
import { MENU_ITEMS } from '../constants';
import { Leaf, Info } from 'lucide-react';

const MenuPreview: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-white rounded-t-[80px] -mt-20 relative z-10 shadow-2xl">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-darkBrown mb-4">Today’s Healthy Plate</h2>
            <p className="text-lg text-darkBrown/70">
              Our menu rotates daily to ensure you never get bored and always get the best nutrition.
            </p>
          </div>
          <button className="text-warmOrange font-bold flex items-center gap-2 border-b-2 border-warmOrange pb-1 hover:gap-3 transition-all">
            See Weekly Schedule
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {MENU_ITEMS.map((item) => (
            <div key={item.id} className="group bg-cream/50 rounded-[40px] overflow-hidden hover:shadow-2xl transition-all duration-300 border border-darkBrown/5">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                {item.tag && (
                  <div className="absolute top-6 left-6 bg-accentOrange text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    {item.tag}
                  </div>
                )}
                <div className="absolute top-6 right-6">
                   {item.isVeg ? (
                     <div className="bg-white/90 backdrop-blur p-2 rounded-lg border border-leafGreen/20 shadow-lg">
                        <Leaf className="w-5 h-5 text-leafGreen" />
                     </div>
                   ) : (
                     <div className="bg-white/90 backdrop-blur p-2 rounded-lg border border-red-500/20 shadow-lg">
                        <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                     </div>
                   )}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-darkBrown">{item.name}</h3>
                  <button title="Ingredients info">
                    <Info className="w-5 h-5 text-darkBrown/30 hover:text-warmOrange transition-colors" />
                  </button>
                </div>
                <p className="text-darkBrown/70 mb-8 leading-relaxed">
                  {item.description}
                </p>
                <button className="w-full py-3 px-6 rounded-2xl border-2 border-warmOrange text-warmOrange font-bold hover:bg-warmOrange hover:text-white transition-all">
                  Order This Item
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
