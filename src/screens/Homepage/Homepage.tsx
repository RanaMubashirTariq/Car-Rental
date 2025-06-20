import React from "react";
import { BannerWrapperSection } from "./sections/BannerWrapperSection";
import { CarSelectionSection } from "./sections/CarSelectionSection";
import { FactsSection } from "./sections/FactsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { InfoWrapperSection } from "./sections/InfoWrapperSection";
import { MainHeroSection } from "./sections/MainHeroSection";
import { MobileAppSection } from "./sections/MobileAppSection";

export const Homepage = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full bg-white">
      <HeaderSection />
      <MainHeroSection />
      <FactsSection />
      <InfoWrapperSection />
      <CarSelectionSection />
      <HeroSection />
      <MobileAppSection />
      <BannerWrapperSection />
      <FooterSection />
    </div>
  );
};
