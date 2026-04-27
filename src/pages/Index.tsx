import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ResultsBannerSection from "@/components/ResultsBannerSection";
import PipelineSection from "@/components/PipelineSection";
import ToolkitSection from "@/components/ToolkitSection";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesSection from "@/components/ServicesSection";
import IndustryShowcaseSection from "@/components/IndustryShowcaseSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
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
      <div className="scroll-perf-section">
        <ResultsBannerSection />
      </div>
      <div className="scroll-perf-section">
        <PipelineSection />
      </div>
      <div className="scroll-perf-section">
        <PortfolioSection />
      </div>
      <div className="scroll-perf-section">
        <ToolkitSection />
      </div>
      <div className="scroll-perf-section">
        <FeaturesSection />
      </div>
      <div className="scroll-perf-section">
        <ServicesSection />
      </div>
      <div className="scroll-perf-section">
        <IndustryShowcaseSection />
      </div>
      <div className="scroll-perf-section">
        <ProcessSection />
      </div>
      <div className="scroll-perf-section">
        <StatsSection />
      </div>
      <div className="scroll-perf-section">
        <TestimonialsSection />
      </div>
      <div className="scroll-perf-section">
        <GlobalSection />
      </div>
      <div className="scroll-perf-section">
        <BlogSection />
      </div>
      <div className="scroll-perf-section">
        <ComplianceSection />
      </div>
      <div className="scroll-perf-section">
        <CTASection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
