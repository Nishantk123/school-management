import React from "react";
import { Modal } from "react-bootstrap";

const EditModal = ({show, handleClose}) =>{

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit user enquiry</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    This is  equiry page;
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default EditModal;