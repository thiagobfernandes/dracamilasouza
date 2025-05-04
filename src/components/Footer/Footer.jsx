import "./Footer.css";
import arrow from "../../assets/Arrow 1.svg";
import instagram from "../../assets/instagram.svg";
// import twitter from '../../assets/twitter.svg';
import linkedIn from "../../assets/linkedIn.svg";
// import whatsapp from '../../assets/whatsapp.svg';

import { useLanguage } from "../../context/languageContext"; // Importando o contexto de idioma

const Footer = () => {
  const { language } = useLanguage(); // Pegando o idioma selecionado do contexto

  return (
    <div className="footer" id="contact">
      <h1>{language === "es" ? "Camila Souza" : "Camila Souza"}</h1>
      <h4>
        {language === "es" ? "¡Agenda tu consulta!" : "Agende uma consulta!"}
      </h4>
      <span>
        <h2>
          <a
            href="https://wa.me/+595982791748?text=Hola,%20quiero%20más%20información!"
            target="_blank"
          >
            {language === "es" ? "Contáctanos" : "Entre em contato"}
          </a>
        </h2>
      </span>
      <div className="footer__socials">
        <img src={instagram} alt="instagram icon" />
        {/* <img src={twitter} alt="twitter icon" /> */}
        {/* <img src={linkedIn} alt="linkedIn icon" onClick={openLinkedIn} /> */}
        {/* <img src={whatsapp} alt="whatsapp icon" onClick={openWhatsapp} /> */}
      </div>
      <h2>
        {language === "es" ? "Desarrollado por: " : "Desenvolvido por: "}
        <a
          href="https://www.instagram.com/flippyoficial/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Flippy
        </a>
      </h2>
      <p>
        {language === "es"
          ? `${new Date().getFullYear()} Todos los derechos reservados.`
          : `${new Date().getFullYear()}. Todos os direitos reservados.`}
      </p>
    </div>
  );
};

export default Footer;
