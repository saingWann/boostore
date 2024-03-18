import React from "react";
import BookCardComponent from "./BookCard.component";
import useFetch from "../hook/useFetch";
import ContainerComponent from "./Container.component";

const BookCardGroupComponent = ({ fetchData }) => {
  return (
    <ContainerComponent>
      <div className="flex flex-wrap justify-start items-center lg:py-10 md:py-5">
        {fetchData.map((data) => (
          <BookCardComponent key={data.id} bookData={data} />
        ))}
      </div>
    </ContainerComponent>
  );
};

export default BookCardGroupComponent;
