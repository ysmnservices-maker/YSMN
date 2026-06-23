import { motion } from "framer-motion";
import { Users, Award, Leaf, Heart, Shield, Sparkles } from "lucide-react";
import { Link } from "wouter";
import cleanTeamImg from "@assets/generated_images/Professional_YSMN_cleaning_team_60cc2198.png";
import cleanHomeImg from "@assets/generated_images/Clean_modern_home_interior_413d0008.png";

const features = [
  {
    id: "family-owned",
    title: "Family-Owned Business",
    description: "We treat every client like family with honesty, integrity, and genuine care.",
    icon: Users,
  },
  {
    id: "eco-friendly",
    title: "Eco-Friendly Products",
    description: "Using non-toxic, sustainable products that are safe for your home and the planet.",
    icon: Leaf,
  },
  {
    id: "trusted-reliable",
    title: "Trusted & Reliable",
    description: "Years of experience and countless happy clients who trust us with their spaces.",
    icon: Award,
  },
  {
    id: "commitment-quality",
    title: "Commitment to Quality",
    description: "We deliver exceptional results every time, with attention to every detail.",
    icon: Heart,
  },
  {
    id: "fully-insured",
    title: "Fully Insured",
    description: "Complete peace of mind with our comprehensive insurance coverage.",
    icon: Shield,
  },
  {
    id: "customizable",
    title: "Customizable Services",
    description: "We tailor our services to fit your unique needs and schedule.",
    icon: Sparkles,
  },
];

export default function AboutPreview() {
  return (
    <section className="py-10 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Image Section First */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative max-w-full mb-12"
          >
            <div className="relative z-10">
              <img
                src={cleanTeamImg}
                alt="YSMN Professional Team"
                className="rounded-2xl shadow-2xl w-full max-h-[600px] object-cover mx-auto"
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img
                src={cleanHomeImg}
                alt="Clean Home"
                className="w-48 md:w-56 rounded-xl shadow-lg border-4 border-white object-cover"
              />
            </motion.div>
          </motion.div>

          {/* About Us Content - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide">
              About Us
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Your Trusted Partner for a <span className="text-primary">Clean, Healthy Space</span>
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              YSMN Complete Care and Support Services is a proud, family-owned business serving Perth and surrounding areas. With a commitment to quality and customer satisfaction, we deliver exceptional cleaning and support services tailored to your unique needs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of experienced professionals is dedicated to creating spotless, healthy environments using eco-friendly, non-toxic products. We believe that a clean space contributes to a happier, more productive life, and we're here to make that a reality for you.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With years of experience in the industry, we've built a reputation for reliability, professionalism, and outstanding customer service. We treat every home and business as if it were our own, with the utmost care and respect.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.id}
                    className="flex flex-col items-center text-center space-y-3"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-primary/10">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-8">
              <Link href="/about">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:opacity-90 transition-opacity hover:shadow-lg transition-shadow">
                  Learn More About Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
