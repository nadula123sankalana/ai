import { motion } from "framer-motion";
import { Video, MessageSquare, Megaphone, Users, Palette, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Video, title: "Product Videos", desc: "Showcase your products with stunning visuals that convert viewers into customers." },
  { icon: MessageSquare, title: "Explainer Videos", desc: "Break down complex ideas into engaging, easy-to-understand animated content." },
  { icon: Megaphone, title: "Ad Campaigns", desc: "High-impact video ads optimized for every platform and audience." },
  { icon: Users, title: "Testimonials", desc: "Authentic customer stories that build trust and credibility for your brand." },
  { icon: Palette, title: "Animation", desc: "Custom 2D and 3D animations that bring your brand story to life." },
  { icon: ArrowUpRight, title: "Social Content", desc: "Scroll-stopping short-form content designed for social media engagement." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface-warm">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-800 mt-3 mb-4">
            Video solutions for <span className="text-gradient">every need</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From product launches to brand storytelling, we've got you covered.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group cursor-pointer p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground/0 group-hover:text-primary transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="text-xl font-heading font-700 mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
