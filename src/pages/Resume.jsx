import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.section 
      className="container mt-5"
      initial={{ opacity: 0, y: 50 }} // Starts off-screen
      animate={{ opacity: 1, y: 0 }} // Slides up and fades in
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
          href="/assets/resume/CW_Tech_Resume.pdf"  // ✅ Corrected Path
          download="Carmen_Wheeler_Resume.pdf"  // ✅ Forces a proper download
          className="btn btn-primary"
        >
          Download Resume
        </a>
      </motion.div>

      {/* Proficiencies Section */}
      <motion.div 
        className="card shadow p-4 bg-transparent border-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <h3 className="text-center text-white">Proficiencies</h3>

        {/* Grid Layout for Front-End & Back-End Skills */}
        <div className="row mt-3">
          
          {/* Front End Skills */}
          <motion.div 
            className="col-md-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <h4 className="text-primary">Front End</h4>
            <ul className="list-group bg-transparent">
              <li className="list-group-item bg-transparent border-0 text-white">JavaScript</li>
              <li className="list-group-item bg-transparent border-0 text-white">TypeScript</li>
              <li className="list-group-item bg-transparent border-0 text-white">HTML5</li>
              <li className="list-group-item bg-transparent border-0 text-white">CSS3</li>
              <li className="list-group-item bg-transparent border-0 text-white">ReactJS</li>
              <li className="list-group-item bg-transparent border-0 text-white">Netlify</li>
            </ul>
          </motion.div>

          {/* Back End Skills */}
          <motion.div 
            className="col-md-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <h4 className="text-success">Back End</h4>
            <ul className="list-group bg-transparent">
              <li className="list-group-item bg-transparent border-0 text-white">Node.js</li>
              <li className="list-group-item bg-transparent border-0 text-white">Express.js</li>
              <li className="list-group-item bg-transparent border-0 text-white">MySQL</li>
              <li className="list-group-item bg-transparent border-0 text-white">PostgreSQL</li>
              <li className="list-group-item bg-transparent border-0 text-white">SQL</li>
              <li className="list-group-item bg-transparent border-0 text-white">Render</li>
            </ul>
          </motion.div>

        </div>
      </motion.div>
    </motion.section>
  );
};

export default Resume;

