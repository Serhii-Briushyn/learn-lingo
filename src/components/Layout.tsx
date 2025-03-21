import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <>
      <Header className={isHomePage ? "bg-white" : "bg-grey-light"} />
      <Outlet />
    </>
  );
};

export default Layout;
