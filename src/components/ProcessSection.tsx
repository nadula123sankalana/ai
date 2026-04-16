import { motion } from "framer-motion";
import { FileText, Camera, Wand2 } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Pre-Production",
    desc: "We plan everything—creative brief, storyboard, script, talent, and logistics—so production day runs flawlessly.",
  },
  {
    icon: Camera,
    step: "02",
    title: "Production",
    desc: "Our experienced crews capture stunning footage using professional equipment in 80+ cities worldwide.",
  },
  {
    icon: Wand2,
    step: "03",
    title: "Post-Production",
    desc: "Expert editing, color grading, motion graphics, and sound design bring your vision to life.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-surface-warm">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-800 mt-3 mb-4">
            Simple. <span className="text-gradient">Seamless.</span> Professional.
          </h2>
          <p className="text-muted-foreground text-lg">
            Three steps to world-class video content.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-border" />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative z-10 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25">
                <s.icon className="h-7 w-7" />
              </div>
              <span className="text-5xl font-heading font-800 text-primary/10">{s.step}</span>
              <h3 className="text-xl font-heading font-700 mt-2 mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
