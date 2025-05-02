
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TractionSection from '@/components/TractionSection';
import ProductVisionSection from '@/components/ProductVisionSection';
import GoogleCloudSection from '@/components/GoogleCloudSection';
import FounderSection from '@/components/FounderSection';
import CtaSection from '@/components/CtaSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Main content */}
      <main>
        {/* Hero Section */}
        <section id="hero">
          <HeroSection />
        </section>
        
        {/* About Section */}
        <AboutSection />
        
        {/* Traction Section */}
        <TractionSection />
        
        {/* Product Vision Section */}
        <ProductVisionSection />
        
        {/* Why Google Cloud Section */}
        <GoogleCloudSection />
        
        {/* Founder Section */}
        <FounderSection />
        
        {/* CTA Section */}
        <CtaSection />
      </main>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Index;
