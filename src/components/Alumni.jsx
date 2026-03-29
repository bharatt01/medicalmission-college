import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Alumni = () => {
  const alumniData = [
    {
      name: "Rubasha Ahmad (MLT)",
      designation: "AIIMS, Delhi",
      photo: "/Images/alumni1.jpg", // Replace with actual image URL
    },
    {
      name: "Nitin Adhana (RMIT)",
      designation: "ESIC, Faridabad",
      photo: "/Images/alumni2.jpg", // Replace with actual image URL
    },
    {
      name: "Rajesh Bhagel (OTT)",
      designation: "SSB, Faridabad",
      photo: "/Images/alumni3.jpg", // Replace with actual image URL
    },
    {
      name: "Aman Rawat (MLT)",
      designation: "AIIMS, Delhi",
      photo: "/Images/alumni4.jpg", // Replace with actual image URL
    },
  ];

  return (
    <Container
      fluid
      className="py-5"
      id="alumni"
      style={{ backgroundColor: "#f8f9fa", marginTop: "-1rem" }}
    >
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{ fontSize: "2.5rem", color: "black" }}>
          Meet Our Alumni
        </h1>
        <p className="fs-5 text-black">
          Celebrating the achievements of our accomplished alumni.
        </p>
      </div>

      <Row className="g-4" style={{fontFamily:"Merriweather"}}>
        {alumniData.map((alumnus, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={`alumnus-${index}`}>
            <Card
              className="text-center shadow-sm border-0 h-100"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <Card.Img
                variant="top"
                src={alumnus.photo}
                alt={alumnus.name}
                style={{
                  height: "350px",
                  objectFit: "fill",
                  width: "100%",
                }}
              />
              <Card.Body>
                <Card.Title
                  className="fw-bold"
                  style={{ fontSize: "1.2rem" }}
                >
                  {alumnus.name}
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{ fontSize: "1.1rem" }}
                >
                  {alumnus.designation}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Alumni;
