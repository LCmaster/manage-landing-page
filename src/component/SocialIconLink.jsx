import React from "react";

function SocialIconLink({ icon, name, link }) {
  return (
    <a href={link}>
      <img src={icon} alt={name} className="h-4" />
    </a>
  );
}

export default SocialIconLink;
