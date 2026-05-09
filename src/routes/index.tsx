import { createFileRoute } from "@tanstack/react-router";
import banner from "@/assets/orchard-banner.jpg";
import tohoku from "@/assets/tohoku.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Papinsaaren Tarha — Omenat Kuhmoisista" },
      {
        name: "description",
        content:
          "Papinsaaren Tarha Kuhmoisissa esittelee omena- ja hedelmälajikkeensa. Tutustu makuihin ja tarinaan tarhan takana.",
      },
      { property: "og:title", content: "Papinsaaren Tarha — Omenat Kuhmoisista" },
      {
        property: "og:description",
        content: "Omena- ja hedelmälajikkeiden esittely Kuhmoisten Papinsaaresta.",
      },
    ],
  }),
  component: Index,
});

type Variety = {
  name: string;
  origin?: string;
  image: string;
  description: string;
};

const varieties: Variety[] = [
  {
    name: "Tohoku",
    origin: "Japanilainen Fuji 2 -lajike",
    image: tohoku,
    description:
      "Mehevä, rapea ja runsaan makuinen syys-talviomena. Tarkempi lajikekuvaus tulossa.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <p className="font-display text-xl font-semibold text-primary">
              Papinsaaren Tarha
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Kuhmoinen
            </p>
          </div>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#tarina" className="hover:text-primary">Tarina</a>
            <a href="#lajikkeet" className="hover:text-primary">Lajikkeet</a>
            <a href="#yhteys" className="hover:text-primary">Yhteystiedot</a>
          </nav>
        </div>
      </header>

      <section className="relative">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <img
            src={banner}
            alt="Papinsaaren Tarhan omenarivit kesäaamuna"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-6xl px-6 pb-16 text-white">
              <h1 className="font-display text-5xl font-semibold leading-tight md:text-6xl">
                Sisämaan auringon
                <br />
                kypsyttämiä omenoita
              </h1>
              <p className="mt-4 max-w-xl text-lg text-white/85">
                Papinsaaren Tarha kasvattaa omenoita ja hedelmiä Kuhmoisten
                järvimaisemissa — kiireettömästi, käsityönä.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="tarina" className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Järvien ja metsien makuisia omenoita
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Papinsaaressa Kuhmoisissa kasvavat omenapuumme nauttivat pitkistä
          kesäpäivistä, viileistä öistä ja puhtaasta sisämaan ilmasta. Hoidamme
          tarhaa pienellä porukalla, läheltä seuraten — jokainen lajike saa
          oman aikansa kypsyä täyteen makuunsa.
        </p>
      </section>

      <section id="lajikkeet" className="bg-orchard-soft/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Omenoita joka makuun
            </h2>
            <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
              Lajikevalikoima täydentyy kauden mukaan. Klikkaa lajiketta
              lukeaksesi lisää.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {varieties.map((v) => (
              <article
                key={v.name}
                className="group rounded-2xl bg-background/70 p-6 shadow-sm ring-1 ring-border/50 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-56 items-center justify-center">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-primary">
                  {v.name}
                </h3>
                {v.origin && (
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {v.origin}
                  </p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  {v.description}
                </p>
              </article>
            ))}

            {Array.from({ length: 2 }).map((_, i) => (
              <article
                key={`placeholder-${i}`}
                className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border/60 bg-background/30 p-10 text-center text-muted-foreground"
              >
                <span className="font-display text-lg">Lisää lajikkeita</span>
                <span className="mt-2 text-xs">Tulossa pian</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="yhteys"
        className="border-t border-border/60 bg-background py-10 text-center text-sm text-muted-foreground"
      >
        <p className="font-display text-base text-foreground">Papinsaaren Tarha</p>
        <p className="mt-1">Kuhmoinen, Suomi</p>
        <p className="mt-4 text-xs">
          © {new Date().getFullYear()} Papinsaaren Tarha
        </p>
      </footer>
    </div>
  );
}
