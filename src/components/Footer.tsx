import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Fredrick Chege Maina. All rights reserved.</p>
    </footer>
  );
};

export default Footer;