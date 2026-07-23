import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Compass,
  Leaf,
  ShieldCheck,
  Users,
  Star,
  Headphones,
  MapPin,
  Sparkles,
  Wallet,
  Zap,
  Send,
} from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { CinematicHero } from "@/components/site/CinematicHero";
import { DestinationCard } from "@/components/site/DestinationCard";
import { TourCard } from "@/components/site/TourCard";
import { Testimonials } from "@/components/site/Testimonials";
import { Partners } from "@/components/site/Partners";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { DESTINATIONS, TOURS, CATEGORIES, IMAGES } from "@/content/site";
import { fadeUp } from "@/lib/motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tanzania Exploration — Safaris, Kilimanjaro & Zanzibar" },
      {
        name: "description",
        content:
          "Experience Tanzania beyond expectations. Bespoke safaris across Serengeti & Ngorongoro, Kilimanjaro treks and Zanzibar escapes — built by local experts.",
      },
      { property: "og:title", content: "Tanzania Exploration — Tanzania, Untamed" },
      {
        property: "og:description",
        content: "Cinematic safaris, summit treks and Indian Ocean escapes.",
      },
      { property: "og:image", content: IMAGES.heroSerengeti },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const { light } = useTheme();
  const featuredTours = TOURS.slice(0, 6);
  const topDestinations = DESTINATIONS.slice(0, 5);

  return (
    <>
      {/* 1. Hero */}
      <section id="welcome">
        <CinematicHero />
      </section>

      {/* Quick inquiry form */}
      <section className="container-x mx-auto max-w-[1200px] mt-12 md:mt-16 relative z-20 px-4">
        <form
          action="/plan-my-trip"
          method="get"
          className="glass rounded-2xl p-5 md:p-6 shadow-xl border border-border/50"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">Name</label>
              <input
                name="name"
                required
                className="mt-1 w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">Destination</label>
              <input
                name="destination"
                className="mt-1 w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm"
                placeholder="Serengeti, Zanzibar…"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">Travel date</label>
              <input
                type="date"
                name="date"
                className="date-input-dark mt-1 w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm text-foreground/80"
                style={{ colorScheme: light ? "light" : "dark" }}
              />
            </div>
          </div>
          <div className="mt-5 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#827768] px-7 py-3 text-sm font-medium text-white hover:scale-[1.02] transition-transform"
            >
              Plan my safari <Send size={14} />
            </button>
          </div>
        </form>
      </section>


      {/* 2. Social proof */}
      <section className="container-x mx-auto max-w-[1500px] py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, stat: "5,000+", label: "Travellers served" },
            { icon: Star, stat: "5-Star", label: "Trip experiences" },
            { icon: ShieldCheck, stat: "Certified", label: "Local expert guides" },
            { icon: Headphones, stat: "24/7", label: "On-trip support" },
          ].map((b) => (
            <motion.div
              key={b.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl p-6 text-center bg-[#8A7C67]/35 backdrop-blur-md border border-[#8A7C67]/40 shadow-elevated"
            >
              <b.icon className="mx-auto text-auto" size={22} />
              <p className="mt-4 font-display text-2xl text-auto">{b.stat}</p>
              <p className="mt-1 text-xs lowercase tracking-[0.2em] text-auto/85">
                {b.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* 3. Featured experiences */}
      <section id="featured" className="container-x mx-auto max-w-[1500px] py-24 md:py-28 scroll-mt-24">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-primary">Featured experiences</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-balance leading-[1.05]">Pick your kind of wild.</h2>
            <p className="mt-5 text-sm md:text-base text-foreground/65 leading-relaxed max-w-md">
              Eleven ways to experience Tanzania — choose your rhythm, your comfort, your kind of adventure.
            </p>
          </div>
          <Link
            to="/tours"
            className="group hidden md:inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
          >
            All categories <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        <ScrollReveal className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map((c) => (
            <motion.div key={c.slug} variants={fadeUp}>
              <Link
                to="/tours"
                className="group relative block aspect-square overflow-hidden rounded-2xl"
              >
                <img
                  src={c.image}
                  alt={c.label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <span className="absolute inset-x-4 bottom-4 font-display text-xl text-white">{c.label}</span>
              </Link>
            </motion.div>
          ))}
        </ScrollReveal>
      </section>

      {/* 4. Popular tour packages */}
      <section className="container-x mx-auto max-w-[1500px] py-24 md:py-32">
        <div className="flex items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-primary">Popular packages</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl text-balance leading-[1.02]">
              Tours travellers love.
            </h2>
            <p className="mt-5 text-sm md:text-base text-foreground/65 leading-relaxed max-w-md">
              Hand-picked journeys, refined by hundreds of guests — every one built to be tailored around you.
            </p>
          </div>
          <Link
            to="/safari-itineraries"
            className="group hidden md:inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
          >
            All itineraries <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        <ScrollReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTours.map((t) => (
            <TourCard key={t.slug} tour={t} />
          ))}
        </ScrollReveal>
      </section>

      {/* 5. Top destinations */}
      <section id="destinations" className="container-x mx-auto max-w-[1500px] py-24 md:py-32 scroll-mt-24">
        <div className="flex items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-primary">Top destinations</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl text-balance leading-[1.02]">
              Iconic Tanzania.
            </h2>
            <p className="mt-5 text-sm md:text-base text-foreground/65 leading-relaxed max-w-md">
              From the endless Serengeti plains to the turquoise shores of Zanzibar — the places worth crossing the world for.
            </p>
          </div>
          <Link
            to="/destinations"
            className="group hidden md:inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
          >
            All destinations <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        <ScrollReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {topDestinations.map((d, i) => (
            <DestinationCard key={d.slug} {...d} index={i} />
          ))}
        </ScrollReveal>
      </section>

      {/* 6. Why Choose Us */}
      <section className="container-x mx-auto max-w-[1500px] py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.35em] text-primary">Why choose us</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl text-balance leading-[1.02]">
            Built by locals. Loved by travellers.
          </h2>
          <p className="mt-5 text-sm md:text-base text-foreground/65 leading-relaxed">
            Fifteen years of guiding, and a promise: no template itineraries, no shortcuts, no compromises.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { icon: MapPin, label: "Local Experts", text: "Tanzanian guides who know every river crossing." },
            { icon: Sparkles, label: "Customized Trips", text: "Every itinerary tailored around you." },
            { icon: Wallet, label: "Luxury & Budget", text: "From mobile camps to private villas." },
            { icon: ShieldCheck, label: "Safe & Reliable", text: "Licensed, insured, on-ground 24/7." },
            { icon: Zap, label: "Fast Booking", text: "Quote within 24 hours, confirm in days." },
          ].map((b) => (
            <motion.div
              key={b.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl p-6 text-center bg-[#C2B6A2]/35 backdrop-blur-md border border-[#C2B6A2]/50 shadow-elevated"
            >
              <b.icon className="mx-auto text-primary" size={24} />
              <p className="mt-4 font-display text-lg">{b.label}</p>
              <p className="mt-2 text-sm text-foreground/75">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Parallax CTA */}
      <section className="relative my-32 h-[75svh] min-h-[520px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${IMAGES.cta.parallax})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)]" />
        <div className="relative z-10 container-x mx-auto max-w-[1100px] h-full flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Experience Tanzania</p>
            <h2 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance text-white drop-shadow-[0_6px_30px_rgba(0,0,0,0.5)]">
              Beyond Expectations.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm md:text-base text-white/80 leading-relaxed">
              Let our local experts craft a journey shaped entirely around you — every camp, every guide, every sunrise.
            </p>
            <Link
              to="/plan-my-trip"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#827768] px-9 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white shadow-[0_20px_60px_-15px_rgba(130,119,104,0.8)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_25px_70px_-15px_rgba(130,119,104,1)]"
            >
              Plan my trip <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section id="testimonials" className="scroll-mt-24">
        <Testimonials />
      </section>

      {/* Trust strip */}
<section className="container-x mx-auto max-w-[1500px] pb-24">
  <div className="grid gap-6 md:grid-cols-4">
    {[
      { icon: Award, label: "15+ years guiding", text: "Local guides, KPAP-certified crews." },
      { icon: ShieldCheck, label: "100% tailor-made", text: "Every itinerary built around you." },
      { icon: Leaf, label: "Low-impact travel", text: "Conservation-first camps and partners." },
      { icon: Compass, label: "24/7 in-country", text: "On-ground team from arrival to departure." },
    ].map((b) => (
      <motion.div
        key={b.label}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="rounded-2xl border border-[#8A7C67]/40 bg-[#8A7C67]/35 p-6 shadow-elevated backdrop-blur-md"
      >
        <b.icon className="text-primary" size={22} />
        <p className="mt-4 font-display text-lg">{b.label}</p>
        <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
      </motion.div>
    ))}
  </div>
</section>

      {/* 8. Partners */}
      <Partners />
    </>
  );
}
