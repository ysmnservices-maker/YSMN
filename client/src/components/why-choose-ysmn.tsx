import { motion } from "framer-motion";
import { Shield, Users, Clock, Award, HeartHandshake, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const reasons = [
  {
    icon: HeartHandshake,
    title: "Family-Owned Business",
    description: "Personal touch and care that only comes from a family-owned business with genuine passion for what we do.",
  },
  {
    icon: Shield,
    title: "Fully Insured & Bonded",
    description: "Complete peace of mind with comprehensive insurance coverage and bonded professional staff.",
  },
  {
    icon: Users,
    title: "Trained Professionals",
    description: "Experienced and trained cleaning professionals who treat your space with the respect it deserves.",
  },
  {
    icon: Clock,
    title: "Reliable & Punctual",
    description: "Consistent scheduling and reliable service you can count on, every single time.",
  },
  {
    icon: Sparkles,
    title: "Eco-Friendly & Non-Toxic",
    description: "Safe, environmentally responsible products—effective cleaning without harmful chemicals.",
  },
  {
    icon: Award,
    title: "Exceptional Results",
    description: "Proven track record of delivering exceptional cleaning results that exceed expectations.",
  }
];

export default function WhyChooseYSMN() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background" id="why-choose" data-testid="why-choose-section">
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
          <h3 className="text-4xl lg:text-5xl font-bold text-foreground" data-testid="why-choose-title">
            <span className="text-primary">Excellence</span> in Every <span className="text-foreground">Detail</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="why-choose-description">
            Discover what sets YSMN Cleaning Company apart and why families and businesses across the community trust us with their cleaning needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`reason-card-${index}`}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 group">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors" data-testid={`reason-title-${index}`}>
                      {reason.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-muted-foreground leading-relaxed" data-testid={`reason-description-${index}`}>
                      {reason.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center" data-testid="trust-experience">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center" data-testid="trust-clients">
                <div className="text-3xl font-bold text-primary mb-2">100</div>
                <div className="text-sm text-muted-foreground">Satisfied Clients</div>
              </div>
              <div className="text-center" data-testid="trust-rating">
                <div className="text-3xl font-bold text-primary mb-2">4.9</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center" data-testid="trust-guarantee">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Guarantee</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
