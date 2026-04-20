import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import DiscoverSection from "@/components/DiscoverSection";
import FeaturesSection from "@/components/FeaturesSection";
import IndustryShowcaseSection from "@/components/IndustryShowcaseSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GlobalSection from "@/components/GlobalSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <DiscoverSection />
      <FeaturesSection />
      <IndustryShowcaseSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <StatsSection />
      <TestimonialsSection />
      <GlobalSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
