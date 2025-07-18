import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const CTAFooter = () => {
  return (
    <footer className="w-full bg-black text-gray-300 pt-16 pb-8 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Company Info */}
          <div>
            <img src="/logo.png" alt="Dine3D Logo" className="h-12 mb-4" />
            <h4 className="text-2xl font-bold mb-4 text-white">DINE3D</h4>
            <p className="mb-6 text-lg text-gray-300 leading-relaxed">
              DINE3D offers cutting-edge 3D and AR menus to elevate restaurant dining experiences.
            </p>
            
            {/* Website Link */}
            <div className="mb-6">
              <a 
                href="https://www.dine3d.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xl font-semibold golden-gradient-text hover:opacity-80 transition-opacity"
              >
                www.dine3d.com
              </a>
            </div>
          </div>
          
          {/* Right Column - Contact & Social */}
          <div className="text-right">
            {/* Contact Information */}
            <div className="mb-8 space-y-4">
              <p className="text-lg">📧 <a href="mailto:info@dine3d.com" className="underline hover:golden-text">info@dine3d.com</a></p>
              <p className="text-lg">📞 <a href="tel:+918427707595" className="underline hover:golden-text">+91 84277 07595</a></p>
            </div>
            
            {/* Social Media Links */}
            <div className="flex justify-end space-x-6">
              <a href="https://www.linkedin.com/company/dine3d" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-500 transition-colors">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="3"><path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 transition-colors">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 2.75a5.75 5.75 0 1 1 0 11.5a5.75 5.75 0 0 1 0-11.5zm0 1.5a4.25 4.25 0 1 0 0 8.5a4.25 4.25 0 0 0 0-8.5zm5.25 1.25a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-700 transition-colors">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-500 mt-12 pt-6 border-t border-gray-800">
          © 2025 DINE3D. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
