import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                      <p>Full stack engineer with 7+ years of experience building production-grade web applications, internal tools, and data-driven dashboards.</p>
                      <br />
                      <p>Strong focus on designing scalable APIs, interactive frontend systems, and operational software used by cross-functional teams.</p>
                      <br />
                      <p>Experienced in React, TypeScript, Node.js, and cloud-based architectures, with a track record of delivering end-to-end features across product and engineering teams.</p>
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
