
import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Users, Instagram } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToForm = () => {
    document.getElementById('newsletter-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={heroRef} className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 md:px-10 py-20 overflow-hidden">
      {/* Background gradient element */}
      <div className="absolute inset-0 bg-cyber-dark">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-cyan to-transparent"></div>
      </div>
      
      <div className={`z-10 max-w-5xl mx-auto text-center space-y-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-1000`}>
        <div>
          <span className="inline-block py-1 px-3 rounded-full border border-cyber-cyan text-cyber-cyan text-xs md:text-sm font-medium tracking-wide mb-6 animate-pulse">
            THE FUTURE OF CYBERSECURITY EDUCATION
          </span>
        </div>
      
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
          Making Cybersecurity Education <span className="gradient-text">Simple, Visual, and Accessible</span> for Everyone
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Cyberslide is building the most engaging short-form cybersecurity education platform — trusted by over 74,000 followers and 2 million monthly learners.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button 
            className="bg-cyber-purple hover:bg-opacity-90 text-white px-8 py-6 text-lg rounded-md flex items-center gap-2 glow" 
            onClick={() => window.open('https://instagram.com/cyber.slide', '_blank')}
          >
            <Instagram size={20} />
            Follow on Instagram
          </Button>
          
          <Button 
            className="bg-cyber-cyan hover:bg-opacity-90 text-cyber-dark font-medium px-8 py-6 text-lg rounded-md flex items-center gap-2 glow"
            onClick={scrollToForm}
          >
            <Users size={20} />
            Join Our Waitlist
          </Button>
          
          <Button 
            variant="outline" 
            className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:bg-opacity-10 px-8 py-6 text-lg rounded-md flex items-center gap-2"
            onClick={() => window.open('https://gamma.app/docs/The-Future-of-Cybersecurity-Education-xk33dvm3hswr6ft', '_blank')}
          >
            <FileText size={20} />
            View Investor Deck
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3">
        <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"></span>
        <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" style={{ animationDelay: '0.2s' }}></span>
        <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" style={{ animationDelay: '0.4s' }}></span>
      </div>
    </div>
  );
};

export default HeroSection;
