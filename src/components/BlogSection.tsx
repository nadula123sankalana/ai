import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    category: "Video Marketing",
    title: "How to make a product video in 2026 (no studio needed)",
    date: "Apr 20, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&h=560&fit=crop&q=85",
    author: {
      name: "Alex Rivera",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&q=80",
    },
  },
  {
    category: "Strategy",
    title: "What is Google Performance Max? A complete 2026 guide",
    date: "Apr 19, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=560&fit=crop&q=85",
    author: {
      name: "Priya Shah",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&q=80",
    },
  },
  {
    category: "Inspiration",
    title: "7 brilliant AI marketing campaigns to inspire you in 2026",
    date: "Apr 17, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=560&fit=crop&q=85",
    author: {
      name: "Sam Patel",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&q=80",
    },
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Read the latest
            </span>
            <h2 className="mt-5 font-heading text-3xl font-800 leading-tight tracking-tight text-foreground md:text-5xl">
              Ideas, insights & creative tips
              <span className="block text-gradient">from the Catalyst team.</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex w-max items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
          >
            View all posts <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08 }}
              className="card-hover group flex flex-col overflow-hidden rounded-3xl border border-border bg-white soft-shadow hover:border-primary/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt="" className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/55 px-2.5 py-0.5 font-heading text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-lg font-700 leading-snug text-foreground transition-colors group-hover:text-primary md:text-xl">
                  {p.title}
                </h3>
                <div className="mt-auto flex items-center justify-between pt-6">
                  <div className="flex items-center gap-2.5">
                    <img src={p.author.avatar} alt={p.author.name} className="h-8 w-8 rounded-full object-cover" loading="lazy" />
                    <div>
                      <div className="text-xs font-semibold text-foreground">{p.author.name}</div>
                      <div className="text-[11px] text-muted-foreground">{p.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {p.readTime}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
