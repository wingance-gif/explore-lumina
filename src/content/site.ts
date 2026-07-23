// Locally delivered, authentic Tanzania photography.
const TANZANIA_PHOTO = "/images/tours";

export const IMAGES = {
  heroSerengeti: `${TANZANIA_PHOTO}/serengeti-new 1.png`,
  heroKilimanjaro: `${TANZANIA_PHOTO}/Mt.Kilimanjaro.png`,
  heroLuxuryCamp: `${TANZANIA_PHOTO}/serengeti.jpg`,
  heroZanzibar: `${TANZANIA_PHOTO}/nyerere.jpg`,
  heroNgorongoro: `${TANZANIA_PHOTO}/ngo.jpg`,
  wildLion: `${TANZANIA_PHOTO}/lake-manyara-new.png`,
  wildElephants: `${TANZANIA_PHOTO}/tarangire-new.jpg`,
  wildCheetah: `${TANZANIA_PHOTO}/serengeti.jpg`,
  maasai: `${TANZANIA_PHOTO}/meru.jpg`,
  balloonSafari: `${TANZANIA_PHOTO}/balloon1.png`,
  kilimanjaroTrek: `${TANZANIA_PHOTO}/kilimanjaro1.png`,
  luxuryPool: `${TANZANIA_PHOTO}/nyerere.jpg`,

  tour: {
  luxury6Days: `${TANZANIA_PHOTO}/tour-luxury-6-days.jpg`,
  honeymoon14Days: `${TANZANIA_PHOTO}/tour-honeymoon-14-days.png`,
  lodge3Days: `${TANZANIA_PHOTO}/tour-lodge-3-days.jpg`,
  camping6Days: `${TANZANIA_PHOTO}/tour-camping-6-days.png`,
  lodge4Days: `${TANZANIA_PHOTO}/tour-lodge-4-days.png`,
  birding5Days: `${TANZANIA_PHOTO}/tour-birding-5-days.png`,
  machame7Days: `${TANZANIA_PHOTO}/tour-machame-7-days.jpg`,
  lemosho8Days: `${TANZANIA_PHOTO}/tour-lemosho-8-days.jpg`,
  zanzibar5Days: `${TANZANIA_PHOTO}/tour-zanzibar-5-days.jpg`,
  balloonSafari: `${TANZANIA_PHOTO}/tour-balloon-safari.jpg`,
},

// ================= SAFARI TYPES =================
safariTypes: {
  luxury: `${TANZANIA_PHOTO}/safari-types/luxury-safari.png`,
  tentedLodge: `${TANZANIA_PHOTO}/safari-types/tent.png`,
  camping: `${TANZANIA_PHOTO}/safari-types/camping safari.png`,
  birding: `${TANZANIA_PHOTO}/safari-types/bird.png`,
  honeymoon: `${TANZANIA_PHOTO}/safari-types/Honeymoon1.png`,
  flying: `${TANZANIA_PHOTO}/safari-types/flying.png`,
  family: `${TANZANIA_PHOTO}/safari-types/family.png`,
  photographic: `${TANZANIA_PHOTO}/safari-types/photography.png`,
  migration: `${TANZANIA_PHOTO}/safari-types/migration.png`,
  balloon: `${TANZANIA_PHOTO}/safari-types/balloonsafari.png`,
  walking: `${TANZANIA_PHOTO}/safari-types/walking.png`,
},

// ================= TREKKING =================
trekking: {
  kilimanjaro: `${TANZANIA_PHOTO}/Mt.Kilimanjaro.png`,
  meru: `${TANZANIA_PHOTO}/Mount_Meru.jpeg`,
},

// ================= DAY TRIPS =================
dayTrips: {
  arusha: `${TANZANIA_PHOTO}/arusha-day.jpg`,
  kikuletwa: `${TANZANIA_PHOTO}/kikuletwa.png`,
  manyara: `${TANZANIA_PHOTO}/manyara-day.png`,
  materuniFalls: `${TANZANIA_PHOTO}/materuni-falls.png`,
  tarangire: `${TANZANIA_PHOTO}/tarangire-day.png`,
  materuniCoffee: `${TANZANIA_PHOTO}/materuni-coffee.png`,
},

// ================= ZANZIBAR PACKAGES =================
zanzibar: {
  stoneTown3: `${TANZANIA_PHOTO}/Honeymoon1.png`,
  beach4: `${TANZANIA_PHOTO}/Honeymoon2.png`,
  magical5: `${TANZANIA_PHOTO}/magical.png`,
  gateway6: `${TANZANIA_PHOTO}/gateway-6.png`,
},

// ================= CTA =================
cta: {
  parallax: `${TANZANIA_PHOTO}/parallax-cta.png`,
},

// ================= DESTINATIONS =================
destinations: {
  serengeti: `${TANZANIA_PHOTO}/serengeti-new 1.png`,
  ngorongoro: `${TANZANIA_PHOTO}/ngorongoro-new.png`,
  kilimanjaro: `${TANZANIA_PHOTO}/kilimanjaro1.png`,
  tarangire: `${TANZANIA_PHOTO}/destination-tarangire.jpg`,
  manyara: `${TANZANIA_PHOTO}/tarangire-new.jpg`,
  selous: `${TANZANIA_PHOTO}/selous.png`,
  zanzibar: `${TANZANIA_PHOTO}/zanzibar.png`,
  arusha: `${TANZANIA_PHOTO}/arusha-park.png`,
},
};

export const SITE = {
  name: "Tanzania Exploration",
  shortName: "Tanzania Exploration",
  tagline: "Tanzania, untamed.",
  email: "info@tanzaniaexploration.com",
  phone: "+255 686 166 360",
  whatsapp: "255686166360",
  address: "Usa River, Arusha, Tanzania",
  hours: "Mon–Sat · 8.00 – 18.00",
  social: {
    instagram: "https://www.instagram.com/tanzaniaexploration?igsh=MWlnMDFxYzhza3RiZA==",
    facebook: "https://www.facebook.com/tanzaniaexploration",
    youtube: "https://youtube.com",
    tiktok: "https://tiktok.com",
  },
};

export const HERO_SLIDES = [
  {
    image: IMAGES.heroSerengeti,
    eyebrow: "The Great Migration",
    title: "Where the wild is still wild.",
    sub: "Cinematic safaris across the endless Serengeti — guided by experts, lived in luxury.",
  },
  {
    image: IMAGES.heroKilimanjaro,
    eyebrow: "Roof of Africa",
    title: "Climb to 5,895 m. Touch the sky.",
    sub: "Six iconic routes up Mount Kilimanjaro, led by certified summit guides.",
  },
  {
    image: IMAGES.heroNgorongoro,
    eyebrow: "Ngorongoro Crater",
    title: "Africa's Eden, in one caldera.",
    sub: "A self-contained ecosystem of lions, elephants and flamingos beneath an ancient rim.",
  },
  {
    image: IMAGES.wildElephants,
    eyebrow: "Tarangire & Baobabs",
    title: "Elephants under ancient giants.",
    sub: "Vast herds, baobab-studded plains and one of Tanzania's most photogenic parks.",
  },
] as const;

export type DestinationExperience = { title: string; description: string };

export type Destination = {
  slug: string;
  name: string;
  short: string;
  long: string;
  image: string;
  region: string;
  highlights: string[];
  experiences: DestinationExperience[];
};

