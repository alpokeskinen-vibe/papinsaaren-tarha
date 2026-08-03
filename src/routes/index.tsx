import logo from "@/assets/papinsaari-logo-akvarelli.png";
import paijanne from "@/assets/paijanne-nakyma.jpg";
import mehuasema from "@/assets/mehuasema-pouch-up.jpg";
import { featuredVarieties } from "@/lib/varieties";
import { VarietyCard } from "@/components/VarietyCard";

export function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <p className="font-display text-xl font-semibold text-primary">Papinsaaren Tarha</p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Kuhmoinen</p>
          </div>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#tarina" className="hover:text-primary">
              Tarina
            </a>
            <a href="#lajikkeet" className="hover:text-primary">
              Lajikkeet
            </a>
            <a href="#tuotteet" className="hover:text-primary">
              Tuotteet
            </a>
            <a href="#yhteys" className="hover:text-primary">
              Yhteystiedot
            </a>
          </nav>
        </div>
      </header>

      <section className="relative">
        <div className="relative flex min-h-[560px] w-full items-center overflow-hidden">
          <img
            src={paijanne}
            alt="Päijänteen näkymä Papinsaaren Tarhalta"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-center">
            <div className="max-w-2xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
              <h1 className="font-display text-5xl font-semibold leading-tight md:text-6xl">
                Papinsaaren Tarha
                <br />
                Päijänteen saaressa
              </h1>
              <p className="mt-4 max-w-xl text-lg text-white/85">
                Yksityinen harrastus- ja koekenttä omenalajikkeiden menestymisen testaamiseen
                Kuhmoisten Papinsaaressa.
              </p>
            </div>
            <img
              src={logo}
              alt="Papinsaaren Tarhan akvarellilogo"
              className="mx-auto max-h-[220px] w-auto rounded-md bg-white/85 p-3 object-contain shadow-sm"
            />
          </div>
        </div>
      </section>

      <section id="tarina" className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Koekenttä, jossa olosuhteita rakennetaan vuosia
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Papinsaaren Tarha ei tähtää kaupalliseen tuotantoon eikä kuulu mihinkään ohjelmaan. Se on
          yksityinen harrastus, jossa testataan lajikkeiden menestymistä paikassa, jossa olosuhteet
          eivät ole valmiiksi helpot.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Yli kymmenen vuoden aikana kasvuolosuhteet ovat parantuneet merkittävästi. Onnistumisessa
          on suuri ero, kun maata parannetaan kunnolla vuosia, tehdään suojia, kastellaan oikealla
          tavalla, valitaan sopiva perusrunko tai ympätään välirunkoon.
        </p>
      </section>

      <section id="lajikkeet" className="bg-orchard-soft/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="text-3xl font-semibold md:text-4xl">Omenoita joka makuun</h2>
            <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
              Vuoden 2026 esiteltävät lajikkeet. Pienet erät voivat olla saatavilla Kuhmoisten
              Kädentaitajissa kauden mukaan.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuredVarieties.map((v) => (
              <VarietyCard key={v.name} variety={v} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#/kaikki"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              Selaa kaikkia lajikkeita →
            </a>
          </div>
        </div>
      </section>

      <section id="tuotteet" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Mehut ja pienet kausierät</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Tarhan omalla mehuasemalla kylmäpuristetaan mehut tuoreista omenoista. Marjamehut
              tehdään pakastetuista marjoista, jotta mehun saanti on hyvä. Omenat ja marjat ovat
              omaa tuotantoa.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Mehu pastöroidaan ja suljetaan 1,5 litran ruskeaan Pouch-up-säilytyspussiin. Kauden
              mukaan saatavilla voi olla esimerkiksi omenamehua, mustaherukkamehua ja muita mehuja.
            </p>
          </div>
          <img
            src={mehuasema}
            alt="Papinsaaren Tarhan mehuasema ja 1,5 litran Pouch-up-mehupussi"
            className="h-full max-h-[520px] w-full rounded-lg object-cover shadow-sm ring-1 ring-border/60"
          />
        </div>
      </section>

      <footer
        id="yhteys"
        className="border-t border-border/60 bg-background py-10 text-center text-sm text-muted-foreground"
      >
        <p className="font-display text-base text-foreground">Papinsaaren Tarha</p>
        <p className="mt-1">Papinsaarentie 160, Kuhmoinen</p>
        <p className="mt-1">Alpo Keskinen</p>
        <p className="mt-1">
          <a href="tel:+358456302053" className="hover:text-primary">
            045 630 2053
          </a>
        </p>
        <p className="mt-4 text-xs">© {new Date().getFullYear()} Papinsaaren Tarha</p>
      </footer>
    </div>
  );
}
