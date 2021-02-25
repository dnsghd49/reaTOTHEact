import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Mr. Poppy</h1>
        <h2>Mr. Poppy is the best Employee of the month!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Employee Directory</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
