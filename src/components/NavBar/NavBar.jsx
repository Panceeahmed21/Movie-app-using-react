import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "./NavBar.css";
function NavBar() {
  return (
    <Navbar expand="lg" className="nav__bg py-2 fixed-top">
      <Container>
        <Navbar.Brand className=" w-25">
          <Link to={"/"}>
            {" "}
            <h2>CINEMAGIC</h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <button className="btn fw-bold border-white fs-5 mx-2">
                {" "}
                <Link to={"/home"}>Home</Link>
              </button>
              <button className="btn fw-bold border-white fs-5 mx-2">
                {" "}
                <Link to={"/tv"}>TV Shows</Link>
              </button>
              <button className="btn fw-bold border-white fs-5 mx-2">
                {" "}
                <Link to={"/people"}>People</Link>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
