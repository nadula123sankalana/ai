import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ResultsBannerSection from "@/components/ResultsBannerSection";
import DiscoverSection from "@/components/DiscoverSection";
import PipelineSection from "@/components/PipelineSection";
import ToolkitSection from "@/components/ToolkitSection";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesSection from "@/components/ServicesSection";
import IndustryShowcaseSection from "@/components/IndustryShowcaseSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GlobalSection from "@/components/GlobalSection";
import BlogSection from "@/components/BlogSection";
import ComplianceSection from "@/components/ComplianceSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ResultsBannerSection />
      <DiscoverSection />
      <PipelineSection />
      <ToolkitSection />
      <FeaturesSection />
      <ServicesSection />
      <IndustryShowcaseSection />
      <PortfolioSection />
      <ProcessSection />
      <StatsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <GlobalSection />
      <BlogSection />
      <ComplianceSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
