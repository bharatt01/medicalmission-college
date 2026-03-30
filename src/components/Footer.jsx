import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    { name: "Courses", to: "courses" },
    { name: "Why Us", to: "edge" },
    { name: "Placements", to: "partners" },
    { name: "Contact", to: "admissions" },
  ];

  const socialLinks = [
    { icon: "facebook", url: "#" },
    { icon: "instagram", url: "#" },
    { icon: "linkedin", url: "#" },
  ];

  return (
    <footer className="relative pt-20 pb-10 bg-[#0b0b0c] text-white overflow-hidden">

      {/* 🔴 TOP RED ACCENT LINE */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

      {/* 🔥 SUBTLE RED GLOW */}
      <div className="absolute -top-20 right-0 w-[300px] h-[300px] bg-red-600/10 blur-[120px] rounded-full"></div>

      <Container className="relative z-10">
        <Row className="gy-5">

          {/* LEFT */}
          <Col lg={4} md={6}>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-xl">+</span>
                </div>
                <h2 className="text-2xl font-black tracking-tight">
                  Medical<span className="text-red-600">Mission</span>
                </h2>
              </div>

              <p className="text-sm text-white/70 max-w-sm leading-relaxed">
                Empowering students with the right guidance, training, and opportunities 
                to build a successful medical career.
              </p>

              <div className="text-sm text-white/70 space-y-3">
                <div className="flex gap-3">
                  <i className="bi bi-geo-alt-fill text-red-600"></i>
                  <span>Pillar No.687, Old Faridabad-121002</span>
                </div>
                <div className="flex gap-3">
                  <i className="bi bi-envelope-fill text-red-600"></i>
                  <span>Medicalmission101@gmail.com</span>
                </div>
                <div className="flex gap-3">
                  <i className="bi bi-telephone-fill text-red-600"></i>
                  <span>+91 8750768101</span>
                </div>
              </div>
            </div>
          </Col>

          {/* CENTER */}
          <Col lg={4} md={6}>
            <h5 className="text-sm font-semibold tracking-widest text-white/80 mb-6 uppercase">
              Navigation
            </h5>

            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="group relative text-white/70 hover:text-white transition cursor-pointer no-underline"
                  >
                    {link.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* RIGHT */}
          <Col lg={4} md={12}>
            <h5 className="text-sm font-semibold tracking-widest text-white/80 mb-6 uppercase">
              Stay Connected
            </h5>

            <p className="text-sm text-white/70 mb-6">
              Follow us for updates, placements & announcements.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.url || "#!"} // Safe placeholder
                  className="group w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-red-600 hover:bg-red-600/10 transition-all"
                >
                  <i className={`bi bi-${social.icon} text-white group-hover:text-red-500 transition`}></i>
                </a>
              ))}

              {/* Placeholder X as a button */}
              <button
                onClick={() => alert("Placeholder action")}
                className="group w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-red-600 hover:bg-red-600/10 transition-all"
              >
                <span className="text-white font-semibold group-hover:text-red-500 transition">X</span>
              </button>
            </div>
          </Col>

        </Row>

        {/* BOTTOM */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Medical Mission. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="text-xs text-white/50 hover:text-red-500 transition"
          >
            Back to top ↑
          </button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;