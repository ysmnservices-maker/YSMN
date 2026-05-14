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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Shield, Phone, CheckCircle, Star } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

// Detailed service data
const serviceDetails = {
  "domestic": {
    title: "Domestic Cleaning Services",
    subtitle: "Creating Spotless Homes for Families",
    description: "Our comprehensive domestic cleaning services ensure your home is a clean, healthy, and comfortable space for you and your family.",
    image: domesticPng,
    detailedDescription: "At YSMN Cleaning Company, we understand that your home is your sanctuary. Our domestic cleaning services are designed to maintain the highest standards of cleanliness while respecting your personal space and belongings. Our trained professionals use eco-friendly products and proven techniques to deliver exceptional results every time.",
    services: [
      "Regular weekly, bi-weekly, or monthly house cleaning",
      "Deep cleaning for kitchens and bathrooms",
      "Dusting of all surfaces and furniture",
      "Vacuuming and mopping all floors",
      "Window cleaning (interior)",
      "Appliance cleaning and sanitization",
      "Bedroom and living area organization",
      "Trash removal and recycling"
    ],
    benefits: [
      "More time for family and personal activities",
      "Professional-grade cleaning equipment and products",
      "Consistent cleaning schedule you can rely on",
      "Insured and bonded cleaning professionals",
      "Customizable cleaning plans to fit your needs",
      "Eco-friendly cleaning products available"
    ],
    pricing: "Starting from $80 per visit",
    duration: "2-4 hours depending on home size"
  },
  "commercial": {
    title: "Commercial Cleaning Services",
    subtitle: "Professional Spaces, Professional Results",
    description: "Maintain a clean, professional environment that impresses clients and promotes employee health and productivity.",
    image: commercialPng,
    detailedDescription: "Your business environment reflects your brand and values. Our commercial cleaning services ensure your workplace maintains the highest standards of cleanliness and professionalism. We work with offices, retail spaces, medical facilities, and other commercial establishments to create environments that promote productivity and leave lasting positive impressions on clients and employees.",
    services: [
      "Daily, weekly, or monthly office cleaning",
      "Restroom sanitization and restocking",
      "Floor care including carpets and hard surfaces",
      "Window and glass cleaning",
      "Breakroom and kitchen area cleaning",
      "Reception area and common space maintenance",
      "Waste management and recycling",
      "Specialized medical facility cleaning"
    ],
    benefits: [
      "Improved employee health and productivity",
      "Professional appearance for clients and visitors",
      "Flexible scheduling including after-hours service",
      "Specialized equipment for commercial spaces",
      "Compliance with health and safety regulations",
      "Customized cleaning protocols for your industry"
    ],
    pricing: "Starting from $150 per visit",
    duration: "1-6 hours depending on facility size"
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
    title: "Pool Cleaning Services",
    subtitle: "Crystal Clear Water, Every Time",
    description: "Professional pool maintenance services to keep your pool sparkling clean, safe, and ready for enjoyment year-round.",
    image: poolPng,
    detailedDescription: "Maintaining a swimming pool requires specialized knowledge and consistent care. Our professional pool cleaning services ensure your pool water remains crystal clear, chemically balanced, and safe for swimming. We handle everything from routine maintenance to equipment servicing, so you can simply enjoy your pool.",
    services: [
      "Weekly pool water testing and balancing",
      "Skimming and debris removal",
      "Pool floor and wall cleaning",
      "Filter cleaning and maintenance",
      "Pool equipment inspection",
      "Chemical treatment and adjustment",
      "Pool tile and coping cleaning",
      "Seasonal pool opening and closing"
    ],
    benefits: [
      "Safe, properly balanced pool water",
      "Extended equipment lifespan",
      "Consistent maintenance schedule",
      "Professional-grade chemicals and equipment",
      "Early problem detection and prevention",
      "More time to enjoy your pool"
    ],
    pricing: "Starting from $100 per visit",
    duration: "1-2 hours per maintenance visit"
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
    title: "Deep Cleaning Services",
    subtitle: "Intensive Cleaning for Exceptional Results",
    description: "Comprehensive deep cleaning services including carpet cleaning, window washing, and move-in/move-out cleaning.",
    image: deepCleaningPng,
    detailedDescription: "Sometimes regular cleaning isn't enough. Our deep cleaning services provide the intensive, thorough cleaning your space needs for special occasions, seasonal maintenance, or when moving in or out of a property. We tackle every corner, surface, and detail to deliver exceptional results.",
    services: [
      "Move-in and move-out deep cleaning",
      "Seasonal deep cleaning services",
      "Carpet and upholstery cleaning",
      "Interior window washing",
      "Kitchen appliance deep cleaning",
      "Bathroom sanitization and descaling",
      "Detailed dusting and surface cleaning",
      "Floor stripping and waxing"
    ],
    benefits: [
      "Thorough cleaning of hard-to-reach areas",
      "Professional-grade equipment and products",
      "Perfect for special occasions or moves",
      "Eliminates deep-seated dirt and grime",
      "Improved indoor air quality",
      "Extends the life of furnishings and surfaces"
    ],
    pricing: "Starting from $250 per deep clean",
    duration: "4-8 hours depending on space size"
  },
  "household-tasks": {
    title: "Household Tasks",
    subtitle: "Everyday Help That Makes A Difference",
    description: "Laundry, dishes, tidying, and light meal prep to keep your home comfortable and organized.",
    image: householdImg,
    detailedDescription: "Our team can help with daily home tasks that often pile up—laundry, dishwashing, light meal preparation, tidying living areas, organizing common spaces, and managing small chores—so you can focus on what matters most.",
    services: [
      "Laundry and folding",
      "Dishwashing and kitchen tidying",
      "Light meal prep and fridge clean-up",
      "Bed making and linen changes",
      "Decluttering and organizing common areas",
      "Taking out trash and recycling",
      "Errand assistance (on request)"
    ],
    benefits: [
      "Less stress and more free time",
      "Consistent help on your preferred schedule",
      "Flexible task lists tailored to your needs",
      "Trusted professionals in your home"
    ],
    pricing: "Starting from $70 per visit",
    duration: "1-3 hours depending on tasks"
  },
  "companionship": {
    title: "Companionship",
    subtitle: "Friendly Support And Social Connection",
    description: "Regular visits, conversation, and support with light daily activities to promote independence.",
    image: companionshipImg,
    detailedDescription: "We provide friendly company and conversation, plus support with simple routines—strolls, reading, games, reminders, and tech help. Ideal for seniors or anyone who'd benefit from a caring presence.",
    services: [
      "Scheduled social visits and conversation",
      "Walks and light activities",
      "Reading, games, or hobbies",
      "Medication and appointment reminders",
      "Basic technology help (phone, TV, tablets)"
    ],
    benefits: [
      "Reduced loneliness and isolation",
      "Improved mood and daily routine",
      "Personalized attention and care"
    ],
    pricing: "Starting from $60 per visit",
    duration: "1-2 hours per visit"
  },
  "community-outings": {
    title: "Community Outings",
    subtitle: "Stay Active And Connected",
    description: "Escorted trips to appointments, shopping, social events, and local activities.",
    image: communityOutingsImg,
    detailedDescription: "We accompany clients to appointments, shops, parks, and community events—providing safe transport support, companionship, and gentle guidance throughout the outing.",
    services: [
      "Medical and personal appointments",
      "Grocery and personal shopping",
      "Park walks and community events",
      "Pharmacy and post office runs",
      "Cultural and social activities"
    ],
    benefits: [
      "Confidence to get out and about",
      "Reliable assistance door-to-door",
      "Engaging, social experiences"
    ],
    pricing: "Starting from $90 per outing",
    duration: "1-4 hours depending on itinerary"
  }
};

export default function ServiceDetail() {
  const params = useParams();
  const serviceId = params.id as keyof typeof serviceDetails;
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