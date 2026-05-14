import { motion } from "framer-motion";
import { Eye, Target, Check } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50" data-testid="about-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wide" data-testid="about-label">
                About YSMN
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent" data-testid="about-title">
                Family Values, Professional Results
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-description">
                YSMN Complete Care and Support Services is a proud, family-owned business. We use eco‑friendly, non‑toxic products, offer fully customizable service packages, and even pay for reusable waste materials—so your space shines and the planet benefits.
              </p>
            </div>
            
            {/* Mission Vision Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border" data-testid="vision-card">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Our Vision</h4>
                <p className="text-sm text-muted-foreground">
                  We envision becoming a leading name in the cleaning industry, known for our dedication to sustainable cleaning practices, impeccable customer service, and a family-driven approach to every client interaction.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-border" data-testid="mission-card">
                <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-accent-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Our Mission</h4>
                <p className="text-sm text-muted-foreground">
                  At YSMN Cleaning Company, our mission is to create spotless, welcoming environments that enhance the quality of life for our clients. We aim to build long-lasting relationships based on trust, reliability, and a commitment to excellence.
                </p>
              </div>
            </div>
            
            {/* Feature List */}
            <div className="space-y-4" data-testid="features-list">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 gradient-accent rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent-foreground" />
                </div>
                <span className="text-foreground">Family-owned business with personal touch</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 gradient-accent rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent-foreground" />
                </div>
                <span className="text-foreground">Eco-friendly cleaning products and practices</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 gradient-accent rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent-foreground" />
                </div>
                <span className="text-foreground">Professional and reliable trained team</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional cleaning team working together" 
              className="rounded-2xl shadow-xl w-full h-auto"
              data-testid="about-image"
            />
            
            {/* Experience Badge */}
            <div className="absolute top-6 right-6 bg-primary text-primary-foreground p-4 rounded-xl text-center shadow-lg" data-testid="experience-badge">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm">Years</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
