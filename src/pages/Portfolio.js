import React, {Component} from "react";
import Row from "../components/Row";
import Card from "../components/Card";
import Container from "../components/Container";
//import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

class Portfolio extends Component{

  state = {
    projects:[],
    curProject:""
  };


handleBtnClick = (e) => {
  this.setState( {curProject : e.target.value});
};



render() {
  return (
  <div id="portfolio" className="portfolio-section content-section text-center">
    <Container>
        <h2>Portfolio</h2>
        <Row>
          <Card />
          <Card />
          <Card />
          <Card />
        </Row>
        <Row>
          <Card />
          <Card />
          <Card />
          <Card />
        </Row>
         <Row>
          <Card />
          <Card />
          <Card />
          <Card />
        </Row>
         <Row>
          <Card />
          <Card />
          <Card />
          <Card />
        </Row>
    </Container>
    <Footer />
  </div>
  );
};


}

export default Portfolio;
