import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  { title: "Nike — Just Do It Campaign", category: "Ad Campaign", color: "from-orange-400 to-red-500" },
  { title: "Slack — Team Collaboration", category: "Explainer", color: "from-blue-400 to-indigo-500" },
  { title: "Airbnb — Live Anywhere", category: "Brand Story", color: "from-pink-400 to-rose-500" },
  { title: "Stripe — Developer Tools", category: "Product Video", color: "from-violet-400 to-purple-500" },
  { title: "Notion — Workspace Demo", category: "Product Video", color: "from-amber-400 to-orange-500" },
  { title: "Figma — Design Systems", category: "Explainer", color: "from-teal-400 to-cyan-500" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-800 mt-3 mb-4">
            Our <span className="text-gradient">latest work</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of projects we're proud of.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-video rounded-2xl bg-gradient-to-br ${v.color} overflow-hidden mb-4`}>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all shadow-lg">
                    <Play className="h-6 w-6 text-primary fill-primary ml-0.5" />
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">{v.category}</span>
              <h3 className="text-lg font-heading font-700 mt-1">{v.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
