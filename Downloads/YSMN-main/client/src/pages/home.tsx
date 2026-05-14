import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import WhyChooseYSMN from "@/components/why-choose-ysmn";
import Testimonials from "@/components/testimonials";
import Blog from "@/components/blog";
import Careers from "@/components/careers";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <WhyChooseYSMN />
      <Testimonials />
      <Blog />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}
