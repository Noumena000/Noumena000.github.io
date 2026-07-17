document.documentElement.classList.add("js");

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

navToggle?.addEventListener("click", () => {
  nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const addPhaseAStyles = () => {
  if (document.getElementById("phase-a-styles")) return;

  const style = document.createElement("style");
  style.id = "phase-a-styles";
  style.textContent = `
    .ecosystem-progression {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 1rem;
      margin-top: 1.25rem;
    }
    .ecosystem-step {
      position: relative;
      border: 1px solid rgba(100, 116, 139, 0.22);
      border-radius: 20px;
      padding: 1.15rem;
      background: rgba(255, 255, 255, 0.58);
    }
    .ecosystem-step span {
      display: block;
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #64748b;
      margin-bottom: 0.55rem;
    }
    .ecosystem-step h3 {
      margin: 0 0 0.5rem;
      font-size: 1.05rem;
    }
    .ecosystem-step p {
      margin: 0;
      color: #475569;
      line-height: 1.55;
      font-size: 0.92rem;
    }
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
    @media (max-width: 980px) {
      .ecosystem-progression { grid-template-columns: 1fr 1fr; }
      .ecosystem-step::after { display: none !important; }
    }
    @media (max-width: 640px) {
      .ecosystem-progression { grid-template-columns: 1fr; }
    }
  `;
  document.head.appendChild(style);
};

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

const criticalListeningCard = document.querySelector('a[href="projects/critical-listening-assistant.html"]');
if (criticalListeningCard) {
  const status = criticalListeningCard.querySelector(".status");
  const linkText = criticalListeningCard.querySelector(".card-link-text");
  if (status) status.textContent = "Interactive Demo";
  if (linkText) linkText.textContent = "Explore interactive demo";
  criticalListeningCard.setAttribute("aria-label", "Explore the Critical Listening Assistant interactive demo");
  addProofBadges(criticalListeningCard, ["Live demo", "Case study", "Accessible interaction"]);
}

const assessmentCard = document.querySelector('a[href="projects/socratic-assessment-platform.html"]');
addProofBadges(assessmentCard, ["Live prototype", "Public repository", "Case study"]);

const logosCard = document.querySelector('a[href="projects/logos-ai.html"]');
addProofBadges(logosCard, ["Native prototype", "Private architecture", "Case study"]);

const learningCard = document.querySelector('a[href="projects/logos-learning-academy.html"]');
addProofBadges(learningCard, ["Beta platform", "Product case study"]);

const projectsSection = document.getElementById("projects");
const featuredGrid = document.querySelector("#featured-projects .showcase-grid");

if (projectsSection && featuredGrid && !featuredGrid.querySelector('a[href="projects/socratic-institutional-pilot.html"]')) {
  addPhaseAStyles();

  const institutionalCard = document.createElement("a");
  institutionalCard.className = "showcase-card project-card-link private-card";
  institutionalCard.href = "projects/socratic-institutional-pilot.html";
  institutionalCard.setAttribute("aria-label", "Explore the Socratic Institutional Pilot interactive demonstration");
  institutionalCard.innerHTML = `
    <div aria-hidden="true" class="project-icon-preview"><span>SI</span></div>
    <div>
      <span class="status">Interactive Institutional Demo</span>
      <h3>Socratic Institutional Pilot</h3>
      <p><strong>Curriculum-governed educational intelligence.</strong> An institution-facing demonstration showing how learning objectives, knowledge packs, structured dialogue, evidence portfolios, approved AI providers, and faculty judgment can work together.</p>
      <span class="project-card-category">Institutional Educational AI</span>
      <div class="project-proof-row"><span>Live pilot</span><span>Architecture</span><span>Public repository</span></div>
      <span class="card-link-text">Explore institutional pilot</span>
    </div>
  `;
  featuredGrid.appendChild(institutionalCard);

  const educationalGrid = document.querySelector("#educational-ai-projects .showcase-grid");
  if (educationalGrid) {
    const compactCard = institutionalCard.cloneNode(true);
    educationalGrid.appendChild(compactCard);
  }
}

const ecosystemMap = document.querySelector(".project-ecosystem-map");
if (ecosystemMap) {
  addPhaseAStyles();
  const intro = ecosystemMap.querySelector(":scope > p");
  if (intro) {
    intro.textContent = "The portfolio follows one research program: philosophical reasoning informs educational intelligence; educational intelligence supports assessment and critical listening; the Institutional Pilot demonstrates how those capabilities can operate within a governed institutional system.";
  }

  const oldLanes = ecosystemMap.querySelector(".ecosystem-lanes");
  if (oldLanes) {
    const progression = document.createElement("div");
    progression.className = "ecosystem-progression";
    progression.setAttribute("aria-label", "Research ecosystem progression");
    progression.innerHTML = `
      <article class="ecosystem-step"><span>Foundation</span><h3>Socratic Reasoning</h3><p>Clarification, evidence, objection, conceptual refinement, and revision.</p></article>
      <article class="ecosystem-step"><span>Learner evidence</span><h3>Socratic Assessment</h3><p>Structured dialogue makes understanding visible for faculty review.</p></article>
      <article class="ecosystem-step"><span>Interpretive support</span><h3>Critical Listening</h3><p>Claims, reasons, evidence, assumptions, objections, and open questions.</p></article>
      <article class="ecosystem-step"><span>Institutional layer</span><h3>Institutional Pilot</h3><p>Curriculum alignment, provider boundaries, provenance, governance, and human judgment.</p></article>
    `;
    oldLanes.replaceWith(progression);
  }
}

const revealItems = document.querySelectorAll(".reveal");
const sections = Array.from(document.querySelectorAll("main section[id]"));

const setActiveNavLink = () => {
  const marker = window.scrollY + 140;

  let activeSection = sections[0]?.id;

  sections.forEach((section) => {
    if (section.offsetTop <= marker) {
      activeSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeSection}`;
    if (isActive) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
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

  lightboxTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => openLightbox(trigger));
  });

  lightbox.addEventListener("click", (event) => {
    const closeTarget = event.target.closest("[data-lightbox-close='true']");
    if (closeTarget) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });
}
