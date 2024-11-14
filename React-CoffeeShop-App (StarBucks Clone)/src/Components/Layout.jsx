import { Link,Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'; 
import Nav from 'react-bootstrap/Nav';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Layout=()=>{
    return(
        <>
        <Navbar collapseOnSelect expand="lg" id="navbar" >
        <Container>
        <Navbar.Brand as={Link} to="/home">
            <img
              src="src/assets/images/logo.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home" id="nav-items">Home</Nav.Link>
              <Nav.Link as={Link} to="/gift" id="nav-items">Gift</Nav.Link>
              <Nav.Link as={Link} to="/order" id="nav-items">Order</Nav.Link>
              <Nav.Link as={Link} to="/pay" id="nav-items">Pay</Nav.Link>
              <Nav.Link as={Link} to="/store" id="nav-items">Store</Nav.Link>
            </Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Outlet/>
      
      </>      

    )
}

export default Layout;
