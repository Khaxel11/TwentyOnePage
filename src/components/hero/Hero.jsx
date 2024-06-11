import './hero.scss'
import { motion } from "framer-motion";

const Hero = () => {
  const title = "Clancy".split("");
  const subtitle = "Listen".split("");
  return (
    
    <div className='hero'>
            <div className="description-out">
              {/* <h1>Clancy</h1> */}
              {title.map((el, i) => (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.h1>
              ))}
              
            </div>
            <div className="button-out">
              <button className='btn'>Out Now</button>
            </div>
            <motion.img 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src={'../../../public/revvsdd.png'} alt='Descripción de la imagen' className='centered-image' />
            
    </div>

    
  )
}

export default Hero