import React from "react";
import UseAnimations from "react-useanimations";
import alertTriangle from "react-useanimations/lib/alertTriangle";

const ErrorAnimation = () => (
  <div className="h-screen w-full flex flex-col justify-center items-center">
    <UseAnimations animation={alertTriangle} size={56} />
    <p className="font-bold text-base">Opps something went wrong...</p>
  </div>
);

export default ErrorAnimation;
