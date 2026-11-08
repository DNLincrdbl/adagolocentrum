export type BenchLink = { href: string; label: string };

export type Bench = {
  name: string;
  image: string;
  groups: { label: string; types: string[] }[];
  details: string[];
  links: BenchLink[];
};

export const dieselIntro = [
  "A Móricz Kft. hajdúböszörményi adagolócentruma folyamatos fejlesztések mellett igyekszik megfelelni a hazai és nemzetközi szabványok előírásainak, a vevők és partnerek igényeinek. A dieseltechnológia folyamatos változását nyomon követjük, munkatársaink szakmai ismereteit tanfolyamokon és továbbképzéseken fejlesztjük tovább. Stratégiai célkitűzésünk, hogy hosszútávon megfeleljünk a nemzetközi követelményeknek és ügyfeleink elvárásainak.",
  "Műhelyünkben a dieseladagoló-javításhoz szükséges legkorszerűbb gépeket alkalmazzuk, Bosch- és Hartridge-adagolópadokat."
];

export const benches: Bench[] = [
  {
    name: "BOSCH EPS 815 próbapad",
    image: "/from-site/img/bosch_eps815cr.jpg",
    groups: [
      {
        label: "Típusok",
        types: [
          "CP-1",
          "CP-2",
          "CP-3",
          "CR injektor",
          "PIEZZO injektor"
        ]
      }
    ],
    details: [
      "A befecskendezési nyomások, amelyekkel a modern Common-Rail dízelmotorok működnek, az elmúlt években folyamatosan nőttek. A 2000 bar manapság már mindennapos, a tendencia pedig további növekedést mutat. Az újonnan üzembe állított Bosch EPS 815 dízel vizsgálópadunk, amely kifejezetten a Common-Rail szivattyúk és injektorok számára van felszerelve, 2200 bar nyomásig teszi lehetővé a rendszer vizsgálatát. Az új fejlesztésű Rail egészen 2500 bar-ig használható, ezzel a vizsgálópad a dízeltechnika jövőben várható újdonságaihoz is megfelelő alapot képvisel.",
      "A Bosch új típusú próbapadja PC-felügyelettel irányítható, és 15 KW teljesítményű közvetlen villanymotoros meghajtással rendelkezik. Önmagában a próbapad mérőrendszerekkel nem rendelkezik. A kívánt műszaki fejlettségű próbapad modulelven építhető fel. Kétfajta mérőrendszerrel is felszerelhető: a hagyományos mérőüvegekkel, valamint a folyamatos mennyiségmérő KMA-rendszerrel."
    ],
    links: []
  },
  {
    name: "BOSCH EPS 815 próbapad",
    image: "/from-site/img/bosch_eps815vp.jpg",
    groups: [
      {
        label: "Típusok",
        types: [
          "VP30",
          "VP44"
        ]
      }
    ],
    details: [
      "A Bosch új típusú próbapadja PC-felügyelettel irányítható, és 15 KW teljesítményű közvetlen villanymotoros meghajtással rendelkezik. Önmagában a próbapad mérőrendszerekkel nem rendelkezik. A kívánt műszaki fejlettségű próbapad modulelven építhető fel. Kétfajta mérőrendszerrel is felszerelhető: a hagyományos mérőüvegekkel, valamint a folyamatos mennyiségmérő KMA-rendszerrel."
    ],
    links: []
  },
  {
    name: "BOSCH EPS 815 próbapad",
    image: "/from-site/img/bosch_eps815cp.jpg",
    groups: [
      {
        label: "Típusok",
        types: [
          "CP-1",
          "CP-2",
          "CP-3",
          "CR injektor",
          "EUI",
          "PLD"
        ]
      }
    ],
    details: [
      "A Bosch új típusú próbapadja PC-felügyelettel irányítható, és 15 KW teljesítményű közvetlen villanymotoros meghajtással rendelkezik. Önmagában a próbapad mérőrendszerekkel nem rendelkezik. A kívánt műszaki fejlettségű próbapad modulelven építhető fel. Kétfajta mérőrendszerrel is felszerelhető: a hagyományos mérőüvegekkel, valamint a folyamatos mennyiségmérő KMA-rendszerrel."
    ],
    links: []
  },
  {
    name: "BOSCH EPS 708 próbapad",
    image: "/from-site/img/bosch_eps708_3.jpg",
    groups: [
      {
        label: "Típusok",
        types: [
          "CP-1",
          "CP-3",
          "CP-4",
          "CR INJEKTOR",
          "DW10 TD",
          "DW10 B",
          "DV 4",
          "K9K euró 4/5",
          "Lynx",
          "Lion",
          "V6base",
          "Lion V6 upgrade / V8",
          "VW",
          "Puma conus/oldham / keyway",
          "DV6 C Psa",
          "K9K gen6"
        ]
      }
    ],
    details: [
      "A befecskendezési nyomások, amelyekkel a modern Common-Rail dízelmotorok működnek, az elmúlt években folyamatosan nőttek. A 2000 bar manapság már mindennapos, a tendencia pedig további növekedést mutat. A Bosch EPS 708 dízel vizsgálópadja, melyet a cég kifejezetten a Common-Rail szivattyúk és injektorok számára készített, ennek megfelelően 2200 bar nyomásig teszi lehetővé a rendszer vizsgálatát. Az új fejlesztésű Rail egészen 2500 bar-ig használható, ezzel a vizsgálópad a dízeltechnika jövőben várható újdonságaihoz is megfelelő alapot képvisel.",
      "A készülék számos részlete gondoskodik a mindennapi biztonságról és karbantartásmentes működésről."
    ],
    links: []
  },
  {
    name: "BOSCH EPS 205 próbapad",
    image: "/from-site/img/EPS205.jpg",
    groups: [
      {
        label: "Típusok",
        types: [
          "CRI/CRIN",
          "CRI és más gyártók",
          "piezzo injektorok",
          "kétrugós porlasztók"
        ]
      }
    ],
    details: [
      "Az EPS dízel common-rail tesztberendezésben minden megvan, amire egy műhelyben csak szükség lehet, hogy hatékony és pontos dízel befecskendező vizsgálattal szolgálhassunk az ügyfeleknek, anélkül, hogy dízel specialisták lennénk. Jól használható kezelőfelület, gyors működés, és két vizsgálati mód eredményeként a szerelők egyszerűen azonosíthatják a hibás injektort és gyorsan orvosolhatják a problémákat.",
      "Az egyszerűen generálható vizsgálati jelentéssel precíz dízel ismeretekről és magas szintű ügyfélközpontúságról tehetünk tanúbizonyságot. Hatékony módja a dízel munkatevékenységek szervezésének."
    ],
    links: []
  },
  {
    name: "HARTRIDGE AVM 10-8 próbapad (2 db)",
    image: "/from-site/img/hartridge_avm108.jpg",
    groups: [
      {
        label: "STANADYNE",
        types: [
          "DB2",
          "DB4",
          "DE10",
          "Target"
        ]
      },
      {
        label: "ZEXEL",
        types: [
          "VE",
          "EDC",
          "EDC - ROM-modullal (Covec-F)",
          "VRZ - ROM-modullal"
        ]
      },
      {
        label: "DELPHI",
        types: [
          "DPA",
          "DPC",
          "DPS",
          "DPCN",
          "DP200",
          "DP210",
          "DP310"
        ]
      }
    ],
    details: [
      "Az angol gyártmányú HARTRIDGE AVM típusú próbapadja 15 KW meghajtó teljesítménnyel és 8 folyamatos mennyiségmérő hellyel rendelkezik. A villanymotor közvetlenül a tengelyéről hajtja meg a csatlakozó kuplungon keresztül a felszerelt adagolót. A próbapad vezérlését az LCD képernyő alatt található billentyűzettel lehet működtetni."
    ],
    links: []
  },
  {
    name: "HARTRIDGE CRi-PC próbapad",
    image: "/from-site/img/hartridge_cripc.jpg",
    groups: [
      {
        label: "Típusok",
        types: [
          "Delphi injektorok ellenőrzése, javítása, kódolása gyári technológiával"
        ]
      }
    ],
    details: [
      "Az Injektor Vizsgáló Berendezés (CRi-PC) nyomástárolós injektorok vizsgálatára lett kialakítva. A berendezés alkalmazható a jelenleg a Bosch, Delphi, Denso és Siemens által forgalmazott injektoroknál. A berendezés az egyes injektortípusok vizsgálatához különféle alkatrészekkel bővíthető.",
      "A berendezés az injektorok felszerelésénél fél-automata kapcsolatokat biztosít. Egy 10 mm vastagságú, átlátszó „PETg anyagú” biztonsági ajtó védi az üzemeltetőt a berendezésben keletkező magas nyomású folyadék esetleges kiáramlásától. Az injektorokat kézi vagy automata módban lehet ellenőrizni az elő-konfigurált program alapján, amit a Hartridge Magmah szoftverében fejlesztettek ki. Az injektor szabályozás AE32 alapú hardware-el történik."
    ],
    links: []
  },
  {
    name: "HARTRIDGE CRp-PC próbapad",
    image: "/from-site/img/hartridge_crppc.jpg",
    groups: [
      {
        label: "Típusok",
        types: [
          "Delphi magasnyomású szivattyú",
          "Siemens magasnyomású szivattyú",
          "Denso magasnyomású szivattyú"
        ]
      }
    ],
    details: [
      "Az automatikus nyomásszabályozóval szerelt, akár 6500 percenkénti fordulatszám tesztsebességre képes és a jövőbeli 3000 bar próbanyomásra előkészített CRP-PC lehetővé teszi minden gyártmányú common rail szivattyú gyors és egyszerű vizsgálatát. Ezzel növeli a más tesztplatformokra rendelkezésre álló időt, egyben további üzleti lehetőségeket biztosít és munkafolyamatokat is javítja.",
      "Az önálló platform a Bosch, Delphi, Denso és Siemens Common Rail szivattyúk tesztelését biztosítja, ugyanolyan egyszerűen és rugalmasan, mint termékcsalád másik eleme, a CRI-PC. A Hartridge saját fejlesztésű szoftvere, a Magmah vezérlésének köszönhetően a CRP-PC teszttervek készítését, valamint ezek ismételt szabványosított tesztelés céljából történő mentését is lehetővé teszi."
    ],
    links: []
  },
  {
    name: "HARTRIDGE AVM2-PC próbapad",
    image: "/from-site/img/hartridge_avm2pc.jpg",
    groups: [
      {
        label: "STANADYNE",
        types: [
          "DB2",
          "DB4",
          "DE10",
          "Target"
        ]
      },
      {
        label: "ZEXEL",
        types: [
          "VE",
          "EDC",
          "EDC - ROM-modullal (Covec-F)",
          "VRZ - ROM-modullal"
        ]
      },
      {
        label: "DELPHI",
        types: [
          "DPA",
          "DPC",
          "DPS",
          "DPCN",
          "DP200",
          "DP210",
          "DP310",
          "EUI",
          "EUp",
          "HDEUP",
          "EUIE3",
          "SMART injektor"
        ]
      }
    ],
    details: [
      "Az AVM2-PC próbapad egy fejlett személyi számítógép alapú dízel üzemanyag-szivattyú próbapad, amely Windows operációs rendszerrel van felszerelve. A titka a könnyű kezelhetőségben rejlik.",
      "HK 1500-as kiegészítő gyári technológiája a delphi haszongépjármű befecskendező vizsgálatára."
    ],
    links: []
  },
  {
    name: "BOSCH EFEP 515 próbapad (2 db)",
    image: "/from-site/img/bosch_efep515.jpg",
    groups: [
      {
        label: "BOSCH",
        types: [
          "VA",
          "VE",
          "VE TURBO",
          "VE EDC",
          "A",
          "MW",
          "P-mechanikus soros",
          "P-EDC-soros",
          "H-EDC-soros"
        ]
      }
    ],
    details: [],
    links: []
  },
  {
    name: "BOSCH EPS 604 próbapad",
    image: "/from-site/img/bosch_eps604.jpg",
    groups: [
      {
        label: "Típusok",
        types: [
          "kisebb forgóelosztós adagolók"
        ]
      }
    ],
    details: [
      "Ez a próbapad kisebb forgóelosztós adagolók, valamint szabályzóik és vezérlőműveik tesztelésére és beállítására szolgál. Az elektromos motor, a hidrosztatikus erőátvitel, a kétfokozatú kapcsoló-berendezés, és az adagolópumpa mind egy vázra vannak szerelve. Az átfolyás-mérő eszköz forgatható és függőlegesen állítható. A meghajtómotor sebessége egy négy-számjegyű kijelzőn folyamatosan látható."
    ],
    links: []
  },
  {
    name: "Carbon Zapp próbapad",
    image: "/from-site/img/CarbonZapp.jpg",
    groups: [
      {
        label: "Típusok",
        types: [
          "Siemens/ VDO drs gyári vizsgálati technológia Euro3 és Euro4 befecskendezőkre és Euro5 kódolására",
          "gyári technológiának megfelelő VDO befecskedezők CGL vizsgálata",
          "magasnyomású benzin befecskedezők vizsgálata (mágnesszelep vezérelt és piezzo befecskendező)",
          "denso JD befecskedezők kódolása",
          "denso személygépjármű befecskedezők kódolása"
        ]
      }
    ],
    details: [
      "Injektorok tesztelése, kódolása. Különböző típusú magasnyomású szivattyúk tesztelése. 2800 bar vizsgálati nyomás előállítására képes, ez által a legújabb magasnyomású befecskendezők és szivattyúk tesztelésére alkalmas. 597 féle magasnyomású benzin befecskendező vizsgálatára alkalmas. 4849 féle diesel befecskendező vizsgálati értéke elérhető az adatbázisban."
    ],
    links: []
  },
  {
    name: "BOSCH DCI 700 próbapad",
    image: "/from-site/img/DCI700.jpg",
    groups: [
      {
        label: "Típusok",
        types: [
          "összes bosch gyári technológiával rendelkező injektor vizsgálata",
          "CRI 1",
          "CRI 2.1",
          "CRI 2.2",
          "CRI 2.5",
          "CRI 3.0 piezzo",
          "CRI 3.2 piezzo",
          "CRI 3.3 piezzo",
          "CRIN 4.2",
          "CRIN 2",
          "CRIN 3",
          "CRIN 1",
          "CRI 1"
        ]
      }
    ],
    details: [
      "A Bosch DCI 700 dízel próbapad jövőbiztos konstrukciójában az új mérési rendszert a legújabb befecskendező technológiák teszik alkalmassá az összes személyautó és haszonjármű rendszer tesztelésére, beleértve a tűzárás ellenőrzésű (NCC) és a szelepzárás ellenőrzésű (VCC) injektorokat is.",
      "Időmegtakarítás a gyors beállítás és a 15 perces tesztelési idő révén. Magasabb minőség, megbízhatóság és áttekinthetőség a Bosch injektorok esetében, köszönhetően a gyors és pontos tesztelésnek – beleértve az IMA/IQA kódolást is. Nagy hatékonyság a szabadalmaztatott elfordítható elosztócső koncepciónak köszönhetően – nincs szükség sérülékeny nagynyomásútömlőkre, alacsonyabb a karbantartás költsége, egyszerűbb a felszerelés. Rendszeres online frissítések révén mindig aktuális. Ergonomikus kialakítás a ferde alsó résszel, amely lehetővé teszi a közelebbi állóhelyet és ezáltal kényelmesebben dolgozhat a próbapadon. Képes a legkorszerűbb VCC (Valve Closing Control) és NCC (Needle Closing Control) technológiával ellátott common-rail injektorok tesztelésére az EURO 5 és EURO 6 szabványok esetében. Moduláris átépítő készletek a haszongépjármű- és off-highway common rail injektorok vizsgálatára - a Bosch és más gyártók injektoraihoz. További tartozékok használatának kiküszöbölése a visszavezető ellennyomás automatikus beállításának köszönhetően."
    ],
    links: [
      {
        href: "https://www.boschaftermarket.com/hu/hu/berendezesek/tesztberendezesek/probapadok-es-celszerszamok/dci-700/",
        label: "Egyéb információ"
      }
    ]
  },
  {
    name: "CRI PRO próbapad",
    image: "/from-site/img/CRIPRO.jpg",
    groups: [
      {
        label: "Típusok",
        types: [
          "delphi gyártmányú befecskedező",
          "minden gyártmányú befecskendezőre alkalmas teszttervre alkalmas",
          "C2i",
          "C3i",
          "C4i",
          "F2P",
          "F2R",
          "F2E"
        ]
      }
    ],
    details: [
      "Vizsgálat akár 2700 bar nyomásig. Zárás és nyiáts idő késedelem méréstechnológia. Fejlett befecskedző diagnosztika. Minden gyártmányú tesztterv és injektor kódolási adatbázis. Továbbfejlesztett Euro VI válaszidő mérés és hivatalos teszteléshez. Fejlett hőmérséklet-szabályozás. Csökkentett ciklusidő a C2i, C3i és C4i és a HIT befecskedzők kódolására. F2 család delphi befecskezők gyári technológiás javítására alkalmas."
    ],
    links: [
      {
        href: "https://www.adagolocentrum.hu/download/CRIPRO%20jav%C3%ADthat%C3%B3.pdf",
        label: "CRIPRO javítható"
      },
      {
        href: "https://www.adagolocentrum.hu/download/CRIPRO%20jav%C3%ADthat%C3%B3%202.pdf",
        label: "CRIPRO javítható 2"
      },
      {
        href: "https://www.adagolocentrum.hu/download/CRIPRO%20jav%C3%ADthat%C3%B3%203.pdf",
        label: "CRIPRO javítható 3"
      },
      {
        href: "/from-site/pdf/DT_CRi-Pro Brochure_ENG_digi.pdf",
        label: "DT_CRi-Pro Brochure_ENG_digi"
      },
      {
        href: "https://www.adagolocentrum.hu/download/CRIPRO%20Jav%C3%ADthat%C3%B3%20injektorok%20list%C3%A1ja.pdf",
        label: "CRIPRO Javítható injektorok listája"
      }
    ]
  },
  {
    name: "BOSCH EPS 625 próbapad",
    image: "/from-site/img/EPS625.jpg",
    groups: [
      {
        label: "Típusok",
        types: [
          "MTZ",
          "Motorpál",
          "A",
          "MW",
          "P-mechanikus soros",
          "P-EDC soros",
          "H-EDC soros",
          "PF pumpa"
        ]
      }
    ],
    details: [
      "A 18,5 kW-os elektromos meghajtással meghajtott EPS 625 mérőhengerrel felszerelve a legfeljebb 12 hengeres adagolók teszteléséhez. A próbapad mérőhenger technológiával, elektronkusan vezérelt löketszámlálóval és automatikus tesztolaj-fűtéssel és hűtéssel rendelkezik. A forgási sebessége, a löketszám, a tesztolaj hőmérséklete, valamint a teszteléshez szükséges tényleges értékeket CD testdata programból automatikusan kijelzi."
    ],
    links: []
  },
  {
    name: "Megatester V4",
    image: "/from-site/img/Megatester.jpg",
    groups: [],
    details: [
      "Piezzo elektromos működtetésű alkatrészek teljes körű elektromos vizsgálatára alkalmas készülék. Amely vizságlati jegyzőkönyvet készít a mérési eredményekről.",
      "Vizsgálati lehetőségek: szigetelési ellenállás, aktuátor ellenállása, kapacitás mérés, piezzo alkatrész löketének mérése és jegyzőkönyvezése, aktuátor légrés meghatározása és hosszú távú terheléses ellenállás mérés."
    ],
    links: []
  }
];
