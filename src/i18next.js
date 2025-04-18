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
      WalletDescription:
        "A web application that allows you to easily manage your personal budget. In this project with a minimalist design, you can personalize your categories, record your income and expenses and manage your budget.",
      WalletWhatIDid:
        " In the project I developed from scratch, I aimed for a minimalist and responsive design. I used the Material UI library with fixed design principles. I enabled users to save their income and expense information to localStorage. I presented income and expense data dynamically with ChartJS. I also added Light and Dark mode support.",
      TufiDescription:
        "I developed a modern and user-oriented website as a freelance Frontend Developer for Tufis Pet House, a business offering veterinary and dog boarding services.",
      TufiWhatIDid:
        "In this project, which was developed from scratch, I aimed for a modern design. I created a responsive and user-friendly interface that is compatible with all devices (mobile, tablet, desktop) according to responsive design principles. I designed dynamic and interactive elements to capture users' attention. By integrating the React i18n library, I provided multilingual support, allowing users to view the website in different languages.",
      DerinDescription:
        "As a freelance Frontend Developer, I developed a website for a business that offers tiny house service in nature and forest.",
      DerinWhatIDid:
        "I designed the Homepage and Contact pages in accordance with the requested design. I developed responsive design on all devices (mobile, tablet, desktop). I provided multilingual support by integrating the React i18n library.",

      PideDescription:
        "Made for the month of Ramadan, it dynamically pulls sahur and iftar times over the city or city, district via API and presents them to the user.",
      PideWhatIDid:
        "In this project developed with NextJS, I used Shadcn UI with fixed design principles. Users can see iftar and sahur times by selecting the city or city, district. As an API, a request is sent to vakit.vercel.app and the times are dynamically pulled. Light and Dark theme support is available.",
      PositivusDescription:
        "Positivus is a modern digital marketing agency website based on a Figma design and coded using ReactJS and Tailwind CSS. ",
      PositivusWhatIDid:
        "Developed with ReactJS, this web application was coded with clean code structure, pixel perfect coding and responsive design principles in mind. Although it sticks to the Figma design, some design elements and skins have been changed to adapt. The skeleton structure was designed using justify-between layout instead of justify-around.",

      notFoundMessage:
        "is not recognized as an internal or external command, to go home",
      notFoundClick: "click here",
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
      WalletDescription:
        "Kişisel bütçenizi kolayca yönetmenize olanak sağlayan bir web uygulaması. Minimalist tasarıma sahip bu projede, kategorilerinizi kişiselleştirerek gelir ve giderlerinizi kaydedip bütçenizi yönetebilirsiniz.",
      WalletWhatIDid:
        "Sıfırdan geliştirdiğim projede, minimalist ve responsive bir tasarım hedefledim. Sabit tasarım prensipleriyle Material UI kütüphanesini kullandım. Kullanıcıların gelir-gider bilgilerini localStorage'a kaydetmelerini sağladım. ChartJS ile dinamik olarak gelir-gider verilerini görsel şekilde sundum. Ayrıca, Light ve Dark mode desteği ekledim.",
      TufiDescription:
        "Frontend Developer pozisyonunda freelance olarak, veteriner hizmetleri ve köpek pansiyonu hizmeti sunan bir işletme için web sitesi geliştirdim.",
      TufiWhatIDid:
        "Sıfırdan geliştirilen bu projede, modern bir tasarım hedefledim. Responsive tasarım ilkelerine uygun olarak tüm cihazlarda (mobil, tablet, masaüstü) uyumlu ve kullanıcı dostu arayüz geliştirdim. Kullanıcıların dikkatini çekecek dinamik ve interaktif öğeler tasarladım. React i18n kütüphanesini entegre ederek çok dilli destek sağladım , bu sayede kullanıcılar web sitesini farklı dillerde görüntüleyebilme imkanına sahip oldu.",

      DerinDescription:
        "Frontend Developer pozisyonunda freelance olarak, doğa ve ormanın içinde tiny house hizmeti sunan bir işletme için web sitesi geliştirdim.",
      DerinWhatIDid:
        "İstenilen tasarıma uygun olarak Anasayfa ve İletişim sayfalarının tasarımlarını yaptım. Tüm cihazlarda (mobil, tablet, masaüstü) responsive tasarım geliştirdim. React i18n kütüphanesini entegre ederek çok dilli destek sağladım.",
      PideDescription:
        "Ramazan ayı için yapılmış, şehir veya şehir, ilçe üzerinden sahur ve iftar vakitlerini API üzerinden dinamik olarak çekerek kullanıcıya sunar.",
      PideWhatIDid:
        "NextJS ile geliştirilen bu projede, sabit tasarım prensipleriyle Shadcn UI kullandım. Kullanıcılar şehir veya şehir, ilçe seçerek iftar ve sahur zamanlarını görebilme imkanı sağlanıyor. API olarak vakit.vercel.app tarafına istek atılıyor ve dinamik olarak zamanlar çekiliyor. Light ve Dark theme desteği bulunmaktadır.",
      PositivusDescription:
        "Positivus, bir Figma tasarımından yola çıkılarak ReactJS ve Tailwind CSS kullanılarak kodlanmış modern bir dijital pazarlama ajansı sitesidir. ",
      PositivusWhatIDid:
        "ReactJS ile geliştirilen bu web uygulaması, temiz kod yapısı, pixel perfect coding ve responsive tasarım prensipleri göz önünde bulundurularak kodlandı. Figma tasarımına bağlı kalmakla birlikte, bazı tasarım unsurları ve görünümler, uyum sağlamak adına değiştirilmiştir. İskelet yapı olarak justify-around yerine justify-between düzeni kullanılarak tasarım yapılmıştır.",
      notFoundMessage: "adlı dosya yolu bulunamadı. Ana dosyaya dönmek için",
      notFoundClick: "tıklayın",
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
