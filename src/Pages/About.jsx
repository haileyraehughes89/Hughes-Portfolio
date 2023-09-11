import React from "react";
// import Data from "../Data/Data"
import "../styles/About.css";




function About() {
  return (
    <div className="background-container">
      
      
      <div className="lg-container">
        <div className="content row">
          <div className="col-md-8 left">
            <h1 className="text-center">Hello and Welcome!</h1>
            
          </div>
          <div className="col-md-4 right" >
            <img src="assets/smallAbout.JPG" className="w-100"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
