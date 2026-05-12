import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

const brands = [
  "Amazon",
  "Toyota",
  "Walmart",
  "Airbnb",
  "Dyson",
  "Nestlé",
  "Google",
  "Coca-Cola",
  "Audi",
  "Tesla",
  "Uber",
  "Porsche",
  "Samsung",
  "Microsoft",
  "Spotify",
  "Adobe",
];

const TrustSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative border-y border-border bg-surface py-14">
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-[11px] font-bold uppercase tracking-[0.28em] text-muted-foreground"
        >
          {t("Supporting 4,500+ brands and agencies")}
        </motion.p>
        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-14">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="select-none whitespace-nowrap font-heading text-xl font-800 tracking-tight text-foreground/25 transition-colors hover:text-foreground/70 md:text-2xl"
              >
                {t(brand)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
