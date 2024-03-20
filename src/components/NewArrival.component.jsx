import React from "react";
import ContainerComponent from "./Container.component";
import { newArrivalBooks } from "../lib/newArrivalBooks";
import BookCardComponent from "./BookCard.component";

const NewArrival = () => {
  return (
    <div className="lg:py-20 py-10">
      <ContainerComponent>
        <div className="w-full ">
          <h1 className="text-center font-serif font-bold lg:text-5xl text-3xl">
            New Arrivals
          </h1>
          <div className="w-[130px] h-2 mx-auto bg-purple-700  my-2"></div>
          <p className="text-center font-bold mb-5">
            Reading helps you developing your communication skills
          </p>
          <div className="flex justify-start flex-wrap ">
            {newArrivalBooks.map((book) => (
              <BookCardComponent key={book.id} bookData={book} />
            ))}
          </div>
        </div>
      </ContainerComponent>
    </div>
  );
};

export default NewArrival;
