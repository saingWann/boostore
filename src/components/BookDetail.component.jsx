import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import RecomentComponent from "./Recoment.component";

const BookDetailComponent = ({ selectedBook }) => {
  const [readMore, setReadMore] = useState(false);
  const nav = useNavigate();

  const handleClick = () => {
    nav(-1);
  };

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div className=" w-full lg:p-10 md:p-10 flex justify-center items-center">
      <div className="flex lg:flex-row flex-col items-start justify-center w-full isolate">
        <div className={`lg:w-1/3 w-full flex items-start relative`}>
          <div
            style={{ backgroundImage: `url(${selectedBook.imgUrl})` }}
            className="blur-sm lg:h-[600px] h-[300px] w-full  bg-cover bg-blend-multiply bg-gray-800/30"
          ></div>
          <img
            className=" lg:object-contain object-contain absolute inset-0 lg:h-[600px] h-[300px] w-full z-20"
            src={selectedBook.imgUrl}
            alt="bookcover.jpeg"
          />
        </div>
        <div className="lg:w-1/2 w-full lg:mx-10 lg:my-5 p-5">
          <p className="font-bold text-2xl">{selectedBook.book}</p>
          <p className="font-semibold text-sm text-gray-600/70 pt-2">
            {selectedBook.author}
          </p>
          <span className="my-5 flex gap-10 items-center justify-start">
            <p className="font-bold text-xl text-purple-600">
              $ {selectedBook.price}
            </p>
            <button className="flex gap-3 items-center bg-purple-600 text-white px-5 py-3 rounded-full hover:bg-purple-500 hover:shadow-md">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {"{"}" "{"}"}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 2C14 1.44772 13.5523 1 13 1C12.4477 1 12 1.44772 12 2V8.58579L9.70711 6.29289C9.31658 5.90237 8.68342 5.90237 8.29289 6.29289C7.90237 6.68342 7.90237 7.31658 8.29289 7.70711L12.2929 11.7071C12.6834 12.0976 13.3166 12.0976 13.7071 11.7071L17.7071 7.70711C18.0976 7.31658 18.0976 6.68342 17.7071 6.29289C17.3166 5.90237 16.6834 5.90237 16.2929 6.29289L14 8.58579V2ZM1 3C1 2.44772 1.44772 2 2 2H2.47241C3.82526 2 5.01074 2.90547 5.3667 4.21065L5.78295 5.73688L7.7638 13H18.236L20.2152 5.73709C20.3604 5.20423 20.9101 4.88998 21.4429 5.03518C21.9758 5.18038 22.29 5.73006 22.1448 6.26291L20.1657 13.5258C19.9285 14.3962 19.1381 15 18.236 15H8V16C8 16.5523 8.44772 17 9 17H16.5H18C18.5523 17 19 17.4477 19 18C19 18.212 18.934 18.4086 18.8215 18.5704C18.9366 18.8578 19 19.1715 19 19.5C19 20.8807 17.8807 22 16.5 22C15.1193 22 14 20.8807 14 19.5C14 19.3288 14.0172 19.1616 14.05 19H10.95C10.9828 19.1616 11 19.3288 11 19.5C11 20.8807 9.88071 22 8.5 22C7.11929 22 6 20.8807 6 19.5C6 18.863 6.23824 18.2816 6.63048 17.8402C6.23533 17.3321 6 16.6935 6 16V14.1339L3.85342 6.26312L3.43717 4.73688C3.31852 4.30182 2.92336 4 2.47241 4H2C1.44772 4 1 3.55228 1 3ZM16 19.5C16 19.2239 16.2239 19 16.5 19C16.7761 19 17 19.2239 17 19.5C17 19.7761 16.7761 20 16.5 20C16.2239 20 16 19.7761 16 19.5ZM8 19.5C8 19.2239 8.22386 19 8.5 19C8.77614 19 9 19.2239 9 19.5C9 19.7761 8.77614 20 8.5 20C8.22386 20 8 19.7761 8 19.5Z"
                    fill="#ffffff"
                  />
                  {"{"}" "{"}"}
                </g>
              </svg>

              <p>Add to cart</p>
            </button>
          </span>
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
                {"{"}" "{"}"}
                <path
                  d="M15 7.5c0 3.033-2.467 5.5-5.5 5.5h-2.912l2.646 2.646-0.707 0.707-3.853-3.853 3.854-3.854 0.707 0.707-2.647 2.647h2.912c2.481 0 4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5h-7.083v-1h7.083c3.033 0 5.5 2.467 5.5 5.5z"
                  fill="#ffffff"
                />
                {"{"}" "{"}"}
              </g>
            </svg>
          </button>
          {/*recomend component here  */}
          <RecomentComponent />
        </div>
      </div>
    </div>
  );
};

export default BookDetailComponent;
