import React from "react";

const Button = ({ btnText }) => {
  return (
    <div>
      <button type="submit" className="p-2 text-white bg-primary h-full w-full rounded-sm">{btnText}</button>
    </div>
  );
};

export default Button;
