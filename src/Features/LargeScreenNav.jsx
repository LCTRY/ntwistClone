import React from "react";
import { useState, useEffect, useRef } from "react";

function LargeScreenNav() {
  const [isOpen, setOpen] = useState(false);
  const [isHeaderLight, setHeaderLight] = useState(false);
  let menuRef = useRef();

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

  function openMenu() {
    setOpen(true);
  }

  function DropdownMenu(props) {
    return (
      <li>
        <div ref={menuRef} id="test" onMouseEnter={openMenu}>
          <div>
            <a
              id="header__open_list"
              className={`effect__underline ${
                props.color ? "effect_dark" : ""
              }`}
            >
              Industries
            </a>
            <span
              className={`header__dropdown_arrow ${
                props.color ? "effect_dark" : ""
              }`}
            >
              <i class="fas fa-caret-down"></i>
            </span>
          </div>

          <div
            className={`header__dropdown_menu ${
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
        <a
          className={`effect__underline ${props.color ? "effect_dark" : ""}`}
          href="/"
        >
          {props.text}
        </a>
      </li>
    );
  }

  return (
    <div id="header" className="header">
      <div className="header__menu_section">
        <ul>
          <MenuItem text={"Home"} color={isHeaderLight} />
          <DropdownMenu color={isHeaderLight} />
          <MenuItem text={"Blog"} color={isHeaderLight} />
          <MenuItem text={"Contact Us"} color={isHeaderLight} />
        </ul>
      </div>
    </div>
  );
}

export default LargeScreenNav;
