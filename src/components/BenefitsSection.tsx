import React, { useState, useEffect, useRef } from 'react';

// Adding a comment to potentially trigger a refresh
export const BenefitsSection = () => {
  const benefits = [
    {
      value: "+19%",
      label: "Conversions",
      subtext: "More guests order after viewing 3D menus",
      url: "https://brandxr.io/",
    },
    {
      value: "+30%",
      label: "Order Value",
      subtext: "Customers spend more with visual previews",
      url: "https://blog.easyeat.ai/",
    },
    {
      value: "2x",
      label: "Faster Decisions",
      subtext: "Guests choose quicker with AR previews",
      url: "https://www.program-ace.com/",
    },
    {
      value: "+30%",
      label: "Satisfaction",
      subtext: "Guests love the interactive experience",
      url: "#",
    },
  ];
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState(benefits.map(() => 0));
  const intervalsRef = useRef([]);
  const animationStarted = useRef(false); // Add ref to track if animation has started
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  useEffect(() => {
    // Only run animation if section is visible and animation hasn't started yet
    if (isVisible && !animationStarted.current) {
        animationStarted.current = true; // Mark animation as started
        intervalsRef.current.forEach(interval => clearInterval(interval)); // Clear any existing intervals
        intervalsRef.current = [];
      benefits.forEach((benefit, index) => {
        const targetValue = parseFloat(benefit.value.replace(/[^0-9.]/g, ''));
        const duration = 2000; // Animation duration in milliseconds (Increased from 1000)
        const intervalTime = 30; // Update interval
        let currentValue = 0;
        const increment = (targetValue / duration) * intervalTime;
        const interval = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            setAnimatedValues(prevValues => {
              const newValues = [...prevValues];
              newValues[index] = targetValue;
              return newValues;
            });
            clearInterval(interval);
          } else {
            setAnimatedValues(prevValues => {
              const newValues = [...prevValues];
              newValues[index] = currentValue;
              return newValues;
            });
          }
        }, intervalTime);
        intervalsRef.current[index] = interval;
      });
    }
      return () => {
          intervalsRef.current.forEach(interval => clearInterval(interval));
      };
  }, [isVisible]); // Remove benefits from dependencies
  return (
    <section ref={sectionRef} id="benefits" className="py-20 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          Why Restaurants <span className="bg-gold-gradient bg-clip-text text-transparent">Love AR Menus</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center mt-8">
          {benefits.map((benefit, index) => {
            const isPercentage = benefit.value.includes('%');
            const isTimes = benefit.value.includes('x');
            return (
              <div key={index} className="flex flex-col items-center justify-center group">
                <span
                  className="text-4xl md:text-5xl font-bold mb-2 bg-gold-gradient bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105"
                >
                  {isPercentage ? `+${animatedValues[index].toFixed(0)}%` : isTimes ? `${animatedValues[index].toFixed(0)}x` : animatedValues[index].toFixed(0)}
                </span>
                <p className="text-xl font-semibold text-white mb-1">
                  {benefit.label}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {benefit.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}; 