import React from "react";

function PrimaryButton({ children, link }) {
  return (
    <a
      href="#"
      className="p-2 px-4 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
    >
      {children}
    </a>
  );
}

export default PrimaryButton;
