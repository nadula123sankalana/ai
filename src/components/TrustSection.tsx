import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

type AiPartner = {
  /** Key passed to `t()` for accessible name + tooltips */
  labelKey: string;
  /** Company site — used with Clearbit + favicon fallbacks (no bundled assets). */
  domain: string;
};

/**
 * Popular AI / generative-video tooling (2026). Logos load from Clearbit with favicon fallback.
 * Swap `domain` if a mark stops resolving.
 */
const aiVideoPartners: AiPartner[] = [
  { labelKey: "Runway", domain: "runwayml.com" },
  { labelKey: "Pika", domain: "pika.art" },
  { labelKey: "Kling", domain: "klingai.com" },
  { labelKey: "Luma", domain: "lumalabs.ai" },
  { labelKey: "Google Veo", domain: "google.com" },
  { labelKey: "Sora", domain: "openai.com" },
  { labelKey: "HeyGen", domain: "heygen.com" },
  { labelKey: "Synthesia", domain: "synthesia.io" },
  { labelKey: "Adobe Firefly", domain: "adobe.com" },
  { labelKey: "Descript", domain: "descript.com" },
  { labelKey: "Hailuo", domain: "hailuoai.video" },
  { labelKey: "Kaiber", domain: "kaiber.ai" },
];

function PartnerLogo({
  domain,
  label,
  labelVisible,
}: {
  domain: string;
  label: string;
  labelVisible?: boolean;
}) {
  const stageRef = useRef(0);
  const [src, setSrc] = useState(() => `https://logo.clearbit.com/${domain}`);

  const onError = useCallback(() => {
    if (stageRef.current === 0) {
      stageRef.current = 1;
      setSrc(`https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`);
      return;
    }
    if (stageRef.current === 1) {
      stageRef.current = 2;
      setSrc(`https://icons.duckduckgo.com/ip3/${domain}.ico`);
    }
  }, [domain]);

  return (
    <img
      src={src}
      alt={labelVisible ? "" : label}
      title={label}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      aria-hidden={labelVisible ? true : undefined}
      onError={onError}
      className="h-9 w-auto max-h-10 max-w-[7rem] object-contain opacity-90 transition-opacity duration-200 group-hover:opacity-100 md:h-12 md:max-h-12 md:max-w-[8.5rem]"
    />
  );
}

const TrustSection = () => {
  const { t } = useTranslation();
  const row = [...aiVideoPartners, ...aiVideoPartners];

  return (
    <section
      className="relative border-y border-border bg-surface py-14"
      data-switcher-surface="light"
    >
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-2 text-center text-[11px] font-bold uppercase tracking-[0.28em] text-muted-foreground"
        >
          {t("Our AI partners")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mx-auto mb-8 max-w-2xl text-center text-sm text-muted-foreground md:text-[0.95rem]"
        >
          {t(
            "We combine leading AI video platforms with creative direction — for ads, social content, explainers, and brand films.",
          )}
        </motion.p>
        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-5 md:gap-8">
            {row.map((partner, i) => {
              const label = t(partner.labelKey);
              return (
                <div
                  key={`${partner.domain}-${i}`}
                  className="group flex min-w-[9.75rem] max-w-[13rem] shrink-0 items-center gap-2.5 px-1 md:min-w-[11.25rem] md:max-w-[14.5rem]"
                >
                  <PartnerLogo domain={partner.domain} label={label} labelVisible />
                  <span className="font-heading text-base font-700 leading-tight tracking-tight text-foreground/75 transition-colors group-hover:text-foreground md:text-lg">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
