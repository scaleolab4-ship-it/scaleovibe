import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Bot, Zap } from "lucide-react";
import { PageHero, CTABand } from "@/components/site/PageShell";
import { Reveal, Sparkle } from "@/components/site/Decor";

export const Route = createFileRoute("/ai-automation")({
  head: () => ({
    meta: [
      { title: "AI Automation & Tools — scaleo_lab" },
      {
        name: "description",
        content:
          "AI automation workflows plus the exact AI tools scaleo_lab recommends for content, sales and operations.",
      },
      { property: "og:title", content: "AI Automation & Tools — scaleo_lab" },
      {
        property: "og:description",
        content: "Recommended AI automation tools and workflows that remove manual work.",
      },
    ],
  }),
  component: Page,
});

const tools = [
  {
    name: "Lovable",
    url: "https://lovable.dev",
    tag: "Build",
    text: "Ship web apps and internal tools by chatting — fastest way to a working product.",
  },
  {
    name: "n8n",
    url: "https://n8n.io",
    tag: "Workflows",
    text: "Self-hostable automation: connect APIs, CRMs and AI models with no glue code.",
  },
  {
    name: "Make",
    url: "https://www.make.com",
    tag: "Workflows",
    text: "Visual automation for client onboarding, invoices and lead routing.",
  },
  {
    name: "ChatGPT",
    url: "https://chat.openai.com",
    tag: "Assistant",
    text: "Research, offer copy, sales scripts and daily thinking partner.",
  },
  {
    name: "Claude",
    url: "https://claude.ai",
    tag: "Assistant",
    text: "Long-document analysis, SOP writing and careful reasoning tasks.",
  },
  {
    name: "Perplexity",
    url: "https://www.perplexity.ai",
    tag: "Research",
    text: "Fast sourced market and competitor research before any launch.",
  },
  {
    name: "ElevenLabs",
    url: "https://elevenlabs.io",
    tag: "Voice",
    text: "Voiceovers for reels, ads and faceless content at scale.",
  },
  {
    name: "CapCut",
    url: "https://www.capcut.com",
    tag: "Content",
    text: "Short-form editing with auto captions — our reel engine.",
  },
  {
    name: "Notion AI",
    url: "https://www.notion.so/product/ai",
    tag: "Ops",
    text: "Client dashboards, SOP library and content calendars in one place.",
  },
];

const workflows = [
  ["Lead capture → CRM", "Form or DM reply auto-creates a lead card with AI-scored intent."],
  ["Content engine", "One long idea becomes 7 reels, 5 posts and an email — automatically."],
  ["Client onboarding", "Payment triggers contract, folder, kickoff form and welcome email."],
  ["Support replies", "AI drafts answers from your SOPs; you approve in one tap."],
];

function Page() {
  return (
    <div className="pb-4">
      <PageHero
        eyebrow="AI Automation"
        title="Let AI do the boring 80%"
        description="These are the exact tools and workflows we use to run scaleo_lab and our clients' back-office."
      />

      <section className="mx-auto mt-8 max-w-5xl px-4">
        <Reveal>
          <h2 className="flex items-center justify-center gap-2 text-2xl font-extrabold">
            <Bot className="size-6 text-primary" /> Recommended AI tools
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <a
                href={t.url}
                target="_blank"
                rel="noreferrer"
                className="glass-card group relative flex h-full flex-col overflow-hidden rounded-3xl p-5 transition-transform hover:-translate-y-1.5"
              >
                <div className="absolute -right-8 -top-8 size-28 rounded-full bg-primary/20 blur-2xl" />
                <div className="relative flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary">
                    {t.tag}
                  </span>
                  <ExternalLink className="size-4 text-primary transition-transform group-hover:translate-x-0.5" />
                </div>
                <h3 className="relative mt-3 font-display text-lg font-extrabold">{t.name}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground">{t.text}</p>
                <Sparkle className="absolute bottom-3 right-3 size-3.5" delay={i * 0.2} />
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-4xl px-4">
        <Reveal>
          <h2 className="flex items-center justify-center gap-2 text-2xl font-extrabold">
            <Zap className="size-6 text-primary" /> Automations we build
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {workflows.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.07}>
              <div className="glass-card rounded-2xl p-5">
                <h3 className="font-display font-bold text-primary">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand interest="AI Automation" />
    </div>
  );
}
