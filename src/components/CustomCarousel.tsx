import React from "react";
import CarouselCard from "./CarouselCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

function CustomCarousel(data: any) {
  return (
    <div className="container">
      <Swiper
        loop={true}
        slidesPerView={4}
        centeredSlidesBounds={true}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          //@ts-ignore
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="swiper_container"
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 4,
          },
        }}
      >
        {data.data.map((product: any, index: any) => {
          return (
            <SwiperSlide key={index}>
              <CarouselCard data={product} />
            </SwiperSlide>
          );
        })}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow"></div>
          <div className="swiper-button-next slider-arrow"></div>
        </div>
      </Swiper>
      <div className="flex py-12">
        <button className="mx-auto px-6 py-3 bg-black text-white font-extrabold">
          View All
        </button>
      </div>
    </div>
  );
}

export default CustomCarousel;
