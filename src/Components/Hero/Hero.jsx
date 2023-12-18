import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/img/handIcon.png'
import hero_image from '../Assets/img/womenHeroImg.png'
import { motion } from 'framer-motion'


const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hand-hand-icon'>
                    <p>New</p>
                    <motion.img src={hand_icon} alt="" width={200} 
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                    />
                    
                </div>
                <p>Collection</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                {/* <img src={arrow_icon} alt="" /> */}
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}
export default Hero;