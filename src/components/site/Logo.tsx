import { Link } from "@tanstack/react-router";
import markSrc from "@/assets/logo-mark.png";
import orbSrc from "@/assets/logo-orb.png";

/** Brand mark: dark gradient circle with the white wave-bars mark centered. */
export function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <span
      className={`${className} relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-primary/30 shadow-soft`}
    >
      <img src={orbSrc} alt="" aria-hidden className="absolute inset-0 size-full object-cover" />
      <span className="absolute inset-0 -z-10 rounded-full bg-primary/30 blur-xl" />
      <img
        src={markSrc}
        alt="scaleo_vibe logo"
        className="relative size-[58%] object-contain"
      />
    </span>
  );
}

/** Big hero badge — the gradient orb, halo rings, gentle float. */
export function LogoBadge({ className = "size-36" }: { className?: string }) {
  return (
    <span className={`relative inline-flex items-center justify-center ${className}`}>
      <span className="absolute inset-[-14%] rounded-full border border-primary/25" />
      <span className="absolute inset-[-26%] rounded-full border border-primary-glow/20 animate-spin-slow" />
      <span className="absolute inset-0 rounded-full bg-primary/30 blur-2xl" />
      <span className="relative inline-flex size-full items-center justify-center overflow-hidden rounded-full ring-1 ring-primary/30 shadow-brand animate-float">
        <img src={orbSrc} alt="" aria-hidden className="absolute inset-0 size-full object-cover" />
        <img src={markSrc} alt="scaleo_vibe" className="relative w-[52%] object-contain" />
      </span>
    </span>
  );
}

/** Full lockup inside a dark rounded pill — use where there is horizontal room. */
export function LogoLockup({ className = "h-14" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-3 rounded-full bg-card/80 px-5 py-3 ring-1 ring-primary/20 shadow-soft backdrop-blur ${className}`}
    >
      <LogoMark className="size-9" />
      <span className="font-display text-xl font-extrabold tracking-tight">
        <span className="text-primary">scaleo</span>
        <span className="text-ink">_vibe</span>
      </span>
    </span>
  );
}

export function LogoWordmark({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2 ${className}`}>
      <LogoMark className="size-9 transition-transform duration-300 group-hover:scale-110" />
      <span className="font-display text-xl font-extrabold tracking-tight">
        <span className="text-primary">scaleo</span>
        <span className="text-ink">_vibe</span>
      </span>
    </Link>
  );
}
