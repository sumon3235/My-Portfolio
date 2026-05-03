import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Preloader from "../Components/Preloader";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Preloader */}
      {loading && <Preloader></Preloader>}

      {!loading && <Navbar />}
      {!loading && <Outlet />}
    </div>
  );
};

export default MainLayout;
