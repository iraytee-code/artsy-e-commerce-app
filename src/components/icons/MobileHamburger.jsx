import React, { Fragment } from "react";

const MobileHamburger = ({ onClick }) => {
  return (
    <Fragment>
      <svg
        onClick={onClick}
        className="md:hidden"
        width="40"
        height="35"
        viewBox="0 0 40 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 24.5H29.0312M10 17.25H29.0312M10 10H29.0312"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Fragment>
  );
};

export default MobileHamburger;
