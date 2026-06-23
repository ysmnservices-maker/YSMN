import { useParams, Link } from "wouter";
import domesticPng from "@assets/generated_images/Domestic.png";
import commercialPng from "@assets/generated_images/Commercial.png";
import gardenPng from "@assets/generated_images/garden.png";
import cleanTeamImage from "@assets/generated_images/Professional_YSMN_cleaning_team_60cc2198.png";
import cleanHomeImage from "@assets/generated_images/Clean_modern_home_interior_413d0008.png";
import poolPng from "@assets/generated_images/Pool.png";
import postEventPng from "@assets/generated_images/Post-Event Cleaning.png";
import deepCleaningPng from "@assets/generated_images/deep cleaning.png";
import householdImg from "@assets/pexels-fotios-photos-1301856.jpg";
import companionshipImg from "@assets/Playful Learning Moment.png";
import communityOutingsImg from "@assets/pexels-valeria-ushakova-603898-3094208.jpg";
import healthCareImg from "@assets/Health.png";
import healthSupportImg from "@assets/mandatory-training-for-healthcare-staff-768x880.png";
import rehabilitationImg from "@assets/Companionship.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Shield, Phone, CheckCircle, Star } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

// Detailed service data
const serviceDetails = {
  "domestic": {
    title: "Domestic Cleaning Perth",
    subtitle: "Reliable Home Cleaning Services",
    description: "Professional domestic cleaning services in Perth. Reliable home cleaning tailored to your needs, including regular, deep and one-off cleans across Perth Metro.",
    image: domesticPng,
    detailedDescription: "Keeping your home clean and comfortable takes time, effort and consistency. At YSMN, we provide reliable domestic cleaning services in Perth designed to support busy households, families, seniors and individuals who want a cleaner, healthier living environment. Our experienced cleaning team delivers thorough, respectful and detail-focused home cleaning tailored to your specific needs. Whether you require weekly cleaning, fortnightly support or a one-off clean, we create flexible solutions that fit your lifestyle.",
    services: [
      "General home cleaning",
      "Kitchen and bathroom cleaning",
      "Vacuuming and mopping",
      "Dusting and surface cleaning",
      "Bedroom and living area cleaning",
      "Rubbish removal and sanitising"
    ],
    benefits: [
      "Flexible cleaning schedules",
      "Attention to detail",
      "Friendly, professional staff",
      "Supportive and respectful service",
      "Servicing all Perth Metro areas"
    ],
    pricing: "Contact for pricing",
    duration: "Flexible depending on your needs"
  },
  "commercial": {
    title: "Commercial Cleaning Services Perth",
    subtitle: "Professional Workplace Cleaning",
    description: "Professional commercial cleaning services in Perth. Reliable cleaning for offices, retail spaces and facilities tailored to your business needs.",
    image: commercialPng,
    detailedDescription: "A clean workplace creates a positive impression and supports health, safety and productivity. YSMN provides reliable commercial cleaning services in Perth for offices, retail spaces, community facilities and commercial environments. We work closely with businesses to develop cleaning plans that meet operational needs while maintaining high hygiene standards.",
    services: [
      "Office cleaning",
      "Staff kitchens and amenities",
      "Bathrooms and common areas",
      "Floor cleaning and maintenance",
      "Waste removal",
      "Scheduled and after-hours cleaning"
    ],
    benefits: [
      "Custom cleaning plans",
      "Flexible service times",
      "Professional presentation",
      "Reliable ongoing support",
      "Servicing Perth Metro businesses"
    ],
    pricing: "Contact for pricing",
    duration: "Flexible depending on your needs"
  },
  "garden": {
    title: "Garden Maintenance Services",
    subtitle: "Beautiful Outdoor Spaces Made Simple",
    description: "Transform and maintain your outdoor spaces with our comprehensive garden and landscape maintenance services.",
    image: gardenPng,
    detailedDescription: "Your outdoor spaces deserve the same attention to detail as your indoor areas. Our garden maintenance services combine horticultural expertise with cleaning professionalism to keep your gardens, lawns, and outdoor areas looking their absolute best throughout the year.",
    services: [
      "Regular lawn mowing and edging",
      "Hedge trimming and pruning",
      "Weeding and garden bed maintenance",
      "Seasonal garden cleanup",
      "Leaf removal and disposal",
      "Garden path and patio cleaning",
      "Outdoor furniture cleaning",
      "Basic landscape maintenance"
    ],
    benefits: [
      "Enhanced curb appeal and property value",
      "Year-round garden health and beauty",
      "Professional-grade equipment and tools",
      "Seasonal maintenance schedules",
      "Eco-friendly garden care practices",
      "Custom maintenance plans for your landscape"
    ],
    pricing: "Starting from $120 per visit",
    duration: "2-5 hours depending on garden size"
  },
  "pool": {
    title: "Pool Cleaning Services Perth",
    subtitle: "Professional Pool Maintenance",
    description: "Reliable pool cleaning services in Perth. Professional pool maintenance to keep your swimming pool clean, safe and well maintained year-round.",
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    detailedDescription: "Owning a pool requires regular care to maintain cleanliness, water clarity and safe conditions. YSMN offers dependable pool cleaning services in Perth, helping homeowners maintain well-presented and hygienic swimming pools. Our service removes the ongoing burden of pool upkeep, giving you peace of mind.",
    services: [
      "Skimming leaves and debris",
      "Cleaning pool floors and walls",
      "Tile and surface cleaning",
      "Filter inspection and cleaning",
      "General pool maintenance checks",
      "Basic water condition support"
    ],
    benefits: [
      "Prevents algae build-up",
      "Water balance support",
      "Extends pool equipment life",
      "One-off and ongoing services",
      "Servicing Perth Metro areas"
    ],
    pricing: "Contact for pricing",
    duration: "Flexible depending on your pool size"
  },
  "post-event": {
    title: "Post-Event Cleaning Services",
    subtitle: "Restoring Your Space After Any Occasion",
    description: "Comprehensive cleanup services after parties, corporate events, construction work, and special occasions.",
    image: postEventPng,
    detailedDescription: "Whether you've hosted a memorable party, completed a construction project, or organized a corporate event, the cleanup can be overwhelming. Our post-event cleaning services restore your space to its original condition quickly and efficiently, allowing you to focus on what matters most.",
    services: [
      "Complete venue cleanup after parties and events",
      "Construction and renovation cleanup",
      "Corporate event space restoration",
      "Debris removal and disposal",
      "Deep cleaning and sanitization",
      "Floor care and restoration",
      "Window and surface cleaning",
      "Emergency cleanup services"
    ],
    benefits: [
      "Fast and efficient cleanup service",
      "Specialized equipment for tough cleanup jobs",
      "Flexible scheduling including emergency calls",
      "Proper disposal of all waste and debris",
      "Restoration to pre-event condition",
      "Professional cleanup team ready when you need us"
    ],
    pricing: "Starting from $200 per cleanup",
    duration: "2-8 hours depending on event size"
  },
  "deep-cleaning": {
    title: "Deep Cleaning Services Perth",
    subtitle: "Detailed Professional Cleaning",
    description: "Professional deep cleaning services in Perth. Detailed, thorough cleaning ideal for homes, rentals and refresh cleans across Perth Metro.",
    image: deepCleaningPng,
    detailedDescription: "Sometimes a standard clean isn’t enough. YSMN offers comprehensive deep cleaning services in Perth, designed to target built-up dirt, grime and neglected areas throughout your home or property. Our deep cleaning service is ideal for seasonal refreshes, pre-inspection cleans or when your space needs extra attention.",
    services: [
      "Detailed kitchen cleaning",
      "Bathroom sanitisation",
      "Skirting boards and edges",
      "Internal surfaces and fixtures",
      "Hard-to-reach areas",
      "High-detail cleaning throughout the home"
    ],
    benefits: [
      "Spring cleaning",
      "End-of-lease preparation",
      "Property refresh",
      "Moving in or out",
      "Long-term maintenance resets"
    ],
    pricing: "Contact for pricing",
    duration: "Flexible depending on your needs"
  },
  "household-tasks": {
    title: "Household Assistance Services Perth",
    subtitle: "Everyday Home Support",
    description: "Reliable household assistance services in Perth. Practical everyday home support to help individuals maintain a safe, comfortable and independent lifestyle.",
    image: householdImg,
    detailedDescription: "Maintaining a household can become difficult at different stages of life. Whether due to age, disability, injury or changing circumstances, everyday tasks can quickly feel overwhelming. At YSMN, we provide reliable household assistance services in Perth designed to support individuals to live safely, comfortably and independently in their own homes. Our services focus on practical help while respecting personal routines, preferences and independence.",
    services: [
      "Light household cleaning and tidying",
      "Laundry washing, folding and organisation",
      "Meal preparation support",
      "Bed making and linen changes",
      "General household organisation",
      "Maintaining safe and clean living areas"
    ],
    benefits: [
      "Supports independence and choice",
      "Tailored to lifestyle and routines",
      "Safe and comfortable home environment",
      "Respectful, non-intrusive support",
      "Servicing Perth Metro areas"
    ],
    pricing: "Contact for pricing",
    duration: "Flexible depending on your needs"
  },
  "companionship": {
    title: "Companionship Support Services Perth",
    subtitle: "Social Support",
    description: "Companionship support services in Perth. Friendly social support to reduce isolation and encourage confidence, connection and wellbeing.",
    image: companionshipImg,
    detailedDescription: "Human connection plays an important role in emotional wellbeing, confidence and quality of life. YSMN provides compassionate companionship support services in Perth, offering friendly, genuine social support for individuals who may experience isolation or limited social interaction. Our companionship services focus on building trust, comfort and meaningful connection.",
    services: [
      "Friendly conversation and social interaction",
      "Shared hobbies and interests",
      "Accompaniment to appointments or outings",
      "Support at home or in the community",
      "Encouragement with daily routines"
    ],
    benefits: [
      "Reduces loneliness and builds confidence",
      "Person-centred, compassionate support",
      "Tailored to personal interests",
      "Genuine rapport and trust",
      "Servicing Perth Metro areas"
    ],
    pricing: "Contact for pricing",
    duration: "Flexible depending on your needs"
  },
  "community-outings": {
    title: "Community Access & Outings Perth",
    subtitle: "Support Services",
    description: "Community access and outings support in Perth. Helping individuals stay active, engaged and confident within their local community.",
    image: communityOutingsImg,
    detailedDescription: "Remaining connected to the community supports independence, confidence and wellbeing. YSMN provides professional community access and outings support in Perth, helping individuals safely participate in everyday activities outside the home. Our service encourages independence while providing reliable assistance when needed.",
    services: [
      "Assistance with shopping and errands",
      "Attending appointments",
      "Social and recreational outings",
      "Visiting family or friends",
      "Community activities and events"
    ],
    benefits: [
      "Encourages confidence and independence",
      "Safe and reliable support",
      "Tailored to personal goals and interests",
      "Support at client's pace",
      "Servicing Perth Metro areas"
    ],
    pricing: "Contact for pricing",
    duration: "Flexible depending on your needs"
  },
  "elderly-care": {
    title: "Elderly Care Services Perth",
    subtitle: "In-Home Support",
    description: "Compassionate elderly care services in Perth. In-home support helping older Australians maintain comfort, dignity and independence.",
    image: healthCareImg,
    detailedDescription: "As people age, additional support can improve comfort, safety and quality of life. YSMN provides professional elderly care services in Perth, supporting older Australians in their own homes with dignity and respect. Our approach focuses on maintaining independence while offering practical assistance where needed.",
    services: [
      "Assistance with daily routines",
      "Companionship and social engagement",
      "Light household support",
      "Meal preparation assistance",
      "Community access and outings"
    ],
    benefits: [
      "Respect, dignity and choice",
      "Supports quality of life at home",
      "Tailored to individual needs",
      "Calm, respectful and consistent support",
      "Servicing Perth Metro areas"
    ],
    pricing: "Contact for pricing",
    duration: "Flexible depending on your needs"
  },
  "healthcare-support": {
    title: "In-Home Healthcare Support Perth",
    subtitle: "Personalised Support at Home",
    description: "In-home healthcare support services in Perth. Personalised daily assistance delivered with care, professionalism and respect in the comfort of your home.",
    image: healthSupportImg,
    detailedDescription: "Managing everyday routines can become more challenging due to changes in health, mobility or personal circumstances. At YSMN, we provide professional in-home healthcare support in Perth, helping individuals remain safe, comfortable and confident within their own home environment. Our services are designed to support daily wellbeing while maintaining dignity, independence and personal choice. We work alongside individuals and families to provide reliable assistance that fits naturally into existing routines.",
    services: [
      "Daily routines and personal care support",
      "Mobility assistance within the home",
      "Medication reminders as part of daily schedules",
      "Support with hygiene and grooming",
      "Monitoring general wellbeing",
      "Assistance following hospital discharge"
    ],
    benefits: [
      "Person-centred approach to care",
      "Supports independence and confidence",
      "Safe, reliable and respectful care",
      "Ideal for short- or long-term support",
      "Servicing Perth Metro areas"
    ],
    pricing: "Contact for pricing",
    duration: "Flexible depending on your needs"
  },
  "rehabilitation-care": {
    title: "Rehabilitation Support Perth",
    subtitle: "Recovery and Independence",
    description: "Rehabilitation support services in Perth to help individuals recover, regain confidence and maintain independence after illness, injury or surgery.",
    image: rehabilitationImg,
    detailedDescription: "Recovering from illness, injury or surgery requires structured support and encouragement. YSMN provides professional rehabilitation support in Perth, helping individuals rebuild strength, confidence and independence in their own homes. Our approach focuses on safe, gradual progress while respecting personal goals and recovery timelines.",
    services: [
      "Mobility and movement support",
      "Assistance with rehabilitation exercises",
      "Support with daily activities during recovery",
      "Encouragement and motivation",
      "Help with routine and structure",
      "Companionship during recovery"
    ],
    benefits: [
      "Supports safe, gradual recovery",
      "Helps regain independence and confidence",
      "Tailored to individual recovery goals",
      "Encouraging and supportive approach",
      "Servicing Perth Metro areas"
    ],
    pricing: "Contact for pricing",
    duration: "Flexible depending on your recovery needs"
  }
};

