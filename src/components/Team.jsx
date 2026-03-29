import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import ScrollReveal from "./ScrollReveal";
import "./team.css"; // optional for extra spacing

const Team = () => {
  const alumniData = [
    { name: "Umesh Bharti", designation: "Director", photo: "/Images/CEO.jpg" },
    { name: "Rashmi Chauhan", designation: "Administration Head", photo: "/Images/team3.jpg" },
    { name: "Rubasha Ahmad", designation: "Faculty Trainer", photo: "/Images/faculty2.jpg" },
    { name: "Md. Babar", designation: "Faculty Trainer", photo: "/Images/faculty1.jpg" },
    { name: "Vikas", designation: "Marketing Manager", photo: "/Images/Vikasc.jpg" },
    { name: "Ranjeet", designation: "Marketing Head", photo: "/Images/ranjeete.jpg" },
    { name: "Dr. Sanjay Sardana", designation: "Business Head", photo: "/Images/Sanjay.jpg" },
  ];

  return (
    <Container fluid className="py-24 bg-white dark:bg-[#050000]" id="team">
      {/* Header */}
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <ScrollReveal>
          <span className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-4 block">
            Our Professionals
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 dark:text-grey">
            Meet the <span className="text-red-600 italic font-serif">Team</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed mt-4">
            A team of passionate experts shaping healthcare education and training with real-world impact.
          </p>
        </ScrollReveal>
      </div>

      {/* Team Grid */}
      <Row className="g-5 justify-content-center">
        {alumniData.map((member, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <ScrollReveal delay={index * 0.1} direction="up" distance={20}>
              <Card className="border-0 rounded-3xl shadow-lg h-100">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fluid
                  className="rounded-3xl"
                  style={{ objectFit: "cover", width: "100%", height: "380px" }} // increased height
                />
                <Card.Body className="text-center">
                  <Card.Title className="text-2xl font-black text-slate-900 dark:text-white">
                    {member.name}
                  </Card.Title>
                  <Card.Subtitle className="text-red-600 font-bold text-sm uppercase tracking-wide">
                    {member.designation}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </ScrollReveal>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Team;