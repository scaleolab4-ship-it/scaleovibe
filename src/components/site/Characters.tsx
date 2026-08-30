import teacherSrc from "@/assets/char-teacher.png";
import rocketSrc from "@/assets/char-rocket.png";
import ideaSrc from "@/assets/char-idea.png";

export const characters = {
  teacher: { src: teacherSrc, alt: "scaleo_lab teacher bot mascot" },
  rocket: { src: rocketSrc, alt: "scaleo_lab rocket mascot" },
  idea: { src: ideaSrc, alt: "scaleo_lab idea mascot" },
} as const;

export type CharacterName = keyof typeof characters;

/** Mascot inside a white circle badge — matches the logo treatment. */
export function CharacterBadge({
  name,
  className = "size-16",
  float = "animate-float",
}: {
  name: CharacterName;
  className?: string;
  float?: string;
}) {
  const c = characters[name];
  return (
    <span
      className={`${className} ${float} relative inline-flex shrink-0 items-center justify-center rounded-full bg-card ring-1 ring-primary/20 shadow-soft`}
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-lg" />
      <img
        src={c.src}
        alt={c.alt}
        loading="lazy"
        width={768}
        height={768}
        className="size-[76%] object-contain"
      />
    </span>
  );
}

/** Decorative mascot row — pure motion candy. */
export function CharacterStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-end justify-center gap-4 ${className}`}>
      <CharacterBadge name="idea" className="size-14 sm:size-16" float="animate-float-slow" />
      <CharacterBadge name="teacher" className="size-20 sm:size-24" float="animate-float" />
      <CharacterBadge name="rocket" className="size-14 sm:size-16" float="animate-float-slow" />
    </div>
  );
}
