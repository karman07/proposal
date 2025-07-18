import { FileText, Calendar, User } from 'lucide-react';
import { useRestaurant } from '../hooks/useRestaurant';

export const ProposalHeader = () => {
  const restaurant = useRestaurant();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16 bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold-gradient rounded-full opacity-10 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold-gradient rounded-full opacity-5 blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Document Icon */}
        <div className="flex justify-center mb-8">
          <FileText className="w-16 h-16 golden-text" />
        </div>
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-poppins">
          📄 Proposal for Strategic Partnership
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 golden-gradient-text">
          AR‑Enabled 3D Menu at {restaurant.name}
        </h2>
        
        {/* Prepared by section */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <p className="text-gray-300 mb-2">Prepared by:</p>
              <p className="text-white font-semibold">Dine3D.com</p>
              <p className="text-golden-text">(www.dine3d.com)</p>
            </div>
            <div>
              <p className="text-gray-300 mb-2">Prepared for:</p>
              <p className="text-white font-semibold">{restaurant.name}</p>
              <p className="text-gray-400 text-sm mt-1">({restaurant.location})</p>
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-center">
            <Calendar className="w-5 h-5 mr-2 text-gray-400" />
            <span className="text-gray-300">Date: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
