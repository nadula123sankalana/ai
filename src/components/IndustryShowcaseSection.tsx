import { useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Industry = {
  name: string;
  image: string;
  overlayClass: string;
};

const industries: Industry[] = [
  {
    name: "Retail & E-commerce",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=800&fit=crop&q=80",
    overlayClass: "from-emerald-950/85 via-emerald-900/45 to-emerald-800/30",
  },
  {
    name: "Professional Services",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=800&fit=crop&q=80",
    overlayClass: "from-amber-950/80 via-stone-900/50 to-stone-800/35",
  },
  {
    name: "Software & Tech",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=800&fit=crop&q=80",
    overlayClass: "from-indigo-950/90 via-blue-950/55 to-violet-900/40",
  },
  {
    name: "Medical & Biotech",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=800&fit=crop&q=80",
    overlayClass: "from-neutral-950/88 via-slate-900/50 to-slate-800/35",
  },
  {
    name: "Education",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=800&fit=crop&q=80",
    overlayClass: "from-rose-950/75 via-rose-900/40 to-orange-900/30",
  },
  {
    name: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop&q=80",
    overlayClass: "from-teal-950/80 via-cyan-950/45 to-sky-900/35",
  },
];

const IndustryShowcaseSection = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCards = useCallback((direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-industry-card]");
    const width = card?.offsetWidth ?? 280;
    const gap = 16;
    el.scrollBy({
      left: direction === "left" ? -(width + gap) : width + gap,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="border-t border-neutral-200 bg-white py-20 md:py-28">
      <div className="container">
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-start sm:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45 }}
            className="max-w-xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-neutral-950 sm:text-4xl md:text-[2.15rem] md:leading-[1.2]"
          >
            We&apos;ve delivered results for companies in every industry.
          </motion.h2>
          <div className="flex shrink-0 gap-2 self-end sm:self-auto sm:pt-1">
            <button
              type="button"
              onClick={() => scrollByCards("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 transition hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
              aria-label="Scroll industries left"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCards("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 transition hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
              aria-label="Scroll industries right"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="scrollbar-none -mx-4 flex gap-4 overflow-x-auto scroll-smooth px-4 pt-1 md:mx-0 md:px-0"
        >
          {industries.map((item) => (
            <div
              key={item.name}
              data-industry-card
              className="group relative w-[min(280px,78vw)] shrink-0 snap-start overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_12px_40px_-12px_rgba(15,23,42,0.12)]"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t",
                    item.overlayClass,
                  )}
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <p className="text-center font-heading text-lg font-bold leading-snug text-white drop-shadow-sm sm:text-xl">
                    {item.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryShowcaseSection;

