import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

const videos = [
  { title: "Meaningful Beauty", brand: "Beauty", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=800&fit=crop&q=85" },
  { title: "Stella Rosa", brand: "Beverage", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&h=800&fit=crop&q=85" },
  { title: "Walmart | Maui", brand: "Retail", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop&q=85" },
  { title: "Rolex Heritage", brand: "Luxury", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=1200&h=800&fit=crop&q=85" },
  { title: "Amazon I AM", brand: "Tech", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop&q=85" },
  { title: "Samsonite CLite", brand: "Travel", image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&h=800&fit=crop&q=85" },
  { title: "Din Tai Fung", brand: "F&B", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=1200&h=800&fit=crop&q=85" },
  { title: "Potent Hockey", brand: "Sport", image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=1200&h=800&fit=crop&q=85" },
  { title: "AAA Membership", brand: "Insurance", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=800&fit=crop&q=85" },
  { title: "Edmunds", brand: "Auto", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&h=800&fit=crop&q=85" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative bg-neutral-950 py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-40 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute -right-40 bottom-40 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[140px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-20" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 flex flex-col items-center gap-6 text-center md:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Our work
          </span>
          <h2 className="max-w-3xl font-heading text-3xl font-800 leading-tight tracking-tight md:text-5xl lg:text-6xl">
            We've produced over
            <span className="block text-gradient">30,000 videos.</span>
          </h2>
          <p className="max-w-xl text-base text-white/70 md:text-lg">
            From global brand films to scroll-stopping TikToks — here's a taste of what
            Catalyst crews have shipped recently.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-4 overflow-hidden mask-fade-x"
      >
        <div className="flex animate-marquee gap-5 w-max px-4">
          {[...videos, ...videos].map((v, i) => (
            <div
              key={i}
              className="group relative h-[220px] w-[340px] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl ring-1 ring-white/10 md:h-[280px] md:w-[420px]"
            >
              <img
                src={v.image}
                alt=""
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
                  <Play className="ml-0.5 h-6 w-6 fill-white text-white" />
                </div>
                <span className="text-sm font-semibold text-white">Watch Now</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block rounded-full border border-white/20 bg-black/50 px-2 py-0.5 font-heading text-[9px] font-extrabold uppercase tracking-wider text-white backdrop-blur">
                  {v.brand}
                </span>
                <h3 className="mt-1.5 font-heading text-lg font-700 text-white drop-shadow-md md:text-xl">
                  {v.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-5 overflow-hidden mask-fade-x"
      >
        <div className="flex animate-marquee-reverse gap-5 w-max px-4">
          {[...videos.slice(5), ...videos.slice(0, 5), ...videos.slice(5), ...videos.slice(0, 5)].map((v, i) => (
            <div
              key={i}
              className="group relative h-[180px] w-[280px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl ring-1 ring-white/10 md:h-[220px] md:w-[340px]"
            >
              <img
                src={v.image}
                alt=""
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                  <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-heading text-sm font-700 text-white drop-shadow">{v.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="container relative mt-14 text-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-heading text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white/40 hover:bg-white/10"
        >
          View the full portfolio <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default PortfolioSection;
