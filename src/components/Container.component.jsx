import React from "react";

const ContainerComponent = ({ children }) => {
  return (
    <div className="lg:max-w-7xl md:max-w-5xl w-full  mx-auto">{children}</div>
  );
};

export default ContainerComponent;
