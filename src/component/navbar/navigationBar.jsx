import style from "../navbar/navigationBar.module.css";
import brandLogo from "/src/assets/workedge-logo.png";
import closeSvg from "/src/assets/close.svg";

import Hamburger from "hamburger-react";
import { useState } from "react";

function navigationBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <nav className={style.nav}>
        <div className={style.navBrand}>
          <a href="">
            <img src={brandLogo} className={`${style.brandImg}`}></img>
          </a>
        </div>
        <ul className={style.navMenu}>
          <li className={style.navItems}>
            <a href="" className={style.navLink}>
              Home
            </a>
          </li>
          <li className={style.navItems}>
            <a href="" className={style.navLink}>
              Services
            </a>
          </li>
          <li className={style.navItems}>
            <a href="" className={style.navLink}>
              About
            </a>
          </li>
          <li className={style.navItems}>
            <a href="" className={style.navLink}>
              Contact
            </a>
          </li>
        </ul>

        <div className={style.hamburger}>
          <Hamburger
            size={28}
            toggled={isNavOpen}
            toggle={() => setIsNavOpen(!isNavOpen)}
          />
        </div>
      </nav>

      <div
        className={`${style.mobileNavContainer} ${
          isNavOpen ? style.active : ""
        }`}
      >
        <div className={style.navBackground}></div>
        <ul className={style.mobileNav}>
          <div className="absolute top-4 right-4">
            <button onClick={() => setIsNavOpen(false)}>
              <img src={closeSvg} className="w-5" />
            </button>
          </div>

          <li>
            <a href="" className={style.navLink}>
              Home
            </a>
          </li>
          <li>
            <a href="" className={style.navLink}>
              Services
            </a>
          </li>
          <li>
            <a href="" className={style.navLink}>
              About
            </a>
          </li>
          <li>
            <a href="" className={style.navLink}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default navigationBar;
