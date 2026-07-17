document.documentElement.classList.add("js");

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle?.addEventListener("click", () => {
  nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const addHomepageV2Styles = () => {
  if (document.getElementById("homepage-v2-styles")) return;

  const style = document.createElement("style");
  style.id = "homepage-v2-styles";
  style.textContent = `
    .research-vision-intro {
      max-width: 920px;
      padding-top: clamp(3rem, 7vw, 6rem);
      padding-bottom: clamp(2.5rem, 6vw, 5rem);
    }
    .research-vision-intro h2 {
      max-width: 850px;
      font-size: clamp(2.4rem, 5vw, 4.8rem);
      line-height: 1;
      letter-spacing: -0.055em;
    }
    .research-vision-intro .section-lead {
      max-width: 850px;
      font-size: clamp(1.08rem, 2vw, 1.32rem);
      line-height: 1.75;
    }
    .featured-research-platform {
      position: relative;
      overflow: hidden;
      border-radius: 36px;
      padding: clamp(2rem, 6vw, 5rem);
      margin-top: 1rem;
      background: linear-gradient(145deg, #07131a 0%, #0c2030 55%, #162b3b 100%);
      color: #f8fafc;
      box-shadow: 0 34px 100px rgba(12, 19, 36, 0.24);
    }
    .featured-research-platform::before {
      content: "";
      position: absolute;
      width: 440px;
      height: 440px;
      right: -150px;
      top: -210px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(214, 174, 91, 0.22), transparent 68%);
      pointer-events: none;
    }
    .featured-platform-layout {
      position: relative;
      display: grid;
      grid-template-columns: minmax(0, 0.9fr) minmax(340px, 1.1fr);
      gap: clamp(2rem, 5vw, 5rem);
      align-items: center;
    }
    .featured-research-platform .eyebrow,
    .featured-research-platform p { color: rgba(248, 250, 252, 0.78); }
    .featured-research-platform h2,
    .featured-research-platform strong { color: #fff; }
    .featured-research-platform h2 {
      font-size: clamp(2.8rem, 6vw, 5.6rem);
      line-height: 0.92;
      letter-spacing: -0.065em;
      margin-bottom: 1.2rem;
    }
    .featured-platform-diagram {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.85rem;
    }
    .featured-platform-diagram article {
      padding: 1rem;
      border: 1px solid rgba(255,255,255,0.14);
      border-radius: 18px;
      background: rgba(255,255,255,0.065);
      backdrop-filter: blur(12px);
    }
    .featured-platform-diagram span {
      display: block;
      color: #e8c778;
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 0.35rem;
    }
    .featured-platform-diagram strong {
      display: block;
      font-size: 0.98rem;
      line-height: 1.3;
    }
    .core-platform-heading {
      margin-bottom: clamp(2rem, 4vw, 3rem);
    }
    .core-platform-heading h2 {
      max-width: 820px;
    }
    .ecosystem-placeholder {
      text-align: center;
      border: 1px solid rgba(100, 116, 139, 0.2);
      border-radius: 32px;
      padding: clamp(2.5rem, 7vw, 6rem) clamp(1.25rem, 5vw, 4rem);
      background: linear-gradient(145deg, rgba(255,255,255,0.72), rgba(237,242,247,0.72));
    }
    .ecosystem-placeholder h2 {
      max-width: 850px;
      margin-left: auto;
      margin-right: auto;
    }
    .ecosystem-placeholder .section-lead {
      max-width: 760px;
      margin-left: auto;
      margin-right: auto;
    }
    .ecosystem-progression {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 1rem;
      margin-top: 2rem;
      text-align: left;
    }
    .ecosystem-step {
      position: relative;
      border: 1px solid rgba(100, 116, 139, 0.22);
      border-radius: 20px;
      padding: 1.15rem;
      background: rgba(255, 255, 255, 0.7);
    }
    .ecosystem-step span {
      display: block;
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #64748b;
      margin-bottom: 0.55rem;
    }
    .ecosystem-step h3 { margin: 0 0 0.5rem; font-size: 1.05rem; }
    .ecosystem-step p { margin: 0; color: #475569; line-height: 1.55; font-size: 0.92rem; }
    .ecosystem-step:not(:last-child)::after {
      content: "→";
      position: absolute;
      right: -0.78rem;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
      width: 1.55rem;
      height: 1.55rem;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: #0c1324;
      color: white;
      font-size: 0.82rem;
    }
    .project-proof-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      margin-top: 0.75rem;
    }
    .project-proof-row span {
      display: inline-flex;
      border: 1px solid rgba(100, 116, 139, 0.24);
      border-radius: 999px;
      padding: 0.35rem 0.58rem;
      font-size: 0.72rem;
      color: #475569;
      background: rgba(255, 255, 255, 0.62);
    }
    .remaining-projects-heading h2 { max-width: 850px; }
    #featured-projects { display: none; }
    @media (max-width: 980px) {
      .featured-platform-layout { grid-template-columns: 1fr; }
      .ecosystem-progression { grid-template-columns: 1fr 1fr; }
      .ecosystem-step::after { display: none !important; }
    }
    @media (max-width: 640px) {
      .featured-research-platform { border-radius: 24px; }
      .featured-platform-diagram,
      .ecosystem-progression { grid-template-columns: 1fr; }
    }
  `;
  document.head.appendChild(style);
};

addHomepageV2Styles();

const addProofBadges = (card, badges) => {
  if (!card || card.querySelector(".project-proof-row")) return;
  const body = card.querySelector("div:last-child") || card;
  const linkText = body.querySelector(".card-link-text");
  const row = document.createElement("div");
  row.className = "project-proof-row";
  badges.forEach((badge) => {
    const item = document.createElement("span");
    item.textContent = badge;
    row.appendChild(item);
  });
  if (linkText) body.insertBefore(row, linkText);
  else body.appendChild(row);
};

const hero = document.querySelector("main > .hero");
const researchSection = document.getElementById("research");
const flagshipStack = document.querySelector(".flagship-stack");
const projectsSection = document.getElementById("projects");

if (hero && researchSection) {
  researchSection.classList.add("research-vision-intro");
  const researchHeading = researchSection.querySelector(".section-heading h2");
  if (researchHeading) researchHeading.textContent = "How can artificial intelligence strengthen human reasoning rather than replace it?";
  const timeline = researchSection.querySelector(".research-timeline");
  timeline?.remove();
  hero.insertAdjacentElement("afterend", researchSection);
}

if (researchSection && !document.getElementById("institutional-pilot")) {
  const featured = document.createElement("section");
  featured.id = "institutional-pilot";
  featured.className = "section featured-research-platform reveal";
  featured.innerHTML = `
    <div class="featured-platform-layout">
      <div>
        <p class="eyebrow">★ Featured Research Platform</p>
        <h2>Socratic Institutional Pilot</h2>
        <p><strong>Educational intelligence for higher education.</strong> A public, institution-facing demonstration of how curriculum, structured knowledge, Socratic assessment, critical listening, faculty review, and responsible AI governance can operate as one coherent system.</p>
        <div class="tag-list">
          <span>Curriculum Intelligence</span><span>Knowledge Packs</span><span>Socratic Assessment</span><span>Critical Listening</span><span>Faculty Governance</span><span>Evidence Portfolios</span>
        </div>
        <div class="hero-actions flagship-actions">
          <a class="button primary" href="https://noumena000.github.io/Socratic-Institutional-Pilot/" target="_blank" rel="noopener noreferrer">Launch Institutional Demo</a>
          <a class="button" href="projects/socratic-institutional-pilot.html">View Project Case Study</a>
        </div>
      </div>
      <div class="featured-platform-diagram" aria-label="Institutional pilot capabilities">
        <article><span>01 · Curriculum</span><strong>Learning objectives establish the educational boundary.</strong></article>
        <article><span>02 · Knowledge</span><strong>Approved knowledge packs ground the system.</strong></article>
        <article><span>03 · Evidence</span><strong>Dialogue makes learner reasoning visible.</strong></article>
        <article><span>04 · Governance</span><strong>Faculty judgment remains authoritative.</strong></article>
        <article><span>05 · Providers</span><strong>Model access follows explicit institutional boundaries.</strong></article>
        <article><span>06 · Review</span><strong>Evidence portfolios support accountable decisions.</strong></article>
      </div>
    </div>`;
  researchSection.insertAdjacentElement("afterend", featured);
}

if (flagshipStack) {
  flagshipStack.setAttribute("aria-label", "Core research platforms");
  const heading = document.createElement("div");
  heading.className = "section-heading core-platform-heading";
  heading.innerHTML = `<div><p class="eyebrow">Core Research Platforms</p><h2>Four connected platforms supporting learning, assessment, interpretation, and private reasoning.</h2></div>`;
  flagshipStack.prepend(heading);

  flagshipStack.querySelectorAll(".flagship-copy .eyebrow").forEach((label) => {
    if (label.textContent.includes("Flagship")) label.textContent = "Learning Platform";
  });

  if (!document.getElementById("critical-listening")) {
    const listening = document.createElement("section");
    listening.className = "flagship-showcase";
    listening.id = "critical-listening";
    listening.innerHTML = `
      <div class="flagship-copy">
        <p class="eyebrow">Interpretive Research Tool</p>
        <h2>Critical Listening Assistant</h2>
        <p><strong>Listen for reasons, not merely conclusions.</strong> An interactive research tool that helps users distinguish claims from evidence, identify assumptions, recognize objections, and formulate open questions without outsourcing interpretation or judgment.</p>
        <div class="tag-list"><span>Claim Analysis</span><span>Evidence</span><span>Assumptions</span><span>Objections</span><span>Open Questions</span></div>
        <div class="hero-actions flagship-actions"><a class="button primary" href="projects/critical-listening-assistant.html">Explore Interactive Demo</a></div>
      </div>
      <div class="card accent-card"><p class="eyebrow">Critical Listening Workflow</p><h3>Claim → Reason → Evidence → Assumption → Objection → Question</h3><p>The assistant supports careful interpretation while keeping the user responsible for the final judgment.</p></div>`;
    flagshipStack.appendChild(listening);
  }

  const featuredPlatform = document.getElementById("institutional-pilot");
  featuredPlatform?.insertAdjacentElement("afterend", flagshipStack);
}

if (flagshipStack && !document.getElementById("ecosystem")) {
  const ecosystem = document.createElement("section");
  ecosystem.id = "ecosystem";
  ecosystem.className = "section ecosystem-placeholder reveal";
  ecosystem.innerHTML = `
    <p class="eyebrow">Educational Intelligence Ecosystem</p>
    <h2>From philosophical reasoning to governed institutional intelligence.</h2>
    <p class="section-lead">A polished high-resolution ecosystem visual will be added here in Phase 2. The architecture already follows a clear research progression.</p>
    <div class="ecosystem-progression" aria-label="Educational intelligence research progression">
      <article class="ecosystem-step"><span>Foundation</span><h3>Socratic Reasoning</h3><p>Clarification, evidence, objection, conceptual refinement, and revision.</p></article>
      <article class="ecosystem-step"><span>Learner evidence</span><h3>Socratic Assessment</h3><p>Structured dialogue makes understanding visible for faculty review.</p></article>
      <article class="ecosystem-step"><span>Interpretation</span><h3>Critical Listening</h3><p>Claims, reasons, evidence, assumptions, objections, and open questions.</p></article>
      <article class="ecosystem-step"><span>Institutional layer</span><h3>Institutional Pilot</h3><p>Curriculum alignment, provider boundaries, provenance, governance, and human judgment.</p></article>
    </div>`;
  flagshipStack.insertAdjacentElement("afterend", ecosystem);
}

if (projectsSection) {
  const eyebrow = projectsSection.querySelector(":scope > .section-heading .eyebrow");
  const heading = projectsSection.querySelector(":scope > .section-heading h2");
  const lead = projectsSection.querySelector(":scope > .section-lead");
  projectsSection.querySelector(":scope > .section-heading")?.classList.add("remaining-projects-heading");
  if (eyebrow) eyebrow.textContent = "Remaining Projects";
  if (heading) heading.textContent = "Supporting experiments, developer tools, and independent software projects.";
  if (lead) lead.textContent = "These projects extend the broader research program through specialized educational tools, private workspace concepts, development utilities, and consumer-facing experiments.";
  document.getElementById("ecosystem")?.insertAdjacentElement("afterend", projectsSection);
}

const institutionalFeaturedGrid = document.querySelector("#featured-projects .showcase-grid");
if (institutionalFeaturedGrid && !institutionalFeaturedGrid.querySelector('a[href="projects/socratic-institutional-pilot.html"]')) {
  const institutionalCard = document.createElement("a");
  institutionalCard.className = "showcase-card project-card-link private-card";
  institutionalCard.href = "projects/socratic-institutional-pilot.html";
  institutionalCard.innerHTML = `<div aria-hidden="true" class="project-icon-preview"><span>SI</span></div><div><span class="status">Interactive Institutional Demo</span><h3>Socratic Institutional Pilot</h3><p><strong>Curriculum-governed educational intelligence.</strong> An institution-facing demonstration of structured knowledge, dialogue, evidence, governance, and faculty judgment.</p><span class="project-card-category">Institutional Educational AI</span><span class="card-link-text">Explore institutional pilot</span></div>`;
  institutionalFeaturedGrid.appendChild(institutionalCard);
}

const criticalListeningCard = document.querySelector('a[href="projects/critical-listening-assistant.html"]');
if (criticalListeningCard) {
  const status = criticalListeningCard.querySelector(".status");
  const linkText = criticalListeningCard.querySelector(".card-link-text");
  if (status) status.textContent = "Interactive Demo";
  if (linkText) linkText.textContent = "Explore interactive demo";
  addProofBadges(criticalListeningCard, ["Live demo", "Case study", "Accessible interaction"]);
}
addProofBadges(document.querySelector('a[href="projects/socratic-assessment-platform.html"]'), ["Live prototype", "Public repository", "Case study"]);
addProofBadges(document.querySelector('a[href="projects/logos-ai.html"]'), ["Native prototype", "Private architecture", "Case study"]);
addProofBadges(document.querySelector('a[href="projects/logos-learning-academy.html"]'), ["Beta platform", "Product case study"]);

const navResearch = nav?.querySelector('a[href="#research"]');
if (navResearch) navResearch.textContent = "Research Vision";
const navProjects = nav?.querySelector('a[href="#projects"]');
if (navProjects) navProjects.textContent = "More Projects";
if (nav && !nav.querySelector('a[href="#institutional-pilot"]')) {
  const link = document.createElement("a");
  link.href = "#institutional-pilot";
  link.textContent = "Flagship";
  navResearch?.insertAdjacentElement("afterend", link);
}
if (nav && !nav.querySelector('a[href="#ecosystem"]')) {
  const link = document.createElement("a");
  link.href = "#ecosystem";
  link.textContent = "Ecosystem";
  navProjects?.insertAdjacentElement("beforebegin", link);
}

const navLinks = document.querySelectorAll(".nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const revealItems = document.querySelectorAll(".reveal");
const sections = Array.from(document.querySelectorAll("main section[id]"));

const setActiveNavLink = () => {
  const marker = window.scrollY + 140;
  let activeSection = sections[0]?.id;
  sections.forEach((section) => {
    if (section.offsetTop <= marker) activeSection = section.id;
  });
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeSection}`;
    if (isActive) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

setActiveNavLink();
window.addEventListener("scroll", setActiveNavLink, { passive: true });

const lightbox = document.getElementById("projectLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxTriggers = document.querySelectorAll("[data-lightbox-image]");

if (lightbox && lightboxImage && lightboxCaption && lightboxTriggers.length) {
  let activeTrigger = null;
  const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
    if (activeTrigger) {
      activeTrigger.setAttribute("aria-expanded", "false");
      activeTrigger.focus();
      activeTrigger = null;
    }
  };
  const openLightbox = (trigger) => {
    const imageSrc = trigger.getAttribute("data-lightbox-image");
    const caption = trigger.getAttribute("data-lightbox-caption") || "";
    if (!imageSrc) return;
    activeTrigger = trigger;
    lightboxImage.src = imageSrc;
    lightboxImage.alt = caption;
    lightboxCaption.textContent = caption;
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    trigger.setAttribute("aria-expanded", "true");
    lightbox.querySelector(".lightbox-close")?.focus();
  };
  lightboxTriggers.forEach((trigger) => trigger.addEventListener("click", () => openLightbox(trigger)));
  lightbox.addEventListener("click", (event) => {
    if (event.target.closest("[data-lightbox-close='true']")) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
}
