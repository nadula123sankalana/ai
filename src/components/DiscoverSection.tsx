import { motion } from "framer-motion";
import { ChevronRight, Monitor, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const bullets = [
  "Browse winning ad templates by industry & platform",
  "Analyze competitor's actual creative strategy",
  "Remix proven concepts in seconds",
];

type AdCardData = {
  brand: string;
  image: string;
  isNew?: boolean;
  className: string;
};

const adCards: AdCardData[] = [
  {
    brand: "Gymshark",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=320&h=420&fit=crop&q=80",
    isNew: true,
    className: "left-[2%] top-[4%] z-[3] -rotate-[7deg] sm:left-[4%]",
  },
  {
    brand: "NIVEA",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=320&h=420&fit=crop&q=80",
    className:
      "right-[4%] top-[8%] z-[4] rotate-[5deg] sm:right-[6%]",
  },
  {
    brand: "Salt & Stone",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&h=420&fit=crop&q=80",
    isNew: true,
    className:
      "left-[8%] bottom-[6%] z-[5] rotate-[3deg] sm:bottom-[8%]",
  },
  {
    brand: "Alo Yoga",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=320&h=420&fit=crop&q=80",
    className:
      "left-1/2 top-[34%] z-[6] w-[155px] -translate-x-[45%] -rotate-[2deg] sm:w-[168px]",
  },
];

function AdPreviewCard({ brand, image, isNew, className }: AdCardData) {
  return (
    <div
      className={cn(
        "absolute w-[138px] overflow-hidden rounded-[10px] border border-white bg-white shadow-[0_12px_40px_-8px_rgba(15,23,42,0.25)] sm:w-[152px]",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-1 border-b border-neutral-100 bg-neutral-50/90 px-2 py-1.5">
        <div className="flex min-w-0 items-center gap-1.5">
          <span
            className="h-5 w-5 shrink-0 rounded-md bg-gradient-to-br from-neutral-200 to-neutral-300"
            aria-hidden
          />
          <span className="truncate font-heading text-[10px] font-bold text-neutral-900">{brand}</span>
        </div>
        {isNew ? (
          <span className="shrink-0 rounded bg-emerald-500/15 px-1 py-0.5 font-heading text-[8px] font-bold uppercase text-emerald-700">
            NEW
          </span>
        ) : null}
      </div>
      <div className="relative aspect-[9/13] bg-neutral-200">
        <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/15">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-md">
            <Play className="ml-0.5 h-4 w-4 fill-neutral-900 text-neutral-900" />
          </span>
        </div>
      </div>
      <div className="space-y-1.5 bg-white p-2">
        <button
          type="button"
          className="w-full rounded-md border border-primary py-1.5 font-heading text-[9px] font-semibold text-primary transition hover:bg-primary/10"
        >
          View Insights
        </button>
        <button
          type="button"
          className="w-full rounded-md bg-primary py-1.5 font-heading text-[9px] font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          Clone this video ad
        </button>
      </div>
    </div>
  );
}

const DiscoverSection = () => {
  return (
    <section className="bg-white py-20 text-neutral-950 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none"
          >
            <div className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-gradient-to-br from-amber-50 via-orange-50/90 to-neutral-100 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.08)] sm:min-h-[480px] md:min-h-[520px]">
              {adCards.map((card) => (
                <AdPreviewCard key={card.brand} {...card} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="lg:pl-2"
          >
            <div className="mb-6 flex items-center gap-3">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground"
                aria-hidden
              >
                <Monitor className="h-4 w-4" strokeWidth={2.25} />
              </div>
              <span className="font-heading text-sm font-extrabold tracking-wide text-primary">
                DISCOVER
              </span>
            </div>

            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-[2.35rem] md:leading-[1.15]">
              See exactly what&apos;s converting in your industry right now
            </h2>

            <ul className="mt-8 space-y-3.5 font-body text-[15px] font-medium leading-relaxed text-neutral-900 sm:text-base">
              {bullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="#"
                className="inline-flex overflow-hidden rounded-xl shadow-md transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <span className="flex items-center justify-center bg-primary px-3.5 text-primary-foreground sm:px-4">
                  <span className="flex" aria-hidden>
                    <ChevronRight className="-mr-2.5 h-5 w-5" strokeWidth={2.5} />
                    <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                </span>
                <span className="bg-black px-6 py-3.5 font-heading text-xs font-bold tracking-[0.12em] text-white sm:px-8 sm:text-sm">
                  BROWSE ADS
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;

