import React, { useState } from "react";

import PrimaryButton from "../component/PrimaryButton";
import HeaderLogo from "../component/HeaderLogo";
import MainMenu from "../component/MainMenu";

function Header() {
  const [isMenuOpened, toggleMenu] = useState(false);

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <HeaderLogo />
        <MainMenu />
        <div className="hidden md:block">
          <PrimaryButton>Get Started</PrimaryButton>
        </div>

        {/* Hamburger Menu Button */}
        <button
          id="menu-btn"
          onClick={() => toggleMenu(!isMenuOpened)}
          className={`${
            isMenuOpened && "open"
          } z-[50] md:hidden block hamburger  focus:outline-none`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        {isMenuOpened ? (
          <div className="fixed w-screen h-screen top-0 left-0 bg-black/25"></div>
        ) : null}

        <div
          id="menu"
          className={`${
            isMenuOpened ? "flex" : "hidden"
          } absolute z-[50] flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
