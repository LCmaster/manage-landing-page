import React from "react";

import iconFacebook from "../asset/images/icon-facebook.svg";
import iconTwitter from "../asset/images/icon-twitter.svg";
import iconPinterest from "../asset/images/icon-pinterest.svg";
import iconYoutube from "../asset/images/icon-youtube.svg";
import iconInstagram from "../asset/images/icon-instagram.svg";

import FooterLogo from "../component/FooterLogo";
import SocialIconLink from "../component/SocialIconLink";
import FooterNavigation from "../component/FooterNavigation";
import CopyrightClaim from "../component/CopyrightClaim";

function Footer() {
  const socialIcons = [
    {
      name: "FaceBook",
      link: "#",
      icon: iconFacebook,
    },
    {
      name: "Youtube",
      link: "#",
      icon: iconYoutube,
    },
    {
      name: "Twitter",
      link: "#",
      icon: iconTwitter,
    },
    {
      name: "Pinterest",
      link: "#",
      icon: iconPinterest,
    },
    {
      name: "Instagram",
      link: "#",
      icon: iconInstagram,
    },
  ];
  return (
    <footer className="bg-veryDarkBlue">
      {/* Container */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="md:hidden text-center">
            <CopyrightClaim />
          </div>
          {/* Logo */}
          <FooterLogo />
          {/* Social Links */}
          <div className="flex justify-center space-x-2">
            {socialIcons.map((entry, index) => (
              <SocialIconLink
                key={index}
                icon={entry.icon}
                name={entry.name}
                link={entry.link}
              />
            ))}
          </div>
        </div>
        {/* Secondary Nav */}
        <FooterNavigation />
        {/* Input Container */}
        <div className="flex flex-col justify-between">
          <form action="">
            <div className="flex space-x-3">
              <input
                type="text"
                className="px-4 rounded-full focus:outline-none"
                placeholder="Updates in your inbox…"
              />
              <button className="px-4 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden md:block text-right">
            <CopyrightClaim />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
