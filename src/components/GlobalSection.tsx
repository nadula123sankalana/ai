import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const cities = [
  { name: "New York", top: "35%", left: "25%" },
  { name: "London", top: "28%", left: "47%" },
  { name: "Dubai", top: "42%", left: "60%" },
  { name: "Tokyo", top: "35%", left: "82%" },
  { name: "Sydney", top: "72%", left: "85%" },
  { name: "São Paulo", top: "62%", left: "32%" },
  { name: "Berlin", top: "26%", left: "52%" },
  { name: "LA", top: "38%", left: "15%" },
];

const GlobalSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Global Coverage</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-800 mt-3 mb-4">
            We work <span className="text-gradient">anywhere</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Production crews in 80+ cities across 6 continents.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto aspect-[2/1] rounded-3xl bg-secondary/50 border border-border overflow-hidden"
        >
          {/* Simple world map representation with dots */}
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
              {/* Simplified continent shapes */}
              <ellipse cx="25" cy="20" rx="12" ry="8" fill="hsl(var(--muted-foreground))" opacity="0.3" />
              <ellipse cx="50" cy="18" rx="10" ry="10" fill="hsl(var(--muted-foreground))" opacity="0.3" />
              <ellipse cx="65" cy="22" rx="8" ry="7" fill="hsl(var(--muted-foreground))" opacity="0.3" />
              <ellipse cx="80" cy="20" rx="7" ry="8" fill="hsl(var(--muted-foreground))" opacity="0.3" />
              <ellipse cx="30" cy="35" rx="6" ry="8" fill="hsl(var(--muted-foreground))" opacity="0.3" />
              <ellipse cx="85" cy="38" rx="5" ry="5" fill="hsl(var(--muted-foreground))" opacity="0.3" />
            </svg>
          </div>

          {cities.map((city, i) => (
            <motion.div
              key={city.name}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="absolute group"
              style={{ top: city.top, left: city.left }}
            >
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/40 animate-pulse" />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-foreground text-background text-xs font-semibold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {city.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalSection;
