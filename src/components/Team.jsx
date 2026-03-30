import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollReveal from "./ScrollReveal";

const Team = () => {
  const alumniData = [
    { name: "Umesh Bharti", designation: "Director", photo: "/Images/CEO.jpg", featured: true },
    { name: "Rashmi Chauhan", designation: "Administration Head", photo: "/Images/team3.jpg" },
    { name: "Rubasha Ahmad", designation: "Faculty Trainer", photo: "/Images/faculty2.jpg" },
    { name: "Md. Babar", designation: "Faculty Trainer", photo: "/Images/faculty1.jpg" },
  ];

  const featured = alumniData.find((m) => m.featured);
  const others = alumniData.filter((m) => !m.featured);

  return (
    <section id="team" className="py-32 bg-white">
      <Container>

        {/* HEADER */}
        <div className="mb-20 max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-600 block mb-3">
              Our Professionals
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-5xl font-black text-black leading-tight">
              Meet the Minds Behind <span className="text-red-600">Medical Mission</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-gray-600 mt-5 text-lg max-w-xl mx-auto">
              Not just a team — a group of experts driving real impact in healthcare education.
            </p>
          </ScrollReveal>
        </div>

        {/* TEAM LAYOUT */}
        <Row className="g-6">

          {/* FEATURED DIRECTOR */}
          <Col lg={6}>
            <ScrollReveal>
              <div className="relative group h-[520px] rounded-[30px] overflow-hidden cursor-pointer shadow-xl">
                <img
                  src={featured.photo}
                  alt={featured.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  style={{ imageRendering: "auto" }}
                />

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* director content */}
                <div className="absolute bottom-0 p-8 text-white">
                  <div className="w-14 h-[3px] bg-red-600 mb-4"></div>
                  <h3 className="text-3xl font-black">{featured.name}</h3>
                  <p className="text-white/80 text-sm mt-1">{featured.designation}</p>
                </div>
              </div>
            </ScrollReveal>
          </Col>

          {/* RIGHT SIDE TEAM MEMBERS */}
          <Col lg={6}>
            <div className="flex flex-col gap-6 h-full justify-between">

              {others.map((member, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>

                  <div className="group flex items-center gap-6 p-5 rounded-2xl border border-gray-200 bg-white hover:border-red-500 hover:shadow-2xl transition-all duration-300 cursor-pointer h-[150px]">

                    {/* TEAM IMAGE */}
                    <div className="w-36 h-36 rounded-2xl overflow-hidden flex-shrink-0">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        style={{ imageRendering: "auto" }}
                      />
                    </div>

                    {/* TEXT */}
                    <div>
                      <h4 className="text-xl font-bold text-black group-hover:text-red-600 transition">
                        {member.name}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{member.designation}</p>
                    </div>

                    {/* HOVER ARROW */}
                    <div className="ml-auto text-red-600 opacity-0 group-hover:opacity-100 transition text-2xl">
                      →
                    </div>

                  </div>
                </ScrollReveal>
              ))}

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Team;