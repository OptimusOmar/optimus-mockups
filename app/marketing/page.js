"use client";
import React from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import BenefitsSection from "../components/BenefitsSection";
import FeaturesSection from "../components/FeaturesSection";

const Marketing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <ServicesSection />
    </div>
  );
};

export default Marketing;
