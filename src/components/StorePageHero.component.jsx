import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function StorePageHero() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        <SwiperSlide className="flex flex-col items-center justify-center text-center bg-storeBg text-white bg-cover bg-gray-900/50 bg-blend-multiply p-4 rounded-none">
          <h1 className="text-4xl font-bold pb-4">Welcome to BookShopByDay!</h1>
          <p className="lg:w-1/2 md:w-1/2 w-full">
            Discover a world of literary wonders at Your Bookstore. We take
            pride in offering a diverse collection of books that cater to all
            tastes and interests. Whether you're a fiction enthusiast, history
            buff, or a lover of mystery and adventure, we've got something
            special waiting for you.
          </p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center text-center bg-storeBg1 text-white bg-cover bg-gray-900/50 bg-blend-multiply p-4 rounded-none">
          <h1 className="text-4xl font-bold pb-4">Welcome to BookShopByDay!</h1>
          <p className="lg:w-1/2 md:w-1/2 w-full">
            Discover a world of literary wonders at Your Bookstore. We take
            pride in offering a diverse collection of books that cater to all
            tastes and interests. Whether you're a fiction enthusiast, history
            buff, or a lover of mystery and adventure, we've got something
            special waiting for you.
          </p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center text-center bg-storeBg2 text-white bg-cover bg-gray-900/50 bg-blend-multiply p-4 rounded-none">
          <h1 className="text-4xl font-bold pb-4">Welcome to BookShopByDay!</h1>
          <p className="lg:w-1/2 md:w-1/2 w-full">
            Discover a world of literary wonders at Your Bookstore. We take
            pride in offering a diverse collection of books that cater to all
            tastes and interests. Whether you're a fiction enthusiast, history
            buff, or a lover of mystery and adventure, we've got something
            special waiting for you.
          </p>
        </SwiperSlide>

        {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
      </Swiper>
    </>
  );
}
