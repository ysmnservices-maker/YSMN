import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Ready for a <span className="text-yellow-300">Cleaner, Happier Space</span>?
          </h2>
          <p className="text-xl text-white/90">
            Let YSMN handle the hard work so you can focus on what matters most.
            Contact us today for a free consultation and custom quote!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <Link href="/contact">
              <button className="flex items-center gap-2 px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-primary transition-all duration-300 shadow-xl">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>

            <a
              href="tel:+61434548184"
              className="flex items-center gap-2 px-10 py-5 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/80 mt-4">
            <Mail className="w-5 h-5" />
            <span className="text-lg">ysmnmanpowerservices@gmail.com</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
