import React, { useEffect, useState } from "react";
import Chevron2 from "../Icons/Chevron2.png";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className="scroll-to-top chevron"
      style={{ position: "relative", zIndex: "2" }}
    >
      {isVisible && (
        <div onClick={scrollToTop}>
          <img src={Chevron2} alt="Go to top" />
          <b>Back To Top</b>
        </div>
      )}
    </div>
  );
}
