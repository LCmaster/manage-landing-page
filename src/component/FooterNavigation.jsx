import React from "react";

function sliceArray(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

function FooterNavigation() {
  const navLinks = [
    { link: "#", text: "Home" },
    { link: "#", text: "Pricing" },
    { link: "#", text: "Products" },
    { link: "#", text: "About Us" },
    { link: "#", text: "Careers" },
    { link: "#", text: "Community" },
    { link: "#", text: "Privacy Policy" },
  ];

  return (
    <div className="flex justify-around space-x-32">
      {sliceArray(navLinks, 4).map((section, sectionIndex) => {
        return (
          <div
            key={sectionIndex}
            className="flex flex-col space-y-3 text-white"
          >
            {section.map((entry, index) => (
              <a key={index} href={entry.link} className="hover:text-brightRed">
                {entry.text}
              </a>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default FooterNavigation;
