import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useMediaQuery } from "react-responsive";
import NoteTaker from "../components/Body/NoteTaker";
import EmployeeDb from "../components/Body/EmployeeDB";
import { WineDine, WineDineRightMenu } from "../components/Body/WineDine";
import { RightMenu, TopMenu } from "../components/Body/PortfolioMenu";
import "../styles/Portfolio.css";

function Portfolio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);

    const handleMenuItemClick = (index) => {
      handleCarouselChange(index);
    };
  };

  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <Row className="PortfolioContainer">
      <Col md={9} xs={12} className="p-2">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <NoteTaker />
          </Carousel.Item>
          <Carousel.Item>
            <EmployeeDb />
          </Carousel.Item>
          <Carousel.Item>
            <WineDine />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col md={3} xs={12} className="order-md-first">
        {!isMediumScreen && <TopMenu />}
        {isMediumScreen && <WineDineRightMenu />}
      </Col>
    </Row>
  );
}

export default Portfolio;