export const DESTINATIONS: Destination[] = [
  {
    slug: "serengeti",
    name: "Serengeti National Park",
    short: "1.5 million wildebeest. Endless plains. The greatest wildlife show on earth.",
    long: "Spanning 14,750 km², the Serengeti hosts the Great Migration — over 1.5 million wildebeest, 200,000 zebras and thousands of gazelles in an ancient 3,000 km loop. Predators trail the herds: lion prides, cheetah coalitions, leopards in sausage trees. Best from June to October for river crossings, January to March for calving in the southern plains.",
    image: IMAGES.heroSerengeti,
    region: "Northern Circuit",
    highlights: ["Great Migration", "Big Five", "Balloon safaris", "Maasai culture"],
    experiences: [
      { title: "Witness the Great Migration", description: "Follow 1.5 million wildebeest and 200,000 zebras across the plains, with dramatic river crossings at the Mara and Grumeti between July and October." },
      { title: "Track the Big Five", description: "Search for lion, leopard, elephant, buffalo and the elusive black rhino on twice-daily game drives with expert Silver-level Tanzanian guides." },
      { title: "Sunrise hot-air balloon safari", description: "Drift silently above the plains at dawn and land to a champagne bush breakfast — an unforgettable, once-in-a-lifetime view of the Serengeti." },
      { title: "Predator action in Seronera Valley", description: "The central Serengeti's rivers concentrate lion prides, cheetah coalitions and leopards in sausage trees year-round." },
      { title: "Meet the Maasai", description: "Visit an authentic Maasai boma on the park's edge — learn about warriorhood, cattle culture and beadwork straight from the community." },
      { title: "Bush dining under the stars", description: "Private candle-lit dinners in the middle of the wilderness, followed by nightcaps around a fire beneath the Southern Cross." },
    ],
  },
  {
    slug: "ngorongoro",
    name: "Ngorongoro Conservation",
    short: "An unbroken volcanic caldera teeming with life — Africa's natural amphitheatre.",
    long: "The world's largest unbroken volcanic caldera, 19 km across and 600 m deep. Within the crater walls live ~25,000 large animals — including endangered black rhino, hippo pods, lion prides and over 500 bird species. Above the rim, Maasai still graze cattle alongside zebra. A UNESCO World Heritage Site.",
    image: IMAGES.heroNgorongoro,
    region: "Northern Circuit",
    highlights: ["Crater game drives", "Black rhino", "Maasai villages", "Olduvai Gorge"],
    experiences: [
      { title: "Descend into the crater", description: "A 600 m descent into the world's largest unbroken caldera — 260 km² of grassland, forest and soda lakes packed with wildlife." },
      { title: "See critically endangered black rhino", description: "Ngorongoro is one of the last places in Tanzania where you can reliably spot free-roaming black rhino in the wild." },
      { title: "Flamingos on Lake Magadi", description: "Thousands of lesser flamingos paint the crater's soda lake pink, alongside hippo pods and herds of wildebeest and zebra." },
      { title: "Olduvai Gorge — the cradle of humankind", description: "Walk the site where the Leakeys uncovered 1.8-million-year-old hominid fossils, with a small museum overlooking the gorge." },
      { title: "Cultural visit to a Maasai village", description: "Share stories with a Maasai family who still herd cattle on the crater rim, unchanged for centuries." },
      { title: "Rim-view lodges at sunset", description: "Sleep on the edge of the caldera with panoramic views 600 m down to the crater floor as the sun sets over Africa's Eden." },
    ],
  },
  {
    slug: "kilimanjaro",
    name: "Mount Kilimanjaro",
    short: "Africa's highest peak. 5,895 m of glacier, forest and volcanic ash.",
    long: "A free-standing volcanic massif rising 5,895 m above the East African plain. Three cones — Kibo, Mawenzi, Shira. Trekkers pass through five ecological zones in a week, from rainforest to arctic summit. Six routes: Machame, Lemosho, Marangu, Rongai, Northern Circuit, Shira.",
    image: IMAGES.heroKilimanjaro,
    region: "Northern Tanzania",
    highlights: ["6 trekking routes", "Uhuru Peak summit", "Glacier views", "5 ecosystems"],
    experiences: [
      { title: "Summit Uhuru Peak at 5,895 m", description: "Stand on the Roof of Africa at sunrise after a midnight push from Barafu or Kibo camp — a bucket-list achievement for trekkers of all levels." },
      { title: "Choose the route that fits you", description: "Machame (7 days, scenic), Lemosho (8 days, best acclimatisation), Rongai (quiet northern approach), Marangu (huts) or the full Northern Circuit (9 days)." },
      { title: "Walk through five ecosystems", description: "In a single trek you pass cultivated foothills, montane rainforest, heather-moorland, alpine desert and the arctic summit zone." },
      { title: "See the shrinking glaciers up close", description: "The Furtwängler and Northern Icefield glaciers still crown the summit crater — a rare and vanishing sight in equatorial Africa." },
      { title: "Certified guides and full support", description: "KPAP-partnered outfitters, salaried porters, oxygen, pulse oximeters and rescue plans on every climb." },
      { title: "Celebrate at Moshi", description: "Return to a hot shower, cold Kilimanjaro lager and your official summit certificate at a boutique lodge under the mountain." },
    ],
  },
  {
    slug: "tarangire",
    name: "Tarangire National Park",
    short: "Ancient baobabs and the densest elephant population in Tanzania.",
    long: "Famous for its enormous elephant herds (often 300+ in a single sighting) and prehistoric baobab trees that line the Tarangire River. Best in the dry season (June–October) when wildlife concentrates around the river. Excellent birding — over 550 recorded species.",
    image: IMAGES.wildElephants,
    region: "Northern Circuit",
    highlights: ["Elephant herds", "Baobab forests", "Birding", "Tree-climbing pythons"],
    experiences: [
      { title: "Massive elephant herds", description: "Tarangire has the highest concentration of elephants in northern Tanzania — herds of 100–300 gather along the Tarangire River in the dry season." },
      { title: "Ancient baobab landscapes", description: "Iconic prehistoric baobabs over a thousand years old dot the plains — one of the most photogenic landscapes in East Africa." },
      { title: "550+ species for birders", description: "Yellow-collared lovebirds, ashy starlings and the rare Kori bustard make Tarangire a top birding destination." },
      { title: "Tree-climbing lions and pythons", description: "Look up — lions and even African rock pythons regularly rest in the sausage trees and baobabs." },
      { title: "Silale Swamp game viewing", description: "The swamps stay green year-round and draw buffalo, elephant and predator action even in the driest months." },
      { title: "Optional night game drives", description: "One of the few Tanzanian parks that allows night drives — spot genets, civets, bushbabies and hunting leopards." },
    ],
  },
  {
    slug: "lake-manyara",
    name: "Lake Manyara National Park",
    short: "Tree-climbing lions, flamingo-pink shores, dense groundwater forest.",
    long: "A narrow strip of forest, lake and escarpment beneath the Great Rift Valley wall. Famous for its tree-climbing lions, vast flocks of flamingos and pelicans on the alkaline lake, and dense troops of baboons. A perfect short stop on the Northern Circuit.",
    image: IMAGES.wildLion,
    region: "Northern Circuit",
    highlights: ["Tree-climbing lions", "Flamingos", "Rift Valley views", "Hot springs"],
    experiences: [
      { title: "Famous tree-climbing lions", description: "Manyara's lions are known for lounging in acacia branches — a rare behaviour you'll almost never see elsewhere in Africa." },
      { title: "Pink flamingo shores", description: "Thousands of lesser and greater flamingos gather on the alkaline lake, alongside pelicans, storks and cormorants." },
      { title: "Rift Valley escarpment views", description: "The park sits below a dramatic 600 m Rift Valley wall — sunset views from the rim lodges are unforgettable." },
      { title: "Canopy treetop walkway", description: "Africa's longest treetop walkway (370 m) suspended above the groundwater forest — a family-friendly highlight." },
      { title: "Hot springs at Maji Moto", description: "Bubbling geothermal springs on the lake's southern shore, framed by fever tree forest." },
      { title: "Ideal Northern Circuit add-on", description: "A perfect half-day stop between Tarangire and Ngorongoro — big variety in a compact 330 km² park." },
    ],
  },
  {
    slug: "selous",
    name: "Selous (Nyerere) National Park",
    short: "Africa's largest protected wilderness — boat safaris on the Rufiji.",
    long: "At 50,000 km², the largest protected area on the continent. Boat safaris on the Rufiji River, walking safaris through miombo woodland, and fly-camping under the stars. Wild dogs, hippos, crocs, and one of the last great elephant strongholds.",
    image: IMAGES.destinations.selous,
    region: "Southern Circuit",
    highlights: ["Boat safaris", "Walking safaris", "Wild dogs", "Fly-camping"],
    experiences: [
      { title: "Boat safaris on the Rufiji", description: "Glide past pods of hippo, giant crocodiles and elephants coming to drink — a totally different rhythm from a game drive." },
      { title: "Walking safaris with armed rangers", description: "Read tracks, follow lion pug marks and learn the bush from the ground up on multi-hour walks." },
      { title: "Wild dog stronghold", description: "One of Africa's largest remaining populations of endangered African wild dogs (painted wolves) roams these woodlands." },
      { title: "Fly-camping under the stars", description: "Overnight in a light mosquito-net camp deep in the bush — the ultimate remote-Africa experience." },
      { title: "Off-the-beaten-path solitude", description: "Vast, low-traffic wilderness — you can go all day without seeing another vehicle." },
      { title: "Combines beautifully with Zanzibar", description: "A 45-minute flight from Dar links Nyerere with the beaches, ideal for a bush-and-beach honeymoon." },
    ],
  },
  {
    slug: "zanzibar",
    name: "Zanzibar Beaches",
    short: "Spice islands, turquoise reefs, dhow sunsets, ancient Stone Town.",
    long: "An archipelago in the Indian Ocean — white sand, coral reefs, swaying palms, and the UNESCO-listed Stone Town with its Swahili-Arab heritage. Add 3–7 nights after your safari for snorkelling, freediving, kite-surfing or simply doing nothing well.",
    image: IMAGES.destinations.zanzibar,
    region: "Indian Ocean",
    highlights: ["White-sand beaches", "Stone Town", "Spice tours", "Dhow sunsets"],
    experiences: [
      { title: "White-sand beaches on every coast", description: "Nungwi & Kendwa for swim-any-tide beaches, Paje for kitesurfing, Matemwe for reef access, Michamvi for sunsets over the lagoon." },
      { title: "UNESCO Stone Town", description: "Wander 400-year-old Swahili-Arab lanes, carved doors, spice markets and the old Sultan's palace." },
      { title: "Snorkelling and diving at Mnemba Atoll", description: "Turquoise reefs teeming with turtles, dolphins, reef sharks and 600+ species of fish." },
      { title: "Spice plantation tour", description: "See where cloves, cinnamon, cardamom, nutmeg and vanilla grow — with a Zanzibari lunch cooked over the fire." },
      { title: "Sunset dhow cruise", description: "Sail a traditional wooden dhow at golden hour, drinks in hand, dolphins alongside." },
      { title: "Perfect post-safari escape", description: "3–7 nights to decompress after the bush — private beach villas, spa treatments and seafood on the sand." },
    ],
  },
  {
    slug: "arusha",
    name: "Arusha National Park",
    short: "Mount Meru, Momella lakes, walking safaris and giraffe at the foothills.",
    long: "An underrated gem at the foot of Mount Meru (4,562 m). Walking safaris are permitted — rare in Tanzania. Spot giraffe, buffalo, colobus monkeys and over 400 bird species across rainforest, alkaline lakes and crater rim.",
    image: IMAGES.destinations.arusha,
    region: "Northern Tanzania",
    highlights: ["Walking safaris", "Mount Meru trek", "Momella Lakes", "Day trip from Arusha"],
    experiences: [
      { title: "Walking safaris on foot", description: "One of the very few Tanzanian parks where you can walk with an armed ranger — get eye-level with giraffe and buffalo." },
      { title: "Climb Mount Meru (4,566 m)", description: "A 3–4 day trek that's excellent acclimatisation for Kilimanjaro, with buffalo and giraffe on the lower slopes." },
      { title: "Canoe the Momella Lakes", description: "Paddle alkaline lakes ringed with flamingos, hippo and waterbuck — a unique water-safari experience." },
      { title: "Ngurdoto Crater viewpoints", description: "The 'Little Ngorongoro' — a lush, self-contained caldera you view from the rim." },
      { title: "Black-and-white colobus monkeys", description: "Dense montane forest teems with these striking, long-tailed monkeys — a photographer's favourite." },
      { title: "Perfect day trip from Arusha", description: "Only 40 minutes from town — ideal for your first or final day in Tanzania when time is short." },
    ],
  },
];


