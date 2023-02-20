import React from "react";
import { Link } from "react-router-dom";
import Footer from "../layouts/Home/Footer";
import Newsletter from "../layouts/Home/NewsLetter";
import Transitions from "../utils/Transitions";
import DropItem from "../components/Drop/DropItem";
import drops from "../data/drops";
import Button from "../components/Buttons/Button";

function Drop() {
  // Map through drop items
  const dropItems = drops.map((item) => {
    return (
      <DropItem
        key={item.id}
        img={item.image}
        title={item.title}
        creator={item.creator}
        status={item.status}
        time={item.timeRemaining}
      />
    );
  });

  return (
    <Transitions>
      <main>
        <div className="container mx-auto md:pt-10 ">
          <div className="max-w-[1064px] mx-auto px-4 md:px-0">
            <p className="text-[#BCB7B7] hidden md:block">
              <Link to="/">Home</Link>/ <span className="text-grey">Drop</span>{" "}
            </p>
            <section className="flex flex-col items-center justify-center text-center gap-4 mb-10 w-[80%] md:w-full mx-auto">
              <h1 className="text-[2rem] leading-[165%] text-black font-medium">
                Upcoming drops
              </h1>
              <p className="text-xl text-[#616161] leading-[200%]">
                Turn on notification so that no drop will miss you
              </p>
              <Button title="Notify Me" />
            </section>
            <section className="md:my-16">
              {dropItems}
              <Button title="See more" />
            </section>
            <Newsletter />
            <Footer />
          </div>
        </div>
      </main>
    </Transitions>
  );
}

export default Drop;
