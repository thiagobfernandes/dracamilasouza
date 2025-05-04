import "./styles.css";
import React from "react";
import { useLanguage } from "../../context/languageContext"; // Importando o contexto

export const Banner = ({ titulo, img, p, btn, video, color }) => {
  const { language } = useLanguage(); // Pegando o idioma selecionado

  return (
    <section className="banner" id="Banner">
      <div className="media">
        {video ? (
          <video className="video" src={video} autoPlay loop muted />
        ) : (
          <img className="img" src={img} alt="" />
        )}
      </div>
      <div className="texto" style={{ color: color }}>
        <h1 className="h1">{titulo}</h1>
        <p className="p">
          {language === "es" ? p : p} {/* Se necessário, traduza 'p' para espanhol */}
        </p>
      </div>
    </section>
  );
};
