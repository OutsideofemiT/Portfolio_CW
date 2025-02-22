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
        <a 
          href="/resume/CW_Tech_Resume.pdf"  
          download="Carmen_Wheeler_Resume.pdf"  
          className="btn btn-primary"
        >
          Download Resume
        </a>
      </motion.div>

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
          <strong className="text-primary">Front End:</strong> JavaScript, TypeScript, HTML5, CSS3, ReactJS, Netlify
        </p>

        {/* Back End Skills */}
        <p className="proficiency-row">
          <strong className="text-success">Back End:</strong> Node.js, Express.js, SQL, Render
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Resume;
