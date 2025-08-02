import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import bannera from "/banner1.png";
import bannerb from "/banner2.png";
import bannerc from "/banner3.png";

const Banner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full">
      <div className="absolute z-10 top-1/2 -translate-y-1/2 left-2">
        <button
          ref={prevRef}
          className="bg-green-800 text-white p-3 rounded-full hover:bg-green-700 transition"
        >
          ❮
        </button>
      </div>
      <div className="absolute z-10 top-1/2 -translate-y-1/2 right-2">
        <button
          ref={nextRef}
          className="bg-green-800 text-white p-3 rounded-full hover:bg-green-700 transition"
        >
          ❯
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        <SwiperSlide>
          <div className="md:h-[70vh] w-full">
            <img
              src={bannera}
              alt="Banner"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[70vh] w-full">
            <img
              src={bannerb}
              alt="Banner"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[70vh] w-full">
            <img
              src={bannerc}
              alt="Banner"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
