import { Link } from "react-router-dom";
import {} from "../NavBar/NavBar.css"

const Footer = () => {
  return (
    <>
      <div className="footer-copyright text-center py-5 nav__bg">
        <div  className="container-fluid">
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a to={"/"}>CINEMAGIC</a> 
        </div>
      </div>
    </>
  );
};

export default Footer;
