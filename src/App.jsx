import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";

import Menu from "./components/Header/Nav";
import Footer from "./components/Footer/Footer";
// import LargeAbout from "./components/Body/LargeAbout";
// import MediumAbout from "./components/Body/MediumAbout";
// import SmallAbout from "./components/Body/SmallAbout";

function App() {
  // const [isSmallScreen, setIsSmallScreen] = useState(
  //   window.innerWidth <= 767
  // );
  // const [isMediumScreen, setIsMediumScreen] = useState(
  //   window.innerWidth <= 912
  // );

  // const handleResize = () => {
  //   setIsSmallScreen(window.innerWidth <= 767);
  //   setIsMediumScreen(window.innerWidth <= 912);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div>
      <Menu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
