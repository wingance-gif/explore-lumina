import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/content/site";
import { fadeUp } from "@/lib/motion";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences | Tanzania Exploration" },
      { name: "description", content: "Choose your Tanzania experience — safari itineraries, Kilimanjaro treks, Zanzibar beaches, day trips and iconic destinations." },
      { property: "og:title", content: "Experiences — Tanzania Exploration" },
      { property: "og:description", content: "Safari itineraries, Kilimanjaro, Zanzibar, day trips and destinations across Tanzania." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: IMAGES.heroSerengeti },
      { name: "twitter:image", content: IMAGES.heroSerengeti },
    ],
    links: [{ rel: "canonical", href: "/experiences" }],
  }),
  component: ExperiencesHub,
});

type LinkTarget =
  | { to: "/safari-itineraries" }
  | { to: "/trekking-packages" }
  | { to: "/zanzibar-packages" }
  | { to: "/tours"; hash?: string }
  | { to: "/destinations" };

const CARDS: { title: string; blurb: string; image: string; target: LinkTarget }[] = [
  {
    title: "Safari Itineraries",
    blurb: "Northern circuit classics and southern wilderness journeys — each itinerary offered in four packages.",
    image: IMAGES.heroSerengeti,
    target: { to: "/safari-itineraries" },
  },
  {
    title: "Kilimanjaro",
    blurb: "Machame, Lemosho and specialist routes to Uhuru Peak with certified KPAP guides.",
    image: IMAGES.heroKilimanjaro,
    target: { to: "/trekking-packages" },
  },
  {
    title: "Zanzibar",
    blurb: "White-sand beaches, Stone Town heritage and dhow sunsets on the Swahili coast.",
    image: IMAGES.heroZanzibar,
    target: { to: "/zanzibar-packages" },
  },
  {
    title: "Day Trips",
    blurb: "Short escapes from Arusha — Lake Manyara, Tarangire, Materuni Falls and Maasai visits.",
    image: IMAGES.wildElephants,
    target: { to: "/tours", hash: "day-trips" },
  },
  {
    title: "Destinations",
    blurb: "The parks and shores worth crossing the world for — Serengeti, Ngorongoro, Selous, Zanzibar.",
    image: IMAGES.heroNgorongoro,
    target: { to: "/destinations" },
  },
];

function ExperiencesHub() {
  return (
    <>
      <section className="relative h-[60svh] min-h-[420px] w-full overflow-hidden">
        <img src={IMAGES.heroSerengeti} alt="" className="absolute inset-0 h-full w-full object-cover ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
        <div className="relative z-10 container-x mx-auto max-w-[1500px] h-full flex flex-col justify-end pb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-white/80">Experiences</p>
          <h1 className="mt-4 font-display text-4xl md:text-6xl text-white leading-[1.05] max-w-3xl">
            Choose your Tanzania experience.
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">
            Every trip is tailored. Start with the kind of journey that calls to you and we'll shape the rest around your dates, pace and comfort.
          </p>
        </div>
      </section>

      <section className="container-x mx-auto max-w-[1500px] py-20">
        <ScrollReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <motion.div key={c.title} variants={fadeUp}>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Link
                {...(c.target as any)}
                className="group block overflow-hidden rounded-3xl bg-card shadow-elevated hover:-translate-y-1 transition-transform duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={c.image} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <h2 className="absolute inset-x-5 bottom-5 font-display text-2xl text-white">{c.title}</h2>
                </div>
                <div className="p-6">
                  <p className="text-sm text-foreground/75 leading-relaxed">{c.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#827768]">
                    Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </ScrollReveal>
      </section>
    </>
  );
}
