import React, { useState } from "react";
import "./TextImagePage.css";

interface TextImagePageProp {
  title: string;
  text: string;
  imgHeaderSrc: string;
  imgBodySrc: string;
}

function TextImagePage({
  title,
  text,
  imgHeaderSrc,
  imgBodySrc,
}: TextImagePageProp) {
  const [isExpanded, setIsExpanded] = useState(false);
  let amountOfWords = 70;
  const splittedText = text.split(" ");
  const itCanOverflow = splittedText.length > amountOfWords;
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(" ")
    : text;
  const endText = splittedText.slice(amountOfWords - 1).join(" ");

  return (
    <div className="container">
      <div className="text-container">
        <div className="text-header global-padding">
          <div className="text-header-image">
            <img src={imgHeaderSrc} alt="" className="image-header"/>
          </div>
          <div className="text-title">{title}</div>
        </div>
        <div className="text-section text global-padding">
          {beginText}
          {itCanOverflow && (
            <>
              {!isExpanded && <span>... </span>}
              <span className={`${!isExpanded && "hidden"}`}>{endText}</span>
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
        <img src={imgBodySrc} alt=""  className="image-body"/>
      </div>
    </div>
  );
}

export default TextImagePage;
