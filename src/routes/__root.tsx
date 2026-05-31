import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { ArrowRight, Sparkles, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

import appCss from "../styles.css?url";

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
      { title: "Lovable App" },
      { name: "description", content: "Redesigns a non-profit website with a clean, modern aesthetic, focusing on mission and impact." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Redesigns a non-profit website with a clean, modern aesthetic, focusing on mission and impact." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "twitter:description", content: "Redesigns a non-profit website with a clean, modern aesthetic, focusing on mission and impact." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3583cc6e-3ae0-4ff4-9223-df82b57a0f96/id-preview-d036c10b--07358edc-afc8-4c28-af6a-67e8bd290290.lovable.app-1779863895981.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3583cc6e-3ae0-4ff4-9223-df82b57a0f96/id-preview-d036c10b--07358edc-afc8-4c28-af6a-67e8bd290290.lovable.app-1779863895981.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
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
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/causes", label: "Causes" },
  { to: "/events", label: "Stories" },
  { to: "/gallery", label: "Gallery" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/contact", label: "Contact" },
] as const;

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const unsub = router.subscribe("onResolved", () => setOpen(false));
    return unsub;
  }, [router]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="h-8 w-8 rounded-full bg-primary grid place-items-center text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-semibold tracking-tight">Divya Chetna</span>
        </Link>
        <div className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-foreground transition"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Link
            to="/causes"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Donate <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-10 w-10 grid place-items-center rounded-full border border-border hover:bg-muted transition"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-md animate-fade-up">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1 text-sm">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2.5 px-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition"
                activeProps={{ className: "py-2.5 px-2 rounded-lg text-foreground font-medium bg-muted" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/causes"
              onClick={() => setOpen(false)}
              className="sm:hidden mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2.5 font-medium"
            >
              Donate <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border mt-12">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-primary grid place-items-center text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-semibold">Divya Chetna Foundation</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Caring for children who lost their parents to COVID-19 — providing
            education, dignity, and a path forward since 2021.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="h-9 w-9 grid place-items-center rounded-full border border-border hover:bg-muted transition"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="h-9 w-9 grid place-items-center rounded-full border border-border hover:bg-muted transition"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="h-9 w-9 grid place-items-center rounded-full border border-border hover:bg-muted transition"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="text-sm">
          <div className="font-medium mb-3">Explore</div>
          <ul className="space-y-2 text-muted-foreground">
            {NAV.slice(1, 6).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-foreground">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-medium mb-3">Reach us</div>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /><span>A wing 1402 Galaxy Height 57, Jankalyan Nagar, Malad West 400095</span></li>
            <li><a href="tel:3072129320" className="flex items-center gap-2 hover:text-foreground"><Phone className="h-4 w-4" /><span>(307) 212-9320</span></a></li>
            <li><a href="mailto:info@divyachetna.org.in" className="flex items-center gap-2 hover:text-foreground"><Mail className="h-4 w-4" /><span>info@divyachetna.org.in</span></a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-5 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Divya Chetna Foundation. All rights reserved.</span>
          <span>Section 8 company · 80G certified</span>
        </div>
      </div>
    </footer>
  );
}
