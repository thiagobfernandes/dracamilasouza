import React from "react";
import { Banner } from "../banner/Banner";
import AppointmentSection from "../AppointmentSection/AppointmentSection";
import Accordion from "../accordation/accordation";
import { useLanguage } from "../../context/languageContext";
import "./GenericPage.css";

export const GenericPageItemId = ({ treatment }) => {
  const isMobile = window.innerWidth <= 768;
  const {
    contentImage,
    title,
    content,
    textColor,
    textDescription,
    doencas,
    footer
  } = treatment;

  const { language } = useLanguage();

  const showDoencas = Array.isArray(doencas) && doencas.length > 0;

  return (
    <div className="generic-page" id="generic-page">
      <Banner img={contentImage} color={textColor} />
      <section className="generic__section">
        <h2 className="generic__title">{title}</h2>
        <p className="generic_description">{textDescription}</p>

        {showDoencas && (
          <h2 className="tratamentopara">
            {language === "es"
              ? "Aquí encontrarás tratamiento para"
              : "Comigo você encontra tratamento para"}
          </h2>
        )}

        <div className="generic__grid_Item">
          {showDoencas &&
            doencas.map((item, index) => (
              <Accordion
                key={index}
                title={item.name}
                content={item.description}
              />
            ))}

          <Accordion
            title={
              language === "es"
                ? "Detalles del Tratamiento"
                : "Detalhes do Tratamento"
            }
            content={content}
          />
        </div>
      </section>

      <div
        style={{
          textAlign: "center",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p style={{ width: isMobile ? "90%" : "50%" , fontSize: isMobile ? "1.6rem":"2rem" }}>{footer}</p>
      </div>

      <AppointmentSection />
    </div>
  );
};
