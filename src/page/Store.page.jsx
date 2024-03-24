import React, { useContext } from "react";
import { categories } from "../lib/storePgaeConstant";
import BookPage from "./book.page";
import BookCardGroupComponent from "../components/BookCardGroup.component";
import { AllBookData } from "../context/BookData.context";
import LoadingAnimation from "../components/LoadingAnimatin";

const StorePage = () => {
  const { fetchBookData, error, loading } = useContext(AllBookData);

  return (
    <section className="pt-12">
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

      <h1 className="text-center font-serif font-bold lg:text-3xl text-2xl capitalize lg:mt-20 mt-10">
        Author of the week
      </h1>
      <div className="w-[130px] h-2 mx-auto bg-purple-700  my-2"></div>

      <div className="w-fit mx-auto border-t border-b border-black lg:px-10 py-3 flex justify-center flex-wrap lg:mt-10">
        {categories.map((cat, index) => {
          return (
            <button
              key={index}
              className="py-2 px-6 text-lg font-semibold hover:bg-purple-800 hover:text-white transition duration-300 border-l border-r"
            >
              {cat}
            </button>
          );
        })}
      </div>
      {loading && <LoadingAnimation />}
      {fetchBookData && <BookCardGroupComponent fetchData={fetchBookData} />}
    </section>
  );
};

export default StorePage;
