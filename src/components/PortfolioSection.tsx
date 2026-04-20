import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  { title: "Meaningful Beauty", gradient: "from-rose-700 to-pink-900" },
  { title: "Stella Rosa", gradient: "from-purple-700 to-violet-900" },
  { title: "Walmart | Maui", gradient: "from-blue-700 to-indigo-900" },
  { title: "Rolex", gradient: "from-amber-700 to-yellow-900" },
  { title: "Amazon I AM", gradient: "from-teal-700 to-emerald-900" },
  { title: "Samsonite CLite", gradient: "from-slate-600 to-zinc-800" },
  { title: "Din Tai Fung", gradient: "from-red-700 to-orange-900" },
  { title: "Potent Hockey", gradient: "from-amber-700 to-yellow-900" },
  { title: "AAA Membership", gradient: "from-green-700 to-emerald-900" },
  { title: "Edmunds", gradient: "from-indigo-700 to-blue-900" },
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
              className={`group relative w-[300px] md:w-[380px] h-[200px] md:h-[250px] rounded-2xl bg-gradient-to-br ${v.gradient} flex-shrink-0 overflow-hidden cursor-pointer`}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                  <Play className="h-6 w-6 text-white fill-white ml-0.5" />
                </div>
                <span className="text-white text-sm font-medium">Watch Now</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-heading font-700 text-base">{v.title}</h3>
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
              className={`group relative w-[240px] md:w-[300px] h-[160px] md:h-[190px] rounded-xl bg-gradient-to-br ${v.gradient} flex-shrink-0 overflow-hidden cursor-pointer`}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Play className="h-5 w-5 text-white fill-white ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-heading font-600 text-sm">{v.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PortfolioSection;

