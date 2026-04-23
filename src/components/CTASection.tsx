import { motion } from "framer-motion";
import { ArrowRight, Link as LinkIcon, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const [url, setUrl] = useState("");

  return (
    <section id="cta" className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-neutral-950 text-white"
        >
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-hero-gradient opacity-30 blur-[120px] animate-gradient-pan" />
          <div className="pointer-events-none absolute -bottom-32 -right-20 h-[360px] w-[460px] rounded-full bg-[hsl(var(--glow-pink))]/25 blur-[120px]" />
          <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-25" />

          <div className="relative z-10 px-6 py-16 md:px-12 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                  Your first video is free
                </span>
              </div>

              <h2 className="font-heading text-3xl font-800 leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Ready to make videos
                <span className="block text-gradient">that actually win?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-white/80 md:text-lg">
                Paste a product URL and we'll generate your first video — on us.
                No credit card. No commitments. Delivered in 48 hours.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mx-auto mt-9 flex max-w-xl items-center gap-2 rounded-full border border-white/20 bg-white/8 p-1.5 backdrop-blur-xl focus-within:border-white/50"
              >
                <div className="pl-4 pr-1 text-white/60">
                  <LinkIcon className="h-5 w-5" />
                </div>
                <input
                  type="url"
                  inputMode="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Paste your product URL…"
                  className="min-w-0 flex-1 bg-transparent py-3 text-[15px] text-white placeholder:text-white/50 outline-none"
                />
                <Button
                  type="submit"
                  className="btn-shine h-11 shrink-0 rounded-full bg-white px-5 text-sm font-semibold text-foreground hover:bg-white/90"
                >
                  Start free <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </form>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-semibold text-white/70">
                <span>✓ No credit card required</span>
                <span>✓ 4,500+ brands trust Catalyst</span>
                <span>✓ Cancel anytime</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
