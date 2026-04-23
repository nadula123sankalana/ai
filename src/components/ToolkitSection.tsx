import { motion } from "framer-motion";
import {
  Link as LinkIcon,
  Sparkles,
  UserCircle2,
  Box,
  Film,
  Layers,
  Search,
  Copy,
  ArrowRight,
} from "lucide-react";

const tools = [
  {
    icon: LinkIcon,
    title: "URL to Video",
    desc: "Turn any product link into a ready-to-launch video.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=420&fit=crop&q=80",
    tag: "Most loved",
  },
  {
    icon: Sparkles,
    title: "Asset Generator",
    desc: "Every top AI model — images, voices, scripts — in one place.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=420&fit=crop&q=80",
  },
  {
    icon: UserCircle2,
    title: "AI Avatars",
    desc: "The most realistic avatars in the industry, in 50+ languages.",
    image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&h=420&fit=crop&q=80",
  },
  {
    icon: Box,
    title: "Product Ads",
    desc: "Studio-quality product shots and animations from a single image.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=420&fit=crop&q=80",
  },
  {
    icon: Film,
    title: "AI Shorts",
    desc: "Generate scroll-stopping TikTok-style videos from a single idea.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=420&fit=crop&q=80",
  },
  {
    icon: Layers,
    title: "Batch Mode",
    desc: "Create up to 50 high-quality video variants in a single run.",
    image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=600&h=420&fit=crop&q=80",
    tag: "New",
  },
  {
    icon: Search,
    title: "Inspiration Library",
    desc: "Find what's trending in your niche and remix the winners.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=420&fit=crop&q=80",
  },
  {
    icon: Copy,
    title: "Ad Cloner",
    desc: "Recreate any winning ad and adapt it to your brand in minutes.",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=420&fit=crop&q=80",
  },
];

const ToolkitSection = () => {
  return (
    <section id="toolkit" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/8 blur-[140px]" />
      </div>
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Complete toolkit
          </span>
          <h2 className="mt-5 font-heading text-3xl font-800 leading-tight tracking-tight text-foreground md:text-5xl">
            The complete toolkit for
            <span className="block text-gradient-accent">modern advertisers.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Everything you need to produce, test, launch and optimize winning video —
            in one platform, used by 4,500+ brands.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((t, i) => (
            <motion.a
              key={t.title}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 4) * 0.06 }}
              className="card-hover group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white soft-shadow hover:border-primary/40"
            >
              <div className="relative aspect-[5/3] overflow-hidden bg-surface">
                <img
                  src={t.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl border border-white/30 bg-white/90 text-primary backdrop-blur">
                  <t.icon className="h-4 w-4" strokeWidth={2} />
                </div>
                {t.tag ? (
                  <span className="absolute right-3 top-3 rounded-full border border-white/30 bg-black/70 px-2 py-0.5 font-heading text-[9px] font-extrabold uppercase tracking-wider text-white backdrop-blur">
                    {t.tag}
                  </span>
                ) : null}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-lg font-700 text-foreground">{t.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolkitSection;
