import { Suspense, lazy, useEffect, useRef, useState, type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ToolkitSection from "@/components/ToolkitSection";
import Footer from "@/components/Footer";

const ResultsBannerSection = lazy(() => import("@/components/ResultsBannerSection"));
const PipelineSection = lazy(() => import("@/components/PipelineSection"));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection"));
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const IndustryShowcaseSection = lazy(() => import("@/components/IndustryShowcaseSection"));
const StatsSection = lazy(() => import("@/components/StatsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const GlobalSection = lazy(() => import("@/components/GlobalSection"));
const BlogSection = lazy(() => import("@/components/BlogSection"));
const ComplianceSection = lazy(() => import("@/components/ComplianceSection"));
const CTASection = lazy(() => import("@/components/CTASection"));

type DeferredSectionProps = {
  children: ReactNode;
};

const DeferredSection = ({ children }: DeferredSectionProps) => {
  const [shouldRender, setShouldRender] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) return;
        setShouldRender(true);
        observer.disconnect();
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="scroll-perf-section">
      <Suspense fallback={null}>{shouldRender ? children : null}</Suspense>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <DeferredSection>
        <ResultsBannerSection />
      </DeferredSection>
      <DeferredSection>
        <PipelineSection />
      </DeferredSection>
      <DeferredSection>
        <PortfolioSection />
      </DeferredSection>
      <ToolkitSection />
      <DeferredSection>
        <FeaturesSection />
      </DeferredSection>
      <DeferredSection>
        <ServicesSection />
      </DeferredSection>
      <DeferredSection>
        <IndustryShowcaseSection />
      </DeferredSection>
      <DeferredSection>
        <StatsSection />
      </DeferredSection>
      <DeferredSection>
        <TestimonialsSection />
      </DeferredSection>
      <DeferredSection>
        <GlobalSection />
      </DeferredSection>
      <DeferredSection>
        <BlogSection />
      </DeferredSection>
      <DeferredSection>
        <ComplianceSection />
      </DeferredSection>
      <DeferredSection>
        <CTASection />
      </DeferredSection>
      <Footer />
    </div>
  );
};

export default Index;
