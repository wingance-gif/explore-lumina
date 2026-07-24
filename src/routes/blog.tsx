import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BLOG, IMAGES } from "@/content/site";
import { fadeUp } from "@/lib/motion";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Tanzania Travel Stories & Guides | Tanzania Exploration" },
      { name: "description", content: "Field notes, guides and stories from the Serengeti, Kilimanjaro and Zanzibar — written by our team in Arusha." },
      { property: "og:title", content: "Tanzania Exploration Journal" },
      { property: "og:description", content: "Stories and guides from the field." },
      { property: "og:image", content: IMAGES.heroSerengeti },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <section className="pt-40 pb-16 container-x mx-auto max-w-[1500px]">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Journal</p>
        <h1 className="mt-5 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance max-w-4xl">
          Field notes from Tanzania.
        </h1>
      </section>

      <section className="container-x mx-auto max-w-[1500px] pb-32">
        <ScrollReveal className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {BLOG.map((p) => (
            <motion.article key={p.slug} variants={fadeUp}>
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-foreground/55">
                  {new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · {p.author}
                </p>
                <h2 className="mt-3 font-display text-2xl leading-snug group-hover:text-primary transition-colors text-balance">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
              </Link>
            </motion.article>
          ))}
        </ScrollReveal>
      </section>
    </>
  );
}
