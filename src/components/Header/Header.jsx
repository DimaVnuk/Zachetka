import React from "react";
import NavbarLink from "./Navbar/NavbarLink";

function Header() {
  return (
    <>
      <header className="header-navbar">
        <div className="header-navbar__navbar-title navbar-title navbar-title-wrap">
            <div className="navbar-title__title title">HELPER.BY</div>
            <div className="navbar-title__subtitle subtitle">Education Helper Service</div>
        </div>
        <div className="header-navbar__navbar-link-cont navbar-link-cont navbar-link-cont_wrap">
             <NavbarLink>Инфо</NavbarLink>
             <NavbarLink>Услуги</NavbarLink>
             <NavbarLink>Заказать</NavbarLink>
             <NavbarLink>Готовые Работы</NavbarLink>
             <NavbarLink>Меню</NavbarLink>
        </div>
      </header>
    </>
  );
}

export default Header;
