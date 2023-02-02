import React, { Fragment } from "react";
import NavBar from "../components/NavBar";
import Banner from "../layouts/Banner";
import HeroCarousel from "../layouts/HeroCarousel";

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Banner />
      <div className="md:overflow-x-scroll">
        <HeroCarousel />
      </div>
    </Fragment>
  );
};

export default Home;
