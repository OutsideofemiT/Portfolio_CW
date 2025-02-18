import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Developer's Name</p>
      <div>
        <li><a href="https://github.com/developer">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/developer">LinkedIn</a></li>
        <li><a href="https://stackoverflow.com/users/developer">Stack Overflow</a></li>
      </div>
    </footer>
  );
};

export default Footer;
