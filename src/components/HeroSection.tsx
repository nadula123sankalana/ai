import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const heroImages = [
  { gradient: "from-amber-600 to-orange-700", label: "Brand Films" },
  { gradient: "from-emerald-600 to-teal-700", label: "Product Videos" },
  { gradient: "from-violet-600 to-indigo-700", label: "Commercials" },
  { gradient: "from-rose-600 to-pink-700", label: "Social Content" },
  { gradient: "from-sky-600 to-blue-700", label: "Testimonials" },
  { gradient: "from-amber-700 to-yellow-600", label: "Explainers" },
  { gradient: "from-red-600 to-orange-600", label: "Event Coverage" },
  { gradient: "from-cyan-600 to-teal-600", label: "Animations" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="container relative z-10 pt-32 pb-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-800 leading-[1.08] tracking-tight mb-6 text-foreground"
          >
            World-Class Video Production Made Simple
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Lumina Studios enables brands to create any video they need with a single, trusted partner. Our fast, simple, and transparent process redefines efficiency in video production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-13 text-base font-semibold"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scrolling image carousel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 overflow-hidden"
      >
        <div className="flex animate-marquee gap-4 w-max">
          {[...heroImages, ...heroImages].map((img, i) => (
            <div
              key={i}
              className={`w-[280px] md:w-[360px] h-[180px] md:h-[240px] rounded-2xl bg-gradient-to-br ${img.gradient} flex-shrink-0 flex items-end p-5 relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-black/20" />
              <span className="relative z-10 text-white font-heading font-700 text-sm md:text-base">{img.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
