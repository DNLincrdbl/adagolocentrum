export const company = {
  name: "Móricz Ipari Kereskedelmi és Szolgáltató Kft.",
  short: "Móricz Kft.",
  brand: "Móricz Bosch Diesel Center",
  owner: "Móricz Zsolt",
  ownerRole: "szervizvezető-tulajdonos",
  address: "4220 Hajdúböszörmény, Polgári u. 107.",
  email: "info@adagolocentrum.hu",
  founded: "2001. december 15.",
  court: "Cg. 09-09-008497",
  tax: "12765957-2-09",
  bank: "116000006-00000000-66139399",
  bankName: "Polgári Takarékszövetkezet",
  gps: { lat: 47.684343, lng: 21.495953 },
  phones: [
    {
      role: "Szervizvezető-tulajdonos",
      name: "Móricz Zsolt",
      phone: "+36 20 926 5890",
      tel: "+36209265890",
    },
    {
      role: "Ügyvezető, II. termékcsoport",
      name: "",
      phone: "+36 20 956 1955",
      tel: "+36209561955",
    },
    {
      role: "Vevőszolgálat, I. termékcsoport",
      name: "Papp Edit",
      phone: "+36 20 545 4800",
      tel: "+36205454800",
    },
  ],
};

export const mainNav = [
  { href: "/", label: "Kezdőlap" },
  { href: "/szolgaltatasok", label: "Szolgáltatások" },
  { href: "/dieseltechnologia", label: "Dieseltechnológia" },
  { href: "/referenciak", label: "Referenciák" },
  { href: "/arlista", label: "Árlista" },
  { href: "/galeria", label: "Galéria" },
] as const;

export const footerGroups = [
  {
    title: "A cégről",
    links: [
      { href: "/cegismerteto", label: "Cégismertető" },
      { href: "/minosegpolitika", label: "Minőségpolitika" },
      { href: "/munkatarsaink", label: "Munkatársaink" },
      { href: "/ginop", label: "GINOP Plusz" },
    ],
  },
  {
    title: "További oldalak",
    links: [
      { href: "/hirek", label: "Hírarchívum" },
      { href: "/tractor-pulling", label: "Tractor Pulling" },
      { href: "/kerdoiv", label: "Vevőelégedettségi kérdőív" },
      { href: "/oldalterkep", label: "Oldaltérkép" },
    ],
  },
  {
    title: "Jogi információ",
    links: [
      { href: "/impresszum", label: "Impresszum" },
      { href: "/adatvedelem", label: "Adatvédelem" },
    ],
  },
] as const;

export const gallery = [
  {
    src: "/media/eps-815.jpg",
    title: "Bosch próbapad",
    caption:
      "Common-Rail szivattyúk és injektorok vizsgálata a műhely nagy nyomású tesztpadjain.",
  },
  {
    src: "/media/macro.jpg",
    title: "Precíziós mérés",
    caption:
      "A befecskendezés mennyiségét és viselkedését próbapadon ellenőrizzük, mielőtt az adagoló visszakerül a járműbe.",
  },
  {
    src: "/media/closeup.jpg",
    title: "Ipari részlet",
    caption:
      "Bosch-, Hartridge- és Carbon Zapp-berendezések a diagnosztika és a beszabályozás mögött.",
  },
  {
    src: "/media/workshop.jpg",
    title: "A műhely",
    caption:
      "Hajdúböszörményi adagolócentrum: teljes szét- és összeszerelés, tisztítás, tömítéscsere és próbapadi ellenőrzés.",
  },
] as const;

