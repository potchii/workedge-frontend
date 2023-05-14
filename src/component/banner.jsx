import style from "./banner.module.css";
import bannerVideo from "../assets/workedge video.mp4";
import Navbar from "./navbar/navigationBar";

import { useState, useEffect } from "react";

function banner() {
  useEffect(() => {
    document.getElementById("banner-video").currentTime = 0.8;
    document
      .getElementById("banner-video")
      .addEventListener("timeupdate", (event) => {
        if (event.target.currentTime >= 23) {
          event.target.currentTime = 0.8;
        }
        console.log(event);
      });
  }, []);

  return (
    <div>
      <div className={style.videoContainer}>
        <Navbar />
        <video id="banner-video" autoPlay muted loop className={style.video}>
          <source src={bannerVideo} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}

export default banner;
