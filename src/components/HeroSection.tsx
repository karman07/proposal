import { Button } from '@/components/ui/button';

export const HeroSection = () => {

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <section id="demo" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16 bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold-gradient rounded-full opacity-10 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold-gradient rounded-full opacity-5 blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left side content (Text and Buttons) */}
        <div className="text-center md:text-left">
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-poppins">
           Bring Your Menu to Life with
            <br />
            <span className="bg-gold-gradient bg-clip-text text-transparent">
            Interactive 3D & AR Experiences
            </span>
          </h1>
          
          {/* Subtext */}
          <p className="text-lg md:text-xl text-[#EAEAEA] mb-10 max-w-2xl md:max-w-none mx-auto md:mx-0 leading-relaxed font-inter animate-fade-in delay-300">
          Engage diners instantly with interactive, lifelike food previews — boosting sales and customer satisfaction.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center mb-16 animate-fade-in delay-500">
            <Button 
              size="lg"
              className="bg-gold-gradient text-black font-semibold rounded-full px-8 py-6 text-lg transition-all duration-300 hover:opacity-90"
              onClick={scrollToBottom}
            >
              Book a Free Demo
            </Button>
            <a 
              href="https://frontend-nine-sigma-24.vercel.app/menu/3" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="bg-gold-gradient text-black font-semibold rounded-full px-8 py-6 text-lg transition-all duration-300 hover:opacity-90"
              >
                Try Live Demo
              </Button>
            </a>
          </div>
        </div>
        
        {/* Right side (Screenshot Image) */}
        <div className="mt-8 md:mt-0 relative animate-fade-in delay-700 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[320px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img 
              src="/lovable-uploads/a901ffad-c526-4054-823d-0f6b239a0e16.png" 
              alt="AR Menu Preview" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
