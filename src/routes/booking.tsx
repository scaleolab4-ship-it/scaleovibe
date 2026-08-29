import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Calendar, Clock, Copy, Check, Mail, Sparkles, User } from "lucide-react";
import { PageHero } from "@/components/site/PageShell";
import { Reveal, Sparkle } from "@/components/site/Decor";
import { CONTACT_EMAIL } from "@/components/site/Footer";

export const Route = createFileRoute("/booking")({
  validateSearch: (search: Record<string, unknown>): { interest?: string | undefined } => ({
    interest: typeof search["interest"] === "string" ? search["interest"] : undefined,
  }),


  head: () => ({
    meta: [
      { title: "Book a Call — scaleo_lab" },
      {
        name: "description",
        content:
          "Pick your interest, date and time — scaleo_lab writes your booking message automatically and sends it to scaleo.lab4@gmail.com.",
      },
      { property: "og:title", content: "Book a Call — scaleo_lab" },
      {
        property: "og:description",
        content: "Choose a slot, get an auto-written booking message, and send it in one tap.",
      },
    ],
  }),
  component: Page,
});

const interests = [
  "Business Strategy",
  "AI Automation",
  "SaaS Build",
  "Agency Builder",
  "Mindset Builder",
  "Something else",
];

const times = ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM", "08:00 PM", "10:00 PM"];

function Page() {
  const { interest: initialInterest } = Route.useSearch();
  const [interest, setInterest] = useState(initialInterest || interests[0]);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(times[1]);
  const [note, setNote] = useState("");
  const [copied, setCopied] = useState(false);

  const subject = `Booking request — ${interest}${name ? ` — ${name}` : ""}`;
  const body = useMemo(
    () =>
      [
        `Hi Yeasin,`,
        ``,
        `I'd like to book a call with scaleo_lab.`,
        ``,
        `Interested in: ${interest}`,
        `Name: ${name || "-"}`,
        `Best way to reach me: ${contact || "-"}`,
        `Preferred date: ${date || "-"}`,
        `Preferred time: ${time} (Dhaka, GMT+6)`,
        ``,
        `About my situation:`,
        note || "-",
        ``,
        `Thanks!`,
      ].join("\n"),
    [interest, name, contact, date, time, note],
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
    "w-full rounded-2xl border border-primary/15 bg-card/70 px-4 py-3 text-sm outline-none backdrop-blur transition-colors placeholder:text-muted-foreground/70 focus:border-primary/50";

  return (
    <div className="pb-4">
      <PageHero
        eyebrow="Booking"
        title="Book a call in one tap"
        description="Pick what you're interested in, choose a slot, and your message template writes itself."
      />

      <section className="mx-auto mt-4 max-w-5xl px-4">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <div className="glass-card relative overflow-hidden rounded-3xl p-6 sm:p-8">
              <div className="absolute -right-20 -top-20 size-56 rounded-full bg-primary/20 blur-3xl" />
              <Sparkle className="absolute right-6 top-6 size-5" />

              <h2 className="relative font-display text-xl font-extrabold">What are you interested in?</h2>
              <div className="relative mt-4 flex flex-wrap gap-2">
                {interests.map((it) => {
                  const active = it === interest;
                  return (
                    <button
                      key={it}
                      type="button"
                      onClick={() => setInterest(it)}
                      className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                        active
                          ? "bg-brand-gradient text-primary-foreground shadow-brand scale-105"
                          : "border border-primary/20 bg-card/70 text-foreground hover:bg-primary/10"
                      }`}
                    >
                      {it}
                    </button>
                  );
                })}
              </div>

              <div className="relative mt-7 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                    <User className="size-3.5" /> Your name
                  </span>
                  <input
                    className={field}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Yeasin Arfin"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                    <Mail className="size-3.5" /> Email / WhatsApp / IG
                  </span>
                  <input
                    className={field}
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="you@email.com"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-primary">
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
                  <span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                    <Clock className="size-3.5" /> Preferred time
                  </span>
                  <select className={field} value={time} onChange={(e) => setTime(e.target.value)}>
                    {times.map((t) => (
                      <option key={t} value={t}>
                        {t} (Dhaka)
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="relative mt-4 block">
                <span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                  <Sparkles className="size-3.5" /> Anything we should know?
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
            <div className="glass-card sticky top-24 rounded-3xl p-6 sm:p-8">
              <h2 className="font-display text-xl font-extrabold">Your message preview</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Auto-written and sent to{" "}
                <span className="font-semibold text-primary">{CONTACT_EMAIL}</span>
              </p>

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

              <p className="mt-4 text-xs text-muted-foreground">
                Replies usually land within 24 hours.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
