import React from "react";

const Button = ({ btnText }) => {
  return (
    <div>
      <button type="submit" className="flex justify-center py-2 px-3 md:px-8 text-white bg-primary border border-primary rounded-sm hover:bg-red-800 w-60 sm:w-48 lg:w-64 text-xl hover:border-red-800 transition-all duration-300 cursor-pointer tracking-wider">{btnText}</button>
    </div>
  );
};

export default Button;
