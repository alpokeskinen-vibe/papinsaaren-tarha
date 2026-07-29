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
import julyred from "@/assets/julyred.png";
import junost from "@/assets/junost.png";
import krasnojeRanneje from "@/assets/krasnoje-ranneje.png";
import mantet from "@/assets/mantet.png";
import medunitsa from "@/assets/medunitsa.png";
import orlinka from "@/assets/orlinka.png";
import orlovim from "@/assets/orlovim.png";
import orlovskojePolosatoje from "@/assets/orlovskoje-polosatoje.png";
import pirja from "@/assets/pirja.png";
import redFree from "@/assets/red-free.png";
import roberts from "@/assets/roberts.png";
import rosmarin from "@/assets/rosmarin.png";
import slavaPobediteljam from "@/assets/slava-pobediteljam.png";
import solntsedar from "@/assets/solntsedar.png";
import solnyshko from "@/assets/solnyshko.png";
import studentsheskoje from "@/assets/studentsheskoje.png";
import tshistotel from "@/assets/tshistotel.png";
import uslada from "@/assets/uslada.png";

export type FruitType = "omena" | "päärynä" | "kirsikka";
export type AppleSeason = "kesä" | "syys" | "talvi";

export type Variety = {
  name: string;
  origin?: string;
  image?: string;
  description: string;
  /** Lyhyt makua tai luonnetta kuvaava sana korttiin */
  trait?: string;
  uses?: string[];
  fruit: FruitType;
  /** Vain omenoille */
  season?: AppleSeason;
  /** Pienempi = aikaisemmin kypsyvä. Muut hedelmät jätetään tyhjäksi tai isoksi. */
  ripenOrder?: number;
  /** Vaihda false, kun lajike halutaan piiloon kauden päätyttyä. */
  visible?: boolean;
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
    trait: "Makea",
    uses: ["tuoreena", "evääksi", "leivontaan", "soseeksi"],
    fruit: "omena",
    season: "talvi",
    ripenOrder: 80,
    visible: true,
    featured: true,
  },
  {
    name: "Gloster",
    origin: "Aromikas talviomena",
    image: gloster,
    description:
      "Gloster on aromikas ja hapokas talviomena. Jotta tummanpunainen peiteväri saadaan esiin, tarvitaan muutama kylmä yö. Hedelmäliha on rapsakka, mehukas ja vaaleankeltainen. Erinomainen sellaisenaan, mutta sopii hyvin myös leivontaan, jälkiruokiin ja torttuihin.",
    trait: "Hapokas",
    fruit: "omena",
    season: "talvi",
    ripenOrder: 85,
    visible: false,
  },
  {
    name: "Olga",
    origin: "Kirpeän hapan päärynä",
    image: olga,
    description:
      "Olga on raikas ja kirpeän hapan päärynä, jossa on vihertävän keltainen kuori ja mehevä, valkoinen hedelmäliha. Sopii erityisesti säilöntään ja leivontaan, mutta antaa pirteän särmän myös tuoreena nautittuna.",
    trait: "Kirpeä",
    fruit: "päärynä",
    ripenOrder: 200,
    visible: false,
  },
  {
    name: "Aelita",
    origin:
      "Wealthy × Koritshnoje polosatoje (Kaneliomena), jalostettu Moskovassa ja Mitshurinskissa",
    image: aelita,
    description:
      "Aelita on venäläistä juurta oleva syyslajike, jossa virtaa sekä amerikkalaisen Wealthyn että vanhan Kaneliomenan verta – aika juhlava sukutaulu pieneen omenaan. Kuori on vihertävänkeltainen ja peittyy punaiseen, joka maalautuu joko reiluiksi läiskiksi tai hennoiksi viiruiksi. Malto on kellertävää, mehevää, hienorakeista ja sopivan napakkaa. Maku on hieno ja tasapainoinen, happaman-imelä – juuri sellainen, joka toimii sekä napostelussa että kotitalouden monissa käytöissä piirakasta soseeseen. Hedelmät kypsyvät syyskuun keskivaiheilla ja säilyvät noin kaksi kuukautta.",
    trait: "Tasapainoinen",
    uses: ["tuoreena", "leivontaan", "soseeksi", "säilytykseen"],
    fruit: "omena",
    season: "syys",
    ripenOrder: 50,
    visible: true,
    featured: true,
  },
  {
    name: "Astrakaani punainen",
    origin: "Ruotsalainen vanha kesälajike",
    image: astrakaaniPunainen,
    description:
      "Astrakaani punainen on ruotsalainen klassikko, joka pukeutuu reilusti punaiseen peiteväriin – kaunis jo pelkästään puussa. Malto on vaaleaa, tiivistä ja mehukasta, ja maku on aromaattinen ja viinihappoinen; tarkkaavainen maistaja löytää mehusta vielä lievän tanniinisen vivahteen, ihan kuin pieni kesäviini olisi pullotettu omenan sisään. Toimii sellaisenaan, mehuksi ja kotitalouden moniin käyttöihin. Kesälajike, joka kypsyy elokuun puolivälissä ja säilyy parisen viikkoa – siis nautittavaksi heti, ei talven varastoon. Meillä menestynyt hyvin suotuisalla paikalla.",
    trait: "Rypäleinen",
    fruit: "omena",
    season: "kesä",
    ripenOrder: 32,
    visible: false,
  },
  {
    name: "Agra",
    origin: "Latvia: Suislepp × Tallinnan päärynäomena",
    image: agra,
    description:
      "Agra on latvialainen kesäomena, jonka sukutaulussa on klassikkojen Suislepin ja Tallinnan päärynäomenan ainekset – ja se kyllä maistuu. Kuori peittyy reilusti kirkkaanpunaiseen, ja malto on kellertävää ja keskinkertaisen mehukasta. Maku on hieno ja tasapainoinen: miellyttävän mausteinen, happaman-imelä – juuri sellainen, joka tekee kesäomenasta enemmän kuin pelkän napostelun. Sopii hyvin sellaisenaan, mehuksi ja kotitalouden moniin käyttöihin. Kypsyy elokuun puolivälin tienoilla ja säilyy noin kuukauden, joten kannattaa nauttia tuoreeltaan.",
    trait: "Mausteinen",
    uses: ["tuoreena", "mehuksi", "kotitalouskäyttöön"],
    fruit: "omena",
    season: "kesä",
    ripenOrder: 30,
    visible: true,
    featured: true,
  },
  {
    name: "Geneva Early",
    origin: "USA: Quinte × Julyred",
    image: genevaEarly,
    description:
      "Geneva Early on amerikkalainen kesäomena, jonka vanhemmissa komeilevat Quinte ja Julyred – sukutaulun perusteella siis selkeästi kesäkauden iloksi jalostettu. Kuori on punainen keltaisella pohjalla, ja malto on pehmeää ja kermanväristä. Maku on aromikas, aavistuksen hapan ja kirpeä – juuri sellainen virkistävä puraisu, jota kuumana elokuun päivänä kaipaa. Hyvä syötäväksi sellaisenaan, mutta sopii myös salaatteihin ja jälkiruokiin tuomaan raikasta särmää. Kypsyy elokuun alussa ja säilyy parisen viikkoa. Meillä kokeiltu lämpimässä paikassa.",
    trait: "Raikas",
    fruit: "omena",
    season: "kesä",
    ripenOrder: 20,
    visible: false,
  },
  {
    name: "Huvitus",
    origin: "Suomalainen, Huvituksen kartanosta vuodelta 1895",
    image: huvitus,
    description:
      "Huvitus on aito suomalainen klassikko, joka on saanut alkunsa Huvituksen kartanosta jo vuonna 1895 – kotimaista omenahistoriaa parhaimmillaan. Pohjaväri on keltainen ja sen päälle maalautuu runsaasti kaunista, helakanpunaista peiteväriä. Malto on kiinteää ja käsittelyä kestävää, joten omena ei murskaannu korissa eikä kassissa. Maku on miellyttävän imelän hapokas – juuri sellainen tasapainoinen kesäomenan maku, johon on helppo ihastua. Kesäomena, joka kypsyy elokuun puolivälistä alkaen mutta jauhottuu pian, joten kannattaa nauttia tuoreeltaan. Erinomainen herkutteluomena ja loistava soseomena.",
    trait: "Herkku",
    fruit: "omena",
    season: "kesä",
    ripenOrder: 34,
    visible: false,
  },
  {
    name: "Ijulskoje Tshernenko",
    origin: "Mitshurinsk, Venäjä: Anis alyj × Papirovka",
    image: ijulskojeTshernenko,
    description:
      "Ijulskoje Tshernenko on venäläistä jalostusta Mitshurinskista, ja sukutaulussa on kaksi vahvaa klassikkoa: Anis alyj ja Papirovka – yhdistelmä, joka lupaa sekä väriä että aitoa kesäomenan makua. Peiteväri on voimakkaan kirsikanpunaista ja peittää suuren osan hedelmän pinnasta. Malto on vihertävänvalkeaa, pehmeää, hienorakeista ja mehukasta – juuri sellaista, johon hampaat uppoavat helposti. Kesälajike, jonka hedelmät kypsyvät elokuun alusta alkaen eriaikaisesti, joten poimintaa voi tehdä useaan otteeseen. Kypsyttyään omenat varisevat herkästi ja säilyvyys on melko heikko, joten parasta on nauttia tuoreeltaan tai jalostaa heti mehuksi ja soseeksi.",
    trait: "Mehukas",
    uses: ["tuoreena", "mehuksi", "soseeksi"],
    fruit: "omena",
    season: "kesä",
    ripenOrder: 22,
    visible: true,
    featured: true,
  },
  {
    name: "Jaspi",
    origin: "Suomalainen, Piikiön jaloste: Lobo × Huvitus",
    image: jaspi,
    description:
      "Jaspi on suomalainen Piikiön jaloste, jonka vanhemmissa yhdistyvät kanadalainen Lobo ja kotimainen klassikko Huvitus – ja se kyllä näkyy ja maistuu. Kuori on vahapeitteinen ja kiiltävä, ja peiteväri on hehkuvan punainen, melkein kuin omena olisi juuri kiillotettu. Malto on valkoista, tiivistä ja rapeaa – rouskuu mukavasti hampaiden alla. Maku on mausteinen ja makea, miedosti hapokas; tasapainoinen ja monipuolinen, joten Jaspi taipuu sekä napostelusta että kotitalouden moniin käyttöihin piirakasta soseeseen. Syyslajike, joka kypsyy syyskuun puolivälin jälkeen ja säilyy ainakin kuukauden, hyvissä oloissa jopa marraskuuhun saakka.",
    trait: "Rapea",
    fruit: "omena",
    season: "syys",
    ripenOrder: 55,
    visible: false,
  },
  {
    name: "Jelena",
    origin: "Valko-Venäjä: Ranneje sladkoje × Discovery",
    image: jelena,
    description:
      "Jelena on valko-venäläistä jalostusta, jonka vanhemmissa kohtaavat varhainen Ranneje sladkoje ja englantilainen Discovery – yhdistelmä, joka tuo sekä väriä että aromia. Peiteväri on kirkkaan ruusunpunaista ja sitä on melko runsaasti. Malto on väriltään hieman vihertävää, melko tiivistä, hienorakeista ja mehukasta. Maku on lievähappoista, miellyttävää ja mausteisen makeaa – juuri sellainen tasapainoinen kesäomena, johon on helppo ihastua. Sopii sellaisenaan ja kotitalouden moniin käyttöihin. Hedelmät kypsyvät elokuun alkupuolella ja säilyvät jopa kuukauden, joskin tuoremyyntiin kelpaa vain pieni osa – paras siis nauttia tuoreeltaan tai jalostaa heti.",
    trait: "Makea",
    fruit: "omena",
    season: "kesä",
    ripenOrder: 24,
    visible: false,
  },
  {
    name: "Julyred",
    origin: "Yhdysvallat: sukupuussa Melba, Early McIntosh, Williams ja Starr",
    image: julyred,
    description:
      "Julyred on yhdysvaltalainen kesäomena, jonka sukupuusta löytyy melkoinen kattaus klassikoita: Melba, Early McIntosh, Williams ja Starr – sukutaulu, joka lupaa sekä väriä että aromia. Hedelmän perusväri on vihertävän keltainen, mutta pintaa peittää reilu punainen peiteväri, joka tekee omenasta jo puussa silmäänpistävän kauniin. Malto on valkoista ja mehukasta. Maku on aromaattinen ja yllättää aavistuksella boysenmarjaa – pieni metsämarjan vivahde keskellä elokuuta. Sopii sellaisenaan ja kotitalouden moniin käyttöihin. Kesäomena, joka kypsyy elokuun lopussa ja säilyy muutaman viikon. Meillä kokeiltu vain erityisen hyvällä paikalla.",
    trait: "Marjainen",
    uses: ["tuoreena", "kotitalouskäyttöön"],
    fruit: "omena",
    season: "kesä",
    ripenOrder: 36,
    visible: true,
    featured: true,
  },
  {
    name: "Junost",
    origin: "Moskova: Koritshnoje polosatoje (Kaneliomena) × Papirovka (Valkea Kuulas)",
    image: junost,
    description:
      "Junost on moskovalaista jalostusta, jonka vanhemmissa kohtaavat kaksi vanhaa klassikkoa: Kaneliomena (Koritshnoje polosatoje) ja Valkea Kuulas (Papirovka) – sukutaulu lupaa raikkautta ja perinteistä kesäomenan makua. Erinomainen vaihtoehto silloin, kun haluaa lievähappoisen kesäomenan, joka taipuu sekä napostelusta että kotitalouden moniin käyttöihin piirakasta soseeseen ja mehuun. Kesälajike, jonka omenat kypsyvät tavallisesti elokuun loppupuolella ja säilyvät korkeintaan kuukauden – siis nautittavaksi tuoreeltaan, ei talven varastoon.",
    trait: "Lievähappoinen",
    fruit: "omena",
    season: "kesä",
    ripenOrder: 38,
    visible: false,
  },
  {
    name: "Krasnoje",
    origin: "Mitshurinsk: Melba × Vesna",
    image: krasnojeRanneje,
    description:
      "Krasnoje rannejen pinnalla on tummanpunaista peiteväriä läikkinä ja leveinä viiruina lähes koko hedelmässä. Malto on kermanvaaleaa, tiivistä, mehukasta ja aromaattista. Maku on miellyttävän happaman-imelä ja maukas – sopii sellaisenaan, soseeksi, mehuksi ja leivontaan. Kesälajike: hedelmät kypsyvät elokuun alkupuolella ja säilyvät noin kolme viikkoa.",
    trait: "Aromikas",
    uses: ["tuoreena", "soseeksi", "mehuksi", "leivontaan"],
    fruit: "omena",
    season: "kesä",
    ripenOrder: 22,
    visible: true,
    featured: true,
  },
  {
    name: "Mantet",
    origin: "Kanada: Moskovan päärynäomenan vapaapölytteisestä siemenestä",
    image: mantet,
    description:
      "Mantetin pinnalla on kirkkaanpunaista peiteväriä viiruina ja läikkinä suurimmalla osalla hedelmää. Malto on valkeaa, hienorakeista ja mehukasta – yksi kaikkein hienoimmanmakuisista kesäomenista. Sopii erinomaisesti sellaisenaan nautittavaksi sekä kotitalouden mehuihin, soseisiin ja leivontaan. Kesälajike: hedelmät kypsyvät epätasaisesti syyskuuhun mennessä ja säilyvät varastossa hyvänmakuisina korkeintaan kuukauden.",
    trait: "Hieno",
    fruit: "omena",
    season: "kesä",
    ripenOrder: 40,
    visible: false,
  },
  {
    name: "Medunitsa",
    origin: "Mitshurinsk: Wealthy × Koritshnoje polosatoje (Kaneliomena)",
    image: medunitsa,
    description:
      "Medunitsa on venäläistä jalostusta Mitshurinskista, ja sukutaulussa kohtaavat amerikkalainen Wealthy ja vanha Kaneliomena (Koritshnoje polosatoje). Peitevärinä on ruskehtavanpunaisia juovia auringon puoleisella poskella. Malto on tiivistä, hienorakeista, mehukasta ja väriltään kermanvalkeaa. Maku on miellyttävä ja hunajanmausteisen makea – nimi Medunitsa viittaakin hunajaan. Sopii sellaisenaan ja kotitalouden moniin käyttöihin. Kesäomena: hedelmät kypsyvät syyskuun alussa ja säilyvät noin kuukauden.",
    trait: "Hunajainen",
    fruit: "omena",
    season: "kesä",
    ripenOrder: 42,
    visible: false,
  },
  {
    name: "Orlinka",
    origin: "Orjol, Venäjä: Stark's Earliest × Pervyj saljut",
    image: orlinka,
    description:
      "Orlinka on venäläistä jalostusta Orjolista, ja sukutaulussa kohtaavat amerikkalainen Stark's Earliest ja venäläinen Pervyj saljut. Peiteväri on kirkkaanpunaista, juovina ja läikkinä. Malto on kermanvaaleaa, tiivistä, rapeaa, mehuisaa ja suurirakeista. Omenat ovat hyvänmakuisia, happaman-imeliä ja miellyttävän mausteisia – sopivat sellaisenaan ja kotitalouden moniin käyttöihin. Kesälajike, joka kypsyy elokuun puolivälin jälkeen. Säilyy jonkun viikon, mutta menettää nopeasti arvoaan, joten paras nauttia tuoreeltaan.",
    trait: "Mausteinen",
    uses: ["tuoreena", "kotitalouskäyttöön"],
    fruit: "omena",
    season: "kesä",
    ripenOrder: 35,
    visible: true,
    featured: true,
  },
  {
    name: "Orlovim",
    origin:
      "Orjol, Venäjä: Antonovka obyknovennaja × SR 0523 (Melba Red × (Volf River × Malus atrosanguinea 804))",
    image: orlovim,
    description:
      "Orlovim on venäläistä jalostusta Orjolista, ja sukutaulussa kohtaavat klassinen Antonovka obyknovennaja sekä monipolvinen SR 0523, jonka takana on Melba Red ja Volf Riverin sekä Malus atrosanguinea 804:n risteytys – sukutaulu, joka tuo sekä taudinkestävyyttä että makua. Peiteväri on kirkkaanpunaista, juovina ja läikkinä, ja peittää suuren osan hedelmästä. Malto on rakenteeltaan tiivistä, karhearakeista ja erittäin mehukasta. Maku on miellyttävä, happaman-imelä ja melko aromaattinen – sopii sellaisenaan ja kotitalouden moniin käyttöihin. Syyslajike, joka kypsyy syyskuun alkupuolella. Säilyy jonkun viikon, mutta menettää nopeasti arvoaan, joten paras nauttia tuoreeltaan.",
    trait: "Mehukas",
    fruit: "omena",
    season: "syys",
    ripenOrder: 48,
    visible: false,
  },
  {
    name: "Orlovskoje polosatoje",
    origin: "Orjol, Venäjä: McIntosh × Bessemjanka mitshurinskaja",
    image: orlovskojePolosatoje,
    description:
      "Orlovskoje polosatoje on venäläistä jalostusta Orjolista, ja sukutaulussa kohtaavat kanadalainen klassikko McIntosh sekä Bessemjanka mitshurinskaja. Hedelmät ovat laadukkaita ja kauniin juovikkaan punaisia. Malto on valkeaa, hienorakeista, keskikovaa ja erittäin mehukasta. Maku on aromaattinen ja erittäin hyvä – sopii sellaisenaan ja kotitalouden moniin käyttöihin piirakasta soseeseen ja mehuun. Syyslajike: hedelmät kypsyvät syyskuun keskivaiheilla ja säilyvät korkeintaan joulukuulle. Meillä kokeiltu vain erityisen hyvällä paikalla.",
    trait: "Aromikas",
    fruit: "omena",
    season: "syys",
    ripenOrder: 52,
    visible: false,
  },
  {
    name: "Pirja",
    origin: "Piikiön jaloste, Suomi: Huvitus × Melba",
    image: pirja,
    description:
      "Pirja on suomalainen Piikiön jaloste, jonka vanhempina ovat Huvitus ja Melba. Keltainen pohjaväri voi peittyä lähes kokonaan punaviiruisen peitevärin alle. Rapeassa kellertävässä mallossa näkyy joskus punaisia viiruja. Maku on miellyttävä ja miedosti aromaattinen – sopii hyvin tuorekäyttöön. Kesäomena, joka kypsyy heinä-elokuun vaihteessa ja säilyy noin kaksi viikkoa.",
    trait: "Raikas",
    uses: ["tuoreena"],
    fruit: "omena",
    season: "kesä",
    ripenOrder: 18,
    visible: true,
    featured: true,
  },
  {
    name: "Redfree",
    origin: "Yhdysvallat, PRI-jalostusohjelma (ruvenkestävä lajike)",
    image: redFree,
    description:
      "Redfree on yhdysvaltalaisen PRI-jalostusohjelman tulosta – ohjelman tavoitteena oli kehittää ruvenkestäviä omenalajikkeita. Hedelmä on näyttävän punainen ja suurikokoinen. Kun omenia tulee runsaasti, kääpiörunkoisen puun hedelmät jäävät helposti pienikokoisiksi. Malto on kermanvaaleaa ja suhteellisen tiivistä. Mehevät hedelmät ovat maultaan erinomaisia, happaman-imeliä – happo-sokerisuhde on hyvä ja aromikkuutta on runsaasti. Syyslajike: kypsyy syyskuun puolivälissä ja säilyy noin 2 kuukautta. Meillä kokeiltu vain erityisen hyvällä paikalla.",
    trait: "Aromikas",
    uses: ["tuoreena", "säilytykseen"],
    fruit: "omena",
    season: "syys",
    ripenOrder: 54,
    visible: true,
    featured: true,
  },
  {
    name: "Roberts",
    origin: "Latvia: BM41497 (Pernilla) × Eksotika (Iedzenu × Slava pobediteljam)",
    image: roberts,
    description:
      "Roberts on latvialainen lajike, jonka vanhempina ovat BM41497 (Pernilla) ja Eksotika (Iedzenu × Slava pobediteljam). Hedelmät ovat melko kookkaita ja erittäin kauniin punaisia – näyttävä näky jo kaukaa. Malto on kellertävää, ja heti kuoren alta punertavaa; joskus rakenne voi olla varsin kova. Maku on aromaattinen ja erittäin maukas, ja omena sopii sellaisenaan sekä kotitalouden moniin käyttöihin. Syyslajike: hedelmät kypsyvät syyskuun alkupuolella ja säilyvät noin kuukauden.",
    trait: "Maukas",
    fruit: "omena",
    season: "syys",
    ripenOrder: 50,
    visible: false,
  },
  {
    name: "Rosmarin",
    origin: "Novi, Venäjä – venäläisen Rosmarin-omenan risteytymä",
    image: rosmarin,
    description:
      "Rosmarin on venäläisen Rosmarin-omenan risteytymä Novin jalostuksesta. Kypsänä hedelmä on kellertävä ja saa auringon puolelle punaisia laikkuja ja pisteitä. Malto on mehevää, valkoista ja hienorakeista. Maku on miedon imelän-mausteinen – sopii sellaisenaan syötäväksi sekä mehuihin ja jälkiruokiin. Kesäomena, joka kypsyy syyskuun alusta alkaen ja säilyy pari viikkoa.",
    trait: "Mausteinen",
    uses: ["tuoreena", "mehuksi", "jälkiruokiin"],
    fruit: "omena",
    season: "kesä",
    ripenOrder: 26,
    visible: true,
    featured: true,
  },
  {
    name: "Slava",
    origin: "Ukraina: Papirovka × McIntosh (tunnetaan myös nimellä Slava peremozhtsam)",
    image: slavaPobediteljam,
    description:
      "Slava pobediteljam on ukrainalainen lajike, jonka vanhempina ovat Papirovka ja McIntosh – tunnetaan myös nimellä Slava peremozhtsam. Peiteväri on tummanpunaista ja peittää suurimman osan hedelmän pinnasta. Malto on väriltään lähes valkoista, joskus punajuovaista. Omenat ovat maultaan happaman-imeliä, aromaattisia ja erittäin miellyttäviä – sopivat sellaisenaan ja kotitalouden moniin käyttöihin. Syyslajike: omenat kypsyvät syyskuun puolivälissä ja säilyvät marraskuulle. Tämän puun erottaa jo kaukaa punaisesta runsaasta sadosta.",
    trait: "Aromikas",
    uses: ["tuoreena", "kotitalouskäyttöön", "säilytykseen"],
    fruit: "omena",
    season: "syys",
    ripenOrder: 54,
    visible: true,
    featured: true,
  },
  {
    name: "Solntsedar",
    origin: "Jekaterinburg, Venäjä: Anis alyj -lajikkeen vapaapölytteisestä siemenestä",
    image: solntsedar,
    description:
      "Solntsedar on venäläistä jalostusta Jekaterinburgista, ja sen taustalla on Anis alyj -lajikkeen vapaapölytteinen siemen. Peiteväri on tumman-ruusunpunaista ja peittää suuren osan hedelmän pinnasta. Malto on lumivalkeaa, usein punajuovaista ja suurirakeista. Maku on viinihappoisen makea – sopii sellaisenaan ja kotitalouden moniin käyttöihin. Kesälajike: hedelmät kypsyvät elokuun puolivälin tienoilla ja säilyvät noin 10 päivää. Kypsyttyään omenat voivat tippua yhtenä tuulisena päivänä, joten poiminta kannattaa ajoittaa tarkkaan.",
    trait: "Viinihappoinen",
    fruit: "omena",
    season: "kesä",
    ripenOrder: 33,
    visible: false,
  },
  {
    name: "Solnusko",
    origin: "Orjol, Venäjä: Malus floribunda 821 × Golden Delicious (vapaapölytteinen siemen)",
    image: solnyshko,
    description:
      "Solnusko on orjolilaista jalostusta, taustalla Malus floribunda 821 ja Golden Delicious -vapaapölytteinen siemen. Peiteväri on vadelmanpunaista, läikkinä ja viiruina, peittäen suuren osan hedelmän pinnasta. Malto on valkeaa tai kermanvaaleaa, tiivistä, hienorakeista ja erittäin mehukasta. Maultaan hedelmät ovat happaman-imeliä ja erittäin maukkaita – sopivat hyvin kotitalouden moniin käyttöihin. Syyslajike: hedelmät kypsyvät syyskuun lopussa ja säilyvät noin kaksi kuukautta.",
    trait: "Maukas",
    uses: ["tuoreena", "kotitalouskäyttöön", "säilytykseen"],
    fruit: "omena",
    season: "syys",
    ripenOrder: 60,
    visible: true,
    featured: true,
  },
  {
    name: "Särsö",
    origin:
      "Emopuu löydetty Tukholman saaristosta vuonna 1916, tuotu Suomeen Ruotsista 1950-luvulla",
    description:
      "Särsö on ruotsalaista alkuperää oleva syysomena. Hedelmä on suuri tai keskikokoinen, ja sen pinnassa on heikkoa oranssinpunaista punerrusta sekä selvästi erottuvia juovia. Malto on aluksi kiinteää, mutta muuttuu nopeasti pehmeämmäksi ja mehukkaaksi. Maku on mieto: ei kovin makea, mutta ei myöskään erityisen hapokas. Kypsyy syys-lokakuun vaihteessa ja säilyy useita viikkoja.",
    trait: "Mieto",
    uses: ["tuoreena", "kotitalouskäyttöön"],
    fruit: "omena",
    season: "syys",
    ripenOrder: 58,
    visible: true,
    featured: true,
  },
  {
    name: "Uslada",
    origin: "Moskova: Narodnoje × Severjanka",
    image: uslada,
    description:
      "Uslada on moskovalainen syyslajike, jonka hedelmät ovat kauniita ja suurelta osin punertavia auringon puolelta. Peiteväri näkyy juovina ja laikkuina. Malto on vaaleaa, hienorakeista ja mehukasta. Maku on happaman-imelä ja erittäin miellyttävä; mehussa voi olla lievää tanniinisuutta. Hyvä syyslajike alkaa kypsyä syyskuun puolivälissä ja säilyy noin kaksi kuukautta.",
    trait: "Miellyttävä",
    uses: ["tuoreena", "mehuksi", "kotitalouskäyttöön", "säilytykseen"],
    fruit: "omena",
    season: "syys",
    ripenOrder: 56,
    visible: true,
    featured: true,
  },
  {
    name: "Juuso",
    origin: "Suomi: Lobo × Antonovka",
    description:
      "Juuso muistuttaa Loboa, joka on toinen sen vanhemmista; toinen vanhempi on Antonovka. Hedelmä on punainen ja hieman litteä. Lajike kestää hyvin muumiotautia ja melko hyvin rupea. Malto on valkoista, rapeaa ja mehukasta. Maku on hienon hapokas ja aromikas, parhaimmillaan jopa päärynämäinen. Talvilajike poimitaan syyskuun lopussa ja kypsytetään noin kaksi viikkoa. Kypsänä hedelmiä voi nauttia sellaisenaan, ja ne sopivat myös ruokiin.",
    trait: "Päärynäinen",
    uses: ["tuoreena", "ruokiin", "säilytykseen"],
    fruit: "omena",
    season: "talvi",
    ripenOrder: 72,
    visible: false,
  },
  {
    name: "Konsta",
    origin: "Suomi: Lobo × Antonovka",
    description:
      "Konsta on kotimainen Lobon ja Antonovkan risteymä, jota suositellaan Atlaksen tilalle. Se on hyvin omenaruven kestävä ja melko kestävä muumiotautia vastaan, joten se sopii hyvin myös vähäisen torjunnan kasvatukseen. Pallomaisissa hedelmissä on yhtenäinen punoitus. Malto on valkoista ja karkeahkoa. Maku on hapahko ja miedosti aromaattinen. Hedelmät poimitaan syyskuun lopussa, kypsyvät parissa viikossa ja säilyvät jopa kuusi viikkoa, hyvissä oloissa joulun tienoille.",
    trait: "Hapahko",
    uses: ["tuoreena", "kotitalouskäyttöön", "säilytykseen"],
    fruit: "omena",
    season: "syys",
    ripenOrder: 68,
    visible: false,
  },
  {
    name: "Novinka",
    origin: "Moskova: Antonovka × Borovinka",
    description:
      "Novinka on Moskovassa jalostettu syysomena. Hedelmät ovat kookkaita, ja niiden pinnassa on yhtenäistä punerrusta sekä himmeitä juovia. Malto on mehukasta, aromaattista, happaman-imelää ja hyvänmakuista. Lajike kypsyy syyskuun lopussa ja säilyy vaihtelevasti jopa noin kaksi kuukautta.",
    trait: "Mehukas",
    uses: ["tuoreena", "kotitalouskäyttöön", "säilytykseen"],
    fruit: "omena",
    season: "syys",
    ripenOrder: 70,
    visible: false,
  },
  {
    name: "Sariola",
    origin: "Eräjärvi, Nisulan talo: siemenkylvö 1900-luvun alkupuolella",
    description:
      "Sariola on Eräjärveltä Nisulan talosta peräisin oleva suomalainen lajike, joka on syntynyt siemenkylvöstä 1900-luvun alkupuolella. Hedelmä on keskikokoa pienempi. Pohjaväri on keltainen, ja pinnassa on yhtenäistä punerrusta sekä selvästi erottuvia juovia. Malto on kovaa ja tiivistä. Maku on makean viinihappoinen ja hienoarominen. Syysomena kypsyy lokakuun alussa ja voi säilyä jopa yli joulun.",
    trait: "Viinihappoinen",
    uses: ["tuoreena", "kotitalouskäyttöön", "säilytykseen"],
    fruit: "omena",
    season: "syys",
    ripenOrder: 74,
    visible: false,
  },
  {
    name: "Studentsheskoje",
    origin: "Moskova: Wealthy × Bessemjanka mitshurinskaja",
    image: studentsheskoje,
    description:
      "Studentsheskoje on Moskovasta peräisin oleva talviomena. Hedelmissä on vadelmanpunaista peiteväriä viiruina ja läikkinä. Malto on vaaleanvihertävää, hienorakeista ja mehukasta. Maku on happaman-imelä ja erittäin miellyttävä; mehussa voi olla lievää tanniinisuutta. Sopii monipuoliseen kotitalouskäyttöön. Talviomena kypsyy lokakuun aikana ja säilyy hyvissä olosuhteissa jopa kevääseen. Omenat pysyvät hyvin puussa talven tuloa odotellessa.",
    trait: "Säilyvä",
    uses: ["tuoreena", "mehuksi", "kotitalouskäyttöön", "säilytykseen"],
    fruit: "omena",
    season: "talvi",
    ripenOrder: 88,
    visible: false,
  },
  {
    name: "Tshistotel",
    origin:
      "Orjol, Venäjä: Antonovka obyknovennaja × SR 0523 (Red Melba × (Volf River × Malus atrosanguinea 804))",
    image: tshistotel,
    description:
      "Tshistotel on orjolilaista jalostusta, ja sukutaulussa kohtaavat klassinen Antonovka obyknovennaja sekä monipolvinen SR 0523, jonka takana on Red Melba ja Volf Riverin sekä Malus atrosanguinea 804:n risteytys. Peiteväriä on auringon puolella ruskeanpunaisina läikkinä ja tummanpunaisina viiruina. Malto on väriltään vihertävää, suhteellisen tiivistä, hienorakeista ja mehuisaa. Maultaan hedelmät ovat hyvän happaman-imeliä, mutta jäävät vaatimattomiksi epäsuotuisana kesänä. Sopii sellaisenaan ja kotitalouden moniin käyttöihin. Talviomena: kypsyy lokakuun lopussa ja säilyy pitkään. Kääpiörunkoisen oksat näännyttävät omenien suuresta määrästä ilman raakileharvennusta.",
    trait: "Mehuisa",
    uses: ["tuoreena", "kotitalouskäyttöön", "säilytykseen"],
    fruit: "omena",
    season: "talvi",
    ripenOrder: 84,
    visible: false,
  },
  {
    name: "Viurilan ananas",
    origin: "Wiurilan kartano, Halikko, Salo",
    description:
      "Viurilan ananas on kotoisin Salon Halikossa sijaitsevasta Wiurilan kartanosta. Hedelmät ovat isohkoja ja hieman pehmeämaltoisia. Peiteväri muodostuu punerruksesta, juovista ja laikuista. Omena on melko mehukas, makea, mausteinen eikä kovin hapokas. Sopii hyvin mehuksi. Kesäomena tuottaa satoa elokuun aikana ja säilyy vain lyhyen ajan.",
    trait: "Makea",
    uses: ["tuoreena", "mehuksi"],
    fruit: "omena",
    season: "kesä",
    ripenOrder: 28,
    visible: false,
  },
];

export const visibleVarieties = varieties.filter((v) => v.visible !== false);

export const featuredVarieties = visibleVarieties.filter((v) => v.featured);

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
