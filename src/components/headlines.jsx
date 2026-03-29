import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // Core Swiper styles
import "swiper/css/autoplay"; // Optional: Autoplay styles
import "bootstrap/dist/css/bootstrap.min.css";
import { useMediaQuery } from "react-responsive";
import "./headlines.css";

const CustomComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Container fluid className="hde-p-5" style={{marginTop:"1rem"}}>
      <Row className="mb-5 align-items-center">
        <Col md={6}>
          <h1 className="fw-bold" style={{color:"black"}}>Medical Mission Blogs</h1>
        </Col>
      </Row>
      <p className="hd-text-light fs-5">
        Over healthcare organisations are joining hands with us to provide successful careers to our students after completing one of the many paramedical courses from Medical Mission.
      </p>

      {isMobile ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]} // Register the Autoplay module here
        >
          <SwiperSlide>
            <Card className="shadow border-0">
              <Card.Img variant="top" src="/Images/blogsn1.jpg"/>
              <Card.Body>
                <Card.Title>Healing Beyond Borders</Card.Title>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="shadow border-0">
              <Card.Img variant="top"  src="/Images/blogsn2.jpg" />
              <Card.Body>
                <Card.Title>Bridging Lives with Care</Card.Title>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="shadow border-0">
              <Card.Img variant="top" src="/Images/blogsn3.jpg"/>
              <Card.Body>
                <Card.Title>The Care Chronicles</Card.Title>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </Swiper>
      ) : (
        <Row className="g-4">
          <Col xs={12} sm={4}>
            <Card className="shadow border-0">
              <Card.Img variant="top" src="/Images/blogsn1.jpg" />
              <Card.Body>
                <Card.Title>Healing Beyond Borders</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={4}>
            <Card className="shadow border-0">
              <Card.Img variant="top" src="/Images/blogsn2.jpg" />
              <Card.Body>
                <Card.Title>Bridging Lives with Care</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={4}>
            <Card className="shadow border-0">
              <Card.Img variant="top" src="/Images/blogsn3.jpg" />
              <Card.Body>
                <Card.Title>The Care Chronicles</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CustomComponent;
