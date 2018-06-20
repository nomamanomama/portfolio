import React, {Component} from "react";
import Row from "../components/Row";
//import Card from "../components/Card";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import "../index.css";

class Home extends Component {
  
  render(){
    return (
      <div>
        <header className="masthead">
          <div className="intro-body">
            <Container>
              <Row>
                <div className="col-lg-8 mx-auto">
                  <h1 className="brand-heading">Kathy Kennedy</h1>
                  <p className="intro-text">Welcome! Feel free to read, browse or connect with me.
                  </p>
                  <a href="/about" className="btn btn-circle js-scroll-trigger">
                    <i className="fa fa-angle-double-down animated"></i>
                  </a>
                </div>
              </Row>
            </Container>
          </div>
        </header>
        <Footer />
      </div>
    );
  };
}

export default Home;
