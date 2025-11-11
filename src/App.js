import React from "react";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";

import CurvedInfiniteMarquee from "./Components/AnimatedMarquee";
import CurvedSwiperMarquee from "./Components/AnimatedMarquee";
import CurvedSlider from "./Components/AnimatedMarquee";
import BusinessConsultingHero from "./Components/BusinessConsultingHero";
import ServiceCarousel from "./Components/ServiceCarousel";
import AlternateCards from "./Components/AlternateCards";
import TeamSection from "./Components/TeamSection";
import FooterWithContact from "./Components/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CurvedSlider />
      {/* Why Dubai */}
      <BusinessConsultingHero />
      {/* What We Offer  */}
      <AlternateCards />
      {/* Services  */}
      <ServiceCarousel />
      {/* Team
       */}
      <TeamSection />
      <FooterWithContact />
    </div>
  );
};

export default App;
