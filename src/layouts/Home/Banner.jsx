import React, { Fragment } from "react";

const Banner = () => {
  return (
    <Fragment>
      <div className="text-center">
        <h1 className="mb-[30px] font-medium md:font-semibold font-clash text-center md:text-[80px] text-[2rem] px-4 leading-[150%] md:leading-[120%] max-w-[1068px] mx-auto">
          Photography is poetry & beautiful untold stories
        </h1>
        <p className="md:text-[1.25rem] font-medium px-4 text-center max-w-[926px] mx-auto leading-[156%] md:leading-[120%]">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </div>
    </Fragment>
  );
};

export default Banner;
