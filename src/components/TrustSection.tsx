import { motion } from "framer-motion";

const brands = [
  "Amazon", "Toyota", "Walmart", "Airbnb", "Dyson", "Nestlé",
  "Google", "Coca-Cola", "Audi", "Tesla", "Uber", "Porsche",
  "Samsung", "Microsoft", "Spotify", "Adobe",
];

const TrustSection = () => {
  return (
    <section className="relative border-y border-border bg-surface py-14">
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-[11px] font-bold uppercase tracking-[0.28em] text-muted-foreground"
        >
          Supporting 4,500+ brands and agencies
        </motion.p>
        <div className="overflow-hidden mask-fade-x">
          <div className="flex animate-marquee gap-14 w-max items-center">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="text-xl md:text-2xl font-heading font-800 tracking-tight text-foreground/25 whitespace-nowrap select-none transition-colors hover:text-foreground/70"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
