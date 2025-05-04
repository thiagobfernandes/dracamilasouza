import "./Services.css";
import arrow from "../../assets/Arrow 1.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Feedback from "../Feedback/Feedback";
import { treatments } from "../../mock/tratamentos/tratamentos";
import ServiceCard from "../ServiceCard/ServiceCard";
import { useLanguage } from "../../context/languageContext"; // Importando o contexto
const Counter = ({ target }) => {
  const [count, setCount] = useState(0);


  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    const duration = 4000;
    const incrementTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return <h2>{count}</h2>;
};

const Services = () => {
  
  const navigate = useNavigate();
  const { language } = useLanguage(); 
  const tratamentos = treatments(language)// Pegando o idioma selecionado


  const handleCardClick = (id) => {
    navigate(`/item/${id}`);
  };

  return (
    <div className="services" id="services">
      <div className="services__contact">
        <div className="services__contact__info">
          <h2 style={{ color: "#000" }}>
            {language === "es"
              ? "Cuida tu salud antes de la enfermedad!"
              : "Trate sua saúde antes da doença!"}
            <br />
            {language === "es" ? "Mira nuestros tratamientos" : "Veja nossos Tratamentos"}
          </h2>
          <span>
            <NavLink
              to="/"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <p>{language === "es" ? "Contáctanos" : "Entre em contato"}</p>
              <img src={arrow} alt="arrow icon" />
            </NavLink>
          </span>
        </div>
        <div className="services__contact__image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2731/2731908.png"
            alt=""
          />
        </div>
      </div>

      <div className="services__service">
        {tratamentos.map(
          (item, index) =>
            index < 3 && (
              <div className="services__service__card" key={item.id} onClick={() => handleCardClick(item.id)}>
                <ServiceCard key={index} title={item.title} description={item.description} image={item.image} />
              </div>
            )
        )}
        <div className="vermais">
          <h1 onClick={() => navigate("/tratamentos")}>
            {language === "es" ? "VER MÁS ---->" : "VER MAIS ---->"}
          </h1>
        </div>
      </div>

      <div className="services__info">
        <div className="feedback">
          <p className="slogan" style={{ textAlign: "center" }}>
            {language === "es" ? "Más conciencia" : "Mais consciência"}
            <p>{language === "es" ? "menos enfermedad " : "menos doença"}</p>
          </p>
          <p>
            <Feedback />
          </p>
        </div>

        <div className="services__info__numbers">
          <span>
            <p>{language === "es" ? "ATENCIÓN EN VARIOS PAÍSES" : "ATENDIMENTO EM DIVERSOS PAÍSES"}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
