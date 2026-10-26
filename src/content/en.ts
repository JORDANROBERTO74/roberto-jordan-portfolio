import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "Roberto Jordán — Frontend Developer & Designer",
    description:
      "Portfolio of Roberto Jordán, a frontend developer and UI/UX designer in Santa Cruz de la Sierra, Bolivia. Selected work, case studies and contact.",
  },
  home: {
    eyebrow: "Portfolio — 2026",
    title: "Design and code, held to the same standard.",
    lead: "I'm Roberto Jordán, a frontend developer and UI/UX designer in Santa Cruz de la Sierra, Bolivia. I design and build websites and e-commerce experiences with React, Next.js and Tailwind CSS.",
    facts: [
      { label: "Based in", value: "Santa Cruz de la Sierra, Bolivia" },
      { label: "Practice", value: "Frontend & UI/UX" },
      { label: "Availability", value: "Open to collaborations" },
    ],
    primaryCta: "View case studies",
    secondaryCta: "About me",
    work: {
      label: "01 — Selected work",
      title: "Three projects, three problems.",
      lead: "A closer look at the build decisions behind a gym landing page, a computer store and a security company site.",
      cta: "View all projects",
    },
    approach: {
      label: "02 — Method",
      title: "How I work",
      lead: "A short, explicit process with no decorative steps.",
      items: [
        {
          index: "01",
          title: "Read the problem",
          body: "Before a layout, I write down who the page is for, what it must make possible and what can be removed.",
        },
        {
          index: "02",
          title: "Structure",
          body: "Content order, navigation and states are settled in wireframes. Visual decisions come after the logic holds.",
        },
        {
          index: "03",
          title: "Build",
          body: "Typed components, semantic HTML, keyboard support and responsive layouts. A dependency has to earn its place.",
        },
        {
          index: "04",
          title: "Check and ship",
          body: "Build, accessibility and performance checks, a cross-browser pass, then deploy. The handover includes the trade-offs.",
        },
      ],
    },
    stack: {
      label: "03 — Tools",
      title: "What I work with",
      lead: "Tools I use, not a wall of logos.",
      groups: [
        {
          name: "Design",
          items: ["Figma", "Photoshop", "Illustrator", "After Effects"],
        },
        {
          name: "Frontend",
          items: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Vue.js",
          ],
        },
        {
          name: "Content & integrations",
          items: ["Strapi", "GraphQL", "Cloudinary", "Google Sheets", "MySQL"],
        },
        {
          name: "Workflow",
          items: ["Git", "GitHub", "Vercel", "Jest", "Husky", "Jira", "Slack"],
        },
      ],
    },
    about: {
      label: "04 — Profile",
      title: "Between the design and the browser.",
      lead: "I work on landing pages, business sites and e-commerce experiences. I design the structure and the interface, then build it.",
      body: [
        "My work sits between Figma and the browser: content structure, interface design, then semantic HTML, typed components and responsive CSS.",
        "I care about how a page behaves when the connection is slow, when the keyboard is the only input, and when the content grows beyond the first version.",
      ],
      cta: "More about me",
    },
    contact: {
      label: "05 — Contact",
      title: "Tell me what you're building.",
      body: "For projects, collaborations or a specific question, write to me.",
      cta: "Get in touch",
    },
  },
  about: {
    eyebrow: "About",
    title: "A designer who builds, a developer who draws.",
    lead: "I'm a frontend developer and UI/UX designer based in Santa Cruz de la Sierra, Bolivia.",
    body: [
      "I design and build landing pages, business sites and e-commerce experiences. My work starts with structure — who the page is for, what it has to make possible, what order the content needs — and ends in the browser.",
      "I work with React, Next.js and Tailwind CSS, with attention to semantics, keyboard access and how a page behaves on a slow connection. In design, I use Figma for interface and layout work, and Illustrator, Photoshop and After Effects when the project needs assets.",
      "I don't claim experience I can't show. The projects on this site are public: each one has a live demo, and most have public source code. The case studies explain what was built and, where it matters, what the project does not include.",
    ],
    bioLabel: "Profile",
    facts: [
      { label: "Based in", value: "Santa Cruz de la Sierra, Bolivia" },
      { label: "Practice", value: "Frontend development & UI/UX design" },
      { label: "Focus", value: "Landing pages, business sites, e-commerce" },
      { label: "Site languages", value: "English and Spanish" },
    ],
    process: {
      label: "Method",
      title: "How I work",
      lead: "The process stays the same whether the project is one page or ten.",
      items: [
        {
          index: "01",
          title: "Read the problem",
          body: "Who is the page for, what must it make possible, and what can be removed before anything is drawn.",
        },
        {
          index: "02",
          title: "Structure",
          body: "Content order, navigation and states in wireframes. Visual language comes after the logic holds.",
        },
        {
          index: "03",
          title: "Build",
          body: "Semantic HTML, typed components, responsive CSS and keyboard support. Checks run before the handover.",
        },
        {
          index: "04",
          title: "Ship",
          body: "Deploy, verify the live URL, and document the decisions and the trade-offs that remain.",
        },
      ],
    },
    capabilities: {
      label: "Capabilities",
      title: "Tools and technologies",
      lead: "The stack I use in current work.",
      groups: [
        {
          name: "Design",
          items: [
            "UI/UX design",
            "Web and mobile layout",
            "Branding and logo design",
            "Figma",
            "Photoshop",
            "Illustrator",
            "After Effects",
          ],
        },
        {
          name: "Frontend",
          items: [
            "HTML & CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Vue.js",
            "Tailwind CSS",
            "Responsive design",
          ],
        },
        {
          name: "Content & integrations",
          items: [
            "API integration",
            "Strapi",
            "GraphQL",
            "Cloudinary",
            "Google Sheets",
            "MySQL",
            "WordPress",
          ],
        },
        {
          name: "Workflow",
          items: ["Git", "GitHub", "Vercel", "Jest", "Husky", "Jira", "Slack"],
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Have a project in mind?",
      body: "Tell me what you need and I'll reply with an honest answer about scope and fit.",
      cta: "Start a conversation",
    },
  },
  portfolio: {
    eyebrow: "Archive",
    title: "Seven public builds.",
    lead: "Every project here has a live demo and, where possible, public source. Three include a case study.",
    selectedLabel: "Case studies",
    archiveLabel: "Other projects",
    archiveTitle: "More work",
    archiveLead:
      "Landing pages and small business sites built with HTML, CSS and JavaScript.",
  },
  work: {
    eyebrow: "Case study",
    backLabel: "All projects",
    readLabel: "Read case study",
    role: "Design and frontend development",
    metaLabels: {
      role: "Role",
      year: "Year",
      type: "Type",
      stack: "Stack",
      demo: "Live demo",
      code: "Source code",
    },
    sections: {
      context: "Context",
      challenge: "Challenge",
      approach: "Approach",
      build: "Build",
      outcome: "Outcome",
      scopeNote: "Scope note",
    },
    nextLabel: "Next case study",
    contact: {
      title: "Building something similar?",
      body: "I can help with the structure, the interface and the frontend build.",
      cta: "Get in touch",
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell me what you're building.",
    lead: "For projects, collaborations or a specific question, write to me. I read every message.",
    emailLabel: "Email",
    socialLabel: "Elsewhere",
    note: "The form sends through EmailJS. Your details are only used to reply.",
    formTitle: "Send a message",
  },
  notFound: {
    title: "This page doesn't exist.",
    body: "The address may be wrong, or the page may have moved. The work is still where it was.",
    cta: "Back to home",
  },
  footer: {
    note: "Designed and built by Roberto Jordán. Set in Newsreader, Inter and JetBrains Mono.",
  },
  projects: [
    {
      slug: "ubicar",
      name: "UBICAR",
      tagline: "A security company's six-page corporate site.",
      summary:
        "Corporate site for a Bolivian security company: satellite tracking, fleet logistics, property monitoring and physical response.",
      year: "2022",
      type: "Corporate site",
      stack: ["HTML", "CSS", "JavaScript"],
      image: "/img/projects/project5.png",
      imageAlt: "UBICAR corporate site on a laptop",
      demo: "https://jordanroberto74.github.io/ubicar/",
      code: "https://github.com/jordanroberto74/ubicar",
      caseStudy: {
        context:
          "UBICAR is a security company operating in Bolivia since 2002. Its services cover satellite vehicle tracking, fleet logistics, property monitoring and physical response.",
        challenge:
          "Bring four services, a 21-part product catalogue, a branch directory and a quote request into one corporate site that reads as credible at a glance — without a framework, a build step or a CMS.",
        approach:
          "A shared visual system: black, red and white, Archivo for headings, IBM Plex Sans for text and IBM Plex Mono for technical labels. Six pages share the same header, footer and rhythm: dark hero, white content, paper section, dark close. The home follows an operations-panel logic — grid, coordinates, numbering.",
        build:
          "Hand-written HTML, CSS and JavaScript. A reusable mobile menu with a focus trap, scroll reveal, accessible forms and a branch directory linked to Google Maps. No dependencies beyond the fonts.",
        outcome:
          "Six pages shipped — home, about, services, products, branches and contact — and published on GitHub Pages. The site documents the full service range and the 21-part catalogue in one place.",
        scopeNote:
          "Static site: content changes are made in the HTML, not through an admin panel. No analytics or performance data is published for this project.",
      },
    },
    {
      slug: "titan-force-gym",
      name: "Titan Force Gym",
      tagline: "A one-page gym site that has to sell the whole gym.",
      summary:
        "Landing page for a fitness centre focused on strength training, bodybuilding and functional work.",
      year: "2025",
      type: "Landing page",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Swiper"],
      image: "/img/projects/project6.png",
      imageAlt: "Titan Force Gym landing page on a laptop",
      demo: "https://titan-forge-gym.vercel.app/",
      code: "https://github.com/jordanroberto74/titan_force_gym",
      caseStudy: {
        context:
          "Titan Force Gym is a landing page for a fitness centre focused on strength training, bodybuilding and functional work.",
        challenge:
          "Fit the whole offer — services, plans, trainers, testimonials and FAQs — into one page that keeps its energy without becoming a wall of sections.",
        approach:
          "A single narrative ordered like a sales conversation: promise, services, plans, people, proof, objections, close. Each section is a reusable component with its own card pattern, so the page can grow without new one-off markup.",
        build:
          "Next.js App Router, TypeScript and Tailwind CSS. Swiper for the trainer and testimonial carousels; react-icons for the icon set. Shared heading, container, tag and button components; a skip link and a keyboard-accessible mobile menu.",
        outcome:
          "A responsive one-page site with eight sections, deployed on Vercel. The repository is public.",
        scopeNote:
          "Plans and testimonials are presentation content for the demo, not live commercial offers. No traffic or conversion data is published.",
      },
    },
    {
      slug: "pc-mania",
      name: "PC Mania",
      tagline: "A storefront that hands the order to WhatsApp.",
      summary:
        "E-commerce demo for computer accessories, built around a local product catalogue and a client-side cart.",
      year: "2024",
      type: "E-commerce",
      stack: ["Next.js", "React", "Tailwind CSS", "Radix UI"],
      image: "/img/projects/project7.png",
      imageAlt: "PC Mania storefront on a laptop",
      demo: "https://pcmania-eight.vercel.app/",
      code: "https://github.com/jordanroberto74/pc_mania",
      caseStudy: {
        context:
          "PC Mania is an e-commerce demo for computer accessories, built around a local product catalogue.",
        challenge:
          "Show a complete purchase path — browse, inspect, add to cart, review, order — without running a payment backend or a database.",
        approach:
          "A storefront with a product grid and detail pages, a cart context shared across routes, quantity controls and a checkout that turns the cart into a formatted order message. The handoff happens in WhatsApp, where the real conversation with the store would start.",
        build:
          "Next.js and React with Tailwind CSS and Radix-based UI primitives. Local product data, client-side cart state and a WhatsApp deep link that includes each item, quantities, subtotal, tax line and total in bolivianos.",
        outcome:
          "A working storefront demo with catalogue, product pages, cart and order handoff, deployed on Vercel.",
        scopeNote:
          "The cart lives in memory and resets on reload; there is no payment processing, stock control or admin panel. Product data and prices are fixtures.",
      },
    },
    {
      slug: "electrofix-henry",
      name: "ElectroFix — Henry",
      tagline: "A repair technician's first landing page.",
      summary:
        "Landing page for an electronics repair technician, with services, experience and a direct contact path.",
      year: "2023",
      type: "Landing page",
      stack: ["HTML", "CSS", "JavaScript"],
      image: "/img/projects/project1.png",
      imageAlt: "ElectroFix landing page on a laptop",
      demo: "https://jordanroberto74.github.io/henry-tecnico/",
      code: "https://github.com/JORDANROBERTO74/henry-tecnico",
    },
    {
      slug: "the-gym",
      name: "THE GYM",
      tagline: "A bold landing page for a local fitness centre.",
      summary:
        "Landing page for a fitness centre: facilities, plans, trainers and schedules, with scroll animations and a responsive layout.",
      year: "2023",
      type: "Landing page",
      stack: ["HTML", "CSS", "JavaScript"],
      image: "/img/projects/project2.png",
      imageAlt: "THE GYM landing page on a laptop",
      demo: "https://jordanroberto74.github.io/the_gym/",
      code: "https://github.com/jordanroberto74/the_gym",
    },
    {
      slug: "q-rico",
      name: "Q'RICO",
      tagline: "A restaurant site built around the menu.",
      summary:
        "Restaurant landing page with menu, photo gallery, testimonials and location, built in vanilla HTML, CSS and JavaScript.",
      year: "2023",
      type: "Landing page",
      stack: ["HTML", "CSS", "JavaScript"],
      image: "/img/projects/project3.png",
      imageAlt: "Q'RICO restaurant landing page on a laptop",
      demo: "https://jordanroberto74.github.io/q-rico/",
      code: "https://github.com/jordanroberto74/q-rico",
    },
    {
      slug: "christian-garcia",
      name: "Christian García",
      tagline: "A restrained site for a legal practice.",
      summary:
        "Landing page for a lawyer: areas of practice, biography and a consultation contact path.",
      year: "2023",
      type: "Landing page",
      stack: ["HTML", "CSS", "JavaScript"],
      image: "/img/projects/project4.png",
      imageAlt: "Christian García landing page on a laptop",
      demo: "https://jordanroberto74.github.io/christian-garcia-abg/",
      code: "https://github.com/jordanroberto74/christian-garcia-abg",
    },
  ],
};
