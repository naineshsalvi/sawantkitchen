
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-darkBrown mb-6">Words from Our Family</h2>
            <p className="text-lg text-darkBrown/70 mb-8 leading-relaxed">
              We've served over 100,000 meals and every single review warms our heart. Here’s what our subscribers say about us.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-darkBrown/5">
                    <p className="text-3xl font-bold text-darkBrown">4.9</p>
                    <div className="flex text-accentOrange my-1">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-xs text-darkBrown/50 font-bold uppercase tracking-widest">Global Rating</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-darkBrown/5">
                    <p className="text-3xl font-bold text-darkBrown">2.5K</p>
                    <p className="text-xs text-darkBrown/50 font-bold uppercase tracking-widest mt-2">Active Users</p>
                </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-10 rounded-[40px] shadow-xl relative overflow-hidden group">
                <Quote className="absolute -top-4 -right-4 w-32 h-32 text-cream group-hover:text-cream/80 transition-colors -z-0" />
                <div className="relative z-10">
                  <div className="flex text-accentOrange mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-darkBrown/80 mb-8 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover shadow-md" />
                    <div>
                      <h4 className="font-bold text-darkBrown">{testimonial.name}</h4>
                      <p className="text-sm text-darkBrown/50">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
