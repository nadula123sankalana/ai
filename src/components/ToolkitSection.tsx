import { motion } from "framer-motion";
import { Play } from "lucide-react";

const tools = [
  {
    title: "Inspiration Library",
    desc: "Find what is trending and remix winners fast.",
    image: "https://picsum.photos/seed/vertical-inspiration/420/740",
  },
  {
    title: "Ad Cloner",
    desc: "Recreate winning ads for your brand in minutes.",
    image: "https://picsum.photos/seed/vertical-ad-cloner/420/740",
  },
  {
    title: "URL to Video",
    desc: "Turn product links into ready-to-launch videos.",
    image: "https://picsum.photos/seed/vertical-url-video/420/740",
  },
  {
    title: "Asset Generator",
    desc: "Images, scripts and voice in one workflow.",
    image: "https://picsum.photos/seed/vertical-assets/420/740",
  },
  {
    title: "AI Avatars",
    desc: "Create realistic avatar videos in multiple languages.",
    image: "https://picsum.photos/seed/vertical-avatars/420/740",
  },
  {
    title: "Product Ads",
    desc: "Generate product-led concepts and ad variants quickly.",
    image: "https://picsum.photos/seed/vertical-product-ads/420/740",
  },
];

const ToolkitSection = () => {
  return (
    <section
      id="toolkit"
      className="relative scroll-mt-24 bg-neutral-950 pt-24 pb-20 md:scroll-mt-32 md:pt-28 md:pb-24"
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
            Vertical video tools bar
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80 md:text-base">
            Browse quick-start creative modules in a scrollable reel.
          </p>
        </motion.div>

        <div className="relative z-0 flex gap-4 overflow-x-auto pb-2 pt-1 scrollbar-none">
          {tools.map((t, i) => (
            <motion.a
              key={t.title}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05 }}
              className="group min-w-[210px] overflow-hidden rounded-[20px] border-2 border-white/70 bg-white text-black shadow-[0_10px_30px_-14px_rgba(0,0,0,0.5)] md:min-w-[260px]"
            >
              <div className="relative aspect-[9/14] overflow-hidden">
                <img
                  src={t.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-black backdrop-blur">
                  <Play className="ml-0.5 h-4 w-4 fill-current" />
                </span>
              </div>

              <div className="p-3.5">
                <h3 className="font-heading text-[1.75rem] font-700 leading-none text-black md:text-[2rem]">{t.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-black/60">{t.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolkitSection;
