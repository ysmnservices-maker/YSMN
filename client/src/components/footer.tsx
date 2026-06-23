import { Link } from "wouter";
import { Mail, Clock, Shield, Instagram, Facebook } from "lucide-react";
import ysmnLogo from "@assets/4927272A-D193-435F-A5B0-4F2E306C9D55 (1)_1756472323570.png";

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/ysmnhomecare?igsh=MXByZDBtczIwbjc1ZA==", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/share/1CX24Hg5oU/?mibextid=wwXIfr", label: "Facebook" }
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blogs", label: "Blogs" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact Us" },
    { href: "/staff-portal", label: "Staff Portal" }
  ];

  return (
    <footer className="bg-foreground text-primary-foreground py-16" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Footer Logo */}
          <div className="space-y-4" data-testid="footer-logo-section">
            <Link href="/" className="flex items-center space-x-3">
              <img src={ysmnLogo} alt="YSMN Logo" className="w-10 h-10" />
              <div>
                <h1 className="text-lg font-bold">YSMN</h1>
                <p className="text-sm opacity-70">Complete Care and Support Services</p>
              </div>
            </Link>
            <p className="text-sm opacity-70 leading-relaxed" data-testid="footer-description">
              Family-owned professional company delivering exceptional care, cleaning, and support services for homes and businesses with years of experience and commitment to excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-opacity"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4" data-testid="footer-quick-links">
            <h5 className="font-semibold">Quick Links</h5>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="block text-sm opacity-70 hover:opacity-100 transition-opacity text-left"
                >
                  {link.label}
                </Link>
              ))}
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
              <div className="text-sm opacity-70">Elderly Care</div>
              <div className="text-sm opacity-70">Healthcare Support</div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4" data-testid="footer-contact-info">
            <h5 className="font-semibold">Contact Info</h5>
            <div className="space-y-3">
              <a 
                href="mailto:ysmnmanpowerservices@gmail.com" 
                className="flex items-center space-x-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
                data-testid="footer-email"
              >
                <Mail className="w-4 h-4" />
                <span>ysmnmanpowerservices@gmail.com</span>
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
            © 2025 YSMN Complete Care and Support Services. All rights reserved.
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
