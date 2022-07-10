import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";

function DeleteModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div style={{ marginRight: "5px" }}>
        <Button variant="primary" onClick={handleShow}>
          <RiDeleteBin6Line />
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Yes Delete!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
