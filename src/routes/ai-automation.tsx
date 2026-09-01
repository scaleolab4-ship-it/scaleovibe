import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Bot, Zap, Youtube, Smartphone, Globe } from "lucide-react";
import { PageHero, CTABand } from "@/components/site/PageShell";
import { Reveal, Sparkle } from "@/components/site/Decor";

export const Route = createFileRoute("/ai-automation")({
  head: () => ({
    meta: [
      { title: "AI Automation & Tools — scaleo_vibe" },
      {
        name: "description",
        content:
          "AI automation workflows plus the exact AI tools scaleo_vibe recommends for content, sales and operations.",
      },
      { property: "og:title", content: "AI Automation & Tools — scaleo_vibe" },
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
    web: "https://lovable.dev",
    url: "https://lovable.dev",
    tag: "Build",
    text: "Ship web apps and internal tools by chatting — fastest way to a working product.",
  },
  {
    name: "n8n",
    web: "https://app.n8n.cloud",
    url: "https://n8n.io",
    tag: "Workflows",
    text: "Self-hostable automation: connect APIs, CRMs and AI models with no glue code.",
  },
  {
    name: "Make",
    web: "https://eu1.make.com/login",
    app: "https://play.google.com/store/apps/details?id=com.make.android",
    url: "https://www.make.com",
    tag: "Workflows",
    text: "Visual automation for client onboarding, invoices and lead routing.",
  },
  {
    name: "ChatGPT",
    web: "https://chat.openai.com",
    app: "https://apps.apple.com/app/chatgpt/id6448311069",
    url: "https://chat.openai.com",
    tag: "Assistant",
    text: "Research, offer copy, sales scripts and daily thinking partner.",
  },
  {
    name: "Claude",
    web: "https://claude.ai",
    app: "https://apps.apple.com/app/claude-by-anthropic/id6473753684",
    url: "https://claude.ai",
    tag: "Assistant",
    text: "Long-document analysis, SOP writing and careful reasoning tasks.",
  },
  {
    name: "Perplexity",
    web: "https://www.perplexity.ai",
    app: "https://apps.apple.com/app/perplexity-ask-anything/id1668000334",
    url: "https://www.perplexity.ai",
    tag: "Research",
    text: "Fast sourced market and competitor research before any launch.",
  },
  {
    name: "ElevenLabs",
    web: "https://elevenlabs.io/app",
    app: "https://elevenlabs.io/app/reader",
    url: "https://elevenlabs.io",
    tag: "Voice",
    text: "Voiceovers for reels, ads and faceless content at scale.",
  },
  {
    name: "CapCut",
    web: "https://www.capcut.com/editor",
    app: "https://apps.apple.com/app/capcut-video-editor/id1500855883",
    url: "https://www.capcut.com",
    tag: "Content",
    text: "Short-form editing with auto captions — our reel engine.",
  },
  {
    name: "Notion AI",
    web: "https://www.notion.so/login",
    app: "https://apps.apple.com/app/notion-notes-docs-tasks/id1232780281",
    url: "https://www.notion.so/product/ai",
    tag: "Ops",
    text: "Client dashboards, SOP library and content calendars in one place.",
  },
];

const channels = [
  {
    name: "Nick Saraev",
    url: "https://www.youtube.com/@nicksaraev",
    text: "Make.com and automation agency builds, priced and packaged like a real business.",
  },
  {
    name: "Liam Ottley",
    url: "https://www.youtube.com/@LiamOttley",
    text: "AI agency positioning, client acquisition and productised AI service offers.",
  },
  {
    name: "n8n",
    url: "https://www.youtube.com/@n8n-io",
    text: "Official n8n walkthroughs for building and self-hosting real workflows.",
  },
  {
    name: "Matt Wolfe",
    url: "https://www.youtube.com/@mreflow",
    text: "Weekly AI tool roundups so your stack never goes stale.",
  },
  {
    name: "Alex Hormozi",
    url: "https://www.youtube.com/@AlexHormozi",
    text: "Offers, pricing and scaling fundamentals behind every system we build.",
  },
  {
    name: "Lovable",
    url: "https://www.youtube.com/@lovable-dev",
    text: "Shipping apps and SaaS MVPs fast, from idea to live product.",
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
        description="These are the exact tools and workflows we use to run scaleo_vibe and our clients' back-office."
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
                <span className="relative mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-background/60 px-3 py-1 text-[0.68rem] font-semibold text-foreground">
                    <Globe className="size-3 text-primary" /> Web app
                  </span>
                  {"app" in t ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-background/60 px-3 py-1 text-[0.68rem] font-semibold text-foreground">
                      <Smartphone className="size-3 text-primary" /> Mobile app
                    </span>
                  ) : null}
                </span>
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

      {/* Direct app / dashboard links */}
      <section className="mx-auto mt-16 max-w-5xl px-4">
        <Reveal>
          <h2 className="flex items-center justify-center gap-2 text-2xl font-extrabold">
            <Smartphone className="size-6 text-primary" /> Open each tool directly
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Every tool above, with its live app link — web dashboard and mobile app where available.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {tools.map((t, i) => (
            <Reveal key={`app-${t.name}`} delay={i * 0.04}>
              <div className="glass-card flex items-center justify-between gap-3 rounded-2xl p-4">
                <div>
                  <p className="font-display text-sm font-extrabold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.tag}</p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <a
                    href={t.web ?? t.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-3 py-1.5 text-[0.7rem] font-bold text-primary-foreground shadow-brand transition-transform hover:scale-105"
                  >
                    <Globe className="size-3" /> Web
                  </a>
                  {"app" in t ? (
                    <a
                      href={(t as { app: string }).app}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-card/70 px-3 py-1.5 text-[0.7rem] font-bold text-primary transition-colors hover:bg-primary/10"
                    >
                      <Smartphone className="size-3" /> App
                    </a>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* YouTube learning */}
      <section className="relative mx-auto mt-16 max-w-5xl px-4">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 size-80 -translate-x-1/2 rounded-full bg-primary/15 blur-[110px] animate-drift" />
        <Reveal>
          <h2 className="flex items-center justify-center gap-2 text-2xl font-extrabold">
            <Youtube className="size-6 text-primary" /> YouTube channels to learn from
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Watch these before your first automation build — free, practical, no fluff.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05}>
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="glass-card group relative flex h-full flex-col overflow-hidden rounded-3xl p-5 transition-transform hover:-translate-y-1.5"
              >
                <span className="absolute -left-8 -bottom-8 size-28 rounded-full bg-primary-glow/20 blur-2xl" />
                <span className="relative inline-flex size-10 items-center justify-center rounded-2xl bg-brand-gradient text-primary-foreground shadow-brand">
                  <Youtube className="size-5" />
                </span>
                <h3 className="relative mt-4 font-display text-base font-extrabold">{c.name}</h3>
                <p className="relative mt-1.5 text-sm text-muted-foreground">{c.text}</p>
                <span className="relative mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary">
                  Watch channel
                  <ExternalLink className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand interest="AI Automation" />
    </div>
  );
}
