import React, { Fragment } from "react";
import Skeletons from "../../components/LazyLoaders/Skeletons";

const ProductSkeletons = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center  md:gap-10">
        <Skeletons />
        <Skeletons />
        <Skeletons />
        <Skeletons />
        <Skeletons />
        <Skeletons />
        <Skeletons />
        <Skeletons />
        <Skeletons />
      </div>
    </Fragment>
  );
};

export default ProductSkeletons;
