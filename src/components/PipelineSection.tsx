import { motion } from "framer-motion";
import {
  ArrowRight,
  Wand2,
  Rocket,
  Sparkles,
  Search,
  Play,
  TrendingUp,
  Zap,
  CheckCircle2,
  Activity,
  Flame,
  Globe,
  ArrowUpRight,
} from "lucide-react";

type AccentKey = "primary" | "accent" | "warm" | "pink";

type Step = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  kpis: { label: string; value: string; delta?: string }[];
  accent: AccentKey;
  visual: () => JSX.Element;
};

const accentMap: Record<
  AccentKey,
  {
    text: string;
    bg: string;
    softBg: string;
    glow: string;
    ring: string;
    gradient: string;
    chipGradient: string;
    barFill: string;
    hsl: string;
  }
> = {
  primary: {
    text: "text-primary",
    bg: "bg-primary",
    softBg: "bg-primary/10",
    glow: "bg-primary/30",
    ring: "ring-primary/30",
    gradient: "from-primary via-cyan-400 to-sky-500",
    chipGradient: "from-primary/15 via-cyan-300/15 to-sky-400/10",
    barFill: "bg-primary",
    hsl: "168 94% 44%",
  },
  accent: {
    text: "text-accent",
    bg: "bg-accent",
    softBg: "bg-accent/10",
    glow: "bg-accent/30",
    ring: "ring-accent/30",
    gradient: "from-accent via-fuchsia-500 to-pink-500",
    chipGradient: "from-accent/15 via-fuchsia-300/15 to-pink-400/10",
    barFill: "bg-accent",
    hsl: "262 88% 54%",
  },
  warm: {
    text: "text-[hsl(var(--warm))]",
    bg: "bg-[hsl(var(--warm))]",
    softBg: "bg-[hsl(var(--warm))]/10",
    glow: "bg-[hsl(var(--warm))]/30",
    ring: "ring-[hsl(var(--warm))]/30",
    gradient: "from-[hsl(var(--warm))] via-orange-500 to-rose-500",
    chipGradient: "from-[hsl(var(--warm))]/15 via-orange-300/15 to-rose-400/10",
    barFill: "bg-[hsl(var(--warm))]",
    hsl: "18 95% 56%",
  },
  pink: {
    text: "text-[hsl(var(--pink))]",
    bg: "bg-[hsl(var(--pink))]",
    softBg: "bg-[hsl(var(--pink))]/10",
    glow: "bg-[hsl(var(--pink))]/30",
    ring: "ring-[hsl(var(--pink))]/30",
    gradient: "from-[hsl(var(--pink))] via-rose-500 to-purple-500",
    chipGradient: "from-[hsl(var(--pink))]/15 via-rose-300/15 to-purple-400/10",
    barFill: "bg-[hsl(var(--pink))]",
    hsl: "326 90% 56%",
  },
};

/** ---------- Per-step interactive mockups ---------- */

