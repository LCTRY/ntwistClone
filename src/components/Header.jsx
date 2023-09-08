import React from "react";
import { useState, useEffect } from "react";
import LargeScreenNav from "../Features/LargeScreenNav";
import SmallScreenNav from "../Features/SmallScreenNav";

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isHeaderLight, setHeaderLight] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        document.getElementById("header").style.backgroundColor = "white";
        setHeaderLight(true);
      } else {
        document.getElementById("header").style.backgroundColor = "transparent";
        setHeaderLight(false);
      }
    });

    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
  });

  return (
    <div id="header" className="header">
      <div className="header__logo_section">
        {!isHeaderLight && (
          <img
            className="header__logo"
            src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
            alt="NTWIST logo dark"
          />
        )}
        {isHeaderLight && (
          <img
            className="header__logo"
            src="https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png"
            alt="NTWIST logo dark"
          />
        )}
      </div>
      <div className="header__menu_section">
        {windowWidth > 1025 && <LargeScreenNav />}
        {windowWidth < 1025 && <SmallScreenNav />}
      </div>
    </div>
  );
}

export default Header;
