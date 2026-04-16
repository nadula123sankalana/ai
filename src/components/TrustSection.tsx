import { motion } from "framer-motion";

const brands = [
  "Amazon", "Toyota", "Walmart", "Airbnb", "Dyson", "Nestlé",
  "Google", "Coca-Cola", "Audi", "Tesla", "Uber", "Porsche",
];

const TrustSection = () => {
  return (
    <section className="py-16 border-y border-border">
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-10"
        >
          Trusted by over 4,500 brands
        </motion.p>
        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-16 w-max items-center">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="text-lg md:text-xl font-heading font-700 text-muted-foreground/30 whitespace-nowrap select-none"
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
