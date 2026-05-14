import { Button } from "@/components/ui/button";
import { Phone, Play } from "lucide-react";
import { motion } from "framer-motion";
import cleanTeamImage from "@assets/generated_images/Professional_YSMN_cleaning_team_60cc2198.png";
import cleanHomeImage from "@assets/generated_images/Clean_modern_home_interior_413d0008.png";

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative py-20 lg:py-32 hero-pattern" data-testid="hero-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight" data-testid="hero-title">
                Your Trusted Partner for Eco-friendly 
                <span className="text-primary"> Complete House Care and Support </span> Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed" data-testid="hero-description">
                YSMN Complete Care and Support Services is a proud, family-owned business using eco‑friendly, non‑toxic products. Customize your cleaning plan—plus, we reward customers for reusable waste materials.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="gradient-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity"
                data-testid="button-book-now"
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Now
              </Button>
              <Button 
                onClick={scrollToServices}
                variant="outline"
                className="border-2 border-primary text-primary px-8 py-4 text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="button-our-services"
              >
                <Play className="w-5 h-5 mr-2" />
                Our Services
              </Button>
            </div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-center" data-testid="stat-experience">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center" data-testid="stat-clients">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center" data-testid="stat-rating">
                <div className="text-3xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Client Rating</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={cleanTeamImage} 
              alt="Professional YSMN cleaning team in action" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="hero-image"
            />
            
            {/* Floating Badge */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              data-testid="hero-badge"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Fully Insured</div>
                  <div className="text-sm text-muted-foreground">Licensed & Bonded</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
