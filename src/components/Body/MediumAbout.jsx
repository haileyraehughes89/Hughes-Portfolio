import React from "react";
import Card from 'react-bootstrap/Card';
import About from "../../Data/Data"
import "../../styles/About.css";




function MediumAbout() {
  return (
    <div className="background-container">
      
      <Card className="card" style={{marginTop: "3.5em"}}>
      <Card.Img style={{width: "15em", marginTop: "2em"}}variant="top" src="assets/About.JPG" />
      <Card.Body>
        <Card.Title className="welcome" style={{marginTop: "0em"}}>{About.welcome}</Card.Title>
        <Card.Text className="text" style={{fontSize: "1.1em"}}>
          {About.text}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default MediumAbout;
