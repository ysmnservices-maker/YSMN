import { Mail, Clock, Shield } from "lucide-react";
import ysmnLogo from "@assets/4927272A-D193-435F-A5B0-4F2E306C9D55 (1)_1756472323570.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground py-16" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Footer Logo */}
          <div className="space-y-4" data-testid="footer-logo-section">
            <div className="flex items-center space-x-3">
              <img src={ysmnLogo} alt="YSMN Logo" className="w-10 h-10" />
              <div>
                <h1 className="text-lg font-bold">YSMN</h1>
                <p className="text-sm opacity-70">Cleaning Services</p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed" data-testid="footer-description">
              Family-owned professional cleaning company delivering exceptional services for homes and businesses with years of experience and commitment to excellence.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4" data-testid="footer-quick-links">
            <h5 className="font-semibold">Quick Links</h5>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block text-sm opacity-70 hover:opacity-100 transition-opacity text-left"
                data-testid="footer-link-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block text-sm opacity-70 hover:opacity-100 transition-opacity text-left"
                data-testid="footer-link-about"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block text-sm opacity-70 hover:opacity-100 transition-opacity text-left"
                data-testid="footer-link-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="block text-sm opacity-70 hover:opacity-100 transition-opacity text-left"
                data-testid="footer-link-testimonials"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('careers')} 
                className="block text-sm opacity-70 hover:opacity-100 transition-opacity text-left"
                data-testid="footer-link-careers"
              >
                Careers
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block text-sm opacity-70 hover:opacity-100 transition-opacity text-left"
                data-testid="footer-link-contact"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Services Links */}
          <div className="space-y-4" data-testid="footer-services">
            <h5 className="font-semibold">Our Services</h5>
            <div className="space-y-2">
              <div className="text-sm opacity-70">Domestic Cleaning</div>
              <div className="text-sm opacity-70">Commercial Cleaning</div>
              <div className="text-sm opacity-70">Garden Maintenance</div>
              <div className="text-sm opacity-70">Pool Cleaning</div>
              <div className="text-sm opacity-70">Post-Event Cleaning</div>
              <div className="text-sm opacity-70">Deep Cleaning</div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4" data-testid="footer-contact-info">
            <h5 className="font-semibold">Contact Info</h5>
            <div className="space-y-3">
              <a 
                href="mailto:infoatysmn2010@gmail.com" 
                className="flex items-center space-x-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
                data-testid="footer-email"
              >
                <Mail className="w-4 h-4" />
                <span>infoatysmn2010@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2 text-sm opacity-70" data-testid="footer-hours">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 7AM-6PM</span>
              </div>
              <div className="flex items-center space-x-2 text-sm opacity-70" data-testid="footer-insurance">
                <Shield className="w-4 h-4" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-border/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0" data-testid="footer-bottom">
          <div className="text-sm opacity-70" data-testid="footer-copyright">
            © 2025 YSMN Cleaning Services. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm opacity-70">
            <a href="#" className="hover:opacity-100 transition-opacity" data-testid="footer-privacy">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity" data-testid="footer-terms">
              Terms of Service
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity" data-testid="footer-cookies">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
