import { Globe } from "lucide-react";

const footerLinks = {
  Features: [
    "URL to Video",
    "AI Avatars",
    "Asset Generator",
    "Product Ads",
    "Batch Mode",
    "Ad Cloner",
    "API",
  ],
  Solutions: [
    "E-commerce",
    "DTC Brands",
    "Agencies",
    "Real Estate",
    "SaaS & Apps",
    "UGC",
    "Performance",
  ],
  Channels: [
    "Meta",
    "TikTok",
    "YouTube",
    "Instagram",
    "Snapchat",
    "OTT & CTV",
    "Amazon",
  ],
  Company: [
    "About us",
    "Pricing",
    "Case studies",
    "Blog",
    "Careers",
    "Contact",
    "Affiliate",
  ],
};

const socials = [
  { label: "LinkedIn", href: "#", icon: Globe },
  { label: "Instagram", href: "#", icon: Globe },
  { label: "YouTube", href: "#", icon: Globe },
  { label: "Twitter", href: "#", icon: Globe },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-neutral-950 pt-20 pb-10 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[360px] w-[900px] -translate-x-1/2 rounded-full bg-hero-gradient opacity-[0.1] blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-15" />

      <div className="container relative">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6 md:gap-8">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-hero-gradient shadow-[0_10px_30px_-8px_hsl(var(--glow-primary)/0.6)]">
                <span className="font-heading text-xl font-900 text-white">C</span>
              </div>
              <span className="font-heading text-2xl font-800 tracking-tight text-white">
                Catalyst<span className="text-gradient">AI</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              World-class video production, powered by AI and built for the teams
              making the next decade of great marketing.
            </p>

            <div className="mt-6 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
              <div className="text-[11px] font-bold uppercase tracking-wider text-white/60">Get creative tips</div>
              <p className="mt-1 text-sm text-white/80">Weekly playbook. No spam. Unsubscribe anytime.</p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex gap-2">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs text-white placeholder:text-white/45 outline-none focus:border-primary/60"
                />
                <button className="rounded-full bg-hero-gradient px-4 py-2 text-xs font-semibold text-white hover:opacity-95">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} Catalyst AI. All rights reserved. · Made for marketers who ship.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/55">
            <a href="#" className="transition-colors hover:text-white">Terms of service</a>
            <a href="#" className="transition-colors hover:text-white">Privacy policy</a>
            <a href="#" className="transition-colors hover:text-white">Moderation policy</a>
            <a href="#" className="transition-colors hover:text-white">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
