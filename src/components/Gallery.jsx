import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";

const Gallery = () => {
  const galleryImages = [
    "/Images/gnew2.jpg",
    "/Images/gnew8.jpg",
    "/Images/g10.jpg",
    "/Images/g6.jpg",
    "/Images/g77.jpg",
    "/Images/gnew4.jpg",
    "/Images/gnew5.jpg",
    "/Images/g88.jpg",
    "/Images/gnew6.jpg",
    "/Images/gnew7.jpg",
  ];

  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleShow = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  return (
    <section className="relative py-24 bg-[#f3e8ea] overflow-hidden">
      
      {/* subtle red background glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-400/10 blur-[120px] rounded-full" />

      <Container className="relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Merriweather" }}>
            Our <span className="text-red-600">Gallery</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            A glimpse of our students, campus activities, and real learning experiences.
          </p>
        </div>

        {/* GRID */}
        <Row className="g-6">
          {galleryImages.map((image, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <div
                className="group relative rounded-2xl p-[2px] bg-gradient-to-br from-red-500/20 to-transparent cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => handleShow(image)}
              >
                {/* glass card */}
                <div className="relative rounded-2xl bg-white/50 backdrop-blur-md border border-white/40 p-3 flex items-center justify-center h-[220px] overflow-hidden">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* subtle hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-red-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* MODAL */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg" contentClassName="bg-transparent border-0">
        <Modal.Body className="p-0 text-center">
          <img src={modalImage} alt="Full" className="w-full rounded-xl shadow-2xl" />
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Gallery;