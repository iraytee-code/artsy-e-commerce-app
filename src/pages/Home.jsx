import React, { Fragment } from "react";
import Banner from "../layouts/Home/Banner";
import HeroCarousel from "../layouts/Home/HeroCarousel";
import HeroMobile from "../layouts/Home/HeroMobile";
import FeaturedProducts from "../layouts/Home/FeaturedProducts";
import Upcoming from "../layouts/Home/Upcoming";
import Explore from "../layouts/Home/Explore";
import Creators from "../layouts/Home/Creators";
import NewsLetter from "../layouts/Home/NewsLetter";
import Footer from "../layouts/Home/Footer";
const Home = () => {
  return (
    <Fragment>
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
