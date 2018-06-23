import React, {Component} from "react";
import CardImage from "../CardImage";
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import "./ProjectCard.css";



class ProjectCard extends Component {
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        popoverOpen: false
      };
    }

    toggle() {
      this.setState({
        popoverOpen: !this.state.popoverOpen
      });
    }
 

  render () {
    return (      
      <div className = "project-card">
        <a href={this.props.demo} target="_blank">
          <CardImage 
            image={this.props.image} 
            image2={this.props.image2} 
          />
        </a>
        {!this.props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
        
        <a href={this.props.github} target="_blank"
          className="project-github card-btn"
          data-value="about"
          border="none"
          id= {"github-" + this.props.id}
          title={this.props.github}
          name="github">
            <i className="fab fa-github"></i>
        </a>
        <Button
          className="project-about card-btn"
          data-value="about"
          border="none"
          name="about"
          title={this.props.cardTitle}
          data-container="body" 
          data-toggle="popover" 
          data-placement="top" 
          data-content={this.props.about}
          id= {"about-" + this.props.id}
          onClick={this.toggle}
          >
         
        <i className="fas fa-info-circle"></i>
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target={"about-"+this.props.id} toggle={this.toggle}>
          <PopoverHeader>{this.props.cardTitle}</PopoverHeader>
          <PopoverBody>{this.props.about}</PopoverBody>
        </Popover>
      </div>
    );
  };
}

export default ProjectCard;
