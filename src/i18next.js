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
        "Since 2023, I am a frontend developer who is experienced in web development and continues to improve himself. I am experienced in ReactJS, NextJS and Tailwind CSS. Through various freelance projects, I have been developing multilingual web pages with react-i18next, SEO optimization with React Helmet and improving the user experience using tools such as Framer Motion, Ant Design and Material UI. I am a reliable and dedicated team player.",
      resume: "Resume prepared,",
      resumeReview: " you can check it.",
      backToTerminal: "Back to Terminal",
      projects: "Projects were shown.",
      mail: "You can contact me via,",
      notFoundCommand: "Command not found: ",
      ViraGasDescription:
        "As a freelance Frontend Developer, I developed a website for a company that produces gas springs and springs.",
      ViraGasWhatIDid:
        "I made the existing design modern and user-friendly, responsive, SEO optimized and added multi-language support.",
      NiksaMetalDescription:
        "As a freelance Frontend Developer, I developed a website for a company that produces table and chair legs from profile iron and steel.",
      NiksaMetalWhatIDid:
        "I created a modern, responsive design from scratch. I used the Ant Design library for the product photo gallery.",
      WhatIDid: "My Role in This Project",
    },
  },
  tr: {
    translation: {
      reserved: "Tüm hakları saklıdır.",
      typeCommand: "Bir komut yaz ve enter'a tıkla. ",
      defaultCommand: "Varsayılan komutlar: ",
      availableCommand: "Mevcut komutlar: ",
      about:
        "2023 yılından beri web geliştirme konusunda tecrübeli ve kendini geliştirmeye devam eden frontend geliştiricisiyim. ReactJS, NextJS ve Tailwind CSS konusunda deneyimliyim. Çeşitli freelance projeler aracılığıyla, react-i18next ile çok dilli web sayfaları, React Helmet ile SEO optimizasyonu ve Framer Motion, Ant Design , Material UI gibi araçları kullanarak kullanıcı deneyimini geliştirmekteyim. Güvenilir ve özverili takım oyuncusuyum.",
      resume: "Özgeçmiş hazırlandı,",
      resumeReview: " buradan inceleyebilirsin.",
      backToTerminal: "Terminal'e Geri Dön",
      projects: "Projeler gösterildi.",
      mail: "Bana buradan ulaşabilirsin, ",
      notFoundCommand: "Komut bulunamadı: ",
      ViraGasDescription:
        "Frontend Developer pozisyonunda freelance olarak, gazlı amörtisör ve yay üreten firma için web sitesi geliştirdim.",
      ViraGasWhatIDid:
        "Mevcut tasarımı modern ve kullanıcı dostu hale getirdim, duyarlı (responsive) yapıya kavuşturdum. SEO optimizasyonu gerçekleştirdim ve çoklu dil desteği ekledim.",
      NiksaMetalDescription:
        "Frontend Developer pozisyonunda freelance olarak, profil demir ve çelikten masa, sandalye ayağı üreten firma için web sitesi geliştirdim.",
      NiksaMetalWhatIDid:
        "Sıfırdan modern, duyarlı (responsive) tasarım oluşturdum. Ürün fotoğraf galerisi için Ant Design kütüphanesini kullandım.",
      WhatIDid: "Bu Projedeki Rolüm",
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
