import { Link } from "@tanstack/react-router";
import markSrc from "@/assets/logo-mark.png";
import fullSrc from "@/assets/logo-full.png";

/** Shaped brand mark — the character + swoosh inside a soft squircle/blob, never a hard square. */
export function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <span
      className={`${className} relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[42%] bg-gradient-to-br from-card/80 to-primary/10 ring-1 ring-primary/20 backdrop-blur`}
      aria-hidden="false"
    >
      <span className="absolute inset-0 -z-10 rounded-[42%] bg-primary/20 blur-xl" />
      <img
        src={markSrc}
        alt="scaleo_lab logo"
        className="size-[86%] object-contain drop-shadow-[0_6px_14px_rgba(220,40,30,0.28)]"
      />
    </span>
  );
}

/** Full transparent lockup — use where there is horizontal room. */
export function LogoLockup({ className = "h-12" }: { className?: string }) {
  return (
    <img
      src={fullSrc}
      alt="scaleo_lab"
      className={`${className} w-auto object-contain drop-shadow-[0_10px_24px_rgba(220,40,30,0.25)]`}
    />
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
