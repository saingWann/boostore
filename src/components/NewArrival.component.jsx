import React from "react";
import ContainerComponent from "./Container.component";
import { newArrivalBooks } from "../lib/newArrivalBooks";
import BookCardComponent from "./BookCard.component";

const NewArrival = () => {
  return (
    <div className="lg:py-20 py-10">
      <ContainerComponent>
        <div className="w-full">
          <h1 className="text-center font-serif font-bold text-3xl">
            New Arrivals
          </h1>
          <div className="w-[130px] h-2 mx-auto bg-purple-700 mb-5 mt-2"></div>
          <div className="flex justify-start flex-wrap">
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
