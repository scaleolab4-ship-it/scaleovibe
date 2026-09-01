import { useEffect, useState } from "react";
import { Sun, Moon, SlidersHorizontal, X } from "lucide-react";

const KEY = "scaleo-brightness";
const MIN = 70;
const MAX = 135;

/**
 * Floating brightness controller. Instead of a CSS filter on <html> (which
 * breaks fixed backdrops), it layers a soft-light overlay whose opacity is
 * driven by the chosen level. Persisted in localStorage.
 */
export function BrightnessControl() {
  const [level, setLevel] = useState(100);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = Number(window.localStorage.getItem(KEY));
    if (saved >= MIN && saved <= MAX) setLevel(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(KEY, String(level));
  }, [level]);

  const delta = (level - 100) / 100;
  const step = (n: number) => setLevel((v) => Math.min(MAX, Math.max(MIN, v + n)));

  return (
    <>
      {/* light / dark soft overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[45] transition-opacity duration-300"
        style={{
          backgroundColor: delta >= 0 ? "#ffffff" : "#000000",
          opacity: Math.min(Math.abs(delta) * 0.9, 0.32),
          mixBlendMode: delta >= 0 ? "soft-light" : "multiply",
        }}
      />

      <div className="fixed bottom-24 right-4 z-50 flex flex-col items-end gap-2 sm:bottom-28">
        {open ? (
          <div className="glass-card animate-pop w-56 rounded-3xl p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                Brightness
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close brightness control"
                className="rounded-full p-1 text-muted-foreground transition-colors hover:text-primary"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                onClick={() => step(-5)}
                aria-label="Lower brightness"
                className="inline-flex size-8 items-center justify-center rounded-full border border-primary/25 bg-card/70 text-foreground transition-colors hover:bg-primary/15"
              >
                <Moon className="size-4" />
              </button>
              <input
                type="range"
                min={MIN}
                max={MAX}
                step={1}
                value={level}
                aria-label="Brightness level"
                onChange={(e) => setLevel(Number(e.target.value))}
                className="h-1.5 w-full flex-1 cursor-pointer appearance-none rounded-full bg-primary/25 accent-[var(--primary)]"
              />
              <button
                type="button"
                onClick={() => step(5)}
                aria-label="Raise brightness"
                className="inline-flex size-8 items-center justify-center rounded-full border border-primary/25 bg-card/70 text-foreground transition-colors hover:bg-primary/15"
              >
                <Sun className="size-4" />
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs font-semibold">
              <span className="text-muted-foreground">{level}%</span>
              <button
                type="button"
                onClick={() => setLevel(100)}
                className="text-primary transition-opacity hover:opacity-80"
              >
                Reset
              </button>
            </div>
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Brightness settings"
          className="glass-card inline-flex size-11 items-center justify-center rounded-full text-primary shadow-brand transition-transform hover:scale-110"
        >
          <SlidersHorizontal className="size-5" />
        </button>
      </div>
    </>
  );
}
