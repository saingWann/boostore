import React, { useEffect } from "react";
import useFetch from "./hook/useFetch";

const App = () => {
  const { fetchData, error, loading } = useFetch("book");
  // console.log(loading);
  return (
    <div>
      {loading && <h1>loading...</h1>}
      {error && <h1>error...</h1>}
      {fetchData && <>{JSON.stringify(fetchData)}</>}
    </div>
  );
};

export default App;
