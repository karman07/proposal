import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="Dine3D Logo" className="h-8 outline-none border-none" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-300 hover:bg-gold-gradient hover:bg-clip-text hover:text-transparent transition-colors">
                Home
              </a>
              <a href="#features" className="text-gray-300 hover:bg-gold-gradient hover:bg-clip-text hover:text-transparent transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-300 hover:bg-gold-gradient hover:bg-clip-text hover:text-transparent transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-gray-300 hover:bg-gold-gradient hover:bg-clip-text hover:text-transparent transition-colors">
                Contact
              </a>
              <a 
                href="https://frontend-nine-sigma-24.vercel.app/menu/3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:bg-gold-gradient hover:bg-clip-text hover:text-transparent transition-colors"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gold-gradient hover:opacity-90 text-black font-semibold px-6 py-2 rounded-full">
              Book Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 rounded-lg mt-2">
              <a href="#home" className="text-gray-300 hover:bg-gold-gradient hover:bg-clip-text hover:text-transparent block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#features" className="text-gray-300 hover:bg-gold-gradient hover:bg-clip-text hover:text-transparent block px-3 py-2 text-base font-medium">
                Features
              </a>
              <a href="#pricing" className="text-gray-300 hover:bg-gold-gradient hover:bg-clip-text hover:text-transparent block px-3 py-2 text-base font-medium">
                Pricing
              </a>
              <a href="#contact" className="text-gray-300 hover:bg-gold-gradient hover:bg-clip-text hover:text-transparent block px-3 py-2 text-base font-medium">
                Contact
              </a>
              <a 
                href="https://frontend-nine-sigma-24.vercel.app/menu/3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:bg-gold-gradient hover:bg-clip-text hover:text-transparent block px-3 py-2 text-base font-medium"
              >
                Live Demo
              </a>
              <div className="px-3 py-2">
                <Button className="bg-gold-gradient hover:opacity-90 text-black font-semibold px-6 py-2 rounded-full w-full">
                  Book Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
