import { motion } from "framer-motion";
import { FileText, Camera, Wand2, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Pre-Production",
    desc: "Creative brief, storyboard, script, talent and logistics — locked before a single frame rolls.",
    highlights: ["Strategy workshop", "Storyboard & script", "Talent & locations"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=520&fit=crop&q=80",
  },
  {
    icon: Camera,
    step: "02",
    title: "Production",
    desc: "Experienced crews shoot with cinema-grade gear across 80+ cities worldwide.",
    highlights: ["4K / 6K capture", "Global crews", "Director of photography"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&h=520&fit=crop&q=80",
  },
  {
    icon: Wand2,
    step: "03",
    title: "Post-Production",
    desc: "Editing, color grading, motion graphics, VFX and sound design that elevate every frame.",
    highlights: ["Edit & color", "Motion graphics", "Sound design & mix"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=520&fit=crop&q=80",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Our process
          </span>
          <h2 className="mt-5 font-heading text-3xl font-800 leading-tight tracking-tight text-foreground md:text-5xl">
            Simple. Seamless.
            <span className="block text-gradient">Professional.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Three clean steps to world-class video. No chaos. No surprises. No blown timelines.
          </p>
        </motion.div>

        <div className="relative grid gap-6 md:grid-cols-3">
          <div className="pointer-events-none absolute left-[14%] right-[14%] top-[170px] hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="card-hover relative overflow-hidden rounded-3xl border border-border bg-white soft-shadow"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={s.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-hero-gradient text-white shadow-[0_10px_30px_-8px_hsl(var(--glow-primary)/0.55)]">
                  <s.icon className="h-5 w-5" strokeWidth={2.25} />
                </div>
                <div className="absolute right-4 top-4 font-heading text-5xl font-900 leading-none text-foreground/10">
                  {s.step}
                </div>
              </div>
              <div className="p-8 pt-5">
                <div className="font-heading text-[10px] font-extrabold uppercase tracking-[0.3em] text-primary">
                  Step {s.step}
                </div>
                <h3 className="mt-2 font-heading text-xl font-700 text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-[13px] text-foreground/85">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.25} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
