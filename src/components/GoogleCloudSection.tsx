
import React, { useEffect, useRef, useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { CloudCog, Activity, Code, Database, BarChart } from 'lucide-react';

const GoogleCloudSection: React.FC = () => {
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
    <section ref={sectionRef} id="cloud" className="py-20 px-6 md:px-10 relative">
      {/* Background element */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a,#1a2b4e)] opacity-50"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Why <span className="gradient-text">Google Cloud?</span></h2>
          <Separator className="mx-auto w-20 h-1 bg-cyber-cyan mb-8" />
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Cyberslide plans to scale securely and intelligently using Google Cloud's suite of tools
          </p>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-700 ease-out`}>
          <CloudFeatureCard 
            icon={<CloudCog size={32} />}
            title="Seamless Content Delivery"
            description="Cloud CDN ensures our educational content reaches users with minimal latency, regardless of location"
          />
          
          <CloudFeatureCard 
            icon={<Code size={32} />}
            title="Interactive Labs"
            description="Firebase + Cloud Run power our secure sandboxed environments for hands-on practice"
          />
          
          <CloudFeatureCard 
            icon={<Activity size={32} />}
            title="Scalable Backend"
            description="Cloud Functions enables us to build a responsive and scalable infrastructure that grows with our user base"
          />
          
          <CloudFeatureCard 
            icon={<BarChart size={32} />}
            title="Smart Analytics"
            description="BigQuery helps us analyze user behavior to continuously improve our learning experiences"
          />
        </div>
        
        <div className={`mt-16 p-8 bg-cyber-blue bg-opacity-10 border border-cyber-cyan border-opacity-20 rounded-lg flex flex-col md:flex-row items-center gap-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-300`}>
          <div className="hexagon bg-gradient-to-r from-cyber-cyan to-cyber-purple p-[2px] w-20 h-20 flex-shrink-0">
            <div className="w-full h-full bg-cyber-dark hexagon flex items-center justify-center">
              <CloudCog size={32} className="text-white" />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Security-First Architecture</h3>
            <p className="text-gray-300">
              As a cybersecurity education platform, we practice what we teach. Our Google Cloud implementation follows security best practices with multi-layered defenses, encryption in transit and at rest, and continuous vulnerability assessment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CloudFeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-cyber-blue bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-cyber-cyan border-opacity-20 hover:border-cyber-cyan transition-all duration-300 flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-cyber-cyan bg-opacity-10 text-cyber-cyan">
        {icon}
      </div>
      
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default GoogleCloudSection;
