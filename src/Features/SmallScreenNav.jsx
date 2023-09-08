import React from "react";
import Hamburger from "./Hamburger";
import { useState, useEffect, useRef } from "react";

function SmallScreenNav() {
  const [isOpen, setOpen] = useState(false);
  const [isHeaderLight, setHeaderLight] = useState(false);
  let menuRef = useRef();

  function openMenu() {
    setOpen(true);
  }

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
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  function DropdownMenu(props) {
    return (
      <li>
        <div ref={menuRef} onMouseDown={openMenu}>
          <div>
            <a
              id="header__open_list"
              className={`effect__underline ${
                props.color ? "effect_dark" : ""
              }`}
            >
              Industries
            </a>
            <span className="header__small_dropdown_arrow">
              <i class="fas fa-caret-down"></i>
            </span>
          </div>

          <div
            className={`header__smalldropdown_menu ${
              isOpen ? "active" : "inactive"
            }`}
          >
            <ul className="header__dropdown_menu_list">
              <MenuItem text={"Sustainability"} />
              <MenuItem text={"Mineral Processing"} />
              <MenuItem text={`Mine-To-Mill-To-Mine Optimization`} />
              <MenuItem text={"Oil & Gas"} />
            </ul>
          </div>
        </div>
      </li>
    );
  }

  function MenuItem(props) {
    return (
      <li>
        <a className={`effect__underline`} href="/">
          {props.text}
        </a>
      </li>
    );
  }
  return (
    <div id="smallScreenHeader" className="smallScreenHeader">
      <div>
        <Hamburger />
      </div>
      <div className="smallScreen_menu_container">
        <div className="smallScreen_menu_items_wrapper">
          <MenuItem text={"Home"} />
          <DropdownMenu />
          <MenuItem text={"Blog"} />
          <MenuItem text={"Contact Usome"} />
        </div>
      </div>
    </div>
  );
}

export default SmallScreenNav;
