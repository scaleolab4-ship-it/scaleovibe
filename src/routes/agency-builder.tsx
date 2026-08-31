import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CTABand } from "@/components/site/PageShell";
import { Reveal, Sparkle, SectionTitle } from "@/components/site/Decor";

export const Route = createFileRoute("/agency-builder")({
  head: () => ({
    meta: [
      { title: "Agency Builder — scaleo_vibe" },
      {
        name: "description",
        content:
          "Build a lean service agency: pick a niche, package one offer, get clients with outreach, and deliver with systems.",
      },
      { property: "og:title", content: "Agency Builder — scaleo_vibe" },
      {
        property: "og:description",
        content: "Niche, offer, outreach, delivery, team — the scaleo_vibe agency build path.",
      },
    ],
  }),
  component: Page,
});

const phases = [
  ["Phase 1", "Niche + offer", "One audience, one painful outcome, one price. No menu of services."],
  ["Phase 2", "Proof", "2–3 free or discounted results. Screenshots, numbers, short case notes."],
  ["Phase 3", "Client flow", "30 targeted DMs/emails a day, one content channel, one simple booking link."],
  ["Phase 4", "Delivery system", "SOPs, templates, automations — the same result every time, faster each time."],
  ["Phase 5", "Team", "Hire one contractor per repeatable task. You keep sales and quality only."],
  ["Phase 6", "Retainers", "Turn projects into monthly retainers so revenue stops resetting to zero."],
];

const roles = [
  ["Owner (you)", "Sales, offer, quality control."],
  ["Setter / VA", "Outreach, inbox, scheduling."],
  ["Specialist", "Actual delivery work — ads, automation, design, build."],
  ["Editor / Creative", "Content that feeds inbound leads."],
];

function Page() {
  return (
    <div className="pb-4">
      <PageHero
        eyebrow="Agency Builder"
        title="Build an agency that runs on systems"
        description="A repeatable path from zero to a small, profitable service business you actually control."
      />

      <section className="mx-auto mt-8 max-w-4xl px-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {phases.map(([p, t, d], i) => (
            <Reveal key={p} delay={i * 0.06}>
              <div className="glass-card relative h-full overflow-hidden rounded-3xl p-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{p}</span>
                <h3 className="mt-2 font-display text-lg font-extrabold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                <Sparkle className="absolute right-4 top-4 size-4" delay={i * 0.25} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-4xl px-4">
        <SectionTitle
          eyebrow="Team"
          title="The only four roles you need early"
          subtitle="Keep it small. Each role removes one bottleneck."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {roles.map(([r, d], i) => (
            <Reveal key={r} delay={i * 0.06}>
              <div className="glass-card h-full rounded-3xl p-6">
                <h3 className="font-display text-base font-extrabold">{r}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand interest="Agency Builder" />
    </div>
  );
}
