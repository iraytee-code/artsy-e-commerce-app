import React, { Fragment, useContext } from "react";
import FilterSort from "../layouts/MarketPlace/FilterSort";
import ProductsPage from "../layouts/Products/ProductsPage";
import SideBar from "../layouts/MarketPlace/SideBar";
import { Context } from "../Context";
import Transitions from "../utils/Transitions";
import ProductSkeletons from "../layouts/SkeletonsLayout/ProductSkeletons";

const MarketPlace = () => {
  const { products } = useContext(Context);

  console.log(products);

  return (
    <Fragment>
      <Transitions>
        <div className="container mx-auto flex">
          <SideBar />
          <main className="px-4 md:px-11 w-full">
            <FilterSort />
            {products.length ? <ProductsPage /> : <ProductSkeletons />}
          </main>
        </div>
      </Transitions>
    </Fragment>
  );
};

export default MarketPlace;
