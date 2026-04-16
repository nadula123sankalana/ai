import { motion } from "framer-motion";
import { Zap, Globe, TrendingUp, Clock, Shield } from "lucide-react";

const features = [
  { icon: Zap, title: "Streamlined Process", desc: "From brief to delivery, our workflow is optimized for speed without compromising quality." },
  { icon: Globe, title: "Global Coverage", desc: "Our network spans 80+ cities worldwide, ensuring local expertise wherever you need it." },
  { icon: TrendingUp, title: "Scalable Solutions", desc: "Whether it's one video or a hundred, we scale to meet your content demands." },
  { icon: Clock, title: "Fast Turnaround", desc: "Industry-leading delivery times. Get your videos when you need them, not weeks later." },
  { icon: Shield, title: "Quality Guaranteed", desc: "Every project goes through our rigorous QA process for pixel-perfect results." },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-800 mt-3 mb-4">
            Everything you need to <span className="text-gradient">create great video</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We've built the infrastructure so you can focus on your brand.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-border bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <f.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-700 mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
