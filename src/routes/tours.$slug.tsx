import { useMemo, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Compass,
  MapPin,
  Route as RouteIcon,
  Send,
  Sparkles,
  Star,
  Sun,
  Tag,
  Users,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { TOURS, IMAGES, type Tour } from "@/content/site";
import { PlanTripDialog } from "@/components/site/PlanTripDialog";
import { FormBanner, SelectField, TextAreaField, TextField } from "@/components/site/FormField";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";



export const Route = createFileRoute("/tours/$slug")({
  loader: ({ params }) => {
    const tour = TOURS.find((t) => t.slug === params.slug);
    if (!tour) throw notFound();
    return { tour };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.tour.title} | Tanzania Exploration` },
      { name: "description", content: loaderData?.tour.summary },
      { property: "og:title", content: loaderData?.tour.title },
      { property: "og:description", content: loaderData?.tour.summary },
      { property: "og:image", content: loaderData?.tour.image },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: loaderData?.tour.image },
    ],
    links: [{ rel: "canonical", href: `/tours/${loaderData?.tour.slug}` }],
  }),
  component: TourDetail,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center">
        <h1 className="font-display text-4xl">Tour not found</h1>
        <Link to="/tours" className="mt-6 inline-block text-primary">← All tours</Link>
      </div>
    </div>
  ),
});

type TierKey = "budget" | "mid" | "luxury" | "ultra";

const TIERS: { key: TierKey; label: string; blurb: string }[] = [
  {
    key: "budget",
    label: "Budget",
    blurb:
      "Authentic camping and simple guesthouses — the sounds of the bush at night, warm meals around the fire, no frills.",
  },
  {
    key: "mid",
    label: "Mid-range",
    blurb:
      "Well-appointed lodges and permanent tented camps with hot showers, comfortable beds and full-board dining.",
  },
  {
    key: "luxury",
    label: "Luxury",
    blurb:
      "Signature lodges and boutique tented camps in prime locations — private guides, plunge pools and elevated dining.",
  },
  {
    key: "ultra",
    label: "Ultra Luxury",
    blurb:
      "Private conservancies, butler service and exclusive-use camps — the rarefied top tier of an African journey.",
  },
];

const TIER_GALLERIES: Record<TierKey, string[]> = {
  budget: [
    IMAGES.safariTypes.camping,
    IMAGES.safariTypes.walking,
    IMAGES.wildElephants,
    IMAGES.heroSerengeti,
  ],
  mid: [
    IMAGES.safariTypes.tentedLodge,
    IMAGES.heroLuxuryCamp,
    IMAGES.destinations.serengeti,
    IMAGES.wildLion,
  ],
  luxury: [
    IMAGES.safariTypes.luxury,
    IMAGES.luxuryPool,
    IMAGES.heroNgorongoro,
    IMAGES.safariTypes.balloon,
  ],
  ultra: [
    IMAGES.safariTypes.honeymoon,
    IMAGES.heroZanzibar,
    IMAGES.luxuryPool,
    IMAGES.safariTypes.flying,
  ],
};

const QUOTE_PLACEHOLDER = "Accommodation confirmed with your quotation.";


function deriveDay(step: { day: number; title: string; body: string }, totalDays: number, category: Tour["category"]) {
  const route = step.title.includes("→") ? step.title : undefined;
  const isArrival = step.day === 1;
  const isDeparture = step.day === totalDays && totalDays > 1;
  const meals = isArrival
    ? "Lunch · Dinner"
    : isDeparture
      ? "Breakfast"
      : "Breakfast · Lunch · Dinner";

  const base: string[] =
    category === "Trekking"
      ? ["Guided trekking stage", "Acclimatisation briefing", "Camp overnight"]
      : category === "Beach" || category === "Honeymoon"
        ? ["Beach & leisure time", "Optional excursions", "Sunset dinner"]
        : ["Morning game drive", "Wildlife photography stops", "Evening at the camp"];

  const body = step.body.toLowerCase();
  const activities: string[] = [];
  if (body.includes("balloon")) activities.push("Sunrise hot-air balloon flight");
  if (body.includes("crater") || body.includes("caldera")) activities.push("Descent into Ngorongoro crater");
  if (body.includes("cultural") || body.includes("maasai")) activities.push("Maasai cultural visit");
  if (body.includes("snorkel")) activities.push("Reef snorkelling");
  if (body.includes("stone town")) activities.push("Stone Town heritage walk");
  if (body.includes("summit")) activities.push("Summit push · Uhuru Peak");
  if (body.includes("spice")) activities.push("Spice plantation tour");
  if (body.includes("birding") || body.includes("bird")) activities.push("Specialist birding session");
  if (body.includes("transfer") || body.includes("airport")) activities.push("Airport transfer");
  const merged = [...activities, ...base].slice(0, 4);

  return { route, meals, activities: merged };
}


function bestTimeFor(t: Tour) {
  if (t.category === "Trekking") return "Jan–Mar · Jun–Oct";
  if (t.category === "Beach" || t.category === "Honeymoon") return "Jun–Oct · Dec–Feb";
  if (t.category === "Birding") return "Nov–Apr (migrants)";
  return "Jun–Oct · Jan–Feb";
}

function tourFaqs(t: Tour) {
  return [
    {
      q: `Is the ${t.days}-day itinerary flexible?`,
      a: "Yes — every itinerary is a starting point. We tailor pace, camps and add-ons (balloon, cultural visits, extra beach nights) to your party.",
    },
    {
      q: "How physically demanding is this trip?",
      a:
        t.category === "Trekking"
          ? "Moderate to strenuous. No technical climbing, but expect long days at altitude. We recommend prior hill-walking fitness."
          : "Easy. Days are spent in the vehicle with short walks at camps and viewpoints. Suitable for all ages 6+.",
    },
    {
      q: "What's the group size?",
      a: "Private departures for your party only. Vehicles seat up to 6; larger groups get additional 4x4s.",
    },
    {
      q: "When should we book?",
      a: "6–9 months ahead for peak season (Jul–Oct, Dec). Shoulder-season dates are often available at 60–90 days.",
    },
    {
      q: "Do you handle flights and visas?",
      a: "We book all internal flights. International flights and Tanzania e-visas are arranged by you — we send a checklist and support you through the process.",
    },
  ];
}

function TourDetail() {
  const { tour } = Route.useLoaderData() as { tour: Tour };
  const [tier, setTier] = useState<TierKey>("mid");
  const related = useMemo(
    () => TOURS.filter((t) => t.slug !== tour.slug && t.category === tour.category).slice(0, 3),
    [tour.slug, tour.category],
  );
  const activeTier = TIERS.find((t) => t.key === tier)!;


  return (
    <>
      {/* HERO */}
      <section className="relative h-[86svh] min-h-[560px] w-full overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="absolute inset-0 h-full w-full object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
        <div className="relative z-10 container-x mx-auto max-w-[1500px] h-full flex flex-col justify-end pb-20">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/90">
            <span className="rounded-full bg-[#3D372F] px-3 py-1 text-white">{tour.category}</span>
            <span className="inline-flex items-center gap-1.5"><Calendar size={12} /> {tour.days}D / {tour.nights}N</span>
            <span className="inline-flex items-center gap-1.5"><MapPin size={12} /> {tour.destination}</span>
          </div>
          <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-balance max-w-4xl text-white">
            {tour.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-white/85">{tour.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PlanTripDialog
              destination={tour.destination}
              experienceTitle={tour.title}
              trigger={
                <button className="inline-flex items-center gap-2 rounded-full bg-[#827768] px-7 py-3.5 text-sm font-medium text-white hover:scale-[1.02] transition-transform">
                  Book Now <ArrowRight size={14} />
                </button>
              }
            />
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm text-white hover:bg-white/10 transition-colors"
            >
              Send Inquiry <Send size={14} />
            </a>
          </div>

        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="container-x mx-auto max-w-[1500px] -mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 rounded-3xl bg-card/95 backdrop-blur border border-border p-4 md:p-6 shadow-elevated">
          <QuickFact icon={<Clock size={16} />} label="Duration" value={`${tour.days} Days / ${tour.nights} Nights`} />
          <QuickFact icon={<Sparkles size={16} />} label="Tour Type" value={tour.category} />
          <QuickFact icon={<MapPin size={16} />} label="Destination" value={tour.destination} />
          <QuickFact icon={<Sun size={16} />} label="Best Time" value={bestTimeFor(tour)} />
          <QuickFact icon={<Users size={16} />} label="Group Size" value="Private · 2–8" />
          <QuickFact icon={<Tag size={16} />} label="Pricing" value="On quotation" />
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="container-x mx-auto max-w-[1500px] pt-20 pb-8">
        <SectionHeading eyebrow="Highlights" title="What makes this tour special" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tour.highlights.map((h) => (
            <div
              key={h}
              className="group rounded-2xl border border-border bg-card/60 p-6 hover:bg-card hover:-translate-y-0.5 transition-all"
            >
              <div className="h-11 w-11 grid place-items-center rounded-full bg-[#3D372F] text-white">
                <Star size={18} />
              </div>
              <p className="mt-4 text-sm text-foreground/85 leading-relaxed">{h}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACCOMMODATION PREVIEW (moved before itinerary) */}
      <section className="container-x mx-auto max-w-[1500px] py-16">
        <SectionHeading
          eyebrow="Accommodation"
          title="Choose your comfort level"
          intro="Same itinerary — four ways to experience it. Pick a category to preview the style of accommodation and the starting price."
        />

        {/* Tier selector */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {TIERS.map((t) => {
            const selected = t.key === tier;
            return (
              <button
                key={t.key}
                onClick={() => setTier(t.key)}
                className={`rounded-2xl border p-5 text-left transition-all ${
                  selected
                    ? "border-[#827768] bg-[#827768] text-white shadow-elevated"
                    : "border-border bg-card/60 hover:bg-card hover:-translate-y-0.5"
                }`}
                aria-pressed={selected}
              >
                <p className={`text-[10px] uppercase tracking-[0.22em] ${selected ? "text-white/70" : "text-foreground/55"}`}>
                  Package
                </p>
                <p className="mt-2 font-display text-2xl">{t.label}</p>
                <p className={`mt-3 text-xs ${selected ? "text-white/80" : "text-foreground/60"}`}>
                  Price on quotation
                </p>
              </button>
            );
          })}
        </div>


        {/* Preview: gallery + short blurb + price */}
        <div className="mt-8 rounded-3xl border border-border bg-card/60 p-6 md:p-8">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-start">
            {/* Gallery */}
            <div className="grid grid-cols-4 grid-rows-2 gap-2.5 h-[420px] md:h-[480px]">
              <img
                src={TIER_GALLERIES[tier][0]}
                alt={`${activeTier.label} accommodation preview 1`}
                className="col-span-2 row-span-2 h-full w-full rounded-2xl object-cover"
              />
              <img
                src={TIER_GALLERIES[tier][1]}
                alt={`${activeTier.label} accommodation preview 2`}
                className="col-span-2 h-full w-full rounded-2xl object-cover"
              />
              <img
                src={TIER_GALLERIES[tier][2]}
                alt={`${activeTier.label} accommodation preview 3`}
                className="h-full w-full rounded-2xl object-cover"
              />
              <img
                src={TIER_GALLERIES[tier][3]}
                alt={`${activeTier.label} accommodation preview 4`}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>

            {/* Copy + price */}
            <div className="flex flex-col justify-between h-full min-h-[420px] md:min-h-[480px]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/55">
                  {activeTier.label} preview
                </p>
                <h3 className="mt-2 font-display text-3xl md:text-4xl">
                  A taste of {activeTier.label.toLowerCase()} on this journey
                </h3>
                <p className="mt-4 text-sm md:text-base text-foreground/75 leading-relaxed">
                  {activeTier.blurb}
                </p>
              </div>

              <div className="mt-8 rounded-2xl bg-[#3D372F] text-white p-6">
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/60">Camps & lodges</p>
                <p className="mt-3 font-display text-2xl leading-snug">
                  {QUOTE_PLACEHOLDER}
                </p>
                <p className="mt-3 text-xs text-white/70">
                  {activeTier.label} category · {tour.days} days / {tour.nights} nights · based on 2 sharing
                </p>
                <PlanTripDialog
                  destination={tour.destination}
                  experienceTitle={`${tour.title} — ${activeTier.label}`}
                  trigger={
                    <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#827768] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-white hover:bg-[#6f6558] transition-colors">
                      Request quotation <ArrowRight size={13} />
                    </button>
                  }
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ITINERARY (identical for every accommodation tier) */}
      <section className="container-x mx-auto max-w-[1500px] py-16">
        <SectionHeading
          eyebrow="Itinerary"
          title="Day-by-day"
          intro="Your daily programme stays the same across all accommodation categories — only where you sleep changes."
        />
        <Accordion type="single" collapsible defaultValue="day-1" className="mt-10 space-y-3">
          {tour.itinerary.map((step) => {
            const { route, meals, activities } = deriveDay(step, tour.days, tour.category);
            return (
              <AccordionItem
                key={step.day}
                value={`day-${step.day}`}
                className="rounded-2xl border border-border bg-card/60 px-5 md:px-6 overflow-hidden data-[state=open]:bg-card"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-5 text-left w-full">
                    <div className="shrink-0 grid h-11 w-11 place-items-center rounded-full bg-[#827768] text-white font-display text-base">
                      {step.day}
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/55">Day {step.day}</p>
                      <p className="font-display text-lg md:text-xl mt-0.5">{step.title}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 md:pl-16 pr-2">
                  <div className="grid md:grid-cols-3 gap-5 mt-1">
                    <div className="md:col-span-2">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/55">
                        The day
                      </p>
                      <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                        {step.body}
                      </p>

                      <p className="mt-6 text-[10px] uppercase tracking-[0.22em] text-foreground/55">
                        Activities
                      </p>
                      <ul className="mt-3 grid sm:grid-cols-2 gap-2">
                        {activities.map((a) => (
                          <li key={a} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#827768] shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4 rounded-xl bg-background/50 border border-border p-4 h-fit">
                      <FactRow
                        icon={<RouteIcon size={14} />}
                        label="Route"
                        value={route ?? tour.destination}
                      />
                      <FactRow
                        icon={<UtensilsCrossed size={14} />}
                        label="Meals"
                        value={meals}
                      />
                      <FactRow
                        icon={<Compass size={14} />}
                        label="Style"
                        value={tour.category}
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>



      {/* PRICING NOTE */}
      <section className="container-x mx-auto max-w-[1500px] py-16">
        <SectionHeading
          eyebrow="Pricing"
          title="Tailored to your package"
          intro="Every quotation is built around the accommodation package you choose. The route, activities and daily programme stay the same — only where you sleep changes."
        />
        <div className="mt-10 rounded-3xl border border-border bg-card/60 p-8 md:p-10 text-center">
          <p className="font-display text-2xl md:text-3xl leading-snug max-w-2xl mx-auto">
            {QUOTE_PLACEHOLDER}
          </p>
          <p className="mt-4 text-sm text-foreground/70 max-w-xl mx-auto">
            Share your preferred travel dates and party size and our team will confirm camps, lodges and a per-person rate for your selected {activeTier.label} package within 24 hours.
          </p>
          <div className="mt-6 flex justify-center">
            <PlanTripDialog
              destination={tour.destination}
              experienceTitle={`${tour.title} — ${activeTier.label}`}
              trigger={
                <button className="inline-flex items-center gap-2 rounded-full bg-[#827768] px-7 py-3.5 text-sm font-medium text-white hover:scale-[1.02] transition-transform">
                  Request a quotation <ArrowRight size={14} />
                </button>
              }
            />
          </div>
        </div>
      </section>


      {/* INCLUDED / EXCLUDED */}
      <section className="container-x mx-auto max-w-[1500px] py-16 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-border bg-card/60 p-8">
          <h3 className="font-display text-2xl">What's included</h3>
          <ul className="mt-6 space-y-3 text-sm">
            {tour.includes.map((i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-[#827768] text-white shrink-0">
                  <Check size={12} />
                </span>
                <span className="text-foreground/85">{i}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-border bg-card/60 p-8">
          <h3 className="font-display text-2xl">What's excluded</h3>
          <ul className="mt-6 space-y-3 text-sm">
            {tour.excludes.map((i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-foreground/10 text-foreground/60 shrink-0">
                  <X size={12} />
                </span>
                <span className="text-foreground/70">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x mx-auto max-w-[1500px] py-16">
        <SectionHeading eyebrow="FAQs" title="Good to know" />
        <Accordion type="single" collapsible className="mt-10 max-w-3xl mx-auto space-y-3">
          {tourFaqs(tour).map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-2xl border border-border bg-card/60 px-6"
            >
              <AccordionTrigger className="text-left font-display text-lg hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-foreground/75 leading-relaxed pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="container-x mx-auto max-w-[1500px] py-16">
          <SectionHeading eyebrow="Explore more" title="Related tours" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/tours/$slug"
                params={{ slug: r.slug }}
                className="group rounded-3xl overflow-hidden border border-border bg-card/60 hover:-translate-y-1 transition-all shadow-elevated"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-[#3D372F] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white">
                    {r.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-foreground/60 flex items-center gap-1.5">
                    <Compass size={12} /> {r.destination}
                  </p>
                  <h3 className="mt-2 font-display text-xl leading-tight">{r.title}</h3>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-foreground/65">
                      {r.days}D / {r.nights}N
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#827768] font-medium">
                      View Tour <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* BOOKING */}
      <BookingSection tour={tour} tier={activeTier.label} />
    </>
  );
}

function FactRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-[#827768]/15 text-[#827768] shrink-0">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/55">{label}</p>
        <p className="text-sm text-foreground/85 mt-0.5 break-words">{value}</p>
      </div>
    </div>
  );
}

function QuickFact({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 p-2">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-[#3D372F] text-white shrink-0">{icon}</span>
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/55">{label}</p>
        <p className="text-sm font-medium text-foreground truncate">{value}</p>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-[11px] uppercase tracking-[0.28em] text-[#827768]">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl leading-tight">{title}</h2>
      {intro && <p className="mt-4 text-sm md:text-base text-foreground/70 leading-relaxed">{intro}</p>}
    </div>
  );
}

type BookingValues = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  travelDate: string;
  adults: string;
  children: string;
  tier: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function BookingSection({ tour, tier }: { tour: Tour; tier: string }) {
  const initial: BookingValues = {
    fullName: "",
    email: "",
    phone: "",
    country: "",
    travelDate: "",
    adults: "2",
    children: "0",
    tier,
    message: `Interested in: ${tour.title}`,
  };
  const [values, setValues] = useState<BookingValues>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const set = <K extends keyof BookingValues>(k: K, v: BookingValues[K]) => {
    setValues((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: Partial<Record<keyof BookingValues, string>> = {};
    if (!values.fullName.trim()) next.fullName = "Please enter your full name.";
    if (!EMAIL_RE.test(values.email)) next.email = "Please enter a valid email.";
    if (!values.phone.trim()) next.phone = "Please enter a phone or WhatsApp number.";
    if (!values.travelDate) next.travelDate = "Please choose a date.";
    if (!values.adults || Number(values.adults) < 1) next.adults = "At least 1 adult.";
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("error");
      setErrorMsg("Please fix the highlighted fields.");
      return;
    }
    setStatus("submitting");
    setErrorMsg(null);
    try {
      await new Promise((r) => setTimeout(r, 800));
      // Future: POST to /send-booking.php
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="booking" className="container-x mx-auto max-w-[1500px] py-16">
      <div className="rounded-[2rem] overflow-hidden border border-border bg-card/60 shadow-elevated grid lg:grid-cols-[1.1fr_1fr]">
        <div className="relative min-h-[280px] lg:min-h-full">
          <img src={tour.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent" />
          <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end text-white">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">Book this tour</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl leading-tight">{tour.title}</h2>
            <p className="mt-4 text-sm text-white/80 max-w-md">
              Tell us about your trip and a Tanzania Exploration consultant will reply within 24 hours with a tailored quote.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 max-w-md text-sm">
              <div>
                <p className="text-white/60 text-[10px] uppercase tracking-[0.22em]">Duration</p>
                <p className="mt-1">{tour.days}D / {tour.nights}N</p>
              </div>
              <div>
                <p className="text-white/60 text-[10px] uppercase tracking-[0.22em]">From</p>
                <p className="mt-1">${tour.priceFrom.toLocaleString()} pp</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12">
          {status === "success" ? (
            <FormBanner variant="success">
              <strong className="font-medium">Thank you!</strong> Your booking request has been received. Our travel team will contact you within 24 hours.
            </FormBanner>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-4">
              {status === "error" && errorMsg && <FormBanner variant="error">{errorMsg}</FormBanner>}
              <div className="grid md:grid-cols-2 gap-4">
                <TextField label="Full name" name="fullName" required value={values.fullName} onChange={(v) => set("fullName", v)} error={errors.fullName} />
                <TextField label="Email" name="email" type="email" required value={values.email} onChange={(v) => set("email", v)} error={errors.email} />
                <TextField label="Phone / WhatsApp" name="phone" required inputMode="tel" value={values.phone} onChange={(v) => set("phone", v)} error={errors.phone} />
                <TextField label="Country" name="country" value={values.country} onChange={(v) => set("country", v)} error={errors.country} />
                <TextField label="Travel date" name="travelDate" type="date" required value={values.travelDate} onChange={(v) => set("travelDate", v)} error={errors.travelDate} />
                <SelectField
                  label="Accommodation"
                  name="tier"
                  value={values.tier}
                  onChange={(v) => set("tier", v)}
                  options={TIERS.map((t) => ({ value: t.label, label: t.label }))}
                />
                <TextField label="Adults" name="adults" type="number" required min={1} max={20} value={values.adults} onChange={(v) => set("adults", v)} error={errors.adults} />
                <TextField label="Children" name="children" type="number" min={0} max={20} value={values.children} onChange={(v) => set("children", v)} error={errors.children} />
              </div>
              <TextAreaField label="Message" name="message" rows={4} value={values.message} onChange={(v) => set("message", v)} />
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-2 rounded-full bg-[#827768] px-7 py-3.5 text-sm font-medium text-white disabled:opacity-60 hover:scale-[1.02] transition-transform"
                >
                  {status === "submitting" ? "Sending…" : (<>Request my trip <Send size={14} /></>)}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
