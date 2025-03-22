import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    AOS.init({
      duration: 300,
      once: false,
      offset: 100,
      easing: "ease-in",
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div
      className={`min-h-screen relative font-display text-black dark:text-white ${
        isHomePage ? "bg-white" : "bg-[#f8f8f8]"
      } dark:bg-dark`}
    >
      <Header isHomePage={isHomePage} />
      <Outlet />
    </div>
  );
};

export default Layout;
