import { motion } from "framer-motion";
import { Users, Award, Leaf, Heart, Target, CheckCircle, Home, Building, Sparkles, Shield } from "lucide-react";
import cleanHomeImg from "@assets/generated_images/Clean_modern_home_interior_413d0008.png";
import cleanTeamImg from "@assets/generated_images/Professional_YSMN_cleaning_team_60cc2198.png";

const values = [
  {
    title: "We Work as a Team",
    description: "Getting along to get the job done, supporting each other and our clients with consistency and care.",
    icon: Users,
  },
  {
    title: "Follow Proven Systems",
    description: "We follow business principles, practices and protocols that work to ensure consistent quality.",
    icon: CheckCircle,
  },
  {
    title: "Customer-Focused",
    description: "We are focused on delivering a consistently positive customer experience every single time.",
    icon: Heart,
  },
  {
    title: "Continuous Learning",
    description: "We learn and share from each other's mistakes and successes for the benefit of everyone.",
    icon: Award,
  },
];

const ourServices = [
  {
    title: "Residential Cleaning",
    description: "Comprehensive cleaning services tailored to your home's unique needs, from regular maintenance to deep cleaning.",
    icon: Home,
  },
  {
    title: "Commercial & Office Cleaning",
    description: "Professional cleaning solutions for businesses, offices, and commercial spaces of all sizes.",
    icon: Building,
  },
  {
    title: "Specialized Services",
    description: "Post-event cleanup, pool maintenance, garden care, and more to keep every part of your property perfect.",
    icon: Sparkles,
  },
  {
    title: "Care & Support Services",
    description: "Elderly care, companionship, healthcare support, and rehabilitation assistance with compassion and respect.",
    icon: Heart,
  },
];

export default function About() {
  return (
    <section id="about" className="py-12 bg-muted/50" data-testid="about-section">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4" data-testid="about-label">
              About Us
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6" data-testid="about-title">
              Experience. Passion. Integrity.
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8" data-testid="about-description">
              YSMN Complete Care and Support Services exists for every home and business owner who's tired of 
              worrying about cleaning and maintenance. We get it — it should be the last thing you have to worry about.
            </p>
            <p className="text-lg text-foreground font-medium">
              With YSMN, you speak directly to people who care. Someone who shows up, who gets it, and who takes 
              pride in every space they clean.
            </p>
          </motion.div>
        </div>

        {/* First Content Block */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            <strong className="text-foreground">We don't just clean—we take ownership.</strong> If something's not right, 
            we take responsibility and fix it. Fast.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            We operate with a <strong className="text-foreground">No Compromise</strong> standard—on quality, communication, 
            and accountability. We believe in being a team, fostering a culture of unparalleled learning, and taking full 
            responsibility for the work we do.
          </p>
        </motion.div>

        {/* Image Block */}
        <motion.div 
          className="relative mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img 
            src={cleanHomeImg}
            alt="Clean modern home interior"
            className="rounded-2xl shadow-xl w-full h-auto max-h-[600px] object-cover"
            data-testid="about-image"
          />
        </motion.div>

        {/* Second Content Block */}
        <motion.div 
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground leading-relaxed text-lg">
            <strong className="text-foreground">We're not perfect, but we're always here.</strong> Always improving. 
            Always committed. That's what frustration-free care and support looks like.
          </p>
        </motion.div>

        {/* Our Services Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Services</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a wide range of cleaning and care services to meet all your needs, from residential to commercial and everything in between.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {ourServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">{service.title}</h5>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Team Image Section */}
        <motion.div 
          className="relative mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img 
            src={cleanTeamImg}
            alt="YSMN professional cleaning team"
            className="rounded-2xl shadow-xl w-full h-auto max-h-[600px] object-cover"
            data-testid="team-image"
          />
        </motion.div>

        {/* What We Stand For Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-foreground mb-4">What We Stand For</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Our Vision</h4>
              <p className="text-muted-foreground leading-relaxed">
                To change the care and support industry forever — becoming a byname for quality and success.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Our Mission</h4>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading choice in care and support services by providing unparalleled service, 
                complete transparency, exceptional customer communication and unrivalled attention to detail.
              </p>
            </motion.div>

            {/* Eco-Friendly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Eco-Friendly</h4>
              <p className="text-muted-foreground leading-relaxed">
                Using non-toxic, sustainable products that are safe for your home, family, and the planet.
              </p>
            </motion.div>
          </div>

          {/* Core Values List */}
          <div className="border-t border-border pt-8">
            <h4 className="text-xl font-semibold text-foreground mb-6 text-center">Our Core Values</h4>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">{value.title}</h5>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Our Commitment Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Commitment to You</h3>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h5 className="font-semibold text-foreground mb-1">Fully Insured & Licensed</h5>
                <p className="text-muted-foreground">Complete peace of mind knowing you're protected by our comprehensive insurance coverage.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h5 className="font-semibold text-foreground mb-1">100% Satisfaction Guarantee</h5>
                <p className="text-muted-foreground">If you're not completely satisfied with our service, we'll come back and make it right at no extra cost.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h5 className="font-semibold text-foreground mb-1">Trained & Background-Checked Staff</h5>
                <p className="text-muted-foreground">Every member of our team undergoes rigorous training and thorough background checks for your safety and peace of mind.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}