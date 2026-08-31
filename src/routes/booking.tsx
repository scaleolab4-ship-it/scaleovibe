import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Calendar,
  Clock,
  Copy,
  Check,
  Mail,
  Sparkles,
  User,
  MessageCircle,
  Globe,
  Timer,
  ShieldCheck,
  Rocket,
  Zap,
  Instagram,
} from "lucide-react";
import { PageHero } from "@/components/site/PageShell";
import { Reveal, Sparkle } from "@/components/site/Decor";
import { CharacterBadge } from "@/components/site/Characters";
import { CONTACT_EMAIL, FOUNDER_NAME, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/components/site/Footer";

export const Route = createFileRoute("/booking")({
  validateSearch: (search: Record<string, unknown>): { interest?: string | undefined } => ({
    interest: typeof search["interest"] === "string" ? search["interest"] : undefined,
  }),

  head: () => ({
    meta: [
      { title: "Book a Free Strategy Call — scaleo_vibe" },
      {
        name: "description",
        content:
          "Pick your interest, date and time — scaleo_vibe writes your booking message automatically and sends it to scaleo.lab4@gmail.com.",
      },
      { property: "og:title", content: "Book a Free Strategy Call — scaleo_vibe" },
      {
        property: "og:description",
        content: "Choose a slot, get an auto-written booking message, and send it in one tap.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const interests = [
  "Business Strategy",
  "Marketing Agency",
  "AI Automation",
  "SaaS Build",
  "Digital Products",
  "Physical Services",
  "Agency Builder",
  "System Builder",
  "Mindset Builder",
  "Something else",
];

const times = ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM", "08:00 PM", "10:00 PM"];
const durations = ["15 min intro", "30 min strategy", "60 min deep dive"];
const budgets = ["Just exploring", "Under $500", "$500 – $2k", "$2k – $10k", "$10k+"];
const zones = ["Dhaka (GMT+6)", "India (GMT+5:30)", "Dubai (GMT+4)", "London (GMT+1)", "New York (GMT-4)"];

const steps = [
  { icon: Sparkles, title: "Pick your interest", text: "Tell me which track you want to grow." },
  { icon: Calendar, title: "Choose a slot", text: "Date, time and your own timezone." },
  { icon: Mail, title: "Send in one tap", text: "The message writes itself — just hit send." },
];

const perks = [
  { icon: Zap, title: "Free 15-min intro", text: "No pitch. We map your bottleneck first." },
  { icon: Rocket, title: "Action plan on the call", text: "You leave with 3 next moves, not homework." },
  { icon: ShieldCheck, title: "Zero spam promise", text: "Your details are only used to reply to you." },
];

const faqs = [
  ["How fast do you reply?", "Usually within 24 hours, often the same evening (Dhaka time)."],
  ["Where does the call happen?", "Google Meet, Zoom or WhatsApp — whatever you prefer."],
  ["Do I need to prepare?", "Just know your current numbers and the one thing you want fixed."],
  ["Is the first call paid?", "No. The 15-minute intro is free."],
];

function Page() {
  const { interest: initialInterest } = Route.useSearch();
  const [interest, setInterest] = useState(initialInterest || interests[0]);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(times[1]);
  const [zone, setZone] = useState(zones[0]);
  const [duration, setDuration] = useState(durations[0]);
  const [budget, setBudget] = useState(budgets[0]);
  const [note, setNote] = useState("");
  const [copied, setCopied] = useState(false);

  const filled = [name, contact, date].filter(Boolean).length;
  const progress = Math.round(((filled + 1) / 4) * 100);

  const subject = `Booking request — ${interest}${name ? ` — ${name}` : ""}`;
  const body = useMemo(
    () =>
      [
        `Hi ${FOUNDER_NAME},`,
        ``,
        `I'd like to book a call with scaleo_vibe.`,
        ``,
        `Interested in: ${interest}`,
        `Call length: ${duration}`,
        `Name: ${name || "-"}`,
        `Best way to reach me: ${contact || "-"}`,
        `Preferred date: ${date || "-"}`,
        `Preferred time: ${time} — ${zone}`,
        `Budget range: ${budget}`,
        ``,
        `About my situation:`,
        note || "-",
        ``,
        `Thanks!`,
      ].join("\n"),
    [interest, duration, name, contact, date, time, zone, budget, note],
  );

  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${subject}\n\n${body}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const field =
    "w-full rounded-2xl border border-primary/15 bg-card/70 px-4 py-3 text-sm outline-none backdrop-blur transition-all placeholder:text-muted-foreground/70 focus:border-primary/50 focus:ring-4 focus:ring-primary/10";
  const label =
    "mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-primary";

  return (
    <div className="pb-8">
      <PageHero
        eyebrow="Booking"
        title="Book a call in one tap"
        description="Pick what you're interested in, choose a slot, and your message template writes itself."
      />

      {/* Steps */}
      <section className="mx-auto mt-2 max-w-5xl px-4">
        <div className="grid gap-4 sm:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={0.06 * i}>
              <div className="glass-card flex h-full items-start gap-3 rounded-3xl p-5">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-primary-foreground shadow-brand">
                  <s.icon className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-1 font-display text-base font-extrabold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-5xl px-4">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <div className="glass-card relative overflow-hidden rounded-3xl p-6 sm:p-8">
              <div className="absolute -right-20 -top-20 size-56 rounded-full bg-primary/20 blur-3xl" />
              <Sparkle className="absolute right-6 top-6 size-5" />
              <CharacterBadge
                name="teacher"
                className="absolute right-6 top-16 size-14 hidden sm:inline-flex"
                float="animate-float-slow"
              />

              {/* progress */}
              <div className="relative">
                <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                  <span>Booking details</span>
                  <span className="text-primary">{progress}% ready</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-primary/10">
                  <div
                    className="h-full rounded-full bg-brand-gradient transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <h2 className="relative mt-7 font-display text-xl font-extrabold">
                What are you interested in?
              </h2>
              <div className="relative mt-4 flex flex-wrap gap-2">
                {interests.map((it) => {
                  const active = it === interest;
                  return (
                    <button
                      key={it}
                      type="button"
                      onClick={() => setInterest(it)}
                      className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                        active
                          ? "bg-brand-gradient text-primary-foreground shadow-brand scale-105"
                          : "border border-primary/20 bg-card/70 text-foreground hover:-translate-y-0.5 hover:bg-primary/10"
                      }`}
                    >
                      {it}
                    </button>
                  );
                })}
              </div>

              <h2 className="relative mt-7 font-display text-xl font-extrabold">How long?</h2>
              <div className="relative mt-3 flex flex-wrap gap-2">
                {durations.map((d) => {
                  const active = d === duration;
                  return (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDuration(d)}
                      className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                        active
                          ? "bg-primary/15 text-primary ring-1 ring-primary/40"
                          : "border border-primary/15 bg-card/70 hover:bg-primary/10"
                      }`}
                    >
                      <Timer className="size-3.5" /> {d}
                    </button>
                  );
                })}
              </div>

              <div className="relative mt-7 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className={label}>
                    <User className="size-3.5" /> Your name
                  </span>
                  <input
                    className={field}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                  />
                </label>
                <label className="block">
                  <span className={label}>
                    <MessageCircle className="size-3.5" /> Email / WhatsApp / IG
                  </span>
                  <input
                    className={field}
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="you@email.com"
                  />
                </label>
                <label className="block">
                  <span className={label}>
                    <Calendar className="size-3.5" /> Preferred date
                  </span>
                  <input
                    type="date"
                    className={field}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </label>
                <label className="block">
                  <span className={label}>
                    <Clock className="size-3.5" /> Preferred time
                  </span>
                  <select className={field} value={time} onChange={(e) => setTime(e.target.value)}>
                    {times.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className={label}>
                    <Globe className="size-3.5" /> Your timezone
                  </span>
                  <select className={field} value={zone} onChange={(e) => setZone(e.target.value)}>
                    {zones.map((z) => (
                      <option key={z} value={z}>
                        {z}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className={label}>
                    <Sparkles className="size-3.5" /> Budget range
                  </span>
                  <select
                    className={field}
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  >
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="relative mt-4 block">
                <span className={label}>
                  <Sparkles className="size-3.5" /> Anything I should know?
                </span>
                <textarea
                  rows={4}
                  className={field}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Where you are now and what you want to build..."
                />
              </label>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6 lg:sticky lg:top-24">
              <div className="glass-card rounded-3xl p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <CharacterBadge name="rocket" className="size-12" />
                  <div>
                    <h2 className="font-display text-xl font-extrabold">Your message preview</h2>
                    <p className="text-sm text-muted-foreground">
                      Auto-written and sent to{" "}
                      <span className="font-semibold text-primary">{CONTACT_EMAIL}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-primary/15 bg-background/70 p-4">
                  <p className="text-xs font-bold text-primary">{subject}</p>
                  <pre className="mt-3 whitespace-pre-wrap font-sans text-xs leading-relaxed text-muted-foreground">
                    {body}
                  </pre>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={mailto}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-primary-foreground shadow-brand transition-transform hover:scale-105"
                  >
                    <Mail className="size-4" /> Send booking email
                  </a>
                  <button
                    type="button"
                    onClick={copy}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 bg-card/70 px-5 py-3 text-sm font-semibold transition-colors hover:bg-primary/10"
                  >
                    {copied ? <Check className="size-4 text-primary" /> : <Copy className="size-4" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Chat on Instagram @${INSTAGRAM_HANDLE}`}
                  className="mt-3 flex items-center justify-center gap-2 rounded-full border border-primary/25 bg-card/70 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                >
                  <Instagram className="size-4" /> Or chat on Instagram @{INSTAGRAM_HANDLE}
                </a>

                <p className="mt-4 text-xs text-muted-foreground">
                  Replies usually land within 24 hours — email or Instagram DM.
                </p>
              </div>

              <div className="glass-card rounded-3xl p-6">
                <h3 className="font-display text-base font-extrabold">What you get</h3>
                <ul className="mt-4 space-y-4">
                  {perks.map((p) => (
                    <li key={p.title} className="flex gap-3">
                      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <p.icon className="size-4" />
                      </span>
                      <div>
                        <p className="text-sm font-bold">{p.title}</p>
                        <p className="text-xs text-muted-foreground">{p.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-14 max-w-5xl px-4">
        <Reveal>
          <h2 className="text-center font-display text-2xl font-extrabold">Before you book</h2>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {faqs.map(([q, a], i) => (
            <Reveal key={q} delay={0.05 * i}>
              <div className="glass-card h-full rounded-3xl p-5">
                <p className="font-display text-base font-extrabold">{q}</p>
                <p className="mt-2 text-sm text-muted-foreground">{a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
