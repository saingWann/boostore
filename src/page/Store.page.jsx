import React, { useContext } from "react";
import { categories } from "../lib/storePgaeConstant";
import BookPage from "./book.page";
import BookCardGroupComponent from "../components/BookCardGroup.component";
import { AllBookData } from "../context/BookData.context";
import LoadingAnimation from "../components/LoadingAnimatin";
import StorePageHero from "../components/StorePageHero.component";

const StorePage = () => {
  const { fetchBookData, error, loading } = useContext(AllBookData);

  return (
    <section className="pt-12">
      <div className="h-[30rem]">
        <StorePageHero />
      </div>

      <h1 className="text-center font-serif font-bold lg:text-3xl text-2xl capitalize lg:mt-20 mt-10">
        Author of the week
      </h1>
      <div className="w-[130px] h-2 mx-auto bg-purple-700  my-2"></div>

      <div className="lg:w-fit mx-auto border-t border-b border-black lg:px-10 py-3 flex justify-center lg:mt-10 mt-5 overflow-scroll">
        {categories.map((cat, index) => {
          return (
            <button
              key={index}
              className="py-2 flex-shrink-0 px-6 lg:text-lg text-sm font-semibold hover:bg-purple-800 hover:text-white transition duration-300 border-l border-r"
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
