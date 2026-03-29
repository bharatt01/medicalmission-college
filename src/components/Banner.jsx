
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import image1 from "./hero1.png";
import image2 from "./hero2.png";
import "./banner.css";

const HeroSection = () => {
  const images = [image1, image2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const words = ["Nursing",  "HospitalManagement", "Healthcare"]; // Words to type
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(""); // Typing text
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Image carousel logic
    const imageInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const typingEffect = setTimeout(() => {
      const currentWord = words[currentWordIndex];
  
      if (!isDeleting) {
        setDisplayedText((prev) => {
          const newText = prev + currentWord[letterIndex];
          if (letterIndex === currentWord.length - 1) {
            setIsDeleting(true);
          }
          return newText;
        });
        setLetterIndex((prev) => prev + 1);
      } else {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === "") {
          setIsDeleting(false);
          setLetterIndex(0);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    }, isDeleting ? 350 : 100);
  
    return () => clearTimeout(typingEffect);
  }, [letterIndex, isDeleting, currentWordIndex, displayedText]);
  

  return (
    <Container fluid className="hero-section bg-light px-0" style={{marginTop:"5rem"}}>
      <Row className="align-items-center text-center text-md-start m-0">
        {/* Mobile View */}
        <Col xs={12} className="d-md-none mb-3">
          <div className="carousel-wrapper mobile-carousel">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              className="img-fluid"
            />
          </div>
        </Col>

        {/* Text Content */}
        <Col xs={12} md={6} className="p-4">
          <h1 className="display-4 fw-bold">Build a Progressive Career in</h1>
          <h1 className="nur-text-primary" style={{ color: "" }}>
            {displayedText}
            <span className="cursor"></span>
          </h1>
          <div className="mt-4">
            <a href="tel:+91 8750768101">
              <Button variant="danger" className="me-2">
                Enquire Now
              </Button>
            </a>
            {/* <Button variant="outline-danger">▶ Watch Video</Button> */}
            <Button
          variant="outline-danger"
          onClick={() => window.open("https://www.youtube.com/@medicalmission8392")} // Opens in a new tab
        >
          ▶ Watch Video
        </Button>
          </div>
        </Col>

        {/* Desktop View */}
        <Col
          md={6}
          className="d-none d-md-flex position-relative justify-content-center align-items-center"
        >
          <div className="carousel-wrapper desktop-carousel">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className={`carousel-image ${
                  index === currentIndex ? "active" : ""
                }`}
              />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
