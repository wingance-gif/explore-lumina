import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteShell } from "@/components/site/SiteShell";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tanzania Exploration — Cinematic Safaris, Kilimanjaro Treks & Zanzibar" },
      { name: "description", content: "Bespoke safaris across Serengeti & Ngorongoro, Kilimanjaro summit treks, and Zanzibar escapes. Designed end to end by guides who live in Tanzania." },
      { name: "author", content: "Tanzania Exploration" },
      { property: "og:title", content: "Tanzania Exploration — Cinematic Safaris, Kilimanjaro Treks & Zanzibar" },
      { property: "og:description", content: "Bespoke safaris across Serengeti & Ngorongoro, Kilimanjaro summit treks, and Zanzibar escapes. Designed end to end by guides who live in Tanzania." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Tanzania Exploration" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Tanzania Exploration — Cinematic Safaris, Kilimanjaro Treks & Zanzibar" },
      { name: "twitter:description", content: "Bespoke safaris across Serengeti & Ngorongoro, Kilimanjaro summit treks, and Zanzibar escapes. Designed end to end by guides who live in Tanzania." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7550ff7e-e4e1-40c8-9df9-780e35403be9/id-preview-312c1a6a--831f3c9e-bcaa-40ad-bb18-04e8187d3ea4.lovable.app-1779086402629.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7550ff7e-e4e1-40c8-9df9-780e35403be9/id-preview-312c1a6a--831f3c9e-bcaa-40ad-bb18-04e8187d3ea4.lovable.app-1779086402629.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500;600&family=Pinyon+Script&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteShell />
    </QueryClientProvider>
  );
}
