// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // 왜 이걸로 되지..?
    document.getElementById("root")?.children[0]?.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
