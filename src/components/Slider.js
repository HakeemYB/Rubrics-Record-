import {useRef, useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import images from './Images.js'
import '../App.css';

function Slider () {
  
  const [width, setWidth]= useState(0);
  const carousel =useRef();


  useEffect(()=> {
    setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth);
  }, []);


  return (
    <div  >
     <motion.div ref={carousel} className="carousel"> 
     <motion.div drag="x" dragConstraints={{right:0, left: -width}} className="inner-carousel"> 
      {images.map(image => {
        return(
          <motion.div className="item" key={image}>
            <img src={image} alt=""></img>
          </motion.div>
        )
      }

      )

      }

     </motion.div>
     </motion.div>
    </div>
  )
}

export default Slider;