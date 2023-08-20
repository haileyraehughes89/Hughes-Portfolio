import React, {useRef} from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function NoteTaker({ onMenuItemClick }) {
  return (
    <div className="card">
      <div className="carousel-item active">
        <img
          src="assets/NoteTaker.png"
          className="d-block w-100 img-fluid"
          style={{ height: "100%" }}
          alt="Image of 5 people joining their drinks in a cheer over a table full of different foods."
        />
        <div class="card-body">
          <h5 class="card-title">Daily Task List</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">
            Don't Let your Day get Away from You
          </h6>
          <p class="card-text">
           I undertook the challenge of developing an application aimed at streamlining note-taking and organizational tasks. The primary objective was to establish a user-friendly platform for writing and preserving notes. The application's structure consisted of an Express.js backend responsible for managing note data storage and retrieval from a JSON file. While the front-end of the application was pre-existing, my task encompassed building and integrating the backend components, as well as deploying the entire application on Heroku to ensure accessibility.
          </p>
        

          <a href="https://dailyplanner-fb5a519fff17.herokuapp.com/" class="card-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
          </a>
          <a href="https://github.com/haileyraehughes89/Note-Taker.git" class="card-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function NoteTakerRightMenu({onMenuItemClick, setIndex  }) {

  return (
  
    <>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="" className="NoteTaker" onClick={() => setIndex(0)}>Note Taker</Navbar.Brand>
      </Container>
    </Navbar>
    
    </>
  );
  }
export  {NoteTaker, NoteTakerRightMenu};



