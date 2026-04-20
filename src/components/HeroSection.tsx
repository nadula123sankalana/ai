import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

/** Background loop: same ID must appear in playlist for loop=1 to work */
const HERO_BG_VIDEO_ID = "I9qBS0zLGKo";
const heroBgEmbedSrc = `https://www.youtube.com/embed/${HERO_BG_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_BG_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1`;

const heroImages = [
  {
    label: "Brand Films",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=750&fit=crop&q=85",
  },
  {
    label: "Product Videos",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=750&fit=crop&q=85",
  },
  {
    label: "Commercials",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=750&fit=crop&q=85",
  },
  {
    label: "Social Content",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&h=750&fit=crop&q=85",
  },
  {
    label: "Testimonials",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=750&fit=crop&q=85",
  },
  {
    label: "Explainers",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=750&fit=crop&q=85",
  },
  {
    label: "Event Coverage",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=750&fit=crop&q=85",
  },
  {
    label: "Animations",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=750&fit=crop&q=85",
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <iframe
          title="Hero background video"
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
          src={heroBgEmbedSrc}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/72 via-black/58 to-black/78" />
      </div>

      <div className="relative z-10 grid min-h-[100dvh] grid-rows-[1fr_auto]">
        <div className="flex min-h-0 flex-col justify-center px-0 pt-28 pb-4 sm:pt-32 md:pt-36">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-6 text-4xl font-heading font-800 leading-[1.08] tracking-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl lg:text-7xl"
              >
                World-Class Video Production Made Simple
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg"
              >
                Catalyst AI enables brands to create any video they need with a
                single, trusted partner. Our fast, simple, and transparent process
                redefines efficiency in video production.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-14 h-17 text-xl font-semibold shadow-[0_10px_30px_-12px_hsl(var(--primary))]"
                >
                  Get Started
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full overflow-hidden pb-6 pt-2 sm:pb-8 sm:pt-3 md:pb-10"
        >
          <div className="flex animate-marquee gap-4 w-max">
            {[...heroImages, ...heroImages].map((img, i) => (
              <div
                key={i}
                className="group relative h-[180px] w-[280px] flex-shrink-0 overflow-hidden rounded-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/10 md:h-[240px] md:w-[360px]"
              >
                <img
                  src={img.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                  decoding="async"
                  fetchPriority={i < 8 ? "high" : "low"}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-0 left-0 z-10 p-5 font-heading text-sm font-700 text-white drop-shadow-md md:text-base">
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

