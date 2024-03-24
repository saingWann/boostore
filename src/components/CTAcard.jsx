import React from "react";
import { useNavigate } from "react-router-dom";

const CTAcard = ({ title, subTitle, message, discount }) => {
  const nav = useNavigate();
  const handleNav = () => {
    nav("/store");
  };
  return (
    <div className="py-10 lg:py-32 md:py-20 flex flex-col items-center gap-4 border-t-2 border-b-2 border-black">
      <h1 className="uppercase font-bold text-center lg:text-4xl md:text-2xl text-xl">
        {subTitle}
      </h1>
      <p className="text-center font-bold lg:text-6xl md:text-4xl text-3xl uppercase">
        {title}
      </p>
      <div className="flex  my-2">
        <p className="text-center lg:px-3 lg:py-2 p-1 lg:text-3xl uppercase border-2 font-bold">
          {message}
        </p>
        <p className="bg-black lg:px-3 lg:py-2 p-1 lg:text-3xl text-white font-bold -translate-x-1 border-black border-2">
          {discount}
        </p>
      </div>
      <button
        className="w-fit flex items-center  gap-3 bg-purple-900 text-white px-6 py-2 font-bold uppercase rounded-xl hover:bg-purple-600 max-sm:text-xs active:bg-purple-900 focus:bg-purple-600 group"
        onClick={handleNav}
      >
        <p>Shop Now</p>
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
  );
};

export default CTAcard;
