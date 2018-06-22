import React, {Component} from "react";
import CardBtn from "../CardBtn";
import CardImage from "../CardImage";
import CardTitle from "../CardTitle";
import { Link } from "react-router-dom";
import "./ProjectCard.css";



class ProjectCard extends Component {

  handleBtnClick = (e) => {
    let target = e.target.value;
    
  }
  
  render () {
    return (      
      <div className = "project-card">
        <CardImage 
          image={this.props.image} 
          image2={this.props.image2} 
        />
        {!this.props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
        <CardTitle> {this.props.cardTitle} </CardTitle>
        <CardBtn
          className="project-github card-btn"
          style={{ opacity: this.props.image ? 1 : 0 }}
          onClick={this.props.handleBtnClick}
          data-value="github"
        />
        <CardBtn
          className="project-about card-btn"
          style={{ opacity: this.props.image ? 1 : 0 }}
          onClick={this.props.handleBtnClick}
          data-value="about"
        />
        <CardBtn
          className="project-demo card-btn"
          style={{ opacity: this.props.image ? 1 : 0 }}
          onClick={this.props.handleBtnClick}
          data-value="url"
        />
      </div>
    );
  };
}

export default ProjectCard;
