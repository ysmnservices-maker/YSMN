import { motion } from "framer-motion";
import { Star, Users, Leaf, Clock, DollarSign } from "lucide-react";
import { useState, useEffect } from "react";
import { getWebsiteData } from "@/lib/storage";

// Create icon map
const iconMap: Record<string, any> = {
  Users,
  Leaf,
  Clock,
  DollarSign,
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(() => getWebsiteData().testimonials);
  const [whyChooseUs, setWhyChooseUs] = useState(() => getWebsiteData().whyChooseUs);

  useEffect(() => {
    const data = getWebsiteData();
    setTestimonials(data.testimonials);
    setWhyChooseUs(data.whyChooseUs);
  }, []);

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
              <span className="text-primary">Excellence</span> in Every <span className="text-foreground">Detail</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="why-choose-description">
              We go above and beyond to ensure your space is not just clean, but spotless, healthy, and welcoming.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((benefit, index) => {
              const Icon = iconMap[benefit.iconName] || Users;
              return (
                <motion.div
                  key={benefit.id}
                  className="text-center space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-testid={`benefit-card-${benefit.id}`}
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground" data-testid={`benefit-title-${benefit.id}`}>
                    {benefit.title}
                  </h4>
                  <p className="text-muted-foreground" data-testid={`benefit-description-${benefit.id}`}>
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
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
              <span className="text-primary">What Our Clients</span> Say
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
