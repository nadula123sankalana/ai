import { motion } from "framer-motion";

const brands = ["Spotify", "Airbnb", "Stripe", "Shopify", "Slack", "HubSpot", "Notion", "Figma"];

const TrustSection = () => {
  return (
    <section className="py-16 border-y border-border bg-secondary/30">
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-10"
        >
          Trusted by 4,000+ brands worldwide
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-14"
        >
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-lg md:text-xl font-heading font-700 text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
