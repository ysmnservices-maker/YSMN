import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
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
];

const whyChooseUs = [
  {
    id: "family-values",
    title: "Family Values",
    description: "As a family-owned business, we treat every client like family with honesty, integrity, and genuine care.",
    icon: "fas fa-users",
    gradient: "gradient-primary"
  },
  {
    id: "eco-friendly",
    title: "Eco-Friendly",
    description: "We use environmentally friendly products and practices to ensure safety for you, your family, and the planet.",
    icon: "fas fa-leaf",
    gradient: "gradient-accent"
  },
  {
    id: "reliable",
    title: "Reliable & Punctual",
    description: "Our experienced staff is thoroughly trained and committed to punctuality, professionalism, and attention to detail.",
    icon: "fas fa-clock",
    gradient: "gradient-primary"
  },
  {
    id: "affordable",
    title: "Affordable Pricing",
    description: "Quality cleaning shouldn't break the bank. We offer competitive rates without compromising service quality.",
    icon: "fas fa-dollar-sign",
    gradient: "gradient-accent"
  }
];

export default function Testimonials() {
  return (
    <>
      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/50" data-testid="why-choose-us-section">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide" data-testid="why-choose-label">
              Why Choose YSMN
            </h2>
            <h3 className="text-4xl font-bold text-foreground" data-testid="why-choose-title">
              <span className="text-accent">Excellence</span> in Every <span className="text-foreground">Detail</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="why-choose-description">
              We go above and beyond to ensure your space is not just clean, but spotless, healthy, and welcoming.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`benefit-card-${benefit.id}`}
              >
                <div className={`w-16 h-16 ${benefit.gradient} rounded-full flex items-center justify-center mx-auto`}>
                  <i className={`${benefit.icon} text-white text-xl`}></i>
                </div>
                <h4 className="text-xl font-semibold text-foreground" data-testid={`benefit-title-${benefit.id}`}>
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground" data-testid={`benefit-description-${benefit.id}`}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20" data-testid="testimonials-section">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide" data-testid="testimonials-label">
              Client Reviews
            </h2>
            <h3 className="text-4xl font-bold text-foreground" data-testid="testimonials-title">
              <span className="text-accent">What Our Clients</span> Say
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="testimonials-description">
              Don't just take our word for it - hear from our satisfied clients about their experience with YSMN Cleaning Services.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-card rounded-xl border border-border p-8 space-y-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`testimonial-card-${testimonial.id}`}
              >
                <div className="flex text-yellow-400" data-testid={`testimonial-rating-${testimonial.id}`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-foreground italic" data-testid={`testimonial-content-${testimonial.id}`}>
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} profile`} 
                    className="w-12 h-12 rounded-full object-cover"
                    data-testid={`testimonial-image-${testimonial.id}`}
                  />
                  <div>
                    <div className="font-semibold text-foreground" data-testid={`testimonial-name-${testimonial.id}`}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground" data-testid={`testimonial-title-${testimonial.id}`}>
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
