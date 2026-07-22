import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { TourCard } from "@/components/site/TourCard";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { TOURS, IMAGES, DAY_TRIPS } from "@/content/site";


export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "All Tanzania Tours & Safaris | Sahara Wild" },
      { name: "description", content: "Luxury safaris, lodge & camping tours, Kilimanjaro treks, honeymoon journeys and Zanzibar escapes — every tour custom-built." },
      { property: "og:title", content: "All Tanzania Tours — Sahara Wild" },
      { property: "og:description", content: "Hand-crafted safaris, treks and beach journeys across Tanzania." },
      { property: "og:image", content: IMAGES.heroSerengeti },
      { property: "og:url", content: "/tours" },
    ],
    links: [{ rel: "canonical", href: "/tours" }],
  }),
  component: ToursPage,
});

const CATS = ["All", "Luxury Safari", "Lodge Safari", "Camping Safari", "Honeymoon", "Trekking", "Birding", "Beach"] as const;

type SafariType = {
  id: string;
  title: string;
  image: string;
  blurb: string;
};

const SAFARI_TYPES: SafariType[] = [
  { id: "safari-luxury", title: "Tanzania Luxury Safaris", image: IMAGES.safariTypes.luxury, blurb: "Private guides, premier lodges and exclusive-use camps in the heart of the wild — refined comfort without compromise." },
  { id: "safari-tented-lodge", title: "Tented Lodge Safari", image: IMAGES.safariTypes.tentedLodge, blurb: "Permanent tented lodges that pair canvas-under-the-stars romance with hotel-grade comforts in iconic parks." },
  { id: "safari-camping", title: "Tanzania Camping Safaris", image: IMAGES.safariTypes.camping, blurb: "Authentic mobile camps that bring you closer to the wilderness — perfect for adventurous travellers and families on a budget." },
  { id: "safari-bird-watching", title: "Bird Watching Safaris", image: IMAGES.safariTypes.birding, blurb: "Specialist itineraries across Tarangire, Manyara and the Rift Valley lakes — home to 1,100+ bird species." },
  { id: "safari-honeymoon", title: "Honeymoon Safari Packages", image: IMAGES.safariTypes.honeymoon, blurb: "Romantic combinations of bush and beach — private dinners, plunge pools and sunset dhow cruises in Zanzibar." },
  { id: "safari-flying", title: "Flying Safari", image: IMAGES.safariTypes.flying, blurb: "Maximise time in the parks with light-aircraft transfers between Serengeti, Selous, Ruaha and Zanzibar." },
  { id: "safari-family", title: "Family Safari", image: IMAGES.safariTypes.family, blurb: "Tailored pace, kid-friendly lodges and family-rated guides — wildlife adventures that work for every age." },
  { id: "safari-photographic", title: "Photographic Safari", image: IMAGES.safariTypes.photographic, blurb: "Dedicated photo vehicles, bean bags and golden-hour tracking led by guides who know the best light and sightlines." },
  { id: "safari-migration", title: "Wildebeest Migration", image: IMAGES.safariTypes.migration, blurb: "Follow 1.5 million wildebeest across the Serengeti — calving, river crossings and predator action, month by month." },
  { id: "safari-balloon", title: "Balloon Safari", image: IMAGES.safariTypes.balloon, blurb: "Float silently over the Serengeti at dawn followed by a sparkling bush breakfast under an acacia." },
  { id: "safari-walking", title: "Guided Walking Safaris", image: IMAGES.safariTypes.walking, blurb: "Walk the wilderness with armed rangers and Maasai guides — tracks, plants and the small details game-drives miss." },
];

function ToursPage() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const filtered = useMemo(() => cat === "All" ? TOURS : TOURS.filter((t) => t.category === cat), [cat]);

  return (
    <>
      <section className="pt-40 pb-12 container-x mx-auto max-w-[1500px]">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Tours</p>
        <h1 className="mt-5 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance max-w-4xl">
          Every trip, hand-built.
        </h1>
        <p className="mt-8 max-w-2xl text-base md:text-lg text-foreground/75">
          Start with a template, then we tailor everything — vehicle, camps, pace, and the guide who fits you best.
        </p>
      </section>

      <section id="safari" className="container-x mx-auto max-w-[1500px] pb-16 scroll-mt-28">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Safari</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">Choose your safari style</h2>
          </div>
          <p className="max-w-md text-sm text-foreground/70">
            Eleven distinct ways to experience Tanzania — from private luxury camps to walking with rangers at dawn.
          </p>
        </div>

        <ScrollReveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SAFARI_TYPES.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="group relative overflow-hidden rounded-lg border border-border bg-card scroll-mt-28"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{s.blurb}</p>
                <Link
                  to="/safari-itineraries"
                  hash={s.id}
                  className="mt-4 inline-block text-[11px] uppercase tracking-[0.25em] text-primary hover:underline"
                >
                  View itinerary →
                </Link>
              </div>
            </article>
          ))}
        </ScrollReveal>
      </section>

      {/* ============================ DAY TRIPS ============================ */}
      <section id="day-trips" className="container-x mx-auto max-w-[1500px] py-20 scroll-mt-28 border-t border-border/40">
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
                cat === c ? "bg-[#827768] text-primary-foreground shadow-glow-lime" : "glass hover:bg-surface-elevated"
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
