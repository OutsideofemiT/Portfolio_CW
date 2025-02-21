import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home"; // Home is inside components
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import "./assets/styles/App.css"; // Correct import path for App.css

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
      </Route>
    </Routes>
  );
};

export default App;
