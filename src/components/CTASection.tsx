import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-orange-400" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent)]" />

          <div className="relative z-10 px-8 py-16 md:py-24 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-800 text-primary-foreground mb-4">
              Ready to create your video?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Join thousands of brands producing world-class video content with Lumina Studios.
            </p>
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 rounded-full px-8 h-14 text-base font-semibold shadow-xl"
            >
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
