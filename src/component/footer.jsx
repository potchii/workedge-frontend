import style from "./footer.module.css";
import location from "../assets/location.svg";
import footerLogo from "../assets/workedge-logo black.png";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";

function Footer() {
  const socials = [facebook, instagram, twitter];
  return (
    <div>
      <footer>
        <div className={style.container}>
          <div className="flex flex-row pt-8 justify-between w-full">
            <h1 className="flex flex-row text-baseline">
              <img src={location} className="h-6 w-auto pr-1"></img>Nova Tierra
              Village, Davao del Sur, Davao City, Philippines, 8000
            </h1>

            <div className="flex flex-col">
              <img src={footerLogo} className="w-[200px]"></img>

              <div className={` ${style.socials} `}>
                <a
                  href="https://www.facebook.com/workedge.tech"
                  target="_blank"
                >
                  <img src={socials[0]}></img>
                </a>

                <a
                  href="https://www.instagram.com/workedge_tech/"
                  target="_blank"
                >
                  <img src={socials[1]}></img>
                </a>

                <a href="https://twitter.com/WorkEdge_Tech" target="_blank">
                  <img src={socials[2]}></img>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={style.copyright}>
          <h1 className="pb-6">© 2023 WorkEdge. All rights reserved.</h1>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
