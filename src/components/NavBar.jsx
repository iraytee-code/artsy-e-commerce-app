import React, { useRef, useContext } from "react";
import HamburgerIcon from "./icons/HamburgerIcon";
import MobileHamburger from "./icons/MobileHamburger";
import BrandLogo from "./icons/BrandLogo";
import ChatIcon from "./icons/ChatIcon";
import Logo from "../assets/images/navImages/ARTSY.png";
import BranLogoWeb from "./icons/BranLogoWeb";
import SearchIcon from "./icons/SearchIcon";
import CartIcon from "./icons/CartIcon";
import BellIcon from "./icons/BellIcon";
import { Link } from "react-router-dom";

function NavBar() {
  const mobileNav = useRef();
  let navLinks = [
    { name: "Home", link: "/", id: "home" },
    { name: "Marketplace", link: "marketplace", id: "marketplace" },
    { name: "Auctions", link: "auctions", id: "auctions" },
    { name: "Drop", link: "/", id: "drop" },
  ];

  const switchActive = (id) => {
    // Setting active navigation menu
    document.querySelectorAll(".nav-items li").forEach((item) => {
      // remove active from all navigations
      item.classList.remove("active");
    });
    // Set active to the clicked item
    document.getElementById(id).classList.add("active");
  };

  // Showing or hide navigation for mobile
  const toggleNav = () => {
    mobileNav.current.classList.toggle("w-0");
  };

  return (
    <>
      <div
        ref={mobileNav}
        className="h-screen w-full bg-white z-[9999] fixed top-0 left-0 pt-8 transition-all w-0 overflow-hidden"
      >
        <HamburgerIcon onClick={toggleNav} />
        <div to="/">
          <BrandLogo src={Logo} />
        </div>
        <ul className="px-[30px]">
          {navLinks?.map((link) => (
            <li key={link.name} className="mobile-nav">
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <ChatIcon />
      </div>
      <header className="pt-5 pb-10">
        <div className="container mx-auto">
          <div className="max-w-[1064px] flex items-center justify-between mx-auto">
            <MobileHamburger onClick={toggleNav} />
            <BranLogoWeb />
            <nav className="hidden md:block">
              <ul className="nav-items">
                {navLinks?.map((link) => (
                  <li
                    id={link.id}
                    key={link.name}
                    className="nav cursor-pointer"
                    onClick={() => switchActive(`${link.id}`)}
                  >
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex">
              <SearchIcon />
              <CartIcon />
              <BellIcon />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
