import React, { Fragment } from "react";

const Button = ({ onClick, title }) => {
  return (
    <Fragment>
      <button
        onClick={onClick}
        className="border border-grey rounded-[10px] py-4 px-[3.75rem] text-2xl font-medium text-grey block mx-auto my-[100px] md:block hover:bg-black hover:text-white animate-pulse"
      >
        {title}
      </button>
    </Fragment>
  );
};

export default Button;
