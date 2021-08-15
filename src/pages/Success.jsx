import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

class Success extends Component {
  render() {
    return (
      <div className="mt-4 text-center">
        <Image src="assets/images/success.png" width="350" />
        <h2>Successful Order</h2>
        <p>Thank you for ordering</p>
        <Button variant="primary" as={Link} to="/">
          Back to Home
        </Button>
      </div>
    );
  }
}

export default Success;
