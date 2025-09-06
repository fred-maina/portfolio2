import { CalendarDays } from 'lucide-react';
import React from 'react';

export const contactDetails = {
  email: 'fchege04@gmail.com',
  phone: '+254743039297',
  github: 'https://github.com/fred-maina',
  linkedin: 'https://www.linkedin.com/in/fredmaina',
  website: 'https://www.fredmaina.com',
  resumeUrl: 'https://drive.google.com/file/d/1vCo06oCmQvS8yFMRFmvXU9oBLN51bfmC/view?usp=sharing',
};

export const userSummary = {
    title: "Backend Engineer | DevOps Enthusiast | Microservices @ Scale",
    description: "Backend Engineer experienced in designing secure and scalable systems using Java and Python. Strong background in containerized microservices, CI/CD pipelines, and cloud platforms like AWS and GCP. Enjoys solving infrastructure challenges and building reliable backend systems."
};

export const experiences = [
  {
    role: 'Technical Data Fellow',
    company: 'Dalberg Data Insights',
    period: 'August 2025 - Present',
    points: [
      'Built and automated data pipelines to streamline ingestion and transformation of large datasets from multiple sources.',
      'Applied statistical and machine learning techniques to analyze datasets and uncover actionable insights.',
      'Developed custom dashboards and reports for development-focused projects, enabling data-driven decision-making.',
      'Collaborated with project teams to design experiments, optimize algorithms, and improve project outcomes.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Twiga Foods',
    period: 'March 2025 - Current',
    points: [
      'Designed and containerized backend services in Python and Java, using GraphQL and REST APIs; deployed via Kubernetes (GKE) as part of a scalable microservices-based Warehouse Management System.',
      'Integrated database migrations into Kubernetes using init containers, making schema changes predictable and safe; reduced migration-related issues by ~80%.',
      'Reengineered authentication by introducing self-issued JWTs; introduced token revocation logic for early invalidation, improving session control and cutting unauthorized access.',
      'Upgraded a legacy Java 8 + Spark authentication service to Java 21 using Quarkus; reduced cold-start times by 70% and improved service reliability with >90% uptime during deployments.',
      'Built a custom Kong plugin to delegate JWT authentication to a central auth service; reduced gateway processing time by ~30% and unified token validation across services.',
      'Participated in architecture discussions and code reviews, helping shape long-term design decisions and improve engineering best practices.',
    ],
  },
  {
    role: 'Database Instructor Intern',
    company: 'Power Learn Project',
    period: 'October 2024 - January 2025',
    points: [
      'Taught MySQL and data analysis using Google Sheets to over 8,000 learners.',
      'Led personalized sessions and debugged student projects built with MySQL and Node.js.',
      'Reviewed projects, enforced best practices, and supported over 6,000 graduates in 2024.',
      'Coordinated cohort communication for PLP x Safaricom Hook program.',
    ],
  },
];

export const education = {
  institution: 'Kenyatta University',
  degree: 'Bachelor of Science (Mathematics and Computer Science)',
  period: '2022 - Current',
  courses: ['Data Structures', 'AI', 'Object-Oriented Programming', 'Algorithms', 'Event-Driven Programming'],
};

export const certifications = [
    { name: 'AWS Certified Cloud Practitioner (CCP)', date: 'December 2024', link: '#' },
    { name: 'PLP Software Development', date: 'September 2024', link: '#' },
];

export const skills = {
  languages: ['Java', 'Python', 'JavaScript', 'C++', 'Ruby', 'Go'],
  frontend: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
  backend: ['Spring Boot', 'Django', 'Quarkus', 'Node.js'],
  databases: ['MySQL', 'PostgreSQL', 'Redis'],
  cloud: ['AWS', 'EC2', 'S3', 'RDS', 'Lambda', 'Elastic Beanstalk', 'GCP', 'GKE', 'Cloud Run', 'Heroku'],
  auth: ['JWT', 'OAuth2', 'Spring Security'],
  realtime: ['WebSockets', 'STOMP', 'SockJS', 'Redis Pub/Sub', 'Kafka'],
  devops: ['Docker', 'Kubernetes', 'Maven', 'Git', 'GitHub Actions', 'CI/CD', 'Kong', 'NGINX Ingress', 'Flyway'],
  tools: ['Postman', 'Linux', 'Bash', 'GraphQL', 'REST APIs', 'Microservices'],
};

export const projects = [
  {
    id: 'chatapp',
    title: 'ChatApp — Real-Time Anonymous Messaging Platform',
    summary: 'A full-stack, production-ready anonymous messaging platform enabling real-time communication between authenticated users and anonymous visitors. Built with Java Spring Boot (backend) and Next.js + Tailwind CSS (frontend).',
    liveLink: 'https://anonmsg.fredmaina.com',
    githubBackend: 'https://github.com/fred-maina/ChatAppBackend',
    githubFrontend: 'https://github.com/fred-maina/ChatAppFrontend',
    features: [
      'Google OAuth 2.0 Login with JWT security.',
      'Anonymous messaging via WebSockets (STOMP + SockJS).',
      'Redis Pub/Sub for scalable real-time message delivery.',
      'Session & message management (history, read status, delete).',
      'End-to-End Deployment: Docker, GKE, NGINX, Vercel, AWS RDS.',
      'Secure Communication: HTTPS, JWT validation, CORS, CSRF.',
    ],
    techStack: [
      'Java 21', 'Spring Boot', 'Spring Security', 'OAuth2', 'JWT', 'PostgreSQL', 'AWS RDS', 'Redis', 'Flyway', 'WebSockets', 'STOMP', 'SockJS', 'Maven', 'Docker',
      'Next.js 14', 'Tailwind CSS', 'Axios', 'React Context', 'Vercel',
      'GKE', 'NGINX Ingress',
    ],
    learnings: [
        'Integrated Google OAuth and handled JWTs securely.',
        'Built and scaled a real-time chat system with Redis Pub/Sub & WebSockets.',
        'Orchestrated multi-service deployments using Docker and GKE.',
        'Utilized NGINX ingress and HTTPS for secure traffic routing.',
        'Understood frontend-backend communication, session handling, and secure messaging UX.',
        'Deployed a full-stack application using cloud services and CI-friendly workflows.'
    ],
    showIframeInitially: true,
  },
  {
    id: 'eventapp',
    title: 'Event Management Application',
    summary: 'A full-featured platform built with Spring Boot that allows users to create, manage, and browse events seamlessly. Features secure user authentication with JWT tokens, robust event CRUD operations, and efficient media handling using AWS S3 for event poster uploads.',
    githubLink: 'https://github.com/fred-maina/Event-Management-App',
    whatItDoes: [
      'Secure user registration and login with JSON Web Tokens (JWT).',
      'Role-based access control to protect sensitive endpoints.',
      'Create, update, fetch, and delete events with details like name, venue, capacity, and dates.',
      'Upload and store event media files (posters) on AWS S3 for scalability and reliability.',
      'Retrieve events globally or filter by event creators.',
      'Efficient MySQL database integration for persistent data storage.',
    ],
    techStack: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'AWS S3', 'Maven', 'Docker'],
    status: 'Fully functional, not currently deployed live.',
    imagePlaceholder: React.createElement(CalendarDays, { size: 64, className: "text-primary" }),
    showIframeInitially: false,
  },
];

