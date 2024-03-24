import React, { useContext, useState } from "react";
import { categories } from "../lib/storePgaeConstant";
import BookCardGroupComponent from "../components/BookCardGroup.component";
import { AllBookData } from "../context/BookData.context";
import LoadingAnimation from "../components/LoadingAnimatin";
import StorePageHero from "../components/StorePageHero.component";
import CTA from "../components/CTA";

const StorePage = () => {
  const { fetchBookData, error, loading } = useContext(AllBookData);

  const [cate, setCate] = useState("All");

  const handleClick = (cat) => {
    setCate(cat);
  };

  return (
    <section className="pt-12">
      {loading && <LoadingAnimation />}

      <div className="h-[30rem]">
        <StorePageHero />
      </div>

      <h1 className="text-center font-serif font-bold lg:text-3xl text-2xl capitalize lg:mt-20 mt-10">
        Take your time to explore
      </h1>
      <div className="w-[270px] h-2 mx-auto bg-purple-700  my-2"></div>

      <div className="lg:w-fit mx-auto border-t border-b border-black lg:px-10 py-3 flex justify-center lg:mt-10 mt-5  overflow-auto">
        {categories.map((cat, index) => {
          return (
            <button
              key={index}
              onClick={() => handleClick(cat)}
              className={`py-2 flex-shrink-0 px-6 lg:text-lg text-sm font-semibold hover:bg-black hover:text-white transition duration-300 border-l border-r
              ${cat === cate ? "bg-black text-white" : ""} `}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {fetchBookData && <BookCardGroupComponent fetchData={fetchBookData} />}
      <CTA />
    </section>
  );
};

export default StorePage;
