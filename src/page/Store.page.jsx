import React from "react";
import { categories } from "../lib/storePgaeConstant";
import BookPage from "./book.page";

const StorePage = () => {
  return (
    <section>
      <div className="min-h-[20rem] flex flex-col items-center justify-center bg-storeBg bg-gray-900/40 bg-blend-multiply text-white">
        <h1 className="text-4xl font-bold pb-4">
          Welcome to Your BookShopByDay!
        </h1>
        <p className="text-center max-w-[50rem]">
          Discover a world of literary wonders at Your Bookstore. We take pride
          in offering a diverse collection of books that cater to all tastes and
          interests. Whether you're a fiction enthusiast, history buff, or a
          lover of mystery and adventure, we've got something special waiting
          for you.
        </p>
      </div>

      <p
        className="px-5 pt-5 text-2xl font-bold lg:w-1/2 w-full
       "
      >
        Categories
      </p>

      <div className="w-full lg:px-10 p-4 gap-4 flex flex-wrap *:">
        {categories.map((cat, index) => {
          return (
            <button
              key={index}
              className="bg-purple-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-purple-400 transition duration-300"
            >
              {cat}
            </button>
          );
        })}
      </div>

      <BookPage />
    </section>
  );
};

export default StorePage;
