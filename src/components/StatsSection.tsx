import { motion } from "framer-motion";

type Result = {
  value: string;
  label: string;
  hint: string;
  tone: "primary" | "accent" | "warm";
  image: string;
};

const results: Result[] = [
  {
    value: "2.7×",
    label: "More leads vs. static image ads",
    hint: "Measured across 4,500+ campaigns",
    tone: "primary",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=800&fit=crop&q=80",
  },
  {
    value: "1.7×",
    label: "Higher return on ad spend",
    hint: "Average across e-commerce & DTC",
    tone: "accent",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop&q=80",
  },
  {
    value: "90%",
    label: "Lower production cost",
    hint: "vs. traditional studio production",
    tone: "warm",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=800&fit=crop&q=80",
  },
];

const toneMap: Record<Result["tone"], { text: string; glow: string }> = {
  primary: { text: "text-gradient-primary", glow: "bg-primary/25" },
  accent: { text: "text-gradient-accent", glow: "bg-accent/25" },
  warm: { text: "text-gradient-warm", glow: "bg-[hsl(var(--warm))]/25" },
};

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-hero-gradient opacity-[0.12] blur-[140px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Real results
          </span>
          <h2 className="mt-5 font-heading text-3xl font-800 leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Performance you can
            <span className="block text-gradient">actually measure.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
            Sourced from Meta, Wistia, HubSpot and Catalyst internal benchmarks across
            thousands of real campaigns.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {results.map((r, i) => {
            const tone = toneMap[r.tone];
            return (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-hover relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur"
              >
                <div className={`pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full ${tone.glow} blur-3xl`} />

                <div className="relative flex items-start justify-between">
                  <div className={`font-heading text-7xl font-900 tracking-tight leading-none md:text-[6rem] ${tone.text}`}>
                    {r.value}
                  </div>
                  <div className="h-24 w-20 overflow-hidden rounded-xl border border-white/10 opacity-70">
                    <img src={r.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </div>
                </div>
                <p className="relative mt-6 font-heading text-lg font-700 text-white">{r.label}</p>
                <p className="relative mt-2 text-sm text-white/55">{r.hint}</p>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs text-white/40">
          *Sources: Meta, Wistia, HubSpot, Catalyst benchmarks · Independently audited 2026
        </p>
      </div>
    </section>
  );
};

export default StatsSection;
