import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { TourCard } from "@/components/site/TourCard";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { TOURS, IMAGES, DAY_TRIPS } from "@/content/site";


export const Route = createFileRoute("/tours/")({
  head: () => ({
    meta: [
      { title: "All Tanzania Tours & Safaris | Tanzania Exploration" },
      { name: "description", content: "Browse every Tanzania Exploration itinerary — safaris, Kilimanjaro treks, honeymoons and Zanzibar escapes. Each with four selectable accommodation packages." },
      { property: "og:title", content: "All Tanzania Tours — Tanzania Exploration" },
      { property: "og:description", content: "Hand-crafted safaris, treks and beach journeys across Tanzania." },
      { property: "og:image", content: IMAGES.heroSerengeti },
      { property: "og:url", content: "/tours" },
    ],
    links: [{ rel: "canonical", href: "/tours" }],
  }),
  component: ToursPage,
});

const CATS = ["All", "Lodge Safari", "Luxury Safari", "Honeymoon", "Trekking", "Birding", "Beach"] as const;

function ToursPage() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const filtered = useMemo(() => cat === "All" ? TOURS : TOURS.filter((t) => t.category === cat), [cat]);

  return (
    <>
      <section className="pt-40 pb-16 container-x mx-auto max-w-[1500px]">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Tours & Itineraries</p>
        <h1 className="mt-5 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance max-w-4xl">
          Choose your journey.
        </h1>
        <p className="mt-8 max-w-2xl text-base md:text-lg text-foreground/75">
          Every itinerary comes with four accommodation packages — Budget, Mid-range, Luxury and Ultra Luxury. Pick the route first, tailor the comfort next.
        </p>
      </section>

      {/* DAY TRIPS */}
      <section id="day-trips" className="container-x mx-auto max-w-[1500px] py-16 scroll-mt-28 border-t border-border/40">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Day Trips</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">One day — well spent</h2>
          </div>
          <p className="max-w-md text-sm text-foreground/70">
            Designed for travellers with just a day free — between Kilimanjaro and your flight, or a pause from the safari circuit.
          </p>
        </div>

        <ScrollReveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DAY_TRIPS.map((d) => (
            <article key={d.id} className="group overflow-hidden rounded-lg border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={d.image}
                  alt={d.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] uppercase tracking-[0.22em] text-primary">{d.location}</p>
                <h3 className="mt-2 font-display text-lg">{d.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{d.summary}</p>
                <Link
                  to="/plan-my-trip"
                  className="mt-4 inline-block text-[11px] uppercase tracking-[0.25em] text-primary hover:underline"
                >
                  Book this trip →
                </Link>
              </div>
            </article>
          ))}
        </ScrollReveal>
      </section>

      <div className="container-x mx-auto max-w-[1500px] sticky top-20 z-30 py-4 bg-background/80 backdrop-blur-md">
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`shrink-0 rounded-full px-5 py-2 text-xs uppercase tracking-[0.18em] transition-all ${
                cat === c ? "bg-[#827768] text-white shadow-glow-lime" : "glass hover:bg-surface-elevated"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <section className="container-x mx-auto max-w-[1500px] pb-32 pt-8">
        <ScrollReveal key={cat} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => <TourCard key={t.slug} tour={t} />)}
        </ScrollReveal>
      </section>
    </>
  );
}
