// Types for all website data

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // We'll use icon names instead of components for localStorage
  image: string;
  gradient: string;
  link?: string;
  rating: number;
  reviews: number;
}

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
  image: string;
  rating: number;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface HeroFeature {
  icon: string;
  text: string;
}

export interface HeroData {
  tagline: string;
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  description3: string;
  keyServices: string[];
  features: HeroFeature[];
  rating: number;
  reviewCount: number;
  yearsExperience: number;
  happyClients: number;
}

export interface AboutFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Staff {
  id: number;
  username: string;
  password: string;
  name: string;
  role: string;
  email: string;
}

export interface JobOpportunity {
  id: number;
  title: string;
  description: string;
  location: string;
  type: string;
  requirements: string;
}

export interface WebsiteData {
  services: Service[];
  testimonials: Testimonial[];
  whyChooseUs: WhyChooseUsItem[];
  hero: HeroData;
  aboutFeatures: AboutFeature[];
  staff: Staff[];
  jobOpportunities: JobOpportunity[];
}

// Initial data from the existing website components
export const initialData: WebsiteData = {
  services: [
    {
      id: "domestic",
      title: "Domestic Cleaning Perth",
      description: "Professional domestic cleaning services in Perth. Reliable home cleaning tailored to your needs, including regular weekly or fortnightly cleans, deep spring cleaning, end of lease cleaning, and one-off special cleans across Perth Metro. We focus on kitchens, bathrooms, dusting, vacuuming, mopping, and all your home cleaning requirements.",
      iconName: "Home",
      image: "/src/assets/generated_images/Domestic.png",
      gradient: "gradient-primary",
      link: "/domestic-cleaning-perth",
      rating: 4.9,
      reviews: 120
    },
    {
      id: "commercial",
      title: "Commercial Cleaning Services Perth",
      description: "Professional commercial cleaning services in Perth. Reliable and consistent cleaning for offices, retail spaces, medical facilities, schools, and commercial premises tailored to your business hours and specific needs. We handle daily, weekly, and monthly cleaning contracts with attention to detail.",
      iconName: "Building",
      image: "/src/assets/generated_images/Commercial.png",
      gradient: "gradient-primary",
      link: "/commercial-cleaning-perth",
      rating: 4.8,
      reviews: 85
    },
    {
      id: "garden",
      title: "Garden Maintenance",
      description: "Complete garden maintenance services including lawn mowing, hedge trimming, weeding, garden cleanup, mulching, pruning, and general landscape maintenance to keep your outdoor spaces looking pristine and healthy all year round.",
      iconName: "Leaf",
      image: "/src/assets/generated_images/garden.png",
      gradient: "gradient-accent",
      rating: 5.0,
      reviews: 60
    },
    {
      id: "pool",
      title: "Pool Cleaning Services Perth",
      description: "Professional pool cleaning and maintenance services in Perth. Weekly or fortnightly pool service including water testing and balancing, vacuuming, brushing walls, skimming debris, cleaning filters, and equipment checks to keep your swimming pool crystal clear, safe, and perfectly maintained year-round.",
      iconName: "Waves",
      image: "/src/assets/generated_images/Pool.png",
      gradient: "gradient-accent",
      link: "/pool-cleaning-perth",
      rating: 4.9,
      reviews: 72
    },
    {
      id: "post-event",
      title: "Post-Event Cleaning",
      description: "Comprehensive cleanup after parties, corporate events, weddings, construction work, renovations, and special occasions to quickly restore your space to pristine condition, including rubbish removal, surface cleaning, and full refresh.",
      iconName: "Fan",
      image: "/src/assets/generated_images/Post-Event Cleaning.png",
      gradient: "gradient-primary",
      rating: 4.7,
      reviews: 45
    },
    {
      id: "deep-cleaning",
      title: "Deep Cleaning Services Perth",
      description: "Professional deep cleaning services in Perth. Detailed, thorough cleaning ideal for homes moving in/out, rental properties, spring cleans, and general refresh cleans across Perth Metro, covering all those hard-to-reach areas and neglected spaces.",
      iconName: "Sparkles",
      image: "/src/assets/generated_images/deep cleaning.png",
      gradient: "gradient-accent",
      link: "/deep-cleaning-perth",
      rating: 5.0,
      reviews: 98
    },
    {
      id: "household-tasks",
      title: "Household Assistance Services Perth",
      description: "Reliable household assistance services in Perth. Practical everyday home support including meal preparation, shopping, laundry, ironing, organising, and light housework to help individuals maintain a safe, comfortable, and independent lifestyle.",
      iconName: "ClipboardList",
      image: "/src/assets/istockphoto-887388516-612x612.jpg",
      gradient: "gradient-primary",
      link: "/household-assistance-perth",
      rating: 4.9,
      reviews: 55
    },
    {
      id: "companionship",
      title: "Companionship Support Services Perth",
      description: "Warm and friendly companionship support services in Perth. Social support, conversation, activities, and emotional support to reduce loneliness and encourage confidence, connection, and overall wellbeing.",
      iconName: "Users",
      image: "/src/assets/Playful Learning Moment.png",
      gradient: "gradient-accent",
      link: "/companionship-perth",
      rating: 5.0,
      reviews: 42
    },
    {
      id: "community-outings",
      title: "Community Access & Outings Perth",
      description: "Community access and outings support in Perth. Assisting with transport, shopping, appointments, social activities, and helping individuals stay active, engaged, and confident within their local community.",
      iconName: "MapPin",
      image: "/src/assets/community.png",
      gradient: "gradient-primary",
      link: "/community-access-perth",
      rating: 4.8,
      reviews: 38
    },
    {
      id: "elderly-care",
      title: "Elderly Care Services Perth",
      description: "Compassionate elderly care services in Perth. In-home support helping older Australians maintain comfort, dignity, and independence with personal care, domestic help, medication reminders, and companionship.",
      iconName: "Heart",
      image: "/src/assets/Health.png",
      gradient: "gradient-accent",
      link: "/elderly-care-perth",
      rating: 5.0,
      reviews: 67
    },
    {
      id: "healthcare-support",
      title: "In-Home Healthcare Support Perth",
      description: "In-home healthcare support services in Perth. Personalised daily assistance with personal care, mobility support, medication prompts, and lifestyle support delivered with care, professionalism, and respect in the comfort of your home.",
      iconName: "Stethoscope",
      image: "/src/assets/mandatory-training-for-healthcare-staff-768x880.png",
      gradient: "gradient-primary",
      link: "/healthcare-support-perth",
      rating: 4.9,
      reviews: 51
    },
    {
      id: "rehabilitation-care",
      title: "Rehabilitation Support Perth",
      description: "Rehabilitation support services in Perth to help individuals recover, regain confidence, and maintain independence after illness, injury, or surgery with personalised support plans tailored to your recovery journey.",
      iconName: "Activity",
      image: "/src/assets/Companionship.png",
      gradient: "gradient-accent",
      link: "/rehabilitation-support-perth",
      rating: 4.8,
      reviews: 35
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Michael Chen",
      title: "Business Owner",
      content: "YSMN completely transformed our office space! The attention to detail was incredible, and our workspace has never looked this clean. Highly recommend their professional services!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Homeowner",
      content: "From the moment they arrived, I knew I was in good hands. YSMN's team was efficient, meticulous, and left my home looking brand new. Couldn't be happier!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      rating: 5
    },
    {
      id: 3,
      name: "David Rodriguez",
      title: "Property Manager",
      content: "I've used many cleaning services before, but YSMN is by far the best. They left every corner spotless, and the fresh feeling lasted for days. Five stars!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      rating: 5
    }
  ],
  whyChooseUs: [
    {
      id: "family-values",
      title: "Family Values",
      description: "As a family-owned business, we treat every client like family with honesty, integrity, and genuine care.",
      iconName: "Users"
    },
    {
      id: "eco-friendly",
      title: "Eco-Friendly",
      description: "We use environmentally friendly products and practices to ensure safety for you, your family, and the planet.",
      iconName: "Leaf"
    },
    {
      id: "reliable",
      title: "Reliable & Punctual",
      description: "Our experienced staff is thoroughly trained and committed to punctuality, professionalism, and attention to detail.",
      iconName: "Clock"
    },
    {
      id: "affordable",
      title: "Affordable Pricing",
      description: "Quality cleaning shouldn't break the bank. We offer competitive rates without compromising service quality.",
      iconName: "DollarSign"
    }
  ],
  hero: {
    tagline: "Trusted Cleaning & Care in Perth",
    title: "Your Trusted Partner for Complete House Care and Support",
    subtitle: "",
    description1: "YSMN Complete Care and Support Services is a proud, family-owned business serving Perth and surrounding areas. We specialize in providing top-quality cleaning and support services using eco-friendly, non-toxic products that are safe for your family, pets, and the planet.",
    description2: "Whether you need regular home cleaning, commercial services, or in-home care and support, our experienced team is here to help. We customize our services to fit your unique needs and schedule, ensuring complete satisfaction every time.",
    description3: "Our commitment to excellence means we go above and beyond to make sure your space is spotless, healthy, and welcoming. We treat every home and business as if it were our own, with the utmost care and respect.",
    keyServices: [
      "Domestic & Deep Cleaning",
      "Commercial & Office Cleaning",
      "Pool & Garden Maintenance",
      "In-Home Care & Support",
      "Elderly & Companionship Care",
      "Rehabilitation Services"
    ],
    features: [
      { icon: "🌱", text: "Eco-Friendly & Non-Toxic Products" },
      { icon: "📋", text: "Customizable Service Plans" },
      { icon: "👨‍👩‍👧‍👦", text: "Family-Owned & Operated" },
      { icon: "📞", text: "24/7 Customer Support" },
      { icon: "🛡️", text: "Fully Insured & Licensed" },
      { icon: "✅", text: "Satisfaction Guaranteed" }
    ],
    rating: 4.9,
    reviewCount: 100,
    yearsExperience: 3,
    happyClients: 100
  },
  aboutFeatures: [
    { id: "family-owned", title: "Family-Owned Business", description: "We treat every client like family", icon: "Users" }
  ],
  staff: [],
  jobOpportunities: []
};

const STORAGE_KEY = "ysmn_website_data";

// Helper functions to get and set data from localStorage
export function getWebsiteData(): WebsiteData {
  if (typeof window === "undefined") return initialData;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return { ...initialData, ...JSON.parse(stored) };
    } catch (e) {
      console.error("Failed to parse website data from localStorage", e);
      return initialData;
    }
  }
  return initialData;
}

export function setWebsiteData(data: Partial<WebsiteData>) {
  if (typeof window === "undefined") return;
  const currentData = getWebsiteData();
  const newData = { ...currentData, ...data };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
}
