import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { SITE, IMAGES } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sahara Wild — Plan Your Tanzania Trip" },
      { name: "description", content: "Tell us what you dream of seeing in Tanzania. We'll reply within 24 hours with a tailor-made proposal." },
      { property: "og:title", content: "Contact Sahara Wild" },
      { property: "og:description", content: "Plan your tailor-made Tanzania trip." },
      { property: "og:image", content: IMAGES.heroLuxuryCamp },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="pt-40 pb-16 container-x mx-auto max-w-[1500px]">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Plan your trip</p>
        <h1 className="mt-5 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance max-w-4xl">
          Let's start scripting your Tanzania.
        </h1>
        <p className="mt-8 max-w-2xl text-base md:text-lg text-foreground/75">
          Tell us your dates, your travelers and what excites you. A trip designer will reply within 24 hours with ideas.
        </p>
      </section>

      <section className="container-x mx-auto max-w-[1500px] pb-32 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 glass rounded-3xl p-8 md:p-10">
          <form
            className="space-y-5"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Your name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Approx. travel date" name="date" placeholder="e.g. Aug 2026" />
              <Field label="Travelers" name="people" placeholder="e.g. 2 adults" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-foreground/60">Tell us about your dream trip</label>
              <textarea
                name="message" required rows={6}
                placeholder="Safari, summit, beach, family, honeymoon..."
                className="mt-2 w-full rounded-2xl bg-input/40 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-4 text-sm font-medium text-primary-foreground shadow-glow-lime disabled:opacity-60"
            >
              {sent ? "Thank you — we'll be in touch." : <>Send enquiry <Send size={14} /></>}
            </button>
          </form>
        </div>

        <aside className="lg:col-span-2 space-y-6">
          <div className="glass rounded-3xl p-8">
            <h3 className="font-display text-2xl">Talk to us</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3"><MapPin className="text-primary mt-1" size={16} /> {SITE.address}</li>
              <li className="flex items-start gap-3"><Phone className="text-primary mt-1" size={16} /><a href={`tel:${SITE.phone}`} className="hover:text-primary">{SITE.phone}</a></li>
              <li className="flex items-start gap-3"><Mail className="text-primary mt-1" size={16} /><a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a></li>
              <li className="text-xs text-muted-foreground pt-2">{SITE.hours}</li>
            </ul>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="block glass rounded-3xl p-8 hover:bg-surface-elevated transition-colors">
            <h3 className="font-display text-2xl">WhatsApp us</h3>
            <p className="mt-3 text-sm text-muted-foreground">Fastest way to reach our trip designers — typically responds within an hour.</p>
            <span className="mt-5 inline-block text-sm text-primary">Open chat →</span>
          </a>
        </aside>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-[0.18em] text-foreground/60">{label}</label>
      <input
        id={name} name={name} type={type} required={required} placeholder={placeholder}
        className="mt-2 w-full rounded-full bg-input/40 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
