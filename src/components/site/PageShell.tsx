import { Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Reveal, Sparkle } from "./Decor";
import { LogoMark } from "./Logo";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden px-4 pb-8 pt-14">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur transition-colors hover:bg-primary/10"
          >
            <ArrowLeft className="size-3.5" /> Back home
          </Link>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="mt-6 flex items-center justify-center gap-3">
            <LogoMark className="size-12 animate-float" />
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <Sparkle className="size-3" /> {eyebrow}
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
            <span className="text-brand-gradient">{title}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function CTABand({ interest }: { interest: string }) {
  return (
    <Reveal className="mx-auto mt-20 max-w-4xl px-4">
      <div className="glass-card relative overflow-hidden rounded-3xl p-8 text-center">
        <div className="absolute -right-16 -top-16 size-52 rounded-full bg-primary/25 blur-3xl" />
        <Sparkle className="absolute left-6 top-6 size-5" />
        <h3 className="relative text-2xl font-extrabold">Interested in {interest}?</h3>
        <p className="relative mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Tap below — your booking message template gets written automatically.
        </p>
        <Link
          to="/booking"
          search={{ interest }}
          className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 font-semibold text-primary-foreground shadow-brand transition-transform hover:scale-105"
        >
          <Sparkles className="size-4" /> Book this
        </Link>
      </div>
    </Reveal>
  );
}
