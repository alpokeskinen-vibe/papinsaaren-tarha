import tohoku from "@/assets/tohoku.png";
import gloster from "@/assets/gloster.png";
import olga from "@/assets/olga.png";

export type FruitType = "omena" | "päärynä" | "kirsikka";
export type AppleSeason = "kesä" | "syys" | "talvi";

export type Variety = {
  name: string;
  origin?: string;
  image: string;
  description: string;
  fruit: FruitType;
  /** Vain omenoille */
  season?: AppleSeason;
  /** Pienempi = aikaisemmin kypsyvä. Muut hedelmät jätetään tyhjäksi tai isoksi. */
  ripenOrder?: number;
  /** Näkyykö etusivun valikoidussa listassa */
  featured?: boolean;
};

export const varieties: Variety[] = [
  {
    name: "Tohoku",
    origin: "Japanilainen Fuji-tyyppinen lajike",
    image: tohoku,
    description:
      "Tohoku on japanilaista sukua – käytännössä Fujin serkku, joka on löytänyt tiensä Kuhmoisten leveysasteille. Keskikokoinen, kauniin punaiseksi värittynyt omena, jonka valkoinen malto on rapeaa ja mehukasta. Maku on mietohappoinen ja makea, juuri sopiva niille, jotka haluavat omenalta makua mutta eivät turhaa happamuutta. Loistava sellaisenaan napostelu- ja eväsomena, mutta antaa runsaan makunsa myös piirakkaan ja sose-keittoihin. Syys-talviomena, joka säilyy hyvissä oloissa jouluun saakka. Menestyy kohtuullisesti lämpimillä, suojaisilla paikoilla.",
    fruit: "omena",
    season: "talvi",
    ripenOrder: 80,
    featured: true,
  },
  {
    name: "Gloster",
    origin: "Aromikas talviomena",
    image: gloster,
    description:
      "Gloster on aromikas ja hapokas talviomena. Jotta tummanpunainen peiteväri saadaan esiin, tarvitaan muutama kylmä yö. Hedelmäliha on rapsakka, mehukas ja vaaleankeltainen. Erinomainen sellaisenaan, mutta sopii hyvin myös leivontaan, jälkiruokiin ja torttuihin.",
    fruit: "omena",
    season: "talvi",
    ripenOrder: 85,
  },
  {
    name: "Olga",
    origin: "Kirpeän hapan päärynä",
    image: olga,
    description:
      "Olga on raikas ja kirpeän hapan päärynä, jossa on vihertävän keltainen kuori ja mehevä, valkoinen hedelmäliha. Sopii erityisesti säilöntään ja leivontaan, mutta antaa pirteän särmän myös tuoreena nautittuna.",
    fruit: "päärynä",
    ripenOrder: 200,
  },
];

export const featuredVarieties = varieties.filter((v) => v.featured);

export const fruitLabels: Record<FruitType, string> = {
  omena: "Omenat",
  päärynä: "Päärynät",
  kirsikka: "Kirsikat",
};

export const seasonLabels: Record<AppleSeason, string> = {
  kesä: "Kesäomenat",
  syys: "Syysomenat",
  talvi: "Talviomenat",
};
