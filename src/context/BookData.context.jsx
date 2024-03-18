import React, { createContext, useEffect, useState } from "react";
import useFetch from "../hook/useFetch";

export const AllBookData = createContext();

const BookDataContext = ({ children }) => {
  const [data, setData] = useState({
    fetchBookData: null,
    error: null,
    loading: false,
  });

  const { fetchData, error, loading } = useFetch("books");

  useEffect(() => {
    setData({
      ...data,
      fetchBookData: fetchData,
      error: error,
      loading: loading,
    });
  }, [fetchData, error, loading]);
  //   console.log({ ...data });

  return (
    <AllBookData.Provider value={{ ...data }}>{children}</AllBookData.Provider>
  );
};

export default BookDataContext;
