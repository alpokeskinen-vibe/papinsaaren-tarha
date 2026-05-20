import { createFileRoute, Link } from "@tanstack/react-router";
import banner from "@/assets/orchard-banner.jpg";
import { featuredVarieties } from "@/lib/varieties";
import { VarietyCard } from "@/components/VarietyCard";

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
            {featuredVarieties.map((v) => (
              <VarietyCard key={v.name} variety={v} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/kaikki"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              Selaa kaikkia lajikkeita →
            </Link>
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
