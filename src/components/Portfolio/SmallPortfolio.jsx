import React, { useState, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Portfolio} from "../../Data/Data"
import { useMediaQuery } from "react-responsive";


import "../../styles/Portfolio.css";

function SmallPortfolio() {


  return (
    <div className="PortfolioContainer">
      <Carousel className="CarouselContainer">
    {Portfolio.map((item, index) => (
      <Carousel.Item key={index}>
       
      
        <img src={item.img} alt={`Slide ${index + 1}`}/>
          <h3>{item.title}</h3>
        <Carousel.Caption>
        </Carousel.Caption>
          <p>{item.text}</p>
         
      
      </Carousel.Item>
    ))}
  </Carousel>
    </div>
  );
}

export default SmallPortfolio;
