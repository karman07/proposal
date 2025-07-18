import React from "react";
import { Navbar } from "@/components/Navbar";
import { CTAFooter } from "@/components/CTAFooter";

const PrivacyPolicy = () => (
  <div className="min-h-screen flex flex-col bg-white text-black font-[Montserrat]">
    <Navbar />
    <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4">Privacy Policy</h1>
        <p className="mb-2 text-gray-700">Effective Date: 10/06/25</p>
        <p className="mb-2 text-gray-700">Website: dine3d.com</p>
        <p className="mb-4">This Privacy Policy outlines how DINE3D (hereinafter referred to as "we," "our," or "us") collects, uses, maintains, and discloses information collected from users (hereinafter referred to as "you" or "your") of our website and services. DINE3D is currently incubated at VentureLab Thapar, TIAT, Patiala, India.</p>
        <p className="mb-4">We are committed to ensuring your privacy is protected and your personal information is handled responsibly.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">1. Information We Collect</h2>
        <p className="mb-2 font-semibold">a) Information You Provide Voluntarily</p>
        <ul className="list-disc ml-6 mb-2">
          <li>Fill out contact forms</li>
          <li>Request a demo or service</li>
          <li>Subscribe to our newsletter</li>
          <li>Communicate with us directly</li>
        </ul>
        <p className="mb-2">This may include: Full name, Contact details (email, phone), Business or job title, City or region, Preferences related to our services</p>
        <p className="mb-2 font-semibold">b) Information Collected Automatically</p>
        <ul className="list-disc ml-6 mb-2">
          <li>Browser type and version</li>
          <li>Device type and operating system</li>
          <li>IP address</li>
          <li>Referring website</li>
          <li>Usage patterns and clicks</li>
          <li>De-identified location data</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-3">2. Use of Cookies</h2>
        <p className="mb-2">Cookies are small data files stored on your device. They help us analyze website traffic and usage, remember your preferences, and improve site experience and performance. You can choose to accept or decline cookies through your browser settings. However, some features of the site may not function optimally without them.</p>
        <p className="mb-2">We may use tools such as Google Analytics for anonymous website usage tracking. For more details, visit: Google Analytics Privacy</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">3. How We Use Your Information</h2>
        <ul className="list-disc ml-6 mb-2">
          <li>Improve our products and services</li>
          <li>Provide customized user experiences</li>
          <li>Respond to inquiries or service requests</li>
          <li>Send you promotional updates (with opt-out option)</li>
          <li>Contact you for feedback or market research</li>
          <li>Maintain internal records and analytics</li>
        </ul>
        <p className="mb-2">You may unsubscribe from marketing communications at any time by emailing us at <span className="font-semibold">info@dine3d.com</span>.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">4. Data Protection and Security</h2>
        <p className="mb-2">We implement industry-standard measures to protect your personal data, including secure server infrastructure, restricted access protocols, and regular monitoring of our systems. Please note that no internet transmission is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">5. Third-Party Links</h2>
        <p className="mb-2">Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites. We encourage you to read their privacy policies before providing any personal information.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">6. Sharing Your Information</h2>
        <p className="mb-2">We do not sell, trade, or rent your personal data to third parties. We may share your data with service providers working on our behalf, if required by law, or to protect the rights and safety of our users, team, or public.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">7. Your Rights and Control</h2>
        <p className="mb-2">You may request access to your personal data, ask us to correct, update, or delete your data, or withdraw consent to marketing communications. To do so, please write to us at <span className="font-semibold">info@dine3d.com</span>.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">8. Policy Updates</h2>
        <p className="mb-2">This Privacy Policy may be updated from time to time. All updates will be posted on this page. Your continued use of the site constitutes your agreement to the revised policy.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">9. Contact Us</h2>
        <p className="mb-2">If you have questions or concerns about this Privacy Policy, you may contact us at:</p>
        <p className="mb-2">DINE3D<br />VentureLab Thapar<br />Thapar Institute of Engineering & Technology<br />Patiala, Punjab, India<br />📧 Email: <span className="font-semibold">info@dine3d.com</span></p>
      </div>
    </main>
    <CTAFooter />
  </div>
);

export default PrivacyPolicy; 