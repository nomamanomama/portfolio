import React, {Component} from "react";
import { Link, Route } from "react-router-dom";
import {FormBtn, Input, TextArea} from "../components/Form";
import Learn from "./Learn";
import Container from "../components/Container"; 
import Row from "../components/Row";
//import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

class Contact extends Component {
state = {
    name:"",
    email:"",
    message:""
  };

handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

handleFormSubmit = (event) => {
  event.preventDefault();

};

render() {
  return (
    <div id="contact" className="content-section text-center">
      <h2>Connect with me...</h2>
      <Container>
      <form>
        <Input
          value={this.state.name}
          onChange={this.handleInputChange}
          name="Name"
          placeholder="Name"
        />
        <Input
          value={this.state.email}
          onChange={this.handleInputChange}
          name="Email"
          placeholder="Email"
        />
        <TextArea
          value={this.state.message}
          onChange={this.handleInputChange}
          name="Message"
          placeholder="Message"
        />
        <FormBtn
          disabled={!(this.state.name && this.state.email && this.state.message)}
          onClick={this.handleFormSubmit}
        >
        Submit
        </FormBtn>
      </form>

      <ul className="list-inline banner-social-buttons">
              <li className="list-inline-item">
                <a href="https://twitter.com/" className="btn btn-default btn-lg">
                  <i className="fa fa-twitter"></i>
                  <span className="network-name">Twitter</span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/nomamanomama" className="btn btn-default btn-lg">
                  <i className="fa fa-github"></i>
                  <span className="network-name">Github</span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/kathy-kennedy-8526867/" className="btn btn-default btn-lg">
                  <i className="fa fa-linkedin"></i>
                  <span className="network-name">LinkedIn</span>
                </a>
              </li>
            </ul>
      </Container>
      
      
      <Footer />
    </div>
  );
};
}

export default Contact;


