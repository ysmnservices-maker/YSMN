import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, Shield, ArrowRight, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// Direct email endpoint (no backend needed)
const CONTACT_API = 'https://formsubmit.co/ajax/ysmnmanpowerservices@gmail.com';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });

  useEffect(() => {
    // No initialization required for serverless API
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({ 
        title: "Missing Information", 
        description: "Please fill in all required fields.", 
        variant: "destructive" 
      });
      return;
    }

    try {
      const response = await fetch(CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          serviceType: formData.serviceType,
          message: formData.message,
          _subject: `New enquiry from ${formData.firstName} ${formData.lastName}`,
          _captcha: 'false'
        })
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to send');
      }

      toast({ 
        title: "Message Sent!", 
        description: "Thank you for your message! We will get back to you soon." 
      });
      
      // Reset form
      setFormData({ 
        firstName: '', 
        lastName: '', 
        email: '', 
        phone: '', 
        serviceType: '', 
        message: '' 
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      toast({ 
        title: "Send Failed", 
        description: "Please try again later or contact us directly.", 
        variant: "destructive" 
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20" data-testid="contact-section">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide" data-testid="contact-label">
            Get In Touch
          </h2>
          <h3 className="text-4xl font-bold text-foreground" data-testid="contact-title">
            Ready for a Sparkling Clean Space?
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="contact-description">
            Contact us today for a free consultation and discover how YSMN can transform your home or business.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            className="bg-card rounded-xl border border-border p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-semibold text-foreground mb-6" data-testid="form-title">
              Get Your Free Quote
            </h4>
            
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-foreground">First Name *</Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="John"
                    className="mt-2"
                    data-testid="input-first-name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-foreground">Last Name *</Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Doe"
                    className="mt-2"
                    data-testid="input-last-name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="john@example.com"
                  className="mt-2"
                  data-testid="input-email"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+61 000 000 000"
                  className="mt-2"
                  data-testid="input-phone"
                />
              </div>
              
              <div>
                <Label htmlFor="serviceType" className="text-foreground">Service Type</Label>
                <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                  <SelectTrigger className="mt-2" data-testid="select-service-type">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="domestic">Domestic Cleaning</SelectItem>
                    <SelectItem value="commercial">Commercial Cleaning</SelectItem>
                    <SelectItem value="garden">Garden Maintenance</SelectItem>
                    <SelectItem value="pool">Pool Cleaning</SelectItem>
                    <SelectItem value="post-event">Post-Event Cleaning</SelectItem>
                    <SelectItem value="deep">Deep Cleaning</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="text-foreground">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell us about your cleaning needs..."
                  rows={4}
                  className="mt-2"
                  data-testid="input-message"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full gradient-primary text-primary-foreground py-4 text-lg font-semibold hover:opacity-90 transition-opacity"
                data-testid="button-send-message"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h4 className="text-2xl font-semibold text-foreground mb-6" data-testid="contact-info-title">
                Contact Information
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email Us</h4>
                    <a href="mailto:ysmnmanpowerservices@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      ysmnmanpowerservices@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 pt-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Working Hours</h4>
                    <p className="text-muted-foreground">
                      Mon - Fri: 8:00 AM - 8:00 PM<br />
                      Sat: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
                

                
                <div className="flex items-start space-x-4 pt-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Call Us</h4>
                    <div className="space-y-1">
                      <a href="tel:+61 434548184" className="block text-muted-foreground hover:text-primary transition-colors">
                        +61 434548184 (24/7 Emergency)
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 pt-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">24/7 Emergency Service</h4>
                    <p className="text-muted-foreground">
                      Available for urgent cleaning and care needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            

          </motion.div>
        </div>
      </div>
    </section>
  );
}
