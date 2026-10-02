import React, { useState } from "react";
import "./HomePage.css";
import imgIntro from "../../images/intro.png";
import "../GlobalStyles.astro";

function HomePage() {
  let text =
    "Está buscando por apoio psicológico, mas ainda não sabe qual caminho seguir? Aqui, eu te explico como funciona o processo psicoterapêutico comigo. Meus atendimentos são orientados pela Abordagem Centrada na Pessoa (ACP), uma teoria que valoriza profundamente a individualidade da sua experiência e história de vida. Durante os nossos encontros, as suas demandas serão tratadas através da escuta ativa, da compreensão, da empatia e do diálogo. Através da lente humanista-fenomenológica, eu ofereço serviços de Psicologia que estendem-se para além da clínica, como Orientação Profissional, intervenções grupais e palestras. Meu propósito é ajudar pessoas a se conhecerem e acessarem seus recursos internos para ampliarem suas possibilidades de ser, vivendo com mais saúde, bem-estar e autonomia emocional e existencial. Fez sentido para você? Então, fique à vontade e explore mais detalhes do meu trabalho :) ";
  const [isExpanded, setIsExpanded] = useState(false);
  let amountOfWords = 60;
  const splittedText = text.split(" ");
  const itCanOverflow = splittedText.length > amountOfWords;
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(" ")
    : text;
  const endText = splittedText.slice(amountOfWords - 1).join(" ");

  // Helper function to render text with line breaks for \n characters
  const renderTextWithBreaks = (str: string) => {
    return str.split("\n").map((line, idx) => (
      <React.Fragment key={idx}>
        {line}
        {idx < str.split("\n").length - 1 && (
          <>
            <br />
            <br />
          </>
        )}
      </React.Fragment>
    ));
  };

  return (
    <div className="home-container">
      <div className="home-image-container">
        <img src={imgIntro.src} className="home-image-body" alt="Rafael Intro image" />
      </div>
      <div className="text-container">
        <div className="home-text-header">
          <h2 className="home-text-title">OLÁ, SEJA MUITO BEM VINDA/O!</h2>
        </div>
        <div className="text global-padding home-text">
          {isExpanded ? (
            renderTextWithBreaks(beginText + " " + endText)
          ) : (
            <>
              {renderTextWithBreaks(beginText)}
              <span>... </span>
            </>
          )}
          <span className="text" onClick={() => setIsExpanded(!isExpanded)}>
            <b>{isExpanded ? " Ler menos" : " Ler mais"}</b>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
