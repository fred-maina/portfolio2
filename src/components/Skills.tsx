import React from 'react';
import AnimatedSection from './AnimatedSection';
import { skills } from '../data';
import TechIcon from './TechIcon';
import { Code, Palette, Server, Database, Cloud, Lock, MessageCircle, Settings, Cpu } from 'lucide-react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    { title: 'Languages', skills: skills.languages, icon: <Code size={22} className="skill-category-icon" /> },
    { title: 'Frontend', skills: skills.frontend, icon: <Palette size={22} className="skill-category-icon" /> },
    { title: 'Backend', skills: skills.backend, icon: <Server size={22} className="skill-category-icon" /> },
    { title: 'Databases', skills: skills.databases, icon: <Database size={22} className="skill-category-icon" /> },
    { title: 'Cloud/Hosting', skills: skills.cloud, icon: <Cloud size={22} className="skill-category-icon" /> },
    { title: 'Auth/Security', skills: skills.auth, icon: <Lock size={22} className="skill-category-icon" /> },
    { title: 'Real-time', skills: skills.realtime, icon: <MessageCircle size={22} className="skill-category-icon" /> },
    { title: 'DevOps', skills: skills.devops, icon: <Settings size={22} className="skill-category-icon" /> },
    { title: 'Other Tools', skills: skills.tools, icon: <Cpu size={22} className="skill-category-icon" /> },
  ];

  return (
    <AnimatedSection id="skills" className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map(category => (
          <div key={category.title} className="skill-category-card">
            <div className="skill-category-header">
              {category.icon}
              <h3 className="skill-category-title">{category.title}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map(skill => (
                <span key={skill} className="skill-tag">
                  <TechIcon name={skill} /> {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Skills;