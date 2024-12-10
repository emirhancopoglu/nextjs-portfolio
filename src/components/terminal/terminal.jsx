"use client";
import { ReactTerminal } from "react-terminal";
import Container from "@/components/utils/container";
import { FaFilePdf } from "react-icons/fa6";

export default function TerminalPage() {
  const commands = {
    help: (
      <>
        <br />
        <span className="text-[#7286D3] font-bold">
          Mevcut komutlar:
          {""} about, resume, mail, help, clear
        </span>
        <br />
      </>
    ),
    about: (
      <>
        <br />
        <span className="text-[#7286D3] font-bold">
          2023 yılından beri web geliştirme konusunda tecrübeli ve kendini
          geliştirmeye devam eden frontend geliştiricisiyim. ReactJS ve Tailwind
          CSS konusunda deneyimliyim. Çeşitli freelance projeler aracılığıyla,
          react-i18next ile çok dilli web sayfaları, React Helmet ile SEO
          optimizasyonu ve Framer Motion, Ant Design gibi araçları kullanarak
          kullanıcı deneyimini geliştirmekteyim. Güvenilir ve özverili takım
          oyuncusuyum.
        </span>
        <br />
      </>
    ),
    mail: (
      <>
        <br />
        <span className="text-[#7286D3] font-bold">
          Bana buradan ulaşabilirsin,
          <a href="mailto:copogluemirhan@outlook.com">{""} e-mail</a>
        </span>
        <br />
      </>
    ),
    resume: (
      <>
        <br />
        <span className="text-[#7286D3] font-bold">
          Özgeçmiş hazırlandı, indirebilirsin,
        </span>
        <a
          href="https://drive.google.com/file/d/1RQ1cLz8N03LX2n5uXMp3FbrmF1ySmZhB/view?usp=sharing"
          target="_blank"
        >
          <FaFilePdf
            className=" mt-4"
            size={70}
            href="https://drive.google.com/file/d/1RQ1cLz8N03LX2n5uXMp3FbrmF1ySmZhB/view?usp=sharing"
          />
        </a>
      </>
    ),
  };

  const welcomeMessage = (
    <>
      (c) Microsoft Corporation. Tüm hakları saklıdır.
      <br /> <br />
      <span>Bir komut yaz ve enter'a tıkla. Varsayılan komutlar:</span>
      <span className="text-[#7286D3] font-bold">
        {" "}
        about, resume, mail, help, clear
      </span>
      <br />
    </>
  );

  const handleDefaultCommand = (userInput) => {
    return `Komut bulunamadı: ${userInput}`;
  };

  return (
    <>
      <Container>
        <div className="h-[47rem] pt-4 ">
          <ReactTerminal
            commands={commands}
            welcomeMessage={welcomeMessage}
            themes={{
              "custom-theme": {
                themeBGColor: "#F0F0F0",
                themeToolbarColor: "#F0F0F0",
                themeColor: "#4C4C6D",
                themePromptColor: "#325288",
              },
            }}
            theme="custom-theme"
            errorMessage="Komut bulunamadı."
            prompt=" C:\Users\Jarvis>"
            defaultHandler={handleDefaultCommand}
          />
        </div>
      </Container>
    </>
  );
}
