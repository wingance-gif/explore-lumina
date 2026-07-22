import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Calendar, Check, MapPin, X } from "lucide-react";
import { IMAGES } from "@/content/site";
import { PlanTripDialog } from "@/components/site/PlanTripDialog";

export const Route = createFileRoute("/safari-itineraries")({
  head: () => ({
    meta: [
      { title: "Tanzania Safari Itineraries — 11 Safari Styles | Tanzania Exploration" },
      {
        name: "description",
        content:
          "Day-by-day itineraries for every safari style — luxury, tented, camping, birding, honeymoon, flying, family, photographic, migration, balloon and walking safaris in Tanzania.",
      },
      { property: "og:title", content: "Tanzania Safari Itineraries" },
      {
        property: "og:description",
        content: "Detailed itineraries for all 11 Tanzania safari styles — pick your pace.",
      },
      { property: "og:image", content: IMAGES.heroSerengeti },
      { property: "og:url", content: "/safari-itineraries" },
    ],
    links: [{ rel: "canonical", href: "/safari-itineraries" }],
  }),
  component: SafariItinerariesPage,
});

type Day = { day: number; title: string; body: string };
type Safari = {
  id: string;
  name: string;
  tagline: string;
  image: string;
  duration: string;
  bestFor: string;
  bestTime: string;
  overview: string;
  highlights: string[];
  days: Day[];
  includes: string[];
  excludes: string[];
};

