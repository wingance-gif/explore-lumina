import { Link, useLocation } from "@tanstack/react-router";

import { useEffect, useRef, useState } from "react";

import { Menu, X, Sun, Moon, Minus, Plus, ChevronDown } from "lucide-react";

import { SITE } from "@/content/site";

import { useTheme } from "@/hooks/use-theme";

import { useFontSize } from "@/hooks/use-font-size";

import logoGold from "@/assets/logo-black.png";

import logoBlack from "@/assets/logo-black.png";



type SubLink = { label: string; to: string; hash?: string };

type NavGroup = { label: string; to: string; sub?: SubLink[] };



const NAV: NavGroup[] = [
  { label: "Home", to: "/" },
  {
    label: "Experiences",
    to: "/experiences",
    sub: [
      { label: "Safari Itineraries", to: "/safari-itineraries" },
      { label: "Kilimanjaro", to: "/trekking-packages" },
      { label: "Zanzibar", to: "/zanzibar-packages" },
      { label: "Day Trips", to: "/tours", hash: "day-trips" },
      { label: "Destinations", to: "/destinations" },
    ],
  },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];



export function SiteNav() {

  const [scrolled, setScrolled] = useState(false);

  const [open, setOpen] = useState(false);

  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  const { light, toggle } = useTheme();

  const { scale, inc, dec, reset } = useFontSize();

  const location = useLocation();

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);



  useEffect(() => {

    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);

  }, []);



  useEffect(() => {

    setOpen(false);

    setOpenGroup(null);

    setMobileGroup(null);

  }, [location.pathname, location.hash]);



  const logo = light ? logoBlack : logoGold;



  const hoverOpen = (label: string) => {

    if (closeTimer.current) clearTimeout(closeTimer.current);

    setOpenGroup(label);

  };

  const hoverClose = () => {

    if (closeTimer.current) clearTimeout(closeTimer.current);

    closeTimer.current = setTimeout(() => setOpenGroup(null), 150);

  };



  return (

    <header

      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${

        scrolled ? "bg-cream/10 backdrop-blur-md shadow-elevated" : "bg-transparent backdrop-blur-none"

      }`}

    >

      <div className="container-x mx-auto flex h-18 max-w-[1500px] items-center justify-between py-4">

        <Link to="/" className="flex items-center gap-3 group" aria-label={SITE.name}>

          <span

            className="grid place-items-center h-12 w-12 md:h-14 md:w-14 rounded-full overflow-hidden ring-1 ring-border shadow-sm bg-white"

          >

            <img

              src={logo}

              alt={SITE.name}

              className="h-9 w-9 md:h-10 md:w-10 object-contain"

            />

          </span>

          {/* <span className="hidden lg:inline font-serif text-xl leading-none text-foreground">
            
          {SITE.shortName}

          </span> */}

          <span className="hidden lg:inline font-display font-semibold text-base xl:text-lg leading-none whitespace-nowrap text-foreground">

            {SITE.shortName}

          </span>



        </Link>



        <nav className="hidden lg:flex items-center gap-3">
          {NAV.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => hoverOpen(group.label)}
              onMouseLeave={hoverClose}
            >
              <Link
                to={group.to}
                className={`relative inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.3em] px-3 py-1.5 transition-colors hover:text-[#827768] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-[#827768] after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  scrolled ? "text-foreground" : "text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.7)]"
                }`}
                activeProps={{ className: "relative inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.3em] px-3 py-1.5 text-[#827768] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-[#827768] after:scale-x-100" }}
                onClick={() => setOpenGroup(null)}
              >
                {group.label}
                {group.sub && <ChevronDown size={10} className="opacity-70" />}
              </Link>

              {group.sub && openGroup === group.label && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                  <div className="min-w-[220px] rounded-md border border-border bg-popover text-popover-foreground shadow-elevated py-2">
                    {group.sub.map((s) => (
                      <Link
                        key={s.label}
                        to={s.to}
                        hash={s.hash}
                        className="block px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-popover-foreground transition-all duration-200 hover:text-[#827768] hover:scale-105"
                        onClick={() => setOpenGroup(null)}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>





        <div className="hidden lg:flex items-center gap-3">

          <div className={`flex items-center gap-1 rounded-full border px-1.5 py-1 transition-colors ${scrolled ? "border-foreground/25 text-foreground" : "border-white/40 text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.55)]"}`}>

            <button aria-label="Decrease font size" onClick={dec} className="grid h-7 w-7 place-items-center rounded-full hover:bg-foreground/10 transition-colors">

              <Minus size={12} />

            </button>

            <button aria-label="Reset font size" onClick={reset} className="px-1 text-[10px] uppercase tracking-[0.2em] tabular-nums hover:opacity-70" title="Reset">

              {Math.round(scale * 100)}%

            </button>

            <button aria-label="Increase font size" onClick={inc} className="grid h-7 w-7 place-items-center rounded-full hover:bg-foreground/10 transition-colors">

              <Plus size={12} />

            </button>

          </div>

          <button aria-label="Toggle theme" onClick={toggle} className={`grid h-10 w-10 place-items-center rounded-full border transition-colors ${scrolled ? "border-foreground/25 text-foreground hover:bg-foreground/10" : "border-white/40 text-white hover:bg-white/10 [text-shadow:0_1px_3px_rgba(0,0,0,0.55)]"}`}>

            {light ? <Moon size={16} /> : <Sun size={16} />}

          </button>

          <Link to="/plan-my-trip" className="rounded-sm border border-[#827768] bg-[#827768] px-6 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white hover:bg-[#6f6558] transition-colors whitespace-nowrap">

            Book Now

          </Link>

        </div>



        <div className="lg:hidden flex items-center gap-2">

          <button aria-label="Toggle theme" onClick={toggle} className="grid h-10 w-10 place-items-center rounded-full glass">

            {light ? <Moon size={16} /> : <Sun size={16} />}

          </button>

          <button aria-label="Open menu" onClick={() => setOpen((v) => !v)} className="grid h-10 w-10 place-items-center rounded-full glass">

            {open ? <X size={18} /> : <Menu size={18} />}

          </button>

        </div>

      </div>



      {open && (

        <div className="lg:hidden glass-strong border-t border-border">

          <nav className="container-x mx-auto flex flex-col py-2">

            {NAV.map((group) => {
              const isOpen = mobileGroup === group.label;
              const hasSub = !!group.sub?.length;
              return (
                <div key={group.label} className="border-b border-border/50 last:border-0">
                  <div className="flex items-center">
                    <Link
                      to={group.to}
                      onClick={() => setOpen(false)}
                      className="flex-1 py-3 text-xs uppercase tracking-[0.3em] text-foreground/85"
                    >
                      {group.label}
                    </Link>
                    {hasSub && (
                      <button
                        aria-label={`Toggle ${group.label} submenu`}
                        onClick={() => setMobileGroup(isOpen ? null : group.label)}
                        className="grid h-9 w-9 place-items-center text-foreground/70"
                      >
                        <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  {hasSub && isOpen && (
                    <div className="pb-2 pl-3">
                      {group.sub!.map((s) => (
                        <Link
                          key={s.label}
                          to={s.to}
                          hash={s.hash}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-[11px] uppercase tracking-[0.25em] text-foreground/70"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <Link to="/plan-my-trip" onClick={() => setOpen(false)} className="mt-3 rounded-sm border border-[#827768] bg-[#827768] px-5 py-3 text-center text-xs uppercase tracking-[0.2em] text-white whitespace-nowrap">

              Book Now

            </Link>

          </nav>

        </div>

      )}

    </header>

  );

}

