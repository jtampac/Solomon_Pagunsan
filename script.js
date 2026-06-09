/* ===================================================================
   SOLOMON PAGUNSAN — SITE SCRIPT
   -------------------------------------------------------------------
   HOW TO UPDATE THIS SITE (no coding required for content):
   Everything the owner needs to edit lives in the CONFIG block below.
     1. siteAssets   -> hero image, section images, gallery photos
     2. socialLinks  -> all social / contact URLs
     3. farmCrops / inventions / videos / livestock / press
   Paste a URL between the quotes "" to set an image or video.
   Leave a value as "" to keep the elegant built-in placeholder.
=================================================================== */

/* =======================  1. MEDIA ASSETS  ======================= */
/* Paste direct image URLs (https://...) to replace placeholders.    */
const siteAssets = {
  heroImage:"",   // large cinematic farm image for the hero
  workshopImage:    "",   // (reserved) workshop backdrop
  captainImage:     "",   // backdrop for the "Captain" section
  galleryImages: [        // gallery photos (any number, any order)
    "", "", "", "", "", "", "", "", ""
  ]
};

/* =======================  2. SOCIAL LINKS  ======================= */
/* These power the nav, contact section and footer in one place.     */
const socialLinks = {
  facebook:  "https://www.facebook.com/solomon.pagunsan/",
  messenger: "https://m.me/solomon.pagunsan",
  youtube:   "https://www.youtube.com/channel/UC9pCuD1xPVJnRhNmfoKoAug",
  tiktok:    "https://www.tiktok.com/@solomon.pagunsan",
  instagram: "https://www.instagram.com/solomonpagunsan/",
  whatsapp:  "https://wa.me/63XXXXXXXXXX",   // <- replace with real number
  email:     "hello@solomonpagunsan.com"     // <- replace with real email
};

/* =======================  3. FARM CROPS  ========================= */
const farmCrops = [
  { name:"Sugarcane Farming", img:"images/Montage_1.png", wide:true,
    text:"The heart of the operation. Roughly 18 hectares of rented cane, harvested once a year and milled at the local central — the crop that turned a dream into a livelihood." },
  { name:"Cassava Farming", img:"",
    text:"Hardy, low-maintenance, and reliable — cassava was one of the first crops Solomon planted when he started his own land." },
  { name:"Corn Farming", img:"",
    text:"A dependable rotation crop that helps keep the soil and the cash flow working between the long sugarcane seasons." },
  { name:"Livestock Raising", img:"",
    text:"Pigs and chickens that bridge the gap between harvests, providing steady monthly income for the family." },
  { name:"Carabao Farming", img:"images/Carabao_Montage_.png", wide:true,
    text:"The Filipino farmer's truest partner. Raised, worked, and cared for on the land — and sold when the season calls for it." }
];

/* =====================  4. WORKSHOP / INVENTIONS  ================ */
const inventions = [
  { name:"Modified Spading Tools", note:"Field-tested ergonomics", img:"", tall:true },
  { name:"Sugarcane Hand Tools",   note:"Made for the cane rows",   img:"" },
  { name:"Equipment Modifications",note:"Repaired & re-engineered", img:"" },
  { name:"Fabrication Projects",   note:"Welding & metalwork",      img:"" },
  { name:"Agricultural Innovations",note:"Practical farm solutions",img:"", tall:true }
];

/* =========================  5. VIDEOS  =========================== */
/* Paste a full YouTube watch URL. The ID is auto-extracted.         */
const videos = [
  { url:"https://www.youtube.com/watch?v=_8NPoL9fJNA", title:"Sugarcane Harvest Season", desc:"From standing cane to the milling central." },
  { url:"https://www.youtube.com/watch?v=X3Bd-vqOao0", title:"A Day on the Farm",        desc:"Sunrise to sundown with the carabao." },
  { url:"https://www.youtube.com/watch?v=fU5zsyld4i8", title:"Building Farm Tools",       desc:"Inside Solomon's workshop." },
  { url:"https://www.youtube.com/watch?v=RbGfI8n5xH8", title:"Raising Pigs & Chickens",  desc:"How the in-between seasons get funded." },
  { url:"https://www.youtube.com/watch?v=PuO14QqvHOU", title:"Planting Day",              desc:"Preparing the field for the next crop." },
  { url:"https://www.youtube.com/watch?v=Y5BuLfg6qJs", title:"The Captain Appears",       desc:"A little fun after the harvest." }
];

