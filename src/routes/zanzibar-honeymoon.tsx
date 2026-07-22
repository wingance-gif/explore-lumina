import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Check, Heart, X } from "lucide-react";
import { IMAGES } from "@/content/site";

export const Route = createFileRoute("/zanzibar-honeymoon")({
  head: () => ({
    meta: [
      { title: "Zanzibar Luxury Honeymoon Itinerary | Sahara Wild" },
      {
        name: "description",
        content:
          "A romantic 7-day Zanzibar luxury honeymoon itinerary — Stone Town, spice tours, private beach villa, Mnemba snorkelling, sunset dhow cruise and candle-lit dinners.",
      },
      { property: "og:title", content: "Zanzibar Luxury Honeymoon Itinerary" },
      {
        property: "og:description",
        content:
          "Seven days of romance on the Spice Island — private villa, turquoise reefs, and unforgettable sunsets.",
      },
      { property: "og:image", content: IMAGES.zanzibar.beach4 },
      { property: "og:url", content: "/zanzibar-honeymoon" },
    ],
    links: [{ rel: "canonical", href: "/zanzibar-honeymoon" }],
  }),
  component: ZanzibarHoneymoonPage,
});

type Day = {
  day: number;
  title: string;
  location?: string;
  body: string;
};

type HoneymoonPackage = {
  id: string;
  name: string;
  tagline: string;
  image: string;
  overviewImage: string;
  duration: string;
  difficulty: string;
  bestTime: string;
  overview: string;
  highlights: string[];
  days: Day[];
  includes: string[];
  excludes: string[];
};

const ZANZIBAR_HONEYMOON: HoneymoonPackage = {
  id: "zanzibar-luxury-honeymoon",
  name: "Zanzibar Luxury Honeymoon",
  tagline: "Seven days of romance on the Spice Island",
  image: IMAGES.zanzibar.beach4,          // Hero image (Honeymoon2.png)
  overviewImage: IMAGES.zanzibar.stoneTown3, // Second image (Honeymoon1.png)
  duration: "7 days / 6 nights",
  difficulty: "Relaxed — designed for unwinding",
  bestTime: "Jun–Mar (dry season, clearest seas; avoid long rains Apr–May)",
  overview:
    "Begin your new chapter together on Zanzibar's powder-white beaches. This curated honeymoon pairs the rich history of Stone Town with barefoot luxury on the island's north-eastern coast. Expect private dinners under the stars, couples' spa rituals, a sunrise snorkel at Mnemba Atoll, and sunsets aboard a traditional dhow.",
  highlights: [
    "Private beachfront villa with plunge pool",
    "Sunset dhow cruise with champagne",
    "Couples' massage and spice-infused spa ritual",
    "Mnemba Atoll snorkelling — turquoise reefs, turtles, dolphins",
    "Candle-lit dinner on the sand",
    "Guided Stone Town and spice plantation tour",
  ],
  days: [
    {
      day: 1,
      title: "Arrive Zanzibar → Stone Town",
      location: "Stone Town",
      body: "Fly into Zanzibar International Airport and transfer to a boutique hotel in the heart of Stone Town. Afternoon at leisure — wander the winding alleys, visit the old slave market, or sip spiced coffee at a rooftop café. Welcome dinner at a heritage restaurant overlooking the harbour.",
    },
    {
      day: 2,
      title: "Stone Town & Spice Tour",
      location: "Stone Town → Central Zanzibar",
      body: "Morning guided walking tour of Stone Town — the House of Wonders, Sultan's Palace, and Freddie Mercury's childhood home. After lunch, drive to a working spice plantation. Taste fresh vanilla, cinnamon, cloves and nutmeg straight from the tree. Learn why Zanzibar is called the Spice Island.",
    },
    {
      day: 3,
      title: "Transfer to the Beach → Sunset Dhow",
      location: "Nungwi / Kendwa",
      body: "Scenic drive across the island to your private beachfront villa on the north coast. Afternoon to settle in, dip in the plunge pool, and walk the endless white beach. At 17:00, board a traditional wooden dhow for a sunset cruise with champagne and canapés — the perfect honeymoon photo moment.",
    },
    {
      day: 4,
      title: "Mnemba Atoll Snorkelling",
      location: "Mnemba Atoll",
      body: "Early morning boat trip to Mnemba Atoll — a protected marine reserve with some of East Africa's finest coral reefs. Snorkel alongside sea turtles, colourful reef fish, and if you're lucky, spinner dolphins. Fresh fruit and pastries served on board. Return to the villa for an afternoon of beach relaxation.",
    },
    {
      day: 5,
      title: "Spa Day & Private Beach Dinner",
      location: "Beach Villa",
      body: "A slow morning followed by a couples' spa ritual — spice-infused body scrub, seaweed wrap, and side-by-side massage in an open-air pavilion. Late afternoon, your butler prepares a private candle-lit table on the sand. Dine on grilled lobster, coconut rice and tropical fruit as the tide gently laps the shore.",
    },
    {
      day: 6,
      title: "Jozani Forest & Free Beach Day",
      location: "Jozani Chwaka Bay → Beach Villa",
      body: "Optional morning excursion to Jozani Forest to see the rare red colobus monkeys — found only on Zanzibar. Return to the villa by midday for a final afternoon of sun, sea and cocktails. Sunset yoga on the beach or a last swim in the warm Indian Ocean.",
    },
    {
      day: 7,
      title: "Farewell Breakfast → Departure",
      location: "Zanzibar International Airport",
      body: "A leisurely breakfast in the villa or on your private terrace. Transfer to the airport with a gift bag of Zanzibar spices and memories to last a lifetime. Optional: extend with a safari on the mainland.",
    },
  ],
  includes: [
    "Airport transfers and all ground transport",
    "1 night boutique hotel in Stone Town (BB)",
    "5 nights private beachfront villa with plunge pool (half board)",
    "Sunset dhow cruise with champagne & canapés",
    "Mnemba Atoll snorkelling excursion with marine guide",
    "Guided Stone Town walking tour",
    "Spice plantation tour with tastings",
    "Couples' 90-minute spa ritual",
    "Private candle-lit beach dinner",
    "All entrance fees and local taxes",
  ],
  excludes: [
    "International flights to Zanzibar",
    "Travel insurance (required)",
    "Lunches and dinners not specified",
    "Alcoholic drinks outside included meals",
    "Scuba diving (available at extra cost)",
    "Tips for guides, drivers and villa staff",
    "Personal expenses and souvenirs",
  ],
};

