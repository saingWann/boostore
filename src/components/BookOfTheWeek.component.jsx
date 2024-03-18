import React from "react";
import ContainerComponent from "./Container.component";
import { useNavigate } from "react-router-dom";
import BookCardButton from "./BookCardButton.component";

const BookOfTheWeekComponent = () => {
  const nav = useNavigate();
  const handleCLick = () => {
    nav(`detail/${bookOftheWeek.slug}`);
  };
  const bookOftheWeek = {
    id: "11",
    book: "Atomic Habit",
    author: "Jame Clear",
    slug: "atomic-habit",
    description:
      "Atomic Habits will reshape the way you think about progress and success, and give you the tools and strategies you need to transform your habits--whether you are a team looking to win a championship, an organization hoping to redefine an industry, or simply an individual who wishes to quit smoking, lose weight, reduce stress, or achieve any other goal.",
    price: "13.85",
    imgUrl: "https://m.media-amazon.com/images/I/81YkqyaFVEL._SY342_.jpg",
  };
  return (
    <div className="lg:py-20">
      <ContainerComponent>
        <h1 className="text-center font-serif font-bold text-3xl capitalize">
          Author of the week
        </h1>
        <div className="w-[230px] h-2 mx-auto bg-purple-700 lg:mb-16 mb-10 mt-2"></div>
        <div className="flex lg:flex-row flex-col ">
          {/* thebook */}
          <div className="w-1/3">
            <div className="lg:h-[400px] md:h-[300px] h-[200px] flex flex-col justify-start items-start gap-3 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 p-3 rounded-lg relative group">
              <div className="lg:h-[300px] overflow-hidden h-[300px] w-full ">
                <img
                  className="object-cover  w-full h-full transition-all duration-200  hover:scale-105"
                  src={bookOftheWeek.imgUrl}
                  alt="bookCover.jpeg"
                />
              </div>
              <span className=" w-full flex flex-col items-center">
                <p className="font-bold lg:text-base text-sm line-clamp-1">
                  {bookOftheWeek.book}
                </p>
                <p className="text-xs">{bookOftheWeek.author}</p>
              </span>

              <span className="w-full px-5 pt-5 pb-10 flex flex-col items-center justify-center absolute bg-gray-100 -bottom-[20rem] left-0 transition-all duration-200 group-hover:bottom-0 ">
                <p className="font-bold text-purple-900">
                  {bookOftheWeek.book}
                </p>
                <p className="text-xs mb-5">{bookOftheWeek.author}</p>
                <BookCardButton handleCLick={handleCLick}>
                  <p>More Detail</p>
                </BookCardButton>
              </span>
            </div>
          </div>
          <div className="w-1/3 lg:px-10 ">
            <img
              src="https://tqueremos.tec.mx/sites/g/files/vgjovo1136/files/Aurum-Speakers-Bureau-James-Clear_0.jpeg"
              alt="author photo"
              className="object-cover h-full"
            />
          </div>

          <div className="w-1/3"></div>
        </div>
      </ContainerComponent>
    </div>
  );
};

export default BookOfTheWeekComponent;
