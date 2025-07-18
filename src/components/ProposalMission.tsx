import { Target, Eye } from 'lucide-react';
import { useRestaurant } from '../hooks/useRestaurant';

export const ProposalMission = () => {
  const restaurant = useRestaurant();
  
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <Target className="w-12 h-12 golden-text" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-8 golden-gradient-text">
          🎯 Our Mission
        </h2>
        
        <div className="bg-gray-900/50 backdrop-blur-sm border golden-border rounded-2xl p-12 mb-8">
          <blockquote className="text-3xl md:text-4xl font-light leading-relaxed text-center italic">
            "<span className="golden-gradient-text font-bold">Elevating {restaurant.name}'s dining experience to better serve customers with live 3D menus.</span>"
          </blockquote>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          We turn traditional menus into engaging 3D experiences, allowing diners to preview, rotate, and explore each dish in 3D before they order, boosting guest satisfaction, speeding up decisions, and driving higher check averages.
        </p>
        
        {/* AR Demo Image */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/lovable-uploads/a901ffad-c526-4054-823d-0f6b239a0e16.png"
              alt="AR Menu Demo - Interactive food visualization on mobile device"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