const SAFARIS: Safari[] = [
  {
    id: "safari-luxury",
    name: "Tanzania Luxury Safari",
    tagline: "Private guides, premier lodges, exclusive-use camps.",
    image: IMAGES.safariTypes.luxury,
    duration: "7 days / 6 nights",
    bestFor: "Discerning travellers, couples, milestone trips",
    bestTime: "June – October, January – March",
    overview:
      "Refined comfort without compromise — private 4×4, senior guide, hand-picked luxury lodges and camps across Tarangire, Serengeti and Ngorongoro.",
    highlights: ["Private senior guide", "Exclusive-use luxury camps", "Bush breakfasts", "Sundowners on the plains"],
    days: [
      { day: 1, title: "Arrive Arusha", body: "Private transfer from Kilimanjaro Airport. Welcome dinner at a boutique coffee-estate lodge." },
      { day: 2, title: "Tarangire", body: "Full-day game drive among ancient baobabs and elephant herds. Overnight at a luxury lodge on the escarpment." },
      { day: 3, title: "Karatu / Manyara", body: "Forest game drive at Lake Manyara, then to a Ngorongoro highlands lodge with crater-rim views." },
      { day: 4, title: "Ngorongoro Crater", body: "Full-day descent into the caldera — Big Five viewing, picnic lunch on the crater floor." },
      { day: 5, title: "Central Serengeti", body: "Drive via Olduvai Gorge to a luxury tented camp in the Seronera valley." },
      { day: 6, title: "Serengeti", body: "Dawn-to-dusk game drives. Optional bush breakfast and sunset gin & tonics." },
      { day: 7, title: "Fly out", body: "Charter flight from Seronera airstrip to Arusha or Zanzibar." },
    ],
    includes: ["Private 4×4 with pop-top", "Senior guide", "All park fees", "Full-board luxury lodging", "Charter flight out"],
    excludes: ["International flights", "Visa", "Premium alcohol", "Tips"],
  },
  {
    id: "safari-tented-lodge",
    name: "Tented Lodge Safari",
    tagline: "Canvas-under-the-stars romance with hotel-grade comfort.",
    image: IMAGES.safariTypes.tentedLodge,
    duration: "6 days / 5 nights",
    bestFor: "Couples, first-time safari-goers who want authenticity + comfort",
    bestTime: "June – October, January – March",
    overview:
      "Permanent tented lodges combine the sound of the bush at night with proper beds, ensuite bathrooms and gourmet meals.",
    highlights: ["Ensuite tented suites", "Fire-lit dinners", "Big Five game viewing", "Karatu highlands stay"],
    days: [
      { day: 1, title: "Arusha → Tarangire", body: "Afternoon game drive, overnight in a permanent tented camp overlooking the river." },
      { day: 2, title: "Tarangire → Karatu", body: "Morning game drive, transfer to a highland tented lodge with valley views." },
      { day: 3, title: "Ngorongoro Crater", body: "Full-day crater descent, return to the highlands." },
      { day: 4, title: "Serengeti", body: "Drive into the central Serengeti; sunset game drive to your tented camp." },
      { day: 5, title: "Serengeti", body: "Full-day game drives across the Seronera plains." },
      { day: 6, title: "Return to Arusha", body: "Morning drive, fly or road back to Arusha." },
    ],
    includes: ["Tented lodge stays", "4×4 with pop-top", "Guide", "Park fees", "All meals"],
    excludes: ["Flights", "Visa", "Tips", "Drinks"],
  },
  {
    id: "safari-camping",
    name: "Tanzania Camping Safari",
    tagline: "Closer to the wild — canvas, campfires and camp-chef cooking.",
    image: IMAGES.safariTypes.camping,
    duration: "6 days / 5 nights",
    bestFor: "Adventurous travellers, families, backpackers",
    bestTime: "Year-round (dry months preferred)",
    overview:
      "Public campsites inside the national parks — spacious dome tents, hot bucket showers, camp-chef meals and the raw sound of Africa outside your zip.",
    highlights: ["Sleep inside the parks", "Camp-fire dinners", "Camp chef & guide", "Big Five viewing on a budget"],
    days: [
      { day: 1, title: "Arusha → Tarangire camp", body: "Afternoon game drive, campfire dinner under baobabs." },
      { day: 2, title: "Tarangire → Serengeti", body: "Long transfer with game viewing; overnight at Seronera public campsite." },
      { day: 3, title: "Serengeti", body: "Full-day game drives." },
      { day: 4, title: "Serengeti", body: "Northern plains or Moru kopjes exploration." },
      { day: 5, title: "Serengeti → Ngorongoro", body: "Drive to Simba campsite on the crater rim." },
      { day: 6, title: "Crater → Arusha", body: "Half-day crater descent, return." },
    ],
    includes: ["All camping gear", "Cook & guide", "All meals", "Park & camping fees"],
    excludes: ["Sleeping bag rental", "Flights", "Tips"],
  },
  {
    id: "safari-bird-watching",
    name: "Bird Watching Safari",
    tagline: "1,100+ species — a paradise for birders.",
    image: IMAGES.safariTypes.birding,
    duration: "5 days / 4 nights",
    bestFor: "Birders, naturalists, photographers",
    bestTime: "November – April (migratory season)",
    overview:
      "Dawn and dusk drives across Tarangire, Lake Manyara and the Rift Valley lakes — led by a specialist birding guide with a scope.",
    highlights: ["550+ species in Tarangire alone", "Flamingos on Manyara", "Specialist guide with scope", "Yellow-collared lovebird"],
    days: [
      { day: 1, title: "Arusha → Tarangire", body: "Afternoon birding drive — hornbills, lovebirds, raptors." },
      { day: 2, title: "Tarangire", body: "Full-day birding in the acacia woodlands and along the river." },
      { day: 3, title: "Tarangire → Lake Manyara", body: "Flamingos, pelicans and forest specials on the escarpment." },
      { day: 4, title: "Manyara → Ngorongoro", body: "Highland forest birding, then to the crater rim." },
      { day: 5, title: "Crater floor → Arusha", body: "Morning crater descent — bustards, crowned cranes — return to Arusha." },
    ],
    includes: ["Specialist birding guide", "4×4 with pop-top", "Park fees", "Lodges", "All meals"],
    excludes: ["Binoculars & scopes", "Flights", "Tips"],
  },
  {
    id: "safari-honeymoon",
    name: "Honeymoon Safari",
    tagline: "Bush romance and beach bliss.",
    image: IMAGES.safariTypes.honeymoon,
    duration: "10 days / 9 nights",
    bestFor: "Couples, honeymooners, anniversaries",
    bestTime: "June – October, January – March",
    overview:
      "Private safari through the Northern Circuit, then Zanzibar — plunge pools, candle-lit beach dinners and a sunset dhow.",
    highlights: ["Private vehicle throughout", "Couples' bush dinner", "Zanzibar beach villa", "Sunset dhow cruise"],
    days: [
      { day: 1, title: "Arrive Arusha", body: "Champagne welcome, boutique lodge on a coffee estate." },
      { day: 2, title: "Tarangire", body: "Game drive, sundowner picnic on a private kopje." },
      { day: 3, title: "Ngorongoro Crater", body: "Full day in the caldera, crater-rim lodge." },
      { day: 4, title: "Serengeti", body: "Fly in for a two-night stay at a romantic tented camp." },
      { day: 5, title: "Serengeti", body: "Bush breakfast, spa, sunset game drive." },
      { day: 6, title: "Fly to Zanzibar", body: "Charter to the archipelago; transfer to a beachfront villa." },
      { day: 7, title: "Zanzibar", body: "Couples' spa, private beach dinner on the sand." },
      { day: 8, title: "Zanzibar", body: "Mnemba Atoll snorkelling or free day at the villa." },
      { day: 9, title: "Zanzibar", body: "Sunset dhow with champagne." },
      { day: 10, title: "Departure", body: "Transfer to Zanzibar International Airport." },
    ],
    includes: ["Internal flights", "Private 4×4", "Beach villa with breakfast", "Sunset dhow", "All park fees"],
    excludes: ["International flights", "Lunch/dinner on Zanzibar", "Tips"],
  },
  {
    id: "safari-flying",
    name: "Flying Safari",
    tagline: "Maximise wildlife time with light-aircraft transfers.",
    image: IMAGES.safariTypes.flying,
    duration: "7 days / 6 nights",
    bestFor: "Time-poor travellers, connections to remote parks",
    bestTime: "June – October (best flight conditions)",
    overview:
      "Fly between Serengeti, Selous (Nyerere) and Ruaha — skip the long drives, land on airstrips inside the parks and step straight into a game vehicle.",
    highlights: ["Light-aircraft transfers", "Remote camps", "3 ecosystems in one week", "Zero road transfer days"],
    days: [
      { day: 1, title: "Arusha → Serengeti", body: "Morning flight to Seronera; afternoon game drive." },
      { day: 2, title: "Serengeti", body: "Full-day drives across the central plains." },
      { day: 3, title: "Fly Serengeti → Selous / Nyerere", body: "Cross-country transfer; afternoon boat safari on the Rufiji." },
      { day: 4, title: "Selous", body: "Walking safari and 4×4 game drive." },
      { day: 5, title: "Fly Selous → Ruaha", body: "Afternoon game drive in Tanzania's second-largest park." },
      { day: 6, title: "Ruaha", body: "Full-day drive — giant baobabs, big cats, elephants." },
      { day: 7, title: "Ruaha → Dar es Salaam", body: "Fly out for international connection or Zanzibar extension." },
    ],
    includes: ["All internal flights", "Camp transfers", "Guide & vehicle in each camp", "Full-board", "Park fees"],
    excludes: ["International flights", "Premium drinks", "Tips"],
  },
  {
    id: "safari-family",
    name: "Family Safari",
    tagline: "Tailored pace, kid-friendly lodges, family-rated guides.",
    image: IMAGES.safariTypes.family,
    duration: "8 days / 7 nights",
    bestFor: "Families with kids 6+, multi-generational trips",
    bestTime: "School holidays; June – October best for wildlife",
    overview:
      "Shorter game drives, kid-friendly lodges with pools, cultural visits and hands-on activities — designed to keep every generation engaged.",
    highlights: ["Family suites & connecting rooms", "Junior ranger programmes", "Maasai village visit", "Pool time between drives"],
    days: [
      { day: 1, title: "Arrive Arusha", body: "Rest at a garden lodge with a pool." },
      { day: 2, title: "Arusha National Park", body: "Half-day walking safari — giraffe and colobus monkeys, no big cats." },
      { day: 3, title: "Tarangire", body: "Half-day drive, then pool afternoon at a family-friendly lodge." },
      { day: 4, title: "Karatu", body: "Coffee farm tour and cultural walk with a local guide." },
      { day: 5, title: "Ngorongoro Crater", body: "Full-day crater descent — Big Five with picnic lunch." },
      { day: 6, title: "Serengeti", body: "Drive to central Serengeti; junior ranger briefing at camp." },
      { day: 7, title: "Serengeti", body: "Morning game drive, afternoon pool and bush skills workshop." },
      { day: 8, title: "Fly to Arusha", body: "Charter home or connect to Zanzibar." },
    ],
    includes: ["Family suites", "Private 4×4", "Kid-rated guide", "All meals", "Park fees"],
    excludes: ["Flights", "Visa", "Tips"],
  },
  {
    id: "safari-photographic",
    name: "Photographic Safari",
    tagline: "Golden hour, bean bags and guides who know the light.",
    image: IMAGES.safariTypes.photographic,
    duration: "8 days / 7 nights",
    bestFor: "Serious photographers, content creators",
    bestTime: "January – March (calving) & June – October (migration)",
    overview:
      "Dedicated photo vehicles (max 4 guests, 360° swivel seats, bean bags, charging), and photo-savvy guides who position for light and eye-line.",
    highlights: ["Max 4 guests per vehicle", "Bean bags & charging inbuilt", "Off-road permits (Ndutu)", "Dawn & dusk priority"],
    days: [
      { day: 1, title: "Arusha", body: "Gear check, briefing with your photo guide." },
      { day: 2, title: "Tarangire", body: "Elephant portraiture in golden light." },
      { day: 3, title: "Ngorongoro Crater", body: "Big Five and wide-angle landscapes." },
      { day: 4, title: "Ndutu (Feb–Mar) or Central Serengeti", body: "Off-road permit for predator action." },
      { day: 5, title: "Serengeti", body: "Full day tracking cats and cheetah cubs." },
      { day: 6, title: "Northern Serengeti", body: "Migration river crossings (Jul–Oct)." },
      { day: 7, title: "Serengeti", body: "Balloon safari at sunrise, aerial images." },
      { day: 8, title: "Fly home", body: "Charter from Kogatende or Seronera." },
    ],
    includes: ["Photo vehicle (max 4)", "Photo guide", "Bean bags & charging", "Off-road permits where legal", "All park fees"],
    excludes: ["Camera hire", "International flights", "Tips"],
  },
  {
    id: "safari-migration",
    name: "Wildebeest Migration Safari",
    tagline: "Follow 1.5 million wildebeest across the Serengeti.",
    image: IMAGES.safariTypes.migration,
    duration: "7 days / 6 nights",
    bestFor: "Wildlife enthusiasts, first-time migration viewers",
    bestTime: "Feb (calving) · Apr–Jun (rut) · Jul–Oct (river crossings)",
    overview:
      "A mobile itinerary that follows the herds — Ndutu in the south for calving, western corridor for the rut, or Kogatende in the north for the Mara River crossings.",
    highlights: ["Mobile migration camp", "Predator action alongside herds", "Timed to the herds", "Kogatende river-crossing hides"],
    days: [
      { day: 1, title: "Arusha → Central Serengeti", body: "Fly to Seronera, afternoon game drive." },
      { day: 2, title: "Follow the herds", body: "Drive to whichever zone the herds are in — Ndutu, western corridor or Kogatende." },
      { day: 3, title: "Migration camp", body: "Full-day drives with the herds and predators." },
      { day: 4, title: "River crossings (Jul–Oct)", body: "Position at Mara River hides for the crossings." },
      { day: 5, title: "Migration camp", body: "Second day tracking the herds." },
      { day: 6, title: "Serengeti", body: "Big cat morning drive." },
      { day: 7, title: "Fly out", body: "Charter to Arusha or Zanzibar." },
    ],
    includes: ["Mobile migration camp", "Charter flights", "Full-board", "Park fees"],
    excludes: ["International flights", "Premium drinks", "Tips"],
  },
  {
    id: "safari-balloon",
    name: "Balloon Safari",
    tagline: "Float silently over the Serengeti at dawn.",
    image: IMAGES.safariTypes.balloon,
    duration: "Add-on — 1 morning (from any Serengeti safari)",
    bestFor: "Everyone — the classic once-in-a-lifetime add-on",
    bestTime: "Year-round in central Serengeti; seasonal north/south",
    overview:
      "A one-hour hot-air balloon flight at dawn over the Serengeti plains, followed by a sparkling champagne bush breakfast under an acacia.",
    highlights: ["60-min sunrise flight", "Champagne bush breakfast", "Aerial photography", "Certificate of flight"],
    days: [
      { day: 1, title: "Pre-dawn pickup", body: "0430 collection from your camp. Transfer to the launch site." },
      { day: 1, title: "Sunrise flight", body: "0600 lift-off. One hour aloft over the plains, herds and predators below." },
      { day: 1, title: "Bush breakfast", body: "Champagne toast and full cooked breakfast on the plains. Certificate. Rejoin your safari." },
    ],
    includes: ["Transfers to/from launch", "60-min flight", "Bush breakfast with champagne", "Certificate"],
    excludes: ["Photography services", "Tips for the pilot"],
  },
  {
    id: "safari-walking",
    name: "Guided Walking Safari",
    tagline: "Walk with armed rangers and Maasai trackers.",
    image: IMAGES.safariTypes.walking,
    duration: "5 days / 4 nights",
    bestFor: "Repeat safari-goers, adventurous walkers, naturalists",
    bestTime: "June – October (dry, cool)",
    overview:
      "Combine walking sections in Arusha NP, the Ngorongoro highlands and Serengeti (with an armed ranger) with 4×4 game drives — the small details game vehicles miss.",
    highlights: ["Armed ranger escort", "Maasai tracker", "Track & scat identification", "Fly-camping option"],
    days: [
      { day: 1, title: "Arusha NP walk", body: "Half-day walk to Momella Lakes with a park ranger." },
      { day: 2, title: "Ngorongoro highlands", body: "Full-day walk on Empakaai crater rim with a Maasai guide." },
      { day: 3, title: "Serengeti walking sector", body: "Fly in; afternoon walk with an armed ranger from a walking camp." },
      { day: 4, title: "Serengeti", body: "Sunrise walk, midday game drive, sunset walk." },
      { day: 5, title: "Fly to Arusha", body: "Return via Seronera airstrip." },
    ],
    includes: ["Armed ranger fees", "Walking guide", "Charter flights", "Full-board", "Park fees"],
    excludes: ["International flights", "Hiking boots", "Tips"],
  },
];

function SafariItinerariesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-16 container-x mx-auto max-w-[1500px]">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Itineraries</p>
        <h1 className="mt-5 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance max-w-4xl">
          Eleven safari styles. Every one, day-by-day.
        </h1>
        <p className="mt-8 max-w-2xl text-base md:text-lg text-foreground/75">
          Pick a style — luxury, tented, camping, birding, honeymoon, flying, family, photographic,
          migration, balloon or walking — and see exactly how the days unfold. Every itinerary is
          a starting point; we'll tailor it to your dates, pace and interests.
        </p>
      </section>

      {/* JUMP NAV */}
      <nav className="sticky top-20 z-30 border-y border-border/40 bg-background/85 backdrop-blur-md">
        <div className="container-x mx-auto max-w-[1500px] py-3">
          <ul className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-professional scroll-smooth">
            {SAFARIS.map((s) => (
              <li key={s.id} className="shrink-0">
                <a
                  href={`#${s.id}`}
                  className="inline-block rounded-full border border-border px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-foreground/80 hover:bg-primary hover:text-white hover:border-primary transition-colors whitespace-nowrap"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* SECTIONS */}
      <div className="container-x mx-auto max-w-[1500px] py-16 space-y-24">
        {SAFARIS.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-40 ${i > 0 ? "border-t border-border/40 pt-16" : ""}`}
          >
            {/* Header row */}
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
              <div className="relative overflow-hidden rounded-2xl border border-border">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className="h-full w-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[11px] uppercase tracking-[0.3em] text-primary">Safari style {i + 1} / 11</p>
                <h2 className="mt-3 font-display text-4xl md:text-5xl">{s.name}</h2>
                <p className="mt-3 text-base md:text-lg text-foreground/75 italic">{s.tagline}</p>
                <p className="mt-5 text-sm md:text-base text-foreground/80 leading-relaxed">{s.overview}</p>

                <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="rounded-lg border border-border p-3">
                    <dt className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-foreground/60">
                      <Calendar size={14} className="text-primary" /> Duration
                    </dt>
                    <dd className="mt-1 text-foreground/90">{s.duration}</dd>
                  </div>
                  <div className="rounded-lg border border-border p-3">
                    <dt className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-foreground/60">
                      <MapPin size={14} className="text-primary" /> Best for
                    </dt>
                    <dd className="mt-1 text-foreground/90">{s.bestFor}</dd>
                  </div>
                  <div className="rounded-lg border border-border p-3">
                    <dt className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-foreground/60">
                      <Calendar size={14} className="text-primary" /> Best time
                    </dt>
                    <dd className="mt-1 text-foreground/90">{s.bestTime}</dd>
                  </div>
                </dl>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.highlights.map((h) => (
                    <li key={h} className="text-[10px] uppercase tracking-[0.18em] rounded-full border border-primary/40 px-3 py-1 text-foreground/85">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Days */}
            <div className="mt-10">
              <h3 className="font-display text-2xl md:text-3xl">Day by day</h3>
              <ol className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {s.days.map((d, di) => (
                  <li key={`${s.id}-${di}`} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-center gap-3">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-white text-xs font-medium">
                        {d.day}
                      </span>
                      <p className="font-display text-lg leading-tight">{d.title}</p>
                    </div>
                    <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{d.body}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Includes / excludes */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border p-5">
                <h4 className="flex items-center gap-2 font-display text-lg">
                  <Check size={16} className="text-primary" /> What's included
                </h4>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
                  {s.includes.map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <Check size={14} className="mt-0.5 shrink-0 text-primary" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border p-5">
                <h4 className="flex items-center gap-2 font-display text-lg">
                  <X size={16} className="text-foreground/60" /> Not included
                </h4>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
                  {s.excludes.map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <X size={14} className="mt-0.5 shrink-0 text-foreground/50" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/plan-my-trip"
                className="inline-flex items-center gap-2 rounded-sm bg-[#827768] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white hover:scale-[1.02] transition-transform"
              >
                Plan this safari <ArrowRight size={14} />
              </Link>
              <a
                href="#top"
                className="text-[11px] uppercase tracking-[0.25em] text-foreground/60 hover:text-primary transition-colors"
              >
                ↑ Back to top
              </a>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
