import { useEffect, useRef, useState } from "react";
import { useNavigate, useRouter } from "@tanstack/react-router";
import { Youtube, Mail, MessageCircle, FileText, Tag } from "lucide-react";
import { SITE } from "@/content/site";

type Pos = { x: number; y: number };

const MENU_W = 240;
const MENU_H = 240;

export function CustomContextMenu() {
  const [pos, setPos] = useState<Pos | null>(null);
  const navigate = useNavigate();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onContext = (e: MouseEvent) => {
      e.preventDefault();
      const x = Math.min(e.clientX, window.innerWidth - MENU_W - 8);
      const y = Math.min(e.clientY, window.innerHeight - MENU_H - 8);
      setPos({ x, y });
    };
    const block = (e: Event) => e.preventDefault();
    const close = () => setPos(null);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPos(null);
    };

    document.addEventListener("contextmenu", onContext);
    document.addEventListener("copy", block);
    document.addEventListener("cut", block);
    document.addEventListener("dragstart", block);
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("contextmenu", onContext);
      document.removeEventListener("copy", block);
      document.removeEventListener("cut", block);
      document.removeEventListener("dragstart", block);
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // close on route change
  useEffect(() => {
    const unsub = router.subscribe("onResolved", () => setPos(null));
    return () => unsub();
  }, [router]);

  if (!pos) return null;

  const go = (to: string, search?: Record<string, string>) => {
    setPos(null);
    navigate({ to, search: search as never });
  };

  const items = [
    {
      label: "Check our channel",
      icon: Youtube,
      onSelect: () => {
        setPos(null);
        window.open(SITE.social.youtube, "_blank", "noopener,noreferrer");
      },
    },
    { label: "Contact us", icon: Mail, onSelect: () => go("/contact") },
    { label: "Comment", icon: MessageCircle, onSelect: () => go("/blog") },
    {
      label: "Have a proposal?",
      icon: FileText,
      onSelect: () => go("/contact", { type: "proposal" }),
    },
    { label: "Get our offers", icon: Tag, onSelect: () => go("/tours") },
  ];

  return (
    <>
      <div
        className="fixed inset-0 z-[100]"
        onClick={() => setPos(null)}
        onContextMenu={(e) => {
          e.preventDefault();
          const x = Math.min(e.clientX, window.innerWidth - MENU_W - 8);
          const y = Math.min(e.clientY, window.innerHeight - MENU_H - 8);
          setPos({ x, y });
        }}
      />
      <div
        ref={menuRef}
        role="menu"
        style={{ top: pos.y, left: pos.x, width: MENU_W }}
        className="fixed z-[101] rounded-lg border border-border bg-popover text-popover-foreground shadow-xl ring-1 ring-black/5 animate-in fade-in zoom-in-95 overflow-hidden"
      >
        <div className="px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground border-b border-border">
          {SITE.shortName} · Quick actions
        </div>
        <ul className="py-1">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <li key={it.label}>
                <button
                  type="button"
                  role="menuitem"
                  onClick={it.onSelect}
                  className="flex w-full items-center gap-3 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors text-left"
                >
                  <Icon className="h-4 w-4 opacity-80" />
                  <span>{it.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
