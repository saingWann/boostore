import React, { useRef, useState } from "react";
import { Star } from "lucide-react";

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
import { jiu } from "../assets/testnimonial";
import { testimonialInfo } from "../lib/testimonialInfo";

const CustomerReview = () => {
  return (
    <>
      <section className="bg-gray-800 lg:py-20 py-10">
        <ContainerComponent>
          <div className="flex lg:flex-row md:flex-row flex-col gap-10 lg:px-10 md:px-20 px-4">
            <div className="lg:w-1/2 md:w-1/2 w-full text-white">
              <h1 className="lg:text-5xl md:text-3xl text-xl font-bold ">
                What our customers says
              </h1>
              <p className="mt-5 lg:text-xl max-sm:text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                esse sint voluptatibus maxime voluptas aperiam deleniti tempora
                atque, necessitatibus commodi repellat voluptate nesciunt
                quaerat doloremque nam vitae, quia laboriosam fugiat.
              </p>
            </div>
            <div className="lg:w-1/2 md:w-1/2 w-full">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {testimonialInfo.map((test) => (
                  <SwiperSlide
                    key={test.name}
                    className="flex flex-col gap-3 lg:min-h-[220px] md:min-h-[220px]
                    sm:min-h-[200px] max-sm:min-h-[285px] max-sm:items-center max-sm:justify-center"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <img
                        src={test.img}
                        alt="customer photo"
                        className="w-[3rem] rounded-full aspect-square object-cover"
                      />
                      <div className="flex flex-col items-start">
                        <p className="font-bold">{test.name}</p>
                        <span className="flex gap-2">
                          {Array.from({ length: 5 }, (_, index) => {
                            if (index + 1 <= test.rating) {
                              return (
                                <Star
                                  key={index}
                                  size={20}
                                  fill="purple"
                                  strokeWidth={0}
                                />
                              );
                            } else {
                              return (
                                <Star
                                  key={index}
                                  size={20}
                                  stroke="purple"
                                  strokeWidth={1}
                                />
                              );
                            }
                          })}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-start ">{test.feedback}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </ContainerComponent>
      </section>
    </>
  );
};

export default CustomerReview;
