import React from 'react';
import AnimatedSection from './AnimatedSection';
import { experiences } from '../data';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <AnimatedSection id="experience" className="experience-section">
      <h2 className="section-title">Work Experience</h2>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {experiences.map((exp, index) => (
          <div key={index}
               className={`timeline-item ${index % 2 === 0 ? 'timeline-item-right' : 'timeline-item-left'}`}>
            <div className="timeline-spacer"></div>
            <div className="timeline-content">
              <div className="timeline-card">
                <div className="timeline-arrow"></div>
                <div className="card-header">
                  <h3>{exp.role}</h3>
                  <p>{exp.period}</p>
                </div>
                <p className="card-company">{exp.company}</p>
                <ul className="card-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="timeline-icon-wrapper">
                <div className="timeline-icon">
                    <Briefcase size={14} className="icon-inner"/>
                </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Experience;