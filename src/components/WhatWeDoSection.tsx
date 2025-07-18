import { Camera, Cpu, Globe, TestTube } from 'lucide-react';
import { useRestaurant } from '../hooks/useRestaurant';

export const WhatWeDoSection = () => {
  const restaurant = useRestaurant();
  const phases = [
    {
      phase: "1",
      action: "Premium food photography + 3D capture",
      outcome: "Every dish becomes a visual masterpiece",
      icon: Camera,
      color: "bg-blue-500"
    },
    {
      phase: "2",
      action: "AR development + speed optimization",
      outcome: "Lightning-fast AR menus that work on any smartphone",
      icon: Cpu,
      color: "bg-purple-500"
    },
    {
      phase: "3",
      action: "Custom web platform + QR integration",
      outcome: "Seamless guest experience with zero app downloads",
      icon: Globe,
      color: "bg-green-500"
    },
    {
      phase: "4",
      action: "Staff training + launch support",
      outcome: "Team expertise = confident guest service",
      icon: TestTube,
      color: "golden-gradient"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 golden-gradient-text">
            {restaurant.name}'s 3D Transformation 
          </h2>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 golden-gradient-text">
            – 4 Proven Steps
          </h2>
        </div>
        
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-3 gap-4 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-bold golden-text mb-2">Step</h3>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold golden-text mb-2">We Handle Everything</h3>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold golden-text mb-2">You See Results</h3>
          </div>
        </div>
        
        {/* Phases */}
        <div className="space-y-6">
          {phases.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:golden-border transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  {/* Phase */}
                  <div className="text-center">
                    <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                      <span className="text-white font-bold text-xl">{item.phase}</span>
                    </div>
                    <span className="text-gray-400 text-sm md:hidden">Phase {item.phase}</span>
                  </div>
                  
                  {/* Action */}
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-2">
                      <IconComponent className="w-6 h-6 golden-text mr-2" />
                      <span className="md:hidden text-gray-400 text-sm">Action:</span>
                    </div>
                    <p className="text-white text-lg font-medium">{item.action}</p>
                  </div>
                  
                  {/* Outcome */}
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-2">
                      <span className="md:hidden text-gray-400 text-sm mr-2">Outcome:</span>
                    </div>
                    <p className="text-gray-300 text-lg">{item.outcome}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Photoshoot Process Image */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-8 golden-text">Dine3D's AR & 3D Photoshoot Process</h3>
          <div className="relative max-w-4xl mx-auto">
            <img 
              src="/photoshoot-process.png" 
              alt="Dine3D AR and 3D Photoshoot Process - Professional food photography setup with lighting equipment and 3D scanning technology" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Our state-of-the-art photography studio equipped with professional lighting, 3D scanning technology, and specialized equipment to capture every detail of your dishes with photorealistic precision.
          </p>
        </div>
      </div>
    </section>
  );
};