export type TourCamp = { night: number; name: string; area?: string };
export type TourPackageTier = "Budget" | "Mid-range" | "Luxury" | "Ultra Luxury";
export type TourPackage = {
  tier: TourPackageTier;
  blurb: string;
  camps: TourCamp[] | null;
  gallery: string[] | null;
  priceFrom: number | null;
};

export const DEFAULT_PACKAGES: TourPackage[] = [
  { tier: "Budget", blurb: "Public campsites and simple guesthouses — authentic bush nights around the fire, no frills.", camps: null, gallery: null, priceFrom: null },
  { tier: "Mid-range", blurb: "Well-appointed lodges and permanent tented camps with hot showers and full-board dining.", camps: null, gallery: null, priceFrom: null },
  { tier: "Luxury", blurb: "Signature lodges and boutique tented camps in prime locations, elevated dining and private guides.", camps: null, gallery: null, priceFrom: null },
  { tier: "Ultra Luxury", blurb: "Private conservancies, butler service and exclusive-use camps — the rarefied top tier.", camps: null, gallery: null, priceFrom: null },
];

export type Tour = {
  slug: string;
  title: string;
  category: "Luxury Safari" | "Lodge Safari" | "Camping Safari" | "Honeymoon" | "Birding" | "Trekking" | "Beach";
  days: number;
  nights: number;
  priceFrom: number;
  destination: string;
  image: string;
  summary: string;
  highlights: string[];
  itinerary: { day: number; title: string; body: string }[];
  includes: string[];
  excludes: string[];
  packages?: TourPackage[];
};

