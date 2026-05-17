import React from 'react';
import About from './About';
import HeroSection from './HeroSection';
import Skills from './Skills';
import Works from './Works';
import WorkExperience from './WorkExperience/WorkExperience';
import Education from './Education';

const Main = () => {
  return (
    <div className='main'>
      <HeroSection />
      <About />
      <WorkExperience />
      <Education />
      <Skills />
      <Works />
    </div>
  );
};

export default Main;
