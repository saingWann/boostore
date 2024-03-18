import React from "react";
import { useNavigate } from "react-router-dom";
import BookCardButton from "./BookCardButton.component";

const BookCardComponent = ({ bookData }) => {
  const nav = useNavigate();
  const handleCLick = () => {
    nav(`detail/${bookData.slug}`);
  };

  return (
    <div className="p-4 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full ">
      <div className="lg:h-[400px]  flex flex-col justify-start items-start gap-3 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 p-3 rounded-lg relative group">
        <div className="lg:h-[300px] overflow-hidden h-[300px] w-full ">
          <img
            className="object-cover  w-full h-full transition-all duration-200  hover:scale-105"
            src={bookData.imgUrl}
            alt="bookCover.jpeg"
          />
        </div>
        <span className=" w-full flex flex-col items-center">
          <p className="font-bold lg:text-base text-sm line-clamp-1">
            {bookData.book}
          </p>
          <p className="text-xs">{bookData.author}</p>
        </span>

        <span className="w-full px-5 pt-5 pb-10 flex flex-col items-center justify-center absolute bg-gray-100 -bottom-[20rem] left-0 transition-all duration-200 group-hover:bottom-0 ">
          <p className="font-bold text-purple-900">{bookData.book}</p>
          <p className="text-xs mb-5">{bookData.author}</p>
          {/* <button
            onClick={handleCLick}
            className="px-4 py-2 bg-purple-900 text-white rounded-xl hover:shadow-lg hover:bg-purple-800"
          >
            More Detail
          </button> */}
          <BookCardButton handleCLick={handleCLick}>
            <p>More Detail</p>
          </BookCardButton>
        </span>
      </div>
    </div>
  );
};

export default BookCardComponent;
