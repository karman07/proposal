import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const WebARSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="how-it-works" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side content */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-6">
            {/* Logo */}
            <h2 className="text-5xl md:text-5.5xl font-bold bg-gold-gradient bg-clip-text text-transparent">
              HOW Dine3D Works?
            </h2>
          </div>
          
          <ul className="text-xl text-gray-300 mb-9 max-w-md md:max-w-none mx-auto md:mx-0 list-disc list-inside space-y-2">
            <li>Access menus via QR codes or shareable links.</li>
            <li>View stunning 3D & AR dish models directly in your browser — no app download needed.</li>
            <li>Interact by rotating, zooming, and viewing dishes in real size through smartphone cameras.</li>
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center md:justify-start">
            {/* QR Code */}
            <div className="w-48 h-48 border border-white p-2 rounded-lg flex items-center justify-center">
              <img src="/qrcode.png" alt="WebAR QR Code" className="w-full h-full object-contain" />
            </div>
            
            {/* Try Now Button */}
            <Button className="bg-gold-gradient hover:opacity-90 text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300">
              Try Now
            </Button>
          </div>
        </div>
        
        {/* Right side video */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              className="w-full h-auto object-cover"
              autoPlay={true}
              loop
              muted
              playsInline
            >
              <source src="/landing_video.mp4" type="video/mp4" />
              <source src="/landing_video.mov" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}; 
