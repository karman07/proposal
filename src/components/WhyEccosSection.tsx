import { Lightbulb, X, Check } from 'lucide-react';
import { useRestaurant } from '../hooks/useRestaurant';
import { useState } from 'react';

export const WhyEccosSection = () => {
  const restaurant = useRestaurant();
  const [videoLoaded, setVideoLoaded] = useState([false, false, false, false]);

  const handleLoaded = (index: number) => {
    setVideoLoaded((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

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
    }
  ];

  const renderVideo = (src: string, index: number) => (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
      {!videoLoaded[index] && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 animate-pulse z-10">
          <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <video
        className="w-full h-auto object-contain"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => handleLoaded(index)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Intro */}
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
            While other restaurants in the market compete on taste alone, {restaurant.name} can lead with AR‑powered 3D menus...
          </p>
        </div>

        {/* Problem-Solution Grid */}
        <div className="grid gap-4">
          {problems.map((item, index) => (
            <div key={index} className="bg-gray-900/30 border border-gray-700 rounded-lg p-4">
              <div className="grid md:grid-cols-3 gap-4 items-center">
                <div className="flex items-center space-x-3">
                  <X className="w-5 h-5 text-red-400" />
                  <p className="text-base text-gray-300">{item.problem}</p>
                </div>
                <div className="flex justify-center">
                  <div className="w-6 h-6 bg-gold-gradient rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">→</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <div>
                    <h4 className="text-lg font-semibold golden-gradient-text mb-1">
                      {item.solution}
                    </h4>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Video Section */}
        <div className="mt-32 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-16 golden-gradient-text">Our Portfolio in Action</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {renderVideo('/new.mov', 0)}
            {renderVideo('/new2.mov', 1)}
            {renderVideo('/new3.mov', 2)}
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

        {/* How Dine3D Works */}
        <div className="mt-32">
          <h3 className="text-4xl md:text-5xl font-bold mb-16 golden-gradient-text text-center">HOW Dine3D Works?</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* Steps */}
              {[
                "Access menus via QR codes or shareable links.",
                "View stunning 3D & AR dish models directly in your browser — no app download needed.",
                "Interact by rotating, zooming, and viewing dishes in real size through smartphone cameras."
              ].map((text, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="w-2 h-2 golden-gradient rounded-full mt-3"></div>
                  <p className="text-lg text-gray-300">{text}</p>
                </div>
              ))}
              {/* QR Code */}
              <div className="mt-8 flex justify-center">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center">
                  <h4 className="text-lg font-bold text-white mb-4">WebAR QR Code</h4>
                  <div className="w-32 h-32 bg-white rounded-xl mx-auto flex items-center justify-center">
                    <img src="/qrcode.png" alt="QR Code" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
            {/* Demo Video */}
            <div className="relative">
              {!videoLoaded[3] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 animate-pulse z-10 rounded-2xl">
                  <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              <video
                className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                autoPlay
                loop
                muted
                playsInline
                onLoadedData={() => handleLoaded(3)}
              >
                <source src="/Steda.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Why Restaurants Love AR */}
        <div className="mt-32">
          <h3 className="text-4xl md:text-5xl font-bold mb-16 golden-gradient-text text-center">Why Restaurants Love AR Menus</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { value: "+30%", label: "Order Value", desc: "Customers spend more with visual previews" },
              { value: "2x", label: "Faster Decisions", desc: "Guests choose quicker with AR previews" },
              { value: "+30%", label: "Satisfaction", desc: "Guests love the interactive experience" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:golden-border transition-all duration-300">
                <div className="text-4xl font-bold golden-gradient-text mb-2">{stat.value}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{stat.label}</h4>
                <p className="text-gray-300 text-sm">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
