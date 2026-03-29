import React, { useEffect, useRef } from "react";
import { Link, Element, scroller } from "react-scroll";
import { gsap } from "gsap";
import "./VectorAnimation.css";

const VectorAnimation = () => {
  const lineRef = useRef(null);
  const paragraphRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animated-line-container",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Animate the line to follow the paragraphs
    tl.to(lineRef.current, {
      height: "100%", // The line will extend downward
      duration: 2,
      ease: "power2.out",
    });
  }, []);

  const scrollToParagraph = (id) => {
    scroller.scrollTo(id, {
      smooth: true,
      duration: 500,
      offset: -50,
    });
  };

  return (
    <div className="animated-scroll-line-wrapper">
      <div className="animated-line-container">
        {/* Vertical line */}
        <div className="scroll-line" ref={lineRef}></div>

        {/* Navigation Links */}
        <nav className="scroll-nav">
          {["para1", "para2", "para3", "para4"].map((id, index) => (
            <button key={id} onClick={() => scrollToParagraph(id)}>
              Paragraph {index + 1}
            </button>
          ))}
        </nav>

        {/* Paragraphs */}
        <div className="paragraphs">
          {["para1", "para2", "para3", "para4"].map((id, index) => (
            <Element
              key={id}
              name={id}
              className="paragraph"
              ref={(el) => (paragraphRefs.current[index] = el)}
            >
              <h2>Paragraph {index + 1}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                vel urna a tortor faucibus malesuada nec et ligula.
              </p>
            </Element>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VectorAnimation;
