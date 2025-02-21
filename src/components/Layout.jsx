import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/App.css'; // Ensure styles are applied

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <Outlet /> {/* This will render the current page */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
