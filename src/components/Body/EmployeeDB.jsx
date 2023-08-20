import React, {useRef} from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function EmployeeDb({ onMenuItemClick }) {
  return (
    <div className="card">
      <div className="carousel-item active">
        <img
          src="assets/EmployeeTracker.png"
          className="d-block w-100 img-fluid"
          style={{ height: "100%" }}
          alt="Image of 5 people joining their drinks in a cheer over a table full of different foods."
        />
        <div className="card-body">
          <h5 className="card-title">Employee Database</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Organize Efficiently</h6>
          <p className="card-text">
            <p>
              I developed a command-line application as a content management
              system (CMS) to manage a company's employee database. The
              application was built from scratch using Node.js, Inquirer, and
              MySQL. The goal was to create an interface that enables
              non-developers to easily view and interact with data stored in
              databases.
            </p>
            <p>
              The database schema consisted of three tables: department, role,
              and employee. The structure of these tables included relevant
              attributes such as id, name, title, salary, department_id,
              first_name, last_name, role_id, and manager_id. The application
              allowed users to perform various operations on the database, such
              as viewing employees, roles, and departments, as well as adding
              new entries and updating existing ones.
            </p>
            <p>
              To streamline the development process, I organized SQL queries
              into functions that were stored in a separate file. This
              separation of concerns helped in maintaining a clean codebase.
              Additionally, I used a seeds.sql file to pre-populate the
              database, which facilitated feature development and testing.
            </p>
            <p>
              Overall, I found this project enjoyable because I have a strong
              affinity for working with MySQL and databases. Building a
              user-friendly CLI application to manage an employee database
              allowed me to leverage my skills in backend development and create
              a practical solution for database management tasks.
            </p>{" "}
          </p>

          <a
            href="https://dailyplanner-fb5a519fff17.herokuapp.com/"
            className="card-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
            </svg>
          </a>
          <a
            href="https://github.com/haileyraehughes89/Note-Taker.git"
            className="card-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
function EmployeeDbRightMenu({onMenuItemClick, setIndex  }) {

  return (
  
    <>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="" class="EmployeeDb" onClick={() => setIndex(1)}>Employee Database</Navbar.Brand>
      </Container>
    </Navbar>
    
    </>
  );
  }
export  {EmployeeDb, EmployeeDbRightMenu};
