import { motion } from "framer-motion";
import { Compass, Wand2, Rocket, LineChart, ArrowRight } from "lucide-react";

type Step = {
  eyebrow: string;
  title: string;
  bullets: string[];
  icon: typeof Compass;
  accent: "primary" | "accent" | "warm" | "pink";
  image: string;
};

const steps: Step[] = [
  {
    eyebrow: "DISCOVER",
    title: "See exactly what's converting right now",
    bullets: [
      "Browse winning creative by industry & platform",
      "Analyze competitors' actual video strategy",
      "Remix proven concepts in seconds",
    ],
    icon: Compass,
    accent: "primary",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop&q=85",
  },
  {
    eyebrow: "CREATE",
    title: "Every video format, one creative partner",
    bullets: [
      "Product, explainer, UGC, brand films & ads",
      "Cinematic production or authentic UGC style",
      "Batch-produce dozens of variants in parallel",
    ],
    icon: Wand2,
    accent: "accent",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1400&h=900&fit=crop&q=85",
  },
  {
    eyebrow: "LAUNCH",
    title: "Push live to every channel instantly",
    bullets: [
      "Auto-optimized for Meta, TikTok, YouTube & more",
      "Connect ad accounts once, launch forever",
      "Built-in A/B testing across campaigns",
    ],
    icon: Rocket,
    accent: "warm",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=900&fit=crop&q=85",
  },
  {
    eyebrow: "OPTIMIZE",
    title: "Track what works. Kill what doesn't.",
    bullets: [
      "Spend, ROAS and CTR per creative, in real time",
      "Compare performance across every variant",
      "Know which hooks and angles actually convert",
    ],
    icon: LineChart,
    accent: "pink",
    image: "https://images.unsplash.com/photo-1551288049-4b1b95e86f46?w=1400&h=900&fit=crop&q=85",
  },
];

const accentMap: Record<
  Step["accent"],
  { bg: string; text: string; ring: string; glow: string; badge: string }
> = {
  primary: { bg: "bg-primary/10", text: "text-primary", ring: "ring-primary/20", glow: "bg-primary/20", badge: "border-primary/30 bg-primary/10 text-primary" },
  accent:  { bg: "bg-accent/10",  text: "text-accent",  ring: "ring-accent/20",  glow: "bg-accent/20",  badge: "border-accent/30 bg-accent/10 text-accent" },
  warm:    { bg: "bg-[hsl(var(--warm))]/10", text: "text-[hsl(var(--warm))]", ring: "ring-[hsl(var(--warm))]/20", glow: "bg-[hsl(var(--warm))]/20", badge: "border-[hsl(var(--warm))]/30 bg-[hsl(var(--warm))]/10 text-[hsl(var(--warm))]" },
  pink:    { bg: "bg-[hsl(var(--pink))]/10", text: "text-[hsl(var(--pink))]", ring: "ring-[hsl(var(--pink))]/20", glow: "bg-[hsl(var(--pink))]/20", badge: "border-[hsl(var(--pink))]/30 bg-[hsl(var(--pink))]/10 text-[hsl(var(--pink))]" },
};

const PipelineSection = () => {
  return (
    <section id="pipeline" className="relative bg-surface py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            The Catalyst Pipeline
          </span>
          <h2 className="mt-5 font-heading text-3xl font-800 leading-tight tracking-tight text-foreground md:text-5xl">
            From brief to winning creative.
            <span className="block text-gradient">All in one platform.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Four steps. One partner. Built to make high-performing video the new default — not a moonshot.
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          {steps.map((step, i) => {
            const accent = accentMap[step.accent];
            const imageFirst = i % 2 === 1;
            const Icon = step.icon;
            return (
              <motion.div
                key={step.eyebrow}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55 }}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                <div className={imageFirst ? "md:order-2" : ""}>
                  <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-heading text-xs font-extrabold uppercase tracking-[0.22em] ${accent.badge}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${accent.bg}`} />
                    0{i + 1} · {step.eyebrow}
                  </span>
                  <h3 className="mt-5 font-heading text-3xl font-800 leading-[1.05] tracking-tight text-foreground md:text-[2.5rem]">
                    {step.title}
                  </h3>
                  <ul className="mt-6 space-y-3.5 text-[15px] text-muted-foreground md:text-base">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.text} ${accent.bg}`} />
                        <span className="text-foreground/85">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-elevated">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div className={imageFirst ? "md:order-1" : ""}>
                  <div className="relative">
                    <div className={`absolute -inset-6 rounded-[32px] ${accent.glow} blur-2xl opacity-70`} />
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-border bg-white soft-shadow">
                      <img
                        src={step.image}
                        alt=""
                        className="h-full w-full object-cover transition duration-700 ease-out hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                      <div className={`absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1 backdrop-blur`}>
                        <div className={`flex h-5 w-5 items-center justify-center rounded-md bg-white/90 ${accent.text}`}>
                          <Icon className="h-3 w-3" strokeWidth={2.5} />
                        </div>
                        <span className="font-heading text-[10px] font-bold uppercase tracking-wider text-white">
                          Live · Step {i + 1} of 4
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PipelineSection;
