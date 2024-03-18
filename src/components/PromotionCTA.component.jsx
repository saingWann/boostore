import React from "react";

const PromotionCTAComponent = () => {
  return (
    <div className=" bg-cta bg-no-repeat bg-center bg-cover">
      <div className="py-10 lg:py-32 md:py-20 flex flex-col items-center gap-4 bg-purple-300/20 backdrop-blur-md ">
        <h1 className="uppercase font-bold text-center lg:text-4xl md:text-2xl text-xl">
          Shop wide range of collections
        </h1>
        <p className="text-center text-white font-bold lg:text-6xl md:text-4xl text-3xl uppercase">
          Book Festival
        </p>
        <div className="flex  my-2">
          <p className="text-center lg:px-3 lg:py-2 p-1 lg:text-3xl uppercase border-2 font-bold">
            all books are flat
          </p>
          <p className="bg-black lg:px-3 lg:py-2 p-1 lg:text-3xl text-white font-bold -translate-x-1">
            50% off
          </p>
        </div>
        <button className="w-fit bg-purple-900 text-white px-4 py-2 font-bold uppercase rounded-xl hover:bg-purple-600 max-sm:text-xs active:bg-purple-900 focus:bg-purple-600">
          shop now
        </button>
      </div>
    </div>
  );
};

export default PromotionCTAComponent;
