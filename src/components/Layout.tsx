import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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
