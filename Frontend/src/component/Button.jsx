import React from "react";

const Button = ({ btnName, btnfunction, isError = false }) => {
  return (
    <div className="flex flex-row items-center">
      <button
        className={`rounded-lg p-3 m-3 ${
          !isError
            ? "bg-gradient-to-t from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600"
            : "bg-gradient-to-t from-red-600 to-red-500 hover:from-red-700 hover:to-red-600"
        } w-full`}
        onClick={btnfunction}
      >
        {btnName}
      </button>
    </div>
  );
};

export default Button;
