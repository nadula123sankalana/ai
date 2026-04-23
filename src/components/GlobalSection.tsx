import { motion } from "framer-motion";

const cities = [
  { name: "New York", top: "35%", left: "25%" },
  { name: "London", top: "28%", left: "47%" },
  { name: "Dubai", top: "42%", left: "60%" },
  { name: "Tokyo", top: "35%", left: "82%" },
  { name: "Sydney", top: "72%", left: "85%" },
  { name: "São Paulo", top: "62%", left: "32%" },
  { name: "Berlin", top: "26%", left: "52%" },
  { name: "LA", top: "38%", left: "15%" },
  { name: "Singapore", top: "55%", left: "74%" },
  { name: "Mumbai", top: "48%", left: "66%" },
];

const GlobalSection = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute -right-40 bottom-20 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[140px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-25" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Global coverage
          </span>
          <h2 className="mt-5 font-heading text-3xl font-800 leading-tight tracking-tight md:text-5xl lg:text-6xl">
            We shoot
            <span className="text-gradient"> anywhere </span>
            you need us.
          </h2>
          <p className="mt-4 text-base text-white/70 md:text-lg">
            Production crews in 80+ cities across 6 continents. Same creative standard. Any time zone.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto aspect-[2/1] max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-40" />

          <div className="absolute inset-0 opacity-30">
            <svg viewBox="0 0 100 50" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
              <ellipse cx="25" cy="20" rx="12" ry="8" fill="hsl(0 0% 100%)" opacity="0.4" />
              <ellipse cx="50" cy="18" rx="10" ry="10" fill="hsl(0 0% 100%)" opacity="0.4" />
              <ellipse cx="65" cy="22" rx="8" ry="7" fill="hsl(0 0% 100%)" opacity="0.4" />
              <ellipse cx="80" cy="20" rx="7" ry="8" fill="hsl(0 0% 100%)" opacity="0.4" />
              <ellipse cx="30" cy="35" rx="6" ry="8" fill="hsl(0 0% 100%)" opacity="0.4" />
              <ellipse cx="85" cy="38" rx="5" ry="5" fill="hsl(0 0% 100%)" opacity="0.4" />
            </svg>
          </div>

          {cities.map((city, i) => (
            <motion.div
              key={city.name}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.08 }}
              className="group absolute"
              style={{ top: city.top, left: city.left }}
            >
              <div className="relative">
                <span className="absolute -inset-3 rounded-full bg-primary/35 blur-md animate-pulse-glow" />
                <span className="relative block h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_14px_hsl(var(--primary))]" />
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/20 bg-black/70 px-2.5 py-1 text-[11px] font-semibold text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  {city.name}
                </div>
              </div>
            </motion.div>
          ))}

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-black/50 px-4 py-2 backdrop-blur">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/80">
              80+ cities · 6 continents · one standard
            </p>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { k: "North America", v: "28 cities" },
            { k: "Europe", v: "22 cities" },
            { k: "Asia & Pacific", v: "18 cities" },
            { k: "Rest of world", v: "14 cities" },
          ].map((c) => (
            <div key={c.k} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur">
              <div className="font-heading text-2xl font-800 text-gradient">{c.v}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">{c.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalSection;
