import React, { useState, useEffect } from "react";
import arrow from "../assets/arrow.svg";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 300); // Show the button when the user has scrolled 300 pixels down
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top-button fixed bottom-5 font-bold right-5 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
      onClick={scrollToTop}
    >
      <img src={arrow} className="h-4 w-4"></img>
    </button>
  );
}

export default ScrollToTopButton;
