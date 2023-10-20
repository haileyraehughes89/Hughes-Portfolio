import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import SmallPortfolio from "../components/Portfolio/SmallPortfolio"
import MediumPortfolio from "../components/Portfolio/MediumPortfolio"
import LargePortfolio from "../components/Portfolio/LargePortfolio";
import "../styles/Portfolio.css";

function Portfolio() {
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
      return <SmallPortfolio />;
    }
    if (isMediumScreen) {
      return <MediumPortfolio />;
    } else {
      return <LargePortfolio />;
    }
  };
  return <div className="PortfolioContainer">{renderPage()}</div>
}

export default Portfolio;
