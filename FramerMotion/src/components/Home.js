import React from 'react';
import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

const Home = () => {
  return (
    <motion.div className="home container"
    initial ={{
      opacity:0
    }}
    animate={{
      opacity:1 
    }}
    transition = {{
      delay : 0.5 , duration : 2
    }}
    >
      <h2 >
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button 
        animate={{
          scale:1.2
        }} >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;