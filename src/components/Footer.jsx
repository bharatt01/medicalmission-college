import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Changed from react-scroll to react-router-dom

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    { name: "Courses", to: "/courses" },
    { name: "Why Us", to: "/why-us" },
    { name: "Placements", to: "/placements" },
    { name: "Contact", to: "/contact" },
  ];

  const socialLinks = [
    { icon: "facebook", url: "https://facebook.com" },
    { icon: "instagram", url: "https://instagram.com" },
    { icon: "linkedin", url: "https://linkedin.com" },
    // { icon: "twitter-x", url: "https://twitter.com" },
  ];

  return (
    <footer className="relative pt-20 pb-10 bg-[#0b0b0c] text-white overflow-hidden border-t border-white/5">
      
      {/* 🔴 TOP RED ACCENT LINE */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

      {/* 🔥 SUBTLE RED GLOW */}
      <div className="absolute -top-20 right-0 w-[300px] h-[300px] bg-red-600/10 blur-[120px] rounded-full"></div>

      <Container className="relative z-10">
        <Row className="gy-5">

          {/* LEFT: Brand & Contact */}
          <Col lg={4} md={6}>
            <div className="space-y-6">
              <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 no-underline group">
                <div className="w-11 h-11 bg-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                  <span className="text-white font-black text-xl">+</span>
                </div>
                <h2 className="text-2xl font-black tracking-tight text-white m-0">
                  Medical<span className="text-red-600">Mission</span>
                </h2>
              </Link>

              <p className="text-sm text-white/60 max-w-sm leading-relaxed font-medium">
                Empowering students with the right guidance, training, and opportunities 
                to build a successful medical career.
              </p>

              <div className="text-sm text-white/70 space-y-4">
                <div className="flex gap-3 items-start">
                  <i className="bi bi-geo-alt-fill text-red-600 mt-1"></i>
                  <span>Pillar No.687, Near DPS School,<br />Old Faridabad-121002</span>
                </div>
                <div className="flex gap-3 items-center">
                  <i className="bi bi-envelope-fill text-red-600"></i>
                  <a href="mailto:Medicalmission101@gmail.com" className="text-white/70 no-underline hover:text-red-500 transition">
                    Medicalmission101@gmail.com
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <i className="bi bi-telephone-fill text-red-600"></i>
                  <a href="tel:+918750768101" className="text-white/70 no-underline hover:text-red-500 transition">
                    +91 8750768101
                  </a>
                </div>
              </div>
            </div>
          </Col>

          {/* CENTER: Navigation */}
          <Col lg={4} md={6} className="lg:pl-20">
            <h5 className="text-xs font-black tracking-[0.3em] text-red-600 mb-8 uppercase">
              Navigation
            </h5>

            <ul className="list-unstyled space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    onClick={scrollToTop}
                    className="group relative text-white/60 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest no-underline inline-block"
                  >
                    {link.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* RIGHT: Socials */}
          <Col lg={4} md={12}>
            <h5 className="text-xs font-black tracking-[0.3em] text-red-600 mb-8 uppercase">
              Stay Connected
            </h5>

            <p className="text-sm text-white/60 mb-8 max-w-xs font-medium">
              Follow our official channels for real-time placement updates and medical news.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-red-600 hover:bg-red-600 transition-all duration-300"
                >
                  <i className={`bi bi-${social.icon} text-white text-lg group-hover:scale-110 transition`}></i>
                </a>
              ))}
            </div>
          </Col>

        </Row>

        {/* BOTTOM BAR */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 m-0">
            © {new Date().getFullYear()} Medical Mission. Excellence in Medical Training.
          </p>

          <button
            onClick={scrollToTop}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 hover:text-red-600 transition bg-transparent border-none p-0"
          >
            Back to top ↑
          </button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;