import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import codechefImg from '../images/png/Codechef.png';
import linkedInImg from '../images/png/LinkedIn.png';
import instagramImg from '../images/png/Instagram.png';
import gitHubImg from '../images/png/GitHub.jpg';


function ProfileLinks(){
    return (
            <div className="profileLinkDiv">
                <Container fluid="sm">
                <center>
                <h1 id="profileLinksHeading">Let's Connect</h1>
                    <Row id="linkItems" className="reveal fade-bottom">
                        <Col><a href="https://www.codechef.com/users/en_zeon" target="_blank" rel="noopener noreferrer"><img className="profilePNG" src={codechefImg} alt="Codechef Profile Link"/></a><figcaption>CodeChef</figcaption></Col>
                        <Col><a href="https://www.linkedin.com/in/shouvik-sutar/" target="_blank" rel="noopener noreferrer"><img className="profilePNG" src={linkedInImg} alt="LinkedIn Profile Link"/></a><figcaption>LinkedIn</figcaption></Col>
                        <Col><a href="https://github.com/Student9876" target="_blank" rel="noopener noreferrer"><img className="profilePNG" src={gitHubImg} alt="GitHub Profile Link"/></a><figcaption>GitHub</figcaption></Col>
                        <Col><a href="https://www.instagram.com/en_zeon/" target="_blank" rel="noopener noreferrer"><img className="profilePNG" src={instagramImg} alt="Instagram Profile Link"/></a><figcaption>Instagram</figcaption></Col>
                    </Row>
                </center>
                </Container>
            </div>
    )
}

export default ProfileLinks;