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
                      <p>Frontend Developer with 9+ years of experience building responsive, production-ready web applications and high-performance UI using React, Next.js (App Router), TypeScript, and Tailwind CSS.</p>
                      <br />
                      <p>Strong background delivering fast, clean landing pages and multi-page websites from Figma designs, focusing on reusable components, SEO best practices, and Core Web Vitals optimization.</p>
                      <br />
                      <p>Experienced in agile environments shipping features quickly without overengineering.</p>
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
