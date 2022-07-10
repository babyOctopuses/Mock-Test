import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Modals from "./modal";

function Navbar2() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Modals />
            <Nav.Link href="/Register">Log out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar2;
