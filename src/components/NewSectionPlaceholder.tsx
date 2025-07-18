import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const NewSectionPlaceholder = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side content - takes 1 column on md and above */}
        <div className="text-center md:text-left md:col-span-1">
          <h2 className="text-4xl md:text-6xl font-bold mb-5 text-white">
            What does <span className="bg-gold-gradient bg-clip-text text-transparent">AR</span> do?
          </h2>
          
          <p className="text-2xl text-gray-300 mb-8 max-w-md md:max-w-none mx-auto md:mx-0">
            With AR, customers can view visually appealing and<br />realistic images, as well as 3D models, of dishes from <br />their smartphone's camera.
          </p>
          
          {/* Removed QR Code and Button */}
        </div>
        
        {/* Right side video - takes 1 column on md and above */}
        <div className="flex justify-center md:justify-start md:col-span-1" style={{ marginLeft: '-120px' }}> {/* Set horizontal offset to -120px */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ maxWidth: '760px' }}> {/* Set maxWidth to 760px */}
             <video
              ref={videoRef}
              className="w-full h-auto object-cover"
              autoPlay
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

      {/* Removed Controls for demonstration */}

    </section>
  );
}; 