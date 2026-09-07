import { useEffect, useMemo, useState } from "react";
import { Download, ImagePlus, Plus, RotateCcw, Save, Trash2, X } from "lucide-react";

import { visibleVarieties } from "@/lib/varieties";

type SensoryKey =
  | "kovuus"
  | "mehukas"
  | "kuori"
  | "makeus"
  | "happamuus"
  | "aromikkuus"
  | "jalkimaku"
  | "tuoksu";

type Observation = {
  id: string;
  variety: string;
  date: string;
  tree: string;
  pickedOrStored: string;
  notes: string;
  photo?: string;
  values: Record<SensoryKey, number>;
};

const STORAGE_KEY = "papinsaari-aistinvaraiset-havainnot";
const DRAFT_STORAGE_KEY = "papinsaari-aistinvarainen-havaintoluonnos";

const axes: {
  key: SensoryKey;
  label: string;
  low: string;
  middle: string;
  high: string;
  values: [string, string, string, string, string];
}[] = [
  {
    key: "kovuus",
    label: "Kovuus",
    low: "Kova",
    middle: "Sopiva",
    high: "Pehmeä",
    values: ["Kova", "Melko kova", "Sopiva", "Melko pehmeä", "Pehmeä"],
  },
  {
    key: "mehukas",
    label: "Mehevyys",
    low: "Kuiva",
    middle: "Tavallinen",
    high: "Mehu tursuaa",
    values: ["Kuiva", "Hiukan kuiva", "Tavallinen", "Mehukas", "Mehu tursuaa"],
  },
  {
    key: "kuori",
    label: "Kuoren tunne",
    low: "Paksu",
    middle: "Sopiva",
    high: "Ohut",
    values: ["Paksu", "Hieman paksu", "Sopiva", "Melko ohut", "Ohut"],
  },
  {
    key: "makeus",
    label: "Makeus",
    low: "Ei makeutta",
    middle: "Hyvä",
    high: "Erittäin makea",
    values: ["Ei makeutta", "Vähän makea", "Hyvä", "Makea", "Erittäin makea"],
  },
  {
    key: "happamuus",
    label: "Happamuus",
    low: "Kirpeä",
    middle: "Raikas",
    high: "Hapoton",
    values: ["Kirpeä", "Hapan", "Raikas", "Mieto", "Hapoton"],
  },
  {
    key: "aromikkuus",
    label: "Aromikkuus",
    low: "Laimea",
    middle: "Sopiva",
    high: "Mausteinen",
    values: ["Laimea", "Mieto", "Sopiva", "Aromikas", "Mausteinen"],
  },
  {
    key: "jalkimaku",
    label: "Jälkimaku",
    low: "Karvas/pitkä",
    middle: "Normaali",
    high: "Lyhyt",
    values: ["Karvas/pitkä", "Viipyvä", "Normaali", "Melko lyhyt", "Lyhyt"],
  },
  {
    key: "tuoksu",
    label: "Tuoksun voimakkuus",
    low: "Mieto",
    middle: "Keskiverto",
    high: "Voimakas",
    values: ["Mieto", "Hillitty", "Keskiverto", "Selvä", "Voimakas"],
  },
];

const defaultValues = axes.reduce(
  (acc, axis) => ({ ...acc, [axis.key]: 3 }),
  {} as Record<SensoryKey, number>,
);

function createObservationId() {
  const webCrypto = globalThis.crypto;

  if (typeof webCrypto?.randomUUID === "function") {
    return webCrypto.randomUUID();
  }

  const bytes = new Uint8Array(16);
  if (typeof webCrypto?.getRandomValues === "function") {
    webCrypto.getRandomValues(bytes);
  } else {
    for (let index = 0; index < bytes.length; index += 1) {
      bytes[index] = Math.floor(Math.random() * 256);
    }
  }
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = [...bytes].map((byte) => byte.toString(16).padStart(2, "0"));
  return `${hex.slice(0, 4).join("")}-${hex.slice(4, 6).join("")}-${hex
    .slice(6, 8)
    .join("")}-${hex.slice(8, 10).join("")}-${hex.slice(10).join("")}`;
}

