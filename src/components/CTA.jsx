// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import CTAcard from "./CTAcard";

export default function CTA() {
  return (
    <section className="bg-red-100 relative">
      <Swiper
        style={{
          "--swiper-navigation-color": "black",
          "--swiper-pagination-color": "black",
        }}
        speed={600}
        grabCursor={true}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        // navigation={true}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
      >
        <div
          slot="container-start"
          className="bg-[url('./assets/ctaBg.png')] bg-no-repeat bg-cover bg-center  absolute top-0 left-0 w-[130%] h-full"
          data-swiper-parallax="-23%"
        ></div>

        <SwiperSlide className="rounded-none bg-transparent">
          <CTAcard
            title="book festival"
            subTitle="Shop wide range of collections"
            discount="50% off"
            message="all books are flat"
          />
        </SwiperSlide>

        {/* 2nd card */}

        <SwiperSlide className="rounded-none bg-transparent">
          <CTAcard
            title="Book Monsters"
            subTitle="limited Time Event"
            discount="Get 1 Free"
            message="buy more than 3 books"
          />
        </SwiperSlide>

        {/* 3rd card */}

        <SwiperSlide className="rounded-none bg-transparent">
          <CTAcard
            title="Old but Gold"
            subTitle="Do not regret if you miss this!
            "
            discount="20% off"
            message="all 80s & 90s books"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
