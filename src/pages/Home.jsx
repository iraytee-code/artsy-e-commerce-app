import React, { Fragment } from "react";
import NavBar from "../components/NavBar";
import Banner from "../layouts/Banner";
import HeroCarousel from "../layouts/HeroCarousel";
import Transitions from "../utils/Transitions";

const Home = () => {
  return (
    <Fragment>
      <Transitions>
        <NavBar />
        <Banner />
        <div className="md:overflow-x-scroll">
          <HeroCarousel />
        </div>
      </Transitions>
    </Fragment>
  );
};

export default Home;
