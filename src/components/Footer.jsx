import React from "react";

function footer() {
  return (
    <div className="footer">
      <div>
        <img
          className="header__logo"
          src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
          alt="NTWIST logo dark"
        />
      </div>
      <div className="footer__menu">
        <ul>
          <li>
            <a className="footer__links" href="/">
              {" "}
              Home{" "}
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className="footer__links" href="/">
              {" "}
              About Us{" "}
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className="footer__links" href="/">
              {" "}
              Contact Us{" "}
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className="footer__links darkTheme" href="/">
              {" "}
              Privacy Policy{" "}
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className="footer__links darkTheme" href="/">
              {" "}
              Sitemap{" "}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className="footer__text">
          9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
        </p>
      </div>
      <div className="footer__container">
        <a
          className="footer__socialMedia_btn interactive"
          href="https://twitter.com/IncNtwist"
          target="_blank"
        >
          <p className="footer__link_text darkTheme">
            <i class="fab fa-twitter"></i>
          </p>
        </a>
        <a
          className="footer__socialMedia_btn interactive"
          href="https://www.linkedin.com/company/ntwist/"
          target="_blank"
        >
          <p className="footer__link_text darkTheme">
            <i class="fab fa-linkedin contact_pic"></i>
          </p>
        </a>
      </div>
      <div>
        <p className="footer__text">© 2022. Ntwist Inc.</p>
      </div>
    </div>
  );
}

export default footer;
