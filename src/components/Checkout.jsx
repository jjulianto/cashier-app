import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React, { Component, Fragment } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button, Col, Row } from "react-bootstrap";
import numberWithCommas from "../utils/utils";
import { API_URL } from "../utils/constants";

class Checkout extends Component {
  submitTotalPrice = (checkout) => {
    const pesanan = {
      total_bayar: checkout,
      menus: this.props.keranjangs,
    };

    if (this.props.keranjangs.length !== 0) {
      axios
        .post(`${API_URL}pesanans`, pesanan)
        .then((response) => {
          this.props.history.push("/success");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please Choose a Product First!",
      });
    }
  };

  render() {
    const checkout = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);

    return (
      <Fragment>
        {/* Web */}
        <div className="fixed-bottom d-none d-md-block">
          <Row>
            <Col md={{ span: 3, offset: 9 }} className="pe-4">
              <h5 className="d-flex justify-content-between me-1">
                Price Total: <strong>Rp. {numberWithCommas(checkout)}</strong>
              </h5>
              <div className="d-grid mb-2 mt-3">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => this.submitTotalPrice(checkout)}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />{" "}
                  <strong>CHECKOUT</strong>
                </Button>
              </div>
            </Col>
          </Row>
        </div>

        {/* Mobile */}
        <div className="d-block d-md-none">
          <Row>
            <Col md={{ span: 3, offset: 9 }}>
              <h5 className="d-flex justify-content-between me-1">
                Price Total: <strong>Rp. {numberWithCommas(checkout)}</strong>
              </h5>
              <div className="d-grid mb-2 mt-3">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => this.submitTotalPrice(checkout)}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />{" "}
                  <strong>CHECKOUT</strong>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default Checkout;
