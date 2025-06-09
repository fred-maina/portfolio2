import React from 'react';
import AnimatedSection from './AnimatedSection';
import { contactDetails } from '../data';
import TechIcon from './TechIcon';
import { Mail, Phone, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <AnimatedSection id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-card">
        <p className="contact-intro">
          I'm always excited to discuss new projects, innovative ideas, or opportunities to collaborate.
          Feel free to reach out!
        </p>
        <div className="contact-links">
            <a href={`mailto:${contactDetails.email}`} className="contact-link-item">
                <Mail size={22} className="contact-icon" /> {contactDetails.email}
            </a>
            <a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`} className="contact-link-item">
                <Phone size={22} className="contact-icon phone-icon" /> {contactDetails.phone}
            </a>
        </div>
        <div className="social-links">
            <a href={contactDetails.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon-link">
                <TechIcon name="github" className="social-icon-github" />
            </a>
            <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-link">
                <Linkedin size={30} />
            </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;