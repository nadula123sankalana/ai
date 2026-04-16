const footerLinks = {
  Services: ["Product Videos", "Explainer Videos", "Ad Campaigns", "Testimonials", "Animation"],
  Company: ["About Us", "Careers", "Blog", "Press", "Contact"],
  Resources: ["Case Studies", "Pricing", "FAQ", "Help Center", "Partners"],
};

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="text-xl font-heading font-800 tracking-tight">
              <span className="text-primary">lumina</span>
              <span className="text-foreground">studios</span>
            </a>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              World-class video production for brands that demand excellence.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-4 text-foreground">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lumina Studios. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "Instagram", "YouTube"].map((social) => (
              <a key={social} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
