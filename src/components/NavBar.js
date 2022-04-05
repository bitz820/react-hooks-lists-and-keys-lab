import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const singleLink = links.map(link => {
    console.log(link)
    return link = <a href={'#'+link} key={link}>{link}</a>})
  
  return (
  <nav>
    {singleLink}
  </nav>
  );
}

export default NavBar;
