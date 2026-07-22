import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { SITE, IMAGES, DESTINATIONS } from "@/content/site";
import { FormBanner, SelectField, TextAreaField, TextField } from "@/components/site/FormField";

export const Route = createFileRoute("/plan-my-trip")({
  head: () => ({
    meta: [
      { title: "Plan My Trip — Tanzania Exploration" },
      { name: "description", content: "Request a tailor-made Tanzania trip. Share your dates, destination and travel style — a Tanzania Exploration consultant will reply within 24 hours." },
      { property: "og:title", content: "Plan My Trip — Tanzania Exploration" },
      { property: "og:description", content: "Request a tailor-made Tanzania trip with Tanzania Exploration." },
      { property: "og:image", content: IMAGES.heroLuxuryCamp },
      { property: "og:url", content: "/plan-my-trip" },
    ],
    links: [{ rel: "canonical", href: "/plan-my-trip" }],
  }),
  component: PlanMyTripPage,
});

// The endpoint your PHP handler will live at on Verpex/cPanel.
// Swap the fetch inside submitTripRequest to point at this once ready.
const BOOKING_ENDPOINT = "/send-booking.php";

type TripFormValues = {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  travelDate: string;
  travelers: string;
  budget: string;
  requests: string;
};

const INITIAL_VALUES: TripFormValues = {
  fullName: "",
  email: "",
  phone: "",
  destination: "",
  travelDate: "",
  travelers: "",
  budget: "",
  requests: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d][\d\s()-]{6,}$/;

function validate(values: TripFormValues): Partial<Record<keyof TripFormValues, string>> {
  const errors: Partial<Record<keyof TripFormValues, string>> = {};
  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";
  else if (values.fullName.trim().length < 2) errors.fullName = "Name is too short.";
  else if (values.fullName.length > 100) errors.fullName = "Name must be under 100 characters.";

  if (!values.email.trim()) errors.email = "Email address is required.";
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  else if (values.email.length > 255) errors.email = "Email is too long.";

  if (!values.phone.trim()) errors.phone = "Phone or WhatsApp number is required.";
  else if (!PHONE_RE.test(values.phone.trim())) errors.phone = "Please enter a valid phone number.";

  if (!values.destination) errors.destination = "Choose a preferred destination.";

  if (!values.travelDate) errors.travelDate = "Please choose a travel date.";
  else {
    const chosen = new Date(values.travelDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (chosen < today) errors.travelDate = "Travel date must be in the future.";
  }

  if (!values.travelers.trim()) errors.travelers = "Number of travelers is required.";
  else {
    const n = Number(values.travelers);
    if (!Number.isFinite(n) || n < 1 || n > 40) errors.travelers = "Enter a number between 1 and 40.";
  }

  if (values.requests.length > 2000) errors.requests = "Please keep requests under 2000 characters.";

  return errors;
}

// Stubbed submit — the real Verpex/cPanel handler will replace the fake resolve.
async function submitTripRequest(values: TripFormValues): Promise<void> {
  // eslint-disable-next-line no-console
  if (import.meta.env.DEV) console.info("[plan-my-trip] payload ready for", BOOKING_ENDPOINT, values);
  await new Promise((resolve) => setTimeout(resolve, 900));
  // Future PHP wiring:
  // const res = await fetch(BOOKING_ENDPOINT, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json", Accept: "application/json" },
  //   body: JSON.stringify(values),
  // });
  // if (!res.ok) throw new Error("Failed to submit trip request");
}

function PlanMyTripPage() {
  const [values, setValues] = useState<TripFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Partial<Record<keyof TripFormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const setField = <K extends keyof TripFormValues>(key: K, val: TripFormValues[K]) => {
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
      await submitTripRequest(values);
      setStatus("success");
      setValues(INITIAL_VALUES);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Something went wrong sending your request. Please try again or WhatsApp us directly.");
    }
  };

  const destinationOptions = [
    ...DESTINATIONS.map((d) => ({ value: d.name, label: d.name })),
    { value: "Multi-destination / Northern Circuit", label: "Multi-destination / Northern Circuit" },
    { value: "Not sure yet — help me decide", label: "Not sure yet — help me decide" },
  ];

  const isSubmitting = status === "submitting";
  const isSuccess = status === "success";

  return (
    <>
      <section className="pt-40 pb-16 container-x mx-auto max-w-[1500px]">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Plan my trip</p>
        <h1 className="mt-5 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance max-w-4xl">
          Let's start scripting your Tanzania.
        </h1>
        <p className="mt-8 max-w-2xl text-base md:text-lg text-foreground/75">
          Tell us your dates, your travelers and what excites you. A Tanzania Exploration trip designer will reply within 24 hours with a tailored proposal.
        </p>
      </section>

      <section className="container-x mx-auto max-w-[1500px] pb-32 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 glass rounded-3xl p-8 md:p-10">
          {isSuccess && (
            <div className="mb-6">
              <FormBanner variant="success">
                <strong className="font-medium">Thank you!</strong> We've received your trip request. A Tanzania Exploration travel consultant will contact you shortly to help you plan your journey.
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

            <div className="grid md:grid-cols-2 gap-5">
              <TextField
                label="Phone / WhatsApp"
                name="phone"
                type="tel"
                required
                placeholder="+255 XXX XXX XXX"
                value={values.phone}
                onChange={(v) => setField("phone", v)}
                error={errors.phone}
                autoComplete="tel"
                inputMode="tel"
              />
              <SelectField
                label="Preferred destination"
                name="destination"
                required
                value={values.destination}
                onChange={(v) => setField("destination", v)}
                options={destinationOptions}
                placeholder="Choose a destination…"
                error={errors.destination}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <TextField
                label="Preferred travel date"
                name="travel_date"
                type="date"
                required
                value={values.travelDate}
                onChange={(v) => setField("travelDate", v)}
                error={errors.travelDate}
              />
              <TextField
                label="Number of travelers"
                name="travelers"
                type="number"
                required
                placeholder="e.g. 2"
                min={1}
                max={40}
                inputMode="numeric"
                value={values.travelers}
                onChange={(v) => setField("travelers", v)}
                error={errors.travelers}
              />
              <TextField
                label="Budget (optional)"
                name="budget"
                placeholder="e.g. USD 4,000 pp"
                value={values.budget}
                onChange={(v) => setField("budget", v)}
                error={errors.budget}
                hint="Ballpark per person is fine."
              />
            </div>

            <TextAreaField
              label="Special requests"
              name="requests"
              placeholder="Dietary needs, celebrations, mobility, dream sightings, must-see parks…"
              value={values.requests}
              onChange={(v) => setField("requests", v)}
              error={errors.requests}
              rows={6}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-full bg-[#827768] px-7 py-4 text-sm font-medium text-white shadow-glow-lime disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={14} className="animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Request my trip <Send size={14} />
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
            <p className="mt-3 text-sm text-muted-foreground">Fastest way to reach our trip designers — typically responds within an hour.</p>
            <span className="mt-5 inline-block text-sm text-primary">Open chat →</span>
          </a>
        </aside>
      </section>
    </>
  );
}
