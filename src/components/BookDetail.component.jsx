import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import RecomentComponent from "./Recoment.component";
import { shopLinks } from "../lib/shopLinks";

const BookDetailComponent = ({ selectedBook }) => {
  const [readMore, setReadMore] = useState(false);
  const nav = useNavigate();
  const [openShopLinks, setOpenShopLinks] = useState(false);

  useEffect(() => {
    setReadMore(false);
  }, [selectedBook]);
  const handleClick = () => {
    nav(-1);
  };

  console.log("render from book detail coponent");
  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div className=" w-full lg:p-10 md:p-10 p-5 flex justify-center items-center ">
      <div className="flex lg:flex-row  flex-col items-start justify-center w-full ">
        <div
          className={`lg:w-1/3 w-full flex items-center flex-col gap-5 lg:sticky md:sticky lg:top-0 z-10`}
        >
          <img
            className=" lg:object-contain  object-cover w-full lg:h-[600px] md:h-[500px] h-[300px]"
            src={selectedBook.imgUrl}
            alt="bookcover.jpeg"
          />
          <div className="lg:w-2/3 w-full relative flex ">
            <ul
              className={`absolute bg-white p-4  rounded-lg flex flex-col lg:bottom-0 right-1 lg:translate-x-[16rem] lg:translate-y-0 translate-y-[4rem] origin-top-right
               shadow-lg transition-all duration-300  lg:origin-bottom-left ${
                 openShopLinks ? "scale-100" : "scale-0"
               }`}
            >
              {shopLinks.map((link) => (
                <li
                  key={link}
                  className="w-full flex justify-between gap-10 hover:bg-gray-100 cursor-pointer p-3 rounded-lg"
                >
                  <button className="font-semibold hover:bg-gray-200 active:bg-gray-50">
                    {link}
                  </button>
                  <svg
                    fill="#000000"
                    width="25px"
                    height="25px"
                    viewBox="-1 0 19 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zm-3.49-3.99a.396.396 0 0 0-.396-.396H9.088a.396.396 0 0 0 0 .791h2.488L9.952 7.612a1.178 1.178 0 0 0-.562-.142H5.146a1.189 1.189 0 0 0-1.188 1.187v4.244a1.189 1.189 0 0 0 1.188 1.187H9.39a1.189 1.189 0 0 0 1.187-1.187V8.657a1.18 1.18 0 0 0-.092-.459l1.65-1.65v2.488a.396.396 0 0 0 .792 0zm-5.302 5.466 2.16-2.161V12.9a.396.396 0 0 1-.395.396H5.146a.396.396 0 0 1-.396-.396V8.657a.396.396 0 0 1 .396-.396h4.157L7.065 10.5a.396.396 0 1 0 .56.56z"></path>
                    </g>
                  </svg>
                </li>
              ))}
            </ul>

            <p className="bg-black px-6 rounded-s-full py-3 w-full text-white text-center font-bold">
              Buy Now {selectedBook.price}$
            </p>
            <button
              onClick={() => setOpenShopLinks(!openShopLinks)}
              className="bg-black px-6 rounded-e-full py-3 text-white hover:bg-purple-500 active:bg-purple-700 border-s"
            >
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                className="group-hover:scale-110 group-hover:translate-x-2 transition-all duration-100"
              >
                <g id="SVGRepo_bgCarrier" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {"{"}" "{"}"}
                  <path
                    d="m 12 0 c -0.550781 0 -1 0.449219 -1 1 v 6.964844 c -0.007812 -0.253906 -0.113281 -0.496094 -0.292969 -0.671875 l -6 -6 c -0.390625 -0.390625 -1.023437 -0.390625 -1.414062 0 c -0.1875 0.1875 -0.292969 0.441406 -0.292969 0.707031 s 0.105469 0.519531 0.292969 0.707031 l 5.292969 5.292969 l -5.292969 5.292969 c -0.1875 0.1875 -0.292969 0.441406 -0.292969 0.707031 s 0.105469 0.519531 0.292969 0.707031 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 l 6 -6 c 0.179688 -0.179687 0.285157 -0.417969 0.292969 -0.667969 v 6.960938 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -14 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0"
                    fill="#ffffff"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full sm:mt-10 max-sm:mt-10 lg:mx-10 ">
          <div className="border-t border-b py-2 border-black lg:mb-10 mb-5">
            <p className="font-bold lg:text-4xl text-2xl">
              {selectedBook.book}
            </p>
            <p className="font-semibold lg:text-base text-sm text-gray-600/70 pt-2">
              {selectedBook.author}
            </p>
          </div>

          <p
            className={
              readMore
                ? "lg:text-base text-sm  leading-loose"
                : "lg:text-base text-sm line-clamp-4 leading-loose"
            }
          >
            {selectedBook.description}
          </p>
          <button
            onClick={readMoreHandler}
            className="underline text-sm text-gray-500 my-4 block"
          >
            {!readMore ? "Read More" : "Show less"}
          </button>
          <button
            onClick={handleClick}
            className=" bg-purple-800 text-white font-bold px-4 py-2 rounded-full  text-base flex items-center gap-2"
          >
            <p>Back</p>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 17 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M15 7.5c0 3.033-2.467 5.5-5.5 5.5h-2.912l2.646 2.646-0.707 0.707-3.853-3.853 3.854-3.854 0.707 0.707-2.647 2.647h2.912c2.481 0 4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5h-7.083v-1h7.083c3.033 0 5.5 2.467 5.5 5.5z"
                  fill="#ffffff"
                />
              </g>
            </svg>
          </button>
          <p className="lg:px-0 py-3 lg:mt-20 mt-10 px-4 text-xl font-bold border-t border-b border-black mb-4">
            About the author
          </p>
          <div>
            <p className="font-bold text-xl mb-3">{selectedBook.author}</p>
            {selectedBook.authorBio && <p>{selectedBook.authorBio}</p>}
          </div>
          <div className="flex flex-col gap-5 leading-relaxed">
            <p>
              Harper Lee, known as Nelle, was born in the Alabama town of
              Monroeville, the youngest of four children of Amasa Coleman Lee
              and Frances Cunningham Finch Lee. Her father, a former newspaper
              editor and proprietor, was a lawyer who served on the state
              legislature from 1926 to 1938. As a child, Lee was a tomboy and a
              precocious reader, and enjoyed the friendship of her schoolmate
              and neighbor, the young Truman Capote.
            </p>
            <p>
              After graduating from high school in Monroeville, Lee enrolled at
              the all-female Huntingdon College in Montgomery (1944-45), and
              then pursued a law degree at the University of Alabama (1945-50),
              pledging the Chi Omega sorority. While there, she wrote for
              several student publications and spent a year as editor of the
              campus humor magazine, "Ramma-Jamma". Though she did not complete
              the law degree, she studied for a summer in Oxford, England,
              before moving to New York in 1950, where she worked as a
              reservation clerk with Eastern Air Lines and BOAC.
            </p>
            <p>
              Lee continued as a reservation clerk until the late 50s, when she
              devoted herself to writing. She lived a frugal life, traveling
              between her cold-water-only apartment in New York to her family
              home in Alabama to care for her father.
            </p>
            <p>
              Having written several long stories, Harper Lee located an agent
              in November 1956. The following month at the East 50th townhouse
              of her friends Michael Brown and Joy Williams Brown, she received
              a gift of a year's wages with a note: "You have one year off from
              your job to write whatever you please. Merry Christmas."
            </p>
            <p>
              Within a year, she had a first draft. Working with J. B.
              Lippincott & Co. editor Tay Hohoff, she completed To Kill a
              Mockingbird in the summer of 1959. Published July 11, 1960, the
              novel was an immediate bestseller and won great critical acclaim,
              including the Pulitzer Prize for Fiction in 1961. It remains a
              bestseller with more than 30 million copies in print. In 1999, it
              was voted "Best Novel of the Century" in a poll by the Library
              Journal.
            </p>
          </div>
          {/*recomend component here  */}
          <RecomentComponent />
        </div>
      </div>
    </div>
  );
};

export default BookDetailComponent;
