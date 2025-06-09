import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from './Button';
import TechIcon from './TechIcon';
import { ArrowRight, Download } from 'lucide-react'; // Import Download icon
import { contactDetails, userSummary } from '../data';
import './Hero.css';

const Hero: React.FC = () => {
    const fullName = "Fredrick Maina";
    const [typedName, setTypedName] = useState('');
    const [showNameCursor, setShowNameCursor] = useState(true);
    
    useEffect(() => {
        let isMounted = true;
        let nameCharIndex = 0;
        let isNameDeleting = false;
        
        const typeNameEffect = () => {
            if (!isMounted) return;
            const currentNameText = isNameDeleting 
                ? fullName.substring(0, nameCharIndex - 1) 
                : fullName.substring(0, nameCharIndex + 1);
            
            setTypedName(currentNameText);
            nameCharIndex = isNameDeleting ? nameCharIndex - 1 : nameCharIndex + 1;

            if (!isNameDeleting && currentNameText === fullName) {
                setTimeout(() => { if(isMounted) isNameDeleting = true; }, 2000);
            } else if (isNameDeleting && currentNameText === '') {
                isNameDeleting = false;
            }
            setTimeout(typeNameEffect, isNameDeleting ? 50 : 100);
        };
        
        typeNameEffect();
        const cursorInterval = setInterval(() => {
          setShowNameCursor(prev => !prev);
        }, 500);

        return () => { 
          isMounted = false;
          clearInterval(cursorInterval);
        };
    }, []);

  return (
    <AnimatedSection id="home" className="hero">
      <div className="hero-background-blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>
      <div className="hero-content">
        <h1>
          <span className="hero-title-line1">Hello world, I'm</span>
          <span className="hero-title-line2">
            {typedName}
            {showNameCursor && <span className="hero-cursor">|</span>}
          </span>
        </h1>

        <p className="hero-subtitle">
          {userSummary.title}
        </p>
        <div className="hero-buttons">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            <Button size="lg">
                View My Work <ArrowRight size={20} className="inline-icon" />
            </Button>
          </a>
          <a
            href={contactDetails.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
                <TechIcon name="github" className="button-icon" /> GitHub
            </Button>
          </a>
          {/* New Resume Button */}
          <a
            href={contactDetails.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="lg">
                <Download size={16} className="button-icon" /> Download CV
            </Button>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Hero;