import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavGroup = {
  label: string;
  sectionId?: string;
  items?: { label: string; sectionId: string; desc?: string }[];
};

const navGroups: NavGroup[] = [
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
      className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl backdrop-saturate-150 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-border bg-white/85 shadow-[0_6px_24px_-12px_rgba(15,23,42,0.12)]"
          : "border-transparent bg-white/60"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2" aria-label="Catalyst AI home">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-hero-gradient shadow-[0_8px_20px_-6px_hsl(var(--glow-primary)/0.5)]">
            <span className="font-heading text-lg font-900 text-white">C</span>
          </div>
          <span className="font-heading text-lg font-800 tracking-tight text-foreground">
            Catalyst<span className="text-gradient">AI</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navGroups.map((group) => {
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
                  onClick={() => (hasItems ? setOpenGroup(isOpen ? null : group.label) : group.sectionId && scrollTo(group.sectionId))}
                  className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-surface hover:text-foreground"
                >
                  {group.label}
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
                      <div className="overflow-hidden rounded-2xl border border-border bg-white p-2 soft-shadow">
                        {group.items!.map((item) => (
                          <button
                            key={item.label}
                            onClick={() => scrollTo(item.sectionId)}
                            className="flex w-full flex-col gap-0.5 rounded-xl px-3.5 py-2.5 text-left transition-colors hover:bg-surface"
                          >
                            <span className="text-sm font-semibold text-foreground">{item.label}</span>
                            {item.desc && <span className="text-xs text-muted-foreground">{item.desc}</span>}
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

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scrollTo("cta")}
            className="rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
          >
            Log in
          </button>
          <Button
            onClick={() => scrollTo("cta")}
            size="sm"
            className="btn-shine rounded-full bg-hero-gradient px-5 h-10 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_hsl(var(--glow-primary)/0.6)] hover:opacity-95"
          >
            Start free
          </Button>
        </div>

        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-white md:hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navGroups.map((group) => (
                <div key={group.label} className="py-1">
                  {group.items ? (
                    <>
                      <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                        {group.label}
                      </div>
                      {group.items.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => scrollTo(item.sectionId)}
                          className="w-full rounded-lg px-2 py-2 text-left text-sm font-medium text-foreground/85 transition-colors hover:bg-surface"
                        >
                          {item.label}
                        </button>
                      ))}
                    </>
                  ) : (
                    <button
                      onClick={() => group.sectionId && scrollTo(group.sectionId)}
                      className="w-full rounded-lg px-2 py-2 text-left text-sm font-semibold text-foreground/85 transition-colors hover:bg-surface"
                    >
                      {group.label}
                    </button>
                  )}
                </div>
              ))}
              <Button
                onClick={() => scrollTo("cta")}
                className="rounded-full mt-3 bg-hero-gradient text-white font-semibold"
              >
                Start free
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
