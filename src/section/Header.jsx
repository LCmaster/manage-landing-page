import React from "react";

import PrimaryButton from "../component/PrimaryButton";
import HeaderLogo from "../component/HeaderLogo";
import MainMenu from "../component/MainMenu";

function Header() {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <HeaderLogo />
        <MainMenu />
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </nav>
  );
}

export default Header;
