import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Boxes } from "lucide-react";
import { PageHero, CTABand } from "@/components/site/PageShell";
import { Reveal, Sparkle } from "@/components/site/Decor";

export const Route = createFileRoute("/saas")({
  head: () => ({
    meta: [
      { title: "How to Build a SaaS Product — scaleo_vibe" },
      {
        name: "description",
        content:
          "The scaleo_vibe SaaS playbook: validate, build an MVP fast, price it, and get the first paying users.",
      },
      { property: "og:title", content: "How to Build a SaaS Product — scaleo_vibe" },
      {
        property: "og:description",
        content: "Idea to paying users — the practical SaaS build path we follow.",
      },
    ],
  }),
  component: Page,
});

const steps = [
  ["01", "Find a painful, paid problem", "Sell a service first. Whatever clients repeatedly ask for becomes the product."],
  ["02", "Validate in 3 days", "20 real conversations, one landing page, one pre-order or waitlist with intent."],
  ["03", "Build the ugly MVP", "One core workflow only. Auth, database, payment. Ship in 1–2 weeks."],
  ["04", "Price for value", "Simple 3-tier pricing, annual discount, free trial only if onboarding is instant."],
  ["05", "First 10 users manually", "DM, onboard, and watch them use it. Fix friction the same day."],
  ["06", "Scale what works", "Add content + automation loops. Only then build the second feature."],
];

const stack = [
  { name: "Lovable", url: "https://lovable.dev", text: "Frontend + backend + auth, built by chatting." },
  { name: "Supabase", url: "https://supabase.com", text: "Postgres database, auth and storage." },
  { name: "Stripe", url: "https://stripe.com", text: "Subscriptions, trials and invoices." },
  { name: "Vercel", url: "https://vercel.com", text: "Fast hosting and preview deploys." },
  { name: "Resend", url: "https://resend.com", text: "Transactional email that lands." },
  { name: "PostHog", url: "https://posthog.com", text: "Product analytics and funnels." },
];

function Page() {
  return (
    <div className="pb-4">
      <PageHero
        eyebrow="SaaS Build"
        title="How a SaaS actually gets built"
        description="No 6-month builds. A focused MVP, real users in week two, and revenue before feature #2."
      />

      <section className="mx-auto mt-8 max-w-4xl px-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 0.06}>
              <div className="glass-card relative h-full overflow-hidden rounded-3xl p-6">
                <span className="font-display text-4xl font-extrabold text-primary/25">{n}</span>
                <h3 className="mt-1 font-display text-lg font-extrabold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                <Sparkle className="absolute right-4 top-4 size-4" delay={i * 0.25} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl px-4">
        <Reveal>
          <h2 className="flex items-center justify-center gap-2 text-2xl font-extrabold">
            <Boxes className="size-6 text-primary" /> The stack we recommend
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.06}>
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="glass-card group flex h-full flex-col rounded-2xl p-5 transition-transform hover:-translate-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-extrabold">{s.name}</h3>
                  <ExternalLink className="size-4 text-primary" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand interest="SaaS Build" />
    </div>
  );
}
