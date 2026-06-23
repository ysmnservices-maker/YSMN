import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, Shield, Send, Phone, MapPin, MessageSquare, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

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

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+61 434548184",
      subDetails: "24/7 Emergency",
      link: "tel:+61 434548184"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "ysmnmanpowerservices@gmail.com",
      link: "mailto:ysmnmanpowerservices@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Perth, WA",
      subDetails: "Serving all metro areas"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Fri: 8:00 AM - 8:00 PM",
      subDetails: "Sat: 9:00 AM - 5:00 PM"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Friendly Team",
      description: "Our team is dedicated to providing excellent service"
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Peace of mind with our comprehensive insurance"
    },
    {
      icon: MessageSquare,
      title: "Quick Response",
      description: "We respond to all enquiries within 24 hours"
    }
  ];

  return (
    <section id="contact" className="py-12" data-testid="contact-section">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide" data-testid="contact-label">
            Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground" data-testid="contact-title">
            Let's Work Together
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="contact-description">
            Contact us today for a free consultation and discover how YSMN can transform your home or business.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-card rounded-xl border border-border p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold text-foreground mb-6" data-testid="form-title">
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
                    <SelectItem value="domestic">Domestic Cleaning Perth</SelectItem>
                    <SelectItem value="commercial">Commercial Cleaning Perth</SelectItem>
                    <SelectItem value="deep">Deep Cleaning Perth</SelectItem>
                    <SelectItem value="pool">Pool Cleaning Perth</SelectItem>
                    <SelectItem value="household">Household Assistance Perth</SelectItem>
                    <SelectItem value="companionship">Companionship Support Perth</SelectItem>
                    <SelectItem value="community">Community Access Perth</SelectItem>
                    <SelectItem value="elderly">Elderly Care Perth</SelectItem>
                    <SelectItem value="healthcare">Healthcare Support Perth</SelectItem>
                    <SelectItem value="rehabilitation">Rehabilitation Support Perth</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="text-foreground">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell us about your cleaning and care needs..."
                  rows={5}
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
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h4 className="text-2xl font-bold text-foreground mb-6" data-testid="contact-info-title">
                Contact Information
              </h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card p-4 rounded-lg border border-border flex items-start space-x-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-lg text-primary font-medium hover:text-primary/80 transition-colors"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-lg text-foreground font-medium">{info.details}</p>
                      )}
                      {info.subDetails && (
                        <p className="text-sm text-muted-foreground">{info.subDetails}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
