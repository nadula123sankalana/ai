import { motion } from "framer-motion";
import { Award, Newspaper, ShieldCheck, Share2, Handshake, ArrowUpRight } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Industry",
    desc: "40+ G2 badges and a 4.9/5 average rating from real customers.",
    cta: "Learn more",
  },
  {
    icon: Newspaper,
    title: "Media",
    desc: "Featured by Fast Company, Bloomberg, TechCrunch and Forbes.",
    cta: "Read coverage",
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    desc: "SOC 2 Type II certified. Enterprise-grade security & data controls.",
    cta: "Download SOC 2",
    badge: "SOC 2",
  },
  {
    icon: Share2,
    title: "Channels",
    desc: "Works natively with Meta, TikTok, YouTube, Snap, Amazon & more.",
    cta: "See integrations",
  },
  {
    icon: Handshake,
    title: "Investors",
    desc: "Backed by WndrCo, Kindred Ventures, NFDG and Comcast Ventures.",
    cta: "Our story",
  },
];

const ComplianceSection = () => {
  return (
    <section className="relative bg-surface py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Trust & compliance
          </span>
          <h2 className="mt-5 font-heading text-3xl font-800 leading-tight tracking-tight text-foreground md:text-5xl">
            Built for enterprise.
            <span className="block text-gradient">Loved by creators.</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {items.map((item, i) => (
            <motion.a
              key={item.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06 }}
              className="card-hover group relative flex flex-col justify-between rounded-2xl border border-border bg-white p-6 soft-shadow hover:border-primary/40"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-primary">
                    <item.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  {item.badge ? (
                    <span className="rounded-full border border-primary/30 bg-primary/8 px-2 py-0.5 font-heading text-[9px] font-extrabold uppercase tracking-wider text-primary">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-5 font-heading text-base font-700 text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
              <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-foreground/75 transition-colors group-hover:text-primary">
                {item.cta} <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
