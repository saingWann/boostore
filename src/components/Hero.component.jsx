import React from "react";

const HeroComponent = () => {
  return (
    <div className="bg-hero-pattern h-[600px] max-sm:min-h-screen lg:bg-slate-800/40 bg-slate-800/60 bg-blend-multiply justify-center items-center flex">
      <div className="container mx-auto flex flex-col items-center text-white max-sm:px-3">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Dive into the World of Literature
        </h1>
        <h2 className="text-3xl md:text-7xl font-extrabold mb-6 text-center">
          Explore Our Vast Collection
        </h2>
        <p className="text-lg max-sm:bg-gray-800/20 max-sm:p-5 max-sm:backdrop-blur-sm rounded-lg md:text-xl text-center max-w-4xl leading-relaxed mb-8">
          Welcome to our online book store, where stories come to life. Immerse
          yourself in a world of imagination, knowledge, and adventure. Whether
          you're a seasoned reader or just starting your literary journey, we
          have something for everyone.
        </p>
        <a
          href="#featured-books"
          className="bg-purple-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-purple-400 transition duration-300"
        >
          Discover Your Next Read
        </a>
      </div>
    </div>
  );
};

export default HeroComponent;
