import React from 'react';
import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

const Home = () => {
  return (
    <motion.div className="home container"
    animate={{
      marginTop:200 , 
      opacity:0.4 , 
      rotateZ : 180
    }}
    >
      <motion.h2 
      animate={{fontSize:80 , color:'#ff2994', fontWeight:'bolder' , x:100 , y:50}} >
        Welcome to Pizza Joint
      </motion.h2>
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