import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
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
      className={`fixed left-0 right-0 top-0 z-50 border-b border-transparent backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-transparent shadow-none"
          : "bg-transparent"
      }`}
    >
      <div className="container relative flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2" aria-label="Catalyst AI home">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-hero-gradient shadow-[0_8px_20px_-6px_hsl(var(--glow-primary)/0.5)]">
            <span className="font-heading text-lg font-900 text-white">C</span>
          </div>
          <span className="font-heading text-lg font-800 tracking-tight text-white">
            Catalyst<span className="text-white/75">AI</span>
          </span>
        </a>

        <nav className="hidden rounded-2xl border border-white/20 bg-white/10 p-1.5 md:absolute md:left-1/2 md:flex md:-translate-x-1/2 md:items-center md:gap-1">
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
                  className="flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/15 hover:text-white"
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
                      <div className="overflow-hidden rounded-2xl border border-white/20 bg-[#313995]/95 p-2 shadow-[0_24px_40px_-22px_rgba(0,0,0,0.7)] backdrop-blur-xl">
                        {group.items!.map((item) => (
                          <button
                            key={item.label}
                            onClick={() => scrollTo(item.sectionId)}
                            className="flex w-full flex-col gap-0.5 rounded-xl px-3.5 py-2.5 text-left transition-colors hover:bg-white/10"
                          >
                            <span className="text-sm font-semibold text-white">{item.label}</span>
                            {item.desc && <span className="text-xs text-white/60">{item.desc}</span>}
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
            className="rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white/80 transition-colors hover:text-white"
          >
            Book Demo
          </button>
          <button
            onClick={() => scrollTo("cta")}
            className="group flex h-12 overflow-hidden rounded-xl border border-black bg-black text-white shadow-[0_8px_22px_-10px_rgba(0,0,0,0.65)]"
          >
            <span className="flex w-12 items-center justify-center bg-[#5b3df5] transition-colors group-hover:bg-[#6a4dff]">
              <ChevronRight className="h-5 w-5" />
            </span>
            <span className="px-4 text-xs font-bold uppercase tracking-wider leading-[3rem]">Create</span>
          </button>
        </div>

        <button
          type="button"
          className="text-white md:hidden"
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
            className="border-b border-white/10 bg-[#272f86]/95 backdrop-blur-2xl md:hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navGroups.map((group) => (
                <div key={group.label} className="py-1">
                  {group.items ? (
                    <>
                      <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-white/55">
                        {group.label}
                      </div>
                      {group.items.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => scrollTo(item.sectionId)}
                          className="w-full rounded-lg px-2 py-2 text-left text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
                        >
                          {item.label}
                        </button>
                      ))}
                    </>
                  ) : (
                    <button
                      onClick={() => group.sectionId && scrollTo(group.sectionId)}
                      className="w-full rounded-lg px-2 py-2 text-left text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
                    >
                      {group.label}
                    </button>
                  )}
                </div>
              ))}
              <Button
                onClick={() => scrollTo("cta")}
                className="rounded-xl mt-3 bg-black text-white font-semibold border border-white/15"
              >
                Create
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
