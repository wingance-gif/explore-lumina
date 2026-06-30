import { MessageCircle } from "lucide-react";
import { SITE } from "@/content/site";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
        "Hi Sahara Wild, I'd like to plan a trip to Tanzania."
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-accent text-primary-foreground shadow-glow-lime hover:scale-110 transition-transform animate-pulse"
    >
      <MessageCircle size={22} />
    </a>
  );
}
