import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative py-16 bg-gradient-to-t from-red-950 via-red-900 to-red-950 overflow-hidden text-white">
      {/* Soft floating glow in the background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-700/20 blur-[120px] rounded-full" />

      <Container className="relative z-10">
        <Row className="gy-8">
          {/* About Section */}
          <Col md={4}>
            <div className="bg-red-900/50 backdrop-blur-lg p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <h5 className="text-red-400 font-bold text-lg mb-3">Medical Mission</h5>
              <p className="text-red-200 text-sm mb-3">
                Bringing healthcare solutions that matter. We provide expert medical guidance, community outreach, and resources to shape a healthier future.
              </p>
              <p className="text-red-200 text-sm">
                <strong>Email:</strong> Medicalmission101@gmail.com <br />
                <strong>Phone:</strong> +91 8750768101 <br />
                <strong>Location:</strong> Pillar No.687, Near DPS School, Old Faridabad-121002
              </p>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={4}>
            <div className="bg-red-900/50 backdrop-blur-lg p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <h5 className="text-red-400 font-bold text-lg mb-3">Quick Links</h5>
              <ul className="list-unstyled flex flex-col gap-2">
                <li>
                  <a
                    href="#home"
                    onClick={scrollToTop}
                    className="hover:text-red-300 transition cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <Link
                    to="team"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="hover:text-red-300 transition cursor-pointer"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="courses"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="hover:text-red-300 transition cursor-pointer"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="gallery"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="hover:text-red-300 transition cursor-pointer"
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </Col>

          {/* Social Media */}
          <Col md={4}>
            <div className="bg-red-900/50 backdrop-blur-lg p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <h5 className="text-red-400 font-bold text-lg mb-3">Follow Us</h5>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61551478131463" className="text-red-400 hover:text-red-200 text-2xl transition">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://twitter.com" className="text-red-400 hover:text-red-200 text-2xl transition">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="https://www.instagram.com/" className="text-red-400 hover:text-red-200 text-2xl transition">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://linkedin.com" className="text-red-400 hover:text-red-200 text-2xl transition">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="mt-12">
          <Col className="text-center text-red-300 text-sm">
            © {new Date().getFullYear()} Medical Mission. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;