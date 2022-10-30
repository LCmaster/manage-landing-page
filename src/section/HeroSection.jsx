import React from "react";
import illustrationIntro from "../asset/images/illustration-intro.svg";
import PrimaryButton from "../component/PrimaryButton";

function HeroSection() {
  const title = "Bring everyone together to build better products";
  const subtitle =
    "Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.";
  return (
    <section id="hero">
      {/* ?Flex Container */}
      <div className="container flex flex-col-reverse items-center mb-32 px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        {/* Left Item */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center text-darkBlue md:text-5xl md:text-left">
            {title}
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            {subtitle}
          </p>
          <div className="flex justify-center md:justify-start">
            <PrimaryButton link="">Get Started</PrimaryButton>
          </div>
        </div>
        {/* Image */}
        <div className="md:w-1/2">
          <img src={illustrationIntro} alt="" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
