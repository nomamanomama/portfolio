import React from "react";
import "./Footer.css";
import Row from "../Row";

const Footer = () => (
  <footer className="footer">
    <Row 
    fluid="true" 
    className="text-center"
    >
      <ul className="list-inline footer-social-buttons">
          <li className="list-inline-item">
            <a href="https://twitter.com/nomamanomama" className="btn btn-default btn-lg">
              <i className="fab fa-twitter"></i>
              <span className="network-name"></span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://github.com/nomamanomama" className="btn btn-default btn-lg">
              <i className="fab fa-github"></i>
              <span className="network-name"></span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/kathy-kennedy-8526867/" className="btn btn-default btn-lg">
              <i className="fab fa-linkedin"></i>
              <span className="network-name"></span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="mailto:kkennedytechpro@gmail.com" className="btn btn-default btn-lg">
              <i className="fas fa-at"></i>
              <span className="network-name"></span>
            </a>
          </li>

        </ul>
    </Row>  
    <span>Kathy Kennedy &copy; Copyright 2018</span>
  </footer>
);

export default Footer;
