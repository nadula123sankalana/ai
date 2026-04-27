import { ArrowRight, Link as LinkIcon, Play, TrendingUp, Eye, Clock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const HERO_BG_VIDEO_ID = "I9qBS0zLGKo";
const heroEmbedSrc = `https://www.youtube.com/embed/${HERO_BG_VIDEO_ID}?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`;

const marqueeImages = [
  { label: "Brand Films", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=750&fit=crop&q=85" },
  { label: "Product Videos", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=750&fit=crop&q=85" },
  { label: "Commercials", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=750&fit=crop&q=85" },
  { label: "Social Content", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&h=750&fit=crop&q=85" },
  { label: "Testimonials", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=750&fit=crop&q=85" },
  { label: "Explainers", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=750&fit=crop&q=85" },
  { label: "Event Coverage", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=750&fit=crop&q=85" },
  { label: "Animations", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=750&fit=crop&q=85" },
];

const heroAvatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&q=80",
];

const HeroSection = () => {
  const [url, setUrl] = useState("");

  return (
    <section className="relative overflow-hidden bg-neutral-950 pt-28 text-white md:pt-32">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-36 top-0 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[130px]" />
        <div className="absolute -right-20 top-20 h-[480px] w-[480px] rounded-full bg-accent/20 blur-[140px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-20" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-neutral-950/70 to-white" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mb-6 text-[2.8rem] font-heading font-800 leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl md:text-7xl lg:text-[5.6rem]">
            Videos that
            <span className="block">
              <span className="text-gradient">actually convert.</span>
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Paste a product URL or brief. Get cinematic video ads, explainers, and
            social content — produced by world-class crews in 80+ cities, delivered
            in days, optimized for performance.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="mx-auto mb-5 w-full max-w-xl">
            <div className="group relative flex items-center gap-2 rounded-full border border-white/15 bg-white/10 p-1.5 transition-all focus-within:border-primary/60 focus-within:ring-4 focus-within:ring-primary/20">
              <div className="pl-4 pr-1 text-white/65">
                <LinkIcon className="h-5 w-5" />
              </div>
              <input
                type="url"
                inputMode="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste your product URL…"
                className="min-w-0 flex-1 bg-transparent py-3 text-[15px] text-white placeholder:text-white/45 outline-none"
              />
              <Button
                type="submit"
                className="btn-shine h-11 shrink-0 rounded-full bg-hero-gradient px-5 text-sm font-semibold text-white shadow-[0_12px_30px_-8px_hsl(var(--glow-primary)/0.55)] hover:opacity-95"
              >
                Generate <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <p className="mt-3 text-xs text-white/55">
              No credit card · First video free · Delivered in 48 hours
            </p>
          </form>

          <div className="mb-14 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {heroAvatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-8 w-8 rounded-full border-2 border-neutral-950 object-cover"
                  loading="eager"
                />
              ))}
            </div>
            <p className="text-xs font-semibold text-white">
              Joined by <span className="text-gradient-primary">2,300+ marketers</span> this month
            </p>
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute -inset-8 rounded-[40px] bg-hero-gradient-soft blur-2xl" />

          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-neutral-900 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--pink))]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--warm))]/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
              </div>
              <div className="ml-3 flex-1">
                <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs font-medium text-white/65">
                  <LinkIcon className="h-3 w-3" />
                  catalyst.ai / studio / preview
                </div>
              </div>
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">Live</span>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <iframe
                title="Catalyst hero preview"
                className="absolute inset-0 h-full w-full"
                src={heroEmbedSrc}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-xl border border-white/15 bg-black/55 px-3 py-2 backdrop-blur-md sm:left-6 sm:top-6">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/90">
                  <Eye className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="font-heading text-sm font-800 text-white leading-none">1.2M</div>
                  <div className="text-[10px] text-white/75">views · this week</div>
                </div>
              </div>

              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-xl border border-white/15 bg-black/55 px-3 py-2 backdrop-blur-md sm:right-6 sm:top-6">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[hsl(var(--warm))]/90">
                  <TrendingUp className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="font-heading text-sm font-800 text-white leading-none">+273%</div>
                  <div className="text-[10px] text-white/75">ROAS vs. baseline</div>
                </div>
              </div>

              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/20 bg-black/60 px-4 py-2.5 backdrop-blur-md sm:bottom-6">
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-md hover:scale-105 transition">
                  <Play className="ml-0.5 h-4 w-4 fill-black" />
                </button>
                <div className="hidden sm:block h-1 w-48 overflow-hidden rounded-full bg-white/15">
                  <div className="h-full w-1/3 rounded-full bg-hero-gradient" />
                </div>
                <div className="hidden items-center gap-1.5 text-xs font-medium text-white/85 sm:flex">
                  <Clock className="h-3 w-3" />
                  0:18 / 0:60
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
              {[
                { label: "Hook retention", value: "94%", tone: "text-gradient-primary" },
                { label: "CTR", value: "6.8%", tone: "text-gradient-accent" },
                { label: "CPA", value: "–42%", tone: "text-gradient-warm" },
                { label: "Variants live", value: "24", tone: "text-gradient" },
              ].map((s) => (
                <div key={s.label} className="bg-neutral-900 p-4 text-center">
                  <div className={`font-heading text-2xl font-800 leading-none ${s.tone}`}>{s.value}</div>
                  <div className="mt-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/60">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 w-full overflow-hidden md:mt-20 mask-fade-x">
          <div className="flex gap-4 w-max lg:animate-marquee">
            {[...marqueeImages, ...marqueeImages].map((img, i) => (
              <div
                key={i}
                className="group relative h-[180px] w-[280px] flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 md:h-[220px] md:w-[340px]"
              >
                <img
                  src={img.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow-md">
                    <Play className="ml-0.5 h-5 w-5 fill-neutral-900 text-neutral-900" />
                  </span>
                </div>
                <span className="absolute bottom-0 left-0 z-10 p-5 font-heading text-sm font-700 text-white drop-shadow-md md:text-base">
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-16 md:h-24" />
    </section>
  );
};

export default HeroSection;
