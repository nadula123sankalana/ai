import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  {
    title: "Meaningful Beauty",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=800&fit=crop&q=85",
  },
  {
    title: "Stella Rosa",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&h=800&fit=crop&q=85",
  },
  {
    title: "Walmart | Maui",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop&q=85",
  },
  {
    title: "Rolex",
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=1200&h=800&fit=crop&q=85",
  },
  {
    title: "Amazon I AM",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop&q=85",
  },
  {
    title: "Samsonite CLite",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&h=800&fit=crop&q=85",
  },
  {
    title: "Din Tai Fung",
    image:
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=1200&h=800&fit=crop&q=85",
  },
  {
    title: "Potent Hockey",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=1200&h=800&fit=crop&q=85",
  },
  {
    title: "AAA Membership",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=800&fit=crop&q=85",
  },
  {
    title: "Edmunds",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&h=800&fit=crop&q=85",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-800 leading-tight">
            We've produced over 30,000 videos.
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scrolling carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 overflow-hidden"
      >
        <div className="flex animate-marquee gap-5 w-max px-4">
          {[...videos, ...videos].map((v, i) => (
            <div
              key={i}
              className="group relative h-[200px] w-[300px] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl shadow-[0_24px_55px_-28px_rgba(0,0,0,0.65)] ring-1 ring-white/10 md:h-[250px] md:w-[380px]"
            >
              <img
                src={v.image}
                alt=""
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/45" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <Play className="ml-0.5 h-6 w-6 fill-white text-white" />
                </div>
                <span className="text-sm font-medium text-white">Watch Now</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-heading text-base font-700 text-white drop-shadow-md">
                  {v.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Second row - smaller thumbnails */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-5 overflow-hidden"
      >
        <div className="flex animate-marquee-reverse gap-5 w-max px-4">
          {[...videos.slice(5), ...videos.slice(0, 5), ...videos.slice(5), ...videos.slice(0, 5)].map((v, i) => (
            <div
              key={i}
              className="group relative h-[160px] w-[240px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl shadow-[0_18px_45px_-22px_rgba(0,0,0,0.6)] ring-1 ring-white/10 md:h-[190px] md:w-[300px]"
            >
              <img
                src={v.image}
                alt=""
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/30 to-black/10" />
              <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/48" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-heading text-sm font-600 text-white drop-shadow-md">{v.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PortfolioSection;

