import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Cart, ListCategories, Menus } from "../components";
import { API_URL } from "../utils/constants";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categoryChoose: "Makanan",
      keranjangs: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${API_URL}products?category.nama=${this.state.categoryChoose}`)
      .then((response) => {
        const menus = response.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });

    this.getListCart();
  }

  getListCart = () => {
    axios
      .get(`${API_URL}keranjangs`)
      .then((response) => {
        const keranjangs = response.data;
        this.setState({ keranjangs });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  changeCategory = (value) => {
    this.setState({
      categoryChoose: value,
      menus: [],
    });

    axios
      .get(`${API_URL}products?category.nama=${value}`)
      .then((response) => {
        const menus = response.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addToCart = (value) => {
    axios
      .get(`${API_URL}keranjangs?product.id=${value.id}`)
      .then((response) => {
        if (response.data.length === 0) {
          const keranjang = {
            jumlah: 1,
            total_harga: value.harga,
            product: value,
          };

          axios
            .post(`${API_URL}keranjangs`, keranjang)
            .then((response) => {
              this.getListCart();
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          const keranjang = {
            jumlah: response.data[0].jumlah + 1,
            total_harga: response.data[0].total_harga + value.harga,
            product: value,
          };

          axios
            .put(`${API_URL}keranjangs/${response.data[0].id}`, keranjang)
            .then((response) => {
              this.getListCart();
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { menus, categoryChoose, keranjangs } = this.state;
    return (
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories
              changeCategory={this.changeCategory}
              categoryChoose={categoryChoose}
            />
            <Col>
              <h4>
                <strong>List Product</strong>
              </h4>
              <hr />
              <Row>
                {menus &&
                  menus.map((menu) => (
                    <Menus
                      key={menu.id}
                      menu={menu}
                      addToCart={this.addToCart}
                    />
                  ))}
              </Row>
            </Col>
            <Cart keranjangs={keranjangs} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
