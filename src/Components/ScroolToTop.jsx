import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force manual restoration for mobile browsers
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Scroll the main window
    window.scrollTo(0, 0);

    // Also scroll the body and root in case they are handling the scroll
    document.body.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    
  }, [pathname]);

  return null;
};

export default ScrollToTop;