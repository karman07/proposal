export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Our food sales increased by 35% in the first month after implementing Dine3D. Customers love seeing their food before ordering!",
      author: "Maria Rodriguez",
      restaurant: "Bella Vista Italian",
      location: "New York, NY"
    },
    {
      quote: "The AR menu has become our biggest talking point. Guests are taking photos and videos, giving us incredible social media exposure.",
      author: "James Chen",
      restaurant: "Fusion Kitchen",
      location: "San Francisco, CA"
    },
    {
      quote: "Dine3D transformed our customer experience. We're seeing longer table times and higher order values. It's a game-changer.",
      author: "Sarah Williams",
      restaurant: "The Golden Fork",
      location: "Miami, FL"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gold-gradient bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join hundreds of restaurants already using Dine3D to enhance their customer experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-black border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400/40 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="bg-gold-gradient bg-clip-text text-transparent text-4xl mb-4">"</div>
                <p className="text-gray-300 leading-relaxed italic">
                  {testimonial.quote}
                </p>
              </div>
              
              <div className="border-t border-gray-700 pt-6">
                <h4 className="bg-gold-gradient bg-clip-text text-transparent font-bold text-lg">
                  {testimonial.author}
                </h4>
                <p className="text-white font-medium">
                  {testimonial.restaurant}
                </p>
                <p className="text-gray-400 text-sm">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
