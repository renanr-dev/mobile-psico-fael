import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../images/logo1.png";

export default function NavBar() {
  const [sideOpen, setSideOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="navbar">
      <img src={logo.src} alt="" />
      <span
        className="menu"
        onClick={() => {
          setSideOpen(!sideOpen);
        }}
      >
        <i className="fa fa-bars"></i>
      </span>
      <div className={`side-panel-container ${sideOpen ? "visible" : ""}`}>
        <ul className="list-menu">
          <a
            onClick={(e) => scrollToSection(e, "psicoterapia")}
            href="#psicoterapia"
          >
            PSICOTERAPIA
          </a>
          <a
            onClick={(e) => scrollToSection(e, "orientacao")}
            href="#orientacao"
          >
            ORIENTAÇÃO PROFISSIONAL
          </a>
          <a
            onClick={(e) => scrollToSection(e, "atendimento")}
            href="#atendimento"
          >
            ATENDIMENTOS LGBTQIAPN+
          </a>
          <a onClick={(e) => scrollToSection(e, "sobre-mim")} href="#sobre-mim">
            SOBRE MIM
          </a>
          <a onClick={(e) => scrollToSection(e, "book")} href="#book">
            CONHEÇA MEU LIVRO!
          </a>
        </ul>
      </div>
    </div>
  );
}
