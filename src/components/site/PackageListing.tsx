import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { SlidersHorizontal, X } from "lucide-react";
import { PackageCard } from "@/components/site/PackageCard";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import type { Tour } from "@/content/site";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  tours: Tour[];
  featuredSlugs?: string[];
};

const DURATIONS = [
  { label: "1–3 Days", min: 1, max: 3 },
  { label: "4–6 Days", min: 4, max: 6 },
  { label: "7–10 Days", min: 7, max: 10 },
  { label: "10+ Days", min: 11, max: 999 },
] as const;

const DESTINATION_KEYS = [
  "Serengeti",
  "Ngorongoro",
  "Tarangire",
  "Lake Manyara",
  "Arusha",
  "Zanzibar",
  "Kilimanjaro",
] as const;

const ACCOMMODATIONS = ["Budget", "Mid-range", "Luxury", "Ultra Luxury"] as const;
type Accommodation = (typeof ACCOMMODATIONS)[number];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "duration", label: "Duration" },
  { id: "price-asc", label: "Price (Low to High)" },
  { id: "price-desc", label: "Price (High to Low)" },
] as const;
type SortId = (typeof SORTS)[number]["id"];

function tourAccommodation(t: Tour): Accommodation {
  switch (t.category) {
    case "Camping Safari":
      return "Budget";
    case "Lodge Safari":
    case "Birding":
    case "Trekking":
      return "Mid-range";
    case "Luxury Safari":
      return "Luxury";
    case "Honeymoon":
    case "Beach":
      return "Ultra Luxury";
    default:
      return "Mid-range";
  }
}

