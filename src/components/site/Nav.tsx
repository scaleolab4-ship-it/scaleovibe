import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { LogoWordmark, LogoMark } from "./Logo";

const links = [
  { to: "/business-strategy", label: "Business Strategy" },
  { to: "/ai-automation", label: "AI Automation" },
  { to: "/saas", label: "SaaS Build" },
  { to: "/agency-builder", label: "Agency Builder" },
  { to: "/mindset", label: "Mindset" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <LogoWordmark />

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              activeProps={{ className: "bg-primary/10 text-primary" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/booking"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-primary-foreground shadow-brand transition-transform hover:scale-105"
          >
            <Sparkles className="size-4" /> Book a call
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="inline-flex size-10 items-center justify-center rounded-full border border-primary/20 text-primary lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="animate-rise border-t border-primary/10 bg-card/90 px-4 py-3 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary"
              >
                <LogoMark className="size-5" />
                {l.label}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-4 py-3 text-sm font-semibold text-primary-foreground shadow-brand"
            >
              <Sparkles className="size-4" /> Book a call
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
