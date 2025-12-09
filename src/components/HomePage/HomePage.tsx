import React, { useState } from "react";
import "./HomePage.css";
import imgIntro from "../../images/intro.jpg";
import "../GlobalStyles.astro";

function HomePage() {
  let text =
    "Se você está aqui, isso provavelmente significa que você ou alguém com quem você se importa precisa de apoio psicológico, estou certo? Para quebrar o gelo, está tudo bem se você sente que precisa de ajuda. Ser atendido por um psicólogo não é “coisa de louco” não! É coisa de ser humano. Então, se você está passando por um momento difícil, buscando ser melhor em suas relações, lidando com a ansiedade, a tristeza ou o estresse em excesso e até se você simplesmente está em busca de autoconhecimento... você pode se beneficiar com o apoio de um psicoterapeuta. \nEu me chamo Rafael, sou psicólogo humanista e acredito em uma Psicologia direcionada para aquilo de mais original e particular de cada um. Luto através dos meus estudos, posicionamentos e do meu trabalho por uma ciência da mente que não perca de vista os aspectos mais singulares e valiosos do ser humano. Que antes de sermos diagnósticos, pacientes, adoecidos, sejamos pessoas com histórias, desejos, medos, emoções, sentimentos, vulnerabilidades e potência.";
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
        <img src={imgIntro.src} className="home-image-body" />
      </div>
      <div className="text-container">
        <div className="home-text-header">
          <h2 className="home-text-title">OLÁ, SEJA MUITO BEM VINDA/O!</h2>
        </div>
        <div className=" text global-padding">
          {renderTextWithBreaks(beginText)}
          {itCanOverflow && (
            <>
              {!isExpanded && <span>... </span>}
              <span className={`${!isExpanded && "hidden"}`}>
                {renderTextWithBreaks(endText)}
              </span>
              <span className="text" onClick={() => setIsExpanded(!isExpanded)}>
                <b>{isExpanded ? " Ler menos" : " Ler mais"}</b>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
