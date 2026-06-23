import { Button } from "@/components/ui/button";
import { Phone, Sparkles, Check, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const heroFeatures = [
  { icon: "🌱", text: "Eco-Friendly & Non-Toxic Products" },
  { icon: "📋", text: "Customizable Service Plans" },
  { icon: "👨‍👩‍👧‍👦", text: "Family-Owned & Operated" },
  { icon: "📞", text: "24/7 Customer Support" },
  { icon: "🛡️", text: "Fully Insured & Licensed" },
  { icon: "✅", text: "Satisfaction Guaranteed" }
];

const keyServices = [
  "Domestic & Deep Cleaning",
  "Commercial & Office Cleaning",
  "Pool & Garden Maintenance",
  "In-Home Care & Support",
  "Elderly & Companionship Care",
  "Rehabilitation Services"
];

export default function Hero() {
  return (
    <section id="home" className="relative py-8 lg:py-10 pb-8 lg:pb-10 overflow-hidden" data-testid="hero-section">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-semibold shadow-sm">
                  <Sparkles className="w-5 h-5" />
                  Trusted Cleaning & Care in Perth
                </div>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight"
                data-testid="hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Your Trusted Partner for <br />
                <span className="text-primary">
                  Complete House Care and Support
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4"
              >
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto" data-testid="hero-description">
                  YSMN Complete Care and Support Services is a proud, family-owned business serving Perth and surrounding areas. We specialize in providing top-quality cleaning and support services using eco-friendly, non-toxic products that are safe for your family, pets, and the planet.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Whether you need regular home cleaning, commercial services, or in-home care and support, our experienced team is here to help. We customize our services to fit your unique needs and schedule, ensuring complete satisfaction every time.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Our commitment to excellence means we go above and beyond to make sure your space is spotless, healthy, and welcoming. We treat every home and business as if it were our own, with the utmost care and respect.
                </p>
              </motion.div>
            </div>
            
            {/* Key Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-muted/30 rounded-2xl p-8 border border-border"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">Our Key Services</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {keyServices.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border"
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(37, 99, 235, 0.05)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {heroFeatures.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3 px-5 py-4 bg-card rounded-xl border border-border text-left"
                    whileHover={{ scale: 1.03, y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                    <span className="text-sm font-medium text-foreground">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Link href="/contact">
                <Button 
                  className="gradient-primary text-primary-foreground px-10 py-5 text-lg font-semibold hover:opacity-90 transition-opacity shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl"
                  data-testid="button-book-now"
                >
                  <Phone className="w-6 h-6 mr-2" />
                  Book Free Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  variant="outline"
                  className="border-2 border-primary text-primary px-10 py-5 text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-xl"
                  data-testid="button-our-services"
                >
                  Explore Services <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
            </motion.div>
            
            {/* Website Rating */}
            <motion.div 
              className="flex items-center justify-center space-x-2 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              </div>
              <span className="font-semibold text-foreground">4.9</span>
              <span className="text-muted-foreground">| 100+ Reviews</span>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div 
                className="text-center bg-card p-4 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                data-testid="stat-experience"
              >
                <motion.div 
                  className="text-4xl font-bold text-primary"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                >3</motion.div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </motion.div>
              <motion.div 
                className="text-center bg-card p-4 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                data-testid="stat-clients"
              >
                <motion.div 
                  className="text-4xl font-bold text-primary"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.0, type: "spring" }}
                >100</motion.div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </motion.div>
              <motion.div 
                className="text-center bg-card p-4 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                data-testid="stat-rating"
              >
                <motion.div 
                  className="text-4xl font-bold text-primary"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.1, type: "spring" }}
                >4.9</motion.div>
                <div className="text-sm text-muted-foreground">Client Rating</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
