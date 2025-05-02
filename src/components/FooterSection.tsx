
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Mail, Instagram, YoutubeIcon } from 'lucide-react';

const FooterSection: React.FC = () => {
  return (
    <footer className="pt-16 pb-8 px-6 md:px-10 bg-cyber-dark relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#0f172a)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-10">
          <div className="md:w-1/3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold gradient-text mb-2">Cyberslide</h2>
              <p className="text-gray-400">
                Making cybersecurity education simple, visual, and accessible for everyone.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="mailto:chris@cyberslide.net" className="w-10 h-10 rounded-full bg-cyber-blue bg-opacity-20 flex items-center justify-center text-cyber-cyan hover:bg-opacity-30 transition-colors">
                <Mail size={20} />
              </a>
              
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cyber-blue bg-opacity-20 flex items-center justify-center text-cyber-cyan hover:bg-opacity-30 transition-colors">
                <Instagram size={20} />
              </a>
              
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cyber-blue bg-opacity-20 flex items-center justify-center text-cyber-cyan hover:bg-opacity-30 transition-colors">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors">Testimonials</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors">Downloads</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors">Videos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors">Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <Separator className="bg-cyber-gray opacity-30 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Cyberslide. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-cyber-cyan text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-cyber-cyan text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-cyber-cyan text-sm transition-colors">Cookies</a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-600">
          <p>Email: chris@cyberslide.net</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
