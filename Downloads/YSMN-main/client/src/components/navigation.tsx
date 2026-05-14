import { useState } from "react";
import { Mail, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ysmnLogo from "@assets/4927272A-D193-435F-A5B0-4F2E306C9D55 (1)_1756472323570.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3" data-testid="logo-section">
              <img src={ysmnLogo} alt="YSMN Logo" className="w-12 h-12" />
              <div>
                <h1 className="text-xl font-bold text-primary">YSMN</h1>
                <p className="text-sm text-muted-foreground">Complete Care and Support Services</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8" data-testid="nav-desktop">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('why-choose')} 
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="nav-why-choose"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="nav-testimonials"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('blog')} 
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="nav-blog"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('careers')} 
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="nav-careers"
              >
                Careers
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </nav>
            
            {/* Contact Info & CTA */}
            <div className="flex items-center space-x-4">
              
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="gradient-accent text-accent-foreground hover:opacity-90 transition-opacity"
                data-testid="button-get-quote"
              >
                Get Quote
              </Button>
              
              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden text-primary"
                data-testid="button-mobile-menu"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 md:hidden" data-testid="mobile-menu">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center space-x-3">
                <img src={ysmnLogo} alt="YSMN Logo" className="w-10 h-10" />
                <span className="font-bold text-primary">YSMN</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-primary"
                data-testid="button-close-mobile-menu"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
            
            <nav className="flex-1 p-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('why-choose')} 
                className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-why-choose"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-testimonials"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('blog')} 
                className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-blog"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('careers')} 
                className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-careers"
              >
                Careers
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </nav>
            
            <div className="p-4 border-t border-border">
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="w-full gradient-accent text-accent-foreground"
                data-testid="mobile-button-get-quote"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
