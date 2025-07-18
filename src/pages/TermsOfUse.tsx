import React from "react";
import { Navbar } from "@/components/Navbar";
import { CTAFooter } from "@/components/CTAFooter";

const TermsOfUse = () => (
  <div className="min-h-screen flex flex-col bg-white text-black font-[Montserrat]">
    <Navbar />
    <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4">Terms of Use</h1>
        <p className="mb-2 text-gray-700">Effective Date: 10/06/25</p>
        <p className="mb-4">Welcome to DINE3D. By accessing or using our website or services, you agree to be bound by the following terms and conditions of use. These terms govern your use of our platform which provides Augmented Reality (AR) and 3D menu solutions for restaurants.</p>
        <p className="mb-4">These Terms of Use (hereinafter referred to as the “Terms”) apply to the website located at [your future website domain] (hereinafter referred to as “Website”), operated under the brand name DINE3D, currently incubated at VentureLab Thapar, TIAT, Patiala (hereinafter referred to as “we”, “our” or “us”).</p>
        <p className="mb-4">If you do not agree to these Terms, please do not use the Website or our services.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">1. Acceptance of Terms</h2>
        <p className="mb-2">By continuing to access or use the Website, you acknowledge that you have read, understood, and agree to be legally bound by these Terms and our Privacy Policy. These Terms constitute a binding agreement between you (the “User”) and DINE3D.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">2. Modification of Terms</h2>
        <p className="mb-2">We reserve the right to update, modify, or replace any part of these Terms at any time without prior notice. It is your responsibility to check this page periodically for changes. Continued use of the Website after any changes shall constitute your consent to such changes.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">3. Use of the Website</h2>
        <p className="mb-2">The content of this Website is for your general information and use only. It is subject to change without notice. You agree not to use the Website for any illegal or unauthorized purpose. You must not attempt to gain unauthorized access to any portion or feature of the Website or any other systems or networks connected to the Website.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">4. Intellectual Property</h2>
        <p className="mb-2">All content, designs, logos, images, software, and other materials on this Website are the property of DINE3D or its licensors and are protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or republish any content without prior written permission.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">5. User Content</h2>
        <p className="mb-2">If you upload or submit any content (such as images, menu data, videos, or product descriptions), you grant DINE3D a non-exclusive, royalty-free license to use, display, reproduce, and adapt that content to provide you with the requested services.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">6. Third-Party Links</h2>
        <p className="mb-2">Our Website may contain links to third-party websites. These are provided for your convenience and do not signify that we endorse such websites. We are not responsible for the content or practices of any linked third-party site.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">7. Limitation of Liability</h2>
        <p className="mb-2">The Website and services are provided “as is” and “as available” without warranties of any kind. We do not guarantee that the Website will be secure or error-free, or that it will function without delays or disruptions. DINE3D shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Website or our services.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">8. Indemnification</h2>
        <p className="mb-2">You agree to indemnify and hold harmless DINE3D, its team members, mentors, and associates from and against any claims, liabilities, damages, and expenses (including legal fees) arising out of your use of the Website or your violation of these Terms.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">9. Termination</h2>
        <p className="mb-2">We reserve the right to suspend or terminate your access to the Website at any time and for any reason, without prior notice.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">10. Governing Law</h2>
        <p className="mb-2">These Terms shall be governed and construed in accordance with the laws of India. Any dispute arising out of the use of the Website shall be subject to the jurisdiction of the courts located in Patiala, Punjab, India.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">11. Contact Information</h2>
        <p className="mb-2">If you have any questions or concerns about these Terms, you may contact us at:</p>
        <p className="mb-2">DINE3D<br />VentureLab Thapar<br />Thapar Institute of Engineering & Technology<br />Patiala, Punjab, India<br />info@dine3d.com</p>
      </div>
    </main>
    <CTAFooter />
  </div>
);

export default TermsOfUse; 