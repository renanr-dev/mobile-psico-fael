import { Swiper, SwiperSlide } from "swiper/react";
import "../GlobalStyles.astro";
import "./PhotoCarousel.css";
import eu_content from "../../images/carousel/1.jpg";
import eu_content_2 from "../../images/carousel/2.jpg";
import eu_content_3 from "../../images/carousel/3.jpg";
import eu_content_4 from "../../images/carousel/4.jpg";
import eu_content_5 from "../../images/carousel/5.jpg";
import eu_content_6 from "../../images/carousel/6.jpg";
import eu_content_7 from "../../images/carousel/7.jpg";
import eu_content_8 from "../../images/carousel/8.jpg";
import eu_content_9 from "../../images/carousel/9.jpg";
import eu_content_10 from "../../images/carousel/10.jpg";
import eu_content_11 from "../../images/carousel/11.jpg";
import eu_content_12 from "../../images/carousel/12.jpg";
import eu_content_13 from "../../images/carousel/13.jpg";
import eu_content_14 from "../../images/carousel/14.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper/modules";

const images = [
  eu_content,
  eu_content_2,
  eu_content_3,
  eu_content_4,
  eu_content_5,
  eu_content_6,
  eu_content_7,
  eu_content_8,
  eu_content_9,
  eu_content_10,
  eu_content_11,
  eu_content_12,
  eu_content_13,
  eu_content_14,
];

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
        {images.map((image) => (
          <SwiperSlide key={image.src}>
            <img className="image-carousel" src={image.src} alt="eu-content" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PhotoCarousel;
