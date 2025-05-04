import { useEffect } from "react";
import "./Home.css";
import { About, Navbar, Services } from "../../components";
import { Biografia } from "../../components/text/Biografia";
import arrow from "../../assets/arrowDown.svg";
import { Banner } from "../../components/banner/Banner";
import bannerImagem from "../../assets/saudeHolistica.png";
import { useLanguage } from "../../context/languageContext"; // Importando o hook
import { treatments } from "../../mock/tratamentos/tratamentos";


const Home = () => {
  // Pegando o idioma do contexto

  const {language} = useLanguage()
  return (
    <>
      <div className="home" id="home">
        <Navbar />

        <div className="home__header">
          <Banner
            titulo={
              language === "es"
                ? "MEDICINA Y NUTRICIÓN FUNCIONAL"
                : "MEDICINA E NUTRIÇÃO FUNCIONAL"
            }
            img={bannerImagem}
            color="#000000"
            p={
              language === "es"
                ? "Transfórmate con salud, equilibrio y bienestar"
                : "Transforme-se com saúde, equilíbrio e bem-estar"
            }
            btn={language === "es" ? "¡Contáctanos!" : "Entre em contato!"}
          />
          <div className="home__description">
            <div className="home__icon">
              <img src={arrow} alt="arrow icon" />
            </div>
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Biografia />
    </>
  );
};

export default Home;