export const iconUrls: { [key: string]: string } = {
  "java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "aws": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "aws ec2": "https://icon.icepanel.io/AWS/svg/Compute/EC2.svg",
  "aws s3": "data:image/png;base64,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",
  "aws rds": "https://icon.icepanel.io/AWS/svg/Database/RDS.svg",
  "aws lambda": "https://icon.icepanel.io/AWS/svg/Compute/Lambda.svg",
  "aws elastic beanstalk": "https://icon.icepanel.io/AWS/svg/Compute/Elastic-Beanstalk.svg",
  "python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "javascript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "react": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
  "React Context":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
  "next.js 14": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "spring boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "django": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "quarkus": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/quarkus/quarkus-original-wordmark.svg",
  "mysql": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "postgresql": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "gcp": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  "gke": "https://www.svgrepo.com/show/376321/google-gke.svg",
  "cloud run": "https://raw.githubusercontent.com/cloudicons/gcp/main/icons/cloud-run.svg",
  "docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "github": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "tailwindcss": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  "html": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "css": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "jwt": "data:image/png;base64,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",
  "oauth2": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Oauth_logo.svg",
  "websockets": "https://www.vectorlogo.zone/logos/socketio/socketio-icon.svg",
  "redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "redis pub/sub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "kafka": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
  "maven": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg",
  "node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "heroku": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
  "postman": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  "linux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "bash": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  "graphql": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  "rest apis": "https://www.iconpacks.net/icons/free-icons-6/free-rest-api-blue-logo-icon-22098-thumb.png",
  "microservices": "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
  "vercel":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg",
  "NGINX Ingress":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
  "Cloud Run":"https://www.svgrepo.com/show/353807/google-cloud-run.svg"
};
