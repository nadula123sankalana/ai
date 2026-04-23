import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CMO, TechFlow",
    text: "Catalyst transformed our brand presence. The quality of their video production is unmatched — every project exceeded expectations and came in under budget.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
    logo: "TechFlow",
    highlight: "340% conversion lift",
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Marketing, Elevate",
    text: "Working with Catalyst was seamless from kickoff to delivery. They shipped 50+ videos for our global campaign on time and the creative outperformed every benchmark.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80",
    logo: "Elevate",
    highlight: "50+ videos in 6 weeks",
  },
  {
    name: "Emily Watson",
    role: "Founder, Bloom",
    text: "The explainer video they created drove a 340% increase in conversions. Easily the best content investment we've made this year — possibly this decade.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80",
    logo: "Bloom",
    highlight: "$1.2M new ARR",
  },
  {
    name: "David Park",
    role: "VP Growth, Stride",
    text: "Catalyst delivered in days what took our agency months. Same quality. A fraction of the cost. I'll never go back to the old model.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80",
    logo: "Stride",
    highlight: "4× faster shipping",
  },
  {
    name: "Priya Shah",
    role: "Brand Director, Luna Skincare",
    text: "The creative team truly gets our brand. Every video feels like us, just sharper, brighter, and more on-strategy than we could have built alone.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&q=80",
    logo: "Luna",
    highlight: "92% brand recall",
  },
  {
    name: "James Carter",
    role: "Performance Lead, Nomad Apparel",
    text: "We doubled our creative output without adding headcount. Our TikTok account has never performed better. Catalyst is a cheat code.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80",
    logo: "Nomad",
    highlight: "2× output, flat cost",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative bg-surface py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Testimonials
          </span>
          <h2 className="mt-5 font-heading text-3xl font-800 leading-tight tracking-tight text-foreground md:text-5xl">
            Loved by the best
            <span className="block text-gradient">marketing teams.</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="card-hover relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white p-8 soft-shadow hover:border-primary/30"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 opacity-[0.07]">
                <Quote className="h-32 w-32 text-primary" />
              </div>
              <div className="relative flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-[hsl(var(--warm))] text-[hsl(var(--warm))]" />
                  ))}
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/8 px-2.5 py-0.5 font-heading text-[10px] font-extrabold uppercase tracking-wider text-primary">
                  {t.highlight}
                </span>
              </div>
              <p className="relative mt-6 flex-1 text-[15px] leading-relaxed text-foreground/85">
                "{t.text}"
              </p>
              <div className="relative mt-7 flex items-center gap-3 border-t border-border pt-5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <span className="font-heading text-xs font-800 uppercase tracking-wider text-foreground/40">
                  {t.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
