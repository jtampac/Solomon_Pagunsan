/* ===================================================================
   SOLOMON PAGUNSAN — SITE SCRIPT
   -------------------------------------------------------------------
   HOW TO UPDATE THIS SITE (no coding required for content):
   Everything the owner needs to edit lives in the CONFIG block below.
     1. siteAssets   -> hero image, section images, gallery photos
     2. socialLinks  -> all social / contact URLs
     3. farmCrops / inventions / videos / livestock / press
     4. sponsors            -> partner logo banner (unlimited entries)
     5. mediaKit            -> audience stats shown to brands
     6. partnershipServices -> "Work With Solomon" service cards
   Paste a URL between the quotes "" to set an image or video.
   Leave a value as "" to keep the elegant built-in placeholder.
=================================================================== */

/* =======================  1. MEDIA ASSETS  ======================= */
/* Paste direct image URLs (https://...) to replace placeholders.    */
const siteAssets = {
  heroImage:"",   // large cinematic farm image for the hero
  workshopImage:    "",   // (reserved) workshop backdrop
  captainImage:     "",   // backdrop for the "Captain" section
  galleryImages: [ "images/farm-01.jpg",
    "images/hero-collage_5.jpg",
    "images/farm-03.jpg",
    "images/hero-collage_4.jpg",
    "images/hero-collage_1.jpg",
    "images/hero-collage_2.jpg",
    "images/hero-collage_3.jpg",
    "images/sugarcane-field.jpg",
    "images/farm-05.jpg"
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
  { name:"Cassava Farming", img:"images/Cassava.jpg",
    text:"Hardy, low-maintenance, and reliable — cassava was one of the first crops Solomon planted when he started his own land." },
  { name:"Corn Farming", img:"images/corn-harvest.jpg",
    text:"A dependable rotation crop that helps keep the soil and the cash flow working between the long sugarcane seasons." },
  { name:"Livestock Raising", img:"images/livestock-04.jpg",
    text:"Pigs and chickens that bridge the gap between harvests, providing steady monthly income for the family." },
  { name:"Carabao Farming", img:"images/Carabao_Montage_.png", wide:true,
    text:"The Filipino farmer's truest partner. Raised, worked, and cared for on the land — and sold when the season calls for it." }
];

/* =====================  4. WORKSHOP / INVENTIONS  ================ */
const inventions = [
  { name:"Modified Spading Tools", note:"Field-tested ergonomics", img:"images/modified-spading.jpg", tall:true },
  { name:"Sugarcane Hand Tools",   note:"Made for the cane rows",   img:"images/workshop-01.jpg" },
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
  { name:"Pigs",        img:"images/livestock-02.jpg", text:"Raised for sale roughly every four months. Inquire for availability and pricing." },
  { name:"Chickens",    img:"images/farm-02.jpg", text:"Free-range farm chickens — a steady part of the farm's monthly cycle." },
  { name:"Carabao",     img:"images/carabao-team.jpg", text:"Working water buffalo, occasionally available. Message to ask." },
  { name:"Farm Animals",img:"images/livestock-04.jpg", text:"Other livestock raised on the farm from season to season." }
];

/* ===========================  7. PRESS  ========================== */
const press = [
  { outlet:"Manila Bulletin", title:"Sweet Success: High school graduate earns ₱1M a year as a sugarcane farmer", meta:"Spotlight Features · 2026",
    url:"https://mb.com.ph/2026/04/08/sweet-success-high-school-graduate-earns-1m-a-year-as-a-sugarcane-farmer" },
  { outlet:"Agriculture Magazine", title:"He left for the city, came back a farmer — and now earns a million yearly from sugarcane", meta:"Feature · 2026",
    url:"https://agriculture.com.ph/2026/03/20/he-left-for-the-city-came-back-a-farmer-and-now-earns-a-million-yearly-from-sugarcane/" }
];

/* ====================  8. PARTNERSHIPS & SPONSORS  =============== */
/* Add as many sponsors as needed — the banner scales automatically.
   logo -> direct image URL (PNG with transparency looks best).
   url  -> optional link to the sponsor's page ("" = not clickable).
   Leave logo as "" to show a professional name placeholder.        */
const sponsors = [
  { name:"Sponsor 1", logo:"images/sponsors/JI_Telecom.png", url:"https://www.jitelecom.ph/" },
  { name:"Sponsor 2", logo:"images/sponsors/sponsor2.png", url:"" },
  { name:"Sponsor 3", logo:"", url:"" },
  { name:"Sponsor 4", logo:"", url:"" },
  { name:"Sponsor 5", logo:"", url:"" },
  { name:"Sponsor 6", logo:"", url:"" }
];

/* ========================  9. MEDIA KIT  ========================= */
/* Editable audience statistics shown to brands & agencies.
   Type the numbers as text, e.g. "120K", "85,000", "1.2M".
   Leave a value as "" to show "On request".                        */
const mediaKit = {
  facebookFollowers:  "",
  youtubeSubscribers: "",
  tiktokFollowers:    "",
  monthlyReach:       "",
  location:           "Philippines"
};

/* ===================  10. PARTNERSHIP SERVICES  ================== */
/* The "Work With Solomon" cards. Edit titles & descriptions freely. */
const partnershipServices = [
  { name:"Product Endorsements",
    text:"Authentic, field-tested endorsements of agricultural products, tools, and equipment — shown working on a real Negros farm." },
  { name:"Sponsored Videos",
    text:"Dedicated or integrated brand features across YouTube, Facebook, and TikTok, produced in Solomon's honest documentary style." },
  { name:"Farm Visits",
    text:"Hosted visits to the farm for brands, media, schools, and organizations — see the operation and the story up close." },
  { name:"Event Guesting",
    text:"Speaking engagements, guest appearances, and 'The Captain' performances for fiestas, expos, and corporate events." },
  { name:"Brand Collaborations",
    text:"Long-term ambassadorships and campaigns with brands that share a genuine commitment to Filipino farmers." },
  { name:"Community Events",
    text:"Partnerships on community programs, farmer meet-ups, and outreach activities across Negros and beyond." },
  { name:"Agricultural Promotions",
    text:"Campaigns that promote crops, livestock, farm technology, and agri-services to an engaged farming audience." }
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

  /* ----------------- WORK WITH SOLOMON (services) ----------------- */
  const sg = $("#servicesGrid");
  if (sg) {
    partnershipServices.forEach((s, i) => {
      const card = document.createElement("article");
      card.className = "service reveal";
      card.innerHTML = `
        <span class="service__index">0${i + 1}</span>
        <h3 class="service__title">${s.name}</h3>
        <p class="service__text">${s.text}</p>
        <a class="service__link" href="#contact">Inquire &rarr;</a>`;
      sg.appendChild(card);
    });
  }

  /* --------------------------- MEDIA KIT ------------------------- */
  const mk = $("#mediaKitGrid");
  if (mk) {
    const stat = (v) => (v && String(v).trim()) ? v : "On request";
    const kitItems = [
      { label:"Facebook Audience", value: stat(mediaKit.facebookFollowers),  note:"Followers on the main page" },
      { label:"YouTube Audience",  value: stat(mediaKit.youtubeSubscribers), note:"Channel subscribers" },
      { label:"TikTok Audience",   value: stat(mediaKit.tiktokFollowers),    note:"Followers on TikTok" },
      { label:"Monthly Reach",     value: stat(mediaKit.monthlyReach),       note:"Combined views across platforms" },
      { label:"Location",          value: stat(mediaKit.location),           note:"Bayawan City, Negros Oriental" }
    ];
    kitItems.forEach((k) => {
      const card = document.createElement("div");
      card.className = "kit-card reveal" + (k.value === "On request" ? " kit-card--pending" : "");
      card.innerHTML = `
        <span class="kit-card__label">${k.label}</span>
        <span class="kit-card__value">${k.value}</span>
        <span class="kit-card__note">${k.note}</span>`;
      mk.appendChild(card);
    });
  }

  /* ------------------- PARTNERSHIPS & SPONSORS -------------------- */
  const track = $("#sponsorsTrack");
  if (track && sponsors.length) {
    const buildItem = (s) => {
      const tag = (s.url && s.url.trim()) ? "a" : "div";
      const el = document.createElement(tag);
      el.className = "sponsor";
      if (tag === "a") { el.href = s.url; el.target = "_blank"; el.rel = "noopener"; }
      if (s.logo && s.logo.trim()) {
        el.innerHTML = `<img src="${s.logo}" alt="${s.name}" loading="lazy" decoding="async"
          onerror="this.parentNode.classList.add('sponsor--ph');this.outerHTML='<span class=\\'sponsor__name\\'>${s.name}</span>'">`;
      } else {
        el.classList.add("sponsor--ph");
        el.innerHTML = `<span class="sponsor__name">${s.name}</span>`;
      }
      return el;
    };
    /* duplicate the set until the track is comfortably wider than 2x
       the viewport, so the -50% loop is always seamless */
    const sets = Math.max(2, Math.ceil((window.innerWidth * 2) / (sponsors.length * 220)) * 2);
    for (let r = 0; r < sets; r++) {
      sponsors.forEach((s) => track.appendChild(buildItem(s)));
    }
    /* keep speed consistent regardless of how many sponsors exist */
    track.style.animationDuration = Math.max(24, sponsors.length * sets * 2.4) + "s";
  }

  /* ---------------------------- GALLERY -------------------------- */
  const gm = $("#galleryMasonry");
  const photos = siteAssets.galleryImages.length ? siteAssets.galleryImages : new Array(9).fill("");
  photos.forEach((src, i) => {
    const item = document.createElement("div");
    item.className = "gallery__item reveal";
    if (src && src.trim()) {
      item.innerHTML = `<img src="${src}" alt="Solomon Pagunsan farm photo ${i + 1}" loading="lazy" decoding="async">`;
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
