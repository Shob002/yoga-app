import Hero from "./_components/Hero";
import WhyChooseUs from "./_components/WhyChooseUs";
import TherapyMethod from "./_components/TherapyMethod";
import Conditions from "./_components/Conditions";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <WhyChooseUs />
      <TherapyMethod />
      <Conditions />
    </main>
  );
}