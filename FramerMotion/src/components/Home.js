import React from 'react';
import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'


const containerVariant = {
  init : {
    x : '100vw',
    opacity:0 
  } , 
  final : {
    x : 0,
    opacity : 1,
    transition : {
      type : 'spring',
      delay : 0
    }
  }
}

const btnVariants = {
  hover : {
    scale : [1,1.2,1,1.2,1],
    textTransform :'uppercase',
    color:'#1ab785',
    border:' 2px solid #1ab785',
    textShadow : "0px 0px 8px rgb(255,255,255)",
    boxShadow : "0px 0px 8px rgb(255,255,255)",
  },
  // visible : {
  //   transition : {
  //     delay : 2 , 
  //   },
  //   x : [0,-20,20,-20.20,0]
  // }
}

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
        variants = {btnVariants}
        whileHover = "hover"
        // animate = "visible"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;