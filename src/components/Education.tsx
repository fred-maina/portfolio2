import AnimatedSection from './AnimatedSection';
import { education, certifications } from '../data';
import { GraduationCap, CheckCircle, ExternalLink } from 'lucide-react';
import './Education.css';

const Education = () => {
  return (
    <AnimatedSection id="education" className="education-section">
      <h2 className="section-title">Education & Certifications</h2>
      <div className="education-grid">
        <div className="education-card">
            <div className="card-icon-header">
                <GraduationCap size={32} className="card-icon" />
                <h3 className="card-title">Education</h3>
            </div>
            <p className="degree-title">{education.degree}</p>
            <p className="institution-name">{education.institution}</p>
            <p className="education-period">{education.period}</p>
            <p className="coursework-title">Key Coursework:</p>
            <div className="course-tags">
                {education.courses.map(course => <span key={course} className="course-tag">{course}</span>)}
            </div>
        </div>
        <div className="education-card">
            <div className="card-icon-header">
                <CheckCircle size={32} className="card-icon" />
                <h3 className="card-title">Certifications</h3>
            </div>
            <ul className="certifications-list">
                {certifications.map(cert => (
                    <li key={cert.name} className="certification-item">
                        <span className="cert-name">{cert.name}</span> - <span className="cert-date">{cert.date}</span>
                        {cert.link !== '#' && (
                             <a href={cert.link} target="_blank" rel="noopener noreferrer" className="verify-link">
                                Verify <ExternalLink size={12} className="verify-icon"/>
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Education;