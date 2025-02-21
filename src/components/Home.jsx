<<<<<<< Updated upstream
import React from "react";
=======
>>>>>>> Stashed changes
import { motion } from "framer-motion";

const HomePage = () => {
  return (
<<<<<<< Updated upstream
    <motion.section 
      className="home-container text-center"
      initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
      animate={{ opacity: 1, x: 0 }}  // Slide in to position
      transition={{ duration: 1, ease: "easeOut" }} // Smooth easing
    >
      {/* Animated Welcome Text */}
      <motion.h2 
        className="welcome-text"
        initial={{ opacity: 0, x: 100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
      >
        Welcome
      </motion.h2>

      {/* Animated Tagline */}
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
      >
        "Coding with Purpose, Crafting with Passion"
      </motion.p>
    </motion.section>
=======
    <div className="home-container">
      {/* Animated Welcome Text */}
      <motion.h1
        className="welcome-text"
        initial={{ opacity: 0, y: -50 }}  // Start hidden & move down
        animate={{ opacity: 1, y: 0 }}   // Fade in & move up
        transition={{ duration: 1 }}
      >
        Welcome to My Portfolio
      </motion.h1>

      {/* Animated Introduction Text */}
      <motion.p
        className="introduction-text"
        initial={{ opacity: 0, scale: 0.8 }}  // Start smaller
        animate={{ opacity: 1, scale: 1 }}   // Grow to normal size
        transition={{ duration: 1, delay: 0.5 }}
      >
        I'm a passionate full-stack developer and digital artist, blending creativity with technology.
      </motion.p>
    </div>
>>>>>>> Stashed changes
  );
};

export default HomePage;
