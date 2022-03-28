import React from 'react';
import { Link } from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'


const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <div className="toppings container">
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
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
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          whileHover = {{
          scale : 1.2,
          textTransform :'uppercase',
          color:'#1ab785',
          border:' 2px solid #1ab785',
          textShadow : "0px 0px 8px rgb(255,255,255)",
          boxShadow : "0px 0px 8px rgb(255,255,255)",
          }} 
        >
          Order
        </motion.button>
      </Link>

    </div>
  )
}

export default Toppings;