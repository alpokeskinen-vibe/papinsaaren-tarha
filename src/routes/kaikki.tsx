import { useMemo, useState } from "react";
import {
  visibleVarieties,
  fruitLabels,
  seasonLabels,
  type FruitType,
  type AppleSeason,
} from "@/lib/varieties";
import { VarietyCard } from "@/components/VarietyCard";

type FruitFilter = "kaikki" | FruitType;
type SeasonFilter = "kaikki" | AppleSeason;
type SortMode = "aakkoset" | "kypsymis";

export function AllVarieties() {
  const [fruit, setFruit] = useState<FruitFilter>("kaikki");
  const [season, setSeason] = useState<SeasonFilter>("kaikki");
  const [sort, setSort] = useState<SortMode>("aakkoset");

  const list = useMemo(() => {
    let l = visibleVarieties.slice();
    if (fruit !== "kaikki") l = l.filter((v) => v.fruit === fruit);
    if (fruit === "omena" && season !== "kaikki") {
      l = l.filter((v) => v.season === season);
    }
    if (sort === "aakkoset") {
      l.sort((a, b) => a.name.localeCompare(b.name, "fi"));
    } else {
      // Kypsymisjärjestys: omenat ensin (ripenOrder), muut hedelmät loppuun
      l.sort((a, b) => {
        const aApple = a.fruit === "omena" ? 0 : 1;
        const bApple = b.fruit === "omena" ? 0 : 1;
        if (aApple !== bApple) return aApple - bApple;
        const ar = a.ripenOrder ?? 9999;
        const br = b.ripenOrder ?? 9999;
        if (ar !== br) return ar - br;
        return a.name.localeCompare(b.name, "fi");
      });
    }
    return l;
  }, [fruit, season, sort]);

  const fruitOptions: { value: FruitFilter; label: string }[] = [
    { value: "kaikki", label: "Kaikki hedelmät" },
    { value: "omena", label: fruitLabels.omena },
    { value: "päärynä", label: fruitLabels.päärynä },
    { value: "kirsikka", label: fruitLabels.kirsikka },
  ];

  const seasonOptions: { value: SeasonFilter; label: string }[] = [
    { value: "kaikki", label: "Kaikki kaudet" },
    { value: "kesä", label: seasonLabels.kesä },
    { value: "syys", label: seasonLabels.syys },
    { value: "talvi", label: seasonLabels.talvi },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="../" className="block">
            <p className="font-display text-xl font-semibold text-primary">Papinsaaren Tarha</p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Kuhmoinen</p>
          </a>
          <a href="../" className="text-sm text-muted-foreground hover:text-primary">
            ← Etusivulle
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="font-display text-4xl font-semibold md:text-5xl">Kaikki lajikkeet</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Tarhan koko valikoima. Suodata hedelmätyypin ja kauden mukaan tai järjestä
          kypsymisjärjestyksessä.
        </p>

        <div className="mt-10 flex flex-wrap items-end gap-6 rounded-2xl border border-border/60 bg-orchard-soft/40 p-6">
          <FilterGroup label="Hedelmä">
            {fruitOptions.map((o) => (
              <Chip
                key={o.value}
                active={fruit === o.value}
                onClick={() => {
                  setFruit(o.value);
                  if (o.value !== "omena") setSeason("kaikki");
                }}
              >
                {o.label}
              </Chip>
            ))}
          </FilterGroup>

          {fruit === "omena" && (
            <FilterGroup label="Kausi">
              {seasonOptions.map((o) => (
                <Chip key={o.value} active={season === o.value} onClick={() => setSeason(o.value)}>
                  {o.label}
                </Chip>
              ))}
            </FilterGroup>
          )}

          <FilterGroup label="Järjestys">
            <Chip active={sort === "aakkoset"} onClick={() => setSort("aakkoset")}>
              Aakkosjärjestys
            </Chip>
            <Chip active={sort === "kypsymis"} onClick={() => setSort("kypsymis")}>
              Kypsymisjärjestys
            </Chip>
          </FilterGroup>
        </div>

        {list.length === 0 ? (
          <p className="mt-16 text-center text-muted-foreground">
            Valituilla suodattimilla ei löytynyt lajikkeita.
          </p>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((v) => (
              <VarietyCard key={v.name} variety={v} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "rounded-full border px-4 py-1.5 text-sm transition " +
        (active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-foreground hover:border-primary/50")
      }
    >
      {children}
    </button>
  );
}
