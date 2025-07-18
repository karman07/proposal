import { CheckCircle, Clock, FileText, Phone, Mail, MapPin } from 'lucide-react';
import { useRestaurant } from '../hooks/useRestaurant';

export const SignOffSection = () => {
  const restaurant = useRestaurant();
  
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Let's Get Started */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gold-gradient bg-clip-text text-transparent">
            ✅ Ready to Transform Your Menu?
          </h2>
          <div className="bg-gray-900/50 backdrop-blur-sm border golden-border rounded-2xl p-8 mb-8">
            <p className="text-xl text-gray-300 mb-4">
              Let's schedule a consultation to discuss your restaurant's specific needs and create a customized AR menu solution.
            </p>
            <p className="text-lg text-white">
              We'll handle everything from planning to deployment - making your menu come to life has never been easier.
            </p>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <FileText className="w-8 h-8 golden-text" />
            </div>
            <h3 className="text-2xl font-bold golden-gradient-text mb-6">Get In Touch</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Primary Contact */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Primary Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 golden-text mr-3" />
                  <a href="tel:+918427707595" className="text-gray-300 hover:golden-text transition-colors">918427707595</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 golden-text mr-3" />
                  <a href="mailto:info@dine3d.com" className="text-gray-300 hover:golden-text transition-colors">info@dine3d.com</a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 golden-text mr-3" />
                  <span className="text-gray-300">Bengaluru, India</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
                  <a 
                    href="tel:+918427707595" 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                  >
                    <span className="text-lg">📞</span>
                    <span className="text-sm">Call</span>
                  </a>
                  <a 
                    href="mailto:info@dine3d.com" 
                    className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                  >
                    <span className="text-lg">✉️</span>
                    <span className="text-sm">Email Us</span>
                  </a>
                  <a 
                    href="https://wa.me/918427707595" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                  >
                    <span className="text-lg">💬</span>
                    <span className="text-sm">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project Timeline */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Next Steps</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Initial consultation: 30 minutes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Project timeline: 5 weeks</span>
                </div>
                <div className="flex items-center">
                  <FileText className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Proposal validity: 7 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Project Summary */}
        <div className="golden-gradient/20 border-2 golden-border rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Partnership Proposal Summary</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">AR-enabled 3D menu implementation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">Professional food photography & 3D modeling</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">Mobile-optimized web experience</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">5-week delivery timeline</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">50% partnership discount</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">Ongoing support & maintenance</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-lg text-white font-semibold">
              Ready to revolutionize your dining experience with {restaurant.name} + Dine3D?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
