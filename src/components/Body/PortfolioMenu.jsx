import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function RightMenu() {
  return (

   <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" class="WineDine">Wining And Dining</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Note Taker</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Employee Database
          </Navbar.Brand>
        </Container>
      </Navbar>
      </>
  );
}



function TopMenu () {
    return (
        <div>link alternate</div>
        );
    }
    export {TopMenu, RightMenu};