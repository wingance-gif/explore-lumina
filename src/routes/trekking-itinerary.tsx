import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Check, Mountain, X } from "lucide-react";
// import kilimanjaroAsset from "@/assets/tours/kilimanjaro.jpg.asset.json";
// import meruAsset from "@/assets/tours/meru.jpg.asset.json";
import { IMAGES } from "@/content/site";

export const Route = createFileRoute("/trekking-itinerary")({
  head: () => ({
    meta: [
      { title: "Kilimanjaro & Mount Meru Trekking Itineraries | Sahara Wild" },
      {
        name: "description",
        content:
          "Detailed day-by-day trekking itineraries for Mount Kilimanjaro (Machame 7-day) and Mount Meru (4-day) — routes, altitudes, distances, meals and what to expect.",
      },
      { property: "og:title", content: "Kilimanjaro & Mount Meru Trekking Itineraries" },
      {
        property: "og:description",
        content:
          "Full day-by-day plans for the Machame route on Kilimanjaro and the classic 4-day Mount Meru climb.",
      },
      { property: "og:image", content: IMAGES.trekking.kilimanjaro },
      { property: "og:url", content: "/trekking-itinerary" },
    ],
    links: [{ rel: "canonical", href: "/trekking-itinerary" }],
  }),
  component: TrekkingItineraryPage,
});

type Day = {
  day: number;
  title: string;
  from?: string;
  to?: string;
  distance?: string;
  hiking?: string;
  altitude?: string;
  zone?: string;
  body: string;
};

type Trek = {
  id: string;
  name: string;
  route: string;
  image: string;
  summitAltitude: string;
  duration: string;
  difficulty: string;
  bestTime: string;
  overview: string;
  highlights: string[];
  days: Day[];
  includes: string[];
  excludes: string[];
};

const KILIMANJARO: Trek = {
  id: "kilimanjaro",
  name: "Mount Kilimanjaro",
  route: "Machame Route — 7 days on the mountain",
  image: IMAGES.trekking.kilimanjaro,
  summitAltitude: "5,895 m / 19,341 ft (Uhuru Peak)",
  duration: "7 days / 6 nights on the mountain",
  difficulty: "Challenging — no technical climbing, altitude is the crux",
  bestTime: "Jan–mid Mar & Jun–Oct (dry seasons, clearest summit views)",
  overview:
    "The Machame — 'Whiskey' — route is the most scenic way up Kilimanjaro, and the seven-day version gives you the acclimatisation profile with the highest summit success rate. You'll pass through five distinct climate zones, from rainforest to arctic summit, and sleep in tented mountain camps.",
  highlights: [
    "Highest summit success rate on Kilimanjaro (7-day Machame)",
    "Climb-high, sleep-low acclimatisation on Lava Tower day",
    "Sunrise summit push from Barafu Camp to Uhuru Peak",
    "Full-service mountain crew: chef, guides, porters",
  ],
  days: [
    {
      day: 1,
      title: "Machame Gate → Machame Camp",
      from: "Machame Gate (1,800 m)",
      to: "Machame Camp (3,000 m)",
      distance: "11 km",
      hiking: "5–7 hours",
      zone: "Montane rainforest",
      body: "Morning briefing in Moshi, then a 45-minute drive to Machame Gate. After registration, you climb through dripping cloud-forest — colobus monkeys, giant heather, tree ferns — to Machame Camp on the forest edge. Hot dinner in the mess tent.",
    },
    {
      day: 2,
      title: "Machame Camp → Shira Camp",
      from: "Machame Camp (3,000 m)",
      to: "Shira 2 Camp (3,840 m)",
      distance: "5 km",
      hiking: "4–6 hours",
      zone: "Heath & moorland",
      body: "A shorter but steeper day. You leave the forest behind and climb a rocky ridge onto the Shira Plateau, one of the highest plateaus on earth. First open views of Kibo's ice-capped summit.",
    },
    {
      day: 3,
      title: "Shira → Lava Tower → Barranco Camp",
      from: "Shira 2 Camp (3,840 m)",
      to: "Barranco Camp (3,960 m)",
      distance: "10 km",
      hiking: "6–8 hours",
      zone: "Alpine desert",
      body: "The classic climb-high, sleep-low acclimatisation day. You ascend to Lava Tower at 4,630 m for lunch, then descend into the Barranco Valley past giant senecio and lobelia. You sleep at roughly the same altitude as the previous night, but your body has done the altitude work.",
    },
    {
      day: 4,
      title: "Barranco Camp → Karanga Camp",
      from: "Barranco Camp (3,960 m)",
      to: "Karanga Camp (4,035 m)",
      distance: "5 km",
      hiking: "4–5 hours",
      zone: "Alpine desert",
      body: "The morning starts with the Barranco Wall — a fun scramble that is easier than it looks. From the top you traverse a series of ridges and valleys to Karanga Camp. Short day by design — more time to acclimatise before the summit push.",
    },
    {
      day: 5,
      title: "Karanga → Barafu (High Camp)",
      from: "Karanga Camp (4,035 m)",
      to: "Barafu Camp (4,673 m)",
      distance: "4 km",
      hiking: "4–5 hours",
      zone: "Alpine desert",
      body: "A steady climb across dusty ridges to Barafu — 'ice' in Swahili — the launch pad for the summit. Early dinner, rest, and sleep at 19:00. You'll be woken at 23:00 for the summit push.",
    },
    {
      day: 6,
      title: "Summit day: Barafu → Uhuru Peak → Mweka Camp",
      from: "Barafu Camp (4,673 m)",
      to: "Uhuru Peak (5,895 m) → Mweka Camp (3,100 m)",
      distance: "18 km",
      hiking: "12–14 hours",
      zone: "Arctic summit → rainforest",
      body: "Head-torch on, warm layers, a slow pole-pole pace. You climb through the night to Stella Point (5,756 m) for sunrise, then continue along the crater rim to Uhuru Peak — the Roof of Africa. After summit photos you descend all the way to Mweka Camp for a well-earned dinner and a deep sleep at breathable altitude.",
    },
    {
      day: 7,
      title: "Mweka Camp → Mweka Gate → Moshi",
      from: "Mweka Camp (3,100 m)",
      to: "Mweka Gate (1,640 m)",
      distance: "10 km",
      hiking: "3–4 hours",
      zone: "Montane rainforest",
      body: "A gentle downhill through the forest. Tipping ceremony with your crew at the gate, summit certificates, and a transfer back to your hotel in Moshi for a hot shower and a cold Kilimanjaro beer.",
    },
  ],
  includes: [
    "Park fees, camping fees, rescue fees & 18% VAT",
    "Certified mountain guides, cook and porters",
    "All meals on the mountain (fresh, cooked daily)",
    "Quality four-season tents, mess tent, sleeping mats",
    "Airport transfers & 2 hotel nights in Moshi (before & after)",
    "Oximeter checks twice daily & emergency oxygen",
  ],
  excludes: [
    "International flights & Tanzania visa",
    "Personal climbing gear (rentable in Moshi)",
    "Travel & evacuation insurance (required)",
    "Tips for the mountain crew (guideline provided)",
    "Alcoholic drinks & personal expenses",
  ],
};

