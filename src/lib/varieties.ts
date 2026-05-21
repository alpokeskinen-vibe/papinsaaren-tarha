import tohoku from "@/assets/tohoku.png";
import gloster from "@/assets/gloster.png";
import olga from "@/assets/olga.png";
import aelita from "@/assets/aelita.png";
import agra from "@/assets/agra.png";
import astrakaaniPunainen from "@/assets/astrakaani-punainen.png";
import genevaEarly from "@/assets/geneva-early.png";
import huvitus from "@/assets/huvitus.png";
import ijulskojeTshernenko from "@/assets/ijulskoje-tshernenko.png";
import jaspi from "@/assets/jaspi.png";
import jelena from "@/assets/jelena.png";

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
  {
    name: "Huvitus",
    origin: "Suomalainen, Huvituksen kartanosta vuodelta 1895",
    image: huvitus,
    description:
      "Huvitus on aito suomalainen klassikko, joka on saanut alkunsa Huvituksen kartanosta jo vuonna 1895 – kotimaista omenahistoriaa parhaimmillaan. Pohjaväri on keltainen ja sen päälle maalautuu runsaasti kaunista, helakanpunaista peiteväriä. Malto on kiinteää ja käsittelyä kestävää, joten omena ei murskaannu korissa eikä kassissa. Maku on miellyttävän imelän hapokas – juuri sellainen tasapainoinen kesäomenan maku, johon on helppo ihastua. Kesäomena, joka kypsyy elokuun puolivälistä alkaen mutta jauhottuu pian, joten kannattaa nauttia tuoreeltaan. Erinomainen herkutteluomena ja loistava soseomena.",
    fruit: "omena",
    season: "kesä",
    ripenOrder: 34,
  },
  {
    name: "Ijulskoje Tshernenko",
    origin: "Mitshurinsk, Venäjä: Anis alyj × Papirovka",
    image: ijulskojeTshernenko,
    description:
      "Ijulskoje Tshernenko on venäläistä jalostusta Mitshurinskista, ja sukutaulussa on kaksi vahvaa klassikkoa: Anis alyj ja Papirovka – yhdistelmä, joka lupaa sekä väriä että aitoa kesäomenan makua. Peiteväri on voimakkaan kirsikanpunaista ja peittää suuren osan hedelmän pinnasta. Malto on vihertävänvalkeaa, pehmeää, hienorakeista ja mehukasta – juuri sellaista, johon hampaat uppoavat helposti. Kesälajike, jonka hedelmät kypsyvät elokuun alusta alkaen eriaikaisesti, joten poimintaa voi tehdä useaan otteeseen. Kypsyttyään omenat varisevat herkästi ja säilyvyys on melko heikko, joten parasta on nauttia tuoreeltaan tai jalostaa heti mehuksi ja soseeksi.",
    fruit: "omena",
    season: "kesä",
    ripenOrder: 22,
  },
  {
    name: "Jaspi",
    origin: "Suomalainen, Piikiön jaloste: Lobo × Huvitus",
    image: jaspi,
    description:
      "Jaspi on suomalainen Piikiön jaloste, jonka vanhemmissa yhdistyvät kanadalainen Lobo ja kotimainen klassikko Huvitus – ja se kyllä näkyy ja maistuu. Kuori on vahapeitteinen ja kiiltävä, ja peiteväri on hehkuvan punainen, melkein kuin omena olisi juuri kiillotettu. Malto on valkoista, tiivistä ja rapeaa – rouskuu mukavasti hampaiden alla. Maku on mausteinen ja makea, miedosti hapokas; tasapainoinen ja monipuolinen, joten Jaspi taipuu sekä napostelusta että kotitalouden moniin käyttöihin piirakasta soseeseen. Syyslajike, joka kypsyy syyskuun puolivälin jälkeen ja säilyy ainakin kuukauden, hyvissä oloissa jopa marraskuuhun saakka.",
    fruit: "omena",
    season: "syys",
    ripenOrder: 55,
  },
  {
    name: "Jelena",
    origin: "Valko-Venäjä: Ranneje sladkoje × Discovery",
    image: jelena,
    description:
      "Jelena on valko-venäläistä jalostusta, jonka vanhemmissa kohtaavat varhainen Ranneje sladkoje ja englantilainen Discovery – yhdistelmä, joka tuo sekä väriä että aromia. Peiteväri on kirkkaan ruusunpunaista ja sitä on melko runsaasti. Malto on väriltään hieman vihertävää, melko tiivistä, hienorakeista ja mehukasta. Maku on lievähappoista, miellyttävää ja mausteisen makeaa – juuri sellainen tasapainoinen kesäomena, johon on helppo ihastua. Sopii sellaisenaan ja kotitalouden moniin käyttöihin. Hedelmät kypsyvät elokuun alkupuolella ja säilyvät jopa kuukauden, joskin tuoremyyntiin kelpaa vain pieni osa – paras siis nauttia tuoreeltaan tai jalostaa heti.",
    fruit: "omena",
    season: "kesä",
    ripenOrder: 24,
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