export const TOURS: Tour[] = [
  {
    slug: "6-days-tanzania-luxury-scenic-lodge-safari",
    title: "6 Days Tanzania Luxury Scenic Lodge Safari",
    category: "Luxury Safari",
    days: 6, nights: 5, priceFrom: 570,
    destination: "Tarangire · Serengeti · Ngorongoro",
    image: IMAGES.heroSerengeti,
    summary: "A six-day journey through Tanzania's iconic Northern Circuit, sleeping in scenic luxury lodges with sweeping views over the parks.",
    highlights: ["Big Five game drives", "Sunrise on the Serengeti", "Crater descent", "Maasai cultural visit"],
    itinerary: [
      { day: 1, title: "Arusha → Tarangire", body: "Morning pickup, drive to Tarangire for an afternoon game drive among baobabs and elephant herds. Sundowner at the lodge." },
      { day: 2, title: "Tarangire → Lake Manyara → Karatu", body: "Game drive in Manyara — flamingos, tree-climbing lions, dense forest. Overnight in a Karatu highland lodge." },
      { day: 3, title: "Karatu → Central Serengeti", body: "Cross the Ngorongoro highlands and descend into the Serengeti. Afternoon game drive in the Seronera valley." },
      { day: 4, title: "Full day Serengeti", body: "Dawn-to-dusk game drives across the central Serengeti. Optional balloon safari at sunrise." },
      { day: 5, title: "Serengeti → Ngorongoro Crater", body: "Morning game drive en route to the crater rim. Spectacular sunset views." },
      { day: 6, title: "Crater floor → Arusha", body: "Descend into the caldera for a half-day game drive — black rhino, hippo, lion prides — then return to Arusha." },
    ],
    includes: ["All park fees", "Private 4x4 with pop-top roof", "English-speaking driver-guide", "Full-board lodging", "Bottled water"],
    excludes: ["International flights", "Visa", "Tips", "Personal insurance"],
  },
  {
    slug: "14-days-serengeti-honeymoon-safari",
    title: "14 Days Serengeti Honeymoon Safari & Zanzibar",
    category: "Honeymoon",
    days: 14, nights: 13, priceFrom: 860,
    destination: "Northern Circuit · Zanzibar",
    image: IMAGES.tour.honeymoon14Days,
    summary: "A two-week celebration: private game drives, candle-lit dinners under the stars, then seven nights on Zanzibar's white-sand beaches.",
    highlights: ["Private vehicle throughout", "Couples' bush dinner", "Sunset dhow cruise", "Beach villa upgrade"],
    itinerary: [
      { day: 1, title: "Arrive Arusha", body: "Welcome champagne, briefing, overnight at boutique coffee-estate lodge." },
      { day: 2, title: "Tarangire", body: "Half-day game drive, sundowner picnic." },
      { day: 3, title: "Lake Manyara", body: "Forest game drive and treetop walk." },
      { day: 4, title: "Ngorongoro Crater", body: "Full day in the caldera." },
      { day: 5, title: "Serengeti — Central", body: "Drive to central Serengeti." },
      { day: 6, title: "Serengeti — Northern", body: "Migration river crossings (seasonal)." },
      { day: 7, title: "Serengeti free day", body: "Balloon safari and bush breakfast." },
      { day: 8, title: "Fly to Zanzibar", body: "Charter to Stone Town, transfer to beach." },
      { day: 9, title: "Beach + spa", body: "Couples' massage, sunset dhow." },
      { day: 10, title: "Stone Town", body: "Spice tour and old-town walk." },
      { day: 11, title: "Mnemba snorkel", body: "Half-day snorkel at the atoll." },
      { day: 12, title: "Beach", body: "Free day in your villa." },
      { day: 13, title: "Beach", body: "Free day, farewell dinner." },
      { day: 14, title: "Departure", body: "Transfer to Zanzibar International Airport." },
    ],
    includes: ["Internal flights", "All park fees", "Private 4x4", "Beach villa with breakfast", "Stone Town tour"],
    excludes: ["International flights", "Lunches & dinners on Zanzibar", "Tips"],
  },
  {
    slug: "3-days-tanzania-lodge-safari",
    title: "3 Days Tanzania Lodge Safari — Tarangire & Ngorongoro",
    category: "Lodge Safari",
    days: 3, nights: 2, priceFrom: 340,
    destination: "Tarangire · Ngorongoro",
    image: IMAGES.tour.lodge3Days,
    summary: "A short, intense taste of Tanzania — perfect as an extension to a beach holiday or a long weekend escape.",
    highlights: ["Tarangire elephants", "Ngorongoro Crater floor", "Comfortable mid-range lodges"],
    itinerary: [
      { day: 1, title: "Arusha → Tarangire", body: "Morning game drive in Tarangire, lodge overnight on the rim." },
      { day: 2, title: "Tarangire → Ngorongoro", body: "Drive to the crater rim, sunset views." },
      { day: 3, title: "Crater game drive → Arusha", body: "Half-day descent into the caldera, return to Arusha." },
    ],
    includes: ["Park fees", "4x4 transport", "Driver-guide", "Lodge accommodation", "Meals as itinerary"],
    excludes: ["Flights", "Visa", "Tips"],
  },
  {
    slug: "6-days-tanzania-camping-safari",
    title: "6 Days Tanzania Camping Safari",
    category: "Camping Safari",
    days: 6, nights: 5, priceFrom: 610,
    destination: "Tarangire · Serengeti · Ngorongoro",
    image: IMAGES.tour.camping6Days,
    summary: "Sleep close to the wild in our spacious safari tents — campfire stories, dawn coffees and the sounds of the bush at night.",
    highlights: ["Public campsites inside parks", "Hot bucket showers", "Camp chef cooked meals", "Big Five viewing"],
    itinerary: [
      { day: 1, title: "Arusha → Tarangire camp", body: "Game drive, campfire dinner." },
      { day: 2, title: "Tarangire → Serengeti", body: "Long transfer with game viewing." },
      { day: 3, title: "Serengeti", body: "Full day game drives." },
      { day: 4, title: "Serengeti", body: "Northern plains exploration." },
      { day: 5, title: "Serengeti → Ngorongoro", body: "Crater rim camp." },
      { day: 6, title: "Crater → Arusha", body: "Half-day caldera, return." },
    ],
    includes: ["Tents & camping gear", "Cook & guide", "All meals", "Park fees"],
    excludes: ["Sleeping bag rental", "Flights", "Tips"],
  },
  {
    slug: "4-days-tanzania-lodge-safari",
    title: "4 Days Tanzania Lodge Safari — Serengeti & Ngorongoro",
    category: "Lodge Safari",
    days: 4, nights: 3, priceFrom: 470,
    destination: "Serengeti · Ngorongoro",
    image: IMAGES.tour.lodge4Days,
    summary: "The classic short safari combo — two of Africa's most iconic ecosystems in four immersive days.",
    highlights: ["Serengeti plains", "Crater floor game drive", "Comfort lodges"],
    itinerary: [
      { day: 1, title: "Arusha → Serengeti", body: "Long drive with game viewing en route." },
      { day: 2, title: "Serengeti full day", body: "Dawn to dusk game drives." },
      { day: 3, title: "Serengeti → Ngorongoro", body: "Crater rim lodge." },
      { day: 4, title: "Crater → Arusha", body: "Half-day in the crater, return." },
    ],
    includes: ["Park fees", "4x4 with pop-top", "Lodging", "Driver-guide", "Meals"],
    excludes: ["Flights", "Visa", "Tips"],
  },
  {
    slug: "tarangire-national-park-birding",
    title: "5 Days Tarangire Birding Safari",
    category: "Birding",
    days: 5, nights: 4, priceFrom: 520,
    destination: "Tarangire · Lake Manyara",
    image: IMAGES.tour.birding5Days,
    summary: "Over 550 species recorded — a paradise for birders, with specialist guides and dawn drives.",
    highlights: ["550+ bird species", "Yellow-collared lovebird", "Specialist guide", "Dawn & dusk drives"],
    itinerary: [
      { day: 1, title: "Arusha → Tarangire", body: "Afternoon game drive focused on birds." },
      { day: 2, title: "Tarangire", body: "Full-day birding." },
      { day: 3, title: "Tarangire → Manyara", body: "Lake birding — flamingos & pelicans." },
      { day: 4, title: "Manyara", body: "Forest birding." },
      { day: 5, title: "Return to Arusha", body: "Morning birds, transfer back." },
    ],
    includes: ["Specialist birding guide", "Park fees", "Lodging", "Meals"],
    excludes: ["Binoculars", "Flights", "Tips"],
  },
  {
    slug: "7-days-machame-route-kilimanjaro",
    title: "7 Days Mount Kilimanjaro — Machame Route",
    category: "Trekking",
    days: 7, nights: 6, priceFrom: 1980,
    destination: "Mount Kilimanjaro",
    image: IMAGES.kilimanjaroTrek,
    summary: "The most scenic and popular route to Uhuru Peak — seven days for proper acclimatisation and a higher summit success rate.",
    highlights: ["Uhuru Peak 5,895 m", "Barranco Wall", "Glacier views", "Certified KPAP guides"],
    itinerary: [
      { day: 1, title: "Machame Gate → Machame Camp", body: "Rainforest trek, ~5 hrs." },
      { day: 2, title: "Machame → Shira Camp", body: "Moorland zone, ~5 hrs." },
      { day: 3, title: "Shira → Lava Tower → Barranco", body: "Acclimatisation, ~7 hrs." },
      { day: 4, title: "Barranco → Karanga", body: "Barranco Wall scramble." },
      { day: 5, title: "Karanga → Barafu base camp", body: "Rest, prep for summit." },
      { day: 6, title: "Summit night → Mweka", body: "Midnight start, Uhuru Peak at sunrise, descend to Mweka." },
      { day: 7, title: "Mweka → Gate → Moshi", body: "Final descent, certificates, transfer." },
    ],
    includes: ["Park fees & rescue fees", "Certified guide, cook, porters", "Tents & mess gear", "All meals on mountain", "Transfers"],
    excludes: ["Sleeping bag", "Personal gear", "Tips for crew (USD 250–350)"],
  },
  {
    slug: "8-days-lemosho-route-kilimanjaro",
    title: "8 Days Mount Kilimanjaro — Lemosho Route",
    category: "Trekking",
    days: 8, nights: 7, priceFrom: 2380,
    destination: "Mount Kilimanjaro",
    image: IMAGES.heroKilimanjaro,
    summary: "The most remote and beautiful approach. Eight days = best acclimatisation and >90% summit success.",
    highlights: ["Highest summit success rate", "Crosses entire mountain", "Quieter route", "Glacier dawn"],
    itinerary: [
      { day: 1, title: "Lemosho Gate → Mti Mkubwa", body: "Rainforest, ~3 hrs." },
      { day: 2, title: "Mti Mkubwa → Shira 1", body: "Moorland." },
      { day: 3, title: "Shira 1 → Shira 2", body: "High plateau." },
      { day: 4, title: "Shira 2 → Lava Tower → Barranco", body: "Acclimatisation hike." },
      { day: 5, title: "Barranco → Karanga", body: "Barranco Wall." },
      { day: 6, title: "Karanga → Barafu", body: "Pre-summit rest." },
      { day: 7, title: "Summit → Mweka", body: "Uhuru Peak at dawn." },
      { day: 8, title: "Mweka → Gate", body: "Descent and certificates." },
    ],
    includes: ["Park fees", "Certified guides & porters", "Tents", "All meals", "Transfers"],
    excludes: ["Sleeping bag", "Tips", "Personal gear"],
  },
  {
    slug: "5-days-luxury-honeymoon-zanzibar",
    title: "5 Days Zanzibar Beach Escape",
    category: "Beach",
    days: 5, nights: 4, priceFrom: 690,
    destination: "Zanzibar",
    image: IMAGES.destinations.zanzibar,
    summary: "Soft sand, turquoise water, and nothing on the agenda but breakfast in the sun.",
    highlights: ["Beachfront villa", "Spice tour", "Stone Town walk", "Snorkel at Mnemba"],
    itinerary: [
      { day: 1, title: "Arrive Zanzibar", body: "Transfer to north-east beach villa." },
      { day: 2, title: "Spice tour", body: "Half-day spice plantation visit." },
      { day: 3, title: "Mnemba snorkel", body: "Boat trip to Mnemba atoll." },
      { day: 4, title: "Stone Town", body: "Cultural walk and sunset dhow." },
      { day: 5, title: "Departure", body: "Transfer to airport." },
    ],
    includes: ["Beachfront accommodation B&B", "Tours as itinerary", "Transfers"],
    excludes: ["Flights", "Lunches & dinners", "Tips"],
  },
  {
    slug: "1-day-balloon-safari-serengeti",
    title: "Sunrise Hot Air Balloon Safari — Serengeti",
    category: "Luxury Safari",
    days: 1, nights: 0, priceFrom: 599,
    destination: "Serengeti",
    image: IMAGES.balloonSafari,
    summary: "Float silently over the plains at dawn. Champagne breakfast on landing — the safari moment that defines a lifetime.",
    highlights: ["1-hour balloon flight", "Champagne breakfast", "Flight certificate", "Pickup from camp"],
    itinerary: [
      { day: 1, title: "Pre-dawn takeoff", body: "Pickup at 04:30, balloon inflation, ~1 hour silent flight at dawn, full champagne bush breakfast on landing, return to your camp by mid-morning." },
    ],
    includes: ["Flight", "Breakfast", "Insurance", "Certificate"],
    excludes: ["Park fees", "Transport to Serengeti"],
  },
];

