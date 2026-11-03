import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      explorer: "EXPLORER",
      open_explorer: "Dosya gezginini aç",
      close_explorer: "Dosya gezginini kapat",
      switch_language: "Dili değiştir",
      toggle_theme: "Temayı değiştir",
      resume_file: "ozgecmis.pdf",

      nav_readme: "readme",
      nav_projects: "projects",
      nav_stack: "stack",
      nav_contact: "contact",

      readme_bio:
        "ReactJS ve Shopify geliştirmede deneyimli bir Front-End Developer'ım. SPA geliştirme, Shopify tema özelleştirme ve custom / public uygulamalar üzerine odaklanıyorum.",
      focus_theme: "Tema özelleştirme",
      cta_label: "Birlikte çalışalım",
      stack_shopify: "shopify",
      stack_frontend: "frontend",
      stack_tools: "araçlar",
      send_email: "E-posta gönder",

      projects_cmd: "$ ls ./projects",
      projects_count: "> {{count}} proje · shopify + freelance + kişisel",

      type_freelance: "Freelance",
      type_personal: "Kişisel",
      type_public_app: "Public App",
      type_client_work: "Müşteri projeleri",
      view_app_store: "App Store’da gör",
      themes_visual_alt: "150+ Shopify mağazası temsili görseli",
      themes_visual_label: "mağaza geliştirildi",
      about_blog_customizer:
        "Blog yazılarına ürün/koleksiyon kartları, SSS ve banner ekleyen; CSV ile toplu içe/dışa aktarım sunan public Shopify uygulaması.",
      about_shopify_themes:
        "150+ mağaza için sıfırdan tema kurulumu ve özelleştirme; özel section’lar, özellikler, storefront ve özel uygulama geliştirmeleri.",
      live_site: "Canlı site",
      preview_alt: "{{name}} ekran görüntüsü",
      about_vira_gas:
        "Gazlı amortisör üreticisi için modern, responsive, SEO uyumlu ve çok dilli kurumsal site.",
      about_niksa_metal:
        "Masa ve sandalye ayağı üreticisi için sıfırdan responsive tasarım ve Ant Design ürün galerisi.",
      about_wallet:
        "Gelir-gider takibi, ChartJS grafikleri, localStorage ve açık/koyu tema.",
      about_tufis_pet_house:
        "Veteriner ve köpek pansiyonu için interaktif, çok dilli ve tüm cihazlara uyumlu site.",
      about_derin_way_home:
        "Doğada tiny house işletmesi için responsive anasayfa, iletişim ve çok dil desteği.",
      about_pide_vakti:
        "Şehir ve ilçeye göre sahur, iftar vakitlerini API'den çeken Ramazan uygulaması.",
      about_positivus:
        "Figma tasarımından pixel perfect kodlanmış dijital ajans landing sayfası.",

      send_mail: "Mail gönder",

      nf_comment: "// Hata: modül bulunamadı",
      nf_message: "// \"{{path}}\" adlı dosya bu projede yok.",
    },
  },
  en: {
    translation: {
      explorer: "EXPLORER",
      open_explorer: "Open file explorer",
      close_explorer: "Close file explorer",
      switch_language: "Switch language",
      toggle_theme: "Toggle theme",
      resume_file: "resume.pdf",

      nav_readme: "readme",
      nav_projects: "projects",
      nav_stack: "stack",
      nav_contact: "contact",

      readme_bio:
        "Front-End Developer experienced in ReactJS and Shopify development, focused on building SPAs, customizing Shopify themes, and developing custom / public apps.",
      focus_theme: "Theme customization",
      cta_label: "Let’s work together",
      stack_shopify: "shopify",
      stack_frontend: "frontend",
      stack_tools: "tools",
      send_email: "Send email",

      projects_cmd: "$ ls ./projects",
      projects_count: "> {{count}} projects · shopify + freelance + personal",

      type_freelance: "Freelance",
      type_personal: "Personal",
      type_public_app: "Public App",
      type_client_work: "Client work",
      view_app_store: "View on App Store",
      themes_visual_alt: "Illustration of 150+ Shopify stores",
      themes_visual_label: "stores built",
      about_blog_customizer:
        "Public Shopify app that adds product/collection cards, FAQs and banners to blog posts, with bulk CSV import/export.",
      about_shopify_themes:
        "Theme setup and customization from scratch for 150+ stores: custom sections, features, storefront functionality and custom app development.",
      live_site: "Live site",
      preview_alt: "Screenshot of {{name}}",
      about_vira_gas:
        "Modern, responsive, SEO-friendly and multilingual corporate site for a gas spring manufacturer.",
      about_niksa_metal:
        "Responsive site built from scratch for a table & chair leg manufacturer, with an Ant Design gallery.",
      about_wallet:
        "Income-expense tracking, ChartJS charts, localStorage and light/dark theme.",
      about_tufis_pet_house:
        "Interactive, multilingual, fully responsive site for a vet clinic and dog hotel.",
      about_derin_way_home:
        "Responsive home and contact pages with multi-language support for a tiny house business.",
      about_pide_vakti:
        "Ramadan app that fetches sahur and iftar times by city and district from an API.",
      about_positivus:
        "Pixel-perfect digital agency landing page coded from a Figma design.",

      send_mail: "Send mail",

      nf_comment: "// Error: module not found",
      nf_message: "// \"{{path}}\" does not exist in this project.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "tr",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
