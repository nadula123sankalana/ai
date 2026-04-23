import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag, Building2, Cpu, HeartPulse, GraduationCap, Stethoscope, Plane, Car } from "lucide-react";

type Industry = {
  name: string;
  image: string;
  icon: typeof ShoppingBag;
  clients: number;
  stat: { value: string; label: string };
  clientLogos: string[];
  gradient: string;
  span: string;
};

const industries: Industry[] = [
  {
    name: "Retail & E-commerce",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&h=800&fit=crop&q=80",
    icon: ShoppingBag,
    clients: 1420,
    stat: { value: "2.7×", label: "Lift in conversions" },
    clientLogos: ["Shopify", "Alo Yoga", "Gymshark", "Allbirds"],
    gradient: "from-emerald-500/70 via-teal-500/40 to-transparent",
    span: "md:col-span-3 md:row-span-2",
  },
  {
    name: "Software & Tech",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1000&h=800&fit=crop&q=80",
    icon: Cpu,
    clients: 860,
    stat: { value: "1,000+", label: "Creatives / month" },
    clientLogos: ["Vercel", "Notion", "Linear", "Figma"],
    gradient: "from-violet-600/70 via-indigo-500/40 to-transparent",
    span: "md:col-span-3 md:row-span-2",
  },
  {
    name: "Healthcare",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
    icon: Stethoscope,
    clients: 340,
    stat: { value: "$3k", label: "Saved per video" },
    clientLogos: ["Curology", "Hims", "Ro"],
    gradient: "from-sky-500/70 via-cyan-500/40 to-transparent",
    span: "md:col-span-2",
  },
  {
    name: "Professional Services",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&q=80",
    icon: Building2,
    clients: 612,
    stat: { value: "45%", label: "CPA reduction" },
    clientLogos: ["Deloitte", "PwC"],
    gradient: "from-amber-500/70 via-orange-500/40 to-transparent",
    span: "md:col-span-2",
  },
  {
    name: "Education",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&q=80",
    icon: GraduationCap,
    clients: 280,
    stat: { value: "3×", label: "Enrollment lift" },
    clientLogos: ["Masterclass", "Coursera"],
    gradient: "from-rose-500/70 via-pink-500/40 to-transparent",
    span: "md:col-span-2",
  },
  {
    name: "Medical & Biotech",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop&q=80",
    icon: HeartPulse,
    clients: 190,
    stat: { value: "98%", label: "Compliance ready" },
    clientLogos: ["Illumina", "Moderna"],
    gradient: "from-slate-600/70 via-slate-500/40 to-transparent",
    span: "md:col-span-2",
  },
  {
    name: "Travel & Hospitality",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&q=80",
    icon: Plane,
    clients: 415,
    stat: { value: "47%", label: "CTR increase" },
    clientLogos: ["Airbnb", "Booking"],
    gradient: "from-indigo-500/70 via-blue-500/40 to-transparent",
    span: "md:col-span-2",
  },
  {
    name: "Automotive & Mobility",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop&q=80",
    icon: Car,
    clients: 325,
    stat: { value: "4.7×", label: "Avg. ROAS" },
    clientLogos: ["Toyota", "Audi", "Tesla"],
    gradient: "from-neutral-800/75 via-neutral-700/45 to-transparent",
    span: "md:col-span-2",
  },
];

const IndustryShowcaseSection = () => {
  return (
    <section id="industries" className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Built for every vertical
            </span>
            <h2 className="mt-5 font-heading text-3xl font-800 leading-[1.05] tracking-tight text-foreground md:text-5xl">
              Proven results across
              <span className="block text-gradient-accent">every industry you serve.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] text-muted-foreground">
            4,500+ brands trust Catalyst with video that moves the needle — from DTC
            launches to enterprise rollouts to regulated healthcare.
          </p>
        </motion.div>

        <div className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
          {industries.map((item, i) => (
            <motion.a
              key={item.name}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
              className={`card-hover group relative overflow-hidden rounded-3xl border border-border bg-white soft-shadow ${item.span}`}
            >
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${item.gradient}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              </div>

              <div className="relative flex h-full min-h-[200px] flex-col justify-between p-5 md:p-6">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/15 text-white backdrop-blur">
                    <item.icon className="h-5 w-5" strokeWidth={2.25} />
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white opacity-0 backdrop-blur transition-all group-hover:opacity-100 group-hover:translate-x-0">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-800 text-white drop-shadow md:text-[1.6rem]">
                    {item.name}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-white/30 bg-white/15 px-2.5 py-0.5 font-heading text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
                      {item.clients.toLocaleString()}+ clients
                    </span>
                    <span className="rounded-full bg-white/90 px-2.5 py-0.5 font-heading text-[10px] font-bold uppercase tracking-wider text-foreground">
                      {item.stat.value} {item.stat.label}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                    {item.clientLogos.map((logo) => (
                      <span key={logo} className="font-heading text-[11px] font-800 uppercase tracking-wider text-white/80">
                        {logo}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryShowcaseSection;
