
import React from 'react';
import { ArrowRight, Play, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cream -z-10 hidden lg:block rounded-l-[100px] shadow-inner"></div>
      
      <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <span className="inline-block bg-accentOrange/10 text-warmOrange px-4 py-1.5 rounded-full font-bold text-sm mb-6 uppercase tracking-wider">
            Authentic Home-Cooked Meals
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-darkBrown leading-[1.1] mb-6">
            A Taste of Mom’s <span className="text-warmOrange">Love</span>, Delivered Daily
          </h1>
          <p className="text-lg md:text-xl text-darkBrown/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Relive the nostalgia of home-cooked warmth. Fresh, hygienic, and nutritious meals prepared daily with care and delivered hot in traditional tiffins.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="w-full sm:w-auto bg-warmOrange text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
              Subscribe Monthly
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-white text-darkBrown px-8 py-4 rounded-2xl font-bold text-lg border-2 border-darkBrown/5 shadow-md flex items-center justify-center gap-2 hover:bg-cream transition-colors">
              <Play className="w-5 h-5 fill-darkBrown" />
              View Menu
            </button>
          </div>

          <div className="mt-12 flex items-center gap-4 justify-center lg:justify-start">
            <div className="flex -space-x-4">
                {[10, 20, 30, 40].map(id => (
                    <img key={id} src={`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=50&h=50&id=${id}`} className="w-12 h-12 rounded-full border-4 border-cream object-cover" alt="User" />
                ))}
            </div>
            <div className="text-sm">
                <p className="font-bold text-darkBrown">Join 2,500+ happy subscribers</p>
                <div className="flex text-accentOrange">
                    {'★'.repeat(5)}
                </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1606471191009-63991c533f39?auto=format&fit=crop&q=80&w=1000&h=1000" 
                  alt="Traditional Indian Dabba" 
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-xl flex items-center justify-between">
                    <div>
                        <h4 className="font-bold text-darkBrown text-lg">Today's Special</h4>
                        <p className="text-sm text-darkBrown/70">Handi Chicken & Jeera Rice in Tiffin</p>
                    </div>
                    <div className="bg-leafGreen text-white px-3 py-1 rounded-full text-xs font-bold">HOT LUNCH</div>
                </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                    <div className="bg-leafGreen/10 p-2 rounded-lg">
                        <Clock className="w-6 h-6 text-leafGreen" />
                    </div>
                    <div>
                        <p className="text-xs text-darkBrown/60">Delivered in</p>
                        <p className="font-bold text-darkBrown">30 Mins</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
