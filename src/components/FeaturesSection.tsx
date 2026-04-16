import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Network, Globe, BarChart3, Clock } from "lucide-react";

const features = [
  { icon: Network, title: "Streamlined process", desc: "We bring strategy and production under one roof, keeping your brand's voice consistent and strong." },
  { icon: Globe, title: "Global coverage", desc: "Our crew covers 80+ cities worldwide, offering accessible, convenient services to clients everywhere." },
  { icon: BarChart3, title: "Scalable solutions", desc: "Our scalable solutions ensure your content stays top-tier, whether you need one video or a hundred." },
  { icon: Clock, title: "Quick turnarounds", desc: "Our streamlined production process delivers your videos quickly without compromising quality." },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        {/* Hero-style intro */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-800 leading-tight">
              Your fast and reliable production partner.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button className="rounded-full px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Get in Touch
            </Button>
            <Button variant="outline" className="rounded-full px-8 h-12 border-border text-foreground hover:bg-secondary font-semibold">
              <Play className="mr-2 h-4 w-4 fill-primary text-primary" /> Watch Reel
            </Button>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-5">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-700 mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
