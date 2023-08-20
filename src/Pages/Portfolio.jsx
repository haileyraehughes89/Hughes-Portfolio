import React, { useState, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useMediaQuery } from "react-responsive";
import {NoteTaker, NoteTakerRightMenu} from "../components/Body/NoteTaker";
import {EmployeeDb, EmployeeDbRightMenu} from "../components/Body/EmployeeDB";
import { WineDine, WineDineRightMenu } from "../components/Body/WineDine";

import TopMenu from "../components/Body/PortfolioMenu"; 
import "../styles/Portfolio.css";

function Portfolio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });

  const handleMenuItemClick = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <Row className="PortfolioContainer">
      <Col md={8} xs={12} className="p-2">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <NoteTaker onMenuItemClick={handleMenuItemClick} />
          </Carousel.Item>
          <Carousel.Item>
            <EmployeeDb onMenuItemClick={handleMenuItemClick} />
          </Carousel.Item>
          <Carousel.Item>
            <WineDine onMenuItemClick={handleMenuItemClick} />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col md={4} xs={12} className="order-md-first">
        {!isMediumScreen && <TopMenu />}
        {isMediumScreen &&   (<>
            <WineDineRightMenu onMenuItemClick={handleMenuItemClick} setIndex={setIndex} />
            <EmployeeDbRightMenu onMenuItemClick={handleMenuItemClick} setIndex={setIndex} />
            <NoteTakerRightMenu onMenuItemClick={handleMenuItemClick} setIndex={setIndex} />
          </>)}
      </Col>
    </Row>
  );
}

export default Portfolio;