export default function ServiceDetail({ id }: { id?: string }) {
  const params = useParams();
  const serviceId = (id || params.id) as keyof typeof serviceDetails;
  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground">Service not found</h1>
          <Link href="/">
            <Button className="mt-4">Return Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // If on service detail page, navigate home and then scroll
      window.location.href = '/#contact';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 hero-pattern" data-testid="service-hero">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="mb-8 text-primary hover:text-primary/80" data-testid="back-button">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20" data-testid="service-badge">
                Professional Service
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight" data-testid="service-title">
                {service.title}
              </h1>
              <p className="text-xl text-primary font-semibold" data-testid="service-subtitle">
                {service.subtitle}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="service-description">
                {service.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToContact}
                  className="gradient-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity"
                  data-testid="button-book-service"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book This Service
                </Button>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span>Insured</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={service.image} 
                alt={service.title} 
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="service-hero-image"
              />
              <div className="absolute top-6 right-6 bg-primary text-primary-foreground p-4 rounded-xl text-center shadow-lg" data-testid="pricing-badge">
                <div className="font-bold">{service.pricing}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-16 bg-muted/50" data-testid="service-details">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center" data-testid="details-title">
              About This <span className="text-primary">Service</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center" data-testid="detailed-description">
              {service.detailedDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16" data-testid="services-included">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground" data-testid="services-included-title">
                  Services Included
                </CardTitle>
                <CardDescription data-testid="services-included-description">
                  Comprehensive cleaning solutions tailored to your needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.services.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3" data-testid={`service-item-${index}`}>
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground" data-testid="benefits-title">
                  Why Choose This Service
                </CardTitle>
                <CardDescription data-testid="benefits-description">
                  Benefits that make a real difference
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3" data-testid={`benefit-item-${index}`}>
                      <Star className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 gradient-primary" data-testid="service-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4" data-testid="cta-title">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto" data-testid="cta-description">
            Contact us today for a free consultation and quote. Let YSMN Cleaning Company transform your space.
          </p>
          <Button 
            onClick={scrollToContact}
            variant="secondary"
            className="px-8 py-4 text-lg font-semibold"
            data-testid="cta-button"
          >
            <Phone className="w-5 h-5 mr-2" />
            Get Your Free Quote
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}