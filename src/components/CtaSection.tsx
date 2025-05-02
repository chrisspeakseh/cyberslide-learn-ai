
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Users, FileText, Mail } from 'lucide-react';

const CtaSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
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

  // Load MailerLite scripts dynamically
  useEffect(() => {
    // Add Mailerlite CSS
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://assets.mlcdn.com/fonts.css?version=1746091';
    document.head.appendChild(linkElement);
    
    // Add Mailerlite JS
    const script = document.createElement('script');
    script.src = 'https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024';
    script.async = true;
    document.body.appendChild(script);

    // Add success handler
    window.ml_webform_success_25490861 = function() {
      const rowSuccess = document.querySelector('.ml-subscribe-form-25490861 .row-success');
      const rowForm = document.querySelector('.ml-subscribe-form-25490861 .row-form');
      
      if (rowSuccess) rowSuccess.setAttribute('style', 'display: block');
      if (rowForm) rowForm.setAttribute('style', 'display: none');
    };

    // Fetch form data
    setTimeout(() => {
      fetch("https://assets.mailerlite.com/jsonp/1341251/forms/153259226605553075/takel")
        .catch(e => console.log('Form fetch error:', e));
    }, 1000);

    return () => {
      document.head.removeChild(linkElement);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section ref={sectionRef} id="cta" className="py-20 px-6 md:px-10 relative">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue to-cyber-dark opacity-20"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className={`p-8 md:p-12 bg-cyber-blue bg-opacity-20 backdrop-blur-sm rounded-xl border border-cyber-cyan border-opacity-40 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-700 ease-out`}>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Get Early Access</h2>
            <p className="text-xl text-gray-300">
              Join thousands of learners shaping the future of cybersecurity education.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button className="bg-cyber-cyan hover:bg-opacity-90 text-cyber-dark font-medium px-8 py-6 text-lg rounded-md flex items-center gap-2 glow">
              <Users size={20} />
              Join the Waitlist
            </Button>
            
            <Button variant="outline" className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:bg-opacity-10 px-8 py-6 text-lg rounded-md flex items-center gap-2">
              <FileText size={20} />
              Download Our Investor Deck
            </Button>
            
            <Button variant="outline" className="border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-6 text-lg rounded-md flex items-center gap-2">
              <Mail size={20} />
              Contact Us
            </Button>
          </div>
          
          {/* Email signup form */}
          <div id="newsletter-form" className="mt-12 max-w-md mx-auto">
            <div className="bg-cyber-dark bg-opacity-50 p-6 rounded-lg">
              {/* MailerLite Form Integration */}
              <div id="mlb2-25490861" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-25490861">
                <div className="ml-form-align-center">
                  <div className="ml-form-embedWrapper embedForm">
                    <div className="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
                      <div className="ml-form-embedContent">
                        <h3 className="text-lg font-medium mb-4">Enter your email below to join the waitlist</h3>
                        <p className="text-xs text-cyber-cyan font-medium">To our Exclusive Resources, Tools & our Cybersecurity Insiders community</p>
                      </div>
                      <form 
                        className="ml-block-form flex flex-col sm:flex-row gap-3" 
                        action="https://assets.mailerlite.com/jsonp/1341251/forms/153259226605553075/subscribe" 
                        data-code="" 
                        method="post" 
                        target="_blank"
                      >
                        <div className="ml-form-formContent w-full">
                          <div className="ml-form-fieldRow">
                            <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                              <input 
                                type="email" 
                                name="fields[email]" 
                                placeholder="Enter your email" 
                                className="flex-grow px-4 py-2 bg-cyber-dark border border-cyber-gray rounded-md focus:outline-none focus:border-cyber-cyan w-full"
                                autoComplete="email"
                              />
                            </div>
                          </div>
                        </div>
                        <input type="hidden" name="ml-submit" value="1" />
                        <Button 
                          type="submit" 
                          className="bg-cyber-purple hover:bg-opacity-90 text-white px-6 py-2 rounded-md"
                        >
                          Subscribe
                        </Button>
                        <input type="hidden" name="anticsrf" value="true" />
                      </form>
                    </div>
                    <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
                      <div className="ml-form-successContent">
                        <h4 className="text-lg font-medium mb-3">Thank you!</h4>
                        <p className="text-cyber-cyan font-medium">You have successfully joined insiders list, wait for instructions in email. Thanks</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                We'll never share your email. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
        
        {/* Additional CTA elements */}
        <div className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-700 delay-200 ease-out`}>
          <CtaCard 
            title="Free Resources"
            description="Access our starter guides, cheatsheets, and tool recommendations."
            buttonText="Get Started"
          />
          
          <CtaCard 
            title="Join Community"
            description="Connect with like-minded learners and security enthusiasts."
            buttonText="Learn More"
          />
          
          <CtaCard 
            title="For Educators"
            description="Partner with us to bring cybersecurity education to your institution."
            buttonText="Partner Up"
          />
        </div>
      </div>
    </section>
  );
};

const CtaCard: React.FC<{
  title: string;
  description: string;
  buttonText: string;
}> = ({ title, description, buttonText }) => {
  return (
    <div className="p-6 bg-cyber-blue bg-opacity-10 border border-cyber-gray border-opacity-30 rounded-lg hover:border-cyber-cyan transition-all duration-300 flex flex-col h-full">
      <h4 className="text-lg font-semibold mb-3">{title}</h4>
      <p className="text-gray-400 mb-6 flex-grow">{description}</p>
      <Button variant="outline" className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:bg-opacity-10 w-full">
        {buttonText}
      </Button>
    </div>
  );
};

export default CtaSection;
