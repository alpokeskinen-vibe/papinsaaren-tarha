import { useState } from "react";
import {
  fruitLabels,
  seasonLabels,
} from "@/lib/varieties";
import type { Variety } from "@/lib/varieties";

export function VarietyCard({ variety }: { variety: Variety }) {
  const [open, setOpen] = useState(false);

  const seasonLabel =
    variety.fruit === "omena" && variety.season
      ? seasonLabels[variety.season]
      : fruitLabels[variety.fruit];

  return (
    <article className="group rounded-2xl bg-background/70 p-6 shadow-sm ring-1 ring-border/50 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-56 items-center justify-center">
        <img
          src={variety.image}
          alt={variety.name}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <h3 className="text-2xl font-semibold text-primary">{variety.name}</h3>
        <span className="shrink-0 rounded-full bg-orchard-soft px-3 py-1 text-[10px] uppercase tracking-wider text-orchard">
          {seasonLabel}
        </span>
      </div>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="mt-4 flex w-full items-center justify-center gap-1 rounded-full border border-border bg-background py-1.5 text-sm text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
        aria-expanded={open}
        aria-label={open ? "Sulje kuvaus" : "Avaa kuvaus"}
      >
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div className="mt-4 text-sm leading-relaxed text-foreground/80">
          <p>{variety.description}</p>
        </div>
      )}
    </article>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
