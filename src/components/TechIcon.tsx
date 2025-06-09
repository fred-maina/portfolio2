import React from 'react';
import { iconUrls } from '../data';
import { Code as LucideCode, Layers as LucideLayers, Database as LucideDatabase, Cloud as LucideCloud, MessageCircle as LucideMessageCircle, Lock as LucideLock, Settings as LucideSettings, Server as LucideServer, Palette as LucidePalette, Construction as LucideConstruction, Cpu as LucideCpu, Package as LucidePackage, GitBranch as LucideGitBranch } from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name, className }) => {
  const normalizedName = name.toLowerCase();
  let lookupName = normalizedName;
  if (normalizedName.startsWith('aws (')) {
      lookupName = 'aws';
  } else if (['ec2', 's3', 'rds', 'lambda', 'elastic beanstalk'].includes(normalizedName)) {
      lookupName = `aws ${normalizedName}`;
  } else if (normalizedName === 'kubernetes engine') {
      lookupName = 'gke';
  }

  const commonImgProps = { width: 18, height: 18, className: `tech-icon-base ${className || ''}` };
  const iconsToInvert = ['next.js', 'github', 'kafka', 'bash'];

  if (iconUrls[lookupName] || iconUrls[normalizedName]) {
    const iconKey = iconUrls[lookupName] ? lookupName : normalizedName;
    const style: React.CSSProperties = {};
    if (iconsToInvert.includes(iconKey)) {
      style.filter = 'invert(1) brightness(1.75)';
    }
    return <img src={iconUrls[iconKey]} alt={name} {...commonImgProps} style={style} />;
  }
  
  const lucideIconProps = { size: 18, className: `tech-icon-base ${className || ''}` };
  switch (normalizedName) {
    case 'c++': case 'go': case 'ruby': return <LucideCode {...lucideIconProps} />;
    case 'spring security': case 'kong': case 'nginx ingress': case 'flyway': case 'github actions': case 'ci/cd': return <LucideSettings {...lucideIconProps} />;
    case 'stomp': case 'sockjs': return <LucideMessageCircle {...lucideIconProps} />;
    case 'code': return <LucideCode {...lucideIconProps} />;
    case 'layers': return <LucideLayers {...lucideIconProps} />;
    case 'database': return <LucideDatabase {...lucideIconProps} />;
    case 'cloud': return <LucideCloud {...lucideIconProps} />;
    case 'lock': return <LucideLock {...lucideIconProps} />;
    case 'settings': return <LucideSettings {...lucideIconProps} />;
    case 'server': return <LucideServer {...lucideIconProps} />;
    case 'palette': return <LucidePalette {...lucideIconProps} />;
    case 'construction': return <LucideConstruction {...lucideIconProps} />;
    case 'cpu': return <LucideCpu {...lucideIconProps} />;
    case 'package': return <LucidePackage {...lucideIconProps} />;
    case 'gitbranch': return <LucideGitBranch {...lucideIconProps} />;
    default:
        return <LucideCode {...lucideIconProps} style={{color: "hsl(var(--primary))"}}/>;
  }
};

const styles = `
.tech-icon-base {
  display: inline-block;
  margin-right: 0.375rem; /* mr-1.5 */
  vertical-align: middle;
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);


export default TechIcon;