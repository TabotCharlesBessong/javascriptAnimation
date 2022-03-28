import React , {useState} from 'react';
import { motion ,AnimatePresence} from 'framer-motion/dist/framer-motion'

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
      delay : 0,
      when: "beforeChildren",
      mass : 0.6,
      damping : 7,
      staggerChildren : 0.4
    }
  }
}



const childVariants  = {
  init : {
    opacity : 0
  },
  final : {
    opacity:1,
    transition: {
      duration:1.2 ,
      // type:'spring',
      delay : 0.6,
      
    }
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


const Order = ({ pizza }) => { 
  const [show, setShow] = useState(true)

  setTimeout(()=>{
    setShow(false)
  },4000)
  return (
    <motion.div className="container order"
    variants = {containerVariant}
    initial = "init"
    animate = "final"
    exit = "exit"
    >
    
    <AnimatePresence>
      {show  && (<motion.h2
      exit = {{
        y:-1000
      }}
      transition  = {{
        delay:0.4,
        duration : 2.5
      }}
      >Thank you for your order :)</motion.h2>)}
      
    </AnimatePresence>
      
      <motion.p
      variants = {childVariants}
      initial = "init"
      animate = "final"
      >You ordered a {pizza.base} pizza with:</motion.p>
      {pizza.toppings.map(topping => <motion.div key={topping}
      variants = {childVariants}
      initial = "init"
      animate = "final"
      >{topping}</motion.div>)}
    </motion.div>
  )
}

export default Order;