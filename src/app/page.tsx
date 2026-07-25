import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import TrustBar from "./_components/TrustBar";
import TherapyMethod from "./_components/TherapyMethod";
import Conditions from "./_components/Conditions";
import Programs from "./_components/Programs";
import Services from "./_components/Services";
import TherapyJourney from "./_components/TherapyJourney";
import Testimonials from "./_components/Testimonials";
import CTA from "./_components/CTA";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050706] text-[#f7efe0]">
      <Navbar />

      <Hero />

      <TrustBar />

      <TherapyMethod />

      <Conditions />

      <Programs />

      <Services />

      <TherapyJourney />

      <Testimonials />

      <CTA />

      <Footer />
    </main>
  );
}