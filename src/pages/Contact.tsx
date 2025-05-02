
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send an API request to your backend
      // to handle the email sending. For now, we'll simulate a successful submission.
      
      console.log("Form submitted:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navbar />
      
      <main className="pt-24 pb-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Contact Us</h1>
          <p className="text-gray-300 mb-12 max-w-2xl">
            Have questions or want to learn more about Cyberslide? Get in touch with our team and we'll get back to you as soon as possible.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6 bg-cyber-blue bg-opacity-10 p-6 rounded-lg border border-cyber-gray border-opacity-30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-cyber-dark border-cyber-gray focus:border-cyber-cyan"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-cyber-dark border-cyber-gray focus:border-cyber-cyan"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="bg-cyber-dark border-cyber-gray focus:border-cyber-cyan"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                    className="min-h-[150px] bg-cyber-dark border-cyber-gray focus:border-cyber-cyan"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-cyber-cyan hover:bg-opacity-90 text-cyber-dark font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="bg-cyber-blue bg-opacity-10 p-6 rounded-lg border border-cyber-gray border-opacity-30">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="text-cyber-cyan mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:chris@cyberslide.net" className="text-gray-400 hover:text-cyber-cyan">chris@cyberslide.net</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-cyber-cyan mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-400">United States</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-cyber-blue bg-opacity-10 p-6 rounded-lg border border-cyber-gray border-opacity-30">
                <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                <p className="text-gray-400 mb-4">
                  Stay updated with our latest news and updates on social media.
                </p>
                <a 
                  href="https://instagram.com/cyber.slide" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center space-x-2 text-cyber-cyan hover:underline"
                >
                  <Instagram size={18} />
                  <span>@cyber.slide</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Contact;
