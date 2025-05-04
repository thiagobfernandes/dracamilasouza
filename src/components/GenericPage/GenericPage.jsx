import React, { useRef, useEffect } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { useNavigate } from "react-router-dom";
import { Banner } from "../banner/Banner";
import AppointmentSection from "../AppointmentSection/AppointmentSection";
import "./GenericPage.css";
import video2 from "../../assets/camila.mp4"
import video from "../../assets/videozada.mp4";

import { useLanguage } from "../../context/languageContext"; // Importando o contexto

export const GenericPage = ({ title, items, bannerImage, bannerText }) => {
  const navigate = useNavigate();
  const videoRef = useRef(null); // Referência para o elemento de vídeo
  const { language } = useLanguage(); // Pegando o idioma selecionado

  const handleCardClick = (id) => {
    navigate(`/item/${id}`);
  };

  // Efeito para reproduzir o vídeo automaticamente quando estiver visível
  useEffect(() => {
    const videoElement = videoRef.current;

    // Configura o IntersectionObserver para reproduzir o vídeo quando ele estiver visível
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reproduz o vídeo quando ele estiver visível
            videoElement.play().catch((error) => {
              console.error("Erro ao reproduzir o vídeo:", error);
            });
          } else {
            // Pausa o vídeo quando ele não estiver visível
            videoElement.pause();
          }
        });
      },
      {
        threshold: 0.5, // Define que 50% do vídeo precisa estar visível para reproduzir
      }
    );

    if (videoElement) {
      observer.observe(videoElement); // Inicia a observação do vídeo
    }

    // Fallback caso o IntersectionObserver não seja suportado
    if (!("IntersectionObserver" in window)) {
      videoElement.play().catch((error) => {
        console.error("Erro ao reproduzir o vídeo:", error);
      });
    }

    // Limpa o observer quando o componente for desmontado
    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <div className="generic-page" id="generic-page">
      <Banner titulo={title} img={bannerImage} p={bannerText} color={"#ffffff"} />
      <section className="generic__section">
        <div className="container">
          <div className="textBody">
            <h2>
              {language === "es" ? "¿Cómo funciona la primera consulta?" : "Como funciona a primeira consulta?"}
            </h2>
            <p>
              {language === "es" 
                ? "Tratamientos en Medicina y Nutrición Integrativa. Cada persona es única. Por eso, mi trabajo no se limita a tratar síntomas, sino a investigar las causas reales de lo que está pasando con tu cuerpo. Mi enfoque es restaurar el equilibrio y promover una longevidad saludable, con una mirada profunda sobre nutrición, metabolismo, inflamación, intestino y bienestar físico y mental." 
                : "Tratamentos em Medicina e Nutrição Integrativa. Cada pessoa é única. Por isso, meu trabalho não se limita a tratar sintomas, mas a investigar as causas reais do que está acontecendo com o seu corpo. Meu foco é restaurar o equilíbrio e promover uma longevidade saudável, com um olhar profundo sobre nutrição, metabolismo, inflamação, intestino e bem-estar físico e mental."
              }
            </p>
          </div>
        </div>
        <h2 className="generic__title"> {title}</h2>
        <p className="generic__description">
          {language === "es" ? "Consulta nuestros tratamientos disponibles para ti." : "Confira nossos tratamentos disponíveis para você."}
        </p>
        <div className="container_video">
          <div className="cards">
            <div className="generic__grid">
              {items.map((item) => (
                <div key={item.id} onClick={() => handleCardClick(item.id)}>
                  <ServiceCard
                    title={item.title}
                    description={item.description}
                    image={item.image}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="video">
            <video ref={videoRef} controls>
              <source src={video2} type="video/mp4" />
              {language === "es" ? "Tu navegador no soporta videos." : "Seu navegador não suporta vídeos."}
            </video>
          </div>
        </div>
      </section>

      <AppointmentSection />
    </div>
  );
};
