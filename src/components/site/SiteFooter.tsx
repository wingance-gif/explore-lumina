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
            <h4 className="font-display text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-10 after:bg-primary">Explore</h4>
            <ul className="mt-2 space-y-3.5 text-sm text-muted-foreground">
              <li><Link to="/destinations" className="inline-block transition-all duration-300 hover:text-primary hover:translate-x-1">Destinations</Link></li>
              <li><Link to="/tours" className="inline-block transition-all duration-300 hover:text-primary hover:translate-x-1">All tours</Link></li>
              <li><Link to="/accommodation" className="inline-block transition-all duration-300 hover:text-primary hover:translate-x-1">Luxury stays</Link></li>
              <li><Link to="/gallery" className="inline-block transition-all duration-300 hover:text-primary hover:translate-x-1">Gallery</Link></li>
              <li><Link to="/blog" className="inline-block transition-all duration-300 hover:text-primary hover:translate-x-1">Journal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-10 after:bg-primary">Contact</h4>
            <ul className="mt-2 space-y-3.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5"><MapPin size={14} className="mt-0.5 shrink-0 text-primary" /> <span>{SITE.address}</span></li>
              <li className="flex items-start gap-2.5"><Phone size={14} className="mt-0.5 shrink-0 text-primary" /> <a href={`tel:${SITE.phone}`} className="hover:text-foreground transition-colors">{SITE.phone}</a></li>
              <li className="flex items-start gap-2.5"><Mail size={14} className="mt-0.5 shrink-0 text-primary" /> <a href={`mailto:${SITE.email}`} className="hover:text-foreground transition-colors">{SITE.email}</a></li>
              <li className="text-xs pt-2 text-muted-foreground/80">{SITE.hours}</li>
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
            <div className="flex justify-between items-center">
              <p className="text-xs text-muted-foreground">Site By</p>
            <img src="/images/gallery/homeeee.png" alt="logo" className="w-60 h-10" />
            </div>
         <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
