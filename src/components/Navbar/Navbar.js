import React, {Component} from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import "./Navbar.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Navbar extends Component {
  
  componentDidMount(){
    switch(window.location.pathname) {
      case "/":
      case "/about":
        document.getElementById("navAbout").classList.add("active");
        document.getElementById("navPortfolio").classList.remove("active");
        document.getElementById("navContact").classList.remove("active");
        break;
      case "/portfolio":
        document.getElementById("navAbout").classList.remove("active");
        document.getElementById("navPortfolio").classList.add("active");
        document.getElementById("navContact").classList.remove("active");
        break;
      case "/contact":
        document.getElementById("navAbout").classList.remove("active");
        document.getElementById("navPortfolio").classList.remove("active");
        document.getElementById("navContact").classList.add("active");
        break;
      default:
        console.log ("unrecognized nav path");
    };
  };
  
  render () {
    return(
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <Container>
        <Link className="navbar-brand" to="/">
          Kathy Kennedy
        </Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
            {console.log(window.location.pathname)}
          <ul className="navbar-nav ml-auto">
            <li id="navAbout"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/about"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li id="navPortfolio"
              className={
                window.location.pathname === "/portfolio"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/portfolio" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li id="navContact"
              className={
                window.location.pathname === "/contact"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        </Container>
      </nav>
    );
  };
}

export default Navbar;
