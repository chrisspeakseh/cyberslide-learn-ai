
import React, { useEffect, useRef, useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, Code, Database } from 'lucide-react';

const AboutSection: React.FC = () => {
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
    <section ref={sectionRef} id="about" className="relative py-20 px-6 md:px-10">
      {/* Background element */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark to-cyber-blue opacity-10 z-0"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
          {/* Left content */}
          <div className={`md:w-1/2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-700 ease-out`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">About <span className="gradient-text">Cyberslide</span></h2>
            <Separator className="w-20 h-1 bg-cyber-cyan mb-8" />
            
            <p className="text-lg text-gray-300 mb-6">
              Cyberslide is a cybersecurity education startup on a mission to simplify ethical hacking and digital safety through short-form content.
            </p>
            
            <p className="text-lg text-gray-300">
              Our platform empowers aspiring cybersecurity professionals with free, beginner-friendly tutorials, toolkits, and soon — interactive learning labs powered by Google Cloud infrastructure.
            </p>
          </div>
          
          {/* Right content - Feature cards */}
          <div className={`md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-700 delay-200 ease-out`}>
            <FeatureCard 
              icon={<Shield size={24} className="text-cyber-cyan" />}
              title="Beginner Friendly"
              description="Step-by-step tutorials designed for absolute beginners to understand complex security concepts easily."
            />
            
            <FeatureCard 
              icon={<Code size={24} className="text-cyber-green" />}
              title="Hands-on Learning"
              description="Practice with real-world examples and scenarios in our secure, guided environment."
            />
            
            <FeatureCard 
              icon={<Lock size={24} className="text-cyber-purple" />}
              title="Ethical Practices"
              description="Learn ethical hacking with emphasis on responsible disclosure and legal compliance."
            />
            
            <FeatureCard 
              icon={<Database size={24} className="text-cyber-light-blue" />}
              title="Cloud-Powered"
              description="Interactive labs built on Google Cloud infrastructure for scalable, secure learning experiences."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-cyber-blue bg-opacity-20 backdrop-blur-sm p-6 rounded-lg border border-cyber-gray border-opacity-30 hover:border-cyber-cyan transition-all duration-300 hover:glow">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default AboutSection;
