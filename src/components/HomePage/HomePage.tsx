import React, { useState } from "react";
import "./HomePage.css";
import imgIntro from "../../images/intro.jpg";
import "../GlobalStyles.astro";

function HomePage() {
  let text =
    'Prazer, pode me chamar de Rafa! Eu nasci em 98, em São José dos Campos, cidade onde vivi grande parte da minha vida, mas Mogi das Cruzes tem sido o palco da minha existência desde 2023. Sou graduado em Psicologia pela Universidade de Mogi das Cruzes (UMC) e me formei com uma experiência de 2 anos de estágios práticos em áreas como Psicologia Escolar, Clínica, Organizacional, Jurídica, Social/Comunitária, da Saúde, Orientação Profissional e Atendimento a Pessoas com Deficiência. Ao lado de uma grande amiga, desenvolvi uma importante pesquisa sobre a intersecção entre a negritude e a sexualidade na qual buscamos compreender a subjetividade das expressões de afeto da pessoa preta LGBTQIAPN+ com base na noção de cuidado de Martin Heidegger. Hoje, sou psicólogo clínico humanista-fenomenológico e pratico minha profissão com muita paixão, ética, responsabilidade e cuidado, oferecendo atendimentos afirmativos para o público LGBTQIAPN+. Estudo com frequência e estou me especializando em Práticas Clínicas Fenomenológico-Existenciais pela FAPSI. Já fui convidado para dar aulas de Psicologia em universidades como a UMC e a UniPiaget e minha atual ênfase está no estudo do amor, do afeto e das relações. Autores como Carl Rogers, Bell Hooks e Martin Heidegger compõem a minha base teórica e me ajudam a estruturar o meu manejo clínico. No âmbito mais pessoal, eu sou cinéfilo, amante de filmes de terror, apaixonado por músicas de todos os gêneros, desenhista por diversão, apreciador de café, cerveja e docinhos, explorador de universos particulares e, não menos importante, o escritor do livro "Coisas que acontecem no banheiro"';
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
