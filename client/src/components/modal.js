import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Modals() {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const create = () => {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        Authorization: token,
      },
    };

    axios.post(
      `https://test-binar.herokuapp.com/v1/products`,
      {
        name: product,
        price,
        imageurl: imgUrl,
      },
      config
    );
    navigate("/productlist");
    // console.log("product: ", product, "price", price,)
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create New Card
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type=""
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                placeholder="product"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Price(Dollar USD)"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image URL"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              create();
            }}
          >
            Create New Data
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;
