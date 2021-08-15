import React, { Component } from "react";
import axios from "axios";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants";

class Success extends Component {
  componentDidMount() {
    axios
      .get(`${API_URL}keranjangs`)
      .then((response) => {
        const keranjangs = response.data;
        keranjangs.map(function (item) {
          return axios
            .delete(`${API_URL}keranjangs/${item.id}`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  }

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
