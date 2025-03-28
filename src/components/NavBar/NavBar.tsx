import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../images/logo1.png";

export default function NavBar() {
  const [sideOpen, setSideOpen] = useState(false);

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
          <li>PSICOTERAPIA</li>
          <li>ORIENTAÇÃO PROFISSIONAL</li>
          <li>ATENDIMENTOS LGBTQIAPN+ </li>
          <li>SOBRE MIM</li>
        </ul>
      </div>
    </div>
  );
}
