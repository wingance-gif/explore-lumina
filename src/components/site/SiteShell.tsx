import { Outlet } from "@tanstack/react-router";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { WhatsAppFab } from "./WhatsAppFab";
import { CustomContextMenu } from "./CustomContextMenu";

export function SiteShell() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppFab />
      <CustomContextMenu />
    </div>
  );
}
