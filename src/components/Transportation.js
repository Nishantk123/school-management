import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Header from "./Header";

const Transportation = () => {
  let data ={
    name:"",
    roll:"",
    mobile:"",
    email:""
  }
  const [trandata, setTransData] = useState(data)


  const handleChange = (e, name) =>{

    if (name="chaild-name"){
      data["name"] = e.target.value;
    }
    else if(name="roll"){
      data["roll"] = e.target.value;
    }

    setTransData(data)
  }
    return (
    <div>
      <Header />
      <div className="vertical-line"></div>
      <div className="container-fluid transportation">
        <div className="row">
          <div className="col mx-4">
            <Form.Label>Student Name</Form.Label>
            <Form.Control
              className="form"
              type="text"
              placeholder="Enter your name"
            />
            <Form.Label>Roll Number</Form.Label>
            <Form.Control
              className="form"
              type="text"
              placeholder="Enter your roll number"
            />
            <Form.Label>Student Email</Form.Label>
            <Form.Control
              className="form"
              type="text"
              placeholder="Enter your email"
            />
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              className="form"
              type="text"
              placeholder="Enter parent's mobile number"
            />
          </div>
          <div className="col">
            <div className="d-flex">
              <div className="location">
                <Form.Control
                  className="form"
                  type="text"
                  placeholder="Pickup Location"
                />
                <Form.Control className="form" type="text" placeholder="Landmark" />
                <Form.Control
                  className="form"
                  type="text"
                  placeholder="Address 1"
                />
              </div>
              <div>
                <Form.Control
                  className="form"
                  type="text"
                  placeholder="Drop Location"
                />
                <Form.Control
                  className="form"
                  type="text"
                  placeholder="Pincode"
                />
                <Form.Control
                  className="form"
                  type="text"
                  placeholder="Address 2"
                />
              </div>
            </div>
            <Button className="btn-primary m-5">Confirm & Submmit</Button>
            <Button className="btn-success m-5">Reset</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transportation;