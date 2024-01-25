import React from "react";
import BookCardComponent from "./BookCard.component";
import useFetch from "../hook/useFetch";

const BookCardGroupComponent = ({ fetchData }) => {
  //   console.log(fetchData);
  return (
    <div className="flex flex-wrap justify-start items-center lg:px-20 lg:py-10">
      {fetchData.map((data) => (
        <BookCardComponent key={data.id} bookData={data} />
      ))}
    </div>
  );
};

export default BookCardGroupComponent;
