import React, { useState, useEffect } from "react";
import { api } from "../service/baseURl";

const useFetch = (url) => {
  const [fetchData, setFetchData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await api.get(url);
        // console.log("hello");
        // console.log(data);
        setFetchData(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { fetchData, error, loading };
};

export default useFetch;
