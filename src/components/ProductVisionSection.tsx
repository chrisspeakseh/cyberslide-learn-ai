
import React, { useEffect, useRef, useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Circle, Cloud, Database, Shield, Bot } from 'lucide-react';

const ProductVisionSection: React.FC = () => {
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
    <section ref={sectionRef} id="vision" className="py-20 px-6 md:px-10 relative bg-cyber-dark">
      {/* Background effect */}
      <div className="absolute inset-0 bg-cyber-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyber-purple from-5% to-transparent to-50% opacity-10"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Product <span className="gradient-text">Vision</span></h2>
          <Separator className="mx-auto w-20 h-1 bg-cyber-cyan mb-8" />
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We're currently building an AI-powered cybersecurity content platform using Google Cloud's robust infrastructure
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-16">
          {/* Tech stack */}
          <div className={`lg:w-1/2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-700 ease-out`}>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Cloud size={24} className="text-cyber-cyan mr-2" /> 
              Powered By Google Cloud
            </h3>
            
            <div className="space-y-5">
              <TechStackItem 
                icon={<Cloud className="text-cyber-cyan" />}
                title="Google Cloud Storage"
                description="Securely hosting videos and backup content for seamless delivery"
              />
              
              <TechStackItem 
                icon={<Shield className="text-cyber-green" />}
                title="Firebase Auth"
                description="Providing secure signup and user access controls"
              />
              
              <TechStackItem 
                icon={<Database className="text-cyber-light-blue" />}
                title="BigQuery"
                description="Analyzing content performance and user engagement patterns"
              />
              
              <TechStackItem 
                icon={<Bot className="text-cyber-purple" />}
                title="Vertex AI"
                description="Enabling users to ask and answer hacking-related queries interactively"
              />
            </div>
          </div>
          
          {/* Timeline */}
          <div className={`lg:w-1/2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-700 delay-200 ease-out`}>
            <h3 className="text-xl font-semibold mb-6">MVP Timeline</h3>
            
            <div className="pl-8 relative border-l border-cyber-cyan border-opacity-40">
              <div className="relative timeline-item pl-8 pb-10">
                <div className="absolute w-6 h-6 rounded-full bg-cyber-dark border-2 border-cyber-cyan -left-[13px] top-0 z-10"></div>
                <h4 className="text-lg font-medium flex items-center text-cyber-cyan">
                  <CheckCircle size={18} className="mr-2" /> Q1 2025: Beta newsletter + tools
                </h4>
                <p className="mt-2 text-gray-300">Initial rollout of our newsletter and first toolkit resources for early community members.</p>
              </div>
              
              <div className="relative timeline-item pl-8 pb-10">
                <div className="absolute w-6 h-6 rounded-full bg-cyber-dark border-2 border-cyber-purple -left-[13px] top-0 z-10 pulse-glow"></div>
                <h4 className="text-lg font-medium flex items-center text-cyber-purple">
                  <Circle size={18} className="mr-2" /> Q2 2025: Web platform
                </h4>
                <p className="mt-2 text-gray-300">Launch of our full web platform with interactive content and expanded learning resources.</p>
              </div>
              
              <div className="relative timeline-item pl-8">
                <div className="absolute w-6 h-6 rounded-full bg-cyber-dark border-2 border-cyber-gray -left-[13px] top-0 z-10"></div>
                <h4 className="text-lg font-medium flex items-center text-gray-400">
                  <Circle size={18} className="mr-2" /> Q3 2025: AI-powered interactive content
                </h4>
                <p className="mt-2 text-gray-300">Introduction of our AI-powered content engine and personalized learning paths.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`mt-12 bg-gradient-to-r from-cyber-blue to-cyber-purple bg-opacity-20 p-6 md:p-8 rounded-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-300`}>
          <h3 className="text-xl font-bold mb-3">Why We're Building This</h3>
          <p className="text-gray-200">
            The cybersecurity skills gap continues to widen with over 3.5 million unfilled security positions globally. 
            Traditional learning resources are often too complex, expensive, or outdated for beginners. 
            Cyberslide aims to break these barriers by making cybersecurity education engaging, accessible, and relevant.
          </p>
        </div>
      </div>
    </section>
  );
};

const TechStackItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProductVisionSection;
