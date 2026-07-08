import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { SITE, IMAGES } from "@/content/site";
import { FormBanner, TextAreaField, TextField } from "@/components/site/FormField";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Tanzania Exploration — General Inquiries" },
      { name: "description", content: "Get in touch with Tanzania Exploration for general inquiries. We'll reply to your message as soon as possible." },
      { property: "og:title", content: "Contact Tanzania Exploration" },
      { property: "og:description", content: "General inquiries for Tanzania Exploration." },
      { property: "og:image", content: IMAGES.heroLuxuryCamp },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

// The endpoint your PHP handler will live at on Verpex/cPanel.
const CONTACT_ENDPOINT = "/send-contact.php";

type ContactFormValues = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

const INITIAL_VALUES: ContactFormValues = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: ContactFormValues): Partial<Record<keyof ContactFormValues, string>> {
  const errors: Partial<Record<keyof ContactFormValues, string>> = {};
  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";
  else if (values.fullName.trim().length < 2) errors.fullName = "Name is too short.";
  else if (values.fullName.length > 100) errors.fullName = "Name must be under 100 characters.";

  if (!values.email.trim()) errors.email = "Email address is required.";
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  else if (values.email.length > 255) errors.email = "Email is too long.";

  if (!values.subject.trim()) errors.subject = "Please add a subject.";
  else if (values.subject.length > 150) errors.subject = "Subject must be under 150 characters.";

  if (!values.message.trim()) errors.message = "Please write your message.";
  else if (values.message.trim().length < 10) errors.message = "Message is too short.";
  else if (values.message.length > 2000) errors.message = "Message must be under 2000 characters.";

  return errors;
}

async function submitContactMessage(values: ContactFormValues): Promise<void> {
  if (import.meta.env.DEV) console.info("[contact] payload ready for", CONTACT_ENDPOINT, values);
  await new Promise((resolve) => setTimeout(resolve, 900));
  // Future PHP wiring:
  // const res = await fetch(CONTACT_ENDPOINT, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json", Accept: "application/json" },
  //   body: JSON.stringify(values),
  // });
  // if (!res.ok) throw new Error("Failed to send message");
}

function ContactPage() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const setField = <K extends keyof ContactFormValues>(key: K, val: ContactFormValues[K]) => {
    setValues((v) => ({ ...v, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setErrorMessage("Please fix the highlighted fields and try again.");
      return;
    }
    setStatus("submitting");
    setErrorMessage(null);
    try {
      await submitContactMessage(values);
      setStatus("success");
      setValues(INITIAL_VALUES);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Something went wrong sending your message. Please try again or email us directly.");
    }
  };

  const isSubmitting = status === "submitting";
  const isSuccess = status === "success";

  return (
    <>
      <section className="pt-40 pb-16 container-x mx-auto max-w-[1500px]">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Contact</p>
        <h1 className="mt-5 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance max-w-4xl">
          We're Ready to Help You Explore Tanzania
        </h1>
        <p className="mt-8 max-w-2xl text-base md:text-lg text-foreground/75">
          For general inquiries, partnerships or questions about our safaris, send us a message and our team will reply as soon as possible. Looking to plan a trip? Use the <a className="text-primary hover:opacity-80" href="/plan-my-trip">Plan My Trip</a> page instead.
        </p>
      </section>

      <section className="container-x mx-auto max-w-[1500px] pb-32 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 glass rounded-3xl p-8 md:p-10">
          {isSuccess && (
            <div className="mb-6">
              <FormBanner variant="success">
                <strong className="font-medium">Thank you for contacting Tanzania Exploration.</strong> We've received your message and will get back to you as soon as possible.
              </FormBanner>
            </div>
          )}
          {status === "error" && errorMessage && (
            <div className="mb-6">
              <FormBanner variant="error">{errorMessage}</FormBanner>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="grid md:grid-cols-2 gap-5">
              <TextField
                label="Full name"
                name="full_name"
                required
                placeholder="e.g. Jane Doe"
                value={values.fullName}
                onChange={(v) => setField("fullName", v)}
                error={errors.fullName}
                autoComplete="name"
              />
              <TextField
                label="Email address"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                value={values.email}
                onChange={(v) => setField("email", v)}
                error={errors.email}
                autoComplete="email"
              />
            </div>

            <TextField
              label="Subject"
              name="subject"
              required
              placeholder="e.g. Partnership, media, general question"
              value={values.subject}
              onChange={(v) => setField("subject", v)}
              error={errors.subject}
            />

            <TextAreaField
              label="Message"
              name="message"
              required
              placeholder="Write your message here…"
              value={values.message}
              onChange={(v) => setField("message", v)}
              error={errors.message}
              rows={6}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-4 text-sm font-medium text-primary-foreground shadow-glow-lime disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={14} className="animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Send message <Send size={14} />
                </>
              )}
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
            <p className="mt-3 text-sm text-muted-foreground">Fastest way to reach us — typically responds within an hour.</p>
            <span className="mt-5 inline-block text-sm text-primary">Open chat →</span>
          </a>
        </aside>
      </section>
    </>
  );
}
