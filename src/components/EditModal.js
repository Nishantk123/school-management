import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const EditModal = ({ show, handleClose, editData }) => {
  const [parent_name, setParentName] = useState("");
  const [child_name, setChildName] = useState("");
  console.log("editData", editData);

  useEffect(() => {
    console.log(editData);
    setParentName(editData.parent_name);
    setChildName(editData.child_name);
  }, [editData]);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit user enquiry</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="parent name"
                value={parent_name}
                onChange={(e) => setParentName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="student name"
                value={child_name}
                onChange={(e) => setChildName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="email"
                placeholder="parent email"
                value={editData.parent_mobile}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="parent mobile"
                value={editData.parent_mobile}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="class"
                value={editData.enquired_class}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
