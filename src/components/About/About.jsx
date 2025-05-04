import "./About.css";
import dr2 from "../../assets/dr2.jpeg";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/languageContext"; // Importando o contexto

const About = () => {
  const navigate = useNavigate();
  const { language } = useLanguage(); // Pegando o idioma selecionado

  return (
    <div className="about" id="about">
      <div className="about__description">
        <h1>
          {language === "es" ? "Nuestro" : "Nosso"} <span>{language === "es" ? "Trabajo" : "Trabalho"}</span> <br />
        </h1>
        <div className="about__hero__mobile">
          <img src={dr2} alt="hero" />
        </div>
        <h2>
          {language === "es"
            ? "Bienvenido a un viaje de transformación y autocuidado"
            : "Bem-vindo a uma jornada de transformação e autocuidado"}
        </h2>
        <p>
          {language === "es"
            ? "Mi trabajo se basa en la medicina y la nutrición integrativa funcional basada en evidencia, abordando la salud en su totalidad: cuerpo, mente y alma. Cada protocolo ha sido creado para brindar apoyo personalizado en áreas cruciales de tu vida, promoviendo no solo resultados físicos, sino también bienestar emocional y mental. Aquí, creemos que cuidarse a uno mismo es un acto de amor y un camino para convertirse en la mejor versión de uno mismo."
            : "Meu trabalho é moldado na medicina e nutrição integrativa funcional baseada em evidências, abordando a saúde como um todo: corpo, mente e alma. Cada protocolo foi criado para oferecer suporte personalizado em áreas cruciais da sua vida, promovendo não apenas resultados físicos, mas também bem-estar emocional e mental. Aqui, acreditamos que cuidar de si é um ato de amor e um caminho para se tornar a melhor versão de quem você pode ser."}
        </p>
        <button onClick={() => navigate("/register")}>
          {language === "es" ? "¡Conócenos!" : "Conheça!"}
        </button>
      </div>
      <div className="about__hero">
        <img src={dr2} alt="hero" />
      </div>
    </div>
  );
};

export default About;
