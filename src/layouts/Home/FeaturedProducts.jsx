import React, { Fragment } from "react";
import Featured from "../../components/Featured";
import featured1 from "../../assets/images/featured/Featured-product-1.png";
import featured2 from "../../assets/images/featured/Featured-product-2.png";
import featured3 from "../../assets/images/featured/Featured-product-3.png";

const FeaturedProducts = () => {
  return (
    <Fragment>
      <section className="mb-[100px] md:mb-[186px]">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="font-bold md:font-medium text-[1.75rem] md:text-[3rem] leading-[4rem] md:mb-9">
            Featured products
          </h2>
          <div className="">
            <Featured img={featured3} />
            <Featured img={featured2} />
            <Featured img={featured1} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default FeaturedProducts;
