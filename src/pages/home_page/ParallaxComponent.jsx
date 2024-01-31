// ParallaxComponent.jsx
import React, { useEffect, useState } from "react";
import first from "../../assets/recommend/first.jpg";
import second from "../../assets/recommend/second.jpg";
import third from "../../assets/recommend/third.jpg";
import fourth from "../../assets/recommend/fourth.jpg";
import fifth from "../../assets/recommend/fifth.jpg";
import "./ParallaxComponent.css";

const ParallaxComponent = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div className="" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        <img src={first} alt="Recommendation 1" />
      </div>
      <div className="" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
        <img src={second} alt="Recommendation 2" />
      </div>
      <div className="" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        <img src={third} alt="Recommendation 3" />
      </div>
      <div className="" style={{ transform: `translateY(${scrollY * 0.4}px)` }}>
        <img src={fourth} alt="Recommendation 4" />
      </div>
      <div className="" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <img src={fifth} alt="Recommendation 5" />
      </div>
    </div>
  );
};

export default ParallaxComponent;
