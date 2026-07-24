import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Compass, Heart, Leaf, ShieldCheck, Users, Sparkles } from "lucide-react";
import { IMAGES } from "@/content/site";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { fadeUp } from "@/lib/motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tanzania Exploration — Tanzania-Owned Safari Outfitter" },
      { name: "description", content: "Over twenty years crafting bespoke safaris, Kilimanjaro climbs and Zanzibar escapes across Tanzania." },
      { property: "og:title", content: "About Tanzania Exploration" },
      { property: "og:description", content: "Tanzanian-owned. Conservation-first. Designed end to end." },
      { property: "og:image", content: IMAGES.maasai },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const REASONS = [
  { icon: Heart, t: "Tailor-made journeys", b: "Every itinerary is custom-built around your travel style, pace and budget — never off a shelf." },
  { icon: Leaf, t: "Conservation-first", b: "Dedicated to ecotourism — protecting landscapes, wildlife and the indigenous communities who call them home." },
  { icon: ShieldCheck, t: "Licensed & trusted", b: "Fully licensed by the Ministry of Tourism with a proven reputation as a premier East African tour operator." },
  { icon: Users, t: "For every traveller", b: "Solo adventurers, couples, families, honeymooners and corporate groups — we host them all with the same care." },
  { icon: Compass, t: "20+ years of expertise", b: "Two decades of accumulated safari planning across Tanzania, Kenya, Rwanda and Uganda." },
  { icon: Award, t: "Best-in-class lodges", b: "Hand-picked hotels, camps and lodges — only the most exceptional standards make our roster." },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 container-x mx-auto max-w-[1500px]">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">About</p>
        <h1 className="mt-5 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance max-w-5xl">
          Born in Arusha. Designed for the world.
        </h1>
      </section>

      {/* Company History */}
      <section id="history" className="container-x mx-auto max-w-[1500px] grid lg:grid-cols-2 gap-12 pb-24 items-center scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="aspect-[4/5] overflow-hidden rounded-3xl"
        >
          <img src={IMAGES.maasai} alt="Tanzania Exploration team in the field" className="h-full w-full object-cover" />
        </motion.div>
        <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Company History</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground">Two decades exploring Tanzania.</h2>
          <p>
            Our dynamic team comprises expert safari guides, tour guides and wildlife trackers, alongside
            specialist mountain climbing and trekking professionals. With over twenty years of accumulated
            industry experience, our team brings insightful knowledge and skill into every area of
            specialisation.
          </p>
          <p>
            We create journeys for groups from around the world — budget safaris through to exclusive private
            luxury experiences. Whatever your preference, we help you get the very best from your African
            safari, Mt Kilimanjaro climb, cultural interactions or Zanzibar beach vacation, with a great
            choice of national parks and Tanzanian attractions to explore.
          </p>
          <p>
            We adopt a hands-on approach and maintain a personal touch — operating as specialists for
            honeymooners, private safaris, family tours and corporate incentive groups across Mt Kilimanjaro
            climbing and Zanzibar island vacations. Every booking is tailor-made to your specifications for a
            once-in-a-lifetime, memorable travel experience.
          </p>
          <Link to="/plan-my-trip" className="inline-flex items-center gap-2 rounded-full bg-[#827768] px-7 py-4 text-sm font-medium text-white shadow-glow-lime">
            Plan your trip →
          </Link>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="container-x mx-auto max-w-[1500px] pb-24 scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-2xl border border-[#C2B6A2]/40 bg-[#C2B6A2]/35 p-6 shadow-elevated backdrop-blur-md"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Our Mission</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">Unforgettable, responsible journeys.</h2>
            <p className="mt-6 text-foreground/80 leading-relaxed">
              To provide exceptional and unforgettable safari experiences in Tanzania, showcasing the natural
              wonders, diverse wildlife and rich cultural heritage of the region — while prioritising
              conservation, sustainability and the well-being of our guests and local communities.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl border border-[#C2B6A2]/40 bg-[#C2B6A2]/35 p-6 shadow-elevated backdrop-blur-md"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Our Vision</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">Tanzania's leading safari company.</h2>
            <p className="mt-6 text-foreground/80 leading-relaxed">
              To be the leading safari company in Tanzania, renowned for excellence, quality, authenticity and
              responsible tourism. We aim to inspire a deep appreciation for nature, foster adventure, and
              create lifelong memories — while contributing positively to the conservation and development of
              Tanzania's wildlife and communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="container-x mx-auto max-w-[1500px] pb-32 scroll-mt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Why Choose Us</p>
        <h2 className="mt-4 font-display text-3xl md:text-5xl mb-12">What sets us apart.</h2>
        <ScrollReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((v) => (
            <motion.div key={v.t} variants={fadeUp}  className="rounded-2xl border border-[#C2B6A2]/40 bg-[#C2B6A2]/35 p-6 shadow-elevated backdrop-blur-md"
>
              <v.icon className="text-primary" size={22} />
              <h3 className="mt-5 font-display text-xl">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.b}</p>
            </motion.div>
          ))}
        </ScrollReveal>
      </section>

      {/* Team - Coming Soon */}
      <section id="team" className="container-x mx-auto max-w-[1500px] pb-32 scroll-mt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Our Team</p>
        <h2 className="mt-4 font-display text-3xl md:text-5xl mb-12">Meet the people behind the journeys.</h2>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-16 md:p-24 text-center"
        >
          <Sparkles className="mx-auto text-primary" size={36} />
          <h3 className="mt-6 font-display text-4xl md:text-5xl">Coming soon.</h3>
          <p className="mt-4 text-foreground/70 max-w-xl mx-auto leading-relaxed">
            We're putting together portraits and stories of the guides, drivers, chefs and trip designers
            who make every Tanzania Exploration journey what it is. Check back shortly.
          </p>
          <Link to="/plan-my-trip" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#827768] px-7 py-4 text-sm font-medium text-white shadow-glow-lime">
            Get in touch →
          </Link>
        </motion.div>
      </section>
    </>
  );
}
