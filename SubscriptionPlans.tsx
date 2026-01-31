
import React from 'react';
import { SUBSCRIPTION_PLANS } from '../constants';
import { Check } from 'lucide-react';

const SubscriptionPlans: React.FC = () => {
  return (
    <section id="plans" className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-darkBrown mb-6">Choose Your Meal Plan</h2>
          <p className="text-lg text-darkBrown/70">
            Save up to 30% by subscribing to our weekly or monthly plans. Hassle-free cooking for a healthier you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SUBSCRIPTION_PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative bg-white rounded-[40px] p-10 border-2 transition-all duration-300 ${plan.recommended ? 'border-warmOrange shadow-2xl scale-105 z-10' : 'border-darkBrown/5 shadow-xl'}`}
            >
              {plan.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-warmOrange text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-darkBrown mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold text-darkBrown">{plan.price}</span>
                  <span className="text-darkBrown/60 font-semibold">{plan.duration}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-darkBrown/80">
                    <div className="bg-leafGreen/10 p-1 rounded-full">
                      <Check className="w-4 h-4 text-leafGreen" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${plan.recommended ? 'bg-warmOrange text-white shadow-xl hover:bg-opacity-90' : 'bg-cream text-darkBrown hover:bg-darkBrown/5'}`}>
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
