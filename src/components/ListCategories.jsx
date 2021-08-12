import React, { Component } from "react";
import { Col } from "react-bootstrap";

class ListCategories extends Component {
  render() {
    return (
      <Col md={2} mt="2">
        <h4>
          <strong>List Category</strong>
        </h4>
        <hr />
      </Col>
    );
  }
}

export default ListCategories;
