import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** Floating button that appears after scrolling and returns to the top. */
export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-50 inline-flex size-11 items-center justify-center rounded-full border border-primary/30 bg-card/80 text-primary shadow-soft backdrop-blur transition-transform hover:scale-110"
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
