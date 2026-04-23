import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  { name: "Product Videos", hint: "Showcase, demo & lifestyle", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop&q=80" },
  { name: "About Us Videos", hint: "Brand films that convert", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop&q=80" },
  { name: "Explainer Videos", hint: "Simplify complex stories", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80" },
  { name: "Testimonial Videos", hint: "Real customer, real impact", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop&q=80" },
  { name: "Video Ads", hint: "Meta, TikTok, YouTube ready", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop&q=80" },
  { name: "Animated Videos", hint: "2D, 3D & motion graphics", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop&q=80" },
  { name: "Event Videos", hint: "Multi-cam, live-to-edit", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop&q=80" },
  { name: "Tutorial Videos", hint: "Product-led onboarding", image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop&q=80" },
  { name: "Crowdfunding Videos", hint: "From Kickstarter to scale", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop&q=80" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative bg-surface py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Every format
          </span>
          <h2 className="mt-5 font-heading text-3xl font-800 leading-[1.05] tracking-tight text-foreground md:text-5xl">
            Create any video.
            <span className="block text-gradient">With one partner.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            From 15-second TikToks to 60-second brand films — one production team, one creative
            standard, zero friction.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.a
              key={s.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.06 }}
              className="card-hover group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-border bg-white p-4 soft-shadow transition-all hover:border-primary/40"
            >
              <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl">
                <img src={s.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block font-heading text-base font-700 text-foreground group-hover:text-primary transition-colors">
                  {s.name}
                </span>
                <span className="mt-0.5 block text-xs text-muted-foreground">{s.hint}</span>
              </div>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition-all group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary">
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
