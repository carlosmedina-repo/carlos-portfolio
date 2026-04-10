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
                      <p>Full Stack Engineer with 5+ years of experience building high-performance distributed systems, scalable backend APIs, and modern frontend applications. Strong focus on Rust-based backend architectures and React/Next.js ecosystems, with hands-on experience delivering production-grade features in fast-paced engineering teams.</p>
                      <br />
                      <p>Experienced in designing and shipping real-time, event-driven systems, API layers, and cloud-native services with a strong emphasis on performance, scalability, and clean architecture.</p>
                      <br />
                      <p>Actively working at the intersection of Web3, AI, and developer platforms, contributing to early-stage and growth-stage products with a focus on building resilient systems and intuitive user experiences.</p>
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
