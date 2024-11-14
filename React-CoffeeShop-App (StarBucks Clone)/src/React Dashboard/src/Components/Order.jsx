import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { message } from "antd";
const MyContext = createContext();
const Order = () => {
  const [input, setinput] = useState({});
  const [user1, setuser1] = useState("₹280");
  const [user2, setuser2] = useState("₹380");
  const [user3, setuser3] = useState("₹295");
  const [user4, setuser4] = useState("₹450");
  const [user5, setuser5] = useState("₹445");
  const handleSubmit = () => {
    let api = "http://localhost:3000/coffee";
    axios.post(api, input).then((res) => {
      console.log(res);
      message.success("Product Successfully Added!!!");
    });
  };
  const fun1 = (e) => {
    document.getElementById("cont1").style.display = "block";
    window.scrollTo(0, 1100);
    document.getElementById("cart").style.display = "block";
    document.getElementById("form").style.display ="block";
    const [input, setinput] = useState({});
      
      let name = e.target.name;
      let value = e.target.value;
      setinput((values) => ({ ...values, [name]: value }));
      console.log(input);
      let price = "₹280";
  
  };
  const fun2 = () => {
    document.getElementById("cont2").style.display = "block";
    window.scrollTo(0, 1100);
    document.getElementById("cart").style.display = "block";
  };
  const fun3 = () => {
    document.getElementById("cont3").style.display = "block";
    window.scrollTo(0, 1100);
    document.getElementById("cart").style.display = "block";
  };
  const fun4 = () => {
    document.getElementById("cont4").style.display = "block";
    window.scrollTo(0, 1100);
    document.getElementById("cart").style.display = "block";
  };
  const fun5 = () => {
    document.getElementById("cont5").style.display = "block";
    window.scrollTo(0, 1100);
    document.getElementById("cart").style.display = "block";
  };
  const dis1 = () => {
    document.getElementById("cont1").style.display = "none";
    window.scrollTo(50, 0);
    document.getElementById("cart").style.display = "none";
  };
  const dis2 = () => {
    document.getElementById("cont2").style.display = "none";
    window.scrollTo(50, 0);
    document.getElementById("cart").style.display = "none";
  };
  const dis3 = () => {
    document.getElementById("cont3").style.display = "none";
    window.scrollTo(50, 0);
    document.getElementById("cart").style.display = "none";
  };
  const dis4 = () => {
    document.getElementById("cont4").style.display = "none";
    window.scrollTo(50, 0);
    document.getElementById("cart").style.display = "none";
  };
  const dis5 = () => {
    document.getElementById("cont5").style.display = "none";
    window.scrollTo(50, 0);
    document.getElementById("cart").style.display = "none";
  };
  return (
    <>
      <div id="home-head">
        <button>Know More</button>
      </div>
      <Container>
        <div id="order-head">
          <h3>Bestseller</h3>
          <p>
            Everyone's favorite Starbucks put together in a specially curated
            collection.
          </p>
        </div>
        <div id="order-container">
          <div id="order-img">
            <img height={"130px"} src="src/assets/images/o1.png" alt="" />
            <br />{" "}
            <p>
              ₹280 <button onClick={fun1}>Add Item</button>
            </p>
          </div>
          <div id="order-img">
            <img height={"130px"} src="src/assets/images/o2.png" alt="" />
            <br />{" "}
            <p>
              ₹380 <button onClick={fun2}>Add Item</button>
            </p>
          </div>
          <div id="order-img">
            <img height={"130px"} src="src/assets/images/o3.png" alt="" />
            <br />{" "}
            <p>
              ₹295 <button onClick={fun3}>Add Item</button>
            </p>
          </div>
          <div id="order-img">
            <img height={"130px"} src="src/assets/images/o4.png" alt="" />
            <br />{" "}
            <p>
              ₹450 <button onClick={fun4}>Add Item</button>
            </p>
          </div>
          <div id="order-img">
            <img height={"130px"} src="src/assets/images/o5.png" alt="" />
            <br />{" "}
            <p>
              ₹360{" "}
              <button style={{ backgroundColor: "rgb(150, 150, 150)" }}>
                Out of Stock
              </button>
            </p>
          </div>
          <div id="order-img">
            <img height={"130px"} src="src/assets/images/o6.png" alt="" />
            <br />{" "}
            <p>
              ₹375{" "}
              <button style={{ backgroundColor: "rgb(150, 150, 150)" }}>
                Out of Stock
              </button>
            </p>
          </div>
          <div id="order-img">
            <img height={"130px"} src="src/assets/images/o7.png" alt="" />
            <br />{" "}
            <p>
              ₹445 <button onClick={fun5}>Add Item</button>
            </p>
          </div>
          <div id="order-img">
            <img height={"130px"} src="src/assets/images/o8.png" alt="" />
            <br />{" "}
            <p>
              ₹550{" "}
              <button style={{ backgroundColor: "rgb(150, 150, 150)" }}>
                Out of Stock
              </button>
            </p>
          </div>
        </div>
      </Container>
      <div id="cart" style={{ display: "none" }}>
        <h1>
          <FontAwesomeIcon icon={faCartShopping} />
          Cart
        </h1>
      </div>
      <Container>
        <div id="cont1" style={{ display: "none" }}>

          <img src="src/assets/images/o1.png" alt="" />

          <button onClick={dis1}>Discard Item</button>
          <p id="total">
            {" "}
            <span style={{ fontSize: "20px" }}> Price </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            ₹380 <br /> Delivery charges : ₹50 <br /> Sub
            Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            : ₹430
          </p>
          
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
        </div>

        <div id="cont2" style={{ display: "none" }}>
          <img src="src/assets/images/o2.png" alt="" />
          <button onClick={dis2}>Discard Item</button>
          <br /> <br />
          <p id="total">
            {" "}
            <span style={{ fontSize: "20px" }}> Price </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            ₹380 <br /> Delivery charges : ₹50 <br /> Sub
            Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            : ₹430
          </p>
          
        </div>
        <div id="cont3" style={{ display: "none" }}>
          <img src="src/assets/images/o3.png" alt="" />
          <button onClick={dis3}>Discard Item</button>
          <br /> <br />
          <p id="total">
            {" "}
            <span style={{ fontSize: "20px" }}> Price </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            ₹290 <br /> Delivery charges : ₹50 <br /> Sub
            Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            : ₹340
          </p>
          <MyContext.Provider value={{ user3 }}>
            <ViewProducts />
          </MyContext.Provider>
        </div>
        <div id="cont4" style={{ display: "none" }}>
          <img src="src/assets/images/o4.png" alt="" />
          <br /> <br />
          <p id="total">
            {" "}
            <span style={{ fontSize: "20px" }}> Price </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            ₹450 <br /> Delivery charges : ₹50 <br /> Sub
            Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            : ₹500
          </p>{" "}
          <button onClick={dis4}>Discard Item</button>
          <MyContext.Provider value={{ user4 }}>
            <ViewProducts />
          </MyContext.Provider>
        </div>
        <div id="cont5" style={{ display: "none" }}>
          <img src="src/assets/images/o7.png" alt="" />
          <button onClick={dis5}>Discard Item</button>
          <br /> <br />
          <p id="total">
            {" "}
            <span style={{ fontSize: "20px" }}> Price </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            ₹445 <br /> Delivery charges : ₹50 <br /> Sub
            Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            : ₹495
          </p>
          <MyContext.Provider value={{ user5 }}>
            <ViewProducts />
          </MyContext.Provider>
        </div>
      </Container>



      
    </>
  );
};
export { MyContext };
export default Order;
