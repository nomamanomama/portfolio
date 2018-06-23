import React, {Component} from "react";
import Row from "../../components/Row";
import ProjectCard from "../../components/ProjectCard";
import Container from "../../components/Container";
import projects from "../../projects.json";
import "./Portfolio.css";

class Portfolio extends Component{

  state = {
    projects,
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
          {this.state.projects.map(project => (
          <ProjectCard 
              id={project.id}
              key={project.id}
              name={project.name}
              image={project.image}
              image2={project.image2} 
              cardTitle={project.cardTitle}
              github={project.github}
              demo={project.demo}
              about={project.about}
          />
          ))}
        </Row>
    </Container>

  </div>
  );
};


}

export default Portfolio;
