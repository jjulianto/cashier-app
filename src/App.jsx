import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ListCategories, NavbarComponent, Result } from "./components";

function App() {
  return (
    <div>
      <NavbarComponent />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4>
                <strong>List Product</strong>
              </h4>
              <hr />
            </Col>
            <Result />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
