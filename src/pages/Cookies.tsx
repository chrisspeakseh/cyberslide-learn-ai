
import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navbar />
      
      <main className="pt-24 pb-16 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Cookie Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">Last Updated: May 2, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">1. What Are Cookies</h2>
              <p className="text-gray-300">
                Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the service or a third-party to recognize you and make your next visit easier and the service more useful to you.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-300 mb-4">
                When you use and access our service, we may place a number of cookies files in your web browser. We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><strong>Essential cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.</li>
                <li><strong>Performance cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</li>
                <li><strong>Functionality cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</li>
                <li><strong>Targeting cookies:</strong> These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">3. Third-Party Cookies</h2>
              <p className="text-gray-300">
                In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">4. What Are Your Choices Regarding Cookies</h2>
              <p className="text-gray-300 mb-4">
                If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
              </p>
              <p className="text-gray-300">
                Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">5. Where Can You Find More Information About Cookies</h2>
              <p className="text-gray-300 mb-4">
                You can learn more about cookies at the following websites:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><a href="https://www.allaboutcookies.org/" className="text-cyber-cyan hover:underline" target="_blank" rel="noopener noreferrer">All About Cookies</a></li>
                <li><a href="https://www.networkadvertising.org/" className="text-cyber-cyan hover:underline" target="_blank" rel="noopener noreferrer">Network Advertising Initiative</a></li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">6. Changes to Our Cookie Policy</h2>
              <p className="text-gray-300">
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page. The date the Cookie Policy was last revised is identified at the top of the page.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">7. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about our Cookie Policy, please contact us at <a href="mailto:chris@cyberslide.net" className="text-cyber-cyan hover:underline">chris@cyberslide.net</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Cookies;
