import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../Components/HeroSection";
import CurvedSlider from "../Components/AnimatedMarquee";
import BusinessConsultingHero from "../Components/BusinessConsultingHero";
import AlternateCards from "../Components/AlternateCards";
import ServiceCarousel from "../Components/ServiceCarousel";
import TailormadePackages from "../Components/TailormadePackages";
import RegistrationJourney from "../Components/ResistrationJourney";
import ClientExperiences from "../Components/ClientExp";
import TeamSection from "../Components/TeamSection";
import { EUAdvantages2, HeroSection2, OurContribution2, PathwaysSlider2 } from "../Components/NewComp";

const HomePage = () => {
  // Store preferred country from localStorage in state, if present
  const [preferredCountry, setPreferredCountry] = useState(() => {
    return localStorage.getItem('preferred_country') || '';
  });
  const navigate = useNavigate();

  useEffect(() => {
    // If not present, redirect to WelcomePage
    if (!preferredCountry) {
      navigate('/', { replace: true });
    }
    // else remain on this page
  }, [preferredCountry, navigate]);

  return (
    <div>
      <HeroSection2 />
      <EUAdvantages2/>
      <OurContribution2/>
      <PathwaysSlider2/>
      {/* <HeroSection /> */}
      <CurvedSlider />
      {/* Why Dubai */}
      <BusinessConsultingHero />
      {/* What We Offer  */}
      <AlternateCards />
      {/* Services  */}
      <ServiceCarousel />
      <TailormadePackages />
      <RegistrationJourney />
      {/* <ClientExperiences /> */}
      {/* Team */}
      <TeamSection />
    </div>
  );
};

export default HomePage;