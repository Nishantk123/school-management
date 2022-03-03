import React, { useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";

const ChangeStateModal = ({ show, handleClose }) => {
  const [parent_name, setParentName] = useState();
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Edit user enquiry</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Row>
            <Col sm={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="parent name"
                  value={parent_name}
                  // onChange={(e) => setParentName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="parent name"
                  value={parent_name}
                  // onChange={(e) => setParentName(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="parent name"
                  value={parent_name}
                  // onChange={(e) => setParentName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="parent name"
                  value={parent_name}
                  // onChange={(e) => setParentName(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ChangeStateModal;
