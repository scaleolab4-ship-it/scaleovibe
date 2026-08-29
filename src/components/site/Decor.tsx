import { useEffect, useRef, useState, type ReactNode } from "react";

export function Sparkle({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`pointer-events-none animate-twinkle text-primary ${className}`}
      style={{ animationDelay: `${delay}s` }}
      fill="currentColor"
    >
      <path d="M12 0c.6 5.6 2.4 9 9 12-6.6 3-8.4 6.4-9 12-.6-5.6-2.4-9-9-12 6.6-3 8.4-6.4 9-12Z" />
    </svg>
  );
}

/** Soft blurred brand orbs + sparkle field used as page background. */
export function AuroraBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-soft)]" />
      <div className="absolute -left-32 -top-24 size-[26rem] rounded-full bg-primary/25 blur-[110px] animate-float-slow" />
      <div className="absolute right-[-8rem] top-40 size-[22rem] rounded-full bg-primary-glow/25 blur-[120px] animate-float" />
      <div className="absolute bottom-[-10rem] left-1/3 size-[28rem] rounded-full bg-accent/50 blur-[130px] animate-float-slow" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in oklab, var(--primary) 18%, transparent) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(circle at 50% 20%, black, transparent 75%)",
        }}
      />
      <Sparkle className="absolute left-[12%] top-[18%] size-5" delay={0.4} />
      <Sparkle className="absolute right-[16%] top-[30%] size-7" delay={1.2} />
      <Sparkle className="absolute left-[30%] bottom-[16%] size-4" delay={2} />
      <Sparkle className="absolute right-[28%] bottom-[26%] size-6" delay={0.9} />
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${shown ? "animate-rise" : "opacity-0"} ${className}`}
      style={shown ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}


export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur">
          <Sparkle className="size-3" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-muted-foreground">{subtitle}</p> : null}
    </Reveal>
  );
}
