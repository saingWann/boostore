import React, { useContext } from "react";
import useFetch from "../hook/useFetch";
import LoadingAnimation from "../components/LoadingAnimatin";
import ErrorAnimation from "../components/ErrorAnimation";
import BookCardGroupComponent from "../components/BookCardGroup.component";
import { AllBookData } from "../context/BookData.context";

const BookPage = () => {
  // const { fetchData, error, loading } = useFetch("book");
  // use context api
  const { fetchBookData, error, loading } = useContext(AllBookData);
  // console.log(loading);
  return (
    <main>
      {loading && <LoadingAnimation />}
      {error && <ErrorAnimation />}
      {fetchBookData && <BookCardGroupComponent fetchData={fetchBookData} />}
    </main>
  );
};

export default BookPage;
