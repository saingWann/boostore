import React, { createContext } from "react";
import useFetch from "../hook/useFetch";

export const ApiContext = createContext({
  loading: false,
  error: null,
  data: null,
});

const ApiContextProvider = ({ children }) => {
  const { data, loading, error } = useFetch(`/book`);
  return (
    <ApiContextProvider value={{ data, loading, error }}>
      {children}
    </ApiContextProvider>
  );
};

export default ApiContextProvider;
