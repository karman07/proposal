import { DollarSign, Star, Gift, CheckCircle } from 'lucide-react';
import { useRestaurant } from '../hooks/useRestaurant';

export const PricingSection = () => {
  const restaurant = useRestaurant();
  const pricingData = [
    {
      category: "Setup per Dish",
      standardPrice: `₹${restaurant.pricing.setupFirst40.standard.toLocaleString()}`,
      eccosPrice: `₹${restaurant.pricing.setupFirst40.partner.toLocaleString()}`,
      note: "(first 40 dishes)"
    },
    {
      category: "40 Dishes Onwards",
      standardPrice: `₹${restaurant.pricing.setupAfter40.standard.toLocaleString()}`,
      eccosPrice: `₹${restaurant.pricing.setupAfter40.partner.toLocaleString()}`,
      note: ""
    },
    {
      category: "Monthly Hosting",
      standardPrice: `₹${restaurant.pricing.monthlyHosting.standard.toLocaleString()}`,
      eccosPrice: `₹${restaurant.pricing.monthlyHosting.partner.toLocaleString()}`,
      note: ""
    },
    {
      category: "Free Views / Month",
      standardPrice: restaurant.pricing.freeViews.standard.toLocaleString(),
      eccosPrice: restaurant.pricing.freeViews.partner.toLocaleString(),
      note: ""
    },
    {
      category: "Extra Views",
      standardPrice: `₹${restaurant.pricing.extraViews.standard}/view`,
      eccosPrice: `₹${restaurant.pricing.extraViews.partner}/view`,
      note: ""
    }
  ];

  const benefits = [
    "50% off setup",
    "Priority feature access",
    "Co-branded promotion options"
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <DollarSign className="w-12 h-12 golden-text" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 golden-gradient-text">
            💰 Special Strategic Pricing for {restaurant.name}
          </h2>
        </div>
        
        {/* Pricing Table */}
        <div className="bg-gray-900/50 backdrop-blur-sm golden-border rounded-2xl p-8 mb-8">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 mb-6 pb-4 border-b border-gray-700">
            <div className="text-center">
              <h3 className="text-xl font-bold golden-text">Category</h3>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-400">Standard Price</h3>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-green-400">{restaurant.name} Partner Price</h3>
            </div>
          </div>
          
          {/* Table Content */}
          <div className="space-y-4">
            {pricingData.map((item, index) => (
              <div 
                key={index}
                className="grid grid-cols-3 gap-4 items-center py-4 border-b border-gray-800 last:border-b-0"
              >
                <div className="text-center">
                  <p className="text-white font-medium">{item.category}</p>
                  {item.note && (
                    <p className="text-gray-400 text-sm mt-1">{item.note}</p>
                  )}
                </div>
                <div className="text-center">
                  <span className="text-gray-300 text-lg line-through">{item.standardPrice}</span>
                </div>
                <div className="text-center">
                  <span className="text-green-400 text-lg font-bold">{item.eccosPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pricing Note */}
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm italic">
            Note: All prices are negotiable based on final scope and volume.
          </p>
        </div>
        
        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 text-center hover:border-green-400/60 transition-all duration-300"
            >            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-400 mr-2" />
              <Gift className="w-8 h-8 golden-text" />
            </div>
              <p className="text-white font-semibold text-lg">{benefit}</p>
            </div>
          ))}
        </div>
        
        {/* Special Offer Highlight */}
        <div className="golden-gradient/20 border-2 golden-border rounded-2xl p-8 text-center">
          <Star className="w-12 h-12 golden-text mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Limited Time Partnership Offer</h3>
          <p className="text-lg text-gray-300 mb-6">
            Get started with {restaurant.name}'s exclusive pricing and become our premier restaurant partner in your area.
          </p>
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-auto object-cover"
                autoPlay={true}
                loop
                muted
                playsInline
              >
                <source src="/final animation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Partnership Benefits Section */}
        <div className="mt-16 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-400/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold golden-gradient-text mb-4">
              🎁 Exclusive Launch Month Perks
            </h3>
            <p className="text-gray-300 text-lg">
              Two valuable services included FREE for the first month!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-green-400/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎬</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-green-400 mb-3">
                    FREE Social Media Boost
                  </h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• 2 professional reels featuring your dishes</li>
                    <li>• Influencer collaboration for maximum reach</li>
                    <li>• Your social media accounts tagged for exposure</li>
                    <li>• Professional content creation for brand building</li>
                  </ul>
                  <div className="mt-4 text-sm text-green-400 font-medium">
                    Value: ₹15,000 | FREE for first month
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-green-400/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌐</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-green-400 mb-3">
                    FREE Fully Customizable Landing Page
                  </h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Your logo, colors, imagery and brand experience</li>
                    <li>• Google Maps with navigation, live hours, ratings & reviews</li>
                    
                    <li>• One-click “View in 3D” access from anywhere</li>
                    <li>• Perfect for Instagram bio links</li>
                  </ul>
                  <div className="mt-4 text-sm text-green-400 font-medium">
                    Value: ₹8,000 | FREE FOREVER
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
  <div className="flex flex-col items-center space-y-2 bg-green-400/10 border border-green-400/30 rounded-full px-6 py-3">
    <div className="flex items-center space-x-2">
      <span className="text-green-400 font-semibold">
        Social Media Boost: ₹15,000 FREE (1st month) + Landing Page: ₹8,000 FREE (Forever)
      </span>
      <span className="text-2xl">🎉</span>
    </div>
    <div>
      <span className="text-green-400 font-semibold">
        💰 Total Value: ₹23,000 — Yours FREE
      </span>
    </div>
              
            </div>
            <p className="text-gray-400 text-sm mt-2">
              *Social media services available as paid services after the first month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
