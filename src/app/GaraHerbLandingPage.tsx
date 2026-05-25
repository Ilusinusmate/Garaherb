"use client";
import HeroSection from "./HeroSection";
import TrustBadges from "./TrustBadges";
import ProductPackages from "./ProductPackages";
import FormulaSection from "./FormulaSection";
import IngredientsSection from "./IngredientsSection";
import PerformanceSection from "./PerformanceSection";
import TestimonialsSection from "./TestimonialsSection";
import ShippingBanner from "./ShippingBanner";
import FinalCTA from "./FinalCTA";
import GuaranteeSection from "./GuaranteeSection";
import FAQSection from "./FAQSection";
import Footer from "@/components/common/Footer";

export default function GaraHerbLandingPage() {
  return (
    <main className="w-full bg-background-main">
      <HeroSection />
      <TrustBadges />
      <ProductPackages />
      <FormulaSection />
      <IngredientsSection />
      <PerformanceSection />
      <TestimonialsSection />
      <ShippingBanner />
      <FinalCTA />
      <GuaranteeSection />
      <FAQSection />
      <Footer className="" />
    </main>
  );
}
