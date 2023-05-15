import style from "./banner.module.css";
import bannerVideo from "../assets/workedge video.mp4";
import Navbar from "./navbar/navigationBar";
import play from "../assets/play.svg";

import { useState, useEffect } from "react";

function banner() {
  useEffect(() => {
    document.getElementById("banner-video").currentTime = 3;
    document
      .getElementById("banner-video")
      .addEventListener("timeupdate", (event) => {
        if (event.target.currentTime >= 23) {
          event.target.currentTime = 3;
        }
        // console.log(event);
      });
  }, []);

  return (
    <div>
      <div className={style.videoContainer}>
        <Navbar />

        <video id="banner-video" autoPlay muted loop className={style.video}>
          <source src={bannerVideo} type="video/mp4"></source>
        </video>

        <div className={style.textContainer}>
          <h1 className={`${style.containerHeading} uppercase`}>
            Materializing{" "}
            <span className="text-blue-900 tracking-widest font-black">
              Ideas.
            </span>
          </h1>

          <h3 className="text-white pl-2.5">
            WorkEdge is a rising creative marketing and Events Organization
            company from Davao, Philippines.
          </h3>

          <button className={`${style.headingButton} uppercase font-bold`}>
            Play WorkEdge Reel
            <img src={play} className="w-6 h-auto"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default banner;
