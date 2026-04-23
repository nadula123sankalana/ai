import { motion } from "framer-motion";
import {
  BarChart3,
  Eye,
  MousePointerClick,
  Play,
  Sparkles,
  TrendingUp,
  ArrowRight,
  Target,
  Zap,
} from "lucide-react";

const chartBars = [38, 56, 44, 72, 60, 85, 68, 92, 78, 95, 82, 88];

const hookList = [
  { label: '"Here\'s what nobody tells you…"', score: 94, tone: "primary" },
  { label: '"I tried this for 30 days."', score: 88, tone: "accent" },
  { label: '"Stop scrolling — watch this."', score: 82, tone: "warm" },
];

const DiscoverSection = () => {
  return (
    <section id="discover" className="relative py-24 md:py-32">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="relative order-2 lg:order-1"
          >
            <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-hero-gradient-soft blur-2xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-border bg-white shadow-[0_40px_80px_-30px_rgba(15,23,42,0.22)]">
              <div className="flex items-center justify-between border-b border-border bg-surface px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-hero-gradient">
                    <BarChart3 className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                  </span>
                  <span className="font-heading text-sm font-700 text-foreground">Creative Intelligence</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                    Live
                  </span>
                  <span className="rounded-full border border-border bg-white px-2.5 py-1 text-[10px] font-semibold text-muted-foreground">
                    Last 7d
                  </span>
                </div>
              </div>

              <div className="grid gap-4 p-5 md:grid-cols-3 md:gap-3">
                {[
                  { label: "Impressions", value: "2.4M", delta: "+18%", icon: Eye, tone: "text-primary bg-primary/10" },
                  { label: "CTR", value: "6.8%", delta: "+42%", icon: MousePointerClick, tone: "text-accent bg-accent/10" },
                  { label: "ROAS", value: "4.7×", delta: "+73%", icon: TrendingUp, tone: "text-[hsl(var(--warm))] bg-[hsl(var(--warm))]/10" },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl border border-border bg-white p-4">
                    <div className="flex items-start justify-between">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${m.tone}`}>
                        <m.icon className="h-4 w-4" strokeWidth={2.25} />
                      </div>
                      <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                        {m.delta}
                      </span>
                    </div>
                    <div className="mt-3 font-heading text-xl font-800 text-foreground">{m.value}</div>
                    <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border px-5 py-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-heading text-xs font-700 uppercase tracking-wider text-foreground">
                    Daily spend vs. return
                  </span>
                  <span className="text-[11px] text-muted-foreground">Apr 16 – 22</span>
                </div>
                <div className="flex h-32 items-end gap-1.5 sm:h-36">
                  {chartBars.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.04, duration: 0.6, ease: "easeOut" }}
                      className="flex-1 rounded-t-md bg-hero-gradient opacity-80 hover:opacity-100 transition-opacity"
                      style={{ minHeight: 8 }}
                    />
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-between text-[10px] font-medium text-muted-foreground">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>

              <div className="border-t border-border bg-surface/60 px-5 py-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-heading text-xs font-700 uppercase tracking-wider text-foreground">
                    Top-performing hooks
                  </span>
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                </div>
                <div className="space-y-2">
                  {hookList.map((h) => (
                    <div key={h.label} className="flex items-center gap-3 rounded-lg border border-border bg-white p-2.5">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-hero-gradient text-white">
                        <Play className="ml-0.5 h-3 w-3 fill-white" />
                      </div>
                      <span className="flex-1 truncate text-[13px] font-medium text-foreground">{h.label}</span>
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-16 overflow-hidden rounded-full bg-border">
                          <div
                            className="h-full bg-hero-gradient"
                            style={{ width: `${h.score}%` }}
                          />
                        </div>
                        <span className="font-heading text-xs font-800 text-foreground">{h.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -8 }}
              whileInView={{ opacity: 1, y: 0, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -left-4 bottom-10 hidden w-[160px] overflow-hidden rounded-xl border border-border bg-white soft-shadow md:block"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=520&fit=crop&q=80"
                  alt="Winning creative preview"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute left-2 top-2 rounded-full border border-white/20 bg-black/60 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur">
                  Winner
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="text-[10px] font-bold text-white">CPA −42% · ROAS 4.7×</div>
                  <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-white/20">
                    <div className="h-full w-[82%] rounded-full bg-hero-gradient" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute -right-3 top-16 hidden items-center gap-2 rounded-2xl border border-border bg-white px-3 py-2.5 soft-shadow md:flex"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-hero-gradient">
                <Zap className="h-4 w-4 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-heading text-xs font-800 text-foreground leading-none">24 new winners</div>
                <div className="text-[10px] text-muted-foreground">detected in your category</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Creative intelligence
            </span>
            <h2 className="mt-5 font-heading text-3xl font-800 leading-[1.05] tracking-tight text-foreground md:text-5xl">
              See exactly what's converting
              <span className="block text-gradient">in your industry — today.</span>
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted-foreground md:text-base">
              Catalyst ingests 30M+ ads across every major channel, surfaces the creative
              angles, hooks and formats that are actually winning in your niche, and turns
              them into production-ready briefs in seconds.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { icon: Target, title: "Winning creative, decoded", desc: "Hook, pacing, length, visual style — scored and explained." },
                { icon: Sparkles, title: "Remix what already works", desc: "Adapt proven concepts to your brand in one click." },
                { icon: TrendingUp, title: "Predict performance upfront", desc: "ML-powered forecasts on ROAS, CTR and retention before you spend a dollar." },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-hero-gradient text-white shadow-[0_8px_20px_-8px_hsl(var(--glow-primary)/0.5)]">
                    <item.icon className="h-5 w-5" strokeWidth={2.25} />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-700 text-foreground">{item.title}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-hero-gradient px-6 py-3 font-heading text-sm font-semibold text-white shadow-[0_12px_30px_-8px_hsl(var(--glow-primary)/0.55)] hover:opacity-95"
              >
                Browse the library <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 font-heading text-sm font-semibold text-foreground transition-colors hover:bg-surface"
              >
                See sample report
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
