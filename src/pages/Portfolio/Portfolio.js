import React, {Component} from "react";
import Row from "../../components/Row";
import ProjectCard from "../../components/ProjectCard";
import Container from "../../components/Container";
//import Jumbotron from "../components/Jumbotron";
import Footer from "../../components/Footer";

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
          <ProjectCard 
            image="./images/project-giphysearch-bw.jpg" 
            image2="./images/project-giphysearch.jpg" 
            cardTitle="Giphy Search"
            github=""
            demo="https://nomamanomama.github.io/GiphySearch/"
            about=""/>
          <ProjectCard 
          image="./images/project-bamazon-bw.jpg"
          image2="./images/project-bamazon.jpg"  
          cardTitle="Bamazon" 
          github=""
            demo="https://github.com/nomamanomama/bamazon"
            about=""/>
          <ProjectCard 
          image="./images/project-crosswind-bw.jpg" 
          image2="./images/project-crosswind.jpg"
          cardTitle="Crosswind" 
          github=""
            demo="https://crosswind.herokuapp.com/"
            about=""/>
          <ProjectCard 
          image="./images/project-hos-bw.jpg" 
          image2="./images/project-hos.jpg"
          cardTitle="House of Style" 
          github=""
            demo="https://radiant-crag-29134.herokuapp.com/home"
            about=""/>
          <ProjectCard 
          image="./images/project-friendfinder-bw.jpg" 
          image2="./images/project-friendfinder.jpg" 
          cardTitle="Friend Finder" 
          github=""
            demo="https://its-a-friendfinder.herokuapp.com/"
            about=""/>
          <ProjectCard 
          image="./images/project-burger-bw.jpg" 
          image2="./images/project-burger.jpg"
          cardTitle="Eat Da Burger" 
          github=""
            demo="https://nomama-eat-da-burger.herokuapp.com"
            about=""/>
          <ProjectCard 
          image="./images/project-hangman-bw.jpg"
          image2="./images/project-hangman.jpg" 
          cardTitle="Hangman Game" 
          github=""
            demo="https://nomamanomama.github.io/Hangman-Game/"
            about=""/>
          <ProjectCard 
          image="./images/project-clicky-bw.jpg" 
          image2="./images/project-clicky.jpg" 
          cardTitle="Clicky Game" 
          github=""
            demo="https://nomamanomama.github.io/memorygame/"
            about=""/>
          <ProjectCard 
          image="./images/project-rps-bw.jpg" 
          image2="./images/project-rps.jpg" 
          cardTitle="Rock Paper Scissors" 
          github=""
            demo="https://nomamanomama.github.io/RPS-Firebase"
            about=""/>
          <ProjectCard 
          image="./images/project-liri-bw.jpg" 
          image2="./images/project-liri.jpg" 
          cardTitle="Liri CLI" 
          github=""
            demo="https://github.com/nomamanomama/liri-node-app"
            about=""/>
          <ProjectCard 
          image="./images/project-nytmern-bw.jpg" 
          image2="./images/project-nytmern.jpg" 
          cardTitle="NY Times Scraper" 
          github=""
            demo="https://nomama-nytreact.herokuapp.com/"
            about=""/>
          <ProjectCard 
          image="./images/project-rpg-bw.jpg"
          image2="./images/project-rpg.jpg" 
          cardTitle="Role-Play Game" 
          github=""
            demo="https://nomamanomama.github.io/week-4-game/"
            about=""/>
          <ProjectCard 
          image="./images/project-oceantrivia-bw.jpg" 
          image2="./images/project-oceantrivia.jpg" 
          cardTitle="Ocean Trivia Game" 
          github=""
            demo="https://nomamanomama.github.io/TriviaGame"
            about=""/>
          <ProjectCard 
          image="./images/project-scraper-bw.jpg" 
          image2="./images/project-scraper.jpg" 
          cardTitle="Project Scraper" 
          github=""
            demo="https://mongo-scrappy.herokuapp.com/"
            about=""/>
          <ProjectCard image="./images" cardTitle = "coming soon"/>
          <ProjectCard image="./images" cardTitle = "coming soon"/>
        </Row>
    </Container>
    <Footer />
  </div>
  );
};


}

export default Portfolio;
