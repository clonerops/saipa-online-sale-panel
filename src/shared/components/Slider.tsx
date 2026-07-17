import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { ReactSVG } from "react-svg";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__wrapper">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".slider__next",
            prevEl: ".slider__prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="slider__content-box"
        >
          <SwiperSlide>
            <img
              src="images/slide-1.png"
              alt="slide-1"
              className="slider__img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slide-1.png"
              alt="slide-2"
              className="slider__img"
            />
          </SwiperSlide>
        </Swiper>
        <div className="slider__next">
          <ReactSVG
            src="/svg/arrow-left-slider.svg"
            className="slider__next-arrow"
          />
        </div>
        <div className="slider__prev">
          <ReactSVG
            src="/svg/arrow-left-slider.svg"
            className="slider__prev-arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
