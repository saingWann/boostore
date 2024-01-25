import React from "react";
import { useNavigate } from "react-router-dom";

const BookCardComponent = ({ bookData }) => {
  const nav = useNavigate();

  const handleCLick = () => {
    nav(`store/${bookData.id}`);
  };

  return (
    <button onClick={handleCLick} className="p-4 lg:w-1/4 w-1/3 ">
      <div className="min-h-[300px] flex flex-col justify-start items-start gap-3 shadow-md p-3 rounded-lg">
        <img
          className="object-cover lg:h-[300px] h-[200px] w-full hover:scale-105 transition-all duration-200"
          src={bookData.imgUrl}
          alt="bookCover.jpeg"
        />
        <span className="w-full flex flex-col items-start">
          <p className="font-bold">{bookData.book}</p>
          <p className="text-xs">{bookData.author}</p>
        </span>
      </div>
    </button>
  );
};

export default BookCardComponent;
