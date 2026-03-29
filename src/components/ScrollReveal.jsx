import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  direction = "up",
  distance = 40,
  once = true,
  margin = "0px 0px -50px 0px",
  threshold = 0.15,
}) => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once,
    margin,
    amount: threshold,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y:
        direction === "up"
          ? distance
          : direction === "down"
          ? -distance
          : 0,
      x:
        direction === "left"
          ? distance
          : direction === "right"
          ? -distance
          : 0,
      filter: "blur(8px)",
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
      scale: 1,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
        scale: {
          duration: duration * 1.2,
          ease: [0.22, 1, 0.36, 1],
        },
        filter: {
          duration: duration * 0.8,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;