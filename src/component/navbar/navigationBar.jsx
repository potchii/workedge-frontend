import style from "../navbar/navigationBar.module.css";
import brandLogo from "/src/assets/workedge-logo.png";

function navigationBar() {
  return (
    <div>
      <nav className={style.nav}>
        <a href="">
          <img src={brandLogo} className=""></img>
        </a>
        <ul className={style.navMenu}>
          <li className={style.navItems}>
            <a href="" className={style.navLink}>
              Home
            </a>
          </li>
          <li className={style.navItems}>
            <a href="" className={style.navLink}>
              About Us
            </a>
          </li>
          <li className={style.navItems}>
            <a href="" className={style.navLink}>
              Services
            </a>
          </li>
          <li className={style.navItems}>
            <a href="" className={style.navLink}>
              Contact Us
            </a>
          </li>
        </ul>

        <div classname={style.hamburger}>
          {/* create 3 divs that say line1, line2 and line3*/}
        </div>
      </nav>
    </div>
  );
}

export default navigationBar;
