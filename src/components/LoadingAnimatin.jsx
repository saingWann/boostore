import React from "react";
import UseAnimations from "react-useanimations";
import loading2 from "react-useanimations/lib/loading2";

const LoadingAnimation = () => (
  <div className="h-screen w-full flex flex-col justify-center items-center">
    <UseAnimations animation={loading2} size={56} />
    <p className="font-bold text-base">Loading...</p>
  </div>
);

export default LoadingAnimation;
