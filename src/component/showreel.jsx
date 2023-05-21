import style from "./showreel.module.css";
import introductory from "../assets/workedge video.mp4";
import React, { useEffect } from "react";

function Showreel() {
  useEffect(() => {
    const videoElement = document.getElementById("about-video");

    const handleVideoPause = () => {
      const container = document.getElementById("videoContainer");
      container.classList.remove(style.show);
    };

    videoElement.addEventListener("pause", handleVideoPause);

    return () => {
      videoElement.removeEventListener("pause", handleVideoPause);
    };
  }, []);

  return (
    <div>
      <div className={`${style.container}`}>
        <h1 className="flex items-center justify-center text-6xl text-white pt-12">
          What we've done for our clients
        </h1>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 pt-12">
          <div>
            <div className={`${style.gridContainer} py-4`}>
              <span>Worked with</span>

              <div className="flex flex-row">
                <h1 className={style.statistics}>30+</h1>
              </div>

              <span>clients</span>
            </div>
          </div>

          <div>
            <div className={`${style.gridContainer} py-4`}>
              <span>Employed over</span>

              <div className="flex flex-row space-x-2">
                <h1 className={style.statistics}>100+</h1>
              </div>

              <span>freelancers</span>
            </div>
          </div>

          <div>
            <div className={`${style.gridContainer} py-4`}>
              <span>Hosted an event with</span>

              <div className="flex flex-row">
                <h1 className={style.statistics}>1,000+</h1>
              </div>

              <span>attendees</span>
            </div>
          </div>

          <div>
            <div className={`${style.gridContainer} py-4`}>
              <span>Presented an event in more than</span>

              <div className="flex flex-row">
                <h1 className={style.statistics}>5+</h1>
              </div>

              <span>universities in Davao</span>
            </div>
          </div>

          {/*<div>
              <div className={`${style.gridContainer} py-4`}>
                <span>Organized and Produced the first</span>

                <div className="flex flex-row">
                  <h1 className={style.statistics}>DACS Esports League</h1>
                </div>

                <span>in Davao</span>
              </div>
  </div>*/}
        </div>

        <div className={style.about}>
          <h1 className="pt-12">
            CHECK OUT OUR SHOW<span class="text-primary">REEL</span>
          </h1>

          <div id="container">
            <video id="about-video" controls className={style.video}>
              <source src={introductory} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showreel;