/* ========================  6. LIVESTOCK  ========================= */
const livestock = [
  { name:"Pigs",        img:"", text:"Raised for sale roughly every four months. Inquire for availability and pricing." },
  { name:"Chickens",    img:"", text:"Free-range farm chickens — a steady part of the farm's monthly cycle." },
  { name:"Carabao",     img:"", text:"Working water buffalo, occasionally available. Message to ask." },
  { name:"Farm Animals",img:"", text:"Other livestock raised on the farm from season to season." }
];

/* ===========================  7. PRESS  ========================== */
const press = [
  { outlet:"Manila Bulletin", title:"Sweet Success: High school graduate earns ₱1M a year as a sugarcane farmer", meta:"Spotlight Features · 2026",
    url:"https://mb.com.ph/2026/04/08/sweet-success-high-school-graduate-earns-1m-a-year-as-a-sugarcane-farmer" },
  { outlet:"Agriculture Magazine", title:"He left for the city, came back a farmer — and now earns a million yearly from sugarcane", meta:"Feature · 2026",
    url:"https://agriculture.com.ph/2026/03/20/he-left-for-the-city-came-back-a-farmer-and-now-earns-a-million-yearly-from-sugarcane/" }
];

/* ===================================================================
   ====================  RENDERING (no edits below)  ================
=================================================================== */
(function () {
  "use strict";

  const $  = (s, c=document) => c.querySelector(s);
  const $$ = (s, c=document) => [...c.querySelectorAll(s)];

  /* --- helper: background image with graceful gradient fallback --- */
  function bg(el, url, fallback) {
    if (url && url.trim()) {
      el.style.backgroundImage = `url("${url}")`;
    } else if (fallback) {
      el.style.backgroundImage = fallback;
    }
  }

  /* --- helper: extract YouTube ID from various URL formats --- */
  function ytId(url) {
    if (!url) return "";
    const m = url.match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);
    return m ? m[1] : "";
  }

  /* ----------------------------- HERO ---------------------------- */
  bg($("#heroMedia"), siteAssets.heroImage, null);

  /* --------------------------- CAPTAIN --------------------------- */
  bg($("#captainMedia"), siteAssets.captainImage, null);

  /* ----------------------------- FARM ---------------------------- */
  const farmGrid = $("#farmGrid");
  farmCrops.forEach((c, i) => {
    const card = document.createElement("article");
    card.className = "farm-card reveal" + (c.wide ? " farm-card--wide" : "");
    const media = document.createElement("div");
    media.className = "farm-card__media";
    bg(media, c.img, "linear-gradient(155deg,var(--green-700),var(--cane))");
    card.appendChild(media);
    card.insertAdjacentHTML("beforeend", `
      <div class="farm-card__body">
        <span class="farm-card__index">0${i + 1}</span>
        <h3>${c.name}</h3>
        <p>${c.text}</p>
        <a class="farm-card__link" href="#contact">Learn more &rarr;</a>
      </div>`);
    farmGrid.appendChild(card);
  });

  /* --------------------------- WORKSHOP -------------------------- */
  const wg = $("#workshopGallery");
  inventions.forEach((inv) => {
    const cell = document.createElement("div");
    cell.className = "invent reveal" + (inv.tall ? " invent--tall" : "");
    const media = document.createElement("div");
    media.className = "invent__media";
    bg(media, inv.img, "linear-gradient(160deg,#5a4327,#2c2014)");
    cell.appendChild(media);
    cell.insertAdjacentHTML("beforeend", `
      <div class="invent__label"><h3>${inv.name}</h3><span>${inv.note}</span></div>`);
    if (inv.img) cell.addEventListener("click", () => openImage(inv.img));
    wg.appendChild(cell);
  });

  /* ---------------------------- VIDEOS --------------------------- */
  const vg = $("#videosGrid");
  videos.forEach((v) => {
    const id = ytId(v.url);
    const card = document.createElement("article");
    card.className = "video-card reveal";
    const thumb = id
      ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
      : "";
    card.innerHTML = `
      <div class="video-card__thumb" ${thumb ? `style="background-image:url('${thumb}')"` : ""}>
        <div class="video-card__play"><i></i></div>
      </div>
      <div class="video-card__body"><h3>${v.title}</h3><p>${v.desc}</p></div>`;
    card.addEventListener("click", () => {
      if (id) {
        openVideo(id);
      } else {
        window.open(socialLinks.youtube, "_blank", "noopener");
      }
    });
    vg.appendChild(card);
  });

  /* --------------------------- LIVESTOCK ------------------------- */
  const lg = $("#livestockGrid");
  livestock.forEach((a) => {
    const card = document.createElement("article");
    card.className = "animal reveal";
    const media = document.createElement("div");
    media.className = "animal__media";
    bg(media, a.img, "linear-gradient(160deg,var(--cane),var(--green-700))");
    card.appendChild(media);
    const inquire = `${socialLinks.messenger || socialLinks.facebook}`;
    card.insertAdjacentHTML("beforeend", `
      <div class="animal__body">
        <h3>${a.name}</h3>
        <p>${a.text}</p>
        <a class="animal__inquire" href="${inquire}" target="_blank" rel="noopener">Inquire</a>
      </div>`);
    lg.appendChild(card);
  });

  /* ----------------------------- PRESS --------------------------- */
  const mg = $("#mediaGrid");
  press.forEach((p) => {
    const a = document.createElement("a");
    a.className = "press reveal";
    a.href = p.url; a.target = "_blank"; a.rel = "noopener";
    a.innerHTML = `
      <span class="press__outlet">${p.outlet}</span>
      <h3 class="press__title">${p.title}</h3>
      <span class="press__meta">${p.meta}</span>
      <span class="press__read">Read the feature &rarr;</span>`;
    mg.appendChild(a);
  });

  /* ---------------------------- GALLERY -------------------------- */
  const gm = $("#galleryMasonry");
  const photos = siteAssets.galleryImages.length ? siteAssets.galleryImages : new Array(9).fill("");
  photos.forEach((src, i) => {
    const item = document.createElement("div");
    item.className = "gallery__item reveal";
    if (src && src.trim()) {
      item.innerHTML = `<img src="${src}" alt="Solomon Pagunsan farm photo ${i + 1}" loading="lazy">`;
      item.addEventListener("click", () => openImage(src));
    } else {
      item.innerHTML = `<div class="ph">Farm Photo ${i + 1}</div>`;
    }
    gm.appendChild(item);
  });

  /* ----------------------- SOCIAL / CONTACT ---------------------- */
  const mailto = socialLinks.email ? "mailto:" + socialLinks.email : "#";
  const map = {
    cFacebook:  socialLinks.facebook,
    cMessenger: socialLinks.messenger,
    cYoutube:   socialLinks.youtube,
    cTiktok:    socialLinks.tiktok,
    cWhatsapp:  socialLinks.whatsapp,
    cEmail:     mailto
  };
  Object.entries(map).forEach(([id, url]) => {
    const el = document.getElementById(id);
    if (el && url) el.href = url;
  });
  const sub = $("#subscribeBtn");
  if (sub) sub.href = socialLinks.youtube;

  /* footer social icons */
  const fs = $("#footerSocial");
  const icons = [
    ["facebook","f"], ["youtube","\u25B6"], ["tiktok","\u266B"],
    ["instagram","\u25C9"], ["messenger","\u2709"], ["email", "@"]
  ];
  icons.forEach(([key, glyph]) => {
    let url = socialLinks[key];
    if (key === "email") url = mailto;
    if (!url) return;
    const a = document.createElement("a");
    a.href = url; a.target = "_blank"; a.rel = "noopener";
    a.setAttribute("aria-label", key);
    a.textContent = glyph;
    fs.appendChild(a);
  });

  $("#year").textContent = new Date().getFullYear();

  /* ===================  INTERACTIONS  =========================== */

  /* --- sticky nav state --- */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("is-solid", window.scrollY > 80);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* --- mobile menu --- */
  const toggle = $("#navToggle");
  const links  = $("#navLinks");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
  });
  $$("#navLinks a").forEach(a =>
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );

  /* --- scroll reveal --- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  $$(".reveal").forEach(el => io.observe(el));

  /* --- animated stat counters --- */
  const counters = $$(".stat__num");
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.count, 10) || 0;
      const dur = 1400; const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      cio.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach(c => cio.observe(c));

  /* --- lightbox --- */
  const lb = $("#lightbox");
  const stage = $("#lightboxStage");
  function open() { lb.classList.add("is-open"); lb.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; }
  function close() { lb.classList.remove("is-open"); lb.setAttribute("aria-hidden", "true"); stage.innerHTML = ""; document.body.style.overflow = ""; }
  function openImage(src) { stage.innerHTML = `<img src="${src}" alt="">`; open(); }
  function openVideo(id) { stage.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`; open(); }
  window.openImage = openImage; window.openVideo = openVideo;
  $("#lightboxClose").addEventListener("click", close);
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

})();
