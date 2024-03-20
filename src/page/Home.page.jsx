import React from "react";
import BookPage from "./book.page";
import HeroComponent from "../components/Hero.component";
import BenifitComponent from "../components/Benifit.component";
import NewArrival from "../components/NewArrival.component";
import PromotionCTAComponent from "../components/PromotionCTA.component";
import BookOfTheWeekComponent from "../components/BookOfTheWeek.component";
import CustomerReview from "../components/CustomerReview.component";

const HomePage = () => {
  return (
    <section>
      <HeroComponent />
      <BenifitComponent />
      <NewArrival />
      <BookOfTheWeekComponent />
      <PromotionCTAComponent />
      <CustomerReview />
    </section>
  );
};

export default HomePage;
