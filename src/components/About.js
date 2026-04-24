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
                      <p>Frontend-focused Full Stack Developer with 10+ years of experience building scalable web applications using Next.js, React, and modern frontend architecture patterns.</p>
                      <br />
                      <p>Strong expertise in Zustand, TanStack Query, and Tailwind CSS, with hands-on experience in backend integration, REST APIs, and full-stack feature delivery.</p>
                      <br />
                      <p>Proven ability to improve performance, build reusable UI systems, and deliver production-grade applications in Agile environments.</p>
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
