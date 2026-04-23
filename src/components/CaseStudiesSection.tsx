import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type CaseStudy = {
  brand: string;
  category: string;
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
  image: string;
  logo: string;
  quote: string;
};

const cases: CaseStudy[] = [
  {
    brand: "Tec-Do",
    category: "Agency",
    stat1: { value: "45%", label: "CPA reduction" },
    stat2: { value: "73%", label: "ROAS improvement" },
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=560&fit=crop&q=85",
    logo: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=80&h=80&fit=crop&q=80",
    quote: "Catalyst is the single biggest unlock our performance team has had in years.",
  },
  {
    brand: "Bloom DTC",
    category: "E-commerce",
    stat1: { value: "669%", label: "Adoption growth" },
    stat2: { value: "200k+", label: "Ads generated" },
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&h=560&fit=crop&q=85",
    logo: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=80&h=80&fit=crop&q=80",
    quote: "We went from 12 creatives a month to 3,000. Same team. Same bar.",
  },
  {
    brand: "Zumper",
    category: "API",
    stat1: { value: "300+", label: "Videos / month" },
    stat2: { value: "$20k", label: "Saved per quarter" },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=560&fit=crop&q=85",
    logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=80&h=80&fit=crop&q=80",
    quote: "The API integration means every new listing ships with a video, automatically.",
  },
  {
    brand: "1MORE",
    category: "E-commerce",
    stat1: { value: "47.6%", label: "CTR increase" },
    stat2: { value: "$10k", label: "Saved per video" },
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&h=560&fit=crop&q=85",
    logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=80&h=80&fit=crop&q=80",
    quote: "Our paid social finally feels on-brand, on-time and on-budget. All three.",
  },
  {
    brand: "Whole Life Pet",
    category: "E-commerce",
    stat1: { value: "$3k", label: "Saved per video" },
    stat2: { value: "50×", label: "Production boost" },
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=900&h=560&fit=crop&q=85",
    logo: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=80&h=80&fit=crop&q=80",
    quote: "Our brand story, told 50 different ways, without sacrificing the heart of it.",
  },
  {
    brand: "Vitals",
    category: "SaaS",
    stat1: { value: "1,000+", label: "Creatives / month" },
    stat2: { value: "40%", label: "Subscription uptake" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=560&fit=crop&q=85",
    logo: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=80&h=80&fit=crop&q=80",
    quote: "Our CMO called it 'the unfair advantage' in our board deck. That felt about right.",
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="cases" className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--warm))]/30 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--warm))]">
            <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--warm))]" />
            Real teams · Real results
          </span>
          <h2 className="mt-5 font-heading text-3xl font-800 leading-tight tracking-tight text-foreground md:text-5xl">
            How Catalyst helps the world's
            <span className="block text-gradient">best marketing teams.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Faster turnarounds, lower costs, and creative that actually moves the numbers
            that matter to your CFO.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.a
              key={c.brand}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="card-hover group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white soft-shadow hover:border-primary/40"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img src={c.image} alt="" className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/50 px-2.5 py-0.5 font-heading text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur">
                  {c.category}
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/30 bg-white">
                    <img src={c.logo} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <div className="font-heading text-lg font-800 text-white drop-shadow leading-none">{c.brand}</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-px bg-border">
                <div className="bg-white p-5 text-center">
                  <div className="text-gradient-primary font-heading text-3xl font-800 leading-none">{c.stat1.value}</div>
                  <p className="mt-1.5 text-xs font-semibold text-muted-foreground">{c.stat1.label}</p>
                </div>
                <div className="bg-white p-5 text-center">
                  <div className="text-gradient-accent font-heading text-3xl font-800 leading-none">{c.stat2.value}</div>
                  <p className="mt-1.5 text-xs font-semibold text-muted-foreground">{c.stat2.label}</p>
                </div>
              </div>

              <blockquote className="px-5 py-4 text-[13px] italic leading-relaxed text-foreground/80">
                "{c.quote}"
              </blockquote>

              <div className="flex items-center justify-between border-t border-border px-5 py-3.5">
                <span className="text-xs font-semibold text-foreground/70">Read case study</span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
