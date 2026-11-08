export type PriceRow = { type: string; net: string; gross: string };

export const priceNotice = {
  valid: "2023. május 1-től visszavonásig",
  split: "15 000 / 25 000 Ft",
  reassembly: "10 000 Ft",
};

export const priceGroups: {
  id: string;
  title: string;
  contact: string;
  phone: string;
  tel: string;
  rows: PriceRow[];
}[] = [
  {
    id: "i",
    title: "I. termékcsoport",
    contact: "Papp Edit",
    phone: "+36 20 545 4800",
    tel: "+36205454800",
    rows: [
      { type: "Bosch VE, Denso VE, Lucas DPA, DPC", net: "59 055 Ft", gross: "75 000 Ft" },
      { type: "Bosch VE turbó, EDC, Lucas DPS, DPCN", net: "62 992 Ft", gross: "80 000 Ft" },
      { type: "Bosch VE, VE turbó haszongépjármű", net: "82 677 Ft", gross: "105 000 Ft" },
      { type: "Denso VR, VE turbó haszongépjármű", net: "82 677 Ft", gross: "105 000 Ft" },
      { type: "Lucas DP200, Zexel EDC", net: "86 614 Ft", gross: "110 000 Ft" },
      { type: "Lucas DP210", net: "86 614 Ft", gross: "110 000 Ft" },
      { type: "Lucas DP310", net: "86 614 Ft", gross: "110 000 Ft" },
      { type: "Zexel EDC-ROM modullal (Covec-F), magyar Denso", net: "90 551 Ft", gross: "115 000 Ft" },
      { type: "Zexel VRZ-ROM modullal", net: "96 062 Ft", gross: "122 000 Ft" },
      { type: "Bosch-A", net: "94 488 Ft", gross: "120 000 Ft" },
      { type: "Bosch-MW 6 hengeres", net: "110 236 Ft", gross: "140 000 Ft" },
      { type: "Bosch-P mechanikus soros", net: "118 110 Ft", gross: "150 000 Ft" },
      { type: "Bosch-P-EDC soros", net: "118 110 Ft", gross: "150 000 Ft" },
      { type: "Bosch-H-EDC soros", net: "118 110 Ft", gross: "150 000 Ft" },
      { type: "Stanadyne DB4", net: "94 488 Ft", gross: "120 000 Ft" },
      { type: "Stanadyne Target", net: "94 488 Ft", gross: "120 000 Ft" },
      { type: "Stanadyne DE10", net: "102 362 Ft", gross: "130 000 Ft" },
      { type: "Szabályzó javítás", net: "31 496 – 47 244 Ft", gross: "40 000 – 60 000 Ft" },
      { type: "2 rugós porlasztó ellenőrzés / munkadíj", net: "9 448 Ft", gross: "12 000 Ft" },
      { type: "Porlasztó munkadíj", net: "7 874 Ft", gross: "10 000 Ft" },
      { type: "Jazda, Motorpal 6 hengeres munkadíj", net: "78 740 – 90 551 Ft", gross: "100 000 – 115 000 Ft" },
      { type: "Jazda, Motorpal 4 hengeres munkadíj", net: "70 866 – 90 551 Ft", gross: "90 000 – 115 000 Ft" },
      { type: "MTZ 50 munkadíj", net: "62 992 Ft", gross: "80 000 Ft" },
      { type: "MTZ 80 munkadíj", net: "62 992 Ft", gross: "80 000 Ft" },
    ],
  },
  {
    id: "ii",
    title: "II. termékcsoport",
    contact: "Boros Csilla",
    phone: "+36 20 926 5890",
    tel: "+36209265890",
    rows: [
      { type: "CR injektor vizsgálat, személyautó", net: "7 874 Ft", gross: "10 000 Ft" },
      { type: "CR injektor vizsgálat, haszongépjármű", net: "11 811 Ft", gross: "15 000 Ft" },
      { type: "Bosch injektor javítás, személyautó", net: "40 944 – 59 055 Ft", gross: "52 000 – 75 000 Ft" },
      { type: "Bosch piezo injektor vizsgálat / kódolás", net: "7 874 – 10 236 Ft", gross: "10 000 – 13 000 Ft" },
      { type: "Bosch injektor javítás, haszongépjármű", net: "27 559 Ft", gross: "35 000 Ft" },
      { type: "Delphi injektor kapcsoló csere", net: "33 070 Ft-tól", gross: "42 000 Ft-tól" },
      { type: "Delphi injektor kapcsoló + porlasztócsúcs csere", net: "51 181 Ft-tól", gross: "65 000 Ft-tól" },
      { type: "Delphi injektor tisztítás, személyautó / haszongépjármű", net: "15 748 – 31 496 Ft", gross: "20 000 – 40 000 Ft" },
      { type: "FSA injektor vizsgálat", net: "3 937 Ft", gross: "5 000 Ft" },
      { type: "CR szivattyú javítás CP1, Delphi 2–4 görgős", net: "47 277 Ft", gross: "60 000 Ft" },
      { type: "CR szivattyú javítás CP2, HP0, HP6", net: "86 614 Ft", gross: "110 000 Ft" },
      { type: "CR szivattyú javítás CP3, Delphi DFP 3–7", net: "66 929 Ft", gross: "85 000 Ft" },
      { type: "CR szivattyú javítás CP4", net: "51 181 – 86 614 Ft", gross: "65 000 – 110 000 Ft" },
      { type: "PD elem tisztítás, beállítás", net: "31 496 Ft", gross: "40 000 Ft" },
      { type: "PD elem munkadíj, stec pumpa munkadíj", net: "35 433 Ft", gross: "45 000 Ft" },
      { type: "Rail cső ellenőrzés, személyautó", net: "23 622 Ft", gross: "30 000 Ft" },
      { type: "Rail cső ellenőrzés, haszongépjármű", net: "39 370 Ft", gross: "50 000 Ft" },
      { type: "Bosch VP adagoló", net: "62 992 – 90 551 Ft", gross: "80 000 – 115 000 Ft" },
    ],
  },
];

