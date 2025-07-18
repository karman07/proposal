import { useRef, useEffect, useState } from 'react';

export const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const steps = [
    {
      number: "01",
      title: "Choose Your Dishes",
      description: "Select the menu items you want to showcase in 3D and AR. We'll handle the rest."
    },
    {
      number: "02", 
      title: "We 3D Model & AR Map Them",
      description: "Our expert team creates photorealistic 3D models and AR experiences for each dish."
    },
    {
      number: "03",
      title: "You Launch & Impress",
      description: "Deploy your new interactive menu and watch customer engagement soar."
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    
    if (!section || !video) return;

    let timeoutId: NodeJS.Timeout | null = null;
    let hasTriggered = false;

    // Prevent any autoplay behavior
    const preventAutoplay = () => {
      if (video && !hasTriggered) {
        video.pause();
        video.currentTime = 0;
        setIsVideoPlaying(false);
      }
    };

    // Add event listeners to prevent autoplay
    video.addEventListener('play', preventAutoplay);
    video.addEventListener('loadstart', preventAutoplay);
    video.addEventListener('loadeddata', preventAutoplay);
    
    // Ensure video is paused and at start initially
    video.pause();
    video.currentTime = 0;
    setIsVideoPlaying(false);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Clear any existing timeout
            if (timeoutId) {
              clearTimeout(timeoutId);
            }
            
            // Reset video to start and pause it
            hasTriggered = false;
            video.currentTime = 0;
            video.pause();
            setIsVideoPlaying(false);
            
            // Wait exactly 0.6 seconds before starting the video
            timeoutId = setTimeout(() => {
              hasTriggered = true;
              video.removeEventListener('play', preventAutoplay);
              video.removeEventListener('loadstart', preventAutoplay);
              video.removeEventListener('loadeddata', preventAutoplay);
              
              video.play().then(() => {
                setIsVideoPlaying(true);
              }).catch(console.error);
            }, 600);
          } else {
            // Clear timeout if user leaves section before delay completes
            if (timeoutId) {
              clearTimeout(timeoutId);
              timeoutId = null;
            }
            hasTriggered = false;
            video.pause();
            video.currentTime = 0;
            setIsVideoPlaying(false);
            
            // Re-add event listeners to prevent autoplay
            video.addEventListener('play', preventAutoplay);
            video.addEventListener('loadstart', preventAutoplay);
            video.addEventListener('loadeddata', preventAutoplay);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      video.removeEventListener('play', preventAutoplay);
      video.removeEventListener('loadstart', preventAutoplay);
      video.removeEventListener('loadeddata', preventAutoplay);
      observer.unobserve(section);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gold-gradient bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Getting started with Dine3D is simple. We handle the technical complexity while you focus on your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gold-gradient z-0"></div>
              )}
              
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-2xl">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video demonstration */}
        <div className="text-center">
          <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              className="w-full h-auto object-cover"
              loop
              muted
              playsInline
              preload="metadata"
              onLoadedMetadata={() => {
                if (videoRef.current) {
                  videoRef.current.currentTime = 0;
                  videoRef.current.pause();
                }
              }}
              onCanPlay={() => {
                if (videoRef.current && !isVideoPlaying) {
                  videoRef.current.pause();
                  videoRef.current.currentTime = 0;
                }
              }}
            >
              <source src="/final animation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};
