import React, {Component} from "react";
import Col from "../../components/Col";
import Row from "../../components/Row";
import Card from "../../components/Card";
//import Jumbotron from "../../components/Jumbotron";
import Container from "../../components/Container";
import Footer from "../../components/Footer";

const About = () => (
  <div id="about" className="content-section">
    <h2>About Me</h2>
    
    <Container>
    
    <Row>
      <Col size="4">
        <Card />
      </Col>
      <Col size ="8">
        <p>
        I have always been drawn to puzzles requiring intense focus and problem-solving. I also have a natural curiosity for proportion and design. These coupled with my incessant desire to learn have generated a unique path involving architecture, computer science, sales and business.
        </p>
        <p>
          I graduated from UT Austin with a degree in Architecture. After several years, I returned
          to UT Austin to study Computer Science. While in school, I landed a great job as a game developer
          and pursued software development as a new career. When I became a mom, I chose to take a break
          from my development career to focus on family.
        </p>
        </Col>
    </Row>
    <Row>
        <p>
          I rejoined the workforce in the field of technical sales where I use my knowledge of development
          to assist prospective customers in finding the best technical solution for their needs. I am currently
          a member of the software team for an engineering firm in the oil and gas industry. As part of my 
          interest in forever-learning, I completed UT Austin's full stack web development bootcamp where I gained 
          experience working with current web tools and technologies for front end, back end and database development
          including HTML 5.0/CSS, Javascript, JQuery, Bootstrap, GitHub, Handlebars, Node.js, React, PHP, Firebase, Mongo, 
          Mongoose, CLI, (add more)
        </p>  
      
      With the fast-paced ever-changing technology landscape, full stack web development has rekindled my love 
      of programming and has become be both an exciting challenge and a excellent way to continually evolve.
    </Row>
    </Container>
    <Footer />
  </div>
);

export default About;
