import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/styles/App.css"; // Ensure styles are correctly applied

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <Outlet /> {/* This renders the active page */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
