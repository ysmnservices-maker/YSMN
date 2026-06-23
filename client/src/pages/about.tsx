import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import AboutComponent from "@/components/about";
import WhyChooseYSMN from "@/components/why-choose-ysmn";
import Testimonials from "@/components/testimonials";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-12">
        <AboutComponent />
        <WhyChooseYSMN />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
