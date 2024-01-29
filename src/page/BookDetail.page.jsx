import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hook/useFetch";
import SelectBookDetaiCcomponent from "../components/SelectBookDetail.component";
import LoadingAnimation from "../components/LoadingAnimatin";
import ErrorAnimation from "../components/ErrorAnimation";

const BookDetailPage = () => {
  const { slug } = useParams();
  const { fetchData, error, loading } = useFetch(`book`);

  return (
    <div>
      {loading && <LoadingAnimation />}
      {error && <ErrorAnimation />}
      {fetchData && <SelectBookDetaiCcomponent fetchData={fetchData} />}
    </div>
  );
};

export default BookDetailPage;
