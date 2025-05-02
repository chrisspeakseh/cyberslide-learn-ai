
import React, { useEffect, useState, useRef } from 'react';
import { Separator } from "@/components/ui/separator";
import { TrendingUp, Globe, Users, MessageSquare, Star } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  prefix?: string;
  isVisible: boolean;
}

const Counter: React.FC<CounterProps> = ({ 
  end, 
  suffix = '', 
  prefix = '', 
  duration = 2000,
  isVisible 
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isVisible) return;
    
    const step = Math.max(1, Math.floor(end / (duration / 16)));
    
    if (timerRef.current) clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      if (countRef.current + step >= end) {
        setCount(end);
        if (timerRef.current) clearInterval(timerRef.current);
      } else {
        countRef.current += step;
        setCount(countRef.current);
      }
    }, 16);
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [end, duration, isVisible]);

  return (
    <span className="text-4xl md:text-5xl font-bold gradient-text">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const TractionSection: React.FC = () => {
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
    <section ref={sectionRef} id="traction" className="py-20 px-6 md:px-10 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(#00d8ff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Traction & <span className="gradient-text">Community</span></h2>
          <Separator className="mx-auto w-20 h-1 bg-cyber-cyan mb-8" />
        </div>
        
        <div className={`stats-grid ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 ease-out`}>
          <StatCard 
            icon={<Users className="text-cyber-cyan" size={28} />}
            value={<Counter end={60000} suffix="+" isVisible={isVisible} />}
            label="Followers across Instagram & YouTube"
          />
          
          <StatCard 
            icon={<TrendingUp className="text-cyber-green" size={28} />}
            value={<Counter end={2} prefix="" suffix="M+" isVisible={isVisible} />}
            label="Monthly video views"
          />
          
          <StatCard 
            icon={<Globe className="text-cyber-purple" size={28} />}
            value={<Counter end={20} suffix="+" isVisible={isVisible} />}
            label="Countries with active learners"
          />
          
          <StatCard 
            icon={<MessageSquare className="text-cyber-light-blue" size={28} />}
            value={<Counter end={100} suffix="%" isVisible={isVisible} />}
            label="Community-driven content roadmap"
          />
          
          <StatCard 
            icon={<Star className="text-cyber-cyan" size={28} />}
            value="Featured"
            label="In top cybersecurity forums and groups"
          />
        </div>
        
        <div className={`mt-16 p-6 md:p-8 bg-cyber-blue bg-opacity-20 border border-cyber-gray border-opacity-30 rounded-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-300`}>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-cyber-cyan bg-opacity-20 flex-shrink-0">
              <Users className="text-cyber-cyan" size={32} />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Join Our Growing Community</h3>
              <p className="text-gray-300">
                Become part of a passionate community of cybersecurity enthusiasts. Ask questions, share knowledge, and grow your skills alongside peers from around the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard: React.FC<{
  icon: React.ReactNode;
  value: React.ReactNode;
  label: string;
}> = ({ icon, value, label }) => {
  return (
    <div className="bg-cyber-blue bg-opacity-20 backdrop-blur-sm p-6 rounded-lg border border-cyber-gray border-opacity-30 hover:border-cyber-cyan transition-all duration-300 text-center flex flex-col items-center">
      <div className="mb-3">{icon}</div>
      <div className="mb-2">{value}</div>
      <p className="text-gray-300">{label}</p>
    </div>
  );
};

export default TractionSection;
