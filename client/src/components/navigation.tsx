import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import ysmnLogo from "@assets/4927272A-D193-435F-A5B0-4F2E306C9D55 (1)_1756472323570.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/ysmnhomecare?igsh=MXByZDBtczIwbjc1ZA==", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/share/1CX24Hg5oU/?mibextid=wwXIfr", label: "Facebook" }
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blogs", label: "Blogs" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact Us" },
    { href: "/staff-portal", label: "Staff Portal" }
  ];

  return (
    <>
      <header className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3" data-testid="logo-section">
              <img src={ysmnLogo} alt="YSMN Logo" className="w-12 h-12" />
              <div>
                <h1 className="text-xl font-bold text-foreground">YSMN</h1>
                <p className="text-sm text-muted-foreground">Complete Care and Support Services</p>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" data-testid="nav-desktop">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`transition-colors font-medium ${
                    location === link.href ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            {/* Social Links & CTA */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
              
              <Link href="/contact">
                <Button 
                  className="gradient-accent text-accent-foreground hover:opacity-90 transition-opacity"
                  data-testid="button-get-quote"
                >
                  Get Quote
                </Button>
              </Link>
              
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
              <Link href="/" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                <img src={ysmnLogo} alt="YSMN Logo" className="w-10 h-10" />
                <span className="font-bold text-foreground">YSMN</span>
              </Link>
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
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 text-lg font-medium transition-colors w-full text-left ${
                    location === link.href ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <div className="p-4 border-t border-border space-y-4">
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full gradient-accent text-accent-foreground" data-testid="mobile-button-get-quote">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
