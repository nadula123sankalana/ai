import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  "Product Videos",
  "About Us Videos",
  "Explainer Videos",
  "Testimonial Videos",
  "Video Ads",
  "Animated Videos",
  "Event Videos",
  "Tutorial Videos",
  "Crowdfunding Videos",
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface-elevated">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-800 leading-tight mb-4">
            Create any video, with one partner.
          </h2>
          <p className="text-muted-foreground text-lg">
            View our past work to find inspiration for your own video content.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.a
              key={s}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex items-center justify-between p-6 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
            >
              <span className="text-base font-heading font-600 text-foreground">{s}</span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
