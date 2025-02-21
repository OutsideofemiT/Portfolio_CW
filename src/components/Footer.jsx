import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <ul className="footer-links">
          <li>
            <a href="https://github.com/outsideofemit" target="_blank" rel="noopener noreferrer">
              <FaGithub className="footer-icon" /> GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/carmendwheeler" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="footer-icon" /> LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <p className="footer-copyright">© {new Date().getFullYear()} Carmen Wheeler</p>
    </footer>
  );
};

export default Footer;
