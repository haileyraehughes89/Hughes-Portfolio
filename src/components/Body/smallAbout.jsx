import React from "react";
import Card from 'react-bootstrap/Card';
import {About} from "../../Data/Data"
import "../../styles/About.css";




function SmallAbout() {
  return (
    <div className="background-container" style={{height: "100%"}}>
      
      <Card className="card" style={{marginTop: "5.5em", width: "95vw", marginBottom:"3.5em"}}>
      <Card.Img style={{width: "15em", marginTop: "2em"}}variant="top" src="assets/About.JPG" />
      <Card.Body>
        <Card.Title className="welcome" style={{marginTop: "0em", textAlign: "center", fontSize: "3em"}}>{About.welcome}</Card.Title>
        <Card.Text className="text" style={{fontSize: "1.1em"}}>
          {About.text}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default SmallAbout;
