import React, { useEffect } from "react";
import useFetch from "../hook/useFetch";
import LoadingAnimation from "../components/LoadingAnimatin";
import ErrorAnimation from "../components/ErrorAnimation";
import BookCardGroupComponent from "../components/BookCardGroup.component";

const BookPage = () => {
  const { fetchData, error, loading } = useFetch("book");
  // console.log(loading);
  return (
    <main>
      {loading && <LoadingAnimation />}
      {error && <ErrorAnimation />}
      {fetchData && <BookCardGroupComponent fetchData={fetchData} />}
    </main>
  );
};

export default BookPage;
