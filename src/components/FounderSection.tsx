
import React, { useEffect, useRef, useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { Shield, Award, Lightbulb } from 'lucide-react';

const FounderSection: React.FC = () => {
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
    <section ref={sectionRef} id="founder" className="py-20 px-6 md:px-10 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-cyber-dark opacity-70"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#3498db_1px,transparent_1px)] [background-size:30px_30px] opacity-10"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Meet the <span className="gradient-text">Founder</span></h2>
          <Separator className="mx-auto w-20 h-1 bg-cyber-cyan mb-8" />
        </div>
        
        <div className={`flex flex-col lg:flex-row items-center gap-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-700 ease-out`}>
          {/* Founder image */}
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-cyber-cyan glow relative mx-auto">
                <img 
                  src="/lovable-uploads/4a94e445-7fa6-4338-aee9-2a131b1b0021.png" 
                  alt="Christus Vincent - Founder of Cyberslide" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyber-dark to-transparent py-6 px-4">
                  <p className="font-semibold text-center text-white">Christus Vincent</p>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-28 h-28 md:w-32 md:h-32 rounded-full bg-cyber-dark border border-cyber-cyan p-4 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xs text-cyber-cyan">FOUNDER</p>
                  <p className="font-bold">Cyberslide</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Founder bio */}
          <div className="lg:w-3/5">
            <h3 className="text-2xl font-bold mb-4">Christus Vincent</h3>
            <p className="text-lg text-gray-300 mb-6">
              A cybersecurity blogger and educator passionate about making hacking education accessible. 
              With over 8 years of experience in cybersecurity, Christus founded Cyberslide to break down 
              complex security concepts into digestible, engaging content for beginners and professionals alike.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <FounderFeature 
                icon={<Shield size={20} className="text-cyber-cyan" />}
                text="Ethical Hacking Expert"
              />
              
              <FounderFeature 
                icon={<Award size={20} className="text-cyber-green" />}
                text="Industry Recognized Educator"
              />
              
              <FounderFeature 
                icon={<Lightbulb size={20} className="text-cyber-purple" />}
                text="Content Innovation Leader"
              />
            </div>
            
            <p className="text-gray-300">
              Backed by a team of content creators, developers, and ethical hackers, 
              Christus leads Cyberslide with a vision to create the most accessible and 
              engaging cybersecurity education platform in the world.
            </p>
          </div>
        </div>
        
        <div className={`mt-16 p-6 md:p-8 bg-cyber-blue bg-opacity-10 rounded-lg border border-cyber-gray border-opacity-30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-300`}>
          <h3 className="text-xl font-semibold mb-4 text-center">Our Team Values</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ValueCard 
              title="Accessibility"
              description="Making cybersecurity knowledge available to everyone, regardless of background."
            />
            
            <ValueCard 
              title="Ethics"
              description="Promoting responsible security practices and ethical hacking principles."
            />
            
            <ValueCard 
              title="Innovation"
              description="Constantly exploring new ways to make learning engaging and effective."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FounderFeature: React.FC<{
  icon: React.ReactNode;
  text: string;
}> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-cyber-dark flex items-center justify-center">
        {icon}
      </div>
      <p className="font-medium">{text}</p>
    </div>
  );
};

const ValueCard: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <div className="text-center">
      <h4 className="font-semibold text-lg mb-2 gradient-text">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FounderSection;
