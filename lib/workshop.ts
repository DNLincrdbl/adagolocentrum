import { company } from "@/lib/site";

export type WorkshopService = {
  name: string;
  image: string;
  fit: "cover" | "contain" | "snug";
  details: string[];
  phone?: { phone: string; tel: string };
};

const dpfPhone = company.phones.find((phone) => phone.tel === "+36209265890");

export const workshopLead =
  "Teljes körű mechanikus és elektromos karbantartás, valamint időszakos szervizelés minden autótípusra.";

export const workshopServices: WorkshopService[] = [
  {
    name: "Gépjármű szervíz",
    image: "/media/szerviz/gepjarmu.jpg",
    fit: "cover",
    details: [
      "Teljes körű mechanikus és elektromos karbantartás, valamint időszakos szervizelés minden autótípusra. Szakértő csapatunk precíz munkával és garanciával biztosítja, hogy autód mindig biztonságos és megbízható legyen az utakon.",
    ],
  },
  {
    name: "Intelligens diagnosztika",
    image: "/media/szerviz/diagnosztika.jpg",
    fit: "cover",
    details: [
      "A legkorszerűbb diagnosztikai műszerekkel és gyári szintű szoftverekkel gyorsan és pontosan feltárjuk gépjárműved rejtett hibáit. Nemcsak a hibakódokat olvassuk ki, hanem valós idejű adatelemzéssel megelőzzük a nagyobb meghibásodásokat, így időt és pénzt takarítasz meg.",
    ],
  },
  {
    name: "Olaj csere",
    image: "/media/szerviz/olajcsere.jpg",
    fit: "cover",
    details: [
      "A motor élettartamának alapja a friss, minőségi olaj. Prémium márkájú motorolajokkal és szűrőkkel végezzük el a gyors olajcserét, hogy motorod hosszú távon is simán és megbízhatóan működjön.",
    ],
  },
  {
    name: "Fék szervíz",
    image: "/media/szerviz/fek.jpg",
    fit: "cover",
    details: [
      "A fékrendszer a legfontosabb biztonsági elem az autódban. Vállaljuk fékbetétek, féktárcsák, fékfolyadék szakszerű cseréjét és teljes körű átvizsgálását, hogy te és családod mindig biztonságosan közlekedhessetek.",
    ],
  },
  {
    name: "Automataváltó olaj csere",
    image: "/media/szerviz/valtocsere.jpg",
    fit: "snug",
    details: [
      "Az automata váltók speciális odafigyelést igényelnek. Teljes körű, gépi átmosásos technológiával végezzük az olajcserét, ami eltávolítja a lerakódásokat, megszünteti a rángatást és meghosszabbítja a váltó élettartamát.",
    ],
  },
  {
    name: "DPF-részecskeszűrő tisztítás",
    image: "/media/szerviz/dpf.png",
    fit: "contain",
    details: [
      "A részecskeszűrő a gépjárműben található, amely a környezetre káros részecskéket, ill. a kormot szűri a dízelmotorból kiáramló gázokból. Ez a szűrő sokszor olyan mértékben eltömődhet, hogy a gépjármű motorjának a teljesítményét is hátrányosan befolyásolhatja.",
      "Miért fizetne százezreket olyanért, amit profi színvonalon, töredék áron is megoldhat? Hozza be hozzánk autóját, vagy küldje el futárszolgálattal a részecskeszűrőjét. Akinek dízel autója van, pontosan tudja, hogy mennyibe kerül egy részecskeszűrő cseréje. Nyilván Ön előtt is ismert az a tény, hogy egy új részecskeszűrő több százezer vagy akár milliós költséget is jelenthet autó típustól függően. Nem csoda hát, hogy ekkora kiadást mindenki szeretne elkerülni vagy addig halogatni, ameddig csak lehet.",
      "Mégis mit tehet akkor, ha már baj van a részecskeszűrővel? A legtöbb autótulajdonos sajnos nincs tisztában azzal, hogy járművük eldugult részecskeszűrője csere nélkül is újból tökéletes állapotba állítható vissza. Nem szükséges az első adandó alkalommal lecseréltetni, amikor a fedélzeti számítógép hibát jelez, hiszen megfelelő tisztítással ismét visszaállítható a gyári állapotba – és mindezt töredék áron a cseréhez képest. Számokra átfordítva részecskeszűrő tisztítással Ön több százezer forintot spórolhat meg.",
    ],
    phone: dpfPhone ? { phone: dpfPhone.phone, tel: dpfPhone.tel } : undefined,
  },
  {
    name: "CHIP tuning",
    image: "/media/szerviz/chip.jpg",
    fit: "cover",
    details: [
      "A CHIP tuning (vagy motoroptimalizálás) egy olyan eljárás, amellyel a jármű motorvezérlő egységének (ECU) gyári szoftverét módosítják a teljesítmény, a nyomaték és sok esetben a tüzelőanyag-hatékonyság növelése érdekében.",
      "Hogyan működik? A modern autók motorját egy számítógép (ECU) vezérli, amely olyan paramétereket szabályoz, mint a turbónyomás, az befecskendezési idő vagy a gyújtási időzítés. A tuning során ezeket a gyári biztonsági tartalékokon belül finomhangolják.",
      "Előnyök: Dízelmotoroknál jellemzően 20-30%-os teljesítmény- és nyomatéknövekedés érhető el, ami rugalmasabb gyorsulást eredményez. Emellett megfelelő vezetési stílus mellett akár kis mértékű üzemanyag-megtakarítás is elérhető utazósebességnél.",
      "Kockázatok: Szakszerűtlen, túlzó beállítások esetén túlzott igénybevétel érheti a motort, a kuplungot vagy a turbófeltöltőt, ami azok idő előtti kopásához vezethet.",
      "Típusai: Történhet a gyári szoftver átírásával (OBD-n keresztül vagy az ECU- közvetlen módosításával), illetve külső tuningdoboz (tuningbox) használatával is.",
    ],
  },
];
