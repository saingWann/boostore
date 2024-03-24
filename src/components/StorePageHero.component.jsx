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
        <SwiperSlide className="flex flex-col items-center justify-center text-center bg-[url(./src/assets/storepageHeroBg1.jpg)] text-white bg-cover bg-gray-900/70 bg-blend-multiply p-4 rounded-none">
          <h1 className="text-4xl font-bold pb-4">WELCOME TO BookShopByDay!</h1>
          <p className="lg:w-1/2 md:w-1/2 w-full">
            " Discover a world of literary wonders at Your Bookstore. We take
            pride in offering a diverse collection of books that cater to all
            tastes and interests. Whether you're a fiction enthusiast, history
            buff, or a lover of mystery and adventure, we've got something
            special waiting for you. "
          </p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center text-center bg-[url(./src/assets/storepageHeroBg.jpg)] text-white bg-cover bg-gray-900/70 bg-blend-multiply p-4 rounded-none">
          <h1 className="text-4xl font-bold pb-4 uppercase">
            Let us accompany you!
          </h1>
          <p className="lg:w-1/2 md:w-1/2 w-full">
            " where every page holds a new adventure. Whether you're a bookworm,
            a history buff, or a mystery enthusiast, our curated collection has
            something for everyone. Immerse yourself in captivating stories,
            expand your horizons with insightful non-fiction, or get lost in the
            magic of fiction. Start your journey today and let the pages
            transport you to worlds beyond imagination. "
          </p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center text-center bg-storeBg2 text-white bg-cover bg-gray-900/70 bg-blend-multiply p-4 rounded-none">
          <h1 className="text-4xl font-bold pb-4 uppercase">
            the magic of storytelling comes to life
          </h1>
          <p className="lg:w-1/2 md:w-1/2 w-full">
            " Lose yourself in the pages of a beloved favorite or embark on a
            new literary journey. At BookShopByDay, every book is a gateway to a
            world of wonder. Join us as we celebrate the power of words and the
            joy of reading. "
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