function createBlankObservation(): Observation {
  return {
    id: createObservationId(),
    variety: "",
    date: getLocalDateString(),
    tree: "",
    pickedOrStored: "Tuore havainto",
    notes: "",
    photo: undefined,
    values: { ...defaultValues },
  };
}

function getLocalDateString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function readSavedObservations() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return (JSON.parse(raw) as Observation[]).map(normalizeObservation);
  } catch {
    return [];
  }
}

function readDraftObservation() {
  try {
    const raw = window.localStorage.getItem(DRAFT_STORAGE_KEY);
    if (!raw) return undefined;
    return normalizeObservation(JSON.parse(raw) as Observation);
  } catch {
    return undefined;
  }
}

function normalizeObservation(observation: Observation) {
  const oldValues = observation.values as Record<string, number>;
  const migratedValues: Partial<Record<SensoryKey, number>> = {
    kovuus: oldValues.kovuus ?? oldValues.rapea ?? 3,
    mehukas: oldValues.mehukas ?? 3,
    makeus: oldValues.makeus ?? oldValues.makea ?? 3,
    happamuus: oldValues.happamuus ?? oldValues.hapan ?? 3,
    aromikkuus: oldValues.aromikkuus ?? oldValues.hedelmainenHaju ?? 3,
    tuoksu: oldValues.tuoksu ?? oldValues.hedelmainenHaju ?? 3,
  };
  return {
    ...observation,
    values: axes.reduce(
      (acc, axis) => ({
        ...acc,
        [axis.key]: clampValue(migratedValues[axis.key] ?? oldValues[axis.key] ?? 3),
      }),
      {} as Record<SensoryKey, number>,
    ),
  };
}

function clampValue(value: number) {
  return Math.max(1, Math.min(Math.round(value), 5));
}

function resizePhoto(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Kuvan lukeminen ei onnistunut."));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error("Kuvan avaaminen ei onnistunut."));
      image.onload = () => {
        const maxSide = 900;
        const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);
        const context = canvas.getContext("2d");
        if (!context) {
          reject(new Error("Kuvan pienentäminen ei onnistunut."));
          return;
        }
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.84));
      };
      image.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  });
}

