import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { FaTrophy, FaMapMarkerAlt, FaCheckCircle, FaBasketballBall, FaFutbol, FaTableTennis, FaTable } from "react-icons/fa";

const About = () => {
  return (
    <Container className="mt-5">
      {/* Header Section */}
      <Row className="text-center mb-4">
        <Col>
          <h2 className="fw-bold display-5 text-gradient">About Indoor Sports System</h2>
          <p className="text-muted lead">Your ultimate destination for indoor sports and recreation.</p>
        </Col>
      </Row>

      {/* Who We Are Section */}
      <Row className="align-items-center mb-5">
        <Col md={6} className="mb-3">
          <Image
            src="https://sl.bing.net/dgsSg7R3zJk"
            fluid
            rounded
            className="shadow-lg"
          />
        </Col>
        <Col md={6}>
          <h3 className="fw-bold">Who We Are</h3>
          <p className="text-muted">
            Indoor Sports System is a state-of-the-art facility designed to offer a wide range of indoor sports activities. 
            From football and basketball to badminton and tennis, we provide world-class infrastructure for athletes and sports enthusiasts.
          </p>
        </Col>
      </Row>

      {/* Key Highlights */}
      <Row className="text-center">
        {[
          { icon: <FaTrophy className="text-warning" />, title: "Our Mission", desc: "To promote sports and a healthy lifestyle by providing top-quality indoor facilities." },
          { icon: <FaCheckCircle className="text-primary" />, title: "Why Choose Us?", desc: "Advanced facilities, expert trainers, and a friendly environment for all age groups." },
          { icon: <FaMapMarkerAlt className="text-danger" />, title: "Location", desc: "We are centrally located, easily accessible, and open 7 days a week." }
        ].map((item, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="p-4 shadow-sm border-0 custom-card">
              <Card.Body>
                <h5 className="fw-bold">{item.icon} {item.title}</h5>
                <p className="text-muted">{item.desc}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Facilities Section */}
      <Row className="mt-5 text-center">
        <Col>
          <h3 className="fw-bold">Our Facilities</h3>
          <p className="text-muted">Explore our top-notch indoor sports facilities.</p>
        </Col>
      </Row>

      <Row>
        {[
          { icon: <FaBasketballBall className="text-warning" />, title: "Basketball Courts" },
          { icon: <FaFutbol className="text-primary" />, title: "Indoor Football" },
          { icon: <FaTableTennis className="text-danger" />, title: "Badminton Courts" },
          { icon: <FaTable className="text-success" />, title: "Tennis Arena" }
        ].map((item, index) => (
          <Col md={3} key={index} className="mb-3">
            <Card className="p-3 text-center shadow-sm border-0 custom-card">
              <Card.Body>
                <h5 className="fw-bold">{item.icon} {item.title}</h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Call to Action */}
      <Row className="mt-5 text-center">
        <Col>
          <h4 className="fw-bold">Join Us Today!</h4>
          <p className="text-muted lead">Experience the best indoor sports facilities. Book your slot now!</p>
          <Button variant="primary" size="lg" className="px-4 py-2 shadow-sm">Get Started</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
