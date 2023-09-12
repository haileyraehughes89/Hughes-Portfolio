import React, { useState, useEffect } from "react";
import SmallAbout from "../components/Body/smallAbout";
import MediumAbout from "../components/Body/MediumAbout";
import LargeAbout from "../components/Body/LargeAbout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import "../styles/About.css";

function About() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 767);
  const [isMediumScreen, setIsMediumScreen] = useState(
    window.innerWidth <= 912
  );
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 767);
    setIsMediumScreen(window.innerWidth <= 912);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderPage = () => {
    if (isSmallScreen) {
      return <SmallAbout />;
    }
    if (isMediumScreen) {
      return <MediumAbout />;
    } else {
      return <LargeAbout />;
    }
  };

  return <div>{renderPage()}</div>;
}

export default About;
