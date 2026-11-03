export const profile = {
  name: "Emirhan Çöpoğlu",
  email: "copogluemirhan@outlook.com",
  linkedin: "https://www.linkedin.com/in/emirhancopoglu/",
  github: "https://github.com/emirhancopoglu",
  // Direct download (Drive serves it as an attachment instead of the viewer).
  resume:
    "https://drive.google.com/uc?export=download&id=1SrFLH4j94ztTaU8QbaNFj76ClyoiRvKS",
};

// Shown on the stack.json page.
export const stack = {
  languages: ["HTML", "CSS", "JavaScript"],
  frameworks: ["ReactJS", "Liquid"],
  shopify: [
    "Shopify Admin API",
    "Polaris",
    "App Bridge",
    "Admin GraphQL API",
    "Theme App Extensions",
    "Prisma",
  ],
  styling: ["Tailwind CSS", "Bootstrap"],
  tools: ["Git", "GitHub", "Bitbucket"],
};

// README stack rows. `label` is an i18n key, `tone` picks the chip color.
export const stackGroups = [
  {
    label: "stack_shopify",
    tone: "shopify",
    items: [
      "Liquid",
      "Shopify Admin API",
      "Polaris",
      "App Bridge",
      "Admin GraphQL API",
      "Theme App Extensions",
      "Prisma",
    ],
  },
  {
    label: "stack_frontend",
    tone: "frontend",
    items: ["ReactJS", "JavaScript", "HTML/CSS", "Tailwind", "Bootstrap"],
  },
  { label: "stack_tools", tone: "tools", items: ["Git", "GitHub", "Bitbucket"] },
];
