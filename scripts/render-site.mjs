import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { portfolio } from "../content/portfolio.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const template = await readFile(
  path.join(root, "src/index.template.html"),
  "utf8",
);
const e = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
const icon = (name, className = "") => {
  const paths = {
    arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowUpRight: '<path d="M7 17 17 7M7 7h10v10"/>',
    coffee:
      '<path d="M10 2v2M14 2v2M6 2v2M3 8h14v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8ZM17 10h1a3 3 0 0 1 0 6h-2M6 21h12"/>',
    github:
      '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 1.8a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4M8 19c-3 .9-3-1.5-4-2"/>',
    linkedin:
      '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',
  };
  return `<svg class="${className}" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths[name]}</svg>`;
};
const linkAttrs = (event, parameters = {}) =>
  ` data-analytics-event="${event}" data-analytics-params="${e(JSON.stringify(parameters))}"`;
const shot = ({ src, alt }, className = "") => {
  const small = src.replace(/\.webp$/, "-720.webp");
  const medium = src.replace(/\.webp$/, "-1280.webp");
  const sizes = className.includes("shot-wide")
    ? "(max-width: 800px) calc(100vw - 44px), (max-width: 1400px) 80vw, 1180px"
    : "(max-width: 800px) calc(100vw - 44px), (max-width: 1400px) 45vw, 620px";
  return `<figure class="project-shot ${className}"><img src="${e(src)}" srcset="${e(small)} 720w, ${e(medium)} 1280w, ${e(src)} 1920w" sizes="${sizes}" width="1920" height="1243" alt="${e(alt)}" loading="lazy" decoding="async"><figcaption>${e(alt)}</figcaption></figure>`;
};

const { profile, links, projects, experience, about, coffee } = portfolio;
const { multitouch, anonmsg } = projects;
const roles = experience
  .map(
    (item) =>
      `<div class="reveal role"><div><time>${e(item.date)}</time><h3>${e(item.company)}</h3><p class="role-name">${e(item.role)}</p></div><div><p class="role-summary">${e(item.summary)}</p>${item.highlights.length ? `<ul>${item.highlights.map((point) => `<li>${e(point)}</li>`).join("")}</ul>` : ""}</div></div>`,
  )
  .join("");
const evidence = multitouch.evidence
  .map(
    (item) =>
      `<div><span>${e(item.label)}</span><p>${e(item.detail)}</p></div>`,
  )
  .join("");
const features = anonmsg.features
  .map((feature) => `<li>${e(feature)}</li>`)
  .join("");
const disciplines = profile.disciplines.join(" · ");

