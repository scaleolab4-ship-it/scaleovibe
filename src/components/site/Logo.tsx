import { Link } from "@tanstack/react-router";
import logo from "@/assets/scaleo-lab-logo.png.asset.json";

export function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="scaleo_lab logo"
      className={`${className} object-contain drop-shadow-[0_6px_14px_rgba(220,40,30,0.28)]`}
      loading="lazy"
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
