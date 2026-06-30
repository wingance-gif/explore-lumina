import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { ACCOMMODATIONS, IMAGES } from "@/content/site";
import { fadeUp } from "@/lib/motion";

export const Route = createFileRoute("/accommodation")({
  head: () => ({
    meta: [
      { title: "Luxury Camps & Lodges in Tanzania | Sahara Wild" },
      { name: "description", content: "Tented suites, geodesic domes, riverside camps and beach bandas — the most cinematic places to sleep in Tanzania." },
      { property: "og:title", content: "Luxury Stays — Tanzania & Zanzibar" },
      { property: "og:description", content: "Our handpicked camps, lodges and beach hideaways." },
      { property: "og:image", content: IMAGES.heroLuxuryCamp },
      { property: "og:url", content: "/accommodation" },
    ],
    links: [{ rel: "canonical", href: "/accommodation" }],
  }),
  component: AccommodationPage,
});

function AccommodationPage() {
  return (
    <>
      <section className="pt-40 pb-16 container-x mx-auto max-w-[1500px]">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Stays</p>
        <h1 className="mt-5 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance max-w-4xl">
          Sleep close to the wild.
        </h1>
        <p className="mt-8 max-w-2xl text-base md:text-lg text-foreground/75">
          Hand-picked camps and lodges — from glass-walled domes on the crater rim to thatched bandas above a coral reef.
        </p>
      </section>

      <section className="container-x mx-auto max-w-[1500px] pb-32">
        <ScrollReveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ACCOMMODATIONS.map((a) => (
            <motion.article key={a.name} variants={fadeUp} className="group overflow-hidden rounded-3xl bg-surface shadow-elevated">
              <div className="relative aspect-[5/6] overflow-hidden">
                <img src={a.image} alt={a.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <span className="absolute top-5 left-5 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-primary">{a.style}</span>
                <div className="absolute inset-x-6 bottom-6">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/65">{a.area}</p>
                  <h3 className="mt-2 font-display text-2xl leading-tight">{a.name}</h3>
                  <p className="mt-3 text-sm text-foreground/80">{a.blurb}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </ScrollReveal>
      </section>
    </>
  );
}
