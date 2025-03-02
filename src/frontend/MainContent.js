import React, { useEffect, useState } from "react";
import "./MainContent.css";

const MainContent = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="main-content" style={{ backgroundPositionY: scrollY * 0.5 }}>
      <h2>Flowing Data. Fueling <br /> Insights.</h2>
      <p>
        Empower progress by unlocking<br />
        insights from continuous data<br />
        flow, accelerating business<br />
        transformation.
      </p>
      <br />
      <button>Discover More</button>
    </main>
  );
};

export default MainContent;
