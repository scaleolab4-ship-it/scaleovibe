import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  Target,
  Bot,
  Boxes,
  Building2,
  BrainCircuit,
  Mail,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { Reveal, Sparkle, SectionTitle } from "@/components/site/Decor";
import { LogoMark, LogoBadge } from "@/components/site/Logo";
import { CharacterStrip, CharacterBadge } from "@/components/site/Characters";
import { LiquidCharacter, PosterGrid } from "@/components/site/Liquid";
import {
  CONTACT_EMAIL,
  FOUNDER_NAME,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from "@/components/site/Footer";
import { Instagram } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "scaleo_lab — Business, AI Automation & SaaS Studio" },
      {
        name: "description",
        content:
          "scaleo_lab is a business agency by Yeasin: business strategy, AI automation, SaaS product builds, agency systems and founder mindset.",
      },
      { property: "og:title", content: "scaleo_lab — Business, AI Automation & SaaS Studio" },
      {
        property: "og:description",
        content:
          "Business strategy, AI automation, SaaS builds and agency systems — book a free call with Yeasin.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    to: "/business-strategy",
    icon: Target,
    title: "Business Strategy",
    text: "Offer design, pricing, positioning and a 90-day growth roadmap.",
  },
  {
    to: "/ai-automation",
    icon: Bot,
    title: "AI Automation",
    text: "Hand-picked AI tools + workflows that remove manual work.",
  },
  {
    to: "/saas",
    icon: Boxes,
    title: "SaaS Build",
    text: "How a SaaS product goes from idea to paying users.",
  },
  {
    to: "/agency-builder",
    icon: Building2,
    title: "Agency Builder",
    text: "Client acquisition, delivery systems and team playbooks.",
  },
  {
    to: "/mindset",
    icon: BrainCircuit,
    title: "Mindset Builder",
    text: "Founder habits, focus systems and long-game thinking.",
  },
] as const;

const stats = [
  { value: "2+", label: "Years building" },
  { value: "AI", label: "Automation first" },
  { value: "SaaS", label: "Product mindset" },
  { value: "24h", label: "Reply time" },
] as const;

const marquee = [
  "Marketing Agency",
  "AI Automation",
  "Digital Products",
  "Physical Services",
  "SaaS Products",
  "System Builder",
  "Business Strategy",
  "Agency Systems",
  "Founder Mindset",
];

const workAreas = [
  ["Marketing Agency", "Offer, funnel, content and paid — a full client-getting machine, not random posts."],
  ["AI Automation", "n8n / Make / GPT workflows that handle leads, replies, reports and content."],
  ["Digital Products", "Courses, templates, notion systems and paid communities that sell while you sleep."],
  ["Physical Services", "Local and service businesses: booking systems, follow-up flows and reviews on autopilot."],
  ["SaaS Products", "From validated idea to MVP to first paying subscribers."],
  ["System Builder", "SOPs, dashboards and automations so the business runs without you in every step."],
];


