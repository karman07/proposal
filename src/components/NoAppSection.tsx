import { Button } from '@/components/ui/button';

export const NoAppSection = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side (Text Content) */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gold-gradient bg-clip-text text-transparent">
            No App Needed. Just Tap & Experience.
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Our custom-built 3D and AR menus are designed specifically for mobile browsers—no app download required. Diners simply scan a QR code or tap a link to instantly view your dishes in stunning 3D or life-like AR, right from their phone.
            <br /><br />
            It's fast, frictionless, and built to impress.
          </p>
        </div>

        {/* Right side (Video) */}
        <div className="flex justify-center md:justify-end">
          {/* Single Video */}
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl">
             <video
              className="w-full h-auto object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/trimmed.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}; 