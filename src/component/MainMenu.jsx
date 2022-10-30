import React from "react";

function MainMenu() {
  const menuEntries = [
    { text: "Pricing", link: "#" },
    { text: "Product", link: "#" },
    { text: "About Us", link: "#" },
    { text: "Careers", link: "#" },
    { text: "Community", link: "#" },
  ];
  return (
    <div className="hidden md:flex space-x-6">
      {menuEntries.map((entry, index) => (
        <a className="hover:text-darkGrayishBlue" href={entry.link} key={index}>
          {entry.text}
        </a>
      ))}
    </div>
  );
}

export default MainMenu;