function toggle<T>(arr: T[], value: T): T[] {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

export function PackageListing({ eyebrow, title, intro, heroImage, tours, featuredSlugs = [] }: Props) {
  const [durations, setDurations] = useState<number[]>([]);
  const [destinations, setDestinations] = useState<string[]>([]);
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [sort, setSort] = useState<SortId>("featured");
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered = useMemo(() => {
    let out = tours.filter((t) => {
      const durOk =
        durations.length === 0 ||
        durations.some((i) => {
          const d = DURATIONS[i];
          return t.days >= d.min && t.days <= d.max;
        });
      const destOk =
        destinations.length === 0 ||
        destinations.some((d) => t.destination.toLowerCase().includes(d.toLowerCase()));
      const accOk =
        accommodations.length === 0 || accommodations.includes(tourAccommodation(t));
      return durOk && destOk && accOk;
    });

    switch (sort) {
      case "duration":
        out = [...out].sort((a, b) => a.days - b.days);
        break;
      case "price-asc":
        out = [...out].sort((a, b) => a.priceFrom - b.priceFrom);
        break;
      case "price-desc":
        out = [...out].sort((a, b) => b.priceFrom - a.priceFrom);
        break;
      case "featured":
      default:
        out = [...out].sort((a, b) => {
          const af = featuredSlugs.includes(a.slug) ? 0 : 1;
          const bf = featuredSlugs.includes(b.slug) ? 0 : 1;
          return af - bf;
        });
    }
    return out;
  }, [tours, durations, destinations, accommodations, sort, featuredSlugs]);

  const activeCount = durations.length + destinations.length + accommodations.length;

  const clearAll = () => {
    setDurations([]);
    setDestinations([]);
    setAccommodations([]);
    setSort("featured");
  };

  const FilterPanel = (
    <div className="space-y-8">
      <FilterGroup title="Duration">
        <div className="flex flex-wrap gap-2">
          {DURATIONS.map((d, i) => (
            <Chip key={d.label} active={durations.includes(i)} onClick={() => setDurations(toggle(durations, i))}>
              {d.label}
            </Chip>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Destination">
        <div className="flex flex-wrap gap-2">
          {DESTINATION_KEYS.map((d) => (
            <Chip key={d} active={destinations.includes(d)} onClick={() => setDestinations(toggle(destinations, d))}>
              {d}
            </Chip>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Accommodation">
        <div className="flex flex-wrap gap-2">
          {ACCOMMODATIONS.map((a) => (
            <Chip key={a} active={accommodations.includes(a)} onClick={() => setAccommodations(toggle(accommodations, a))}>
              {a}
            </Chip>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Sort By">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortId)}
          className="w-full rounded-sm border border-border bg-background px-3 py-2 text-[11px] uppercase tracking-[0.18em]"
        >
          {SORTS.map((s) => (
            <option key={s.id} value={s.id}>{s.label}</option>
          ))}
        </select>
      </FilterGroup>

      {activeCount > 0 && (
        <button
          onClick={clearAll}
          className="text-[10px] uppercase tracking-[0.22em] text-foreground/70 hover:text-foreground underline underline-offset-4"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* Hero */}
      <section className="relative h-[58vh] min-h-[420px] w-full overflow-hidden">
        <img src={heroImage} alt={title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/75" />
        <div className="relative z-10 h-full container-x mx-auto max-w-[1500px] flex flex-col justify-end pb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-white/85 [text-shadow:0_1px_3px_rgba(0,0,0,0.7)]">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display font-light text-5xl md:text-7xl text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.6)]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-white/90 leading-relaxed [text-shadow:0_1px_3px_rgba(0,0,0,0.6)]">
            {intro}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="container-x mx-auto max-w-[1500px] py-14">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-border/60 bg-card/60 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl">Filters</h2>
                {activeCount > 0 && (
                  <span className="rounded-full bg-[#827768] px-2 py-0.5 text-[10px] text-white">
                    {activeCount}
                  </span>
                )}
              </div>
              {FilterPanel}
            </div>
          </aside>

          {/* Mobile filter bar */}
          <div className="lg:hidden -mt-2 mb-2 flex items-center justify-between">
            <button
              onClick={() => setMobileOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-[11px] uppercase tracking-[0.2em]"
            >
              <SlidersHorizontal size={14} /> Filters{activeCount ? ` (${activeCount})` : ""}
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortId)}
              className="rounded-sm border border-border bg-background px-3 py-2 text-[11px] uppercase tracking-[0.18em]"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>{s.label}</option>
              ))}
            </select>
          </div>

          {/* Results */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/60">
                {filtered.length} {filtered.length === 1 ? "package" : "packages"}
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-border/60 bg-card p-16 text-center">
                <p className="text-foreground/70">No packages match those filters.</p>
                <button
                  onClick={clearAll}
                  className="mt-4 text-[11px] uppercase tracking-[0.22em] text-[#827768] underline underline-offset-4"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <ScrollReveal
                key={`${durations.join()}-${destinations.join()}-${accommodations.join()}-${sort}`}
                className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
              >
                {filtered.map((t) => (
                  <PackageCard key={t.slug} tour={t} featured={featuredSlugs.includes(t.slug)} />
                ))}
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#3D372F] text-white">
        <div className="container-x mx-auto max-w-[1200px] py-20 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">Bespoke journeys</p>
          <h2 className="mt-4 font-display font-light text-4xl md:text-5xl">
            Can't find your perfect tour?
          </h2>
          <p className="mt-5 mx-auto max-w-2xl text-white/80 leading-relaxed">
            We create personalized itineraries tailored to your travel style, pace and budget. Tell us
            what you're dreaming of and we'll build it around you.
          </p>
          <Link
            to="/plan-my-trip"
            className="mt-8 inline-flex items-center rounded-sm bg-[#827768] px-8 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white hover:bg-[#6f6558] transition-colors"
          >
            Plan My Custom Safari
          </Link>
        </div>
      </section>

      {/* Mobile filter drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div className="absolute inset-y-0 right-0 w-[85%] max-w-sm bg-background p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl">Filters</h2>
              <button onClick={() => setMobileOpen(false)} aria-label="Close">
                <X size={20} />
              </button>
            </div>
            {FilterPanel}
            <button
              onClick={() => setMobileOpen(false)}
              className="mt-8 w-full rounded-sm bg-[#827768] px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-white"
            >
              Show {filtered.length} results
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[10px] uppercase tracking-[0.28em] text-foreground/60 mb-3">{title}</h3>
      {children}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.18em] transition-colors ${
        active
          ? "bg-[#827768] text-white border border-[#827768]"
          : "border border-border hover:bg-surface-elevated text-foreground/80"
      }`}
    >
      {children}
    </button>
  );
}
