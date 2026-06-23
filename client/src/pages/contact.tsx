import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactComponent from "@/components/contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-6">
        <ContactComponent />
      </main>
      <Footer />
    </div>
  );
}
