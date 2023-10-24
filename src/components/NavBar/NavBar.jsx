import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img from "../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "./NavBar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar_background">
      <Container>
        <Navbar.Brand className=" w-25" >
  <Link to={"/"}> <img src={img} alt="" className="  img_width " srcset="" /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="fw-bold fs-5">
              <Link to={"/home"}>Home</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
