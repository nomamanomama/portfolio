import React, {Component} from "react";
import {FormBtn, Input, TextArea} from "../components/Form";
import Container from "../components/Container"; 



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

  if(this.state.message)
  {
    //create ajax call to post message
  }

};

render() {
  return (
    <div id="contact" className="contact-section text-center">
      <h2>Connect with me...</h2>
      <Container>
        <ul className="list-inline banner-social-buttons">
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
        </ul>
      <form>
        <Input
          value={this.state.name}
          onChange={this.handleInputChange}
          name="Name"
          placeholder="Name"
          type="text"
        />
        <Input
          value={this.state.email}
          onChange={this.handleInputChange}
          name="Email"
          placeholder="Email"
          type="email"
        />
        <TextArea
          value={this.state.message}
          onChange={this.handleInputChange}
          name="Message"
          placeholder="Message"
        />
        <FormBtn id="contactSubmit"
          disabled={!(this.state.name && this.state.email && this.state.message)}
          onClick={this.handleFormSubmit}
        >
        Submit
        </FormBtn>
      </form>

      
      </Container>
      
      

    </div>
  );
};
}

export default Contact;


