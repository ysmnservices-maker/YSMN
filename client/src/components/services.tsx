import { motion } from "framer-motion";
import { Home, Building, Leaf, Waves, Fan, Sparkles, ArrowRight, ClipboardList, Users, MapPin, Heart, Activity, Syringe, Stethoscope, Pill, Star } from "lucide-react";
import { Link } from "wouter";
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

const services = [
  {
    id: "domestic",
    title: "Domestic Cleaning Perth",
    description: "Professional domestic cleaning services in Perth. Reliable home cleaning tailored to your needs, including regular weekly or fortnightly cleans, deep spring cleaning, end of lease cleaning, and one-off special cleans across Perth Metro. We focus on kitchens, bathrooms, dusting, vacuuming, mopping, and all your home cleaning requirements.",
    icon: Home,
    image: domesticPng,
    gradient: "gradient-primary",
    link: "/domestic-cleaning-perth",
    rating: 4.9,
    reviews: 120
  },
  {
    id: "commercial",
    title: "Commercial Cleaning Services Perth",
    description: "Professional commercial cleaning services in Perth. Reliable and consistent cleaning for offices, retail spaces, medical facilities, schools, and commercial premises tailored to your business hours and specific needs. We handle daily, weekly, and monthly cleaning contracts with attention to detail.",
    icon: Building,
    image: commercialPng,
    gradient: "gradient-primary",
    link: "/commercial-cleaning-perth",
    rating: 4.8,
    reviews: 85
  },
  {
    id: "garden",
    title: "Garden Maintenance",
    description: "Complete garden maintenance services including lawn mowing, hedge trimming, weeding, garden cleanup, mulching, pruning, and general landscape maintenance to keep your outdoor spaces looking pristine and healthy all year round.",
    icon: Leaf,
    image: gardenPng,
    gradient: "gradient-accent",
    rating: 5.0,
    reviews: 60
  },
  {
    id: "pool",
    title: "Pool Cleaning Services Perth",
    description: "Professional pool cleaning and maintenance services in Perth. Weekly or fortnightly pool service including water testing and balancing, vacuuming, brushing walls, skimming debris, cleaning filters, and equipment checks to keep your swimming pool crystal clear, safe, and perfectly maintained year-round.",
    icon: Waves,
    image: poolPng,
    gradient: "gradient-accent",
    link: "/pool-cleaning-perth",
    rating: 4.9,
    reviews: 72
  },
  {
    id: "post-event",
    title: "Post-Event Cleaning",
    description: "Comprehensive cleanup after parties, corporate events, weddings, construction work, renovations, and special occasions to quickly restore your space to pristine condition, including rubbish removal, surface cleaning, and full refresh.",
    icon: Fan,
    image: postEventPng,
    gradient: "gradient-primary",
    rating: 4.7,
    reviews: 45
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning Services Perth",
    description: "Professional deep cleaning services in Perth. Detailed, thorough cleaning ideal for homes moving in/out, rental properties, spring cleans, and general refresh cleans across Perth Metro, covering all those hard-to-reach areas and neglected spaces.",
    icon: Sparkles,
    image: deepCleaningPng,
    gradient: "gradient-accent",
    link: "/deep-cleaning-perth",
    rating: 5.0,
    reviews: 98
  },
  {
    id: "household-tasks",
    title: "Household Assistance Services Perth",
    description: "Reliable household assistance services in Perth. Practical everyday home support including meal preparation, shopping, laundry, ironing, organising, and light housework to help individuals maintain a safe, comfortable, and independent lifestyle.",
    icon: ClipboardList,
    image: householdImg,
    gradient: "gradient-primary",
    link: "/household-assistance-perth",
    rating: 4.9,
    reviews: 55
  },
  {
    id: "companionship",
    title: "Companionship Support Services Perth",
    description: "Warm and friendly companionship support services in Perth. Social support, conversation, activities, and emotional support to reduce loneliness and encourage confidence, connection, and overall wellbeing.",
    icon: Users,
    image: companionshipImg,
    gradient: "gradient-accent",
    link: "/companionship-perth",
    rating: 5.0,
    reviews: 42
  },
  {
    id: "community-outings",
    title: "Community Access & Outings Perth",
    description: "Community access and outings support in Perth. Assisting with transport, shopping, appointments, social activities, and helping individuals stay active, engaged, and confident within their local community.",
    icon: MapPin,
    image: communityOutingsImg,
    gradient: "gradient-primary",
    link: "/community-access-perth",
    rating: 4.8,
    reviews: 38
  },
  {
    id: "elderly-care",
    title: "Elderly Care Services Perth",
    description: "Compassionate elderly care services in Perth. In-home support helping older Australians maintain comfort, dignity, and independence with personal care, domestic help, medication reminders, and companionship.",
    icon: Heart,
    image: healthCareImg,
    gradient: "gradient-accent",
    link: "/elderly-care-perth",
    rating: 5.0,
    reviews: 67
  },
  {
    id: "healthcare-support",
    title: "In-Home Healthcare Support Perth",
    description: "In-home healthcare support services in Perth. Personalised daily assistance with personal care, mobility support, medication prompts, and lifestyle support delivered with care, professionalism, and respect in the comfort of your home.",
    icon: Stethoscope,
    image: healthSupportImg,
    gradient: "gradient-primary",
    link: "/healthcare-support-perth",
    rating: 4.9,
    reviews: 51
  },
  {
    id: "rehabilitation-care",
    title: "Rehabilitation Support Perth",
    description: "Rehabilitation support services in Perth to help individuals recover, regain confidence, and maintain independence after illness, injury, or surgery with personalised support plans tailored to your recovery journey.",
    icon: Activity,
    image: rehabilitationImg,
    gradient: "gradient-accent",
    link: "/rehabilitation-support-perth",
    rating: 4.8,
    reviews: 35
  }
];

export default function Services() {
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
            const Icon = service.icon;
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
                    src={service.image} 
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
