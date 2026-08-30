import { Link } from "@tanstack/react-router";
import markSrc from "@/assets/logo-mark.png";
import fullSrc from "@/assets/logo-full.png";

/** Brand mark: always a clean WHITE CIRCLE badge with the mark centered inside. */
export function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <span
      className={`${className} relative inline-flex shrink-0 items-center justify-center rounded-full bg-card ring-1 ring-primary/20 shadow-soft`}
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-primary/25 blur-xl" />
      <img
        src={markSrc}
        alt="scaleo_lab logo"
        className="size-[68%] object-contain"
      />
    </span>
  );
}

/** Big hero badge — white circle, soft ring halo, gentle float. */
export function LogoBadge({ className = "size-36" }: { className?: string }) {
  return (
    <span className={`relative inline-flex items-center justify-center ${className}`}>
      <span className="absolute inset-[-14%] rounded-full border border-primary/20" />
      <span className="absolute inset-[-26%] rounded-full border border-primary/10 animate-spin-slow" />
      <span className="absolute inset-0 rounded-full bg-primary/25 blur-2xl" />
      <span className="relative inline-flex size-full items-center justify-center rounded-full bg-card ring-1 ring-primary/25 shadow-brand animate-float">
        <img src={fullSrc} alt="scaleo_lab" className="w-[74%] object-contain" />
      </span>
    </span>
  );
}

/** Full lockup inside a white rounded pill — use where there is horizontal room. */
export function LogoLockup({ className = "h-14" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-card px-6 py-3 ring-1 ring-primary/15 shadow-soft ${className}`}
    >
      <img src={fullSrc} alt="scaleo_lab" className="h-full w-auto object-contain" />
    </span>
  );
}

export function LogoWordmark({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2 ${className}`}>
      <LogoMark className="size-9 transition-transform duration-300 group-hover:scale-110" />
      <span className="font-display text-xl font-extrabold tracking-tight">
        <span className="text-primary">scaleo</span>
        <span className="text-ink">_lab</span>
      </span>
    </Link>
  );
}
