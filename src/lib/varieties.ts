import tohoku from "@/assets/tohoku.png";
import gloster from "@/assets/gloster.png";
import olga from "@/assets/olga.png";
import aelita from "@/assets/aelita.png";
import agra from "@/assets/agra.png";
import astrakaaniPunainen from "@/assets/astrakaani-punainen.png";
import genevaEarly from "@/assets/geneva-early.png";

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
      "Tohoku on japanilaista sukua – käytännössä Fujin serkku, joka on löytänyt tiensä Kuhmoisten leveysasteille. Keskikokoinen, kauniin punaiseksi värittynyt omena, jonka valkoinen malto on rapeaa ja mehukasta. Maku on mietohappoinen ja makea, juuri sopiva niille, jotka haluavat omenalta makua mutta eivät turhaa happamuutta. Loistava sellaisenaan napostelu- ja eväsomena, mutta antaa runsaan makunsa myös piirakkaan ja soseisiin. Syys-talviomena, joka säilyy hyvissä oloissa jouluun saakka. Menestyy kohtuullisesti lämpimillä, suojaisilla paikoilla.",
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
  {
    name: "Aelita",
    origin: "Wealthy × Koritshnoje polosatoje (Kaneliomena), jalostettu Moskovassa ja Mitshurinskissa",
    image: aelita,
    description:
      "Aelita on venäläistä juurta oleva syyslajike, jossa virtaa sekä amerikkalaisen Wealthyn että vanhan Kaneliomenan verta – aika juhlava sukutaulu pieneen omenaan. Kuori on vihertävänkeltainen ja peittyy punaiseen, joka maalautuu joko reiluiksi läiskiksi tai hennoiksi viiruiksi. Malto on kellertävää, mehevää, hienorakeista ja sopivan napakkaa. Maku on hieno ja tasapainoinen, happaman-imelä – juuri sellainen, joka toimii sekä napostelussa että kotitalouden monissa käytöissä piirakasta soseeseen. Hedelmät kypsyvät syyskuun keskivaiheilla ja säilyvät noin kaksi kuukautta.",
    fruit: "omena",
    season: "syys",
    ripenOrder: 50,
  },
  {
    name: "Astrakaani punainen",
    origin: "Ruotsalainen vanha kesälajike",
    image: astrakaaniPunainen,
    description:
      "Astrakaani punainen on ruotsalainen klassikko, joka pukeutuu reilusti punaiseen peiteväriin – kaunis jo pelkästään puussa. Malto on vaaleaa, tiivistä ja mehukasta, ja maku on aromaattinen ja viinihappoinen; tarkkaavainen maistaja löytää mehusta vielä lievän tanniinisen vivahteen, ihan kuin pieni kesäviini olisi pullotettu omenan sisään. Toimii sellaisenaan, mehuksi ja kotitalouden moniin käyttöihin. Kesälajike, joka kypsyy elokuun puolivälissä ja säilyy parisen viikkoa – siis nautittavaksi heti, ei talven varastoon. Meillä menestynyt hyvin suotuisalla paikalla.",
    fruit: "omena",
    season: "kesä",
    ripenOrder: 32,
  },
  {
    name: "Agra",
    origin: "Latvia: Suislepp × Tallinnan päärynäomena",
    image: agra,
    description:
      "Agra on latvialainen kesäomena, jonka sukutaulussa on klassikkojen Suislepin ja Tallinnan päärynäomenan ainekset – ja se kyllä maistuu. Kuori peittyy reilusti kirkkaanpunaiseen, ja malto on kellertävää ja keskinkertaisen mehukasta. Maku on hieno ja tasapainoinen: miellyttävän mausteinen, happaman-imelä – juuri sellainen, joka tekee kesäomenasta enemmän kuin pelkän napostelun. Sopii hyvin sellaisenaan, mehuksi ja kotitalouden moniin käyttöihin. Kypsyy elokuun puolivälin tienoilla ja säilyy noin kuukauden, joten kannattaa nauttia tuoreeltaan.",
    fruit: "omena",
    season: "kesä",
    ripenOrder: 30,
  },
  {
    name: "Geneva Early",
    origin: "USA: Quinte × Julyred",
    image: genevaEarly,
    description:
      "Geneva Early on amerikkalainen kesäomena, jonka vanhemmissa komeilevat Quinte ja Julyred – sukutaulun perusteella siis selkeästi kesäkauden iloksi jalostettu. Kuori on punainen keltaisella pohjalla, ja malto on pehmeää ja kermanväristä. Maku on aromikas, aavistuksen hapan ja kirpeä – juuri sellainen virkistävä puraisu, jota kuumana elokuun päivänä kaipaa. Hyvä syötäväksi sellaisenaan, mutta sopii myös salaatteihin ja jälkiruokiin tuomaan raikasta särmää. Kypsyy elokuun alussa ja säilyy parisen viikkoa. Meillä kokeiltu lämpimässä paikassa.",
    fruit: "omena",
    season: "kesä",
    ripenOrder: 20,
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
