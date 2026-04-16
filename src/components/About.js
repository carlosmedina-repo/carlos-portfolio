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
                      <p>Webflow Developer with 6+ years of experience delivering high-performing, conversion-focused marketing websites and CMS-driven platforms using Webflow, JavaScript, HTML5, and CSS3. Specialized in translating Figma designs into pixel-perfect, responsive Webflow builds with advanced animations, custom code embeds, and scalable CMS architecture.</p>
                      <br />
                      <p>Strong background collaborating with Product Managers, CRO teams, designers, and stakeholders to define technical requirements, improve user experience, and implement A/B testing experiments. Proven ability integrating Google Tag Manager, Segment CDP, Facebook Ads API, and compliance platforms such as OneTrust to support tracking accuracy, privacy compliance, and growth initiatives.</p>
                      <br />
                      <p>Experienced in optimizing performance, SEO, and accessibility (WCAG), ensuring websites meet modern web standards across devices and browsers. Adept at troubleshooting production issues, improving development workflows, and supporting clients with scalable, maintainable Webflow solutions.</p>
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
