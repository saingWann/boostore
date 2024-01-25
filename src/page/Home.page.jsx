import React from "react";
import BookCardGroupComponent from "../components/BookCardGroup.component";
import BookPage from "./book.page";
import HeroComponent from "../components/Hero.component";

const HomePage = () => {
  return (
    <section>
      <HeroComponent />
      <div className="w-full">
        <p className="text-center font-bold text-4xl py-5 mt-10 underline">
          Best Sellers
        </p>
      </div>
      <BookPage />
    </section>
  );
};

export default HomePage;
