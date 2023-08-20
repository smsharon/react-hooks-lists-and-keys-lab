import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
   //<nav>{/* display an <a> tag for each link here */}</nav>;
   const navBar = links.map(link => (
    <a key={link} href={`#${link}`}>
      {link}
    </a>
  ));
   return <nav>{navBar}</nav>;
}

export default NavBar;
