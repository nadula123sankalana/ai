import * as React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Check, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/context/LanguageContext";

type Plan = {
  name: string;
  subtitle: string;
  price: string;
  billing: string;
  cta: string;
  features: string[];
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    subtitle: "Best for exploring video ad creation to drive revenue for clients.",
    price: "$399/month",
    billing: "7 day free trial • Cancel anytime",
    cta: "Sign Up",
    features: [
      "2 final video downloads per month",
      "1 user seat",
      "Unlimited brand profiles",
      "Instant brand customization (from website)",
      "AI scriptwriting",
      "Premium stock content",
      "Unlimited draft video generations",
      "Professional AI voiceover",
      "Intuitive editing suite",
      "TV and digital quality downloads",
      "Chat support",
    ],
  },
  {
    name: "Team",
    subtitle: "Best for accelerating client growth with consistent video ad creation.",
    price: "Starting at $1,125/month",
    billing: "Annual plan, pricing based on volume",
    cta: "Contact Us",
    highlighted: true,
    features: [
      "Custom final video downloads per month",
      "Multiple user seats",
      "Everything in Starter",
      "Team collaboration tools",
      "Team onboarding and training",
      "Preview and sharing links",
      "Language translations",
      "Video variations",
      "Template library",
      "Access to customer support",
    ],
  },
  {
    name: "Enterprise",
    subtitle: "Best for tailored solutions and integrations at scale.",
    price: "Custom pricing",
    billing: "Annual plan",
    cta: "Contact Sales",
    features: [
      "Custom final video downloads per month",
      "Unlimited user seats",
      "Everything in Team",
      "CRM automations",
      "White labeling capabilities",
      "Advanced workflows and integrations",
      "Dedicated customer success manager",
      "1:1 product adoption support",
      "Usage reporting",
      "Early feature access and beta testing",
    ],
  },
];

const faqs = [
  {
    q: "How many videos can I create?",
    a: "All plans include unlimited draft video generations. Your plan decides how many finalized video downloads you get each month.",
  },
  {
    q: "Can I upgrade my plan as my needs grow?",
    a: "Yes. Teams often start on Starter and move to Team as volume and collaboration needs increase.",
  },
  {
    q: "Do I need to commit annually?",
    a: "Starter supports month-to-month billing. Team and Enterprise are custom annual plans.",
  },
  {
    q: "What is a brand profile?",
    a: "A brand profile is created from a website URL. The system pulls brand assets automatically and you can create unlimited profiles.",
  },
];

const Pricing = () => {
  const { t } = useTranslation();
  const [openFaqIndex, setOpenFaqIndex] = React.useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((current) => (current === index ? -1 : index));
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 pt-8 text-white md:pt-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-[440px] w-[440px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -right-24 top-20 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[130px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-20" />
      </div>

      <div className="container relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/75 transition-colors hover:border-white/30 hover:text-white"
        >
          <ChevronLeft className="h-4 w-4" />
          {t("Back to home")}
        </Link>
      </div>

      <section className="container relative z-10 pb-16 pt-8 md:pb-20 md:pt-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-primary">{t("Pricing")}</p>
          <h1 className="mt-3 font-heading text-4xl font-800 tracking-tight sm:text-5xl md:text-6xl">
            {t("Plans built for")}
            <span className="block text-gradient">{t("high-performing creative teams")}</span>
          </h1>
          <p className="mt-4 text-base text-white/70 md:text-lg">
            {t("Create your video ads, air your video ads, and see wins at hyperspeed.")}
          </p>
          <p className="mt-2 text-sm text-white/55">
            {t("Monthly plan view based on provided source pricing content.")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative overflow-hidden rounded-2xl border p-6 backdrop-blur ${
                plan.highlighted
                  ? "border-cyan-300/45 bg-gradient-to-b from-[#141a2e]/95 via-[#111422]/95 to-[#161127]/95 shadow-[0_20px_50px_-22px_rgba(42,77,255,0.75)]"
                  : "border-white/15 bg-white/[0.03]"
              }`}
            >
              {plan.highlighted && (
                <div className="mb-4 inline-flex rounded-full border border-primary/40 bg-primary/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                  {t("Most Popular")}
                </div>
              )}
              <h2 className="font-heading text-2xl font-800">{t(plan.name)}</h2>
              <p className="mt-2 min-h-12 text-sm text-white/70">{t(plan.subtitle)}</p>
              <div className={`mt-5 text-3xl font-800 ${plan.highlighted ? "text-gradient" : ""}`}>{t(plan.price)}</div>
              <div className="mt-1 text-xs text-white/55">{t(plan.billing)}</div>

              <Button
                className={`mt-6 w-full rounded-xl ${
                  plan.highlighted
                    ? "bg-hero-gradient text-white shadow-[0_14px_30px_-14px_rgba(42,77,255,0.95)] hover:brightness-110"
                    : "border border-white/20 bg-white/10 text-white hover:bg-white/15"
                }`}
              >
                {t(plan.cta)}
              </Button>

              <ul className="mt-6 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-white/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{t(feature)}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container relative z-10 pb-20 md:pb-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-4xl font-800 tracking-tight sm:text-5xl">{t("FAQ")}</h2>

          <div className="mt-10 border-t border-white/20">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <article key={faq.q} className="border-b border-white/20 py-6 md:py-7">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-start justify-between gap-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-semibold text-white md:text-xl">{t(faq.q)}</span>
                    <span className="mt-1 shrink-0 text-white/85">
                      {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                    </span>
                  </button>
                  {isOpen && <p className="mt-4 max-w-4xl text-base leading-relaxed text-white/70">{t(faq.a)}</p>}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
