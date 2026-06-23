import { motion } from "framer-motion";
import { Phone, Calendar, ClipboardList, Sparkles, Smile, Heart } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Contact Us",
    description: "Reach out via phone, email, or our contact form. We're here to listen and understand your needs.",
    icon: Phone,
    color: "#3b82f6",
  },
  {
    id: 2,
    title: "Free Consultation",
    description: "We schedule a convenient time to discuss your requirements and customize a plan just for you.",
    icon: Calendar,
    color: "#10b981",
  },
  {
    id: 3,
    title: "Tailored Service",
    description: "Our professional team arrives on time, fully equipped to deliver exceptional service as promised.",
    icon: ClipboardList,
    color: "#f59e0b",
  },
  {
    id: 4,
    title: "Quality Check",
    description: "We ensure everything is perfect before finishing—your satisfaction is our top priority.",
    icon: Sparkles,
    color: "#ef4444",
  },
  {
    id: 5,
    title: "Ongoing Support",
    description: "Follow up to make sure you're happy and ready to help with any future needs you may have.",
    icon: Smile,
    color: "#8b5cf6",
  },
  {
    id: 6,
    title: "Stay Connected",
    description: "Join our community for tips, offers, and continue enjoying the YSMN difference.",
    icon: Heart,
    color: "#ec4899",
  },
];

export default function OurProcess() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide">
            Our Simple Process
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-foreground">
            How <span className="text-accent">YSMN</span> Works
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Making your life easier with a straightforward, customer-focused approach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                className="bg-card rounded-xl border border-border p-8 text-center space-y-4 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${step.color}20` }}
                >
                  <Icon className="w-8 h-8" style={{ color: step.color }} />
                </div>
                <div className="text-sm font-semibold text-primary mb-2">
                  Step {step.id}
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h4>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
