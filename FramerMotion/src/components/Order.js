import React from 'react';
import { motion} from 'framer-motion/dist/framer-motion'

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
  }
}


const Order = ({ pizza }) => { 
  return (
    <motion.div className="container order"
    variants = {containerVariant}
    initial = "init"
    animate = "final"
    >
      <h2>Thank you for your order :)</h2>
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