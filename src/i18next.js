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
      nav_primary: "Ana menü",
      files_tabs: "Dosyalar",
      resume_file: "ozgecmis.pdf",
      resume_href: "/Emirhan-Copoglu-Ozgecmis.pdf",
      resume_download: "Emirhan Çöpoğlu Özgeçmiş.pdf",
      copyright: "© Hiçbir hakkı saklı değildir (yalnızca bu portfolyo için)",

      nav_readme: "readme",
      nav_projects: "projects",
      nav_stack: "stack",
      nav_contact: "contact",

      readme_bio:
        "ReactJS ve Shopify geliştirme alanında deneyimli bir Front-End Developer’ım. SPA’lar, Shopify tema özelleştirmeleri ve custom / public uygulamalar geliştirmeye odaklanıyorum.",
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
      type_public_app: "Public uygulama",
      type_client_work: "Müşteri projeleri",
      live_site: "Canlı site",
      view_app_store: "App Store’da incele",
      preview_alt: "{{name}} ekran görüntüsü",
      themes_visual_alt: "150’den fazla Shopify mağazasını temsil eden görsel",
      themes_visual_label: "mağaza geliştirildi",

      about_blog_customizer:
        "Blog yazılarına ürün ve koleksiyon kartları, SSS ve banner eklemeyi sağlayan; CSV ile toplu içe/dışa aktarım sunan public Shopify uygulaması.",
      about_shopify_themes:
        "150+ mağaza için sıfırdan tema kurulumu ve özelleştirme: özel section’lar, storefront özellikleri ve markalara özel uygulamalar.",
      about_vira_gas:
        "Gazlı yay üreticisi için modern, responsive, SEO uyumlu ve çok dilli kurumsal web sitesi.",
      about_niksa_metal:
        "Masa ve sandalye ayağı üreticisi için sıfırdan tasarlanan responsive site ve Ant Design ile ürün galerisi.",
      about_tufis_pet_house:
        "Veteriner kliniği ve köpek pansiyonu için interaktif, çok dilli ve tüm cihazlarla uyumlu web sitesi.",
      about_derin_way_home:
        "Doğa içinde tiny house konaklaması sunan bir işletme için çok dilli, responsive anasayfa ve iletişim sayfaları.",
      about_pide_vakti:
        "Şehir ve ilçeye göre sahur ve iftar vakitlerini API’den çeken Ramazan uygulaması.",
      about_positivus:
        "Figma tasarımından pixel-perfect olarak kodlanan dijital ajans landing sayfası.",

      nf_comment: "// Hata: modül bulunamadı",
      nf_message: "// Bu projede \"{{path}}\" adında bir dosya yok.",
    },
  },
  en: {
    translation: {
      explorer: "EXPLORER",
      open_explorer: "Open file explorer",
      close_explorer: "Close file explorer",
      switch_language: "Switch language",
      toggle_theme: "Toggle theme",
      nav_primary: "Main navigation",
      files_tabs: "Files",
      resume_file: "resume.pdf",
      resume_href: "/Emirhan-Copoglu-CV.pdf",
      resume_download: "Emirhan Copoglu CV.pdf",
      copyright: "© No rights reserved (this portfolio only)",

      nav_readme: "readme",
      nav_projects: "projects",
      nav_stack: "stack",
      nav_contact: "contact",

      readme_bio:
        "I’m a front-end developer experienced in ReactJS and Shopify, focused on building SPAs, customizing Shopify themes, and developing custom and public apps.",
      focus_theme: "Theme customization",
      cta_label: "Let’s work together",
      stack_shopify: "shopify",
      stack_frontend: "frontend",
      stack_tools: "tools",
      send_email: "Email me",

      projects_cmd: "$ ls ./projects",
      projects_count: "> {{count}} projects · shopify + freelance + personal",

      type_freelance: "Freelance",
      type_personal: "Personal",
      type_public_app: "Public app",
      type_client_work: "Client work",
      live_site: "Live site",
      view_app_store: "View on the App Store",
      preview_alt: "Screenshot of {{name}}",
      themes_visual_alt: "Illustration representing 150+ Shopify stores",
      themes_visual_label: "stores built",

      about_blog_customizer:
        "Public Shopify app that adds product and collection cards, FAQs and banners to blog posts, with bulk CSV import/export.",
      about_shopify_themes:
        "Theme setup and customization from scratch for 150+ stores: custom sections, storefront features and brand-specific apps.",
      about_vira_gas:
        "Modern, responsive, SEO-friendly and multilingual corporate website for a gas spring manufacturer.",
      about_niksa_metal:
        "Responsive website built from scratch for a table and chair leg manufacturer, with an Ant Design product gallery.",
      about_tufis_pet_house:
        "Interactive, multilingual and fully responsive website for a vet clinic and dog boarding service.",
      about_derin_way_home:
        "Multilingual, responsive home and contact pages for a tiny house retreat in nature.",
      about_pide_vakti:
        "Ramadan app that pulls suhoor and iftar times by city and district from an API.",
      about_positivus:
        "Pixel-perfect digital agency landing page coded from a Figma design.",

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