function ZanzibarHoneymoonPage() {
  const pkg = ZANZIBAR_HONEYMOON;

  return (
    <>
      {/* HERO */}
      <section className="relative h-[70svh] min-h-[480px] w-full overflow-hidden">
        <img
          src={pkg.image}
          alt="Zanzibar luxury honeymoon"
          className="absolute inset-0 h-full w-full object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background" />
        <div className="relative z-10 container-x mx-auto max-w-[1500px] h-full flex flex-col justify-end pb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-white/80">Honeymoon Itinerary</p>
          <h1 className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white text-balance max-w-4xl">
            Zanzibar Luxury Honeymoon
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-white/85">
            Seven days of romance on the Spice Island — private villa, turquoise reefs, and unforgettable sunsets.
          </p>
        </div>
      </section>

      {/* PACKAGE OVERVIEW */}
      <section className="container-x mx-auto max-w-[1500px] py-20">
        <div className="grid lg:grid-cols-3 gap-10 mb-14">
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">{pkg.tagline}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">{pkg.name}</h2>
            <p className="mt-6 text-base md:text-lg text-foreground/80 leading-relaxed">
              {pkg.overview}
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm">
              {pkg.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-foreground/80">
                  <Heart size={16} className="text-primary shrink-0 mt-0.5" /> {h}
                </li>
              ))}
            </ul>
          </div>
          <aside className="glass-strong rounded-2xl p-6 space-y-4 h-fit">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/60">Duration</p>
              <p className="mt-1 font-display text-lg">{pkg.duration}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/60">Pace</p>
              <p className="mt-1 text-sm">{pkg.difficulty}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/60">Best time</p>
              <p className="mt-1 text-sm">{pkg.bestTime}</p>
            </div>
          </aside>
        </div>

        <div className="rounded-2xl overflow-hidden aspect-[21/9] mb-12">
          <img
            src={pkg.overviewImage}
            alt={pkg.name}
            loading="lazy"
            className="h-full w-full object-cover"
            />
        </div>

        {/* Day-by-day */}
        <h3 className="font-display text-2xl md:text-3xl mb-8">Day-by-day itinerary</h3>
        <ol className="space-y-5">
          {pkg.days.map((d) => (
            <li key={d.day} className="glass rounded-2xl p-6 md:p-7 flex gap-5">
              <div className="shrink-0 grid h-12 w-12 place-items-center rounded-full bg-[#827768] text-primary-foreground font-display text-lg">
                {d.day}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-display text-xl">{d.title}</h4>
                {d.location && (
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[12px] uppercase tracking-[0.15em] text-foreground/85">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={11} /> {d.location}
                    </span>
                  </div>
                )}
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{d.body}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Includes / Excludes */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="font-display text-2xl">What's included</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {pkg.includes.map((i) => (
                <li key={i} className="flex gap-3">
                  <Check size={16} className="text-primary shrink-0 mt-0.5" /> {i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-2xl">Not included</h3>
            <ul className="mt-5 space-y-3 text-sm text-foreground/70">
              {pkg.excludes.map((i) => (
                <li key={i} className="flex gap-3">
                  <X size={16} className="text-foreground/40 shrink-0 mt-0.5" /> {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/plan-my-trip"
            className="inline-flex items-center gap-2 rounded-full bg-[#827768] px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow-lime hover:scale-[1.02] transition-transform"
          >
            Plan this honeymoon <ArrowRight size={14} />
          </Link>
          <a
            href="https://wa.me/255686166360"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm hover:bg-surface-elevated transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
