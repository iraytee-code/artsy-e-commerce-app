import React, { Fragment } from "react";
import NavBar from "../components/NavBar";
import Banner from "../layouts/Banner";
import HeroCarousel from "../layouts/HeroCarousel";
import HeroMobile from "../layouts/HeroMobile";
import FeaturedProducts from "../layouts/FeaturedProducts";
import Upcoming from "../layouts/Upcoming";
import Explore from "../layouts/Explore";
import Creators from "../layouts/Creators";
import NewsLetter from "../layouts/NewsLetter";
import Footer from "../layouts/Footer";
const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Banner />
      <div className="md:overflow-x-scroll">
        <HeroCarousel />
        <HeroMobile />
      </div>
      <main className="overflow-hidden">
        <FeaturedProducts />
        <Upcoming />
        <section className="mb-[100px] md:mb-[180px]">
          <Explore content="Explore marketplace" link="/marketplace" />
          <Explore content="See auctions" link="/auctions" />
        </section>
        <Creators />
        <NewsLetter className="px-4 md:px-0" />
      </main>
      <div className="px-4 md:px-0">
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
