import Hero from "@/sections/Hero";
import FeaturedProperties from "@/sections/FeaturedProperties";
import Team from "@/sections/Team";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DanielEspindola from "@/sections/DanielEspindola";
import FeedbackSection from "@/sections/CustomersFeedback";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#161616] text-[#EDEDED]">
        <Header />
        <Hero />
        <FeaturedProperties />
        <Team />
        <DanielEspindola />
        <FeedbackSection />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
