import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useContext, useState } from "react";

import axios from "axios";
import { message } from "antd";
const Address = () => {
 
    <Container>
    <div id="form" style={{display:"none"}}>
      <h1>Add Address</h1>
      <FloatingLabel
        controlId="floatingInput"
        label="Item Name"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="name@example.com"
          onChange={fun1}
          name="product"
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Name"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="name@example.com"
          onChange={fun1}
          name="name"
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Contact"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="name@example.com"
          onChange={fun1}
          name="contact"
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Address"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="name@example.com"
          onChange={fun1}
          name="address"
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Apartment"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="name@example.com"
          onChange={fun1}
          name="apartment"
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="City"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="name@example.com"
          onChange={fun1}
          name="city"
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="State"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="name@example.com"
          onChange={fun1}
          name="state"
        />
      </FloatingLabel>
    </div>
    <button style={{ width: "100%" }} onClick={handleSubmit}>
      Proceed To Checkout
    </button>
  </Container>
};
export default Address;