const DiscoverMock = () => {
  const a = accentMap.primary;
  const cards = [
    { tag: "Viral", roas: "+312%", hue: "from-emerald-400 to-teal-500" },
    { tag: "Hot", roas: "+184%", hue: "from-cyan-400 to-blue-500" },
    { tag: "Rising", roas: "+96%", hue: "from-sky-400 to-indigo-500" },
    { tag: "Proven", roas: "+221%", hue: "from-teal-400 to-emerald-500" },
    { tag: "Trending", roas: "+148%", hue: "from-blue-400 to-cyan-500" },
    { tag: "New", roas: "+72%", hue: "from-indigo-400 to-purple-500" },
  ];
  return (
    <div className="relative h-full w-full p-4 md:p-5">
      <div className="flex items-center gap-2 rounded-xl border border-border bg-white/90 px-3 py-2 backdrop-blur">
        <Search className="h-3.5 w-3.5 text-foreground/60" />
        <span className="text-[12px] text-foreground/75">What's converting in fitness apps?</span>
        <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground/75">
          <Flame className="h-3 w-3 text-orange-400" />
          Live
        </span>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {["Industry", "Platform", "Hook", "Format", "Length"].map((f) => (
          <span
            key={f}
            className="rounded-full border border-border bg-white px-2 py-0.5 text-[10px] font-semibold text-foreground/75"
          >
            {f}
          </span>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {cards.map((c, i) => (
          <div
            key={i}
            className="group relative aspect-[3/4] overflow-hidden rounded-lg border border-border/70 bg-white"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${c.hue} opacity-80`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
            <div className="absolute left-1.5 top-1.5 inline-flex items-center gap-1 rounded-full border border-border bg-white/85 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-foreground/80 backdrop-blur">
              <span className={`h-1 w-1 rounded-full ${a.bg}`} />
              {c.tag}
            </div>
            <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between">
              <span className="rounded-md bg-white/90 px-1.5 py-0.5 text-[8px] font-bold text-emerald-600">
                {c.roas}
              </span>
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-white">
                <Play className="h-2 w-2" fill="currentColor" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CreateMock = () => {
  const a = accentMap.accent;
  const variants = [
    { v: "v01", state: "done", hue: "from-violet-500 to-fuchsia-500" },
    { v: "v02", state: "done", hue: "from-fuchsia-500 to-pink-500" },
    { v: "v03", state: "rendering", hue: "from-purple-500 to-indigo-500" },
    { v: "v04", state: "done", hue: "from-pink-500 to-rose-500" },
    { v: "v05", state: "rendering", hue: "from-indigo-500 to-violet-500" },
    { v: "v06", state: "queued", hue: "from-slate-500 to-slate-700" },
  ];
  return (
    <div className="relative h-full w-full p-4 md:p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`flex h-6 w-6 items-center justify-center rounded-md bg-surface-elevated ${a.text}`}>
            <Wand2 className="h-3 w-3" strokeWidth={2.5} />
          </span>
          <div>
            <p className="text-[11px] font-bold text-foreground">Generating 12 variants</p>
            <p className="text-[9px] text-muted-foreground">UGC · Cinematic · Explainer</p>
          </div>
        </div>
        <span className="rounded-full border border-border bg-white px-2 py-0.5 text-[10px] font-bold text-foreground/75">
          AI Studio
        </span>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border/70">
        <div className={`h-full w-3/5 rounded-full bg-gradient-to-r ${a.gradient} animate-pulse-glow`} />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {variants.map((v, i) => (
          <div
            key={i}
            className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border/70 bg-white"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${v.hue} ${v.state === "queued" ? "opacity-25" : "opacity-85"}`} />
            {v.state === "rendering" && (
              <div className="absolute inset-0 animate-shine" />
            )}
            <div className="absolute left-1 top-1 rounded bg-white/90 px-1 py-0.5 text-[8px] font-bold text-foreground/80">
              {v.v}
            </div>
            {v.state === "done" && (
              <div className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/90 text-white">
                <CheckCircle2 className="h-2.5 w-2.5" strokeWidth={3} />
              </div>
            )}
            {v.state === "rendering" && (
              <div className="absolute right-1 top-1 rounded-full border border-border bg-white/90 px-1 py-0.5 text-[7px] font-bold uppercase tracking-wider text-foreground/75">
                ...
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-border bg-white/85 px-2.5 py-1.5">
        <Sparkles className={`h-3 w-3 ${a.text}`} />
        <span className="text-[10px] text-foreground/75">8 of 12 ready · ETA 1m 24s</span>
      </div>
    </div>
  );
};

const LaunchMock = () => {
  const a = accentMap.warm;
  const platforms = [
    { name: "Meta", status: "Live", color: "bg-blue-500", value: "$3.4k" },
    { name: "TikTok", status: "Live", color: "bg-pink-500", value: "$2.1k" },
    { name: "YouTube", status: "Deploying", color: "bg-red-500", value: "—" },
    { name: "Google", status: "Live", color: "bg-amber-500", value: "$1.8k" },
  ];
  return (
    <div className="relative h-full w-full p-4 md:p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`flex h-6 w-6 items-center justify-center rounded-md bg-surface-elevated ${a.text}`}>
            <Rocket className="h-3 w-3" strokeWidth={2.5} />
          </span>
          <div>
            <p className="text-[11px] font-bold text-foreground">Deploying campaign</p>
            <p className="text-[9px] text-muted-foreground">4 platforms · 12 creatives</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Sync
        </span>
      </div>
      <div className="mt-3 space-y-1.5">
        {platforms.map((p, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-lg border border-border bg-white/90 px-2.5 py-2"
          >
            <span className={`h-6 w-6 rounded-md ${p.color} flex items-center justify-center`}>
              <Globe className="h-3 w-3 text-white" />
            </span>
            <div className="flex-1">
              <p className="text-[11px] font-bold text-foreground">{p.name}</p>
              <div className="mt-0.5 flex items-center gap-1.5">
                <span
                  className={`h-1 w-1 rounded-full ${
                    p.status === "Live" ? "bg-emerald-400" : "bg-amber-400 animate-pulse"
                  }`}
                />
                <span className="text-[9px] text-muted-foreground">{p.status}</span>
              </div>
            </div>
            <span className="text-[10px] font-bold text-foreground/75">{p.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-border bg-gradient-to-r from-emerald-500/10 to-transparent px-2.5 py-1.5">
        <Zap className="h-3 w-3 text-emerald-300" />
        <span className="text-[10px] font-semibold text-foreground/80">All systems live in 24s</span>
      </div>
    </div>
  );
};

const OptimizeMock = () => {
  const a = accentMap.pink;
  const bars = [38, 52, 44, 68, 60, 82, 74, 90, 78, 96];
  const kpis = [
    { label: "ROAS", value: "4.8x", delta: "+0.6", up: true },
    { label: "CTR", value: "3.2%", delta: "+0.4", up: true },
    { label: "CPA", value: "$8.40", delta: "-12%", up: true },
  ];
  return (
    <div className="relative h-full w-full p-4 md:p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`flex h-6 w-6 items-center justify-center rounded-md bg-surface-elevated ${a.text}`}>
            <Activity className="h-3 w-3" strokeWidth={2.5} />
          </span>
          <div>
            <p className="text-[11px] font-bold text-foreground">Performance · Today</p>
            <p className="text-[9px] text-muted-foreground">Live · refreshed 2s ago</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-white px-2 py-0.5 text-[10px] font-bold text-foreground/75">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Realtime
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {kpis.map((k, i) => (
          <div
            key={i}
            className="rounded-lg border border-border bg-white/90 p-2"
          >
            <p className="text-[9px] uppercase tracking-wider text-foreground/55">{k.label}</p>
            <p className="mt-0.5 text-[14px] font-extrabold text-foreground">{k.value}</p>
            <span
              className={`mt-1 inline-flex items-center gap-0.5 text-[9px] font-bold ${
                k.up ? "text-emerald-300" : "text-rose-300"
              }`}
            >
              <TrendingUp className="h-2.5 w-2.5" />
              {k.delta}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg border border-border bg-white/90 p-2.5">
        <div className="flex items-end gap-1.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 overflow-hidden rounded-sm"
              style={{ height: 56 }}
            >
              <div
                className={`mt-auto w-full rounded-sm bg-gradient-to-t ${a.gradient}`}
                style={{ height: `${h}%`, opacity: 0.4 + (h / 100) * 0.6 }}
              />
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between text-[9px] text-foreground/50">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
        </div>
      </div>
    </div>
  );
};

const steps: Step[] = [
  {
    eyebrow: "DISCOVER",
    title: "See exactly what's converting right now",
    description: "Your live signal feed of winning creative — by industry, platform & format.",
    bullets: [
      "Browse winning creative by industry & platform",
      "Analyze competitors' actual video strategy",
      "Remix proven concepts in seconds",
    ],
    tags: ["Meta Ads", "TikTok Shop", "YouTube Shorts", "Reels"],
    kpis: [
      { label: "Winning angles", value: "27x", delta: "vs. manual research" },
      { label: "Time to concept", value: "2.3m", delta: "avg. session" },
    ],
    accent: "primary",
    visual: DiscoverMock,
  },
  {
    eyebrow: "CREATE",
    title: "Every video format, one creative partner",
    description: "Generate dozens of on-brand variants in parallel — UGC, cinematic, explainer.",
    bullets: [
      "Product, explainer, UGC, brand films & ads",
      "Cinematic production or authentic UGC style",
      "Batch-produce dozens of variants in parallel",
    ],
    tags: ["UGC", "Cinematic", "Explainer", "Product"],
    kpis: [
      { label: "Variants / sprint", value: "48+", delta: "in parallel" },
      { label: "Revisions saved", value: "63%", delta: "vs. agency" },
    ],
    accent: "accent",
    visual: CreateMock,
  },
  {
    eyebrow: "LAUNCH",
    title: "Push live to every channel instantly",
    description: "One-click deploy across Meta, TikTok, YouTube and Google with platform-perfect specs.",
    bullets: [
      "Auto-optimized for Meta, TikTok, YouTube & more",
      "Connect ad accounts once, launch forever",
      "Built-in A/B testing across campaigns",
    ],
    tags: ["Meta", "TikTok", "YouTube", "Google"],
    kpis: [
      { label: "Accounts linked", value: "12", delta: "one-click sync" },
      { label: "Launch latency", value: "<30s", delta: "to live" },
    ],
    accent: "warm",
    visual: LaunchMock,
  },
  {
    eyebrow: "OPTIMIZE",
    title: "Track what works. Kill what doesn't.",
    description: "Real-time performance for every variant, hook and angle — automatically.",
    bullets: [
      "Spend, ROAS and CTR per creative, in real time",
      "Compare performance across every variant",
      "Know which hooks and angles actually convert",
    ],
    tags: ["ROAS", "CTR", "CPA", "Hook Quality"],
    kpis: [
      { label: "Live creative", value: "3.4k", delta: "tracked" },
      { label: "Wasted spend", value: "−41%", delta: "auto-killed" },
    ],
    accent: "pink",
    visual: OptimizeMock,
  },
];

const PipelineSection = () => {
  return (
    <section
      id="pipeline"
      className="scroll-perf-section relative overflow-hidden bg-surface py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-8 left-1/3 h-56 w-56 rounded-full bg-[hsl(var(--warm))/0.12] blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-3xl text-center md:mb-32"
        >
          <div className="relative">
            <div className="pointer-events-none absolute -left-64 top-1/2 hidden -translate-y-1/2 lg:block xl:-left-80">
              <div className="relative rotate-[-6deg]">
                <div className="absolute -inset-4 rounded-[28px] bg-primary/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-white p-1.5 soft-shadow">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=720&h=900&fit=crop&q=85"
                    alt=""
                    className="h-64 w-52 rounded-xl object-cover xl:h-72 xl:w-60"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-64 top-1/2 hidden -translate-y-1/2 lg:block xl:-right-80">
              <div className="relative rotate-[6deg]">
                <div className="absolute -inset-4 rounded-[28px] bg-accent/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-white p-1.5 soft-shadow">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=720&h=900&fit=crop&q=85"
                    alt=""
                    className="h-64 w-52 rounded-xl object-cover xl:h-72 xl:w-60"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            <h2 className="font-heading text-4xl font-800 leading-tight tracking-tight text-foreground md:text-6xl">
              From brief to winning creative.
              <span className="mt-1 block text-gradient">
                All in one platform.
              </span>
            </h2>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Four steps. One partner. Built to make high-performing video the new default — not a moonshot.
          </p>
        </motion.div>

        <div className="relative">
          <div className="space-y-28 md:space-y-40">
            {steps.map((step, i) => {
              const accent = accentMap[step.accent];
              const imageFirst = i % 2 === 1;
              const Visual = step.visual;
              const stepNum = `0${i + 1}`;

              return (
                <motion.div
                  key={step.eyebrow}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                    <div className={imageFirst ? "md:order-2 md:pl-8" : "md:pr-8"}>
                      <div className="flex items-center gap-3">
                        <span
                          className={`bg-gradient-to-br ${accent.gradient} bg-clip-text font-heading text-6xl font-800 leading-none tracking-tight text-transparent md:text-7xl`}
                        >
                          {stepNum}
                        </span>
                        <span className="inline-flex items-center gap-2 self-center rounded-full border border-border bg-white/90 px-3 py-1.5 font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/75 backdrop-blur-sm soft-shadow sm:text-xs">
                          <span
                            className={`h-2 w-2 shrink-0 rounded-full ${accent.bg}`}
                            aria-hidden
                          />
                          {step.eyebrow}
                        </span>
                      </div>

                      <h3 className="mt-5 font-heading text-4xl font-800 leading-[1.02] tracking-tight text-foreground md:text-[3rem]">
                        {step.title}
                      </h3>
                      <p className="mt-4 max-w-xl text-lg text-muted-foreground md:text-xl">
                        {step.description}
                      </p>

                      <ul className="mt-7 space-y-4 text-base text-muted-foreground md:text-lg">
                        {step.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span
                              className={`mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${accent.gradient} text-white`}
                            >
                              <CheckCircle2 className="h-3 w-3" strokeWidth={3} />
                            </span>
                            <span className="text-foreground/85">{b}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        className="btn-shine mt-10 inline-flex h-14 items-center gap-2 rounded-xl border border-black bg-black px-8 text-base font-bold uppercase tracking-wider text-white shadow-[0_10px_28px_-10px_rgba(0,0,0,0.55)] transition-all hover:-translate-y-0.5 hover:bg-neutral-900"
                      >
                        Learn more
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </div>

                    <div className={imageFirst ? "md:order-1" : ""}>
                      <div className="relative">
                        <div
                          className={`absolute -inset-6 rounded-[32px] ${accent.glow} blur-2xl opacity-60`}
                        />
                        <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-border bg-white soft-shadow">
                          <div className="absolute inset-0 bg-surface" />
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${accent.chipGradient} opacity-70`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />

                          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between p-3">
                            <div className="flex items-center gap-2 rounded-full border border-border bg-white/85 px-2.5 py-1 backdrop-blur">
                              <span className={`h-2 w-2 rounded-full ${accent.bg}`} />
                              <span className="font-heading text-[10px] font-bold uppercase tracking-wider text-foreground/80">
                                Live · Step {i + 1} of 4
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                            </div>
                          </div>

                          <div className="absolute inset-0 z-10 pt-12">
                            <Visual />
                          </div>
                        </div>

                        <div
                          className={`absolute -bottom-4 ${
                            imageFirst ? "right-6" : "left-6"
                          } z-20 inline-flex items-center gap-2 rounded-full border border-border bg-white/85 px-3 py-1.5 backdrop-blur-sm soft-shadow`}
                        >
                          <span
                            className={`h-2 w-2 shrink-0 rounded-full ${accent.bg}`}
                            aria-hidden
                          />
                          <span className="font-heading text-[10px] font-bold tracking-wide text-foreground/80">
                            {step.eyebrow.toLowerCase()}.catalyst
                          </span>
                          <ArrowUpRight
                            className="h-3 w-3 shrink-0 text-foreground/40"
                            strokeWidth={2.25}
                            aria-hidden
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PipelineSection;
