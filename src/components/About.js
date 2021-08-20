import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Image from 'material-ui-image';
import Avatar from '../img/avatar.jpeg';

function About() {
  return (
    <>
      <div className="titlePar">
        <h1>About Me</h1>
      </div>
      <Container className="gridStyle">
        <Row>
          <Col md={4}>
            <Image src={Avatar} style={{ width: 300, height: 350 }} />
          </Col>
          <Col md={8}>
            <h4>
              I am a patient person. I like to create, design things, and have
              strong attention to detail, and I love what I do
            </h4>
            <p>
              I graduated from Texas State University with a Bachelor of Science
              degree in Computer Science. I currently working at Collabera as a
              software developer. I strive to create simple, beautiful web
              applications with user friendly design
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
