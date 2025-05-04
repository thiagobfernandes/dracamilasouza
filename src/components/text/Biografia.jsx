import React from "react";
import dr1 from "../../assets/dr1.jpeg";
import "./style.css"; // Certifique-se de importar o arquivo CSS
import { Button } from "../button/Button";
import { useLanguage } from "../../context/languageContext"; // Importando o contexto

export const Biografia = () => {
  const { language } = useLanguage(); // Pegando o idioma selecionado

  return (
    <div className="encapsulam">
      <div className="biografia">
        <div className="txt">
          <h2> Camila Souza</h2>
          <p>
            {language === "es"
              ? "Soy médica y nutricionista funcional, especializada en promover la salud y el bienestar a través de enfoques personalizados según la realidad de cada paciente. Mi misión es ayudar a las personas a reconectarse con sus cuerpos y encontrar un equilibrio entre la salud física y mental. Con un enfoque en el autocuidado, la evolución personal y la longevidad, desarrollo protocolos basados en evidencia científica para transformar vidas de manera consciente y sostenible."
              : "Sou médica e nutricionista funcional, especializada em promover saúde e bem-estar através de abordagens personalizadas de acordo com a realidade de cada paciente. Minha missão é ajudar pessoas a se reconectarem com seus corpos e encontrarem equilíbrio entre saúde física e mental. Com foco em autocuidado, evolução pessoal e longevidade, desenvolvo protocolos baseados em evidências científicas para transformar vidas de forma consciente e sustentável."}
          </p>
          <p>
            <Button />
          </p>
        </div>
        <div className="img">
          <img src={dr1} alt="Dr Camila" />
        </div>
      </div>
    </div>
  );
};
