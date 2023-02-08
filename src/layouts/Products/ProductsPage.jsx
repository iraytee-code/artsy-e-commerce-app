import React, { Fragment, useContext, useState } from "react";
import { Context } from "../../Context";
import Button from "../../components/Buttons/Button";
import ProductItem from "../../components/Products/ProductItem";

const ProductsPage = () => {
  const { products } = useContext(Context);
  const [showMore, setShowMore] = useState(false);

  const productItems = products?.map((item, index) => {
    if (index <= 8) {
      return (
        <ProductItem
          id={item.id}
          key={item.id}
          img={item.url}
          title={item.name}
          price={item.price.usd}
        />
      );
    }
  });
  const allProductItems = products?.map((item) => {
    return (
      <ProductItem
        id={item.id}
        key={item.id}
        img={item.url}
        title={item.name}
        price={item.price.eth}
      />
    );
  });
  return (
    <Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center  md:gap-10">
        {showMore ? allProductItems : productItems}
      </div>

      {!showMore && (
        <Button onClick={() => setShowMore(true)} title="See more" />
      )}
      {showMore && (
        <button
          onClick={() => setShowMore(false)}
          className="flex items-center gap-[13px] ml-auto md:hidden"
        >
          See Less
          <svg
            width="54"
            height="53"
            viewBox="0 0 54 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="27.5"
              cy="26.5"
              r="26.25"
              stroke="black"
              strokeWidth="0.5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 27C10 26.6759 10.1279 26.3651 10.3556 26.1359C10.5833 25.9067 10.8922 25.7779 11.2142 25.7779H39.8525L32.2103 18.0888C31.9823 17.8593 31.8542 17.5481 31.8542 17.2236C31.8542 16.8991 31.9823 16.5879 32.2103 16.3584C32.4383 16.1289 32.7475 16 33.07 16C33.3924 16 33.7016 16.1289 33.9296 16.3584L43.6433 26.1348C43.7564 26.2483 43.8461 26.3832 43.9073 26.5316C43.9685 26.6801 44 26.8393 44 27C44 27.1607 43.9685 27.3199 43.9073 27.4684C43.8461 27.6168 43.7564 27.7517 43.6433 27.8652L33.9296 37.6416C33.7016 37.8711 33.3924 38 33.07 38C32.7475 38 32.4383 37.8711 32.2103 37.6416C31.9823 37.4121 31.8542 37.1009 31.8542 36.7764C31.8542 36.4519 31.9823 36.1407 32.2103 35.9112L39.8525 28.2221H11.2142C10.8922 28.2221 10.5833 28.0933 10.3556 27.8641C10.1279 27.6349 10 27.3241 10 27Z"
              fill="#616161"
            />
          </svg>
        </button>
      )}
    </Fragment>
  );
};

export default ProductsPage;
