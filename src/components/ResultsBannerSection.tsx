import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/context/LanguageContext";

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
  const { t } = useTranslation();

  return (
    <section className="relative py-16 md:py-20" data-switcher-surface="light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="soft-shadow relative overflow-hidden rounded-3xl border border-border bg-white p-8 max-md:p-6 md:p-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" />

          <div className="relative grid grid-cols-1 md:grid-cols-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`max-md:py-4 py-6 text-center md:py-5 ${
                  i > 0 ? "border-t border-border md:border-t-0 md:border-l" : ""
                }`}
              >
                <div
                  className={`font-heading font-800 tracking-tight max-md:text-[1.65rem] max-md:leading-none md:text-6xl ${toneMap[s.tone]}`}
                >
                  <Counter target={s.value} suffix={s.suffix} prefix={s.prefix} />
                </div>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground max-md:mt-2 max-md:text-[11px] max-md:tracking-[0.12em] md:text-base">
                  {t(s.label)}
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
