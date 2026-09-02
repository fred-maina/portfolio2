/**
 * Editable portfolio content.
 *
 * Update this file when your role, projects, links, or biography change.
 * Layout and styling live in App.tsx and App.css.
 */
export const portfolio = {
  profile: {
    name: 'Fredrick Maina',
    initials: 'FM',
    disciplines: ['Backend engineering', 'Applied AI'],
    headline: ['I build backend', 'and AI systems'],
    headlineEmphasis: 'people use.',
    introduction: 'I take products from an early idea to production—designing the APIs, data flows, retrieval systems, infrastructure, and safeguards that make them work in the real world.',
    currentLabel: 'Currently',
    currentRole: 'Junior Data Scientist at Dalberg Data Insights, building backend and applied AI systems.',
    portrait: {
      src: '/fred-maina-transparent-clean.webp',
      alt: 'Fredrick Maina, backend and applied AI engineer',
      width: 1011,
      height: 1556,
    },
  },
  links: {
    resume: 'https://drive.google.com/file/d/1Yy56Z6vgilDL0XFAA2WKgAEzSEhGpYk9/view?usp=sharing',
    email: 'hi@fredmaina.com',
    linkedin: 'https://www.linkedin.com/in/fredmaina',
    linkedinLabel: 'linkedin.com/in/fredmaina',
    github: 'https://github.com/fred-maina',
  },
  projects: {
    multitouch: {
      type: 'Live e-commerce platform',
      name: 'MultiTouch',
      url: 'https://shopmultitouch.com',
      summary: 'A live Kenyan commerce platform I designed and built as the sole engineer—storefront, admin operations, payments, delivery, identity, and deployment.',
      evidence: [
        { label: 'Orders', detail: 'Transactional stock reservation, idempotent placement, immutable item snapshots, and automatic recovery for abandoned orders.' },
        { label: 'Payments', detail: 'M-Pesa STK Push with callback deduplication, polling fallback, and balance reconciliation.' },
        { label: 'Operations', detail: 'Transactional outbox, audit logs, Prometheus metrics, health-checked releases, and automatic rollback.' },
      ],
      images: {
        storefront: { src: '/multitouch-storefront.webp', alt: 'MultiTouch e-commerce storefront' },
        products: { src: '/multitouch-product.webp', alt: 'MultiTouch product catalogue' },
        admin: { src: '/multitouch-admin.webp', alt: 'MultiTouch administration dashboard' },
      },
      stack: 'Java 21 · Spring Boot 3.5 · PostgreSQL · AWS · Kubernetes',
    },
    anonmsg: {
      type: 'Real-time messaging',
      name: 'AnonMsg',
      url: 'https://anonmsg.fredmaina.com',
      summary: 'A real-time application connecting authenticated accounts with anonymous visitors.',
      features: ['WebSockets for live connections', 'Redis Pub/Sub across instances', 'Google OAuth2 and JWT identity', 'Automated deployment to GKE'],
      image: { src: '/anonmsg-conversation.webp', alt: 'AnonMsg real-time conversation interface' },
      stack: 'Spring Boot · Next.js · Redis · WebSockets · GKE',
    },
  },
  experience: [
    {
      company: 'Dalberg Data Insights',
      role: 'Junior Data Scientist · Backend & AI Engineering',
      date: 'Aug 2025 — Present',
      summary: 'I build and improve production AI products, backend services, retrieval pipelines, and the infrastructure around them.',
      highlights: [
        'Led development of a multilingual Amazon Bedrock assistant for a digital-health benchmarking platform.',
        'Implemented infrastructure changes projected to reduce monthly AWS costs by approximately 50%.',
        'Built retrieval and safety pipelines for a three-language financial-coaching pilot used by roughly 200 people.',
      ],
    },
    {
      company: 'Twiga Foods',
      role: 'Software Engineering Intern',
      date: 'Mar — Aug 2025',
      summary: 'Built Java and Python services for a Kubernetes-based warehouse management system.',
      highlights: ['Shipped REST and GraphQL services to GKE.', 'Contributed JWT revocation and centralized authentication through Kong.', 'Helped upgrade a Java 8 and Spark service to Java 21 with Quarkus.'],
    },
    {
      company: 'Power Learn Project',
      role: 'Database Instructor',
      date: 'Oct 2024 — Jan 2025',
      summary: 'Taught MySQL and data analysis in a programme serving more than 8,000 learners.',
      highlights: [],
    },
  ],
  about: {
    heading: ['Backend engineer by practice.', 'Curious across the stack.'],
    biography: 'I’m Fredrick Maina. My formal role is Junior Data Scientist at Dalberg Data Insights; much of my day-to-day work sits in backend and AI engineering. I enjoy turning fuzzy product questions into systems that are testable, observable, and useful.',
    tools: 'Java, Spring Boot, Python, FastAPI, PostgreSQL, Redis, AWS, GCP, Docker, Kubernetes, GitHub Actions, Bedrock, OpenAI Responses API.',
    education: 'BSc Mathematics and Computer Science, Kenyatta University · 2022–2026',
    certification: 'AWS Certified Cloud Practitioner · 2024',
  },
  coffee: {
    heading: ['Book a coffee', 'chat with me.'],
    description: 'Choose a time for an online conversation—whether you have an idea or technical question to explore, an opportunity you think I could contribute to, career advice to share, or simply want to have a coffee chat.',
    details: '30 minutes · Google Meet · Nairobi time',
    calendarUrl: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0guQvJSiZx1gUCwbxcV64ieIg_pvpvK5hlN5u2Avplb5mVVI1Ifn6hkPp5D6sOZwaM4E_g08aL?gv=true',
  },
} as const;
