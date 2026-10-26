import type { Content } from "./types";

export const es: Content = {
  meta: {
    title: "Roberto Jordán — Desarrollador Frontend y Diseñador",
    description:
      "Portafolio de Roberto Jordán, desarrollador frontend y diseñador UI/UX en Santa Cruz de la Sierra, Bolivia. Trabajo seleccionado, casos de estudio y contacto.",
  },
  home: {
    eyebrow: "Portafolio — 2026",
    title: "Diseño y código, con el mismo estándar.",
    lead: "Soy Roberto Jordán, desarrollador frontend y diseñador UI/UX en Santa Cruz de la Sierra, Bolivia. Diseño y construyo sitios y experiencias de e-commerce con React, Next.js y Tailwind CSS.",
    facts: [
      { label: "Base", value: "Santa Cruz de la Sierra, Bolivia" },
      { label: "Práctica", value: "Frontend y UI/UX" },
      { label: "Disponibilidad", value: "Abierto a colaboraciones" },
    ],
    primaryCta: "Ver casos de estudio",
    secondaryCta: "Sobre mí",
    work: {
      label: "01 — Trabajo seleccionado",
      title: "Tres proyectos, tres problemas.",
      lead: "Una mirada a las decisiones de construcción detrás de una landing de gimnasio, una tienda de computadoras y el sitio de una empresa de seguridad.",
      cta: "Ver todos los proyectos",
    },
    approach: {
      label: "02 — Método",
      title: "Cómo trabajo",
      lead: "Un proceso corto, explícito y sin pasos decorativos.",
      items: [
        {
          index: "01",
          title: "Leer el problema",
          body: "Antes de una maqueta, escribo para quién es la página, qué tiene que hacer posible y qué se puede quitar.",
        },
        {
          index: "02",
          title: "Estructurar",
          body: "El orden del contenido, la navegación y los estados se resuelven en wireframes. Lo visual llega cuando la lógica se sostiene.",
        },
        {
          index: "03",
          title: "Construir",
          body: "Componentes tipados, HTML semántico, soporte de teclado y layouts responsivos. Una dependencia tiene que ganarse su lugar.",
        },
        {
          index: "04",
          title: "Verificar y publicar",
          body: "Build, revisiones de accesibilidad y rendimiento, una pasada por navegadores y el deploy. La entrega incluye las decisiones y sus límites.",
        },
      ],
    },
    stack: {
      label: "03 — Herramientas",
      title: "Con qué trabajo",
      lead: "Herramientas que uso, no una pared de logos.",
      groups: [
        {
          name: "Diseño",
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
          name: "Contenido e integraciones",
          items: ["Strapi", "GraphQL", "Cloudinary", "Google Sheets", "MySQL"],
        },
        {
          name: "Flujo de trabajo",
          items: ["Git", "GitHub", "Vercel", "Jest", "Husky", "Jira", "Slack"],
        },
      ],
    },
    about: {
      label: "04 — Perfil",
      title: "Entre el diseño y el navegador.",
      lead: "Trabajo en landing pages, sitios de negocio y experiencias de e-commerce. Diseño la estructura y la interfaz, y después la construyo.",
      body: [
        "Mi trabajo está entre Figma y el navegador: estructura de contenido, diseño de interfaz y luego HTML semántico, componentes tipados y CSS responsivo.",
        "Me importa cómo se comporta una página cuando la conexión es lenta, cuando el teclado es la única entrada y cuando el contenido crece más allá de la primera versión.",
      ],
      cta: "Más sobre mí",
    },
    contact: {
      label: "05 — Contacto",
      title: "Cuéntame qué estás construyendo.",
      body: "Para proyectos, colaboraciones o una consulta puntual, escríbeme.",
      cta: "Hablemos",
    },
  },
  about: {
    eyebrow: "Sobre mí",
    title: "Un diseñador que construye, un desarrollador que dibuja.",
    lead: "Soy desarrollador frontend y diseñador UI/UX, con base en Santa Cruz de la Sierra, Bolivia.",
    body: [
      "Diseño y construyo landing pages, sitios de negocio y experiencias de e-commerce. Mi trabajo empieza por la estructura — para quién es la página, qué tiene que hacer posible, en qué orden va el contenido — y termina en el navegador.",
      "Trabajo con React, Next.js y Tailwind CSS, con atención al HTML semántico, al acceso por teclado y al comportamiento en conexiones lentas. En diseño uso Figma para interfaz y layout, e Illustrator, Photoshop y After Effects cuando el proyecto necesita piezas gráficas.",
      "No reclamo experiencia que no pueda mostrar. Los proyectos de este sitio son públicos: cada uno tiene una demo en vivo y la mayoría tiene código abierto. Los casos de estudio explican qué se construyó y, cuando importa, qué no incluye el proyecto.",
    ],
    bioLabel: "Perfil",
    facts: [
      { label: "Base", value: "Santa Cruz de la Sierra, Bolivia" },
      { label: "Práctica", value: "Desarrollo frontend y diseño UI/UX" },
      { label: "Enfoque", value: "Landing pages, sitios de negocio, e-commerce" },
      { label: "Idiomas del sitio", value: "Inglés y español" },
    ],
    process: {
      label: "Método",
      title: "Cómo trabajo",
      lead: "El proceso es el mismo para una página o para diez.",
      items: [
        {
          index: "01",
          title: "Leer el problema",
          body: "Para quién es la página, qué tiene que hacer posible y qué se puede quitar antes de dibujar nada.",
        },
        {
          index: "02",
          title: "Estructurar",
          body: "Orden del contenido, navegación y estados en wireframes. El lenguaje visual llega cuando la lógica se sostiene.",
        },
        {
          index: "03",
          title: "Construir",
          body: "HTML semántico, componentes tipados, CSS responsivo y soporte de teclado. Las revisiones van antes de la entrega.",
        },
        {
          index: "04",
          title: "Publicar",
          body: "Deploy, verificación de la URL en vivo y documentación de las decisiones y los límites que quedan.",
        },
      ],
    },
    capabilities: {
      label: "Capacidades",
      title: "Herramientas y tecnologías",
      lead: "El stack que uso en el trabajo actual.",
      groups: [
        {
          name: "Diseño",
          items: [
            "Diseño UI/UX",
            "Layout web y móvil",
            "Branding y diseño de logo",
            "Figma",
            "Photoshop",
            "Illustrator",
            "After Effects",
          ],
        },
        {
          name: "Frontend",
          items: [
            "HTML y CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Vue.js",
            "Tailwind CSS",
            "Diseño responsivo",
          ],
        },
        {
          name: "Contenido e integraciones",
          items: [
            "Integración de APIs",
            "Strapi",
            "GraphQL",
            "Cloudinary",
            "Google Sheets",
            "MySQL",
            "WordPress",
          ],
        },
        {
          name: "Flujo de trabajo",
          items: ["Git", "GitHub", "Vercel", "Jest", "Husky", "Jira", "Slack"],
        },
      ],
    },
    contact: {
      label: "Contacto",
      title: "¿Tienes un proyecto en mente?",
      body: "Cuéntame qué necesitas y te respondo con una respuesta honesta sobre alcance y encaje.",
      cta: "Iniciar una conversación",
    },
  },
  portfolio: {
    eyebrow: "Archivo",
    title: "Siete proyectos públicos.",
    lead: "Todos los proyectos tienen una demo en vivo y, cuando es posible, código abierto. Tres incluyen un caso de estudio.",
    selectedLabel: "Casos de estudio",
    archiveLabel: "Otros proyectos",
    archiveTitle: "Más trabajo",
    archiveLead:
      "Landing pages y sitios de negocio construidos con HTML, CSS y JavaScript.",
  },
  work: {
    eyebrow: "Caso de estudio",
    backLabel: "Todos los proyectos",
    readLabel: "Leer el caso",
    role: "Diseño y desarrollo frontend",
    metaLabels: {
      role: "Rol",
      year: "Año",
      type: "Tipo",
      stack: "Stack",
      demo: "Demo en vivo",
      code: "Código fuente",
    },
    sections: {
      context: "Contexto",
      challenge: "Reto",
      approach: "Enfoque",
      build: "Construcción",
      outcome: "Resultado",
      scopeNote: "Nota de alcance",
    },
    nextLabel: "Siguiente caso",
    contact: {
      title: "¿Estás construyendo algo parecido?",
      body: "Puedo ayudarte con la estructura, la interfaz y el desarrollo frontend.",
      cta: "Hablemos",
    },
  },
  contact: {
    eyebrow: "Contacto",
    title: "Cuéntame qué estás construyendo.",
    lead: "Para proyectos, colaboraciones o una consulta puntual, escríbeme. Leo todos los mensajes.",
    emailLabel: "Correo",
    socialLabel: "En otros sitios",
    note: "El formulario envía a través de EmailJS. Tus datos solo se usan para responder.",
    formTitle: "Enviar un mensaje",
  },
  notFound: {
    title: "Esta página no existe.",
    body: "La dirección puede estar mal o la página puede haberse movido. El trabajo sigue donde estaba.",
    cta: "Volver al inicio",
  },
  footer: {
    note: "Diseñado y construido por Roberto Jordán. Tipografías: Newsreader, Inter y JetBrains Mono.",
  },
  projects: [
    {
      slug: "ubicar",
      name: "UBICAR",
      tagline: "El sitio corporativo de seis páginas de una empresa de seguridad.",
      summary:
        "Sitio corporativo de una empresa boliviana de seguridad: rastreo satelital, logística de flotas, monitoreo de propiedades y respuesta física.",
      year: "2022",
      type: "Sitio corporativo",
      stack: ["HTML", "CSS", "JavaScript"],
      image: "/img/projects/project5.png",
      imageAlt: "Sitio corporativo de UBICAR en una laptop",
      demo: "https://jordanroberto74.github.io/ubicar/",
      code: "https://github.com/jordanroberto74/ubicar",
      caseStudy: {
        context:
          "UBICAR es una empresa de seguridad que opera en Bolivia desde 2002. Sus servicios cubren rastreo satelital vehicular, logística de flotas, monitoreo de propiedades y respuesta física.",
        challenge:
          "Reunir cuatro servicios, un catálogo de 21 piezas, un directorio de sucursales y una solicitud de cotización en un sitio corporativo que se lea creíble de un vistazo, sin framework, sin build y sin CMS.",
        approach:
          "Un sistema visual compartido: negro, rojo y blanco; Archivo para títulos, IBM Plex Sans para texto e IBM Plex Mono para etiquetas técnicas. Seis páginas comparten header, footer y ritmo: hero oscuro, contenido blanco, sección en papel y cierre oscuro. El home sigue una lógica de panel de operaciones: retícula, coordenadas, numeración.",
        build:
          "HTML, CSS y JavaScript escritos a mano. Un menú móvil reutilizable con foco atrapado, reveal al hacer scroll, formularios accesibles y un directorio de sucursales enlazado a Google Maps. Sin dependencias más allá de las tipografías.",
        outcome:
          "Seis páginas publicadas — inicio, nosotros, servicios, productos, sucursales y contacto — y desplegadas en GitHub Pages. El sitio documenta toda la gama de servicios y el catálogo de 21 piezas en un solo lugar.",
        scopeNote:
          "Sitio estático: los cambios de contenido se hacen en el HTML, no desde un panel de administración. No hay analítica ni datos de rendimiento publicados para este proyecto.",
      },
    },
    {
      slug: "titan-force-gym",
      name: "Titan Force Gym",
      tagline: "Una página que tiene que vender todo el gimnasio.",
      summary:
        "Landing page para un centro de fitness enfocado en fuerza, culturismo y trabajo funcional.",
      year: "2025",
      type: "Landing page",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Swiper"],
      image: "/img/projects/project6.png",
      imageAlt: "Landing page de Titan Force Gym en una laptop",
      demo: "https://titan-forge-gym.vercel.app/",
      code: "https://github.com/jordanroberto74/titan_force_gym",
      caseStudy: {
        context:
          "Titan Force Gym es una landing page para un centro de fitness enfocado en entrenamiento de fuerza, culturismo y trabajo funcional.",
        challenge:
          "Meter toda la oferta — servicios, planes, entrenadores, testimonios y preguntas frecuentes — en una sola página que mantenga la energía sin convertirse en una pared de secciones.",
        approach:
          "Una narrativa única ordenada como una conversación de venta: promesa, servicios, planes, personas, prueba, objeciones, cierre. Cada sección es un componente reutilizable con su propio patrón de tarjeta, para que la página pueda crecer sin sumar markup único.",
        build:
          "Next.js App Router, TypeScript y Tailwind CSS. Swiper para los carruseles de entrenadores y testimonios; react-icons para el set de iconos. Componentes compartidos de título, contenedor, etiqueta y botón; skip link y menú móvil accesible por teclado.",
        outcome:
          "Un sitio de una página, responsivo y con ocho secciones, desplegado en Vercel. El repositorio es público.",
        scopeNote:
          "Los planes y testimonios son contenido de presentación para la demo, no ofertas comerciales vigentes. No hay datos de tráfico o conversión publicados.",
      },
    },
    {
      slug: "pc-mania",
      name: "PC Mania",
      tagline: "Una tienda que entrega el pedido por WhatsApp.",
      summary:
        "Demo de e-commerce de accesorios de computadora, construida alrededor de un catálogo local y un carrito en el cliente.",
      year: "2024",
      type: "E-commerce",
      stack: ["Next.js", "React", "Tailwind CSS", "Radix UI"],
      image: "/img/projects/project7.png",
      imageAlt: "Tienda de PC Mania en una laptop",
      demo: "https://pcmania-eight.vercel.app/",
      code: "https://github.com/jordanroberto74/pc_mania",
      caseStudy: {
        context:
          "PC Mania es una demo de e-commerce de accesorios de computadora, construida alrededor de un catálogo local de productos.",
        challenge:
          "Mostrar un recorrido de compra completo — explorar, revisar, agregar al carrito, comprobar, pedir — sin backend de pagos ni base de datos.",
        approach:
          "Una tienda con grilla de productos y páginas de detalle, un contexto de carrito compartido entre rutas, controles de cantidad y un checkout que convierte el carrito en un mensaje de pedido formateado. La entrega ocurre en WhatsApp, donde empezaría la conversación real con la tienda.",
        build:
          "Next.js y React con Tailwind CSS y primitivas de UI basadas en Radix. Datos locales de producto, estado del carrito en el cliente y un enlace profundo de WhatsApp que incluye cada ítem, cantidades, subtotal, línea de impuestos y total en bolivianos.",
        outcome:
          "Una demo funcional de tienda con catálogo, páginas de producto, carrito y entrega del pedido, desplegada en Vercel.",
        scopeNote:
          "El carrito vive en memoria y se reinicia al recargar; no hay procesamiento de pagos, control de stock ni panel de administración. Los datos y precios de producto son de prueba.",
      },
    },
    {
      slug: "electrofix-henry",
      name: "ElectroFix — Henry",
      tagline: "La primera landing page de un técnico en reparaciones.",
      summary:
        "Landing page para un técnico en reparación de electrónica, con servicios, experiencia y un camino directo al contacto.",
      year: "2023",
      type: "Landing page",
      stack: ["HTML", "CSS", "JavaScript"],
      image: "/img/projects/project1.png",
      imageAlt: "Landing page de ElectroFix en una laptop",
      demo: "https://jordanroberto74.github.io/henry-tecnico/",
      code: "https://github.com/JORDANROBERTO74/henry-tecnico",
    },
    {
      slug: "the-gym",
      name: "THE GYM",
      tagline: "Una landing page con energía para un gimnasio local.",
      summary:
        "Landing page para un centro de fitness: instalaciones, planes, entrenadores y horarios, con animaciones al scroll y layout responsivo.",
      year: "2023",
      type: "Landing page",
      stack: ["HTML", "CSS", "JavaScript"],
      image: "/img/projects/project2.png",
      imageAlt: "Landing page de THE GYM en una laptop",
      demo: "https://jordanroberto74.github.io/the_gym/",
      code: "https://github.com/jordanroberto74/the_gym",
    },
    {
      slug: "q-rico",
      name: "Q'RICO",
      tagline: "Un sitio de restaurante construido alrededor del menú.",
      summary:
        "Landing page de restaurante con menú, galería de fotos, testimonios y ubicación, en HTML, CSS y JavaScript.",
      year: "2023",
      type: "Landing page",
      stack: ["HTML", "CSS", "JavaScript"],
      image: "/img/projects/project3.png",
      imageAlt: "Landing page de Q'RICO en una laptop",
      demo: "https://jordanroberto74.github.io/q-rico/",
      code: "https://github.com/jordanroberto74/q-rico",
    },
    {
      slug: "christian-garcia",
      name: "Christian García",
      tagline: "Un sitio sobrio para un estudio jurídico.",
      summary:
        "Landing page para un abogado: áreas de práctica, biografía y un camino de contacto para consultas.",
      year: "2023",
      type: "Landing page",
      stack: ["HTML", "CSS", "JavaScript"],
      image: "/img/projects/project4.png",
      imageAlt: "Landing page de Christian García en una laptop",
      demo: "https://jordanroberto74.github.io/christian-garcia-abg/",
      code: "https://github.com/jordanroberto74/christian-garcia-abg",
    },
  ],
};
