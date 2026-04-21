// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.agostonrobert.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.agostonrobert.com/","title_tag":"Fotó szolgáltatások Budapest | Ágoston Róbert Stúdió","meta_description":"Fotó & videó stúdió Budapesten: portréfotózás, céges fotók, esküvői videók és modern fotózási megoldások vállalkozásoknak és magánügyfeleknek."},{"page_url":"https://www.agostonrobert.com/reelvideók","title_tag":"Reklám videók Budapest | Ágoston Róbert Stúdió","meta_description":"Reklám videók és videóklip készítés Budapesten: reels, rendezvény, reklám, esküvői és cég videók teljes körű gyártása forgatókönyvtől a kész filmig."},{"page_url":"https://www.agostonrobert.com/portréfotóscsomagok","title_tag":"Portréfotózás Budapest | Ágoston Róbert Stúdió","meta_description":"Portréfotózás Budapesten: retusált portrék, üzleti és egyéni fotózás modern fotózási megoldásokkal, átlátható csomagárakkal és közös képkiválasztással."},{"page_url":"https://www.agostonrobert.com/céges-videók","title_tag":"Cég videók Budapest | Ágoston Róbert Stúdió","meta_description":"Cég videók Budapest: céges bemutatkozó filmek, reklám videók, online hirdetések, rendezvény- és aftermovie videók modern technikával és profi vágással."},{"page_url":"https://www.agostonrobert.com/üzletifotók","title_tag":"Céges fotók Budapest | Ágoston Róbert Stúdió","meta_description":"Céges és üzleti fotók Budapesten: profi fotózás vállalkozásoknak, portrék, csapat- és image fotók modern fotózási megoldásokkal, átlátható csomagárakkal."},{"page_url":"https://www.agostonrobert.com/copy-of-továbbiak","title_tag":"Esküvői videók Budapest | Ágoston Róbert Stúdió","meta_description":"Esküvői fotó és videó Budapesten: teljes napos csomagok, highlight klip, kreatív, jegyes- és csoportfotózás, profi filmkészítés a nagy nap minden pillanatáról."},{"page_url":"https://www.agostonrobert.com/tartalék","title_tag":"Fotó szolgáltatások Budapest | Ágoston Róbert Stúdió","meta_description":"Fotó szolgáltatások Budapesten: glamour, boudoir, családi és kedvenc fotózás, modern fotózási megoldások retusált képekkel, egyértelmű, fix csomagárakkal."},{"page_url":"https://www.agostonrobert.com/contact","title_tag":"Fotó szolgáltatások Budapest | Kapcsolat Ágoston","meta_description":"Lépjen kapcsolatba profi fotós és videós stúdióval Budapesten: portréfotózás, céges fotók, cég videók, esküvői videók és reklám videók ajánlatkérésre."}],"keywords":["Portréfotózás Budapest","Céges fotók Budapest","Videós stúdió Budapest","Esküvői videók Budapest","Cég videók Budapest","Reklám videók Budapest","Filmkészítés Budapest","Fotó szolgáltatások Budapest","Modern fotózási megoldások Budapest","Videóklip készítés Budapest"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.agostonrobert.com/#localbusiness",
  "url": "https://www.agostonrobert.com/",
  "name": "Ágoston Róbert fotós és videós",
  "description": "Fotó & Videó stúdió Budapesten. Céges fotók és videók, portréfotózás, üzleti fotózás, esküvői fotó- és videószolgáltatás Magyarországon, igény szerint nemzetközi projektekkel.",
  "image": [
    "https://static.wixstatic.com/media/9bd261_09f2b0071e7b404d85d68be1edcb3066~mv2.jpg/v1/fill/w_2500,h_3378,al_c/9bd261_09f2b0071e7b404d85d68be1edcb3066~mv2.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/9bd261_09f2b0071e7b404d85d68be1edcb3066%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/9bd261_09f2b0071e7b404d85d68be1edcb3066%7Emv2.jpg",
  "telephone": "+36 30 942 5745",
  "email": "mailto:fotosember@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "HU",
    "addressLocality": "Budapest"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Budapest"
    },
    {
      "@type": "Country",
      "name": "Magyarország"
    }
  ],
  "founder": {
    "@type": "Person",
    "name": "Ágoston Róbert"
  },
  "sameAs": [],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Fotó és videó szolgáltatások",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Reels és reklám videók",
        "description": "Reels videók, videoklipek, reklámfilmek, rendezvényvideók, esküvői videók, how-to és kreatív filmes tartalmak készítése, forgatókönyvtől a vágásig és social media elhelyezésig.",
        "url": "https://www.agostonrobert.com/reelvideók"
      },
      {
        "@type": "Offer",
        "name": "Portréfotózás",
        "description": "Portréfotózás 60 vagy 90 perces csomagokban, közösen kiválasztott és retusált képek átadásával.",
        "url": "https://www.agostonrobert.com/portréfotóscsomagok"
      },
      {
        "@type": "Offer",
        "name": "Céges videók",
        "description": "Céges bemutatkozó videók, reklámfilmek és online hirdetések készítése magánembereknek, kis- és középvállalkozásoknak és kreatív csapatoknak.",
        "url": "https://www.agostonrobert.com/céges-videók"
      },
      {
        "@type": "Offer",
        "name": "Üzleti fotózás",
        "description": "Üzleti fotózás több időtartam- és képmennyiség csomagban, retusált képek átadásával.",
        "url": "https://www.agostonrobert.com/üzletifotók"
      },
      {
        "@type": "Offer",
        "name": "Esküvői fotó és videó",
        "description": "Esküvői fotó- és videószolgáltatás több csomagban (Ezüst, Arany, Gyémánt), jegyes- és kreatív fotózás, teljes napos kísérés, highlight klip és vágott film készítése.",
        "url": "https://www.agostonrobert.com/copy-of-továbbiak"
      },
      {
        "@type": "Offer",
        "name": "Glamour, boudoir fotózás",
        "description": "Glamour és boudoir fotózás különböző időtartamú és képszámú csomagokban, csak retusált fotók átadásával.",
        "url": "https://www.agostonrobert.com/tartalék"
      },
      {
        "@type": "Offer",
        "name": "Kedvenc fotózás",
        "description": "Rövidebb portré vagy lifestyle jellegű \"kedvenc fotózás\" csomagok 30–90 perces időtartammal.",
        "url": "https://www.agostonrobert.com/tartalék"
      },
      {
        "@type": "Offer",
        "name": "Családi fotózás",
        "description": "Családi fotózás 40–90 perc között, többféle képszám csomaggal, retusált fotók átadásával.",
        "url": "https://www.agostonrobert.com/tartalék"
      }
    ]
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+36 30 942 5745",
    "email": "fotosember@gmail.com",
    "availableLanguage": [
      "hu"
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
