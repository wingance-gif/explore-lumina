import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { IMAGES, TOURS, type Tour } from "@/content/site";
import { PackageCard } from "@/components/site/PackageCard";
import { PlanTripDialog } from "@/components/site/PlanTripDialog";

export const Route = createFileRoute("/safari-itineraries")({
  head: () => ({
    meta: [
      { title: "Tanzania Safari Itineraries | Tanzania Exploration" },
      {
        name: "description",
        content:
          "Browse unique Tanzania safari itineraries by route and duration. Every itinerary includes four selectable accommodation packages — Budget, Mid-range, Luxury and Ultra Luxury.",
      },
      { property: "og:title", content: "Tanzania Safari Itineraries" },
      {
        property: "og:description",
        content: "Unique safari routes, each with Budget, Mid-range, Luxury and Ultra Luxury packages.",
      },
      { property: "og:image", content: IMAGES.heroSerengeti },
      { property: "og:url", content: "/safari-itineraries" },
    ],
    links: [{ rel: "canonical", href: "/safari-itineraries" }],
  }),
  component: SafariItinerariesPage,
});

// Only unique safari routes — Trekking and Beach-only itineraries have their
// own dedicated pages, so they are intentionally excluded here.
const SAFARI_CATEGORIES: Tour["category"][] = [
  "Luxury Safari",
  "Lodge Safari",
  "Camping Safari",
  "Birding",
  "Honeymoon",
];

function SafariItinerariesPage() {
  const itineraries = TOURS
    .filter((t) => SAFARI_CATEGORIES.includes(t.category))
    .sort((a, b) => a.days - b.days);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-16 container-x mx-auto max-w-[1500px]">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Itineraries</p>
        <h1 className="mt-5 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance max-w-4xl">
          Safari itineraries by route and duration.
        </h1>
        <p className="mt-8 max-w-2xl text-base md:text-lg text-foreground/75">
          Every itinerary below is a unique route. Open one to view the day-by-day programme and
          choose your accommodation package — Budget, Mid-range, Luxury or Ultra Luxury. The route,
          activities, transport and inclusions stay the same across packages; only where you sleep
          — and therefore the final price — changes.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-foreground/70">
          {(["Budget", "Mid-range", "Luxury", "Ultra Luxury"] as const).map((tier) => (
            <span
              key={tier}
              className="rounded-full bg-[#3D372F] px-3 py-1 text-white"
            >
              {tier} package
            </span>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="container-x mx-auto max-w-[1500px] pb-24">
        {itineraries.length === 0 ? (
          <p className="text-foreground/70">No itineraries available.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {itineraries.map((tour) => (
              <PackageCard key={tour.slug} tour={tour} />
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 rounded-3xl border border-border bg-card/60 p-8 md:p-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#827768]">Can't find your route?</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            We tailor every itinerary to your dates and pace.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-foreground/70">
            Tell us what you'd like to see and how you like to travel. A Tanzania Exploration
            consultant will send a tailored itinerary and quotation within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PlanTripDialog
              trigger={
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-[#827768] px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white hover:scale-[1.02] transition-transform"
                >
                  Plan my trip <ArrowRight size={14} />
                </button>
              }
            />
            <Link
              to="/experiences"
              className="text-[11px] uppercase tracking-[0.25em] text-foreground/70 hover:text-primary transition-colors"
            >
              Browse all experiences →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
