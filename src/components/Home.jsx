import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
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
  );
};

export default Home;
