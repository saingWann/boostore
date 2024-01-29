import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RecomentComponent from "./Recoment.component";
import Detail from "./BookDetail.component";
import BookDetailComponent from "./BookDetail.component";

const SelectBookComponent = ({ fetchData }) => {
  const { slug } = useParams();
  const [currentBook, setCurrentBook] = useState(null);

  const getSelectedBookData = () => {
    const selectedBook = fetchData.find((book) => book.slug === slug);
    // console.log(slug, selectedBook);
    setCurrentBook(selectedBook);
  };

  useEffect(() => {
    getSelectedBookData();
    // console.log(currentBook);
  }, [slug]);

  return currentBook && <BookDetailComponent selectedBook={currentBook} />;
};

export default SelectBookComponent;
