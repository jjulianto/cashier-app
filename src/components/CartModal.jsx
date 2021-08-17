import React from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button, Form } from "react-bootstrap";
import numberWithCommas from "../utils/utils";

function CartModal({
  showModal,
  handleClose,
  keranjangDetail,
  jumlah,
  keterangan,
  totalHarga,
  plus,
  minus,
  changeHandler,
  handleSubmit,
  deleteOrder,
}) {
  if (keranjangDetail) {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{keranjangDetail.product.nama}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Price Total :</Form.Label>
              <p>
                <strong>Rp. {numberWithCommas(totalHarga)}</strong>
              </p>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Total :</Form.Label>
              <br />
              <Button
                variant="primary"
                size="sm"
                className="me-2"
                onClick={() => minus()}
              >
                <FontAwesomeIcon icon={faMinus} />
              </Button>
              <strong>{jumlah}</strong>
              <Button
                variant="primary"
                size="sm"
                className="ms-2"
                onClick={() => plus()}
              >
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </Form.Group>
            <Form.Group
              controlId="exampleForm.ControlTextarea1"
              className="my-3"
            >
              <Form.Label>Description :</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="keterangan"
                value={keterangan}
                onChange={(event) => changeHandler(event)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="me-2">
              Save
            </Button>
            <Button
              variant="danger"
              onClick={() => deleteOrder(keranjangDetail.id)}
            >
              Delete
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  } else {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Empty</Modal.Title>
        </Modal.Header>
        <Modal.Body>Empty</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CartModal;
