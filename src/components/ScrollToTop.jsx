import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const scrollRegistry = {};

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    const currentPath = pathname;

    if (navType === "PUSH") {
      window.scrollTo(0, 0);
    } 
    
    else if (navType === "POP") {
      const savedPos = scrollRegistry[currentPath];
      if (savedPos !== undefined) {
        setTimeout(() => {
          window.scrollTo({
            top: savedPos,
            behavior: "instant",
          });
        }, 200); 
      }
    }

    const handleScroll = () => {
      if (window.scrollY !== 0 || navType === "POP") {
        scrollRegistry[currentPath] = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, navType]);

  return null;
}