export const ACCOMMODATIONS = [
  { name: "Sayari Camp — Serengeti North", area: "Northern Serengeti", style: "Tented Luxury", image: IMAGES.heroLuxuryCamp, blurb: "Front-row seats to the Mara River crossings. Eight tents, no neighbours." },
  { name: "Crater Lodge — Ngorongoro", area: "Ngorongoro Rim", style: "Heritage Luxury", image: IMAGES.heroNgorongoro, blurb: "Baroque-meets-Maasai suites perched on the caldera rim." },
  { name: "Tabi Bush Camp — Central Serengeti", area: "Central Serengeti", style: "Riverside Luxury", image: IMAGES.luxuryPool, blurb: "Riverside tents with infinity pool and Maasai cultural experiences." },
  { name: "Highlands Camp — Ngorongoro", area: "Olmoti Crater", style: "Geodesic Domes", image: IMAGES.maasai, blurb: "Eight glass-walled domes with private firepits and Maasai-led walks." },
  { name: "Mnemba Island Lodge — Zanzibar", area: "Mnemba Atoll", style: "Beach Bandas", image: IMAGES.heroZanzibar, blurb: "Twelve thatched bandas on a private atoll. Reef snorkel from your door." },
  { name: "Kuro Tarangire — Tarangire", area: "Tarangire", style: "Bush Camp", image: IMAGES.wildElephants, blurb: "Six tents under towering baobabs at the heart of elephant country." },
];

export const GALLERY = [
  IMAGES.heroSerengeti, IMAGES.wildLion, IMAGES.heroKilimanjaro, IMAGES.balloonSafari,
  IMAGES.wildElephants, IMAGES.heroLuxuryCamp, IMAGES.maasai, IMAGES.heroZanzibar,
  IMAGES.wildCheetah, IMAGES.heroNgorongoro, IMAGES.kilimanjaroTrek, IMAGES.luxuryPool,
];

export const TESTIMONIALS = [
  { name: "Sophie Martin", country: "France", quote: "The most cinematic week of our lives. Our guide spotted a leopard in a sausage tree from 400 metres away. Unreal." },
  { name: "James & Olivia Carter", country: "United Kingdom", quote: "Honeymoon perfection. Bush dinner under the Milky Way, then seven nights in Zanzibar — every detail was thought through." },
  { name: "Hiroshi Tanaka", country: "Japan", quote: "Summited Kilimanjaro on day seven of Lemosho. The crew, the food, the briefings — world-class. I will be back for the southern circuit." },
  { name: "Maria Gonzalez", country: "Spain", quote: "We came for the wildlife. We left in love with the people. Our Maasai host's stories will stay with me forever." },
];

import luxuryImage from "../assets/luxury safari.png";
import birdingImage from "../assets/birding.png";
import honeymoonImage from "../assets/honeymoon.png";
import lodgeSafariImage from "../assets/lodge safari.png";
import campingSafariImage from "../assets/campingsafari.png";
import zanzibarImage from "../assets/zanzibar.png";
import balloonSafariImage from "../assets/balloon-safari.png";


export const CATEGORIES = [
  { slug: "luxury", label: "Luxury Safari", image: luxuryImage },
  { slug: "lodge", label: "Lodge Safari", image: lodgeSafariImage },
  { slug: "camping", label: "Camping Safari", image: campingSafariImage },
  { slug: "honeymoon", label: "Honeymoon", image: honeymoonImage },
  { slug: "trekking", label: "Kilimanjaro Trekking", image: IMAGES.kilimanjaroTrek },
  { slug: "birding", label: "Birding", image: birdingImage },
  { slug: "balloon", label: "Balloon Safari", image: balloonSafariImage },
  { slug: "beach", label: "Zanzibar Beach", image: zanzibarImage },
  
];

