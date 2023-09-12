import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About from "../../Data/Data"
import "../../styles/About.css";




function LargeAbout() {
  return (
    <div className="background-container">
      
      <Card className="card">
      <Card.Body>
        <Row>
          <Col sm={8}>
          {About.text}
          </Col>
          <Col sm={4}>
          <Card.Img src="assets/About.JPG"/>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    </div>
  );
}

export default LargeAbout;
