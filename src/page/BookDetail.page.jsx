import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hook/useFetch";
import SelectBookCcomponent from "../components/SelectBookDetail.component";
import LoadingAnimation from "../components/LoadingAnimatin";
import ErrorAnimation from "../components/ErrorAnimation";
import { AllBookData } from "../context/BookData.context";

const BookDetailPage = () => {
  // const { slug } = useParams();
  const { fetchBookData, error, loading } = useContext(AllBookData);

  return (
    <div className="pt-12">
      {loading && <LoadingAnimation />}
      {error && <ErrorAnimation />}
      {fetchBookData && <SelectBookCcomponent fetchData={fetchBookData} />}
    </div>
  );
};

export default BookDetailPage;
