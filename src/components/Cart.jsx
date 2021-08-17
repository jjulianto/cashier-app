import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Col, ListGroup, Row, Badge } from "react-bootstrap";
import numberWithCommas from "../utils/utils";
import CartModal from "./CartModal";
import Checkout from "./Checkout";
import { API_URL } from "../utils/constants";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      keranjangDetail: false,
      jumlah: 0,
      keterangan: "",
      totalHarga: 0,
    };
  }

  handleShow = (menuKeranjang) => {
    this.setState({
      showModal: true,
      keranjangDetail: menuKeranjang,
      jumlah: menuKeranjang.jumlah,
      keterangan: menuKeranjang.keterangan,
      totalHarga: menuKeranjang.total_harga,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  plus = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
      totalHarga:
        this.state.keranjangDetail.product.harga * (this.state.jumlah + 1),
    });
  };

  minus = () => {
    if (this.state.jumlah > 1) {
      this.setState({
        jumlah: this.state.jumlah - 1,
        totalHarga:
          this.state.keranjangDetail.product.harga * (this.state.jumlah - 1),
      });
    }
  };

  changeHandler = (event) => {
    this.setState({
      keterangan: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.handleClose();

    const data = {
      jumlah: this.state.jumlah,
      total_harga: this.state.totalHarga,
      product: this.state.keranjangDetail.product,
      keterangan: this.state.keterangan,
    };

    axios
      .put(`${API_URL}keranjangs/${this.state.keranjangDetail.id}`, data)
      .then((response) => {
        this.props.getListCart();
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Successfully Update Order",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deleteOrder = (id) => {
    this.handleClose();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22668a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${API_URL}keranjangs/${id}`)
          .then((response) => {
            this.props.getListCart();
            Swal.fire("Success", "Successfully Delete Order.", "success");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  render() {
    const { keranjangs } = this.props;
    return (
      <Col md={3} mt="2">
        <h4>
          <strong>Cart</strong>
        </h4>
        <hr />
        {keranjangs.length !== 0 && (
          <ListGroup variant="flush">
            {keranjangs.map((menuKeranjang) => (
              <ListGroup.Item
                key={menuKeranjang.id}
                onClick={() => this.handleShow(menuKeranjang)}
                style={{ cursor: "pointer" }}
              >
                <Row>
                  <Col xs={2}>
                    <h4>
                      <Badge pill bg="success">
                        {menuKeranjang.jumlah}
                      </Badge>
                    </h4>
                  </Col>
                  <Col>
                    <h5>{menuKeranjang.product.nama}</h5>
                    <p>Rp. {numberWithCommas(menuKeranjang.product.harga)}</p>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <strong>
                      Rp. {numberWithCommas(menuKeranjang.total_harga)}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
            <CartModal
              handleClose={this.handleClose}
              {...this.state}
              plus={this.plus}
              minus={this.minus}
              changeHandler={this.changeHandler}
              handleSubmit={this.handleSubmit}
              deleteOrder={this.deleteOrder}
            />
          </ListGroup>
        )}
        <Checkout keranjangs={keranjangs} {...this.props} />
      </Col>
    );
  }
}

export default Cart;
