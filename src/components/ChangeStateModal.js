import React, { useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ChangeStateModal = ({ title, show, handleClose, current_page }) => {
  const [parent_name, setParentName] = useState();
  const history = useHistory()
  const handleSubmit = () =>{
    if(current_page === "enquiry"){
      history.push("/register")
    }
    else if (current_page === "register"){
      history.push("/enrollment")
    }
  }
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
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

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ChangeStateModal;
