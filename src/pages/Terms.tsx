
import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

const Terms = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navbar />
      
      <main className="pt-24 pb-16 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">Last Updated: May 2, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-300">
                By accessing or using Cyberslide's website or services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">2. Use License</h2>
              <p className="text-gray-300 mb-4">
                Permission is granted to temporarily access the materials on Cyberslide's website for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on Cyberslide's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              <p className="text-gray-300 mt-4">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Cyberslide at any time.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">3. Disclaimer</h2>
              <p className="text-gray-300">
                The materials on Cyberslide's website are provided on an 'as is' basis. Cyberslide makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">4. Limitations</h2>
              <p className="text-gray-300">
                In no event shall Cyberslide or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Cyberslide's website, even if Cyberslide or a Cyberslide authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">5. Accuracy of Materials</h2>
              <p className="text-gray-300">
                The materials appearing on Cyberslide's website could include technical, typographical, or photographic errors. Cyberslide does not warrant that any of the materials on its website are accurate, complete, or current. Cyberslide may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">6. Links</h2>
              <p className="text-gray-300">
                Cyberslide has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Cyberslide of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">7. Modifications</h2>
              <p className="text-gray-300">
                Cyberslide may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">8. Governing Law</h2>
              <p className="text-gray-300">
                These terms and conditions are governed by and construed in accordance with the laws of Singapore and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Terms;
