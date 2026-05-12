import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

type ToolCard = {
  title: string;
  desc: string;
  image: string;
  embedSrc?: string;
};

const tools: ToolCard[] = [
  {
    title: "Product Videos",
    desc: "Showcase your product clearly with strong visuals and simple messaging.",
    image: "https://picsum.photos/seed/vertical-product-videos/420/740",
    embedSrc:
      "https://player.vimeo.com/video/1189640523?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1",
  },
  {
    title: "Social Media Ads",
    desc: "Short, attention-grabbing videos made for campaigns and conversions.",
    image: "https://picsum.photos/seed/vertical-social-ads/420/740",
    embedSrc:
      "https://player.vimeo.com/video/1189640522?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1",
  },
  {
    title: "UGC-Style Videos",
    desc: "Natural-looking videos that feel relatable, direct, and made for social platforms.",
    image: "https://picsum.photos/seed/vertical-ugc-style/420/740",
    embedSrc:
      "https://player.vimeo.com/video/1189279630?badge=0&autopause=0&muted=1&autoplay=1&loop=1&background=1&controls=0&playsinline=1&dnt=1",
  },
  {
    title: "Explainer Videos",
    desc: "Simple videos that explain your product, service, offer, or process.",
    image: "https://picsum.photos/seed/vertical-explainer/420/740",
    embedSrc:
      "https://player.vimeo.com/video/1189644405?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1",
  },
  {
    title: "Brand Videos",
    desc: "Polished AI-generated content to present your brand with a stronger visual identity.",
    image: "https://picsum.photos/seed/vertical-brand-videos/420/740",
    embedSrc:
      "https://player.vimeo.com/video/1189640524?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1",
  },
  {
    title: "Launch Videos",
    desc: "Create hype around a new product, service, offer, or campaign.",
    image: "https://picsum.photos/seed/vertical-launch-videos/420/740",
  },
];

const ToolkitSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="toolkit"
      className="relative scroll-mt-24 bg-neutral-950 pt-24 pb-20 md:scroll-mt-32 md:pt-28 md:pb-24"
      data-switcher-surface="dark"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/45" />
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-soft-light" />
      </div>
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto mb-10 max-w-3xl text-center md:mb-14"
        >
          <h2 className="font-heading text-3xl font-800 leading-tight tracking-tight text-white md:text-4xl">
            {t("Video styles we can create")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80 md:text-base">
            {t(
              "Choose the type of video your business needs, or tell us your goal and we will recommend the best format.",
            )}
          </p>
        </motion.div>

        <div className="scrollbar-none relative z-0 flex gap-4 overflow-x-auto pb-2 pt-1">
          {tools.map((card, i) => {
            const hasEmbeddedVideo = Boolean(card.embedSrc);
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05 }}
                className="group min-w-[210px] overflow-hidden rounded-[20px] border-2 border-white/70 bg-white text-black shadow-[0_10px_30px_-14px_rgba(0,0,0,0.5)] md:min-w-[260px]"
              >
                <div className="relative aspect-[9/14] overflow-hidden">
                  {hasEmbeddedVideo ? (
                    <iframe
                      title={`${card.title} preview`}
                      src={card.embedSrc}
                      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-0"
                      style={{ width: "100%", height: "calc(100% * 8 / 7)", maxHeight: "none" }}
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  ) : (
                    <img
                      src={card.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-black backdrop-blur">
                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                  </span>
                </div>

                <div className="p-3.5">
                  <h3 className="font-heading text-[1.75rem] font-700 leading-none text-black md:text-[2rem]">{t(card.title)}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-black/60">{t(card.desc)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolkitSection;
