import Hero from "@/sections/Hero";
import FeaturedProperties from "@/sections/FeaturedProperties";
import Team from "@/sections/Team";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DanielEspindola from "@/sections/DanielEspindola";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#171717] text-white">
        <Header />
        <Hero />
        <FeaturedProperties />
        <Team />
        <DanielEspindola />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
