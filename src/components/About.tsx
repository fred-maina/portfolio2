import React from 'react';
import AnimatedSection from './AnimatedSection';
import { userSummary } from '../data';
import './About.css';

const About: React.FC = () => {
  return (
    <AnimatedSection id="about" className="about-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
            <p>{userSummary.description}</p>
            <p>
                I thrive in dynamic environments where I can continuously learn and apply new technologies to solve real-world problems.
                My journey in software development is driven by a desire to create efficient, reliable, and user-friendly applications that make a difference.
            </p>
        </div>
    </AnimatedSection>
  );
};

export default About;