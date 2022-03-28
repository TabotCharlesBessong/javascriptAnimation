
import React from 'react'
import { Link } from 'react-router-dom'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

const modalVariants = {
  final : {
    opacity:1
  },
  init:{
    opacity:0
  },
  exit : {
    y : '-100vh',
    // y: -200,
    transformX :90,
    transition : {
      ease:'easeInOut'
    }
  }
}

const modalVariants1 = {
  init :{
    y:'-100vh',
    opacity:0
  },
  final:{
    y:200,
    opacity:1,
    transition:{
      delay:0.5, duration:2.2
    }
  },
  
}

const Modal = ({modal,setModal}) => {
  return (
    <AnimatePresence exitBeforeEnter >
      {
        modal && (
          <motion.div className="backdrop"
          variants = {modalVariants}
          inittial = "init"
          animate = "visible"
          exit = "init"
           >
          <motion.div className='modal'
          variants = {modalVariants1}
          inittial = "init"
          animate = "final"
           >
           <p>Wants to order another Pizza ?</p>
           <Link to='/'>
             <button onClick={()=> setModal(false)} >Start Again</button>
           </Link>
          </motion.div>  
          </motion.div>
        ) 
      }
    </AnimatePresence>
  )
}

export default Modal