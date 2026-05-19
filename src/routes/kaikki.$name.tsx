import { createFileRoute, Link } from "@tanstack/react-router";
import { useRouter } from "@tanstack/react-router";
import { useMemo } from "react";
import {
  varieties,
  fruitLabels,
  seasonLabels,
  type FruitType,
  type AppleSeason,
} from "@/lib/varieties";

export const Route = createFileRoute("/kaikki/$name")({
  head: ({ params }) => ({
    meta: [
      { title: `${decodeURIComponent(params.name)} — Papinsaaren Tarha` },
      {
        name: "description",
        content: `Lue lisää lajikkeesta ${decodeURIComponent(params.name)} Papinsaaren Tarhalta.`,
      },
    ],
  }),
  component: VarietyDetail,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="block">
            <p className="font-display text-xl font-semibold text-primary">
              Papinsaaren Tarha
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Kuhmoinen
            </p>
          </Link>
          <Link
            to="/kaikki"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            ← Kaikki lajikkeet
          </Link>
        </div>
      </header>
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h1 className="font-display text-4xl font-semibold md:text-5xl">
          Lajiketta ei löytynyt
        </h1>
        <p className="mt-4 text-muted-foreground">
          Tarkista nimi tai palaa takaisin listaukseen.
        </p>
        <Link
          to="/kaikki"
          className="mt-6 inline-block rounded-full border border-border bg-background px-6 py-2 text-sm text-foreground hover:border-primary/50"
        >
          Kaikki lajikkeet
        </Link>
      </section>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="block">
            <p className="font-display text-xl font-semibold text-primary">
              Papinsaaren Tarha
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Kuhmoinen
            </p>
          </Link>
        </div>
      </header>
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="text-red-500">{error.message}</p>
      </section>
    </div>
  ),
});

function VarietyDetail() {
  const { name: encodedName } = Route.useParams();
  const name = decodeURIComponent(encodedName);

  const variety = useMemo(
    () => varieties.find((v) => v.name === name),
    [name]
  );

  if (!variety) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <header className="border-b border-border/60">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <Link to="/" className="block">
              <p className="font-display text-xl font-semibold text-primary">
                Papinsaaren Tarha
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Kuhmoinen
              </p>
            </Link>
            <Link
              to="/kaikki"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              ← Kaikki lajikkeet
            </Link>
          </div>
        </header>
        <section className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="font-display text-4xl font-semibold md:text-5xl">
            Lajiketta ei löytynyt
          </h1>
          <p className="mt-4 text-muted-foreground">
            Tarkista nimi tai palaa takaisin listaukseen.
          </p>
          <Link
            to="/kaikki"
            className="mt-6 inline-block rounded-full border border-border bg-background px-6 py-2 text-sm text-foreground hover:border-primary/50"
          >
            Kaikki lajikkeet
          </Link>
        </section>
      </div>
    );
  }

  const v = variety;
  const seasonLabel =
    v.fruit === "omena" && v.season ? seasonLabels[v.season] : undefined;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="block">
            <p className="font-display text-xl font-semibold text-primary">
              Papinsaaren Tarha
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Kuhmoinen
            </p>
          </Link>
          <Link
            to="/kaikki"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            ← Kaikki lajikkeet
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          {/* Kuva */}
          <div className="flex items-center justify-center rounded-2xl bg-orchard-soft/30 p-8">
            <img
              src={v.image}
              alt={v.name}
              className="max-h-80 w-full object-contain md:max-h-[28rem]"
            />
          </div>

          {/* Tiedot */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-primary-foreground">
                {fruitLabels[v.fruit]}
              </span>
              {seasonLabel && (
                <span className="rounded-full border border-border bg-background px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  {seasonLabel}
                </span>
              )}
            </div>

            <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              {v.name}
            </h1>

            {v.origin && (
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                {v.origin}
              </p>
            )}

            <div className="mt-8 space-y-5 text-sm leading-relaxed text-foreground/80">
              <p>{v.description}</p>
            </div>

            {v.ripenOrder !== undefined && (
              <div className="mt-8 rounded-2xl border border-border/60 bg-orchard-soft/30 p-5">
                <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  Kypsymisajankohta
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {v.fruit === "omena"
                    ? v.ripenOrder <= 40
                      ? "Kesäkuun loppu – heinäkuun alku"
                      : v.ripenOrder <= 60
                      ? "Elokuu – syyskuun alku"
                      : v.ripenOrder <= 80
                      ? "Syyskuun puoliväli – lokakuun alku"
                      : "Lokakuu – varastointi talveen"
                    : `Kypsymisjärjestysluku ${v.ripenOrder}`}
                </p>
              </div>
            )}

            <div className="mt-10">
              <Link
                to="/kaikki"
                className="inline-block rounded-full border border-border bg-background px-6 py-2 text-sm text-foreground transition hover:border-primary/50"
              >
                ← Takaisin lajikkeisiin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
