import React, { Fragment } from "react";

const BrandLogo = ({ src }) => {
  return (
    <Fragment>
      <div className="px-[30px]  mb-[50px]">
        <img src={src} alt="logo_text" />
      </div>
    </Fragment>
  );
};

export default BrandLogo;
