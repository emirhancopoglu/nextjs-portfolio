import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      reserved: "All rights reserved.",
      typeCommand: "Type a command and hit enter. ",
      defaultCommand: "Default commands: ",
      availableCommand: "Available commands: ",
      about:
        "Since 2023, I am a frontend developer who is experienced in web development and continues to improve himself. I am experienced in ReactJS and Tailwind CSS. Through various freelance projects, I have been developing multilingual web pages with react-i18next, SEO optimization with React Helmet and improving the user experience using tools such as Framer Motion and Ant Design. I am a reliable and dedicated team player.",
      resume: "Resume prepared, you can download it,",
      backToTerminal: "Back to Terminal",
      projects: "Projects were shown.",
      mail: "You can contact me via,",
    },
  },
  tr: {
    translation: {
      reserved: "Tüm hakları saklıdır.",
      typeCommand: "Bir komut yaz ve enter'a tıkla. ",
      defaultCommand: "Varsayılan komutlar: ",
      availableCommand: "Mevcut komutlar: ",
      about:
        "2023 yılından beri web geliştirme konusunda tecrübeli ve kendini geliştirmeye devam eden frontend geliştiricisiyim. ReactJS ve Tailwind CSS konusunda deneyimliyim. Çeşitli freelance projeler aracılığıyla, react-i18next ile çok dilli web sayfaları, React Helmet ile SEO optimizasyonu ve Framer Motion, Ant Design gibi araçları kullanarak kullanıcı deneyimini geliştirmekteyim. Güvenilir ve özverili takım oyuncusuyum.",
      resume: "Özgeçmiş hazırlandı, indirebilirsin,",
      backToTerminal: "Terminal'e Geri Dön",
      projects: "Projeler gösterildi.",
      mail: "Bana buradan ulaşabilirsin, ",
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
