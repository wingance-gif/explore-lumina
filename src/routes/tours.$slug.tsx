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

const TIERS: { key: TierKey; label: string; multiplier: number; blurb: string; sample: (dest: string) => string[] }[] = [
  {
    key: "budget",
    label: "Budget",
    multiplier: 1,
    blurb: "Comfortable public campsites and clean mid-range guesthouses — the authentic bush experience without frills.",
    sample: (d) => [
      `Public campsite — ${d.split("·")[0]?.trim() || "Park"}`,
      "Simba Farm Lodge / equivalent guesthouse",
      "Karatu Highview Camp",
    ],
  },
  {
    key: "mid",
    label: "Mid-range",
    multiplier: 1.6,
    blurb: "Well-appointed lodges and permanent tented camps with hot showers, plunge pools and full-board dining.",
    sample: (d) => [
      `Tarangire Simba Lodge / equivalent`,
      `Serena Lodge — ${d.split("·")[1]?.trim() || "Ngorongoro"}`,
      "Karatu Country Lodge",
    ],
  },
  {
    key: "luxury",
    label: "Luxury",
    multiplier: 2.6,
    blurb: "Signature lodges and boutique tented camps in prime locations, with private guides and elevated dining.",
    sample: (d) => [
      "Sanctuary Swala — Tarangire",
      `Four Seasons Safari Lodge — ${d.split("·")[1]?.trim() || "Serengeti"}`,
      "The Highlands — Ngorongoro",
    ],
  },
  {
    key: "ultra",
    label: "Ultra Luxury",
    multiplier: 4.4,
    blurb: "The rarefied top tier — private conservancies, butler service, helicopter transfers and exclusive-use camps.",
    sample: (d) => [
      "Singita Faru Faru — Grumeti Reserve",
      "&Beyond Serengeti Under Canvas",
      `Gibb's Farm & Crater Lodge — ${d.split("·").slice(-1)[0]?.trim() || "Ngorongoro"}`,
    ],
  },
];

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
  const price = Math.round((tour.priceFrom * activeTier.multiplier) / 10) * 10;

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
            <span className="hidden md:inline-flex items-center text-sm text-white/70 ml-2">
              From <strong className="text-white ml-1.5">${tour.priceFrom.toLocaleString()}</strong>
              <span className="ml-1">/ person</span>
            </span>
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
          <QuickFact icon={<Tag size={16} />} label="From" value={`$${tour.priceFrom.toLocaleString()} pp`} />
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

      {/* ITINERARY */}
      <section className="container-x mx-auto max-w-[1500px] py-16">
        <SectionHeading eyebrow="Itinerary" title="Day-by-day" />
        <Accordion type="single" collapsible defaultValue="day-1" className="mt-10 space-y-3">
          {tour.itinerary.map((step) => (
            <AccordionItem
              key={step.day}
              value={`day-${step.day}`}
              className="rounded-2xl border border-border bg-card/60 px-5 md:px-6 overflow-hidden data-[state=open]:bg-card"
            >
              <AccordionTrigger className="hover:no-underline py-5">
                <div className="flex items-center gap-5 text-left">
                  <div className="shrink-0 grid h-11 w-11 place-items-center rounded-full bg-[#827768] text-white font-display text-base">
                    {step.day}
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/55">Day {step.day}</p>
                    <p className="font-display text-lg md:text-xl mt-0.5">{step.title}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-16 pr-2 text-sm text-foreground/75 leading-relaxed">
                {step.body}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* ACCOMMODATION */}
      <section className="container-x mx-auto max-w-[1500px] py-16">
        <SectionHeading
          eyebrow="Accommodation"
          title="Choose your comfort level"
          intro="Same itinerary, four ways to sleep. Select a category to see the recommended camps and pricing."
        />
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
                  Tier
                </p>
                <p className="mt-2 font-display text-2xl">{t.label}</p>
                <p className={`mt-3 text-xs ${selected ? "text-white/80" : "text-foreground/60"}`}>
                  From ${Math.round((tour.priceFrom * t.multiplier) / 10) * 10} pp
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-8 rounded-3xl border border-border bg-card/60 p-6 md:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-foreground/55">{activeTier.label} accommodation</p>
            <h3 className="mt-2 font-display text-3xl">Where you'll stay</h3>
            <p className="mt-4 text-sm text-foreground/75 leading-relaxed">{activeTier.blurb}</p>
            <ul className="mt-6 space-y-3">
              {activeTier.sample(tour.destination).map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#827768] shrink-0" />
                  <span className="text-foreground/85">{s}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-foreground/55">
              Final camps confirmed at booking based on availability and season.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={tour.image} alt="" className="aspect-[4/5] w-full rounded-2xl object-cover" />
            <div className="grid gap-3">
              <img src={tour.image} alt="" className="aspect-square w-full rounded-2xl object-cover" />
              <div className="rounded-2xl bg-[#3D372F] text-white p-5 flex flex-col justify-between">
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/60">Your selection</p>
                <div>
                  <p className="font-display text-2xl">{activeTier.label}</p>
                  <p className="text-xs text-white/70 mt-1">From ${price.toLocaleString()} per person</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="container-x mx-auto max-w-[1500px] py-16">
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent, per-person rates"
          intro="Rates are based on 2 guests sharing. Solo, family and larger-group pricing on request."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TIERS.map((t) => {
            const p = Math.round((tour.priceFrom * t.multiplier) / 10) * 10;
            const selected = t.key === tier;
            return (
              <div
                key={t.key}
                className={`rounded-2xl p-6 transition-all cursor-pointer ${
                  selected
                    ? "bg-[#827768] text-white shadow-elevated -translate-y-1"
                    : "bg-card/60 border border-border hover:-translate-y-0.5"
                }`}
                onClick={() => setTier(t.key)}
              >
                <p className={`text-[10px] uppercase tracking-[0.22em] ${selected ? "text-white/70" : "text-foreground/55"}`}>
                  {t.label}
                </p>
                <p className="mt-3 font-display text-3xl">${p.toLocaleString()}</p>
                <p className={`text-xs mt-1 ${selected ? "text-white/70" : "text-foreground/55"}`}>
                  per person · from
                </p>
                {selected && (
                  <p className="mt-4 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.2em]">
                    <Check size={12} /> Selected
                  </p>
                )}
              </div>
            );
          })}
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
