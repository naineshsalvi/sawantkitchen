
import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-darkBrown text-cream pt-24 pb-12 rounded-t-[80px]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-warmOrange rounded-full flex items-center justify-center">
                    <span className="text-cream font-bold text-xl">SK</span>
                </div>
                <span className="text-2xl font-bold font-heading text-white">
                    Sawant’s Kitchen
                </span>
            </div>
            <p className="text-cream/70 leading-relaxed">
              Delivering the warmth of home-style cooking to professionals and families since 2018. Quality you can trust, taste you'll love.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-warmOrange hover:border-warmOrange transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Explore</h4>
            <ul className="space-y-4 text-cream/70">
              <li><a href="#menu" className="hover:text-warmOrange transition-colors">Our Menu</a></li>
              <li><a href="#plans" className="hover:text-warmOrange transition-colors">Subscription Plans</a></li>
              <li><a href="#how-it-works" className="hover:text-warmOrange transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-warmOrange transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-warmOrange transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Get in Touch</h4>
            <ul className="space-y-6 text-cream/70">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-warmOrange shrink-0" />
                <span>Sector 14, Andheri West,<br />Mumbai, Maharashtra 400053</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-warmOrange shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-warmOrange shrink-0" />
                <span>hello@sawantskitchen.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Join Our Newsletter</h4>
            <p className="text-cream/70 mb-6">Get weekly recipes and special discounts delivered to your inbox.</p>
            <div className="flex items-center bg-white/10 rounded-2xl p-2 border border-white/20">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-transparent border-none outline-none px-4 py-2 w-full text-white placeholder:text-cream/30" 
              />
              <button className="bg-warmOrange p-3 rounded-xl hover:scale-105 transition-transform">
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 text-center text-cream/40 text-sm">
          <p>© {new Date().getFullYear()} Sawant’s Kitchen. All rights reserved. Made with ❤️ for home-style food.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
