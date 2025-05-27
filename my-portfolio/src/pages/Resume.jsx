import React from "react";
import "../assets/styles/index.css"; // Adjust path if needed

const Resume = () => {
  return (
    <section className="resume-container">
      <h2>Resume</h2>

      <div className="resume-buttons">
        <a
          href="/assets/resume/CW_Tech_525.pdf"
          download
          className="download-btn"
        >
          Download Resume
        </a>
        <a
          href="/assets/resume/Carmen_Wheeler_Resume_511.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="view-btn"
        >
          View Resume
        </a>
      </div>

      <div className="proficiencies">
        <div className="proficiency-card">
          <h3>Front End</h3>
          <p>
            JavaScript, TypeScript, HTML5, CSS3, ReactJS, Vite,<br />
            Tailwind CSS, Bootstrap, Netlify
          </p>
        </div>

        <div className="proficiency-card">
          <h3>Back End</h3>
          <p>
            Node.js, Express.js, MongoDB, Mongoose, SQL, PostgreSQL,<br />
            Sequelize, Apollo Server, GraphQL, JWT Authentication,<br />
            REST APIs, Render
          </p>
        </div>

        <div className="proficiency-card">
          <h3>Tools & Other</h3>
          <p>
            Git & GitHub, GitHub Actions (CI/CD), Cypress,<br />
            OpenAI API, Postman, VS Code, Agile/Scrum,<br />
            Responsive Design, a11y, DevTools
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
