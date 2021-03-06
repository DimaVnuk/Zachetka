import React from "react";

import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="header-navbar">
        <div className="header-navbar__navbar-title navbar-title navbar-title-wrap">
          <Link
            to="/"
            style={{ color: "black", textDecoration: "none" }}
          >
            <div className="navbar-title__title title">HELPER.BY</div>
          </Link>
          <div className="navbar-title__subtitle subtitle">
            Education Helper Service
          </div>
        </div>
        <div className="header-navbar__navbar-link-cont navbar-link-cont navbar-link-cont_wrap">
        </div>
      </header>
    </>
  );
}

export default Header;
