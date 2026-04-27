import { motion } from "framer-motion";
import { ShoppingBag, Building2, Cpu, HeartPulse, GraduationCap, Stethoscope, Plane, Car } from "lucide-react";

type Industry = {
  name: string;
  description: string;
  image: string;
  icon: typeof ShoppingBag;
  gradient: string;
  orientation: "vertical" | "horizontal";
  span: string;
};

const industries: Industry[] = [
  {
    name: "Retail & E-commerce",
    description: "High-converting product videos for launches, promotions, and always-on acquisition campaigns.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&h=800&fit=crop&q=80",
    icon: ShoppingBag,
    gradient: "from-emerald-500/70 via-teal-500/40 to-transparent",
    orientation: "vertical",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Software & Tech",
    description: "Explainers, demos, and launch films that clarify complex products and accelerate growth.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1000&h=800&fit=crop&q=80",
    icon: Cpu,
    gradient: "from-violet-600/70 via-indigo-500/40 to-transparent",
    orientation: "vertical",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Healthcare",
    description: "Patient-first creative built for strict review workflows and regulated brand requirements.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
    icon: Stethoscope,
    gradient: "from-sky-500/70 via-cyan-500/40 to-transparent",
    orientation: "vertical",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Professional Services",
    description: "Trust-building brand content that converts high-intent audiences into qualified pipeline.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&q=80",
    icon: Building2,
    gradient: "from-amber-500/70 via-orange-500/40 to-transparent",
    orientation: "horizontal",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    name: "Education",
    description: "Story-led campaigns that increase enrollments and make curriculum value immediately clear.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&q=80",
    icon: GraduationCap,
    gradient: "from-rose-500/70 via-pink-500/40 to-transparent",
    orientation: "horizontal",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    name: "Medical & Biotech",
    description: "Scientific and clinical narratives translated into clear, compelling stakeholder content.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop&q=80",
    icon: HeartPulse,
    gradient: "from-slate-600/70 via-slate-500/40 to-transparent",
    orientation: "horizontal",
    span: "md:col-span-3 md:row-span-1",
  },
  {
    name: "Travel & Hospitality",
    description: "Destination-led storytelling that drives bookings, occupancy, and repeat guest demand.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&q=80",
    icon: Plane,
    gradient: "from-indigo-500/70 via-blue-500/40 to-transparent",
    orientation: "horizontal",
    span: "md:col-span-3 md:row-span-1",
  },
  {
    name: "Automotive & Mobility",
    description: "Premium launch and performance content for electric, luxury, and mass-market vehicle brands.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop&q=80",
    icon: Car,
    gradient: "from-neutral-800/75 via-neutral-700/45 to-transparent",
    orientation: "horizontal",
    span: "md:col-span-6 md:row-span-1",
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />
              </div>

              <div
                className={`relative flex h-full flex-col p-5 md:p-6 ${
                  item.orientation === "vertical" ? "min-h-[300px] md:min-h-[360px]" : "min-h-[190px] md:min-h-[220px]"
                }`}
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/15 text-white backdrop-blur">
                    <item.icon className="h-5 w-5" strokeWidth={2.25} />
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <h3 className="font-heading text-xl font-800 text-white drop-shadow md:text-[1.6rem]">
                    {item.name}
                  </h3>
                  <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-white/90 md:text-base">
                    {item.description}
                  </p>
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