export const staff = [
  { name: "Móricz Zsolt", role: "Szervizvezető-tulajdonos", photo: "/from-site/img/0401.jpg" },
  { name: "Papp Edit", role: "Vevőszolgálati ügyintéző", photo: "/from-site/img/0402.jpg" },
  { name: "Boros Csilla", role: "Vevőszolgálati ügyintéző", photo: "/from-site/img/0403.jpg" },
  { name: "Boros Gábor", role: "Vevőszolgálati ügyintéző", photo: "/from-site/img/0404.jpg" },
  { name: "Beke Antal", role: "Dieselszerelő", photo: "/from-site/img/0411.jpg" },
  { name: "Szombati László", role: "Dieselszerelő", photo: "/from-site/img/0412.jpg" },
  { name: "Kathi Sándor", role: "Dieselszerelő", photo: "/from-site/img/0414.jpg" },
  { name: "Erdei Zoltán", role: "Dieselszerelő", photo: "/from-site/img/0423.jpg" },
  { name: "Szepesi Szabolcs", role: "Dieselszerelő", photo: "/from-site/img/0422.jpg" },
  { name: "Varga Zoltán", role: "Dieselszerelő", photo: "/from-site/img/0415.jpg" },
  { name: "Sipos Ákos", role: "Dieselszerelő", photo: "/from-site/img/0413.jpg" },
  { name: "Fekete Patrik", role: "Dieselszerelő", photo: "/from-site/img/0421.jpg" },
] as const;

export const milestones = [
  {
    year: "1990",
    title: "Az első műhely",
    text: "Mezőgazdasági erő- és munkagépek javításával indult a vállalkozás, és ebben az évben épült meg az első műhely.",
  },
  {
    year: "1996",
    title: "Új szerelőcsarnok",
    text: "Egy nagyobb és korszerűbb szerelőcsarnok átadása követte az első műhelyt.",
  },
  {
    year: "1998",
    title: "Valtra szerviz",
    text: "A műhely a Valtra traktorok észak-kelet magyarországi szervizévé vált, és a profil személyautó-javítással is bővült.",
  },
  {
    year: "2001",
    title: "Megalakul a Móricz Kft.",
    text: "A társaság 2001. december 15-én alakult. Cégbírósági szám: Cg. 09-09-008497.",
  },
  {
    year: "2004",
    title: "Stanadyne képviselet",
    text: "A cég a Stanadyne adagolórendszerek magyarországi képviseletét látja el, és kizárólag dieseladagolók javítására vált.",
  },
  {
    year: "2006",
    title: "Bosch EPS 815",
    text: "Új Bosch EPS 815 próbapad került a műhelybe, amellyel a korszerű VP-pumpák javítása is elvégezhető.",
  },
  {
    year: "2007",
    title: "Common Rail és PD",
    text: "Common Rail injektorok, PD unit injektorok és unit pumpák vizsgálata és javítása is a kínálat része.",
  },
  {
    year: "2010",
    title: "Bővítés",
    text: "Közel 200 négyzetméteres bővítés: új adagolószerviz, iroda, ügyfélváró és egy kis előadó.",
  },
  {
    year: "2015",
    title: "CP4 javítás",
    text: "Ősz óta elérhető a CP4 Common-Rail adagolók teljes körű javítása.",
  },
];

export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  image: string;
  lead: string;
  paragraphs: string[];
};

