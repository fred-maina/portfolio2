import React from 'react';
import AnimatedSection from './AnimatedSection';
import { projects } from '../data';
import { Button } from './Button';
import TechIcon from './TechIcon';
import { Eye, MousePointerClick, CheckCircle, Brain } from 'lucide-react';
import './Projects.css';

const Projects: React.FC = () => {
  const openLinkInNewTab = (url: string | undefined) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const [isSmallScreen, setIsSmallScreen] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <AnimatedSection id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card-layout">
                <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>
                    {(project.whatItDoes || project.features) && (
                        <div className="project-features">
                            <h4 className="project-subtitle">Key Aspects:</h4>
                            <ul className="project-feature-list">
                            {(project.whatItDoes || project.features)?.slice(0, isSmallScreen ? 3 : 6).map((item, i) => (
                                <li key={i} className="project-feature-item">
                                    <CheckCircle size={16} className="feature-icon" />
                                    <span>{item}</span>
                                </li>
                            ))}
                            </ul>
                        </div>
                    )}
                     <div className="project-buttons">
                        {project.liveLink && (
                          <Button onClick={() => openLinkInNewTab(project.liveLink)} className="button-sm">
                            <Eye size={16} className="button-icon-left" /> Visit Site
                          </Button>
                        )}
                        {project.githubLink && (
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="button-sm">
                                <TechIcon name="github" className="button-icon-github" /> Code
                            </Button>
                          </a>
                        )}
                        {project.githubBackend && (
                          <a href={project.githubBackend} target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" className="button-sm">
                                <TechIcon name="github" className="button-icon-github" /> Backend
                            </Button>
                          </a>
                        )}
                        {project.githubFrontend && (
                          <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" className="button-sm">
                                <TechIcon name="github" className="button-icon-github" /> Frontend
                            </Button>
                          </a>
                        )}
                    </div>
                </div>
                <div className="project-details">
                    <div className="project-visual-wrapper">
                        {project.showIframeInitially && project.liveLink ? (
                            <div className="iframe-container-wrapper">
                              <div className="iframe-preview">
                                  <iframe
                                      src={project.liveLink}
                                      title={`${project.title} Live Preview`}
                                      className="iframe-content"
                                      loading="lazy"
                                      sandbox="allow-scripts allow-same-origin"
                                  ></iframe>
                              </div>
                              <div
                                onClick={() => openLinkInNewTab(project.liveLink)}
                                className="iframe-overlay"
                                tabIndex={0}
                                onKeyPress={(e) => e.key === 'Enter' && openLinkInNewTab(project.liveLink)}
                              >
                                <div className="overlay-content">
                                   <MousePointerClick size={32} className="overlay-icon" />
                                   <p className="overlay-text">Open in new tab</p>
                                </div>
                              </div>
                            </div>
                        ) : (
                             project.imagePlaceholder && (
                                <div className="image-placeholder">
                                    {project.imagePlaceholder}
                                </div>
                             )
                        )}
                    </div>
                    {project.learnings && (
                        <div className="project-learnings">
                           <h4 className="project-subtitle learning-title">
                             <Brain size={16} className="learning-icon"/> Key Learnings:
                           </h4>
                           <ul className="learnings-list">
                             {project.learnings.slice(0, isSmallScreen ? 3 : 6).map((item, i) => <li key={i}>{item}</li>)}
                           </ul>
                        </div>
                      )}
                    <div className="project-tech-stack">
                        <h4 className="project-subtitle">Tech Stack:</h4>
                        <div className="tech-stack-list">
                        {project.techStack.map(tech => (
                            <span key={tech} className="tech-tag">
                                <TechIcon name={tech} className="tech-icon" /> {tech}
                            </span>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
            {project.status && <p className="project-status">{project.status}</p>}
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;