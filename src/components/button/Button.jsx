import React from "react";
import "./style.css";
import { useLanguage } from "../../context/languageContext";

export const Button = () => {
  const {language} = useLanguage()
  
  return (
    <>
      <a
        href="https://wa.me/+595982791748"
        target="_blank"
        className="appointment__button"
      >
      {language === "es" ? "Agendar Ahora" : "Agendar Agora"}
      </a>
    </>
  );
};
