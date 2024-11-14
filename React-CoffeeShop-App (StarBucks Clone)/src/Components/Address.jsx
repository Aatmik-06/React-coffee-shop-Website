import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useContext, useState } from "react";
import { MyContext } from "./Order";
import axios from "axios";
import { message } from "antd";

const Address = () => {
    const [input, setinput] = useState({});
    const handleinput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setinput((values) => ({ ...values, [name]: value }));
        console.log(input);
      };

    const handleSubmit = () => {
        let api = "http://localhost:3000/coffee";
        axios.post(api, input).then((res) => {
          console.log(res);
          message.success("item Successfully Added!!!");
        });
      };
      return(<>
          <Container>
    <div id="form">
      <h1>Add Address</h1>
      <FloatingLabel
        controlId="floatingInput"
        label="Item Name"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="name@example.com"
          onChange={handleinput}
          name="product"
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Customer Name"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="name@example.com"
          onChange={handleinput}
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
          onChange={handleinput}
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
          onChange={handleinput}
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
          onChange={handleinput}
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
          onChange={handleinput}
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
          onChange={handleinput}
          name="state"
        />
      </FloatingLabel>
    </div>
    <button style={{ width: "100%" }} onClick={handleSubmit}>
      Proceed To Checkout
    </button>

  </Container>
  </>)

  
};
export default Address;
