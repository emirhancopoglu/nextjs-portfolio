import ViraGas from "@/assets/viragasnew.png";
import NiksaMetal from "@/assets/niksametalnew.png";
import WalletManagement from "@/assets/walletmanagementnew.png";
import TufisPetHouse from "@/assets/tufispethousenew.png";
import DerinWayHome from "@/assets/derinwayhomenew.png";
import PideVakti from "@/assets/pidetime.png";
import Positivus from "@/assets/positivus.png";
import BlogCustomizer from "@/assets/blogcustomizer.png";

// `type`, `about` and `liveLabel` are i18n keys (see src/i18next.js).
// `checks` are the ✓ items shown in the project terminal panel.
// Optional:
//   ext       file extension shown in the explorer (default "tsx")
//   file      explorer file name override (default "<slug>.<ext>")
//   repo      null → shown as "private"
//   live      null → no live link / button
//   host      URL shown in the preview frame when there is no `live`
//   meta      extra [key, value] lines in the code view
//   cli       terminal command (default: npm run dev + next dev output)
//   preview   "themes" → drawn visual instead of `image`
export const projects = [
  {
    slug: "blog-customizer",
    checks: ["Shopify App Store", "Admin GraphQL", "CSV import / export"],
    name: "Blog Customizer by Byte Apps",
    type: "type_public_app",
    stack: "React Router · Polaris · App Bridge · Admin GraphQL API · Theme App Extensions · Prisma",
    about: "about_blog_customizer",
    live: "https://apps.shopify.com/blog-customizer-by-byte-apps",
    liveLabel: "view_app_store",
    repo: null,
    cli: "shopify app dev",
    image: BlogCustomizer,
  },
  {
    slug: "shopify-themes",
    ext: "liquid",
    file: "themes.liquid",
    checks: ["150+ stores", "custom sections", "responsive"],
    name: "Shopify Themes",
    type: "type_client_work",
    stack: "Liquid · Online Store 2.0 · JavaScript · Shopify CLI",
    about: "about_shopify_themes",
    live: null,
    host: "*.myshopify.com",
    repo: null,
    meta: [["stores", "150+"]],
    cli: "shopify theme dev",
    preview: "themes",
  },
  {
    slug: "vira-gas",
    checks: ["responsive", "TR · EN"],
    name: "Vira Gas Springs",
    type: "type_freelance",
    stack: "React · Tailwind CSS · Framer Motion",
    about: "about_vira_gas",
    live: "https://www.viragas.com/",
    repo: "https://github.com/Dev-Capella/viragas",
    image: ViraGas,
  },
  {
    slug: "niksa-metal",
    checks: ["responsive", "Ant Design gallery"],
    name: "Niksa Metal",
    type: "type_freelance",
    stack: "React · Tailwind CSS · Ant Design",
    about: "about_niksa_metal",
    live: "https://niksametal.com/",
    repo: "https://github.com/Dev-Capella/niksa",
    image: NiksaMetal,
  },
  {
    slug: "wallet",
    checks: ["responsive", "localStorage", "dark mode"],
    name: "Wallet Management",
    type: "type_personal",
    stack: "Next.js · ChartJS · MUI",
    about: "about_wallet",
    live: "https://walletmanagement.vercel.app/",
    repo: "https://github.com/emirhancopoglu/wallet-management",
    image: WalletManagement,
  },
  {
    slug: "tufis-pet-house",
    checks: ["responsive", "i18n"],
    name: "Tufi's Pet House",
    type: "type_freelance",
    stack: "React · Tailwind CSS · Framer Motion",
    about: "about_tufis_pet_house",
    live: "https://tufispethouse.com/",
    repo: "https://github.com/Dev-Capella/petweb",
    image: TufisPetHouse,
  },
  {
    slug: "derin-way-home",
    checks: ["responsive", "i18n"],
    name: "Derin Way Home",
    type: "type_freelance",
    stack: "React · Tailwind CSS · Framer Motion",
    about: "about_derin_way_home",
    live: "https://derinwayhomes.com/",
    repo: "https://github.com/Dev-Capella/derinwayhome",
    image: DerinWayHome,
  },
  {
    slug: "pide-vakti",
    checks: ["API", "dark mode"],
    name: "Pide Vakti",
    type: "type_personal",
    stack: "Next.js · Shadcn UI · Next-Themes",
    about: "about_pide_vakti",
    live: "https://pidetime.vercel.app/ara",
    repo: "https://github.com/emirhancopoglu/pide-time",
    image: PideVakti,
  },
  {
    slug: "positivus",
    checks: ["responsive", "pixel perfect"],
    name: "Positivus Landing Page",
    type: "type_personal",
    stack: "React · Tailwind CSS · Framer Motion",
    about: "about_positivus",
    live: "https://positivuslabs.vercel.app/",
    repo: "https://github.com/emirhancopoglu/positivus-landing",
    image: Positivus,
  },
];

export const projectFile = (project) => project.file || `${project.slug}.${project.ext || "tsx"}`;

export const getProject = (slug) => projects.find((p) => p.slug === slug);

export const displayUrl = (url) =>
  url.replace(/^https?:\/\//, "").replace(/\/$/, "");
