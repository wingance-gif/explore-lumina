import { useState, type ReactNode } from "react";
import { Loader2, Send } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { FormBanner, TextAreaField, TextField } from "@/components/site/FormField";

const BOOKING_ENDPOINT = "/send-booking.php";

type Values = {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  travelDate: string;
  travelers: string;
  requests: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d][\d\s()-]{6,}$/;

function validate(v: Values) {
  const e: Partial<Record<keyof Values, string>> = {};
  if (!v.fullName.trim()) e.fullName = "Please enter your full name.";
  if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email.";
  if (!PHONE_RE.test(v.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (!v.travelDate) e.travelDate = "Please choose a date.";
  if (!v.travelers.trim() || Number(v.travelers) < 1) e.travelers = "Enter number of travelers.";
  return e;
}

export function PlanTripDialog({
  trigger,
  destination,
  experienceTitle,
}: {
  trigger: ReactNode;
  destination?: string;
  experienceTitle?: string;
}) {
  const [open, setOpen] = useState(false);
  const initial: Values = {
    fullName: "",
    email: "",
    phone: "",
    destination: destination ?? "",
    travelDate: "",
    travelers: "",
    requests: experienceTitle ? `Interested in: ${experienceTitle}` : "",
  };
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const set = <K extends keyof Values>(k: K, val: Values[K]) => {
    setValues((s) => ({ ...s, [k]: val }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("error");
      setErrorMsg("Please fix the highlighted fields.");
      return;
    }
    setStatus("submitting");
    setErrorMsg(null);
    try {
      if (import.meta.env.DEV) console.info("[plan-trip-dialog]", BOOKING_ENDPOINT, values);
      await new Promise((r) => setTimeout(r, 800));
      // Future: fetch(BOOKING_ENDPOINT, { method: 'POST', body: JSON.stringify(values), ... })
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) { setStatus("idle"); setValues(initial); setErrors({}); } }}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            {experienceTitle ? `Plan: ${experienceTitle}` : "Plan this experience"}
          </DialogTitle>
          <DialogDescription>
            Share a few details and a Tanzania Exploration consultant will reply within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="py-6">
            <FormBanner variant="success">
              <strong className="font-medium">Thank you!</strong> We've received your trip request. A Tanzania Exploration travel consultant will contact you shortly to help you plan your journey.
            </FormBanner>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="space-y-4 pt-2">
            {status === "error" && errorMsg && <FormBanner variant="error">{errorMsg}</FormBanner>}
            <div className="grid md:grid-cols-2 gap-4">
              <TextField label="Full name" name="fullName" required value={values.fullName} onChange={(v) => set("fullName", v)} error={errors.fullName} />
              <TextField label="Email" name="email" type="email" required value={values.email} onChange={(v) => set("email", v)} error={errors.email} />
              <TextField label="Phone / WhatsApp" name="phone" required value={values.phone} onChange={(v) => set("phone", v)} error={errors.phone} inputMode="tel" />
              <TextField label="Destination" name="destination" value={values.destination} onChange={(v) => set("destination", v)} error={errors.destination} />
              <TextField label="Travel date" name="travelDate" type="date" required value={values.travelDate} onChange={(v) => set("travelDate", v)} error={errors.travelDate} />
              <TextField label="Travelers" name="travelers" type="number" required min={1} max={40} value={values.travelers} onChange={(v) => set("travelers", v)} error={errors.travelers} />
            </div>
            <TextAreaField label="Special requests" name="requests" rows={4} value={values.requests} onChange={(v) => set("requests", v)} error={errors.requests} />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-2 rounded-full bg-[#827768] px-6 py-3 text-sm font-medium text-white disabled:opacity-60"
              >
                {status === "submitting" ? (<><Loader2 size={14} className="animate-spin" /> Sending…</>) : (<>Request my trip <Send size={14} /></>)}
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
