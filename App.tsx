
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import MenuPreview from './components/MenuPreview';
import SubscriptionPlans from './components/SubscriptionPlans';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cream overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <MenuPreview />
        <HowItWorks />
        <SubscriptionPlans />
        <Testimonials />
        
        {/* Final CTA Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="bg-warmOrange rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  Stop Worrying About Meals, Start Feeling at Home.
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium">
                  Thousands of people in Mumbai trust us for their daily nutrition. Join the Sawant’s Kitchen family today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button className="w-full sm:w-auto bg-white text-warmOrange px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:scale-105 transition-transform">
                    Subscribe Now
                  </button>
                  <button className="w-full sm:w-auto border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
                    View Weekly Menu
                  </button>
                </div>
                <p className="mt-8 text-white/60 font-semibold uppercase tracking-widest text-sm">
                  No Commitment • Cancel Anytime • 100% Hygienic
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;
