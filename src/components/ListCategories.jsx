import React, { Component } from "react";
import axios from "axios";
import { Col, ListGroup } from "react-bootstrap";
import { API_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCoffee,
  faCheese,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ nama }) => {
  if (nama === "Makanan")
    return <FontAwesomeIcon icon={faUtensils} className="ms-1 me-2" />;
  if (nama === "Minuman")
    return <FontAwesomeIcon icon={faCoffee} className="me-1" />;
  if (nama === "Cemilan")
    return <FontAwesomeIcon icon={faCheese} className="me-2" />;

  return <FontAwesomeIcon icon={faUtensils} className="me-2" />;
};

class ListCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${API_URL}categories`)
      .then((response) => {
        const categories = response.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { categories } = this.state;
    const { changeCategory, categoryChoose } = this.props;
    return (
      <Col md={2} mt="2">
        <h4>
          <strong>List Category</strong>
        </h4>
        <hr />
        <ListGroup>
          {categories &&
            categories.map((category) => (
              <ListGroup.Item
                key={category.id}
                onClick={() => changeCategory(category.nama)}
                className={
                  categoryChoose === category.nama && "category-active"
                }
                style={{ cursor: "pointer" }}
              >
                <h5>
                  <Icon nama={category.nama} /> {category.nama}
                </h5>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Col>
    );
  }
}

export default ListCategories;
