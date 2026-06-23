import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ServicesComponent from "@/components/services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <ServicesComponent />
      </main>
      <Footer />
    </div>
  );
}
