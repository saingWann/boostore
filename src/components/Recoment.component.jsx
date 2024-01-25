import React from "react";
import useRandomBooks from "../hook/useRandomBooks";
import { useNavigate, useLocation } from "react-router-dom";

const RecomentComponent = () => {
  //   const [randomBooks, setRandomBooks] = useState([]);
  const { randomBooks } = useRandomBooks();

  const nav = useNavigate();
  const location = useLocation();

  const handleCLick = (id) => {
    console.log(location.pathname);

    nav(`detial${id}`);
  };

  return (
    <>
      <p className="py-5 text-xl font-bold underline">Recomended for you</p>
      <div className="w-full flex gap-2">
        {randomBooks.map((bookData) => (
          <div key={bookData.id} className="lg:w-1/4 md:w-1/3 w-full">
            <div className="lg:h-[420px] h-fit flex flex-col justify-around gap-3 overflow-hidden shadow-md p-3 rounded-lg relative group">
              <img
                className="lg:object-contain object-cover lg:h-[400px] h-[200px] w-full"
                src={bookData.imgUrl}
                alt="bookCover.jpeg"
              />
              <span className="w-full flex flex-col items-start">
                <p className="font-bold text-xs">{bookData.book}</p>
                <p className="text-xs">{bookData.author}</p>
              </span>

              <span className="w-full px-5 pt-5 pb-10 flex flex-col items-center justify-center absolute bg-gray-50 -bottom-[20rem] left-0 transition-all duration-200 group-hover:bottom-0 ">
                <p className="font-bold">{bookData.book}</p>
                <p className="text-xs mb-5">{bookData.author}</p>
                <button
                  onClick={() => {
                    handleCLick(bookData.id);
                  }}
                  className="px-4 py-2 bg-purple-900 text-white rounded-xl"
                >
                  More Detail
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecomentComponent;
