import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/context/LanguageContext";

type NavGroup = {
  label: string;
  sectionId?: string;
  items?: { label: string; sectionId: string; desc?: string }[];
};

const navGroupsEn: NavGroup[] = [
  {
    label: "Platform",
    items: [
      { label: "Intelligence", sectionId: "discover", desc: "See what's converting right now" },
      { label: "Toolkit", sectionId: "toolkit", desc: "Every format you need" },
      { label: "Pipeline", sectionId: "pipeline", desc: "From brief to launch" },
      { label: "Our Work", sectionId: "portfolio", desc: "30,000+ videos produced" },
    ],
  },
  {
    label: "Solutions",
    items: [
      { label: "Services", sectionId: "services", desc: "Product, explainer, social & ads" },
      { label: "Industries", sectionId: "industries", desc: "Built for every vertical" },
      { label: "Case Studies", sectionId: "cases", desc: "Real results from real teams" },
    ],
  },
  { label: "Pricing", sectionId: "cta" },
  { label: "Resources", sectionId: "blog" },
];

const Navbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setOpenGroup(null);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 border-b border-transparent backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-white/10 bg-black/45 shadow-[0_10px_35px_-18px_rgba(0,0,0,0.75)]"
          : "bg-transparent"
      }`}
    >
      <div className="container relative flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center" aria-label={t("Catalyst AI home")}>
          <img
            src="/c.png"
            alt={t("Catalyst AI")}
            className="h-10 w-auto object-contain md:h-16"
            loading="eager"
            decoding="async"
          />
        </Link>

        <nav className="hidden rounded-2xl border border-white/20 bg-white/10 p-1.5 md:absolute md:left-1/2 md:flex md:-translate-x-1/2 md:items-center md:gap-1">
          {navGroupsEn.map((group) => {
            const hasItems = !!group.items;
            const isOpen = openGroup === group.label;
            return (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => hasItems && setOpenGroup(group.label)}
                onMouseLeave={() => hasItems && setOpenGroup(null)}
              >
                <button
                  onClick={() => {
                    if (hasItems) {
                      setOpenGroup(isOpen ? null : group.label);
                      return;
                    }

                    if (group.label === "Pricing") {
                      navigate("/pricing");
                      return;
                    }

                    if (group.sectionId) {
                      scrollTo(group.sectionId);
                    }
                  }}
                  className="flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/15 hover:text-white"
                >
                  {t(group.label)}
                  {hasItems && <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />}
                </button>
                <AnimatePresence>
                  {hasItems && isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 top-full z-50 w-[320px] -translate-x-1/2 pt-2"
                    >
                      <div className="overflow-hidden rounded-2xl border border-white/20 bg-black/95 p-2 shadow-[0_24px_40px_-22px_rgba(0,0,0,0.7)] backdrop-blur-xl">
                        {group.items!.map((item) => (
                          <button
                            key={item.label}
                            onClick={() => scrollTo(item.sectionId)}
                            className="flex w-full flex-col gap-0.5 rounded-xl px-3.5 py-2.5 text-left transition-colors hover:bg-white/10"
                          >
                            <span className="text-sm font-semibold text-white">{t(item.label)}</span>
                            {item.desc && <span className="text-xs text-white/60">{t(item.desc)}</span>}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={() => scrollTo("cta")}
            className="rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white/80 transition-colors hover:text-white"
          >
            {t("Book Demo")}
          </button>
          <button
            onClick={() => scrollTo("cta")}
            className="group flex h-12 overflow-hidden rounded-xl border border-cyan-300/35 bg-black text-white shadow-[0_10px_28px_-10px_rgba(42,77,255,0.6)]"
          >
            <span className="flex w-12 items-center justify-center bg-gradient-to-br from-[#14c6b7] via-[#14a6ff] to-[#5b3df5] transition-all duration-300 group-hover:brightness-110">
              <ChevronRight className="h-5 w-5" />
            </span>
            <span className="bg-gradient-to-r from-[#0f1118] via-[#171a28] to-[#1d1230] px-4 text-xs font-bold uppercase tracking-wider leading-[3rem]">
              {t("Create")}
            </span>
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t("Close menu") : t("Open menu")}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-white/10 bg-black/95 backdrop-blur-2xl md:hidden"
          >
            <div className="container flex flex-col gap-1 py-4">
              {navGroupsEn.map((group) => (
                <div key={group.label} className="py-1">
                  {group.items ? (
                    <>
                      <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-white/55">
                        {t(group.label)}
                      </div>
                      {group.items.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => scrollTo(item.sectionId)}
                          className="w-full rounded-lg px-2 py-2 text-left text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
                        >
                          {t(item.label)}
                        </button>
                      ))}
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        if (group.label === "Pricing") {
                          navigate("/pricing");
                          setMobileOpen(false);
                          return;
                        }

                        if (group.sectionId) {
                          scrollTo(group.sectionId);
                        }
                      }}
                      className="w-full rounded-lg px-2 py-2 text-left text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
                    >
                      {t(group.label)}
                    </button>
                  )}
                </div>
              ))}
              <Button
                onClick={() => scrollTo("cta")}
                className="mt-3 rounded-xl border border-cyan-300/35 bg-gradient-to-r from-[#14c6b7] via-[#14a6ff] to-[#5b3df5] font-semibold text-white shadow-[0_10px_28px_-10px_rgba(42,77,255,0.6)] hover:brightness-110"
              >
                {t("Create")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
