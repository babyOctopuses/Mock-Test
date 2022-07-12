import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import axios from "axios";

function Modals() {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateAPIData = (id) => {
    axios.put(
      `https://private-f25a3d-testbinar.apiary-mock.com/v1/products/${id}`,
      {
        product,
        price,
        imgUrl,
      }
    );
  };

  return (
    <>
      <div style={{ marginRight: "5px" }}>
        <Button variant="primary" onClick={handleShow}>
          <BiEdit />
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Product Name" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Price(Dollar USD)"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image Url</Form.Label>
              <Form.Control type="text" placeholder="Image URL" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;
