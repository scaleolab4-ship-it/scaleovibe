import { Link } from "@tanstack/react-router";
import { Mail, Instagram, ArrowUpRight } from "lucide-react";
import { LogoMark } from "./Logo";
import { Sparkle } from "./Decor";

export const CONTACT_EMAIL = "scaleo.lab4@gmail.com";
export const INSTAGRAM_HANDLE = "scale.up07";
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;
export const FOUNDER_NAME = "YASHIN";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-primary/10">
      <div className="absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
      <div className="relative mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <LogoMark className="size-10" />
              <span className="font-display text-lg font-extrabold">
                <span className="text-primary">scaleo</span>
                <span className="text-ink">_vibe</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Business strategy, AI automation & SaaS studio — built to scale small brands fast.
            </p>
          </div>

          <div>
            <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
              <Sparkle className="size-3" /> Explore
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/business-strategy" className="hover:text-primary">
                  Business Strategy
                </Link>
              </li>
              <li>
                <Link to="/ai-automation" className="hover:text-primary">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link to="/saas" className="hover:text-primary">
                  SaaS Build
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
              <Sparkle className="size-3" /> More
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/agency-builder" className="hover:text-primary">
                  Agency Builder
                </Link>
              </li>
              <li>
                <Link to="/mindset" className="hover:text-primary">
                  Mindset Builder
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-primary">
                  Booking
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
              <Sparkle className="size-3" /> Contact
            </h4>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/70 px-3 py-2 text-sm font-medium backdrop-blur transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <Mail className="size-4 text-primary" /> {CONTACT_EMAIL}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label={`Chat with scaleo_vibe on Instagram: @${INSTAGRAM_HANDLE}`}
              className="mt-3 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <Instagram className="size-4" /> @{INSTAGRAM_HANDLE}{" "}
              <ArrowUpRight className="size-3" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-primary/10 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} scaleo_vibe — Founded by {FOUNDER_NAME}.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-primary">♥</span> and systems that scale.
          </p>
        </div>
      </div>
    </footer>
  );
}
