import { Lightbulb, X, Check } from 'lucide-react';
import { useRestaurant } from '../hooks/useRestaurant';

export const WhyEccosSection = () => {
  const restaurant = useRestaurant();
  const problems = [
  
    {
      problem: "Guests can't visualize portions → dissatisfaction & returns",
      solution: "Portion-Perfect Confidence",
      description: "3D previews eliminate guesswork—guests order with certainty.",
      icon: "�️"
    },
    {
      problem: "Menu confusion → wrong orders & complaints",
      solution: "Fewer Order Mistakes",
      description: "Instant visual clarity means flawless orders every time.",
      icon: "❓"
    },
    {
      problem: "Traditional menus → no word‑of‑mouth ",
      solution: "Built-In Social Marketing",
      description: "3D dishes get tagged and talked about across social media = free marketing",
      icon: "😴"
    },
   





  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <Lightbulb className="w-12 h-12 golden-text" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 golden-gradient-text">
            💡 Why {restaurant.name} + Dine3D?
          </h2>
        </div>

        {/* Competitive Advantage */}
        <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold golden-gradient-text mb-6 text-center">
            {restaurant.name}'s Competitive Advantage
          </h3>
          <p className="text-lg text-gray-300 text-center leading-relaxed">
            While other restaurants in the market compete on taste alone, {restaurant.name} can lead with AR‑powered 3D menus. Attract food bloggers, delight influencers, and give families an unforgettable, shareable dining experience.















          </p>
        </div>

        {/* Problem-Solution Grid */}
        <div className="grid gap-4">
          {problems.map((item, index) => (
            <div key={index} className="bg-gray-900/30 border border-gray-700 rounded-lg p-4">
              <div className="grid md:grid-cols-3 gap-4 items-center">
                {/* Problem Side */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-base text-gray-300 leading-relaxed">
                      {item.problem}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-6 h-6 bg-gold-gradient rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">→</span>
                  </div>
                </div>

                {/* Solution Side */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold golden-gradient-text mb-1">
                      {item.solution}
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Video demonstration */}
        <div className="mt-32 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-16 golden-gradient-text">Our Portfolio in Action</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-auto object-contain"
                autoPlay={true}
                loop
                muted
                playsInline
              >
                <source src="/new.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-auto object-contain"
                autoPlay={true}
                loop
                muted
                playsInline
              >
                <source src="/new2.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-auto object-contain"
                autoPlay={true}
                loop
                muted
                playsInline
              >
                <source src="/new3.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Why Dine3D Section */}
        <div className="mt-32">
          <h3 className="text-4xl md:text-5xl font-bold mb-16 golden-gradient-text text-center">With Dine3D</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:golden-border transition-all duration-300">
              <div className="text-3xl mb-4">👆</div>
              <h4 className="text-xl font-bold text-white mb-3">Engage Instantly</h4>
              <p className="text-gray-300">Customers can touch, zoom, and rotate dishes for a full 3D experience.</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:golden-border transition-all duration-300">
              <div className="text-3xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-white mb-3">Simplify Ordering</h4>
              <p className="text-gray-300">Clear visuals make decisions quicker and more confident.</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:golden-border transition-all duration-300">
              <div className="text-3xl mb-4">📈</div>
              <h4 className="text-xl font-bold text-white mb-3">Drive Sales Up</h4>
              <p className="text-gray-300">Highlight specials with menu engineering and make your seasonal or limited-time offers irresistible</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:golden-border transition-all duration-300">
              <div className="text-3xl mb-4">✨</div>
              <h4 className="text-xl font-bold text-white mb-3">Impress Instantly</h4>
              <p className="text-gray-300">Create a buzz—guests love to share their dining experience.</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:golden-border transition-all duration-300">
              <div className="text-3xl mb-4">👨‍💼</div>
              <h4 className="text-xl font-bold text-white mb-3">Optimised Staff</h4>
              <p className="text-gray-300">Free up your staff from explaining dishes repeatedly.</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:golden-border transition-all duration-300">
              <div className="text-3xl mb-4">🏆</div>
              <h4 className="text-xl font-bold text-white mb-3">Competitive Edge</h4>
              <p className="text-gray-300">Stand out from competitors with innovative technology.</p>
            </div>
          </div>
        </div>

        {/* HOW Dine3D Works Section */}
        <div className="mt-32">
          <h3 className="text-4xl md:text-5xl font-bold mb-16 golden-gradient-text text-center">HOW Dine3D Works?</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 golden-gradient rounded-full mt-3"></div>
                <p className="text-lg text-gray-300">Access menus via QR codes or shareable links.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 golden-gradient rounded-full mt-3"></div>
                <p className="text-lg text-gray-300">View stunning 3D & AR dish models directly in your browser — no app download needed.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 golden-gradient rounded-full mt-3"></div>
                <p className="text-lg text-gray-300">Interact by rotating, zooming, and viewing dishes in real size through smartphone cameras.</p>
              </div>
              
              <div className="mt-8 flex justify-center">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center">
                  <h4 className="text-lg font-bold text-white mb-4">WebAR QR Code</h4>
                  <div className="w-32 h-32 bg-white rounded-xl mx-auto flex items-center justify-center">
                    <img src="/qrcode.png" alt="QR Code" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full max-w-sm mx-auto">
                <video
                  className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                  autoPlay={true}
                  loop
                  muted
                  playsInline
                >
                  <source src="/Steda.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Why Restaurants Love AR Menus Section */}
        <div className="mt-32">
          <h3 className="text-4xl md:text-5xl font-bold mb-16 golden-gradient-text text-center">Why Restaurants Love AR Menus</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:golden-border transition-all duration-300">
              <div className="text-4xl font-bold golden-gradient-text mb-2">+30%</div>
              <h4 className="text-lg font-semibold text-white mb-2">Order Value</h4>
              <p className="text-gray-300 text-sm">Customers spend more with visual previews</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:golden-border transition-all duration-300">
              <div className="text-4xl font-bold golden-gradient-text mb-2">2x</div>
              <h4 className="text-lg font-semibold text-white mb-2">Faster Decisions</h4>
              <p className="text-gray-300 text-sm">Guests choose quicker with AR previews</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:golden-border transition-all duration-300">
              <div className="text-4xl font-bold golden-gradient-text mb-2">+30%</div>
              <h4 className="text-lg font-semibold text-white mb-2">Satisfaction</h4>
              <p className="text-gray-300 text-sm">Guests love the interactive experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
