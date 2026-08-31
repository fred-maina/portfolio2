import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, Coffee, Github, Linkedin, Menu, X } from 'lucide-react';
import { trackEvent } from './analytics';
import { portfolio } from './data';
import './App.css';

function Reveal({children,className=''}:{children:ReactNode,className?:string}){
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{const el=ref.current;if(!el)return;const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){el.classList.add('is-visible');observer.disconnect()}},{threshold:.12});observer.observe(el);return()=>observer.disconnect()},[]);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function ProjectShot({src,label,className=''}:{src:string,label:string,className?:string}){
  const [loaded,setLoaded]=useState(true);
  const smallSrc=src.replace(/\.webp$/, '-720.webp');
  return <figure className={`project-shot ${className} ${loaded?'':'shot-empty'}`}>{loaded?<><img src={src} srcSet={`${smallSrc} 720w, ${src} 1920w`} sizes={className.includes('shot-wide')?'(max-width: 800px) 100vw, 92vw':'(max-width: 800px) 100vw, 50vw'} width="1920" height="1243" alt={label} loading="lazy" decoding="async" onError={()=>setLoaded(false)}/><figcaption>{label}</figcaption></>:<div><span>Project image</span><p>Add {src.replace('/','public/')}</p></div>}</figure>;
}

export default function App(){
  const [menu,setMenu]=useState(false),[portrait,setPortrait]=useState(true);
  const { profile, links, projects, experience, about, coffee } = portfolio;
  const { multitouch, anonmsg } = projects;
  return <div className="site-shell">
    <header><a className="brand" href="#top">{profile.name}</a><nav id="primary-navigation" aria-label="Primary navigation" className={menu?'open':''}><a href="#work" onClick={()=>setMenu(false)}>Work</a><a href="#experience" onClick={()=>setMenu(false)}>Experience</a><a href="#about" onClick={()=>setMenu(false)}>About</a><a href="#contact" onClick={()=>setMenu(false)}>Contact</a></nav><a className="coffee-link" href="#coffee" onClick={()=>trackEvent('book_coffee',{placement:'header'})}><Coffee size={16}/>Book a coffee chat with me</a><button className="menu-button" onClick={()=>setMenu(!menu)} aria-label="Toggle menu" aria-expanded={menu} aria-controls="primary-navigation">{menu?<X/>:<Menu/>}</button></header>
    <main id="top">
      <section className="hero">
        <div className="hero-copy"><p className="kicker">{profile.name} · {profile.disciplines.join(' · ')}</p><h1>{profile.headline[0]}<br/>{profile.headline[1]}<br/><em>{profile.headlineEmphasis}</em></h1><p className="hero-intro">{profile.introduction}</p><div className="hero-actions"><a className="primary-action" href={links.resume} target="_blank" rel="noreferrer" onClick={()=>trackEvent('view_cv',{placement:'hero'})}>View my CV <ArrowUpRight size={17}/></a><a className="secondary-action" href="#coffee" onClick={()=>trackEvent('book_coffee',{placement:'hero'})}><Coffee size={17}/>Book a coffee chat</a></div><a className="inline-link" href="#work">See selected work <ArrowRight size={17}/></a></div>
        <figure className={`portrait ${portrait?'':'portrait-fallback'}`}>{portrait?<img src={profile.portrait.src} srcSet="/fred-maina-transparent-clean-720.webp 720w, /fred-maina-transparent-clean.webp 1011w" sizes="(max-width: 800px) 88vw, (max-width: 1200px) 38vw, 590px" alt={profile.portrait.alt} width={profile.portrait.width} height={profile.portrait.height} decoding="async" fetchPriority="high" onError={()=>setPortrait(false)}/>:<span>{profile.initials}</span>}</figure>
      </section>
      <div className="current"><strong>{profile.currentLabel}</strong><span>{profile.currentRole}</span></div>

      <section id="work" className="work-section page-section">
        <Reveal className="section-heading"><p className="section-number">01 / Selected work</p><h2>Things I’ve built.</h2></Reveal>
        <article className="project-feature">
          <Reveal className="project-title"><div><p className="project-type">{multitouch.type}</p><h3>{multitouch.name}</h3></div><a href={multitouch.url} target="_blank" rel="noreferrer" onClick={()=>trackEvent('view_project',{project:multitouch.name})}>Visit live site <ArrowUpRight size={17}/></a></Reveal>
          <Reveal><ProjectShot src={multitouch.images.storefront.src} label={multitouch.images.storefront.alt} className="shot-wide"/></Reveal>
          <div className="project-details"><Reveal><p className="project-lead">{multitouch.summary}</p></Reveal><Reveal className="evidence-grid">{multitouch.evidence.map(item=><div key={item.label}><span>{item.label}</span><p>{item.detail}</p></div>)}</Reveal></div>
          <Reveal className="gallery-row"><ProjectShot src={multitouch.images.products.src} label={multitouch.images.products.alt}/><ProjectShot src={multitouch.images.admin.src} label={multitouch.images.admin.alt}/></Reveal>
          <p className="stack-line">{multitouch.stack}</p>
        </article>
        <article className="project-feature second-project">
          <Reveal className="project-title"><div><p className="project-type">{anonmsg.type}</p><h3>{anonmsg.name}</h3></div><a href={anonmsg.url} target="_blank" rel="noreferrer" onClick={()=>trackEvent('view_project',{project:anonmsg.name})}>Visit live site <ArrowUpRight size={17}/></a></Reveal>
          <div className="anon-layout"><Reveal><ProjectShot src={anonmsg.image.src} label={anonmsg.image.alt}/></Reveal><Reveal className="anon-copy"><p className="project-lead">{anonmsg.summary}</p><ul>{anonmsg.features.map(feature=><li key={feature}>{feature}</li>)}</ul><p className="stack-line">{anonmsg.stack}</p></Reveal></div>
        </article>
      </section>

      <section id="experience" className="experience-section page-section"><Reveal className="section-heading"><p className="section-number">02 / Experience</p><h2>Where I’ve worked.</h2></Reveal><div className="timeline">{experience.map(item=><Reveal className="role" key={item.company}><div><time>{item.date}</time><h3>{item.company}</h3><p className="role-name">{item.role}</p></div><div><p className="role-summary">{item.summary}</p>{item.highlights.length>0&&<ul>{item.highlights.map(point=><li key={point}>{point}</li>)}</ul>}</div></Reveal>)}</div></section>

      <section id="about" className="about-section page-section"><Reveal><p className="section-number">03 / About</p><h2>{about.heading[0]}<br/>{about.heading[1]}</h2></Reveal><Reveal className="about-grid"><p>{about.biography}</p><div><h3>Regular tools</h3><p>{about.tools}</p><h3>Education</h3><p>{about.education}</p><h3>Certification</h3><p>{about.certification}</p></div></Reveal></section>

      <section id="contact" className="contact-section page-section"><Reveal><p className="section-number">04 / Contact me</p><h2>Let’s stay in touch.</h2></Reveal><Reveal className="contact-links"><a href={`mailto:${links.email}`} onClick={()=>trackEvent('contact_email')}><span>Email</span>{links.email} <ArrowUpRight/></a><a href={links.linkedin} target="_blank" rel="noreferrer" onClick={()=>trackEvent('linkedin_click',{placement:'contact'})}><span>LinkedIn</span>{links.linkedinLabel} <ArrowUpRight/></a></Reveal></section>

      <section id="coffee" className="coffee-section page-section"><Reveal className="coffee-copy"><Coffee/><p className="section-number">05 / Coffee chat</p><h2>{coffee.heading[0]}<br/>{coffee.heading[1]}</h2><div className="coffee-description"><p>{coffee.description}</p><p className="coffee-meta">{coffee.details}</p><a className="booking-jump" href="#booking-calendar" onClick={()=>trackEvent('view_available_times')} >View available times <ArrowRight size={16}/></a></div></Reveal><Reveal className="calendar-wrap booking-shell"><iframe id="booking-calendar" src={coffee.calendarUrl} title={`Book a coffee chat with ${profile.name}`} width="100%" height="760" frameBorder="0" loading="lazy"/></Reveal></section>
    </main>
    <footer><div><strong>{profile.name}</strong><p>{profile.disciplines.join(' and ').toLowerCase()}.</p></div><div><a href={links.github} target="_blank" rel="noreferrer" onClick={()=>trackEvent('open_social_profile',{network:'github',placement:'footer'})}><Github size={16}/>GitHub</a><a href={links.linkedin} target="_blank" rel="noreferrer" onClick={()=>trackEvent('linkedin_click',{placement:'footer'})}><Linkedin size={16}/>LinkedIn</a></div><small>© {new Date().getFullYear()}</small></footer>
  </div>
}
