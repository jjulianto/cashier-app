import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { ListCategories, Menus, NavbarComponent, Result } from "./components";
import { API_URL } from "./utils/constants";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categoryChoose: "Makanan",
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
  }

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

  render() {
    const { menus, categoryChoose } = this.state;
    return (
      <div>
        <NavbarComponent />
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
                    menus.map((menu) => <Menus key={menu.id} menu={menu} />)}
                </Row>
              </Col>
              <Result />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
