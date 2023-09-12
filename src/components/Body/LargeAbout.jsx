import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import About from "../../Data/Data";
import "../../styles/About.css";

function LargeAbout() {
  return (
    <div className="background-container">
      <Container>
        <Row>
          <h1 className="welcome">{About.welcome}</h1>
        </Row>
        <Card className="card">
          <Card.Body>
            <Row className="row">
              <Col sm={8} className="text">
                {About.text}
              </Col>
              <Col sm={4} className="img">
                <Card.Img src="assets/About.JPG" />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default LargeAbout;
