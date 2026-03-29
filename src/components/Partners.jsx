import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./parterns.css"; // Custom CSS for styling and animation

const logos = [
  { id: 1, src: "/Images/lu.png", alt: "Logo 1" },
  { id: 2, src: "/Images/osguu.jpg", alt: "Logo 2" },
  { id: 3, src: "/Images/swamiviveka.jpg", alt: "Logo 3" },
  { id: 4, src: "/Images/nilm.png", alt: "Logo 4" },
  { id: 5, src: "/Images/manglayatan.jpg", alt: "Logo 5" },
  { id: 6, src: "/Images/lu.png", alt: "Logo 6" },
  { id: 7, src: "/Images/osguu.jpg", alt: "Logo 7" },
  { id: 8, src: "/Images/swamiviveka.jpg",alt: "Logo 8" },
  { id: 9, src: "/Images/nilm.png", alt: "Logo 9" },
  { id: 10, src: "/Images/manglayatan.jpg", alt: "Logo 10" },
];

const Partners = () => {
  return (
    <Container fluid className="logo-showcase-container py-5 bg-white" style={{marginTop:"-4rem"}}>
      <h1 className=" ugc-text-center mb-3" style={{fontWeight:"bold"}}>Our UGC Recognised Partners</h1>
      <p className="ugc-text-center mb-4">
        We partner with UGC recognised Higher Education Institutions in India for offering allied healthcare courses. Our courses are aligned with <br/>NSDC & NCrF learning outcomes that ensure training in industry-ready skills, and are recognised by statutory bodies.
      </p>

      <div className="logo-marquee">
        <div className="logo-marquee-inner">
          {logos.map((logo) => (
            <div key={logo.id} className="logo-box">
              <Card className="logo-card border-0">
                <Card.Img
                  src={logo.src}
                  alt={logo.alt}
                  className="logo-image img-fluid"
                />
              </Card>
            </div>
          ))}
          {/* Duplicate logos for seamless scroll */}
          {logos.map((logo) => (
            <div key={`dup-${logo.id}`} className="logo-box">
              <Card className="logo-card border-0">
                <Card.Img
                  src={logo.src}
                  alt={logo.alt}
                  className="logo-image img-fluid"
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Partners;
