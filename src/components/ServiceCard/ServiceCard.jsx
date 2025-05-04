import React from "react";
import "./ServiceCard.css"; // Importando o arquivo CSS para este componente

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-card__image" />
      <h3 className="service-card__name">{title}</h3>
      <p className="service-card__info">{description}</p>
    </div>
  );
};

export default ServiceCard;
