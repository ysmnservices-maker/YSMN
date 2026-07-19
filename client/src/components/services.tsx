import { motion } from "framer-motion";
import { Home, Building, Leaf, Waves, Fan, Sparkles, ArrowRight, ClipboardList, Users, MapPin, Heart, Activity, Stethoscope, Star } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import domesticPng from "@assets/generated_images/Domestic.png";
import commercialPng from "@assets/generated_images/Commercial.png";
import gardenPng from "@assets/generated_images/garden.png";
import poolPng from "@assets/generated_images/Pool.png";
import postEventPng from "@assets/generated_images/Post-Event Cleaning.png";
import deepCleaningPng from "@assets/generated_images/deep cleaning.png";
import householdImg from "@assets/istockphoto-887388516-612x612.jpg";
import companionshipImg from "@assets/Playful Learning Moment.png";
import communityOutingsImg from "@assets/community.png";
import healthCareImg from "@assets/Health.png";
import healthSupportImg from "@assets/mandatory-training-for-healthcare-staff-768x880.png";
import rehabilitationImg from "@assets/Companionship.png";
import { getWebsiteData } from "@/lib/storage";

// Create icon map
const iconMap: Record<string, any> = {
  Home,
  Building,
  Leaf,
  Waves,
  Fan,
  Sparkles,
  ClipboardList,
  Users,
  MapPin,
  Heart,
  Activity,
  Stethoscope,
};

// Image map
const imageMap: Record<string, string> = {
  domestic: domesticPng,
  commercial: commercialPng,
  garden: gardenPng,
  pool: poolPng,
  "post-event": postEventPng,
  "deep-cleaning": deepCleaningPng,
  "household-tasks": householdImg,
  companionship: companionshipImg,
  "community-outings": communityOutingsImg,
  "elderly-care": healthCareImg,
  "healthcare-support": healthSupportImg,
  "rehabilitation-care": rehabilitationImg,
};

export default function Services() {
  const [services, setServices] = useState(() => getWebsiteData().services);

  useEffect(() => {
    // Optional: add a way to listen for changes, but for now just load on mount
    setServices(getWebsiteData().services);
  }, []);

  return (
    <section id="services" className="py-10 pt-8 overflow-hidden" data-testid="services-section">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base font-semibold text-primary uppercase tracking-wide" data-testid="services-label">
            Our Services
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-primary" data-testid="services-title">
            Complete Cleaning Solutions
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="services-description">
            From domestic to commercial, choose eco‑friendly, non‑toxic cleaning tailored to you. Build a custom plan—and earn with our reusable waste buy‑back program.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.iconName] || Home;
            const serviceImage = imageMap[service.id] || service.image;
            return (
              <motion.div
                key={service.id}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow group max-w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                data-testid={`service-card-${service.id}`}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={serviceImage} 
                    alt={`${service.title} service`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    data-testid={`service-image-${service.id}`}
                  />
                </div>
                <div className="p-5">
              <div className={`w-10 h-10 ${service.gradient} rounded-lg flex items-center justify-center mb-3`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2 line-clamp-2" data-testid={`service-title-${service.id}`}>
                {service.title}
              </h4>
              <div className="flex items-center space-x-1 mb-2">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium text-foreground">{service.rating}</span>
                <span className="text-xs text-muted-foreground">({service.reviews})</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3" data-testid={`service-description-${service.id}`}>
                {service.description}
              </p>
                  <Link href={service.link || `/service/${service.id}`}>
                    <button className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors group-hover:translate-x-1 transition-transform duration-200 flex items-center" data-testid={`button-learn-more-${service.id}`}>
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
