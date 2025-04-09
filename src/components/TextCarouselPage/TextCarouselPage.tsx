import React, { useState } from "react";
import "./TextCarouselPage.css";
import "../GlobalStyles.astro";
import PhotoCarousel from "../PhotoCarousel/PhotoCarousel";

interface TextImagePageProp {
  title: string;
  text: string;
  imgHeaderSrc: string;
  imgBodySrc: string;
  bgColor: string;
  pageId: string;
}

function TextCarouselPage({
  title,
  text,
  imgHeaderSrc,
  imgBodySrc,
  bgColor,
  pageId,
}: TextImagePageProp) {
  const [isExpanded, setIsExpanded] = useState(false);
  let amountOfWords = 70;
  const splittedText = text.split(" ");
  const itCanOverflow = splittedText.length > amountOfWords;
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(" ")
    : text;
  const endText = splittedText.slice(amountOfWords - 1).join(" ");

  const handleShareClick = () => {
    const textToShare = encodeURIComponent("");
    const whatsappUrl = `https://wa.me/5511965665977?text=${textToShare}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <div className="container" id={pageId} style={{ backgroundColor: bgColor }}>
      <div className="text-container">
        <div className="text-header global-padding global-header">
          <div className="text-header-image">
            <img src={imgHeaderSrc} alt="" className="image-header" />
          </div>
          <div className="text-title">{title}</div>
        </div>
        <div className="text-section text global-padding">
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
      <div className="image-container">
        <PhotoCarousel />
      </div>
      <div className="center-contact">
        <button className="call-contato " onClick={handleShareClick}>
          Tire suas dúvidas ou agende o seu contato inicial gratuito!
        </button>
      </div>
    </div>
  );
}

export default TextCarouselPage;
