import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="GsSoC 2021"
              date="fab 20201 - april 2021"
              content={[
                "Participated in open source fest.",
                "Contibuted on different projects related to Data Structures and Algorithm , and Android Application with Flutter",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Rotaract club of Youth [Club in IIIT Gwlalior]"
              content={[
                "This is the club with the healthiest relationships both inside the club and outside with the world. strive to make positive contributions to the society and truly aspire to bring smiles everywhere.",
              ]}
            />
            <Resumecontent
              title="Web Developer [Winter Project - 2021]"
              content={[
                "Developed Front End of E-commerce Web Application",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Information Technology [Indian Institute Of Information Technology ,Gwalior] "
              date="2019 - Present"
              content={[`CGPA: 7.00 (Till 3rd Sem)`]}
            />
            <Resumecontent
              title="12TH BOARD [Vivekananda Vidhyalaya , Ahmedabad]"
              date="2015 - 2017"
              content={["Precentage: 77%"]}
            />
            <Resumecontent
              title="10TH BOARD [Bhavana higher secondary school, Ahmedabad] "
              date="2005 - 2015"
              content={["Precentile: 99.4"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Highest Rating on Codechef : 1803 (4 star)",
                "Highest Rating on Codeforces : 1446 (Specialist)",
                "Top Performer in Code-Break 1.0",
                "Solved more than 1000 problems on various Platforms",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