const MERU: Trek = {
  id: "meru",
  name: "Mount Meru",
  route: "Momella Route — 4 days on the mountain",
  image: IMAGES.trekking.meru,
  summitAltitude: "4,566 m / 14,980 ft (Socialist Peak)",
  duration: "4 days / 3 nights on the mountain",
  difficulty: "Moderate to challenging — steep summit ridge, real exposure",
  bestTime: "Jun–Feb (avoid the long rains of Mar–May)",
  overview:
    "Mount Meru is Tanzania's second-highest peak and the perfect acclimatisation climb before Kilimanjaro — or a rewarding trek in its own right. You walk through Arusha National Park with an armed ranger, sleep in mountain huts, and finish on a knife-edge crater rim with a front-row view of Kilimanjaro at sunrise.",
  highlights: [
    "Wildlife on foot: buffalo, giraffe, colobus monkeys on day 1",
    "Hut accommodation — no tents required",
    "Dramatic crater-rim summit ridge",
    "Sunrise view of Kilimanjaro from Socialist Peak",
  ],
  days: [
    {
      day: 1,
      title: "Momella Gate → Miriakamba Hut",
      from: "Momella Gate (1,500 m)",
      to: "Miriakamba Hut (2,514 m)",
      distance: "10 km",
      hiking: "4–5 hours",
      zone: "Savannah & montane forest",
      body: "Drive from Arusha to Momella Gate in Arusha National Park. With an armed ranger you walk past giraffe, warthog, waterbuck and often buffalo. The trail climbs steadily through open woodland to Miriakamba Hut for a hot lunch and an afternoon acclimatisation walk to Maio Falls or the Meru Crater viewpoint.",
    },
    {
      day: 2,
      title: "Miriakamba → Saddle Hut",
      from: "Miriakamba Hut (2,514 m)",
      to: "Saddle Hut (3,570 m)",
      distance: "5 km",
      hiking: "3–5 hours",
      zone: "Montane forest → heath",
      body: "A steep, steady climb through moss-draped forest to the tree line and up onto the saddle between Little Meru and the summit. Lunch at Saddle Hut, then an afternoon acclimatisation hike to the top of Little Meru (3,801 m) for sunset views — good preparation for summit day.",
    },
    {
      day: 3,
      title: "Summit day: Saddle Hut → Socialist Peak → Miriakamba",
      from: "Saddle Hut (3,570 m)",
      to: "Socialist Peak (4,566 m) → Miriakamba Hut (2,514 m)",
      distance: "15 km",
      hiking: "10–12 hours",
      zone: "Alpine → forest",
      body: "Wake at 01:00, on the trail by 02:00. You climb by head-torch along the dramatic crater rim, past Rhino Point and Cobra Point, to Socialist Peak for sunrise — Kilimanjaro floats above the clouds directly to the east. Descend the same route to Saddle Hut for breakfast, then continue down through the forest to Miriakamba Hut.",
    },
    {
      day: 4,
      title: "Miriakamba → Momella Gate → Arusha",
      from: "Miriakamba Hut (2,514 m)",
      to: "Momella Gate (1,500 m)",
      distance: "10 km",
      hiking: "3–4 hours",
      zone: "Forest & savannah",
      body: "A relaxed descent on the lower forest route with more chance of game sightings. Tipping ceremony at the gate, summit certificates, and transfer back to your hotel in Arusha.",
    },
  ],
  includes: [
    "Arusha National Park & hut fees",
    "Certified mountain guide, armed ranger, cook and porters",
    "All meals on the mountain",
    "Hut accommodation (Miriakamba & Saddle Hut)",
    "Airport transfers & hotel nights in Arusha (before & after)",
  ],
  excludes: [
    "International flights & Tanzania visa",
    "Personal climbing gear",
    "Travel & evacuation insurance (required)",
    "Tips for the mountain crew",
    "Alcoholic drinks & personal expenses",
  ],
};

const TREKS = [KILIMANJARO, MERU];

function TrekkingItineraryPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[70svh] min-h-[480px] w-full overflow-hidden">
        <img
          src={IMAGES.trekking.kilimanjaro}
          alt="Mount Kilimanjaro at sunrise"
          className="absolute inset-0 h-full w-full object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background" />
        <div className="relative z-10 container-x mx-auto max-w-[1500px] h-full flex flex-col justify-end pb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-white/80">Trekking Itineraries</p>
          <h1 className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white text-balance max-w-4xl">
            Kilimanjaro & Mount Meru — day by day
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-white/85">
            Two of Africa's most iconic climbs. Below are the full day-by-day itineraries we
            run, with altitudes, distances and what to expect on the trail.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#kilimanjaro"
              className="rounded-full glass px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-white hover:bg-white/10 transition-colors"
            >
              Kilimanjaro · 7 days
            </a>
            <a
              href="#meru"
              className="rounded-full glass px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-white hover:bg-white/10 transition-colors"
            >
              Mount Meru · 4 days
            </a>
          </div>
        </div>
      </section>

      {/* TREK SECTIONS */}
      {TREKS.map((trek, idx) => (
        <section
          key={trek.id}
          id={trek.id}
          className={`container-x mx-auto max-w-[1500px] py-20 scroll-mt-28 ${idx > 0 ? "border-t border-border/40" : ""}`}
        >
          <div className="grid lg:grid-cols-3 gap-10 mb-14">
            <div className="lg:col-span-2">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">{trek.route}</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">{trek.name}</h2>
              <p className="mt-6 text-base md:text-lg text-foreground/80 leading-relaxed">
                {trek.overview}
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm">
                {trek.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-foreground/80">
                    <Mountain size={16} className="text-primary shrink-0 mt-0.5" /> {h}
                  </li>
                ))}
              </ul>
            </div>
            <aside className="glass-strong rounded-2xl p-6 space-y-4 h-fit">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/60">Summit</p>
                <p className="mt-1 font-display text-lg">{trek.summitAltitude}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/60">Duration</p>
                <p className="mt-1 text-sm">{trek.duration}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/60">Difficulty</p>
                <p className="mt-1 text-sm">{trek.difficulty}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/60">Best time</p>
                <p className="mt-1 text-sm">{trek.bestTime}</p>
              </div>
            </aside>
          </div>

          <div className="rounded-2xl overflow-hidden aspect-[21/9] mb-12">
            <img
              src={trek.image}
              alt={trek.name}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Day-by-day */}
          <h3 className="font-display text-2xl md:text-3xl mb-8">Day-by-day itinerary</h3>
          <ol className="space-y-5">
            {trek.days.map((d) => (
              <li key={d.day} className="glass rounded-2xl p-6 md:p-7 flex gap-5">
                <div className="shrink-0 grid h-12 w-12 place-items-center rounded-full bg-gradient-accent text-primary-foreground font-display text-lg">
                  {d.day}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-display text-xl">{d.title}</h4>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[12px] uppercase tracking-[0.15em] text-foreground/85">
                    {d.distance && (
                      <span className="inline-flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-primary" /> {d.distance}
                      </span>
                    )}
                    {d.hiking && (
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={11} /> {d.hiking}
                      </span>
                    )}
                    {d.zone && (
                      <span className="inline-flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-primary" /> {d.zone}
                      </span>
                    )}
                  </div>
                  {(d.from || d.to) && (
                    <p className="mt-2 text-xs text-foreground/60">
                      {d.from} → {d.to}
                    </p>
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
                {trek.includes.map((i) => (
                  <li key={i} className="flex gap-3">
                    <Check size={16} className="text-primary shrink-0 mt-0.5" /> {i}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl">Not included</h3>
              <ul className="mt-5 space-y-3 text-sm text-foreground/70">
                {trek.excludes.map((i) => (
                  <li key={i} className="flex gap-3">
                    <X size={16} className="text-foreground/40 shrink-0 mt-0.5" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow-lime hover:scale-[1.02] transition-transform"
            >
              Plan this climb <ArrowRight size={14} />
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
      ))}
    </>
  );
}
