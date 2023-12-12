import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import weatherProjectImage from '../images/project_images/weather-app-front.png';
import imageBotFront from '../images/project_images/image-bot-front.png';
import keeperappfront from '../images/project_images/keeper-app-front.png'
import estateAppFront from '../images/project_images/estate-app-1.png';

function Projects() {
  const navigate = useNavigate();

  return (
    <div className="projectsDiv">
      <h1>Here are some projects I've built till now :</h1>
      <hr></hr>
      <Container fluid="sm">
        <Row >
          <Col>
            <div className="projectRows reveal fade-bottom" onClick={() => { navigate('/estateapp') }}>
              <img src={estateAppFront} className="projectsImg" alt="lol"></img>
              <div>
                <p className="projectTitle">Estate Website</p>
                <p className="projectDes">This is a <i>Real Estate WebApp</i> built using <em>ReactJs</em> in front-end and back-end.</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row >
          <Col>
            <div className="projectRows reveal fade-bottom" onClick={() => { navigate('/weatherapp') }}>
              <img src={weatherProjectImage} className="projectsImg" alt="lol"></img>
              <div>
                <p className="projectTitle">Weather App</p>
                <p className="projectDes">This is a <i>Weather App</i> built using <em>NodeJs</em> and <em>ExpressJs</em>. An API from openweathermap.com is being used here</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row >
          <Col>
            <div className="projectRows reveal fade-bottom" onClick={() => { navigate('/imagebot') }}>
              <img src={imageBotFront} className="projectsImg" alt="lol"></img>
              <div>
                <p className="projectTitle">Image-Bot Telegram</p>
                <p className="projectDes">This is a <i>Telegram bot</i> built using <em>NodeJs</em> for back-end.</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row >
          <Col>
            <div className="projectRows reveal fade-bottom" onClick={() => { navigate('/keeperapp') }}>
              <img src={keeperappfront} className="projectsImg" alt="lol"></img>
              <div>
                <p className="projectTitle">Keeper App React</p>
                <p className="projectDes">This is a <i>Note Keeper App</i> built using <em>ReactJs</em> in front-end and NodeJs as back-end.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects;