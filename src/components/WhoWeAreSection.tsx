import { Users, MapPin, Award, User, Camera, Palette, Globe, BarChart3, Mail, Phone, Linkedin } from 'lucide-react';
import { useRestaurant } from '../hooks/useRestaurant';

export const WhoWeAreSection = () => {
  const restaurant = useRestaurant();
  const skills = [
    { icon: Camera, label: "F&B Photography", emoji: "�" },
    { icon: Palette, label: "3D Modeling", emoji: "🎨" },
    { icon: Globe, label: "WebAR Development", emoji: "🌐" },
    { icon: BarChart3, label: "Analytics & Insights", emoji: "📊" }
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Company Info */}
        <div className="bg-gray-900/50 backdrop-blur-sm border golden-border rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 golden-text mr-2" />
              <span className="text-xl font-semibold text-white">{restaurant.fullAddress}</span>
            </div>
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 golden-text mr-2" />
              <span className="text-xl font-semibold text-white">Funded by Indian School of Business (ISB)</span>
            </div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our team is excited to partner with {restaurant.name} to create an innovative dining experience through cutting-edge <span className="golden-gradient-text font-semibold">3D visualization, AR technology, and web development</span>.
            </p>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <Users className="w-12 h-12 golden-text" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gold-gradient bg-clip-text text-transparent">
            👥 Meet Our Team
          </h2>
        </div>
        
        {/* Team Profiles */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold golden-gradient-text mb-8">Your Project Team</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Founder */}
              <div className="bg-black/50 border golden-border rounded-xl p-6 hover:border-opacity-80 transition-all duration-300">
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/founder-lakshay.jpg" 
                    alt="LakshyamChetal - Founder" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Lakshyam Chetal</h4>
                <p className="golden-gradient-text font-semibold mb-3">Founder & CEO</p>
                <p className="text-gray-300 text-sm leading-relaxed">5+ years in Food Tech & AR Development. Led 50+ restaurant digital transformations.</p>
              </div>
              
              {/* Lead Developer */}
              <div className="bg-black/50 border golden-border rounded-xl p-6 hover:border-opacity-80 transition-all duration-300">
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/aneesh.jpeg" 
                    alt="Aneesh Gopalakrishnan - CBO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Aneesh Gopalakrishnan</h4>
                <p className="golden-gradient-text font-semibold mb-3">CBO</p>
                <p className="text-gray-300 text-sm leading-relaxed">Strategic business operations leader driving growth and operational excellence. Extensive experience in scaling technology solutions.</p>
              </div>
              
              {/* Tech Head */}
              <div className="bg-black/50 border golden-border rounded-xl p-6 hover:border-opacity-80 transition-all duration-300">
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/karman.png" 
                    alt="Karman Singh - Tech Head" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Karman Singh</h4>
                <p className="golden-gradient-text font-semibold mb-3">Tech Head</p>
                <p className="text-gray-300 text-sm leading-relaxed">Full-stack AR and experience developer specializing in immersive web technologies and cutting-edge augmented reality solutions.</p>
              </div>
              
              {/* Photographer */}
              <div className="bg-black/50 border golden-border rounded-xl p-6 hover:border-opacity-80 transition-all duration-300">
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/abushek.png" 
                    alt="Abhishek Bansal - Professional 3D Photographer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Abhishek Bansal</h4>
                <p className="golden-gradient-text font-semibold mb-3">Professional 3D Photographer</p>
                <p className="text-gray-300 text-sm leading-relaxed">FMCG Head Food Photography with 5+ years experience. Specializes in creating stunning visual content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
