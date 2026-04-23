import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  tone: "primary" | "accent" | "warm" | "pink";
};

const stats: Stat[] = [
  { value: 30000, suffix: "+", label: "Videos produced", tone: "primary" },
  { value: 4500, suffix: "+", label: "Brands served", tone: "accent" },
  { value: 80, suffix: "+", label: "Cities covered", tone: "warm" },
  { value: 1, suffix: "B+", prefix: "~$", label: "Ad spend powered", tone: "pink" },
];

const toneMap = {
  primary: "text-gradient-primary",
  accent: "text-gradient-accent",
  warm: "text-gradient-warm",
  pink: "text-gradient",
} as const;

const Counter = ({ target, suffix, prefix }: { target: number; suffix: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1800;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          tick();
        }
      },
      { threshold: 0.35 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const ResultsBannerSection = () => {
  return (
    <section className="relative py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-white p-8 md:p-12 ring-glow"
        >
          <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-20 h-[320px] w-[420px] rounded-full bg-accent/10 blur-[100px]" />
          <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" />

          <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className={`font-heading text-3xl font-800 tracking-tight sm:text-4xl md:text-5xl ${toneMap[s.tone]}`}>
                  <Counter target={s.value} suffix={s.suffix} prefix={s.prefix} />
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-sm sm:tracking-wider">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsBannerSection;
