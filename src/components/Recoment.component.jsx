import React from "react";
import useRandomBooks from "../hook/useRandomBooks";
import { useNavigate, useLocation } from "react-router-dom";

const RecomentComponent = () => {

  const { randomBooks } = useRandomBooks();

  const nav = useNavigate();
  const location = useLocation();

  const handleOverwriteLastPath = (id) => {
    // Get the current pathname
    const currentPath = location.pathname;

    const lastIndex = currentPath.lastIndexOf("/");
    // Generate a new path (overwrite the last segment)
    const newPath = currentPath.substring(0, lastIndex);

    // Use the navigate function to update the URL
    nav(`${newPath}/${id}`);
    // console.log(`navigate to ${newPath}/${id}`);
  };

  return (
    <>
      <p className="lg:px-0 py-5 lg:mt-20 md:mt-10 mt-4 px-4 text-xl font-bold underline">
        Recomended for you
      </p>
      <div className="w-full flex lg:flex-row flex-col gap-2">
        {randomBooks.map((bookData) => (
          <div key={bookData.id} className="lg:w-1/4 w-full">
            <div className="lg:h-[300px] h-fit flex flex-col justify-start gap-3 overflow-hidden shadow-md p-3 rounded-lg relative group">
              <img
                className="lg:object-contain object-contain lg:bg-white bg-slate-300 p-2 rounded-lg lg:h-[200px] h-[200px] w-full"
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
                    handleOverwriteLastPath(bookData.id);
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
