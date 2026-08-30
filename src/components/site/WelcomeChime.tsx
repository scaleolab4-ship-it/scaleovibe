import { useEffect } from "react";

/**
 * Plays a soft ~2.5s welcome chime once per browser session.
 * Uses WebAudio (no asset needed). Falls back to first user gesture when
 * the browser blocks autoplay.
 */
export function WelcomeChime() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem("scaleo-welcome") === "1") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let disposed = false;

    const play = () => {
      if (disposed) return true;
      const Ctx =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!Ctx) return true;
      const ctx = new Ctx();
      if (ctx.state === "suspended") {
        void ctx.resume();
        if (ctx.state === "suspended") {
          // Autoplay is blocked (iOS Safari, Chrome): wait for a real gesture.
          void ctx.close();
          return false;
        }
      }

      const master = ctx.createGain();
      master.gain.value = 0.0001;
      master.connect(ctx.destination);
      master.gain.setValueAtTime(0.0001, ctx.currentTime);
      master.gain.exponentialRampToValueAtTime(0.09, ctx.currentTime + 0.35);
      master.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.4);

      // Gentle major-ninth arpeggio: C5 E5 G5 D6
      [523.25, 659.25, 783.99, 1174.66].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        const start = ctx.currentTime + i * 0.22;
        g.gain.setValueAtTime(0.0001, start);
        g.gain.exponentialRampToValueAtTime(0.5, start + 0.08);
        g.gain.exponentialRampToValueAtTime(0.0001, start + 1.4);
        osc.connect(g);
        g.connect(master);
        osc.start(start);
        osc.stop(start + 1.5);
      });

      window.sessionStorage.setItem("scaleo-welcome", "1");
      window.setTimeout(() => void ctx.close(), 3000);
      return true;
    };

    if (!play()) {
      const once = () => {
        if (play()) cleanup();
      };
      const cleanup = () => {
        window.removeEventListener("pointerdown", once);
        window.removeEventListener("keydown", once);
        window.removeEventListener("scroll", once);
      };
      window.addEventListener("pointerdown", once, { once: false });
      window.addEventListener("keydown", once, { once: false });
      window.addEventListener("scroll", once, { once: false });
      return () => {
        disposed = true;
        cleanup();
      };
    }

    return () => {
      disposed = true;
    };
  }, []);

  return null;
}
