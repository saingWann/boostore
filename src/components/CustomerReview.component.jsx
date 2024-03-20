import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style/swiper.css";

// import required modules
import { Pagination } from "swiper/modules";
import ContainerComponent from "./Container.component";

const CustomerReview = () => {
  return (
    <>
      <section className="bg-gray-800 lg:py-20 py-10">
        <ContainerComponent>
          <div className="flex gap-10">
            <div className="w-1/2 text-white">
              <h1 className="lg:text-5xl font-bold ">
                What our customers says
              </h1>
              <p className="mt-5 lg:text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                esse sint voluptatibus maxime voluptas aperiam deleniti tempora
                atque, necessitatibus commodi repellat voluptate nesciunt
                quaerat doloremque nam vitae, quia laboriosam fugiat.
              </p>
            </div>
            <div className="w-1/2">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </ContainerComponent>
      </section>
    </>
  );
};

export default CustomerReview;
