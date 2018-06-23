import React, {Component} from "react";
import Row from "../../components/Row";
import Container from "../../components/Container";
import "./About.css";


class About extends Component {

  showAboutPic = (on) => {
    document.getElementById("aboutPic").style.opacity = on ? 1 : 0;
    document.getElementById("aboutJumbo").style.backgroundImage = on 
      ? "url('./images/bg-creek-warm.jpg')" 
      : "url('./images/bg-creek.jpg')";
  };

  render() {
      return(
      
      <div id="about" className="content-section">
        <Container>
            <div className="jumbotron jumbotron-fluid" id="aboutJumbo"> 

            <img src="./images/me.jpg" id="aboutPic" alt="Kathy Kennedy"/>
            <h2 className="text-center"
              onMouseOver = {() => this.showAboutPic(true)}
                onMouseLeave={() => this.showAboutPic(false)}
            >
            About Me
            </h2>
            
          </div>
        <Row>
          <p>
            I have always possessed an attraction for things that require intense focus and problem-solving. I also have a deep appreciation for design and the art of creation. These interests, coupled with my incessant desire to learn, have generated a unique path involving architecture, computer science, painting, writing, sales and business.
          </p>
          <p>
            I graduated from UT Austin with a degree in Architecture. After working in architecture for several years, I returned to UT Austin to study Computer Science. While in school, I began working as a game developer for PC-based games where I lead a team of software engineers to create shrink-wrapped games for companies like Mattel, Disney and Hasbro.
          </p>
          <p>
          With my leadership and communication skills, I was offered a position to work in technical sales where I used my knowledge of development to assist prospective customers in finding the best technical solution for their needs. I completed UT Austin's full stack web development bootcamp where I gained experience working with current web tools and technologies for front end, back end and database development. Full stack web development is the perfect arena because it touches on all of my natural interests. There is no end to learning. There is opportunity to create and share beautiful creations and to immerse oneself in complex problems. For me, it is an exciting challenge and an excellent way to continually evolve.
          </p>
        </Row>
        <Row>
          <h3> Technologies </h3>
            </Row>
            <Row>
            <div className="home-tech col-md6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">HTML5</li>
                <li className="list-group-item">CSS</li>
                <li className="list-group-item">Javascript</li>
                <li className="list-group-item">Responsive Design</li>
                <li className="list-group-item">Bootstrap</li>
                <li className="list-group-item">Handlebars</li>
                <li className="list-group-item">MySQL</li>
              </ul>
            </div>
              <div className="home-tech col-md6">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Cookies, Local Storage</li>
                  <li className="list-group-item">Firebase</li>
                  <li className="list-group-item">Mongo, Mongoose</li>
                  <li className="list-group-item">Node.js</li>
                  <li className="list-group-item">Angular.js</li>
                  <li className="list-group-item">React.js</li>
                  <li className="list-group-item">PHP</li>
                  
                </ul>
              </div>
        </Row>
        <Row>
          <h3> Tools and Platforms </h3>
            </Row>
            <Row>
          <div className="home-tech col-md6">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Git, GitHub, Git Bash</li>
              <li className="list-group-item">npm, yarn, Composer</li>
              <li className="list-group-item">Heroku</li>
              <li className="list-group-item">Laravel</li>
            </ul>
          </div>
          </Row>
        </Container>
        
      </div>
    );
  };
}

export default About;
