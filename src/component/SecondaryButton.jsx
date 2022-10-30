import React from "react";

function SecondaryButton({ children, link }) {
  return (
    <a
      href="#"
      className="p-2 px-4 text-brightRed bg-white rounded-full shadow-2xl baseline hover:text-brightRedLight"
    >
      {children}
    </a>
  );
}

export default SecondaryButton;