export type Country = "HU" | "SK" | "RO";

export type Reference = {
  name: string;
  city: string;
  since: string;
  country: Country;
};

const rawReferences: [string, string, string, Country][] = [
  ["Axiál Kft.", "Debrecen", "2007", "HU"],
  ["Autóméry Kft.", "Nyíregyháza", "2008", "HU"],
  ["Béke Agrárszövetkezet", "Hajdúböszörmény", "2007 óta", "HU"],
  ["Balmaz-Agro Kft.", "Balmazújváros", "2008", "HU"],
  ["Benyó Autószerviz Kft.", "Nyíregyháza", "2008", "HU"],
  ["Borsod Volán Zrt.", "Miskolc", "2009", "HU"],
  ["Colas Út Zrt.", "Budapest", "2007", "HU"],
  ["D-Profil Kft.", "Debrecen", "2008", "HU"],
  ["DAC-Car Kft.", "Debrecen", "2008", "HU"],
  ["Debreceni Autójavító és Kereskedelmi Szövetkezet", "Debrecen", "2008", "HU"],
  ["Franco Kft.", "Debrecen", "2008", "HU"],
  ["Formula-GP Kft.", "Hajdúböszörmény", "2007 óta", "HU"],
  ["Frühwald Kft.", "Újfehértó", "2009", "HU"],
  ["Huntraco Zrt.", "Budaörs", "2007", "HU"],
  ["Hajdú Volán Zrt.", "Debrecen", "2007", "HU"],
  ["Hajdú Service Kft.", "Debrecen", "2007", "HU"],
  ["Hortobágyi Nonprofit Kft.", "Hortobágy", "2008", "HU"],
  ["Hovány Dél-Alföld Kft.", "Debrecen", "2008", "HU"],
  ["IKR Zrt.", "Bábolna", "2008", "HU"],
  ["Ju-Ko Kft.", "Nyírpazony", "2008", "HU"],
  ["Jászapáti 2000 Mezőgazdasági Zrt.", "Jászapáti", "2008", "HU"],
  ["KITE Zrt.", "Nádudvar", "2008", "HU"],
  ["Kösely Mezőgazdasági Zrt.", "Hajdúszoboszló", "2008", "HU"],
  ["Kerekes Kft.", "Ebes", "2008", "HU"],
  ["Két-Kata Kft.", "Dány", "2008", "HU"],
  ["Manax Kft.", "Baja", "2009", "HU"],
  ["Nyírtrans Kft.", "Nyíracsád", "2008", "HU"],
  ["OMP Autóház Kft.", "Debrecen", "2007", "HU"],
  ["Postaautó Duna Zrt.", "Debrecen", "2008", "HU"],
  ["Pappas Auto Magyarország Kft.", "Budapest", "2010", "HU"],
  ["Szabolcs Volán Zrt.", "Nyíregyháza", "2009", "HU"],
  ["Szabi-Trans Kft.", "Nagykálló", "2008", "HU"],
  ["Pal Diesel Kft.", "Gödöllő", "2009", "HU"],
  ["Újhelyi Autó Kft.", "Debrecen", "2008", "HU"],
  ["Valent Auto Kft.", "Nyíregyháza", "2007", "HU"],
  ["Böszi Autóklinika Kft.", "Tiszavasvári", "2011", "HU"],
  ["Ti-Car Kft.", "Debrecen", "2011", "HU"],
  ["Szentmihályi Gép Kft.", "Tiszavasvári", "2010", "HU"],
  ["Forma Autójavító Kft.", "Miskolc", "2013", "HU"],
  ["Kvartis Kft.", "Miskolc", "2013", "HU"],
  ["Schmidtgép 2002 Kft.", "Borzavár", "2011", "HU"],
  ["Országos Mentőszolgálat", "Budapest", "2011", "HU"],
  ["Nagy és Társa Bt.", "Debrecen", "2009", "HU"],
  ["VRG Cool Kft.", "Balmazújváros", "2010", "HU"],
  ["Surel s.r.o.", "Kosice, SK", "2008", "SK"],
  ["Ladislav Kecső", "Rimavská Sobota, SK", "2008", "SK"],
  ["Agro Universal S.R.L.", "Carei, RO", "2005", "RO"],
  ["Universal Tractor S.R.L.", "Valea Lui Mihai, RO", "2005", "RO"],
  ["Munax S.R.L.", "Timișoara, RO", "2012", "RO"],
  ["Sadelli Prodcom S.R.L.", "Timișoara, RO", "2014", "RO"],
  ["Lorger S.R.L.", "Tarcea, RO", "2014", "RO"],
];

export const references: Reference[] = rawReferences.map(([name, city, since, country]) => ({
  name,
  city,
  since,
  country,
}));

export const tractor = {
  name: "Retro Kóboj",
  owner: "Móricz Kft.",
  rows: [
    ["Típus", "MTZ 50"],
    ["Évjárat", "1969"],
    ["Hengerűrtartalom", "4750 cm³"],
    ["Motorfordulat", "2980 1/min"],
    ["Tömeg", "29 500 kg"],
    ["Teljesítmény, TLT", "149,95 LE"],
    ["Teljesítmény, motor", "168 LE"],
    ["Adagoló", "Motorpal"],
    ["Hátsó gumi", "600/70 30 (JD 8300 első gumi)"],
    ["Első gumi", "Citroën 2CV, 15×125"],
    ["Építés munkaideje", "6 hónap"],
  ],
};