export function SensoryTool() {
  const appleVarieties = useMemo(
    () =>
      visibleVarieties
        .filter((variety) => variety.fruit === "omena")
        .map((variety) => variety.name)
        .sort((a, b) => a.localeCompare(b, "fi")),
    [],
  );
  const [draft, setDraft] = useState<Observation>(
    () => readDraftObservation() ?? createBlankObservation(),
  );
  const [saved, setSaved] = useState<Observation[]>(() => readSavedObservations());
  const [storageError, setStorageError] = useState("");

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
      setStorageError("");
    } catch {
      setStorageError(
        "Tallennus ei mahtunut selaimen muistiin. Poista kuvia tai vie havainnot tiedostona.",
      );
    }
  }, [saved]);

  useEffect(() => {
    try {
      window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));
    } catch {
      setStorageError(
        "Luonnoksen tallennus ei mahtunut selaimen muistiin. Poista kuvia tai tallenna havainto ennen uuden kuvan lisäämistä.",
      );
    }
  }, [draft]);

  function updateValue(key: SensoryKey, value: number) {
    setDraft((current) => ({
      ...current,
      values: { ...current.values, [key]: value },
    }));
  }

  async function addPhoto(file: File | undefined) {
    if (!file) return;
    try {
      const photo = await resizePhoto(file);
      setDraft((current) => ({ ...current, photo }));
    } catch {
      setStorageError("Kuvan lisääminen ei onnistunut.");
    }
  }

  function saveObservation() {
    const normalized: Observation = {
      ...draft,
      variety: draft.variety.trim() || "Nimeämätön lajike",
      tree: draft.tree.trim(),
      notes: draft.notes.trim(),
    };
    setSaved((current) => [normalized, ...current.filter((item) => item.id !== normalized.id)]);
    setDraft(createBlankObservation());
  }

  function removeObservation(id: string) {
    setSaved((current) => current.filter((item) => item.id !== id));
  }

  function exportObservations() {
    const exportData = {
      exportedAt: new Date().toISOString(),
      source: "Papinsaaren Tarha",
      observations: saved.map((item) => ({
        ...item,
        description: describeObservation(item.values),
      })),
    };
    const json = JSON.stringify(exportData, null, 2);
    const blob = new Blob([json], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `papinsaaren-aistinvaraiset-havainnot-${draft.date}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="../" className="block">
            <p className="font-display text-xl font-semibold text-primary">Papinsaaren Tarha</p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Kuhmoinen</p>
          </a>
          <a href="../" className="text-sm text-muted-foreground hover:text-primary">
            Etusivulle
          </a>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-8 px-5 py-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:py-12">
        <section>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Kenttätyökalu
            </p>
            <h1 className="mt-2 font-display text-4xl font-semibold md:text-5xl">
              Lajikkeen aistinvarainen kuvailu
            </h1>
            <p className="mt-4 text-muted-foreground">
              Valitse lajike, napauta tuntumaa parhaiten kuvaavat kohdat ja tallenna havainto.
            </p>
          </div>

          <div className="mt-8 rounded-lg border border-border/70 bg-card p-4 shadow-sm md:p-6">
            <label className="grid gap-2 text-sm font-medium">
              Lajike
              <input
                list="apple-varieties"
                value={draft.variety}
                onChange={(event) =>
                  setDraft((current) => ({ ...current, variety: event.target.value }))
                }
                placeholder="Esim. Tohoku"
                className="min-h-11 rounded-md border border-input bg-background px-3 text-base font-normal outline-none focus:ring-2 focus:ring-ring"
              />
              <datalist id="apple-varieties">
                {appleVarieties.map((name) => (
                  <option key={name} value={name} />
                ))}
              </datalist>
            </label>
          </div>

          {storageError && (
            <p className="mt-4 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
              {storageError}
            </p>
          )}

          <details className="mt-6 rounded-lg border border-border/70 bg-card p-4 shadow-sm md:p-6">
            <summary className="cursor-pointer text-sm font-semibold text-primary">
              Lisätiedot tarvittaessa
            </summary>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium">
                Päivämäärä
                <input
                  type="date"
                  value={draft.date}
                  onChange={(event) =>
                    setDraft((current) => ({ ...current, date: event.target.value }))
                  }
                  className="min-h-11 rounded-md border border-input bg-background px-3 text-base font-normal outline-none focus:ring-2 focus:ring-ring"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium">
                Näytteen tila
                <select
                  value={draft.pickedOrStored}
                  onChange={(event) =>
                    setDraft((current) => ({ ...current, pickedOrStored: event.target.value }))
                  }
                  className="min-h-11 rounded-md border border-input bg-background px-3 text-base font-normal outline-none focus:ring-2 focus:ring-ring"
                >
                  <option>Tuore havainto</option>
                  <option>Poimittu tänään</option>
                  <option>Varastoitu</option>
                  <option>Pudokas</option>
                  <option>Muu</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm font-medium md:col-span-2">
                Puu tai paikka
                <input
                  value={draft.tree}
                  onChange={(event) =>
                    setDraft((current) => ({ ...current, tree: event.target.value }))
                  }
                  placeholder="Esim. rivi 2, puu 4"
                  className="min-h-11 rounded-md border border-input bg-background px-3 text-base font-normal outline-none focus:ring-2 focus:ring-ring"
                />
              </label>

              <div className="grid gap-3 md:col-span-2">
                <span className="text-sm font-medium">Kuva omenasta</span>
                {draft.photo ? (
                  <div className="relative overflow-hidden rounded-md border border-border bg-background">
                    <img
                      src={draft.photo}
                      alt="Havaintoon liitetty omenan kuva"
                      className="max-h-72 w-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setDraft((current) => ({ ...current, photo: undefined }))}
                      className="absolute right-2 top-2 inline-flex h-10 w-10 items-center justify-center rounded-md bg-background/90 text-muted-foreground shadow hover:text-destructive"
                      aria-label="Poista kuva"
                      title="Poista kuva"
                    >
                      <X aria-hidden="true" />
                    </button>
                  </div>
                ) : (
                  <label className="flex min-h-24 cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed border-border bg-background p-4 text-center text-sm text-muted-foreground hover:border-primary/50 hover:text-primary">
                    <ImagePlus aria-hidden="true" />
                    Lisää tai ota kuva
                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      onChange={(event) => {
                        void addPhoto(event.target.files?.[0]);
                        event.currentTarget.value = "";
                      }}
                      className="sr-only"
                    />
                  </label>
                )}
              </div>

              <label className="grid gap-2 text-sm font-medium md:col-span-2">
                Muistiinpano
                <textarea
                  value={draft.notes}
                  onChange={(event) =>
                    setDraft((current) => ({ ...current, notes: event.target.value }))
                  }
                  placeholder="Kypsyys, ensivaikutelma, mistä puusta näyte tuli..."
                  className="min-h-24 rounded-md border border-input bg-background px-3 py-3 text-base font-normal outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
            </div>
          </details>

          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(300px,1fr)] lg:items-start">
            <div className="rounded-lg border border-border/70 bg-card p-4 shadow-sm md:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="font-display text-2xl font-semibold">Suutuntuma ja tuoksu</h2>
                  <p className="text-sm text-muted-foreground">
                    Oletus on keskellä. Muuta vain se, mikä erottuu.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setDraft((current) => ({ ...current, values: { ...defaultValues } }))
                  }
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-muted-foreground hover:text-primary"
                  aria-label="Palauta oletusarvot"
                  title="Palauta oletusarvot"
                >
                  <RotateCcw aria-hidden="true" />
                </button>
              </div>

              <div className="mt-5 divide-y divide-border/70">
                {axes.map((axis) => (
                  <div key={axis.key} className="grid gap-3 py-4 first:pt-0 last:pb-0">
                    <span className="flex items-center justify-between gap-3 text-sm font-medium">
                      <span>{axis.label}</span>
                      <span className="text-primary">
                        {valueLabel(axis, draft.values[axis.key])}
                      </span>
                    </span>
                    <div
                      className="grid grid-cols-5 gap-2"
                      role="radiogroup"
                      aria-label={axis.label}
                    >
                      {[1, 2, 3, 4, 5].map((value) => {
                        const active = draft.values[axis.key] === value;
                        return (
                          <button
                            key={value}
                            type="button"
                            onClick={() => updateValue(axis.key, value)}
                            className={
                              "min-h-12 rounded-md border text-sm font-semibold transition " +
                              (active
                                ? "border-primary bg-primary text-primary-foreground shadow-sm"
                                : "border-border bg-background hover:border-primary/50")
                            }
                            role="radio"
                            aria-checked={active}
                            aria-label={`${axis.label}: ${valueLabel(axis, value)}`}
                          >
                            {value}
                          </button>
                        );
                      })}
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                      <span>{axis.low}</span>
                      <span className="text-center">{axis.middle}</span>
                      <span className="text-right">{axis.high}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-border/70 bg-card p-4 shadow-sm md:p-6">
              <FlavorRadar values={draft.values} />
              <div className="mt-4 rounded-md bg-orchard-soft/45 p-4">
                <h2 className="font-display text-xl font-semibold">Sanallinen kuvaus</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {describeObservation(draft.values)}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={saveObservation}
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 sm:flex-none"
              >
                <Save aria-hidden="true" />
                Tallenna havainto
              </button>
              <button
                type="button"
                onClick={() => setDraft(createBlankObservation())}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-medium hover:border-primary/50"
              >
                <Plus aria-hidden="true" />
                Uusi
              </button>
            </div>
          </div>
        </section>

        <aside className="lg:pt-24">
          <div className="rounded-lg border border-border/70 bg-orchard-soft/45 p-4 md:p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold">Tallennetut</h2>
                <p className="text-sm text-muted-foreground">
                  {saved.length} havaintoa tässä selaimessa
                </p>
              </div>
              <button
                type="button"
                onClick={exportObservations}
                disabled={saved.length === 0}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-muted-foreground hover:text-primary disabled:opacity-40"
                aria-label="Vie havainnot"
                title="Vie havainnot"
              >
                <Download aria-hidden="true" />
              </button>
            </div>

            <div className="mt-4 grid gap-3">
              {saved.length === 0 ? (
                <p className="rounded-md border border-dashed border-border bg-background/65 p-4 text-sm text-muted-foreground">
                  Ensimmäinen tallennus näkyy tässä. Havainnot säilyvät puhelimen selaimessa.
                </p>
              ) : (
                saved.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-md border border-border bg-background p-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold">{item.variety}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.date}
                          {item.tree ? ` · ${item.tree}` : ""}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeObservation(item.id)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-destructive"
                        aria-label={`Poista havainto ${item.variety}`}
                        title="Poista"
                      >
                        <Trash2 aria-hidden="true" />
                      </button>
                    </div>
                    {item.photo && (
                      <img
                        src={item.photo}
                        alt={`Havaintokuva: ${item.variety}`}
                        className="mt-3 max-h-40 w-full rounded-md object-cover"
                      />
                    )}
                    <MiniRadar values={item.values} />
                    <p className="mt-2 text-sm text-muted-foreground">
                      {describeObservation(item.values)}
                    </p>
                    {item.notes && (
                      <p className="mt-2 text-sm text-muted-foreground">{item.notes}</p>
                    )}
                  </article>
                ))
              )}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

function FlavorRadar({ values }: { values: Record<SensoryKey, number> }) {
  const size = 330;
  const center = size / 2;
  const radius = 92;
  const labelRadius = 128;
  const points = getRadarPoints(values, center, radius);

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="mx-auto aspect-square w-full max-w-[390px]">
      {[1, 2, 3, 4, 5].map((level) => (
        <polygon
          key={level}
          points={axes
            .map((_, index) => pointFor(index, axes.length, center, (radius * level) / 5).join(","))
            .join(" ")}
          fill="none"
          stroke="oklch(0.62 0.13 130 / 0.28)"
          strokeWidth="1"
        />
      ))}
      {axes.map((axis, index) => {
        const [x, y] = pointFor(index, axes.length, center, radius);
        const [lx, ly] = pointFor(index, axes.length, center, labelRadius);
        return (
          <g key={axis.key}>
            <line x1={center} y1={center} x2={x} y2={y} stroke="oklch(0.62 0.13 130 / 0.32)" />
            <text
              x={lx}
              y={ly}
              textAnchor={getTextAnchor(lx, center)}
              dominantBaseline="middle"
              className="fill-foreground text-[12px] font-semibold"
            >
              {axis.label}
            </text>
          </g>
        );
      })}
      <polygon
        points={points}
        fill="oklch(0.58 0.19 25 / 0.18)"
        stroke="oklch(0.45 0.13 135)"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {points.split(" ").map((pair) => {
        const [x, y] = pair.split(",").map(Number);
        return <circle key={pair} cx={x} cy={y} r="4" fill="oklch(0.58 0.19 25)" />;
      })}
      <circle cx={center} cy={center} r="3" fill="oklch(0.45 0.13 135)" />
    </svg>
  );
}

function MiniRadar({ values }: { values: Record<SensoryKey, number> }) {
  const size = 84;
  const center = size / 2;
  const radius = 34;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="mt-3 h-20 w-20">
      <polygon
        points={axes
          .map((_, index) => pointFor(index, axes.length, center, radius).join(","))
          .join(" ")}
        fill="none"
        stroke="oklch(0.62 0.13 130 / 0.35)"
      />
      <polygon
        points={getRadarPoints(values, center, radius)}
        fill="oklch(0.58 0.19 25 / 0.18)"
        stroke="oklch(0.45 0.13 135)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function valueLabel(axis: (typeof axes)[number], value: number) {
  return axis.values[clampValue(value) - 1];
}

function describeObservation(values: Record<SensoryKey, number>) {
  const texture = [
    pick(values.kovuus, {
      1: "kova",
      2: "melko napakka",
      3: "sopivan kiinteä",
      4: "melko pehmeä",
      5: "pehmeä",
    }),
    pick(values.mehukas, {
      1: "kuivahko",
      2: "hiukan kuiva",
      3: "tavallisen mehukas",
      4: "mehukas",
      5: "erittäin mehukas",
    }),
  ];

  const peel = pick(values.kuori, {
    1: "Kuori tuntuu paksulta.",
    2: "Kuori tuntuu hieman paksulta.",
    3: "Kuori tuntuu sopivalta.",
    4: "Kuori on melko huomaamaton.",
    5: "Kuori on ohut ja huomaamaton.",
  });

  const sweetness = pick(values.makeus, {
    1: "makeutta on vähän",
    2: "makeutta on jonkin verran",
    3: "makeus on hyvä",
    4: "makeutta on runsaasti",
    5: "maku on erittäin makea",
  });

  const acidity = pick(values.happamuus, {
    1: "happamuus on kirpeä",
    2: "happamuus erottuu selvästi",
    3: "happamuus on raikas",
    4: "happamuus on mieto",
    5: "maku on lähes hapoton",
  });

  const aroma = pick(values.aromikkuus, {
    1: "Aromi jää laimeaksi.",
    2: "Aromi on melko mieto.",
    3: "Aromi on sopiva.",
    4: "Aromi on selvä.",
    5: "Aromi on vahva ja mausteinen tai hedelmäinen.",
  });

  const aftertaste = pick(values.jalkimaku, {
    1: "Jälkimaku on pitkä tai karvas.",
    2: "Jälkimaku viipyy hieman.",
    3: "Jälkimaku on normaali.",
    4: "Jälkimaku on melko lyhyt.",
    5: "Jälkimaku jää lyhyeksi.",
  });

  const scent = pick(values.tuoksu, {
    1: "Tuoksu on mieto tai lähes olematon.",
    2: "Tuoksu on hillitty.",
    3: "Tuoksu on keskiverto.",
    4: "Tuoksu erottuu hyvin.",
    5: "Tuoksu on erittäin voimakas.",
  });

  return `Omena on ${texture.join(" ja ")}. Maussa ${sweetness}, ja ${acidity}. ${peel} ${aroma} ${aftertaste} ${scent}`;
}

function pick(value: number, labels: Record<1 | 2 | 3 | 4 | 5, string>) {
  return labels[clampValue(value) as 1 | 2 | 3 | 4 | 5];
}

function getRadarPoints(values: Record<SensoryKey, number>, center: number, radius: number) {
  return axes
    .map((axis, index) =>
      pointFor(index, axes.length, center, valueRadius(values[axis.key], radius)).join(","),
    )
    .join(" ");
}

function valueRadius(value: number, radius: number) {
  return radius * (0.2 + ((clampValue(value) - 1) / 4) * 0.8);
}

function pointFor(index: number, total: number, center: number, radius: number) {
  const angle = -Math.PI / 2 + (index * Math.PI * 2) / total;
  return [
    Number((center + Math.cos(angle) * radius).toFixed(2)),
    Number((center + Math.sin(angle) * radius).toFixed(2)),
  ];
}

function getTextAnchor(x: number, center: number) {
  if (Math.abs(x - center) < 8) return "middle";
  return x > center ? "start" : "end";
}
