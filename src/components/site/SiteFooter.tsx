import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, MapPin, Mail, Phone } from "lucide-react";
import { SITE } from "@/content/site";
import { useTheme } from "@/hooks/use-theme";
import logoGold from "@/assets/logo-gold.png";
import logoBlack from "@/assets/logo-black.png";

export function SiteFooter() {
  const { light } = useTheme();
  const logo = light ? logoBlack : logoGold;
  return (
    <footer className="relative mt-32 border-t border-border bg-surface">
      <div className="container-x mx-auto max-w-[1500px] py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span
                className={`grid place-items-center h-16 w-16 rounded-full overflow-hidden ring-1 ring-border shadow-sm ${
                  light ? "bg-white" : "bg-black"
                }`}
              >
                <img src={logo} alt={SITE.name} className="h-12 w-12 object-contain" />
              </span>
              <span className="font-display text-2xl">{SITE.name}</span>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Cinematic safaris, summit treks and Indian Ocean escapes — designed end to end by people who live here.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href={SITE.social.instagram} aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full glass hover:text-primary transition-colors">
                <Instagram size={16} />
              </a>
              <a href={SITE.social.facebook} aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full glass hover:text-primary transition-colors">
                <Facebook size={16} />
              </a>
              <a href={SITE.social.youtube} aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-full glass hover:text-primary transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li><Link to="/destinations" className="hover:text-primary">Destinations</Link></li>
              <li><Link to="/tours" className="hover:text-primary">All tours</Link></li>
              <li><Link to="/accommodation" className="hover:text-primary">Luxury stays</Link></li>
              <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-primary">Journal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 text-primary" /> {SITE.address}</li>
              <li className="flex items-start gap-2"><Phone size={14} className="mt-0.5 text-primary" /> <a href={`tel:${SITE.phone}`} className="hover:text-foreground">{SITE.phone}</a></li>
              <li className="flex items-start gap-2"><Mail size={14} className="mt-0.5 text-primary" /> <a href={`mailto:${SITE.email}`} className="hover:text-foreground">{SITE.email}</a></li>
              <li className="text-xs pt-2">{SITE.hours}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg">Newsletter</h4>
            <p className="mt-5 text-sm text-muted-foreground">Stories, field notes and last-minute lodge availability — once a month.</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-full bg-input/40 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button className="rounded-full bg-[#827768] px-5 py-3 text-sm font-medium text-white hover:scale-105 transition-transform">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {SITE.name}. Crafted in Arusha, Tanzania.</p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
