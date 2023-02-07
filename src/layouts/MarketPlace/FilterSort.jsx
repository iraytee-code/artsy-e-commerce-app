import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const FilterSort = () => {
  return (
    <Fragment>
      <article className="md:hidden text-[#BCB7B7] mb-4">
        <p className="text-lg font-medium leading-[51.5px] mb-4">
          <Link to="/">Home/</Link> <Link to="marketplace">Marketplace/</Link>{" "}
          <span className="text-grey">Editorials</span>
        </p>
        <p className="font-poppin">
          <i>See 1-6 of 15 results</i>
        </p>
      </article>
      <div className="w-full h-[3.75rem] text-black text-lg leading-[150%] rounded-[15px] shadow-5xl md:shadow-4xl border mb-8 flex items-center justify-between px-4">
        <p className="hidden md:block">See 1-6 of 15 results</p>
        <select
          name="filter-by"
          id="filter-by"
          className="md:hidden  border-black md:border-[0.4px] p-2 rounded-lg focus:outline-0 bg-transparent"
        >
          <option value="">Filter</option>
        </select>
        <select
          name="sort-by"
          id="sort-by"
          className=" border-black md:border-[0.4px] p-2 md:px-8 rounded-lg focus:outline-0 bg-transparent"
        >
          <option value="">Sort By</option>
        </select>
      </div>
    </Fragment>
  );
};

export default FilterSort;
