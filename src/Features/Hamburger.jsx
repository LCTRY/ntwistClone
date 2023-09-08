import React from "react";

function handleClick() {
  document.body.classList.toggle("nav-open");
}

function Hamburger() {
  return (
    <div className="header2">
      <button
        className="header__toggleMenu"
        aria-label="toggle navigation"
        onClick={handleClick}
      >
        <span className="header__hamburger"></span>
      </button>
    </div>
  );
}

export default Hamburger;
