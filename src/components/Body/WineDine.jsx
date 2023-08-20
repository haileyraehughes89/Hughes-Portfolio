import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function WineDine() {
  return (
    <div className="card">
      <div className="carousel-item active">
        <img
          src="assets/Wine-Dine.png"
          className="d-block w-100 img-fluid"
          style={{ height: "100%" }}
          alt="Image of 5 people joining their drinks in a cheer over a table full of different foods."
        />
        <div class="card-body">
          <h5 class="card-title">Wine and Dine</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">
            Save Yourself a Grocery Trip
          </h6>
          <p class="card-text">
            This was a collaborative project in which I focused on working with
            the spoonacular API. Spoonacular offers a robust set of tools and
            resources for working with culinary data, recipes, and nutritional
            information. My role in the project was centered around utilizing
            the spoonacular API to retrieve and manipulate recipe data, allowing
            us to create an innovative culinary-related application.
          </p>
          <p class="card-text">
            During the project, I successfully integrated the spoonacular API
            into our application, enabling users to search for recipes based on
            various criteria such as ingredients, dietary restrictions, and
            cuisine types. This involved making API requests, handling
            responses, and displaying the retrieved data in a user-friendly
            format. In addition to the technical implementation, I collaborated
            closely with my team members to ensure seamless integration and a
            cohesive user experience. Through effective communication and
            teamwork, we were able to leverage the capabilities of the
            spoonacular API to create a feature-rich and engaging application
            that catered to culinary enthusiasts and those seeking cooking
            inspiration.
          </p>

          <a href="https://rtm713.github.io/WiningAndDining/" class="card-link">
          <img className="wine-dine-header" src="assets/winedine_header.png" />
          </a>
          <a href="https://github.com/rtm713/WiningAndDining.git" class="card-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function WineDineRightMenu() {
return (
  <>
  <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home" class="WineDine">Wining And Dining</Navbar.Brand>
    </Container>
  </Navbar>
  
  </>
);
}
export {WineDine, WineDineRightMenu};
