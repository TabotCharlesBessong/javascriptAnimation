import React from 'react';
import { Link } from 'react-router-dom';
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
      delay : 0
    }
  }
}

const btnVariants = {
  hover : {
    scale : 1.2,
    textTransform :'uppercase',
    color:'#1ab785',
    border:' 2px solid #1ab785',
    textShadow : "0px 0px 8px rgb(255,255,255)",
    boxShadow : "0px 0px 8px rgb(255,255,255)",
    transition : {
      duration:0.3,
      yoyo : Infinity
    }
  },  
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
    variants = {containerVariant}
    initial = "init"
    animate = "final"
    
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
            whileHover = {{
              originX : 0,
              scale : 1.25 , 
              color:'#f8e112',
              textTransform:'capitalize'
            }}

            transition = {{
              type : 'spring' , stiffness : 300
            }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
        initial ={{
          x : -'100vw'
        
        }}
        animate = {{
          x : 0
        }}
        transition = {{
          type :'tween' , stiffness : 140 , duration : 1.2 , delay:0.75
        }}
        >
          <Link to="/toppings">
            <motion.button
            variants = {btnVariants}
            whileHover = "hover"
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;