import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const useRandomBooks = () => {
  const { fetchData } = useFetch("book");
  const [randomBooks, setRandomBooks] = useState([]);

  const getRandomBooks = () => {
    const allBooks = [...fetchData];
    const randomBooksArray = [];

    while (randomBooksArray.length <= 3) {
      const randomIndex = Math.floor(Math.random() * allBooks.length);
      const selectedBook = allBooks[randomIndex];

      // Check if the book is not already in the randomBooks array
      const isBookInArray = randomBooksArray.some(
        (book) => book.id === selectedBook.id
      );

      if (!isBookInArray) {
        randomBooksArray.push(selectedBook);
      }

      // Remove the selected book from allBooks array
      allBooks.splice(randomIndex, 1);
    }

    setRandomBooks((prevRandomBooks) => [
      ...prevRandomBooks,
      ...randomBooksArray,
    ]);
  };

  useEffect(() => {
    if (fetchData) {
      getRandomBooks();
    }
  }, [fetchData]); // Watch for changes in fetchData

  return { randomBooks };
};

export default useRandomBooks;
