import React from "react";
import "./AppointmentSection.css";
import { useLanguage } from "../../context/languageContext"; // Importando o arquivo CSS para este componente

const AppointmentSection = () => {
  const { language } = useLanguage(); 
  return (
    <section className="appointment">
      <h2 className="appointment__title">
        {language === "es" ? "Agenda tu Consulta" : "Agende Sua Consulta"}
      </h2>
      <p className="appointment__description">
        {language === "es"
          ? "Ponte en contacto y agenda tu atención con nuestros especialistas."
          : "Entre em contato e agende seu atendimento com nossos especialistas."}
      </p>
      <a
        href="https://wa.me/+595982791748"
        target="_blank"
        className="appointment__button"
      >
        {language === "es" ? "Agendar Ahora" : "Agendar Agora"}
      </a>
    </section>
  );
};

export default AppointmentSection;
