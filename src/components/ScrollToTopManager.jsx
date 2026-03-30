import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This will trigger on every route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use "instant" for page changes to avoid a "sliding" glitch
    });
  }, [pathname]);

  return null;
};

export default ScrollToTopManager;