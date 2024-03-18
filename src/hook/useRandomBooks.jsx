import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";

const useRandomBooks = () => {
  const { slug } = useParams();
  const { fetchData } = useFetch("books");
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

      if (!isBookInArray && selectedBook.slug !== slug) {
        // console.log(slug);
        randomBooksArray.push(selectedBook);
      }

      // Remove the selected book from allBooks array
      // to make sure that threre is no duplicate book in the random array
      allBooks.splice(randomIndex, 1);
    }

    setRandomBooks([...randomBooksArray]);
  };

  console.log("use Random book");
  useEffect(() => {
    if (fetchData) {
      getRandomBooks();
    }
  }, [fetchData, slug]); // Watch for changes in fetchData

  return { randomBooks };
};

export default useRandomBooks;
