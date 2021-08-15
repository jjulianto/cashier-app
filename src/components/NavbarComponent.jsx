import React from "react";
import { Navbar, Container } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home" className="mb-1">
          <strong>Cashier</strong> App
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