export const BLOG = [
  {
    slug: "great-migration-when-where",
    title: "The Great Migration: when and where to see it",
    excerpt: "A month-by-month guide to following 1.5 million wildebeest across the Serengeti-Mara ecosystem.",
    date: "2025-09-12",
    author: "Hassan Mwangi",
    image: IMAGES.heroSerengeti,
    body: `The Serengeti Wildebeest Migration is one of the Seven Natural Wonders of Africa. Over 1.5 million wildebeest, accompanied by 200,000 zebras and thousands of gazelles, move in a continuous loop spanning nearly 3,000 km in search of grass and water.

**January – March · Calving in the southern plains**
Over 500,000 calves are born on the short-grass plains of Ndutu in just three weeks. Predator action is at its peak — lion, cheetah and hyena all converge.

**April – May · The long rains, the herds head north**
The herds begin their northwest journey through the Western Corridor, crossing the Grumeti River where massive crocodiles wait.

**June – July · Grumeti River crossings**
The first dramatic crossings of the year. Best base: Western Corridor camps.

**August – October · Mara River crossings**
The most iconic image of the migration — thousands plunging into crocodile-filled rivers in the northern Serengeti. Camps fill 18 months ahead.

**November – December · The return south**
Short rains begin, herds drift south back to Ndutu for the cycle to begin again.`,
  },
  {
    slug: "kilimanjaro-which-route",
    title: "Which Kilimanjaro route should you take?",
    excerpt: "Six routes to Uhuru Peak. We break down acclimatisation, scenery, traffic and summit success.",
    date: "2025-08-30",
    author: "Amina Juma",
    image: IMAGES.kilimanjaroTrek,
    body: `Six official routes lead to the 5,895 m summit. The "best" depends on your priorities.

**Lemosho (8 days)** — The highest success rate. Beautiful, varied, quieter on the lower stages.
**Machame (7 days)** — The most popular. Scenic, challenging, well-organised.
**Marangu (5–6 days)** — The only route with hut accommodation. Lowest summit success because of fast ascent.
**Rongai (6–7 days)** — Approaches from the north, drier side. Good in the rainy season.
**Northern Circuit (9 days)** — The longest. Best acclimatisation, most remote.
**Shira (7 days)** — Starts at altitude (3,600 m) — risky for first-timers.

We recommend Lemosho for most clients.`,
  },
  {
    slug: "what-to-pack-for-safari",
    title: "What to pack for your Tanzania safari",
    excerpt: "Soft duffel, neutral colours, the right binoculars — and what to leave at home.",
    date: "2025-08-10",
    author: "Sahara Wild Editors",
    image: IMAGES.trekking.kilimanjaro,
    body: `**Soft duffel only** — internal flights have a 15 kg limit and won't accept hard cases.
**Neutral colours** — khaki, olive, brown. Skip black & dark blue (attract tsetse), white (shows dust), bright camo (illegal in some countries).
**Binoculars** — 8x42 is the sweet spot. Don't share one between two people.
**Layers** — game drives at dawn are cold; the equator at noon is hot.
**Sun protection** — wide-brim hat, SPF 50, polarised sunglasses.
**Camera** — a 100–400 mm zoom covers 95% of safari shots.`,
  },
  {
    slug: "zanzibar-after-the-safari",
    title: "Zanzibar: how many nights after the safari?",
    excerpt: "The classic Tanzania trip ends in the Indian Ocean. Three nights is fine. Seven is better.",
    date: "2025-07-22",
    author: "Hassan Mwangi",
    image: IMAGES.zanzibar.gateway6,
    body: `Most clients add 4–7 nights on Zanzibar after the safari. We recommend at least five — you need a day to recover, a day for Stone Town, a snorkel day, and at least two pure beach days.

**Best beaches by month:**
- Dec – Mar: north-east coast (Matemwe, Pongwe).
- Jun – Sep: south-east coast (Paje, Jambiani).
- Year-round: north tip (Nungwi, Kendwa) — sunset views and reliable swimming.`,
  },
];

// ============================================================================
// Authentic Tanzania content sourced from tanzaniaexploration.com
// Images are hot-linked from the source site (natural photography only).
// ============================================================================

export const TE_IMG = {
  kilimanjaro: `${TANZANIA_PHOTO}/kilimanjaro.jpg`,
  meru: `${TANZANIA_PHOTO}/meru.jpg`,
  ngorongoro: `${TANZANIA_PHOTO}/ngorongoro.jpg`,
  serengeti: `${TANZANIA_PHOTO}/serengeti.jpg`,
  serengetiWide: `${TANZANIA_PHOTO}/balloon.jpg`,
  tarangire: `${TANZANIA_PHOTO}/tarangire.jpg`,
  manyara: `${TANZANIA_PHOTO}/manyara.jpg`,
  selous: `${TANZANIA_PHOTO}/nyerere.jpg`,
  arusha: `${TANZANIA_PHOTO}/meru.jpg`,
  luxurySafari: `${TANZANIA_PHOTO}/ngorongoro.jpg`,
  lodgeSafari: `${TANZANIA_PHOTO}/lodgesafari.png`,
  campingSafari: `${TANZANIA_PHOTO}/campingsafari.png`,
  birdWatch: `${TANZANIA_PHOTO}/manyara.jpg`,
  walkingSafari: `${TANZANIA_PHOTO}/kilimanjaro.jpg`,
};

// ============================================================================
// TREKKING — Kilimanjaro & Meru
// ============================================================================

export type TrekkingRoute = { name: string; days: number };
export type TrekkingService = {
  id: string;
  title: string;
  image: string;
  altitude: string;
  summary: string;
  routes: TrekkingRoute[];
};

export const TREKKING_SERVICES: TrekkingService[] = [
  {
    id: "kilimanjaro",
    title: "Mount Kilimanjaro Climbing",
    image: IMAGES.trekking.kilimanjaro,
    altitude: "5,895 m · Roof of Africa",
    summary:
      "Climbing Kilimanjaro is the experience of a lifetime — and it's not hard to see why this trek tops bucket lists around the world. The mighty Mount Kilimanjaro is the highest mountain in Africa at a staggering 5,895 metres (19,341 ft), and the world's highest free-standing mountain. Many of the routes are not for the faint-hearted, but with an experienced guide at your side you don't need to be a seasoned climber to reach its summit.",
    routes: [
      { name: "Machame Route", days: 7 },
      { name: "Machame Route", days: 6 },
      { name: "Lemosho Route", days: 6 },
      { name: "Rongai Route", days: 6 },
      { name: "Shira Route", days: 7 },
      { name: "Northern Circuit", days: 8 },
    ],
  },
  {
    id: "meru",
    title: "Mount Meru Climbing",
    image: IMAGES.trekking.meru,
    altitude: "4,566 m · Tanzania's second highest",
    summary:
      "Mount Meru is Tanzania's second-highest mountain, often overshadowed by the eminent Mount Kilimanjaro. For nature lovers, beautiful Mount Meru offers an unforgettable adventure with its abundant wildlife and stunning views — it is far more than a warm-up trek for Kilimanjaro. At 4,566 m, this stratovolcano in Arusha National Park is as challenging as Kilimanjaro itself.",
    routes: [
      { name: "Mount Meru Trek", days: 3 },
      { name: "Mount Meru Trek", days: 4 },
    ],
  },
];

// ============================================================================
// DAY TRIPS
// ============================================================================

export type DayTrip = {
  id: string;
  title: string;
  location: string;
  image: string;
  summary: string;
};

export const DAY_TRIPS: DayTrip[] = [
  {
    id: "arusha-np",
    title: "Arusha National Park Day Trip",
    location: "Arusha National Park",
    image: IMAGES.dayTrips.arusha,
    summary:
      "Game viewing among Momella Lakes, walking safaris through montane forest and canoe trips beneath Mount Meru — all within a couple of hours of Arusha town.",
  },
  {
    id: "kikuletwa",
    title: "Kikuletwa Hotsprings Day Trip",
    location: "Boma la Ng'ombe, near Moshi",
    image: IMAGES.dayTrips.kikuletwa,
    summary:
      "Crystal-clear turquoise springs fringed by fig trees and palms — a refreshing swim and lunch stop hidden in the Maasai steppe.",
  },
  {
    id: "manyara-day",
    title: "Lake Manyara Day Trip",
    location: "Lake Manyara National Park",
    image: IMAGES.dayTrips.manyara,
    summary:
      "Groundwater forest, tree-climbing lions, hippo pools and pink-hued flamingos on the alkaline lake — a perfect one-day Rift Valley safari.",
  },
  {
    id: "materuni-falls",
    title: "Materuni Waterfalls Day Trip",
    location: "Kilimanjaro foothills, Moshi",
    image: IMAGES.dayTrips.materuniFalls,
    summary:
      "A guided forest walk to an 80-metre waterfall on the lower slopes of Kilimanjaro, ending with a traditional Chagga lunch in the village.",
  },
  {
    id: "tarangire-day",
    title: "Tarangire National Park Day Trip",
    location: "Tarangire National Park",
    image: IMAGES.dayTrips.tarangire,
    summary:
      "A full day among ancient baobabs and the densest elephant herds in Tanzania — easily combined as a day-trip from Arusha or Karatu.",
  },
  {
    id: "materuni-coffee",
    title: "Materuni Coffee Plantation Day Trip",
    location: "Moshi · Materuni village",
    image: IMAGES.dayTrips.materuniCoffee,
    summary:
      "Pick, roast and grind your own beans with a Chagga family on the lush volcanic slopes of Kilimanjaro — a cultural half-day combining easily with the waterfalls.",
  },
];

