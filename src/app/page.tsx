import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import ShootingLocationsMap from "@/components/sections/ShootingLocationsMap";
import TrailerSection from "@/components/sections/TrailerSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ShootingLocationsMap />
      <TrailerSection />
      <Footer />
    </main>
  );
}
