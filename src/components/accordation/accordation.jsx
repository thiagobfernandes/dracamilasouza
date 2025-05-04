import React, { useState } from "react";
import "./style.css";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? "open" : ""}`}>
      <div className="header" onClick={toggleAccordion}>
        <span className="text">{title}</span>
        <span className="arrow">{isOpen ? "━" : "▶"}</span>
      </div>
      {isOpen && <div className="content"><p>{content}</p></div>}
    </div>
  );
};

export default Accordion;
