import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile_me.jpg'

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
                      <p>Full Stack Engineer with 7+ years of professional experience building, scaling, and maintaining modern web applications using Next.js, React, Node.js, and TypeScript. Strong background in server-side rendering, static site generation, REST and GraphQL APIs, and cloud-native architectures. Proven ability to deliver high-performance, user-centric products and contribute to engineering best practices in fast-paced environments.</p>
                      <br />
                      <p>Experience designing secure authentication and authorization flows (JWT, OAuth2, biometric verification), deploying serverless and containerized services on AWS (Lambda, ECS, EKS, S3, RDS, API Gateway, CloudFront), and implementing CI/CD pipelines and observability with GitHub Actions, CloudWatch, Prometheus, and Grafana.</p>
                      <br />
                      <p>I focus on performance, maintainability, and collaboration — mentoring engineers, improving development workflows, and partnering with product and design teams to build accessible, reliable, and scalable user experiences.</p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
