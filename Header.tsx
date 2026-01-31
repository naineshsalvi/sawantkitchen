
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Plans', href: '#plans' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#footer' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-warmOrange rounded-full flex items-center justify-center">
             <span className="text-cream font-bold text-xl">SK</span>
          </div>
          <span className={`text-2xl font-bold font-heading ${isScrolled ? 'text-darkBrown' : 'text-white md:text-darkBrown'}`}>
            Sawant’s <span className="text-warmOrange">Kitchen</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-semibold hover:text-warmOrange transition-colors ${isScrolled ? 'text-darkBrown' : 'text-darkBrown'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-warmOrange text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:bg-opacity-90 transition-all flex items-center gap-1 group">
            Order Now
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-darkBrown"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-[70px] bg-cream z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center gap-8 pt-16 px-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-2xl font-bold text-darkBrown hover:text-warmOrange"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-warmOrange text-white py-4 rounded-xl font-bold text-xl shadow-xl">
            Order Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
