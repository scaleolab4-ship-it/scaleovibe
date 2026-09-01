import liquidHero from "@/assets/liquid-hero.png";
import posterGrowth from "@/assets/screen-growth.jpg";
import posterAutomation from "@/assets/poster-automation.jpg";
import posterSaas from "@/assets/poster-saas.jpg";
import { Reveal, Sparkle } from "./Decor";

/** Transparent liquid-chrome mascot that floats above the logo. */
export function LiquidCharacter({
  className = "w-28",
  eager = false,
}: {
  className?: string;
  eager?: boolean;
}) {
  return (
    <img
      src={liquidHero}
      alt="scaleo_vibe liquid character mascot"
      width={1024}
      height={1024}
      {...(eager ? {} : { loading: "lazy" as const })}
      className={`${className} pointer-events-none select-none animate-float object-contain drop-shadow-[0_18px_30px_rgba(220,40,30,0.28)]`}
    />
  );
}

export const posters = [
  {
    src: posterGrowth,
    title: "We grow the numbers",
    text: "Real dashboards, real revenue lines — offer, pricing and a 90-day roadmap so growth is a system, not luck.",
  },
  {
    src: posterAutomation,
    title: "We automate the boring",
    text: "AI workflows handle leads, replies, reports and content while you sleep.",
  },
  {
    src: posterSaas,
    title: "We ship products",
    text: "Services get productised into SaaS, apps and digital products that scale.",
  },
] as const;

/** Poster-style liquid character cards that explain the business at a glance. */
export function PosterGrid() {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {posters.map((p, i) => (
        <Reveal key={p.title} delay={i * 0.08}>
          <div className="glass-card group relative h-full overflow-hidden rounded-3xl p-4 transition-transform duration-300 hover:-translate-y-1.5">
            <div className="relative overflow-hidden rounded-2xl bg-cream">
              <img
                src={p.src}
                alt={p.title}
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,transparent,color-mix(in_oklab,var(--primary)_16%,transparent))]" />
            </div>
            <div className="p-3">
              <h3 className="font-display text-lg font-extrabold">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.text}</p>
            </div>
            <Sparkle className="absolute right-5 top-5 size-4" delay={i * 0.3} />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
