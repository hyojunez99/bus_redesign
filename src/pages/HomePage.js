import HeroSection from "../sections/HeroSection";
import QuickMenuSection from "../sections/QuickMenuSection";
import RouteSection from "../sections/RouteSection";
import PremiumSection from "../sections/PremiumSection";
import MobileAppSection from "../sections/MobileAppSection";

const HomePage = () => {
  return (
    <main className="main">
      <HeroSection />
      <QuickMenuSection />
      <RouteSection />
      <PremiumSection />
      <MobileAppSection />
    </main>
  );
};

export default HomePage;
