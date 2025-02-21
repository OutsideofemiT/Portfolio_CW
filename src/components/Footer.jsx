import React from "react";
<<<<<<< Updated upstream
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importing icons
=======
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import GitHub & LinkedIn icons
>>>>>>> Stashed changes

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <ul className="footer-links">
<<<<<<< Updated upstream
          <li>
            <a href="https://github.com/outsideofemit" target="_blank" rel="noopener noreferrer">
              <FaGithub className="footer-icon" /> GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/carmendwheeler" target="_blank" rel="noopener noreferrer">
=======
          {/* GitHub Link with Icon */}
          <li>
            <a href="https://github.com/developer" target="_blank" rel="noopener noreferrer">
              <FaGithub className="footer-icon" /> GitHub
            </a>
          </li>

          {/* LinkedIn Link with Icon */}
          <li>
            <a href="https://www.linkedin.com/in/developer" target="_blank" rel="noopener noreferrer">
>>>>>>> Stashed changes
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
