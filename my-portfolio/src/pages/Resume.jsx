import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.section 
      className="container mt-5 resume-container"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-center mb-4">Resume</h2>

      {/* Resume Download Link */}
      <motion.div 
        className="text-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="d-flex justify-content-center gap-3 flex-wrap">
        <a 
  href="/assets/resume/CW_Tech_Resume.pdf"  
  download="Carmen_Wheeler_Resume.pdf"  
  className="btn btn-primary"
>
  Download Resume
</a>

<a 
  href="/assets/resume/CW_Tech_Resume.pdf"  
  target="_blank" 
  rel="noopener noreferrer" 
  className="btn btn-outline-light"
>
  View Resume
</a>

</div>

      </motion.div>

      {/* Proficiencies Section */}
      {/* Proficiencies Section */}
<motion.div 
  className="card shadow p-4 bg-transparent border-0 proficiencies"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.7, duration: 0.6 }}
>
  <h3 className="text-center text-white">Proficiencies</h3>

  {/* Front End Skills */}
  <p className="proficiency-row">
    <strong className="text-primary">Front End:</strong> 
    <span className="white-text">
      JavaScript, TypeScript, HTML5, CSS3, ReactJS, Vite, Tailwind CSS, Bootstrap, Netlify
    </span>
  </p>

  {/* Back End Skills */}
  <p className="proficiency-row">
    <strong className="text-success">Back End:</strong> 
    <span className="white-text">
      Node.js, Express.js, MongoDB, Mongoose, SQL, PostgreSQL, Sequelize, Apollo Server, GraphQL, JWT Authentication, REST APIs, Render
    </span>
  </p>

  {/* Tools & Other */}
  <p className="proficiency-row">
    <strong className="text-warning">Tools & Other:</strong> 
    <span className="white-text">
      Git & GitHub, GitHub Actions (CI/CD), Cypress Testing, OpenAI API Integration, Postman, VS Code, Agile/Scrum, Responsive Design, Accessibility (a11y), DevTools
    </span>
  </p>
</motion.div>

    </motion.section>
  );
};

export default Resume;

