import React from "react";

function Testimonial({ children, name, image }) {
  return (
    <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
      <img className="w-16 -mt-14" src={image} alt={name} />
      <h5 className="font-bold text-base text-darkBlue">{name}</h5>
      <p className="text-sm text-center text-darkGrayishBlue">{children}</p>
    </div>
  );
}

export default Testimonial;
