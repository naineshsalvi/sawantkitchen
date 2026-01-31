
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-darkBrown mb-6">Why Choose Sawant’s Kitchen?</h2>
          <p className="text-lg text-darkBrown/70 leading-relaxed">
            We believe that good food is the foundation of a happy life. Our meals aren't just food; they are an experience of home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-3xl shadow-lg border border-darkBrown/5 hover-lift transition-all"
            >
              <div className="bg-cream w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-darkBrown mb-4">{feature.title}</h3>
              <p className="text-darkBrown/70 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
