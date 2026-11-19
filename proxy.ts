import { NextResponse, type NextRequest } from "next/server";

const OLD_PAGES: Record<string, string | null> = {
  adagolo_kezdolap: "/",
  adagolo_cegismerteto: "/cegismerteto",
  adagolo_szolgaltatasaink: "/szolgaltatasok",
  adagolo_dieseltechnologia: "/dieseltechnologia",
  adagolo_referenciaink: "/referenciak",
  adagolo_arlista: "/arlista",
  adagolo_munkatarsaink: "/munkatarsaink",
  adagolo_galeria: "/galeria",
  adagolo_hirek: "/hirek",
  adagolo_hirarchivum: "/hirek",
  adagolo_kapcsolat: "/kapcsolat",
  adagolo_minosegpolitika: "/minosegpolitika",
  adagolo_adatvedelem: "/adatvedelem",
  adagolo_impresszum: "/impresszum",
  adagolo_oldalterkep: "/oldalterkep",
  adagolo_ginop: "/ginop",
  adagolo_palyazat: "/technologiai-fejlesztes",
  adagolo_vevo: "/kerdoiv",
  adagolo_admin: null,

  injection_pump_home: "/",
  injection_pump_introduction: "/cegismerteto",
  injection_pump_our_services: "/szolgaltatasok",
  injection_pump_diesel_technology: "/dieseltechnologia",
  injection_pump_our_references: "/referenciak",
  injection_pump_tariff: "/arlista",
  injection_pump_our_colleagues: "/munkatarsaink",
  injection_pump_gallery: "/galeria",
  injection_pump_news: "/hirek",
  injection_pump_news_archives: "/hirek",
  injection_pump_contact_us: "/kapcsolat",
  injection_pump_quality_policy: "/minosegpolitika",
  injection_pump_privacy_policy: "/adatvedelem",
  injection_pump_imprint: "/impresszum",
  injection_pump_site_map: "/oldalterkep",

  einspritzpumpe_home: "/",
  einspritzpumpe_vorstellung: "/cegismerteto",
  einspritzpumpe_dienstleistungen: "/szolgaltatasok",
  einspritzpumpe_diesel_technologie: "/dieseltechnologia",
  einspritzpumpe_referenzen: "/referenciak",
  einspritzpumpe_preisliste: "/arlista",
  einspritzpumpe_kollegen: "/munkatarsaink",
  einspritzpumpe_galerie: "/galeria",
  einspritzpumpe_nachrichten: "/hirek",
  einspritzpumpe_archiv: "/hirek",
  einspritzpumpe_kontakt: "/kapcsolat",
  einspritzpumpe_qualitatspolitik: "/minosegpolitika",
  einspritzpumpe_datenschutz: "/adatvedelem",
  einspritzpumpe_impressum: "/impresszum",
  einspritzpumpe_sitemap: "/oldalterkep",

  vstrekovacie_cerpadlo_uvodna_stranka: "/",
  vstrekovacie_cerpadlo_o_firme: "/cegismerteto",
  vstrekovacie_cerpadlo_nase_sluzby: "/szolgaltatasok",
  vstrekovacie_cerpadlo_dieselova_technologia: "/dieseltechnologia",
  vstrekovacie_cerpadlo_nase_referencie: "/referenciak",
  vstrekovacie_cerpadlo_cennik: "/arlista",
  vstrekovacie_cerpadlo_nasi_kolegovia: "/munkatarsaink",
  vstrekovacie_cerpadlo_fotogaleria: "/galeria",
  vstrekovacie_cerpadlo_novinky: "/hirek",
  vstrekovacie_cerpadlo_kontakt: "/kapcsolat",
  vstrekovacie_cerpadlo_ochrana_udajov: "/adatvedelem",
  vstrekovacie_cerpadlo_impresum: "/impresszum",
  vstrekovacie_cerpadlo_mapa_stranky: "/oldalterkep",

  pompa_de_injectie_prima_pagina: "/",
  pompa_de_injectie_prezentarea_firmei: "/cegismerteto",
  pompa_de_injectie_servicii: "/szolgaltatasok",
  pompa_de_injectie_tehnologia_diesel: "/dieseltechnologia",
  pompa_de_injectie_referinte: "/referenciak",
  pompa_de_injectie_lista_de_preturi: "/arlista",
  pompa_de_injectie_angajatii_nostri: "/munkatarsaink",
  pompa_de_injectie_galerie: "/galeria",
  pompa_de_injectie_contact: "/kapcsolat",
  pompa_de_injectie_politica_de_confidentialitate: "/adatvedelem",
  pompa_de_injectie_tiparirea: "/impresszum",
  pompa_de_injectie_harta: "/oldalterkep",
};

const OLD_NEWS: Record<string, string> = {
  "1": "/hirek/uj-muhely-2010",
  "2": "/hirek/uj-honlap-2010",
  "3": "/hirek/bosch-eps-708",
  "4": "/hirek/diesel-egyesulet-2011",
  "5": "/hirek/megbizhato-diesel-center",
  "6": "/hirek/uj-muhelyszarny",
  "7": "/hirek/cp4-common-rail",
};

function oldUrlTarget(request: NextRequest): string | null {
  const { pathname, searchParams } = request.nextUrl;
  const path = pathname.replace(/\/+$/, "");

  if (path === "/tractorpulling" || path.startsWith("/tractorpulling/")) {
    return "/tractor-pulling";
  }
  if (!path.endsWith("/index.php")) return "/";

  const id = searchParams.get("id")?.trim().toLowerCase();
  if (!id || !(id in OLD_PAGES)) return "/";

  const target = OLD_PAGES[id];
  if (target === "/hirek") {
    const uj = searchParams.get("uj") ?? searchParams.get("amp;uj") ?? "";
    return OLD_NEWS[uj.trim()] ?? "/hirek";
  }
  return target;
}

const OLD_PATH = /^\/(?:(?:english|deutsch|slovak|romanian)(?:\/index\.php)?|index\.php|tractorpulling(?:\/.*)?)\/*$/;

function redirect(request: NextRequest, pathname: string, status: 301 | 308, keepQuery: boolean) {
  const url = new URL(pathname, request.url);
  if (keepQuery) url.search = request.nextUrl.search;
  return NextResponse.redirect(url, status);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (OLD_PATH.test(pathname)) {
    const target = oldUrlTarget(request);
    if (target !== null) return redirect(request, target, 301, false);
    return pathname.endsWith("/") ? redirect(request, pathname.replace(/\/+$/, ""), 308, true) : NextResponse.next();
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    return redirect(request, pathname.replace(/\/+$/, ""), 308, true);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/index.php",
    "/:lang(english|deutsch|slovak|romanian)",
    "/:lang(english|deutsch|slovak|romanian)/index.php",
    "/tractorpulling/:path*",
    "/((?!_next/).*/)",
  ],
};