export const news: NewsArticle[] = [
  {
    slug: "cp4-common-rail",
    title: "CP4 Common-Rail adagolók javítása",
    date: "2015. október 6.",
    image: "/from-site/feltoltes/151006_cp4.jpg",
    lead: "A Móricz Bosch Diesel Center műhelyében 2015 ősze óta elérhető a CP4 Common-Rail adagolók teljes körű javítása.",
    paragraphs: [
      "A Móricz Bosch Diesel Center műhelyében 2015 ősze óta elérhető a CP4 Common-Rail adagolók teljes körű javítása.",
      "Műhelyünkben az adagolójavítás és felújítás teljes spektrumát végezzük: teljes szét- és összeszerelés, tisztítás, tömítések cseréje, próbapadi ellenőrzés, beszabályozás.",
    ],
  },
  {
    slug: "uj-muhelyszarny",
    title: "Leraktuk az új műhelyszárnyunk alapjait",
    date: "2012. január 4.",
    image: "/from-site/feltoltes/120104_alap.jpg",
    lead: "Nemrégiben elkészültek az új épületrész alapozási munkálatai.",
    paragraphs: [
      "Nemrégiben elkészültek az új épületrész alapozási munkálatai. Tavasszal folytatódik az építkezés.",
      "Az új szárny felépültével megduplázódik a műhely alapterülete, és így egy épületbe kerül az összes próbapad.",
    ],
  },
  {
    slug: "megbizhato-diesel-center",
    title: "Megbízható, kedvező költségű és hatékony",
    date: "2011. október 4.",
    image: "/from-site/feltoltes/111004_diesel_center.jpg",
    lead: "Felkészült és tapasztalt technikusaink így fogják az Ön diesel-rendszerét is diagnosztizálni és megjavítani.",
    paragraphs: [
      "Felkészült és tapasztalt technikusaink így fogják az Ön diesel-rendszerét is diagnosztizálni és megjavítani. Nem számít, hogy milyen típus, beleértve a legmodernebbeket is.",
      "Mint hivatalos Bosch Diesel Center, a Móricz Kft. a különböző diesel-rendszerek hozzáértő szolgáltatója. Professzionális megoldásokat kínálunk a legmagasabb színvonalú diesel-rendszerek javításához és karbantartásához.",
    ],
  },
  {
    slug: "diesel-egyesulet-2011",
    title: "Diesel Egyesületi találkozó",
    date: "2011. július 7.",
    image: "/from-site/feltoltes/110707diesel.jpg",
    lead: "Hajdúböszörményben a Móricz Kft. csapata fogadta a Diesel Egyesület tagjait.",
    paragraphs: [
      "Az idei esztendő közepén Hajdúböszörményben a Móricz Kft. lelkes csapata fogadta a tagokat az aktuális Diesel Egyesületi találkozón.",
      "2011. július 2-án, reggel 8 óra magasságában a hőmérő 12 és 13 °C között állt. Köszönjük házigazdánknak, Móricz Zsolt úrnak és munkatársainak a szívélyes fogadtatást ezen a kissé hűvös napon.",
      "Az egyesületi nap elején Horváth Tibor úr a hengerfejek tervezésének és gyártásának részleteibe avatott be. Juhos Gábor, a Diesel Hungária Kft. képviselője a Delphi EUI fejlesztéseiről tartott előadást: az elektronikus adagoló-porlasztó elsősorban nagy haszongépjárművekben, illetve egyes Land Rover dieselmotorokban használt technika.",
      "Bemutatásra került a visszafolyás-mérő csatlakozó készlet, a Common Rail rendszerű diesel gépkocsikon alkalmazott elektromos csatlakozó javítókészlet, valamint a műanyag védősapka készletek.",
      "A Robert Bosch magyarországi képviseletétől Majernyik Zsolt a közös nyomócsöves rendszerek befecskendező-vizsgálatáról és a Bosch injektorok 3. lépcsős javításáról beszélt. A műhelyben a technológia néhány részlete gyakorlatban is látható volt, Móricz Zsolt pedig működés közben mutatta be a másik csarnok vadonatúj próbapadját.",
      "Publikálta: Juhos Gábor, Diesel Hungária Kft.",
    ],
  },
  {
    slug: "bosch-eps-708",
    title: "Beüzemeltük új próbapadunkat",
    date: "2011. július 2.",
    image: "/from-site/feltoltes/110702_eps708.jpg",
    lead: "Egy új Bosch EPS 708 próbapadot állítottunk üzembe július elején.",
    paragraphs: [
      "A Móricz Kft. adagolócentruma bővítette a gépparkját. Egy új Bosch EPS 708 próbapadot állítottunk üzembe július elején.",
      "Az üzemanyag-befecskendezés nyomása, amelyen a modern Common-Rail dieselmotorok működnek, folyamatosan emelkedett. Napjainkban már a 2000 bar is elfogadott, és ez tovább emelkedhet.",
      "Az új Bosch EPS 708 diesel-próbapad adagolók és injektorok esetén 2200 bar nyomásig teszi lehetővé a tesztelést. Az új fejlesztéseknek köszönhetően a próbapad 2500 bar nyomásig terhelhető.",
    ],
  },
  {
    slug: "uj-honlap-2010",
    title: "Átadtuk új honlapunkat",
    date: "2010. július 8.",
    image: "/from-site/feltoltes/100708honlap.jpg",
    lead: "Új honlapunkon a megnövekedett kapacitást mutattuk be megrendelőinknek.",
    paragraphs: [
      "Vállalkozásunk az elmúlt években folyamatosan bővítette szolgáltatásait. Új honlapunkon megnövekedett kapacitásunkat kívántuk megrendelőinknek bemutatni.",
      "A weboldal elkészítésekor egy vidám megjelenést választottunk, ez jellemző a szervizünkben dolgozó csapatra is. Havonta frissített hasznos információkkal szerettünk volna hozzájárulni ahhoz, hogy ügyfeleink tájékozottak legyenek az új kínálatról és az akciókról.",
    ],
  },
  {
    slug: "uj-muhely-2010",
    title: "Elkészült az új műhelyünk",
    date: "2010. június 7.",
    image: "/from-site/feltoltes/100607muhely.jpg",
    lead: "Székhelyünkön közel 200 négyzetméteres bővítést valósítottunk meg.",
    paragraphs: [
      "Székhelyünkön közel 200 négyzetméteres bővítést valósítottunk meg. Korábbi szerelőcsarnokunkban egy, a kor követelményeinek megfelelő, új adagolószervizt alakítottunk ki.",
      "Az épület magas felépítménye és a galériás megoldás lehetőséget teremtett egy új iroda és ügyfélváró, valamint egy tanfolyamok és továbbképzések tartására szolgáló kis előadó kiépítésére is.",
    ],
  },
];

