import React from "react";
import BookPage from "./book.page";
import HeroComponent from "../components/Hero.component";
import BenifitComponent from "../components/Benifit.component";
import NewArrival from "../components/NewArrival.component";
import PromotionCTAComponent from "../components/PromotionCTA.component";
import BookOfTheWeekComponent from "../components/BookOfTheWeek.component";
import CustomerReview from "../components/CustomerReview.component";
import CTA from "../components/CTA";
import FAQsComponent from "../components/FAQs.component";

const HomePage = () => {
  return (
    <section>
      <HeroComponent />
      <BenifitComponent />
      <NewArrival />
      <CTA />
      <BookOfTheWeekComponent />
      <PromotionCTAComponent />
      <CustomerReview />
      <FAQsComponent />
    </section>
  );
};

export default HomePage;
