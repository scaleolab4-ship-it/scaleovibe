import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CTABand } from "@/components/site/PageShell";
import { Reveal, Sparkle, SectionTitle } from "@/components/site/Decor";

export const Route = createFileRoute("/mindset")({
  head: () => ({
    meta: [
      { title: "Mindset Builder — scaleo_lab" },
      {
        name: "description",
        content:
          "Focus, consistency and decision rules that keep a founder shipping — the scaleo_lab mindset system.",
      },
      { property: "og:title", content: "Mindset Builder — scaleo_lab" },
      {
        property: "og:description",
        content: "Simple daily rules that beat motivation: focus, reps, and honest scoreboards.",
      },
    ],
  }),
  component: Page,
});

const laws = [
  ["Boring reps win", "Same offer, same outreach, same content — for 90 days before judging it."],
  ["Speed over polish", "A shipped v1 teaches more than a perfect plan."],
  ["One goal per quarter", "Everything not serving it is a distraction wearing a productive costume."],
  ["Score yourself weekly", "Numbers, not feelings: conversations, calls, cash."],
  ["Protect deep hours", "3 focused hours daily beats 12 reactive ones."],
  ["Learn by selling", "The market corrects your ideas faster than any course."],
];

const routine = [
  ["Morning", "Body first, phone later. Then 90 minutes on the hardest revenue task."],
  ["Midday", "Outreach + client delivery blocks. Notifications off."],
  ["Evening", "Content, learning, and a 5-line review of the day's numbers."],
];

function Page() {
  return (
    <div className="pb-4">
      <PageHero
        eyebrow="Mindset Builder"
        title="Discipline is a system, not a feeling"
        description="The rules and routines that keep the work moving when motivation disappears."
      />

      <section className="mx-auto mt-8 max-w-4xl px-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {laws.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <div className="glass-card relative h-full overflow-hidden rounded-3xl p-6">
                <h3 className="font-display text-lg font-extrabold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                <Sparkle className="absolute right-4 top-4 size-4" delay={i * 0.2} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-4xl px-4">
        <SectionTitle
          eyebrow="Daily"
          title="A founder day that compounds"
          subtitle="Three blocks. Nothing complicated, just protected."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {routine.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="glass-card h-full rounded-3xl p-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{t}</span>
                <p className="mt-3 text-sm text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand interest="Mindset Builder" />
    </div>
  );
}
