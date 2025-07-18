import { Eye, FileText, TrendingUp, Heart, Users, Target } from 'lucide-react';

export const WhyDine3D = () => {
  const features = [
    {
      icon: Eye,
      title: "Engage Instantly",
      description: "Customers can touch, zoom, and rotate dishes for a full 3D experience."
    },
    {
      icon: FileText,
      title: "Simplify Ordering",
      description: "Clear visuals make decisions quicker and more confident."
    },
    {
      icon: TrendingUp,
      title: "Drive Sales Up",
      description: "Highlight specials with menu engineering and make your seasonal or limited-time offers irresistible"
    },
    {
      icon: Heart,
      title: "Impress Instantly",
      description: "Create a buzz—guests love to share their dining experience."
    },
    {
      icon: Users,
      title: "Optimised Staff",
      description: "Free up your staff from explaining dishes repeatedly."
    },
    {
      icon: Target,
      title: "Competitive Edge",
      description: "Stand out from competitors with innovative technology."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gold-gradient bg-clip-text text-transparent">
            Why Dine3D?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group bg-black border ${index === 1 || index === 3 || index === 5 ? 'border-yellow-400' : 'border-gray-800'} rounded-2xl p-8 hover:border-yellow-400/40 transition-all duration-300 text-center`}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