// ============================================================================
// ZANZIBAR PACKAGES
// ============================================================================

export type ZanzibarPackage = {
  id: string;
  title: string;
  days: number;
  image: string;
  summary: string;
  inclusions: string[];
};

export const ZANZIBAR_PACKAGES: ZanzibarPackage[] = [
  {
    id: "stone-town-3",
    title: "3 Days Discover Stone Town",
    days: 3,
    image: IMAGES.zanzibar.stoneTown3,
    summary:
      "Three nights inside the UNESCO-listed labyrinth of Stone Town — Swahili-Arab architecture, spice tours, night markets and dhow sunsets.",
    inclusions: ["B&B accommodation", "Airport transfers", "Stone Town walking tour", "24/7 service"],
  },
  {
    id: "beach-4",
    title: "4 Days Zanzibar Beach Holiday",
    days: 4,
    image: IMAGES.zanzibar.beach4,
    summary:
      "A short beach break on the white sands of the north or east coast — perfect as a quick add-on to a Northern Circuit safari.",
    inclusions: ["Bed & Breakfast", "Beachfront stay", "Airport transfer", "24/7 service"],
  },
  {
    id: "magical-5",
    title: "5 Days Magical Zanzibar",
    days: 5,
    image: IMAGES.zanzibar.magical5,
    summary:
      "Five days that blend culture and coast — Stone Town heritage, a spice plantation tour and three nights on a quiet stretch of the archipelago.",
    inclusions: ["Bed & Breakfast", "Spice tour", "Airport transfers", "24/7 service"],
  },
  {
    id: "gateway-6",
    title: "6 Days Zanzibar Gateway",
    days: 6,
    image: IMAGES.zanzibar.gateway6,
    summary:
      "Six full days to truly unwind — snorkel at Mnemba atoll, dhow sail at sunset, swim with dolphins and finish in the old town.",
    inclusions: ["Bed & Breakfast", "Airport transfer", "Excursions on request", "24/7 service"],
  },
];

// ============================================================================
// DESTINATION DETAILS — long-form sections for /destinations/$slug
// ============================================================================

export type DestinationDetail = {
  hero: string;
  intro: string[];
  sections: { title: string; body: string }[];
  generalInfo: { label: string; value: string }[];
  activities?: string[];
  gallery: string[];
};

