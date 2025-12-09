import React, { useState } from "react";
import "./TextImagePage.css";
import "../GlobalStyles.astro";

interface TextImagePageProp {
  title: string;
  text: string;
  imgHeaderSrc: string;
  imgBodySrc: string;
  bgColor: string;
  pageId: string;
  buttonTitle: string;
  buttonLink: string;
}

function TextImagePage({
  title,
  text,
  imgHeaderSrc,
  imgBodySrc,
  bgColor,
  pageId,
  buttonTitle,
  buttonLink,
}: TextImagePageProp) {
  const [isExpanded, setIsExpanded] = useState(false);
  let amountOfWords = 70;
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

  const handleShareClick = () => {
    window.open(buttonLink, "_blank");
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
          {renderTextWithBreaks(beginText)}
          {itCanOverflow && (
            <>
              {!isExpanded && <span>... </span>}
              <span className={`${!isExpanded && "hidden"}`}>
                <br />
                {renderTextWithBreaks(endText)}
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
        <img src={imgBodySrc} alt="" className="image-body" />
      </div>
      <div className="center-contact">
        <button className="call-contato " onClick={handleShareClick}>
          {buttonTitle}
        </button>
      </div>
    </div>
  );
}

export default TextImagePage;
