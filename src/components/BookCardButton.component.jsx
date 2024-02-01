import React, { Children } from "react";

const BookCardButton = ({ children, handleCLick }) => {
  return (
    <div>
      <button
        onClick={handleCLick}
        className="px-4 py-2 bg-purple-900 text-white rounded-xl hover:shadow-lg hover:bg-purple-800"
      >
        {children}
      </button>
    </div>
  );
};

export default BookCardButton;
