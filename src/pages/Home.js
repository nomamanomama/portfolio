import React, {Component} from "react";
import Row from "../components/Row";
import Container from "../components/Container";
import "../index.css";

class Home extends Component {
  
  setBackgroundColor = (on) => { 
    document.getElementById("colorHome").style.opacity = on ? 1 : 0 
  }


  render(){
    return (
      <div>
        <header id="homeScreen" className="masthead">
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

      </div>
    );
  };
}

export default Home;
