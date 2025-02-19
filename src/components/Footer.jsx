import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <ul className="footer-links">
          <li><a href="https://github.com/developer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/developer">LinkedIn</a></li>
          <li><a href="https://stackoverflow.com/users/developer">Stack Overflow</a></li>
        </ul>
      </div>
      <p className="footer-copyright">© {new Date().getFullYear()} Carmen Wheeler</p>
    </footer>
  );
};

export default Footer;
