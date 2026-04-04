import Navbar from "@/components/salon/Navbar";
import Hero from "@/components/salon/Hero";
import About from "@/components/salon/About";
import Prestations from "@/components/salon/Prestations";
import Team from "@/components/salon/Team";
import Reviews from "@/components/salon/Reviews";
import Reservation from "@/components/salon/Reservation";
import Contact from "@/components/salon/Contact";
import Footer from "@/components/salon/Footer";
import LoadingScreen from "@/components/salon/LoadingScreen";
import ExitIntentPopup from "@/components/salon/ExitIntentPopup";
import WhatsAppButton from "@/components/salon/WhatsAppButton";
import CookieBanner from "@/components/salon/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LoadingScreen />
      <ExitIntentPopup />
      <Navbar />
      <Hero />
      <About />
      <Prestations />
      <Team />
      <Reviews />
      <Reservation />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
};

export default Index;
