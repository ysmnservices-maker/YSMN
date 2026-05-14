import { motion } from "framer-motion";
import { Home, Building, Leaf, Waves, Fan, Sparkles, ArrowRight, ClipboardList, Users, MapPin, Heart, Activity, Syringe, Stethoscope, Pill } from "lucide-react";
import { Link } from "wouter";
import domesticPng from "@assets/generated_images/Domestic.png";
import commercialPng from "@assets/generated_images/Commercial.png";
import gardenPng from "@assets/generated_images/garden.png";
import cleanTeamImage from "@assets/generated_images/Professional_YSMN_cleaning_team_60cc2198.png";
import cleanHomeImage from "@assets/generated_images/Clean_modern_home_interior_413d0008.png";
import poolPng from "@assets/generated_images/Pool.png";
import postEventPng from "@assets/generated_images/Post-Event Cleaning.png";
import deepCleaningPng from "@assets/generated_images/deep cleaning.png";
import householdImg from "@assets/istockphoto-887388516-612x612.jpg";
import companionshipImg from "@assets/Playful Learning Moment.png";
import communityOutingsImg from "@assets/community.png";
import healthCareImg from "@assets/Health.png";
import healthSupportImg from "@assets/mandatory-training-for-healthcare-staff-768x880.png";
import rehabilitationImg from "@assets/Companionship.png";

const services = [
  {
    id: "domestic",
    title: "Domestic Cleaning",
    description: "Regular house cleaning, deep cleaning, kitchen and bathroom sanitization, dusting, and comprehensive home maintenance services.",
    icon: Home,
    image: domesticPng,
    gradient: "gradient-primary"
  },
  {
    id: "commercial",
    title: "Commercial Cleaning",
    description: "Office cleaning, retail spaces, medical facilities, and commercial building maintenance with flexible scheduling options.",
    icon: Building,
    image: commercialPng,
    gradient: "gradient-primary"
  },
  {
    id: "garden",
    title: "Garden Maintenance",
    description: "Lawn care, hedge trimming, weeding, garden cleanup, and landscape maintenance to keep your outdoor spaces pristine.",
    icon: Leaf,
    image: gardenPng,
    gradient: "gradient-accent"
  },
  {
    id: "pool",
    title: "Pool Cleaning",
    description: "Complete pool maintenance, water testing, chemical balancing, skimming, and equipment servicing for crystal clear pools.",
    icon: Waves,
    image: poolPng,
    gradient: "gradient-accent"
  },
  {
    id: "post-event",
    title: "Post-Event Cleaning",
    description: "Comprehensive cleanup after parties, corporate events, construction work, and special occasions to restore your space.",
    icon: Fan,
    image: postEventPng,
    gradient: "gradient-primary"
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    description: "Intensive cleaning services including carpet cleaning, window washing, appliance deep clean, and move-in/move-out cleaning.",
    icon: Sparkles,
    image: deepCleaningPng,
    gradient: "gradient-accent"
  },
  {
    id: "household-tasks",
    title: "Household Tasks",
    description: "Laundry, dishwashing, tidying, light meal prep, and everyday chores to keep your home running smoothly.",
    icon: ClipboardList,
    image: householdImg,
    gradient: "gradient-primary"
  },
  {
    id: "companionship",
    title: "Companionship",
    description: "Friendly visits, conversation, and assistance with daily activities to support independent living.",
    icon: Users,
    image: companionshipImg,
    gradient: "gradient-accent"
  },
  {
    id: "community-outings",
    title: "Community Outings",
    description: "Escorted trips to appointments, shopping, social events, and community activities.",
    icon: MapPin,
    image: communityOutingsImg,
    gradient: "gradient-primary"
  },
  {
    id: "elderly-care",
    title: "Elderly Care",
    description: "Compassionate in-home care for seniors, including personal care, medication reminders, and daily living assistance.",
    icon: Heart,
    image: healthCareImg,
    gradient: "gradient-accent"
  },
  {
    id: "healthcare-support",
    title: "Healthcare Support",
    description: "Trained healthcare assistants providing support with medication management, mobility assistance, and health monitoring.",
    icon: Stethoscope,
    image: healthSupportImg,
    gradient: "gradient-primary"
  },
  {
    id: "rehabilitation-care",
    title: "Rehabilitation Care",
    description: "Specialized care for post-surgery or injury recovery, including physical therapy support and mobility exercises.",
    icon: Activity,
    image: rehabilitationImg,
    gradient: "gradient-accent"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20" data-testid="services-section">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide" data-testid="services-label">
            Our Services
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-foreground bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent" data-testid="services-title">
            Complete Cleaning Solutions
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="services-description">
            From domestic to commercial, choose eco‑friendly, non‑toxic cleaning tailored to you. Build a custom plan—and earn with our reusable waste buy‑back program.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`service-card-${service.id}`}
              >
                <img 
                  src={service.image} 
                  alt={`${service.title} service`} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`service-image-${service.id}`}
                />
                <div className="p-6">
                  <div className={`w-12 h-12 ${service.gradient} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2" data-testid={`service-title-${service.id}`}>
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground mb-4" data-testid={`service-description-${service.id}`}>
                    {service.description}
                  </p>
                  <Link href={`/service/${service.id}`}>
                    <button className="text-primary font-semibold hover:text-primary/80 transition-colors group-hover:translate-x-1 transition-transform duration-200 flex items-center" data-testid={`button-learn-more-${service.id}`}>
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
