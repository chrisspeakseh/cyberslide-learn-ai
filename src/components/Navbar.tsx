
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cyber-dark bg-opacity-90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-10 h-10 mr-3 rounded-lg bg-gradient-to-br from-cyber-cyan to-cyber-purple flex items-center justify-center">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <span className="text-xl font-bold">Cyber<span className="gradient-text">slide</span></span>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink label="Home" onClick={() => scrollToSection('hero')} />
          <NavLink label="About" onClick={() => scrollToSection('about')} />
          <NavLink label="Traction" onClick={() => scrollToSection('traction')} />
          <NavLink label="Vision" onClick={() => scrollToSection('vision')} />
          <NavLink label="Founder" onClick={() => scrollToSection('founder')} />
        </nav>
        
        {/* CTA button */}
        <div className="hidden md:block">
          <Button 
            className="bg-cyber-cyan hover:bg-opacity-80 text-cyber-dark"
            onClick={() => scrollToSection('cta')}
          >
            Join Waitlist
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cyber-dark bg-opacity-95 backdrop-blur-md">
          <nav className="flex flex-col px-6 py-4 space-y-3">
            <MobileNavLink label="Home" onClick={() => scrollToSection('hero')} />
            <MobileNavLink label="About" onClick={() => scrollToSection('about')} />
            <MobileNavLink label="Traction" onClick={() => scrollToSection('traction')} />
            <MobileNavLink label="Vision" onClick={() => scrollToSection('vision')} />
            <MobileNavLink label="Founder" onClick={() => scrollToSection('founder')} />
            <Button 
              className="bg-cyber-cyan hover:bg-opacity-80 text-cyber-dark w-full mt-3"
              onClick={() => scrollToSection('cta')}
            >
              Join Waitlist
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

type NavLinkProps = {
  label: string;
  onClick: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ label, onClick }) => (
  <button 
    className="text-gray-200 hover:text-cyber-cyan transition-colors font-medium"
    onClick={onClick}
  >
    {label}
  </button>
);

const MobileNavLink: React.FC<NavLinkProps> = ({ label, onClick }) => (
  <button 
    className="text-gray-200 hover:text-cyber-cyan transition-colors font-medium py-2 w-full text-left"
    onClick={onClick}
  >
    {label}
  </button>
);

export default Navbar;
