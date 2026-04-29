import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const cities = [
  { name: "New York", coordinates: [-74.006, 40.7128] as [number, number] },
  { name: "London", coordinates: [-0.1276, 51.5072] as [number, number] },
  { name: "Dubai", coordinates: [55.2708, 25.2048] as [number, number] },
  { name: "Tokyo", coordinates: [139.6503, 35.6762] as [number, number] },
  { name: "Sydney", coordinates: [151.2093, -33.8688] as [number, number] },
  { name: "Sao Paulo", coordinates: [-46.6333, -23.5505] as [number, number] },
  { name: "Berlin", coordinates: [13.405, 52.52] as [number, number] },
  { name: "LA", coordinates: [-118.2437, 34.0522] as [number, number] },
  { name: "Singapore", coordinates: [103.8198, 1.3521] as [number, number] },
  { name: "Mumbai", coordinates: [72.8777, 19.076] as [number, number] },
];
const WORLD_GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const GlobalSection = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute -right-40 bottom-20 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[140px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-25" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Global coverage
          </span>
          <h2 className="mt-5 font-heading text-3xl font-800 leading-tight tracking-tight md:text-5xl lg:text-6xl">
            We shoot
            <span className="text-gradient"> anywhere </span>
            you need us.
          </h2>
          <p className="mt-4 text-base text-white/70 md:text-lg">
            Production crews in 80+ cities across 6 continents. Same creative standard. Any time zone.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto aspect-[2/1] max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-40" />

          <div className="absolute inset-0 p-1 md:p-2">
            <ComposableMap
              projection="geoEqualEarth"
              projectionConfig={{ scale: 190 }}
              className="h-full w-full"
            >
              <Geographies geography={WORLD_GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="hsl(0 0% 100% / 0.17)"
                      stroke="hsl(0 0% 100% / 0.14)"
                      strokeWidth={0.35}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none", fill: "hsl(0 0% 100% / 0.24)" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {cities.map((city, i) => (
                <Marker key={city.name} coordinates={city.coordinates}>
                  <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.06 }}
                  >
                    <circle r={8} fill="hsl(168 94% 44% / 0.22)" />
                    <circle r={3.4} fill="hsl(168 94% 44%)" />
                  </motion.g>
                </Marker>
              ))}
            </ComposableMap>
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-black/50 px-4 py-2 backdrop-blur">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/80">
              80+ cities · 6 continents · one standard
            </p>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { k: "North America", v: "28 cities" },
            { k: "Europe", v: "22 cities" },
            { k: "Asia & Pacific", v: "18 cities" },
            { k: "Rest of world", v: "14 cities" },
          ].map((c) => (
            <div key={c.k} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur">
              <div className="font-heading text-2xl font-800 text-gradient">{c.v}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">{c.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalSection;
