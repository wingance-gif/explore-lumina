import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PackageCard } from "@/components/site/PackageCard";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { TOURS, IMAGES, type Tour } from "@/content/site";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  tours: Tour[];
};

const DURATIONS = [
  { label: "Any duration", min: 0, max: 999 },
  { label: "1–3 days", min: 1, max: 3 },
  { label: "4–7 days", min: 4, max: 7 },
  { label: "8+ days", min: 8, max: 999 },
] as const;

export function PackageListing({ eyebrow, title, intro, heroImage, tours }: Props) {
  const [duration, setDuration] = useState(0);
  const [destination, setDestination] = useState("All");

  const destinations = useMemo(() => {
    const set = new Set<string>();
    tours.forEach((t) => t.destination.split("·").forEach((d) => set.add(d.trim())));
    return ["All", ...Array.from(set).sort()];
  }, [tours]);

  const filtered = useMemo(() => {
    const d = DURATIONS[duration];
    return tours.filter((t) => {
      const inRange = t.days >= d.min && t.days <= d.max;
      const inDest = destination === "All" || t.destination.includes(destination);
      return inRange && inDest;
    });
  }, [tours, duration, destination]);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[52vh] min-h-[380px] w-full overflow-hidden">
        <img src={heroImage} alt={title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="relative z-10 h-full container-x mx-auto max-w-[1500px] flex flex-col justify-end pb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-white/85 [text-shadow:0_1px_3px_rgba(0,0,0,0.7)]">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display font-light text-5xl md:text-7xl text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.6)]">
            {title}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="container-x mx-auto max-w-3xl py-16 text-center">
        <p className="text-base md:text-lg text-foreground/75 leading-relaxed">{intro}</p>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 bg-background/85 backdrop-blur-md border-y border-border/40">
        <div className="container-x mx-auto max-w-[1500px] py-4 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/60">Duration</span>
            <div className="flex gap-2 overflow-x-auto">
              {DURATIONS.map((d, i) => (
                <button
                  key={d.label}
                  onClick={() => setDuration(i)}
                  className={`shrink-0 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.18em] transition-colors ${
                    duration === i ? "bg-[#827768] text-white" : "border border-border hover:bg-surface-elevated"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="dest-filter" className="text-[10px] uppercase tracking-[0.25em] text-foreground/60">
              Destination
            </label>
            <select
              id="dest-filter"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="rounded-sm border border-border bg-background px-3 py-1.5 text-[11px] uppercase tracking-[0.18em]"
            >
              {destinations.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          <span className="ml-auto text-[11px] uppercase tracking-[0.22em] text-foreground/60">
            {filtered.length} {filtered.length === 1 ? "package" : "packages"}
          </span>
        </div>
      </section>

      {/* Grid */}
      <section className="container-x mx-auto max-w-[1500px] py-16">
        {filtered.length === 0 ? (
          <p className="py-24 text-center text-foreground/60">
            No packages match those filters — try widening your search.
          </p>
        ) : (
          <ScrollReveal key={`${duration}-${destination}`} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t) => <PackageCard key={t.slug} tour={t} />)}
          </ScrollReveal>
        )}
      </section>
    </>
  );
}

// Route wrapper — Safari
export const Route = createFileRoute("/safari-packages")({
  head: () => ({
    meta: [
      { title: "Safari Packages | Tanzania Exploration" },
      { name: "description", content: "Curated Tanzania safari packages — luxury, lodge, camping and specialist itineraries across the Northern Circuit." },
      { property: "og:title", content: "Safari Packages — Tanzania Exploration" },
      { property: "og:description", content: "Luxury, lodge and camping safaris across Serengeti, Ngorongoro and Tarangire." },
      { property: "og:image", content: IMAGES.heroSerengeti },
    ],
  }),
  component: SafariPackagesPage,
});

function SafariPackagesPage() {
  const tours = TOURS.filter((t) =>
    ["Luxury Safari", "Lodge Safari", "Camping Safari", "Birding"].includes(t.category),
  );
  return (
    <PackageListing
      eyebrow="Packages"
      title="Safari Packages"
      intro="From private luxury camps in the Serengeti to authentic mobile camping under the stars — every safari is hand-built around your pace, budget and the wildlife you most want to see."
      heroImage={IMAGES.heroSerengeti}
      tours={tours}
    />
  );
}
