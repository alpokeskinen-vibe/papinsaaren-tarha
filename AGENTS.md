# Papinsaaren tarha

Papinsaaren tarha on koetarha. Siella on paljon lajikkeita, mutta yksittaisten
lajikkeiden volyymit voivat olla pienia. Sivuston tehtava on esitella tarhaa ja
sen lajikkeita selkeasti ilman, etta sisalto antaa vaikutelman suuren volyymin
tuotantotarhasta.

## Kehitysymparisto

Projekti kayttaa Bunia paketinhallintaan. Kayta `bun.lock`-tiedostoa
ensisijaisena lukitustiedostona, ala luo tai commitoi `package-lock.json`-
tiedostoa.

Asenna riippuvuudet:

```bash
bun install
```

Kaynnista paikallinen kehityspalvelin:

```bash
bun run dev
```

Paikallinen sivusto aukeaa oletuksena osoitteeseen:

```text
http://localhost:8080/
```

## Hyodylliset komennot

Rakenna tuotantoversio:

```bash
bun run build
```

Aja linttaus:

```bash
bun run lint
```

Muotoile koodi:

```bash
bun run format
```

## Huomioita agenteille

- Vastaa kayttajalle suomeksi, ellei kayttaja nimenomaisesti pyyda muuta kielta.
- Suosi olemassa olevia komponentteja, tyyliratkaisuja ja reitityksen rakennetta.
- Pida sisallon savy maanlaheisena ja koetarhan mittakaavaan sopivana.
- Ala korosta suurta saatavuutta tai tuotantomaisia volyymeja, ellei sellaisesta
  ole erikseen annettu tietoa.
