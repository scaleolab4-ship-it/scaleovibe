import { createFileRoute } from "@tanstack/react-router";
import { Target, TrendingUp, Layers, Wallet } from "lucide-react";
import { PageHero, CTABand } from "@/components/site/PageShell";
import { Reveal, Sparkle } from "@/components/site/Decor";

export const Route = createFileRoute("/business-strategy")({
  head: () => ({
    meta: [
      { title: "Business Strategy — scaleo_vibe" },
      {
        name: "description",
        content:
          "Offer design, pricing, positioning and a 90-day growth roadmap for small brands and agencies.",
      },
      { property: "og:title", content: "Business Strategy — scaleo_vibe" },
      {
        property: "og:description",
        content: "How scaleo_vibe builds offers, pricing and 90-day growth roadmaps.",
      },
    ],
  }),
  component: Page,
});

const pillars = [
  {
    icon: Target,
    title: "Positioning",
    text: "One audience, one painful problem, one promise. We cut everything else.",
  },
  {
    icon: Wallet,
    title: "Offer & pricing",
    text: "Value-based pricing, clear deliverables, and an irresistible entry offer.",
  },
  {
    icon: Layers,
    title: "Systems",
    text: "Sales, delivery and follow-up written as SOPs so results repeat.",
  },
  {
    icon: TrendingUp,
    title: "90-day roadmap",
    text: "Week-by-week actions with one metric per phase — no guesswork.",
  },
];

const roadmap = [
  ["Week 1–2", "Audit, niche lock, competitor teardown, offer rewrite."],
  ["Week 3–4", "Landing page + proof assets, outreach scripts, pricing test."],
  ["Week 5–8", "Traffic on one channel, daily outreach, first case studies."],
  ["Week 9–12", "Automate delivery, raise price, build referral loop."],
];

function Page() {
  return (
    <div className="px-0 pb-4">
      <PageHero
        eyebrow="Business Strategy"
        title="Strategy that makes money, not slides"
        description="We rebuild your offer, pricing and growth plan into a system you can run every single week."
      />

      <section className="mx-auto mt-8 grid max-w-5xl gap-5 px-4 sm:grid-cols-2">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.07}>
            <div className="glass-card relative h-full overflow-hidden rounded-3xl p-6">
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/20 blur-2xl" />
              <div className="relative flex size-11 items-center justify-center rounded-2xl bg-brand-gradient text-primary-foreground shadow-brand">
                <p.icon className="size-5" />
              </div>
              <h3 className="relative mt-4 font-display text-lg font-extrabold">{p.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto mt-16 max-w-3xl px-4">
        <Reveal>
          <h2 className="text-center text-2xl font-extrabold">
            The <span className="text-brand-gradient">90-day</span> roadmap
          </h2>
        </Reveal>
        <div className="relative mt-8 space-y-4 border-l-2 border-dashed border-primary/30 pl-6">
          {roadmap.map(([w, d], i) => (
            <Reveal key={w} delay={i * 0.08}>
              <div className="glass-card relative rounded-2xl p-5">
                <span className="absolute -left-[2.1rem] top-6 flex size-4 items-center justify-center rounded-full bg-brand-gradient shadow-brand" />
                <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
                  {w}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-4xl px-4">
        <Reveal>
          <div className="glass-card rounded-3xl p-6">
            <h3 className="flex items-center gap-2 font-display text-lg font-extrabold">
              <Sparkle className="size-4" /> Quick rules we live by
            </h3>
            <ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "Sell outcomes, never hours.",
                "If it can't be measured weekly, it's not a strategy.",
                "Niche down until it feels uncomfortable.",
                "Raise price after every 3 happy clients.",
                "One channel, mastered, beats five tested.",
                "Proof > promises: collect results publicly.",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="text-primary">◆</span> {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <CTABand interest="Business Strategy" />
    </div>
  );
}