const siteContent = `<div class="site-shell">
  <header><a class="brand" href="#top">${e(profile.name)}</a><nav id="primary-navigation" aria-label="Primary navigation"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a><a href="#contact">Contact</a></nav><a class="coffee-link" href="#coffee"${linkAttrs("book_coffee", { placement: "header" })}>${icon("coffee")}Book a coffee chat with me</a><button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="primary-navigation"><span class="menu-icon" aria-hidden="true"></span></button></header>
  <main id="top">
    <section class="hero"><div class="hero-copy"><p class="kicker">${e(profile.name)} · ${e(disciplines)}</p><h1>${e(profile.headline[0])}<br>${e(profile.headline[1])}<br><em>${e(profile.headlineEmphasis)}</em></h1><p class="hero-intro">${e(profile.introduction)}</p><div class="hero-actions"><a class="primary-action" href="${e(links.resume)}" target="_blank" rel="noreferrer"${linkAttrs("view_cv", { placement: "hero" })}>View my CV ${icon("arrowUpRight")}</a><a class="secondary-action" href="#coffee"${linkAttrs("book_coffee", { placement: "hero" })}>${icon("coffee")}Book a coffee chat</a></div><a class="inline-link" href="#work">See selected work ${icon("arrowRight")}</a></div><figure class="portrait"><img src="${e(profile.portrait.src)}" srcset="/fred-maina-transparent-clean-480.webp 480w, /fred-maina-transparent-clean-720.webp 720w, /fred-maina-transparent-clean.webp 1011w" sizes="(max-width: 800px) 88vw, (max-width: 1200px) 38vw, 590px" alt="${e(profile.portrait.alt)}" width="${profile.portrait.width}" height="${profile.portrait.height}" decoding="async" fetchpriority="high"></figure></section>
    <div class="current"><strong>${e(profile.currentLabel)}</strong><span>${e(profile.currentRole)}</span></div>
    <section id="work" class="work-section page-section"><div class="reveal section-heading"><p class="section-number">01 / Selected work</p><h2>Things I’ve built.</h2></div><article class="project-feature"><div class="reveal project-title"><div><p class="project-type">${e(multitouch.type)}</p><h3>${e(multitouch.name)}</h3></div><a href="${e(multitouch.url)}" target="_blank" rel="noreferrer"${linkAttrs("view_project", { project: multitouch.name })}>Visit live site ${icon("arrowUpRight")}</a></div><div class="reveal">${shot(multitouch.images.storefront, "shot-wide")}</div><div class="project-details"><div class="reveal"><p class="project-lead">${e(multitouch.summary)}</p></div><div class="reveal evidence-grid">${evidence}</div></div><div class="reveal gallery-row">${shot(multitouch.images.products)}${shot(multitouch.images.admin)}</div><p class="stack-line">${e(multitouch.stack)}</p></article><article class="project-feature second-project"><div class="reveal project-title"><div><p class="project-type">${e(anonmsg.type)}</p><h3>${e(anonmsg.name)}</h3></div><a href="${e(anonmsg.url)}" target="_blank" rel="noreferrer"${linkAttrs("view_project", { project: anonmsg.name })}>Visit live site ${icon("arrowUpRight")}</a></div><div class="anon-layout"><div class="reveal">${shot(anonmsg.image)}</div><div class="reveal anon-copy"><p class="project-lead">${e(anonmsg.summary)}</p><ul>${features}</ul><p class="stack-line">${e(anonmsg.stack)}</p></div></div></article></section>
    <section id="experience" class="experience-section page-section"><div class="reveal section-heading"><p class="section-number">02 / Experience</p><h2>Where I’ve worked.</h2></div><div class="timeline">${roles}</div></section>
    <section id="about" class="about-section page-section"><div class="reveal"><p class="section-number">03 / About</p><h2>${e(about.heading[0])}<br>${e(about.heading[1])}</h2></div><div class="reveal about-grid"><p>${e(about.biography)}</p><div><h3>Regular tools</h3><p>${e(about.tools)}</p><h3>Education</h3><p>${e(about.education)}</p><h3>Certification</h3><p>${e(about.certification)}</p></div></div></section>
    <section id="contact" class="contact-section page-section"><div class="reveal"><p class="section-number">04 / Contact me</p><h2>Let’s stay in touch.</h2></div><div class="reveal contact-links"><a href="mailto:${e(links.email)}"${linkAttrs("contact_email")}><span>Email</span>${e(links.email)} ${icon("arrowUpRight")}</a><a href="${e(links.linkedin)}" target="_blank" rel="noreferrer"${linkAttrs("linkedin_click", { placement: "contact" })}><span>LinkedIn</span>${e(links.linkedinLabel)} ${icon("arrowUpRight")}</a></div></section>
    <section id="coffee" class="coffee-section page-section"><div class="reveal coffee-copy">${icon("coffee")}<p class="section-number">05 / Coffee chat</p><h2>${e(coffee.heading[0])}<br>${e(coffee.heading[1])}</h2><div class="coffee-description"><p>${e(coffee.description)}</p><p class="coffee-meta">${e(coffee.details)}</p><a class="booking-jump desktop-booking-link" href="#booking-calendar"${linkAttrs("view_available_times")}>View available times ${icon("arrowRight")}</a></div></div><div class="reveal calendar-wrap booking-shell"><iframe id="booking-calendar" data-src="${e(coffee.calendarUrl)}" title="Book a coffee chat with ${e(profile.name)}" width="100%" height="760" frameborder="0" loading="lazy"></iframe></div><div class="mobile-booking-card">${icon("coffee")}<div><h3>Choose a time on Google Calendar</h3></div><a href="${e(coffee.calendarUrl)}" target="_blank" rel="noreferrer"${linkAttrs("open_booking_page", { device: "mobile", placement: "booking_card" })}>Open booking calendar ${icon("arrowUpRight")}</a></div></section>
  </main>
  <footer><div><strong>${e(profile.name)}</strong><p>${e(profile.disciplines.join(" and ").toLowerCase())}.</p></div><div><a href="${e(links.github)}" target="_blank" rel="noreferrer"${linkAttrs("open_social_profile", { network: "github", placement: "footer" })}>${icon("github")}GitHub</a><a href="${e(links.linkedin)}" target="_blank" rel="noreferrer"${linkAttrs("linkedin_click", { placement: "footer" })}>${icon("linkedin")}LinkedIn</a></div><small>© ${new Date().getFullYear()}</small></footer>
</div>`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://www.fredmaina.com/#profile",
  url: "https://www.fredmaina.com/",
  name: `${profile.name} — Backend and Applied AI Engineer`,
  dateModified: new Date().toISOString().slice(0, 10),
  mainEntity: {
    "@type": "Person",
    "@id": "https://www.fredmaina.com/#fredrick-maina",
    name: "Fredrick Chege Maina",
    alternateName: ["Fredrick Maina", "Fred Maina"],
    url: "https://www.fredmaina.com/",
    jobTitle: "Junior Data Scientist, Backend and AI Engineering",
    description:
      "Backend and applied AI engineer working with Java, Python, cloud infrastructure and production retrieval systems.",
    worksFor: {
      "@type": "Organization",
      name: "Dalberg Data Insights",
      url: "https://dalberg.com/what-we-do/dalberg-data-insights/",
    },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Kenyatta University" },
    knowsAbout: [
      "Backend engineering",
      "Java",
      "Spring Boot",
      "Python",
      "FastAPI",
      "Applied AI",
      "Retrieval-augmented generation",
      "AWS",
      "Google Cloud",
      "Kubernetes",
    ],
    sameAs: [links.github, links.linkedin],
  },
};
const values = {
  title: `${profile.name} | Backend & AI Engineer at Dalberg`,
  description: `${profile.name} is a backend and applied AI engineer and Junior Data Scientist at Dalberg Data Insights, building production systems with Java, Python, AWS and GCP.`,
  name: profile.name,
  ogTitle: `${profile.name} | Backend & AI Engineer`,
  ogDescription:
    "Production backend systems, applied AI, and the engineering decisions behind them.",
  twitterDescription: `Backend systems, applied AI, and selected engineering work by ${profile.name}.`,
  ogImageAlt: `${profile.name} — backend engineering and applied AI`,
  structuredData: JSON.stringify(structuredData).replaceAll("<", "\\u003c"),
  siteContent,
};
let output = template;
for (const [key, value] of Object.entries(values))
  output = output.replaceAll(
    `{{${key}}}`,
    key === "siteContent" || key === "structuredData" ? value : e(value),
  );
await writeFile(path.join(root, "index.html"), output);
console.log("Rendered index.html from content/portfolio.mjs");
