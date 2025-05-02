
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
          <div className="mt-12 max-w-md mx-auto">
            <div className="bg-cyber-dark bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Subscribe to our newsletter</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-4 py-2 bg-cyber-dark border border-cyber-gray rounded-md focus:outline-none focus:border-cyber-cyan"
                />
                <Button className="bg-cyber-purple hover:bg-opacity-90 text-white">
                  Subscribe
                </Button>
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
