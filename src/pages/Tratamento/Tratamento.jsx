import React, { useState, useEffect } from "react";
import { GenericPage } from "../../components/GenericPage/GenericPage";
import { Navbar } from "../../components";
import bannerImg from "./imageBanner.jpg";
import "./Tratamento.css";
import { useLanguage } from "../../context/languageContext";
import { treatments as treatmentsMock } from "../../mock/tratamentos/tratamentos"; // Renamed import

export const Tratamento = () => {
  const { language } = useLanguage();
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    // Handle both function and object/array imports
    const loadedTreatments = typeof treatmentsMock === 'function'
      ? treatmentsMock(language)
      : treatmentsMock;
    
    setTreatments(loadedTreatments);
  }, [language]);

  return (
    <>
      <Navbar />
      <GenericPage
        title={language === "es" ? "Tratamientos" : "Tratamentos"}
        items={treatments}
        bannerImage={bannerImg}
        bannerText={
          language === "es" 
            ? "Mira los tratamientos disponibles para ti." 
            : "Confira os tratamentos disponíveis para você."
        }
      />
    </>
  );
};