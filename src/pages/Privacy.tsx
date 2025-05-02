
import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navbar />
      
      <main className="pt-24 pb-16 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">Last Updated: May 2, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-gray-300">
                Cyberslide ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                We may collect information about you in a variety of ways:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact details that you voluntarily provide when subscribing to our waitlist or contacting us.</li>
                <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, time spent on pages, and pages visited.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We may use cookies and similar tracking technologies to collect information about your browsing activities over time.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">
                We may use the information we collect about you for various purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To allow you to participate in interactive features of our services</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our services</li>
                <li>To monitor the usage of our services</li>
                <li>To detect, prevent and address technical issues</li>
                <li>To send you news, updates, marketing and promotional materials</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">4. Disclosure of Your Information</h2>
              <p className="text-gray-300 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who provide services on our behalf</li>
                <li><strong>Business Partners:</strong> Companies we partner with to offer products or services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">5. Security of Your Data</h2>
              <p className="text-gray-300">
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">6. Your Rights</h2>
              <p className="text-gray-300 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>The right to access personal information we hold about you</li>
                <li>The right to request correction of inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to restrict or object to our processing of your data</li>
                <li>The right to data portability</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">7. Changes to This Privacy Policy</h2>
              <p className="text-gray-300">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will also update the "Last Updated" date at the top of this Privacy Policy.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">8. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:chris@cyberslide.net" className="text-cyber-cyan hover:underline">chris@cyberslide.net</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Privacy;
