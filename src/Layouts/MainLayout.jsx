import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Preloader from "../Components/Preloader";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScroolToTop";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <ScrollToTop></ScrollToTop>
      {/* Preloader */}
      {loading && <Preloader></Preloader>}

      {!loading && <Navbar />}
      {!loading && <Outlet />}
      {!loading && <Footer />}
    </div>
  );
};

export default MainLayout;
