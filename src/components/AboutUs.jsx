import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./videos.css"; // Custom CSS file

const VideoCard = ({ videoSrc }) => {
  return (
    <Card className="h-100 shadow-sm video-card">
      <Card.Body className="text-center">
        {/* Video */}
        <div className="ratio" style={{ aspectRatio: "16/9", height: "360px" }}> {/* Increased height */}
          <iframe
            src={videoSrc}
            title="YouTube Video"
            allowFullScreen
            className="rounded w-100 h-100" // Ensures iframe takes the full container
            style={{ border: "none" }} // Removes any default border
          ></iframe>
        </div>
      </Card.Body>
    </Card>
  );
};

const VideoCardsSection = () => {
  const cardData = [
    {
      videoSrc: "https://www.youtube.com/embed/nrm8Rjgsy4k",
    },
  ];

  return (
    <Container className="py-5" style={{ backgroundColor: "white" }}>
      <Row className="align-items-center">
        {/* Left Section - Heading */}
        <Col xs={12} md={6} className="text-center text-md-start mb-4 mb-md-0">
          <h1
            className="youtube-display-4 fw-bold"
            style={{ whiteSpace: "nowrap", fontSize: "3rem",marginTop:"-2rem",color:"black"}} // Ensures heading stays in one line
          >
            Watch Us on YouTube
          </h1>
          <p className="parag" style={{fontSize:"1.3rem",color:"black"}}>Discover the latest insights, tips, and updates from the world of healthcare and professional growth on our YouTube channel. Watch engaging videos that inspire, educate, and guide you toward building a successful career. From expert interviews to in-depth tutorials, we’ve got you covered. Subscribe now to stay connected and informed!</p>
        </Col>

        {/* Right Section - Videos */}
        <Col xs={12} md={6}>
          <Row className="g-4">
            {cardData.map((card, index) => (
              <Col xs={12} key={index}>
                <VideoCard {...card} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoCardsSection;
