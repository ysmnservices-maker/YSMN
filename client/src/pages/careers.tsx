import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import CareersComponent from "@/components/careers";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-6">
        <CareersComponent />
      </main>
      <Footer />
    </div>
  );
}