export const DESTINATION_DETAILS: Record<string, DestinationDetail> = {
  ngorongoro: {
    hero: TE_IMG.ngorongoro,
    intro: [
      "The Ngorongoro Conservation Area is a protected area and UNESCO World Heritage Site located 180 km west of Arusha in the Crater Highlands of Tanzania. The area is named after the Ngorongoro Crater, a large volcanic caldera at its heart. Established in 1959 as a multiple land-use area, wildlife coexists here with semi-nomadic Maasai pastoralists practising traditional livestock grazing.",
      "It includes the spectacular Ngorongoro Crater — the world's largest unbroken caldera — and Olduvai Gorge, a 14 km long deep ravine often called the cradle of humankind.",
    ],
    sections: [
      {
        title: "Ngorongoro Highlands",
        body:
          "These rolling verdant hills east of the crater offer classic trekking on foot with Maasai warrior guides, leading to little-known craters and volcanoes — including Oldoinyo Lengai, the only active volcano in the region, and the shifting sands and Olduvai Gorge with its ancient fossil record.",
      },
      {
        title: "The Crater",
        body:
          "The main feature is the Ngorongoro Crater itself — the world's largest inactive, intact and unfilled volcanic caldera. Formed when a large volcano collapsed two to three million years ago, it is 610 m deep and its floor covers 260 km². The Garden of Eden of Africa, it teems with roughly 25,000 animals — four of the Big Five, the densest known population of lions, and critically endangered black rhinos.",
      },
      {
        title: "Olduvai Gorge & Laetoli",
        body:
          "The Conservation Area also protects Olduvai Gorge, considered the seat of humanity after the discovery of Homo habilis and early Hominidae fossils here. Nearby, Laetoli preserves 3.6 million-year-old hominin footprints in volcanic ash — convincing evidence of bipedalism in Pliocene hominins.",
      },
      {
        title: "The Maasai",
        body:
          "Meet Maasai men and women, enjoy traditional dancing and listen to native melodies. What makes the experience enriching is seeing an authentic social side of Africa and a glimpse of the rich Maasai culture that still shares this landscape with the wildlife.",
      },
    ],
    generalInfo: [
      { label: "Area", value: "8,292 km²" },
      { label: "Established", value: "1959" },
      { label: "Visitors", value: "500,000+ / year" },
      { label: "Rating", value: "4.7 / 5" },
    ],
    gallery: [TE_IMG.ngorongoro, TE_IMG.serengetiWide, TE_IMG.manyara, TE_IMG.tarangire],
  },
  serengeti: {
    hero: TE_IMG.serengeti,
    intro: [
      "The Serengeti is one of the most famous parks in Africa and is synonymous with wildlife and classic African scenery. It is Tanzania's oldest park and a UNESCO World Heritage Site — home to the spectacular wildebeest migration and offering top-class wildlife viewing throughout the year.",
      "Serengeti National Park covers 14,750 km² of grassland plains, savanna, riverine forest and woodlands in northwestern Tanzania, bordering Kenya's Maasai Mara. Surrounded by remarkable tribes such as the Maasai and Hadzabe, this wider area is also fascinating from a cultural perspective.",
    ],
    sections: [
      {
        title: "Three regions",
        body:
          "The southern/central Seronera Valley is the classic 'serengit' — the endless plains the Maasai named. The Western Corridor is marked by the Grumeti River, with more forest and dense bush. The northern Lobo area meets Kenya's Maasai Mara and is the least visited.",
      },
      {
        title: "The Great Migration",
        body:
          "Seeking new pasture, 1.5 million wildebeest move north from their breeding grounds in the grassy southern plains. Many cross the marshy western corridor's crocodile-infested Grumeti River. Others veer northeast to the Lobo Hills, home to black eagles. Black rhinos inhabit the granite outcrops of the Moru Kopjes.",
      },
      {
        title: "History",
        body:
          "Undisturbed for millions of years, the Serengeti came to world attention when German explorer Oscar Baumann visited in 1892. In 1951 the area was given National Park status and declared a game reserve and protected conservation area.",
      },
    ],
    generalInfo: [
      { label: "Area", value: "14,750 km² (12,000 sq mi)" },
      { label: "Established", value: "1951" },
      { label: "Visitors", value: "350,000 / year" },
      { label: "Rating", value: "4.5 / 5" },
    ],
    gallery: [TE_IMG.serengeti, TE_IMG.serengetiWide, TE_IMG.ngorongoro, TE_IMG.tarangire],
  },
  tarangire: {
    hero: TE_IMG.tarangire,
    intro: [
      "Tarangire National Park, located on the southeastern edge of Lake Manyara, is one of the hidden gems of Tanzania's vast wilderness. Covering 2,850 km², it is the sixth-largest national park in the country and offers a tranquil yet rich safari experience.",
      "The park is named after the Tarangire River, which flows through its heart, providing essential water to the abundant wildlife of the region. Tarangire is particularly famous for its large elephant populations, unique baobab trees and fascinating tree-climbing pythons.",
    ],
    sections: [
      {
        title: "Rich wildlife",
        body:
          "Tarangire is home to zebras, giraffes, buffalo, hartebeests, impalas and wildebeest. But the star attraction is its impressive elephant population — during the dry season (June–September) the Tarangire River becomes a magnet for migratory animals and large herds of elephants gather along its banks. Predators include lions, leopards and cheetahs.",
      },
      {
        title: "Birdwatching",
        body:
          "Over 550 species of birds make Tarangire one of the best birdwatching destinations in East Africa. The swamps are particularly rich, with yellow-collared lovebird, white-headed vulture and hornbills among the common sightings.",
      },
      {
        title: "Unique experiences",
        body:
          "Walking safaris led by professional guides reveal the smaller details a vehicle drives past. Nearby Maasai and Barabaig villages offer a window into traditional life — welcoming communities happy to share their culture.",
      },
      {
        title: "Best time to visit",
        body:
          "Dry season (June–September) is ideal for wildlife — animals congregate at the river. Wet season (November–April) is perfect for birding and the lush green landscape.",
      },
    ],
    generalInfo: [
      { label: "Area", value: "2,850 km²" },
      { label: "Established", value: "1970" },
      { label: "Visitors", value: "161,792 / year" },
      { label: "Rating", value: "4.6 / 5" },
    ],
    gallery: [TE_IMG.tarangire, TE_IMG.manyara, TE_IMG.serengeti, TE_IMG.ngorongoro],
  },
  "lake-manyara": {
    hero: TE_IMG.manyara,
    intro: [
      "Lake Manyara National Park is a small park at the base of the Rift Valley escarpment. Its groundwater forest offers a nice change of scenery from the more savannah-dominated parks. Although the park is known for tree-climbing lions, the big cats aren't easily seen — elephants are prolific and are the main attraction.",
      "Stretching for 50 km along the base of the rusty-gold 600-metre high Rift Valley escarpment, Lake Manyara is a scenic gem, with a setting Ernest Hemingway extolled as 'the loveliest I had seen in Africa'.",
    ],
    sections: [
      {
        title: "Groundwater forest",
        body:
          "From the entrance gate, the road winds through lush jungle-like groundwater forest where hundred-strong baboon troops lounge alongside the road, blue monkeys scamper between ancient mahoganies, dainty bushbuck tread warily through the shadows and forest hornbills honk in the high canopy.",
      },
      {
        title: "Floodplain & lake",
        body:
          "Contrasting with the forest is the grassy floodplain and expansive views across the alkaline lake to the jagged blue volcanic peaks rising from the Maasai Steppes. Large herds of buffalo, wildebeest and zebra congregate here, alongside giraffes — some so dark they appear black from a distance.",
      },
      {
        title: "Birding paradise",
        body:
          "More than 400 species have been recorded. Even a first-time visitor might reasonably expect to observe 100 in one day. Highlights include thousands of pink-hued flamingos, pelicans, cormorants and storks. In the far south, hot springs steam and bubble adjacent to the lake-shore.",
      },
    ],
    generalInfo: [
      { label: "Area", value: "325 km²" },
      { label: "Established", value: "1960" },
      { label: "Visitors", value: "178,473 / year" },
      { label: "Rating", value: "4.5 / 5" },
    ],
    gallery: [TE_IMG.manyara, TE_IMG.tarangire, TE_IMG.ngorongoro, TE_IMG.serengetiWide],
  },
  selous: {
    hero: TE_IMG.selous,
    intro: [
      "Selous National Park — formerly the Selous Game Reserve — is Africa's largest national park, covering an area the size of Switzerland. At a staggering 30,893 km² it hosts one of the world's largest concentrations of wildlife. A UNESCO World Heritage Site with only a handful of high-end safari camps, the collection of wildlife in diversity and abundance is remarkable.",
      "Selous hosts the famous Big Five and rare species of antelope including Roan, Sable, Greater Kudu, Lichtenstein's Hartebeest and Brindled Gnu. Boat exploration, walking safaris and classic 4WD game drives add a unique element to the Selous experience.",
    ],
    sections: [
      {
        title: "Boat safaris on the Rufiji",
        body:
          "Boating explorations along the Rufiji River are as wild and adventurous a safari experience as can be had — cruising amongst hippos, crocodiles and a full checklist of water birds, getting closer to the wildlife that drinks from the bank than any other method allows.",
      },
      {
        title: "Wildlife",
        body:
          "Approximately 70% (60,000) of Tanzania's elephants are found here, alongside 40,000 hippos in the river systems, depleted numbers of black rhino, herds of buffalo exceeding 160,000, the area's famous wild dogs and 5,000 lions. Over 350 species of birds have been recorded.",
      },
      {
        title: "Scenery",
        body:
          "The part of Selous north of the Rufiji that is open to the public is particularly scenic. The main wildlife circuit follows a string of five lakes connected to each other and the Rufiji by small streams — palm-fringed channels and swampy islets define one of Africa's great rivers.",
      },
      {
        title: "Best time to visit",
        body:
          "June–September: elephant and buffalo abound, wild dogs start to den, best time for walking safaris. October–November: heavy game concentrations around inland lakes, migrant birds arrive. December–March: prolific birdlife, most animals calving — hot and humid with possible rain.",
      },
    ],
    activities: [
      "Safari game drives with 4×4 vehicles",
      "Boat safaris on the Great Rufiji River",
      "Guided walking safaris in selected areas",
      "Cultural tourism in Mloka village",
      "Photographic activities",
    ],
    generalInfo: [
      { label: "Area", value: "30,893 km²" },
      { label: "Park status", value: "Since 2019" },
      { label: "Rating", value: "4.3 / 5" },
      { label: "Elephants", value: "~60,000" },
    ],
    gallery: [TE_IMG.selous, TE_IMG.tarangire, TE_IMG.manyara, TE_IMG.serengeti],
  },
  arusha: {
    hero: TE_IMG.arusha,
    intro: [
      "Arusha National Park is one of the small national parks in northern Tanzania, measuring 552 km². The park is small but varied with spectacular landscapes across three distinct areas. In the west, the Meru Crater funnels the Jekukumia River with the peak of Mount Meru on its rim. Ngurdoto Crater in the south-east is grassland. The shallow alkaline Momella Lakes in the north-east have varying algal colours and are known for their wading birds.",
      "Mount Meru, Tanzania's second-highest peak, forms a dramatic backdrop — with Mount Kilimanjaro 60 km to the east. Arusha National Park lies on a 300 km axis of Africa's most famous parks, running from Serengeti and Ngorongoro in the west to Kilimanjaro in the east.",
    ],
    sections: [
      {
        title: "Mount Meru",
        body:
          "Eighty kilometres west of Kilimanjaro lies an often-overlooked but spectacular volcano — Mount Meru at 4,565 m. It is an ideal warm-up and altitude acclimatisation for Kilimanjaro. On the mountain there is a good chance of seeing wildlife, and the crowds of Kilimanjaro are non-existent.",
      },
      {
        title: "Game viewing",
        body:
          "African elephant, Cape buffalo, hippo, zebra and giraffe roam open savanna giving way to acacia scrubland and lush rainforest. Game viewing around the Momella Lakes is at a laid-back and quiet pace, with rare colobus monkeys often spotted in the forest canopy.",
      },
      {
        title: "Walking & canoe safaris",
        body:
          "Due to the low numbers of predators, walking safaris are permitted — a must for anyone wanting a close look at moss-covered trees and waterfalls. A 2–2.5 hour canoeing safari follows the shorelines of small Momella Lake, where you can view buffaloes, bushbuck, giraffes, hippos and many water birds.",
      },
      {
        title: "Birding",
        body:
          "Over 400 bird species are counted in the park — Narina trogon and bar-tailed trogon are highlights for visiting birders, alongside silvery-cheeked hornbill, little bee-eater and the occasional long-crested eagle.",
      },
    ],
    activities: ["Game drives", "Walking safaris", "Canoe safaris on Momella Lake", "Mount Meru trekking", "Birdwatching", "Hiking to Tululusia waterfalls"],
    generalInfo: [
      { label: "Area", value: "137 km² (53 sq mi)" },
      { label: "Established", value: "1960" },
      { label: "Visitors", value: "66,808 / year" },
      { label: "Rating", value: "4.3 / 5" },
    ],
    gallery: [TE_IMG.arusha, TE_IMG.meru, TE_IMG.manyara, TE_IMG.tarangire],
  },
};
