import { motion } from "framer-motion";
import { Play, Network, Globe, BarChart3, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Network,
    title: "Streamlined process",
    desc: "Strategy, production and post under one roof — your brand voice stays consistent across every asset.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=380&fit=crop&q=80",
  },
  {
    icon: Globe,
    title: "Global coverage",
    desc: "On-the-ground crews in 80+ cities worldwide, ready to shoot where your story actually lives.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=380&fit=crop&q=80",
  },
  {
    icon: BarChart3,
    title: "Scalable volume",
    desc: "From one hero film to 1,000 personalized variants — the quality bar never drops.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=380&fit=crop&q=80",
  },
  {
    icon: Clock,
    title: "Fast turnarounds",
    desc: "Briefs to delivery in days, not months, without ever shortcutting craft or sound design.",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600&h=380&fit=crop&q=80",
  },
  {
    icon: Sparkles,
    title: "AI-powered ideation",
    desc: "Discover what's converting in your category and remix winning angles in a single click.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=380&fit=crop&q=80",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade",
    desc: "SOC 2 Type II, SSO, role-based access, and NDAs that scale across your entire org.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=380&fit=crop&q=80",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container">
        <div className="mb-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Why Catalyst
            </span>
            <h2 className="mt-5 font-heading text-3xl font-800 leading-[1.05] tracking-tight text-foreground md:text-5xl">
              Your fast, reliable
              <span className="block text-gradient">production partner.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-4 sm:flex-row lg:justify-end"
          >
            <Button className="btn-shine h-12 rounded-full bg-hero-gradient px-7 font-semibold text-white shadow-[0_12px_30px_-8px_hsl(var(--glow-primary)/0.55)] hover:opacity-95">
              Get in Touch
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-full border-border bg-white px-7 font-semibold text-foreground hover:bg-surface"
            >
              <Play className="mr-2 h-4 w-4 fill-primary text-primary" /> Watch Reel
            </Button>
          </motion.div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="card-hover group relative overflow-hidden rounded-2xl border border-border bg-white soft-shadow hover:border-primary/40"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-surface">
                <img src={f.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-primary soft-shadow">
                  <f.icon className="h-5 w-5" strokeWidth={2} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-700 text-foreground">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
