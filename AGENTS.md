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

## Julkaisu GitHub Pagesiin

Sivusto julkaistaan staattisena buildina `gh-pages`-branchilta. Paivita julkaisu
rakentamalla `dist/` ja puskemalla sen sisalto `gh-pages`-branchin juureen.
GitHub Pagesin lahde on `gh-pages` / `/`.

Yksinkertainen julkaisutapa:

```bash
bun run build
tmpdir=$(mktemp -d)
cp -a dist/. "$tmpdir/"
touch "$tmpdir/.nojekyll"
git -C "$tmpdir" init
git -C "$tmpdir" checkout -b gh-pages
git -C "$tmpdir" add -A
git -C "$tmpdir" commit -m "Deploy site"
git -C "$tmpdir" remote add origin https://github.com/alpokeskinen-vibe/papinsaaren-tarha.git
git -C "$tmpdir" push --force origin gh-pages
```

Varsinainen lahdekoodi pidetaan `main`-branchilla. Ala commitoi `dist/`-hakemistoa
`main`-branchille.

## Huomioita agenteille

- Vastaa kayttajalle suomeksi, ellei kayttaja nimenomaisesti pyyda muuta kielta.
- Suosi olemassa olevia komponentteja, tyyliratkaisuja ja reitityksen rakennetta.
- Pida sisallon savy maanlaheisena ja koetarhan mittakaavaan sopivana.
- Ala korosta suurta saatavuutta tai tuotantomaisia volyymeja, ellei sellaisesta
  ole erikseen annettu tietoa.
