import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = ["Services", "Our Work", "Process", "Testimonials"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const sectionMap: Record<string, string> = {
      "Services": "services",
      "Our Work": "portfolio",
      "Process": "process",
      "Testimonials": "testimonials",
    };
    document.getElementById(sectionMap[id] || id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 border-b border-white/10 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.35)] backdrop-blur-xl backdrop-saturate-150 transition-[background-color,box-shadow] duration-300 ${
        scrolled ? "bg-black/45" : "bg-black/25"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center" aria-label="Catalyst AI home">
          <img
            src="/c.png"
            alt="Catalyst AI"
            className="h-8 w-auto md:h-10"
            loading="eager"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              {link}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("Contact")}
            size="sm"
            className="rounded-full px-6 border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Get Started
          </Button>
        </nav>

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
            className="border-b border-white/10 bg-black/40 backdrop-blur-xl md:hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="py-2 text-left text-sm font-medium text-white/75 transition-colors hover:text-white"
                >
                  {link}
                </button>
              ))}
              <Button
                onClick={() => scrollTo("Contact")}
                className="rounded-full mt-2 border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