function Index() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative px-4 pb-16 pt-12 sm:pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="animate-rise relative mx-auto flex w-full max-w-xl flex-col items-center gap-4">
            <LiquidCharacter className="w-24 sm:w-32" eager />
            <LogoBadge className="size-36 sm:size-48" />
            <CharacterStrip className="mt-2" />
            <Sparkle className="absolute right-4 top-4 size-8" />
            <Sparkle className="absolute left-2 bottom-6 size-5" delay={1.4} />
          </div>

          <h1
            className="animate-rise mt-4 text-4xl font-extrabold leading-tight sm:text-6xl"
            style={{ animationDelay: "0.15s" }}
          >
            We scale brands with <span className="text-brand-gradient">systems, AI & strategy</span>
          </h1>

          <p
            className="animate-rise mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg"
            style={{ animationDelay: "0.28s" }}
          >
            scaleo_lab is a small, fast lab for marketing agency work, AI automation, digital
            products, physical services, SaaS products and system building.
          </p>

          <div
            className="animate-rise mt-8 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 font-semibold text-primary-foreground shadow-brand transition-transform hover:scale-105"
            >
              <Calendar className="size-4" /> Book a free call
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/70 px-6 py-3 font-semibold backdrop-blur transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <Mail className="size-4 text-primary" /> Email us
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label={`Chat on Instagram @${INSTAGRAM_HANDLE}`}
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/70 px-6 py-3 font-semibold backdrop-blur transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <Instagram className="size-4 text-primary" /> @{INSTAGRAM_HANDLE}
            </a>
          </div>


          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="glass-card rounded-2xl px-4 py-5">
                  <p className="font-display text-2xl font-extrabold text-primary">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative border-y border-primary/10 bg-card/50 py-4 backdrop-blur">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
          {[...marquee, ...marquee].map((m, i) => (
            <span
              key={i}
              className="flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.2em] text-primary/80"
            >
              <Sparkle className="size-3" delay={i * 0.2} /> {m}
            </span>
          ))}
        </div>
      </div>

      {/* FOUNDER */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle eyebrow="Founder" title="Meet the founder" />
          <Reveal delay={0.1} className="mt-10">
            <div className="glass-card relative overflow-hidden rounded-3xl p-6 sm:p-10">
              <div className="absolute -left-20 -top-20 size-64 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative flex flex-col items-center gap-7 sm:flex-row sm:items-center">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 -z-10 rounded-full bg-primary/25 blur-2xl" />
                  <LogoMark className="size-40 animate-float" />
                  <CharacterBadge
                    name="teacher"
                    className="absolute -bottom-3 -left-4 size-16"
                    float="animate-float-slow"
                  />
                  <Sparkle className="absolute -right-1 top-2 size-6" />
                </div>
                <div className="text-center sm:text-left">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    Founder
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-extrabold">
                    YEASIN <span className="text-brand-gradient">— scaleo_lab</span>
                  </h3>
                  <p className="mt-1 text-sm font-semibold tracking-[0.35em] text-primary">
                    Y · E · A · S · I · N
                  </p>
                  <p className="mt-3 max-w-xl text-muted-foreground">
                    For the last <strong className="text-foreground">2 years</strong> I've been
                    working across <strong className="text-foreground">marketing agency</strong>,{" "}
                    <strong className="text-foreground">AI automation</strong>,{" "}
                    <strong className="text-foreground">digital products</strong>,{" "}
                    <strong className="text-foreground">physical services</strong>,{" "}
                    <strong className="text-foreground">SaaS products</strong> and{" "}
                    <strong className="text-foreground">system building</strong> — starting from AI
                    automation, then growing into full business systems. I build offers, automate the
                    boring work and turn ideas into products that actually sell.
                  </p>
                  <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
                    {[
                      "Marketing Agency",
                      "AI Automation",
                      "Digital Products",
                      "Physical Services",
                      "SaaS",
                      "System Builder",
                    ].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-primary/20 bg-card/70 px-3 py-1 text-xs font-semibold text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* WHAT I WORK WITH */}
          <div className="mt-16">
            <SectionTitle
              eyebrow="Areas"
              title="What I actually work with"
              subtitle="Not just business — six connected areas, one system."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {workAreas.map(([t, d], i) => (
                <Reveal key={t} delay={i * 0.06}>
                  <div className="glass-card relative h-full overflow-hidden rounded-3xl p-6">
                    <h4 className="font-display text-base font-extrabold">{t}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                    <Sparkle className="absolute right-4 top-4 size-4" delay={i * 0.25} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* SERVICES */}
      <section className="px-4 pb-4">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="What we do"
            title="Pick what you're interested in"
            subtitle="Every card opens its own page with the full breakdown — then one tap creates your booking message."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.to} delay={i * 0.07}>
                <Link to={s.to} className="group block h-full">
                  <div className="glass-card relative h-full overflow-hidden rounded-3xl p-6 transition-transform duration-300 group-hover:-translate-y-1.5">

                    <div className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100 sm:opacity-60" />
                    <div className="relative flex size-12 items-center justify-center rounded-2xl bg-brand-gradient text-primary-foreground shadow-brand">
                      <s.icon className="size-6" />
                    </div>
                    <h3 className="relative mt-5 font-display text-xl font-extrabold">{s.title}</h3>
                    <p className="relative mt-2 text-sm text-muted-foreground">{s.text}</p>
                    <span className="relative mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Explore
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <Sparkle className="absolute bottom-4 right-4 size-4" delay={i * 0.3} />
                  </div>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={0.4}>
              <Link to="/booking" className="group block h-full">
                <div
                  className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-brand-gradient p-6 text-primary-foreground shadow-brand transition-transform duration-300 group-hover:-translate-y-1.5"
                >
                  <Sparkles className="size-8" />
                  <div>
                    <h3 className="mt-6 font-display text-xl font-extrabold">Book a call</h3>
                    <p className="mt-2 text-sm opacity-90">
                      Pick a date & time, we auto-write the message for you.
                    </p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold">
                    Start now <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle eyebrow="Shortcuts" title="Quick info, no fluff" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              ["Offer first", "A clear offer beats a pretty website. We fix the offer before ads."],
              ["Automate later", "Automate a process only after it works manually twice."],
              ["Cash-flow rule", "Sell the service, then productise it into SaaS."],
              ["One channel", "Master one traffic channel before adding a second."],
              ["Speed wins", "Ship in 7 days, improve every week with real feedback."],
              ["Systems > motivation", "Written SOPs make results repeatable."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.06}>
                <div className="glass-card flex gap-4 rounded-2xl p-5">
                  <Sparkle className="mt-1 size-4 shrink-0" delay={i * 0.25} />
                  <div>
                    <h4 className="font-display font-bold">{t}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-4">
        <Reveal className="mx-auto max-w-4xl">
          <div className="glass-card relative overflow-hidden rounded-3xl p-8 text-center sm:p-12">
            <div className="absolute -left-16 -bottom-16 size-64 rounded-full bg-primary-glow/30 blur-3xl" />
            <LogoMark className="mx-auto size-16 animate-float" />
            <h2 className="relative mt-5 text-3xl font-extrabold sm:text-4xl">
              Got something in <span className="text-brand-gradient">mind?</span>
            </h2>
            <p className="relative mx-auto mt-3 max-w-lg text-muted-foreground">
              Tell us what you're interested in — we'll reply from{" "}
              <span className="font-semibold text-primary">{CONTACT_EMAIL}</span> within 24 hours.
            </p>
            <div className="relative mt-7 flex flex-wrap justify-center gap-3">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 font-semibold text-primary-foreground shadow-brand transition-transform hover:scale-105"
              >
                <Calendar className="size-4" /> Open booking page
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/70 px-6 py-3 font-semibold backdrop-blur hover:bg-primary/10 hover:text-primary"
              >
                <Mail className="size-4 text-primary" /> Direct email
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
