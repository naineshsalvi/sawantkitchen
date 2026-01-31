
import React from 'react';
import { PackageSearch, ChefHat, Truck } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: 'Choose a Plan',
      desc: 'Pick a weekly or monthly subscription that fits your lifestyle.',
      icon: <PackageSearch className="w-10 h-10 text-white" />,
      color: 'bg-warmOrange'
    },
    {
      title: 'Cooked Fresh Daily',
      desc: 'Our chefs prepare your meal with love and organic ingredients.',
      icon: <ChefHat className="w-10 h-10 text-white" />,
      color: 'bg-leafGreen'
    },
    {
      title: 'Delivered Hot',
      desc: 'Our delivery partners ensure your tiffin arrives warm and on time.',
      icon: <Truck className="w-10 h-10 text-white" />,
      color: 'bg-accentOrange'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-darkBrown mb-6">How It Works</h2>
          <p className="text-lg text-darkBrown/70 max-w-2xl mx-auto">
            Three simple steps to enjoying delicious home-cooked meals every single day.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-cream -z-10 hidden lg:block"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center max-w-xs relative">
              <div className={`${step.color} w-24 h-24 rounded-[32px] flex items-center justify-center mb-8 shadow-2xl relative z-10`}>
                {step.icon}
                <div className="absolute -bottom-2 -right-2 bg-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-darkBrown shadow-md border-2 border-cream">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-darkBrown mb-4">{step.title}</h3>
              <p className="text-darkBrown/70 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
