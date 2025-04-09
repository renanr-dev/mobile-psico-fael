import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../GlobalStyles.astro";
import "./PhotoCarousel.css";
import eu_content from "../../images/eu-content.jpg";
import eu_content_2 from "../../images/eu-content-2.jpg";
import eu_content_3 from "../../images/3.jpg";
import eu_content_4 from "../../images/eu-content-4.jpg";
import eu_content_5 from "../../images/5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper/modules";

function PhotoCarousel() {
  return (
    <div className="container-photo-carousel">
      <Swiper
        spaceBetween={30}
        loop
        centeredSlides={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[EffectFade, Autoplay]}
        effect="fade"
        className="photo-carousel"
      >
        <SwiperSlide>
          <img
            className="image-carousel"
            src={eu_content.src}
            alt={"eu-content"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="image-carousel"
            src={eu_content_2.src}
            alt={"eu-content"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="image-carousel"
            src={eu_content_3.src}
            alt={"eu-content"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="image-carousel"
            src={eu_content_4.src}
            alt={"eu-content"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="image-carousel"
            src={eu_content_5.src}
            alt={"eu-content"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default PhotoCarousel;