export const ginopPrograms = [
  {
    title: "Raktári árukezelő, -értékesítő munkatárs",
    amount: "9 572 836 Ft",
    end: "Tervezett befejezés: 2026. január 27.",
    goal: "A képzésben résztvevők megismerik a raktári árukezelés komplex feladatait, majd a betanulási időszak után a raktárvezető irányítása mellett önállóan, magas szakmai színvonalon látják el a raktárgazdálkodást.",
  },
  {
    title: "Gépjárműszerviz szoftverek gyakorlati alkalmazása",
    amount: "9 317 500 Ft",
    end: "Tervezett befejezés: 2024. július 9.",
    goal: "A résztvevők a számítógépes alapok és az irodatechnika mellett az autódiagnosztikai szoftvereket és a gépjármű-adatbázisokat alkalmazzák a mindennapi munkában.",
  },
  {
    title: "Irodai IKT eszközök és szoftverek integrált használata",
    amount: "8 731 370 Ft",
    end: "Tervezett kezdés: 2022. június 7.",
    goal: "Szövegszerkesztés, tudatos adattárolás, internetes keresés, levelezés, okostelefon és irodatechnika a mindennapi munkavégzésben.",
  },
  {
    title: "Betanított autóalkatrész-értékesítő, eladó",
    amount: "A GINOP Plusz-3.2.1-21 program keretében",
    end: "Tervezett befejezés: 2022. augusztus 12.",
    goal: "Az autóalkatrész-értékesítés alapjai, majd a boltvezető irányítása mellett önálló feladatellátás a vásárlók elégedettsége érdekében.",
  },
];

export const surveyQuestions = [
  {
    group: "Termék és szolgáltatás",
    items: [
      "Ön mennyire elégedett szolgáltatásunk minőségével?",
      "Ön mennyire elégedett szolgáltatásunk korszerűségével?",
    ],
  },
  {
    group: "Árszínvonal",
    items: ["Ön mennyire tartja megfelelőnek az általunk meghatározott szolgáltatási árainkat?"],
  },
  {
    group: "A szolgáltatás módja",
    items: [
      "Ön mennyire elégedett munkatársaink szakértelmével?",
      "Ön mennyire elégedett szolgáltatásunk gyorsaságával?",
      "Ön mennyire elégedett munkatársaink udvariasságával?",
    ],
  },
  {
    group: "Megbízhatóság",
    items: [
      "Ön mennyire elégedett társaságunk és munkatársaink megbízhatóságával?",
      "Ön mennyire elégedett a megbeszélt határidők betartásával?",
    ],
  },
  {
    group: "Szakmai tudás és kapcsolattartás",
    items: [
      "Ön mennyire elégedett munkatársaink szakmai tudásával?",
      "Ön mennyire elégedett munkatársaink segítőkészségével és rendelkezésre állásával?",
      "Ön mennyire elégedett társaságunk elérhetőségével?",
    ],
  },
];

export const ratingLabels = ["elégtelen", "még elfogadható", "megfelelő", "kiváló"] as const;

export function getNews(slug: string) {
  return news.find((item) => item.slug === slug);
}
