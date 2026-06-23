import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import AboutPreview from "@/components/about-preview";
import Services from "@/components/services";
import WhyChooseYSMN from "@/components/why-choose-ysmn";
import OurProcess from "@/components/our-process";
import Testimonials from "@/components/testimonials";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AboutPreview />
      <Services />
      <WhyChooseYSMN />
      <OurProcess />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
