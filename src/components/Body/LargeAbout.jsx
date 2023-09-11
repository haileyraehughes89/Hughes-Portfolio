import React from "react";
import "../../styles/SmallAbout.css";




function LargeAbout() {
  return (
    <div className="background-container">
      
      
      <div className="lg-container">
        <div className="content row">
          <div className="col-md-8 left">
            <h1 className="text-center">Hello and Welcome!</h1>
            <p>
              My name is Hailey. I am an MCU enthusiast,
              Swiftie, and aspiring gardner. My love of learning has led me
              on a journey rich in information ranging from my time studying
              Mathematics and Spanish in my undergraduate programs, change
              systems in my graduate courses and most recently, software
              engineering. 10 years in education has empowered me with the
              resilience and determination I have needed to produce clear,
              efficient and scalable code. I am well versed in solving complex
              problems through the collaboration of ideas and diverse
              experience. What has drawn me to programming is the vastness in
              possibility. What has helped me persist is the work I have
              accomplished alongside veteran and emerging developers. What I can
              dream up pales in comparison to what the collective can envision
              and, together, accomplish. So have a look around, and if you like
              what you see, let’s collaborate on a project. I look forward to an
              opportunity to learn with you!
            </p>
          </div>
          <div className="col-md-4 right" >
            <img src="assets/smallAbout.JPG" className="w-100"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LargeAbout;
