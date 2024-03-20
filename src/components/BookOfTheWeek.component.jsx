import React from "react";
import ContainerComponent from "./Container.component";
import { useNavigate } from "react-router-dom";
import BookCardButton from "./BookCardButton.component";

const BookOfTheWeekComponent = () => {
  const nav = useNavigate();
  const handleCLick = () => {
    nav(`detail/${bookOftheWeek.slug}`);
  };
  const bookOftheWeek = {
    id: "5",
    book: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    slug: "harry-potter",
    description:
      "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
    price: "39.99",
    imgUrl:
      "https://bci.kinokuniya.com/th/jsp/images/book-img/97814/97814088/9781408855652.JPG",
  };
  return (
    <div className="lg:py-20 py-10 min-h-screen flex items-center">
      <ContainerComponent>
        <h1 className="text-center font-serif font-bold lg:text-3xl text-2xl capitalize">
          Author of the week
        </h1>
        <div className="w-[130px] h-2 mx-auto bg-purple-700  my-2"></div>
        <p className="text-center font-bold mb-10">
          Let's take a moment to appreciate the one who bring us good shit thing
          to life.
        </p>
        <div className="flex lg:flex-row flex-col ">
          {/* thebook */}
          <div className="lg:w-1/3 w-full">
            <div className=" flex flex-col justify-start items-start gap-3 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 p-3 rounded-lg relative group">
              <div className="lg:h-[400px] md:h-[300px] h-[250px] overflow-hidden  w-full ">
                <img
                  className="object-cover  w-full h-full transition-all duration-200  hover:scale-105"
                  src={bookOftheWeek.imgUrl}
                  alt="bookCover.jpeg"
                />
              </div>
              <span className=" w-full flex flex-col items-center">
                <p className="font-bold lg:text-base text-sm line-clamp-1">
                  {bookOftheWeek.book}
                </p>
                <p className="text-xs">{bookOftheWeek.author}</p>
              </span>

              <span className="px-4 py-2 absolute bg-white/80 backdrop-blur-md font-bold rounded-ee-lg rounded-es-lg left-5 -top-20 transition-all duration-300 group-hover:top-3">
                {bookOftheWeek.price}$
              </span>
              <span className="w-full px-5 pt-5 pb-10 flex flex-col items-center justify-center absolute bg-white/80 backdrop-blur-md -bottom-[20rem] left-0 transition-all duration-200 group-hover:bottom-0 ">
                <p className="font-bold text-purple-900">
                  {bookOftheWeek.book}
                </p>
                <p className="text-xs mb-5">{bookOftheWeek.author}</p>
                <BookCardButton handleCLick={handleCLick}>
                  <p>More Detail</p>
                </BookCardButton>
              </span>
            </div>
          </div>
          <div className="lg:w-1/3 w-full lg:px-10 lg:py-0 lg:m-0 mt-10 overflow-hidden group relative">
            <img
              src="https://m.media-amazon.com/images/S/amzn-author-media-prod/8cigckin175jtpsk3gs361r4ss.jpg"
              alt="author photo"
              className="object-cover lg:h-full h-[300px] w-full rounded-lg hover:scale-105  transition-all duration-300"
            />
            <a
              href="https://www.jkrowling.com/"
              target="blank"
              className="underline text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-2 right-14 cursor-pointer hover:text-gray-500"
            >
              more about author
            </a>
          </div>

          <div className="lg:w-1/3 w-full lg:p-0 md:p-5 p-4">
            <p className="font-bold lg:text-4xl text-2xl font-serif mb-3">
              J.K. Rowling
            </p>
            <q className="text-xl">
              It is impossible to live without failing at something, unless you
              live so cautiously that you might as well not have lived at all,
              in which case you have failed by default.
            </q>

            <div className="lg:mt-10 mt-5 flex flex-col gap-4 bg-gray-100 p-3">
              <h1 className="font-bold lg:text-xl">Honours & Awards</h1>
              <p>
                J.K. Rowling has received many honours and awards, including:
              </p>
              <ul className="flex flex-col text-base gap-2">
                <li>
                  Companion of Honour, for services to literature and
                  philanthropy, 2017
                </li>
                <li>PEN America Literary Service Award, 2016</li>
                <li>Freedom of the City of London, 2012</li>
                <li>Lifetime Achievement Award, British Book Awards, 2008</li>
                <li>South Bank Show Award for Outstanding Achievement, 2008</li>
                <li>James Joyce Award, University College Dublin, 2008</li>
                <li>and more...</li>
              </ul>
            </div>
          </div>
        </div>
      </ContainerComponent>
    </div>
  );
};

export default BookOfTheWeekComponent;
