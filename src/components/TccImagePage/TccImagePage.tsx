import React, { useState } from "react";
import "./TccImagePage.css";
import "../GlobalStyles.astro";

interface TccImagePageProp {
  title: string;
  text: string;
  imgHeaderSrc: string;
  imgBodySrc: string;
  bgColor: string;
  pageId: string;
}

function TccImagePage({
  title,
  text,
  imgHeaderSrc,
  imgBodySrc,
  bgColor,
  pageId,
}: TccImagePageProp) {
  const [isExpanded, setIsExpanded] = useState(false);
  let amountOfWords = 70;
  const splittedText = text.split(" ");
  const itCanOverflow = splittedText.length > amountOfWords;
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(" ")
    : text;
  const endText = splittedText.slice(amountOfWords - 1).join(" ");

  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href =
      "[Oficial] Intersecção e Afetos da Pessoa Preta LGBTQIAPN+ (TCC - Magda & Rafael).pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.download = ""; // optional: can specify a filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="container no-gap" id={pageId} style={{ backgroundColor: bgColor }}>
      <div className="text-container">
        <div className="text-header global-padding global-header">
          <div className="text-header-image">
            <img src={imgHeaderSrc} alt="" className="image-header" />
          </div>
          <div className="text-title">{title}</div>
        </div>
        <div className="text-section text global-padding">
          <p className="tcc-suptitle">Tema: Intersecção e Afetos da Pessoa Preta LGBTQIAPN+: Revisão Teórico Fenomenológica Beaseada no Cuidado Existencial</p>
          <p>Confira o resumo:</p>
          {beginText}
          {itCanOverflow && (
            <>
              {!isExpanded && <span>... </span>}
              <span className={`${!isExpanded && "hidden"}`}>
                {" " + endText}
              </span>
              <span
                className="text-violet-400 ml-2"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <b>{isExpanded ? "Ler menos" : "Ler mais"}</b>
              </span>
            </>
          )}
        </div>
      </div>
      <div className="image-container minus-margin ">
        <img src={imgBodySrc} alt="" className="image-body" />
      </div>
      <div className="center-contact">
        <button className="call-contato " onClick={handleDownloadClick}>
          Baixe o arquivo na íntegra clicando aqui!
        </button>
      </div>
    </div>
  );
}

export default TccImagePage;
