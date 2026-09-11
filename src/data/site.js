/* ============================================================================
   SITE CONTENT — edit everything here.
   No HTML/CSS knowledge required: change the text between the quotes,
   save the file, and the whole site updates.
   ========================================================================== */

export const profile = {
  name: 'Jul-qifhel M. Cana',
  initials: 'JC',
  title: 'Executive Virtual Assistant · GoHighLevel Automation & IT Systems Specialist',
  shortTitle: 'GHL Architect · Executive VA · IT Ops',
  tagline: 'Multi-Environment Automation & Executive Operations',
  location: 'Quezon City, Philippines',
  timezone: 'GMT+8',
  email: 'cjulqifhel@gmail.com',
  phone: '+63 991 986 0758',
  phoneHref: '+639919860758',
  availability: 'Available for New Clients',
  // Headshot for the hero card. Drop the file into /public and put its
  // filename here, e.g. 'jul-qifhel.jpg'. Left empty, the card falls back
  // to the gradient "JC" monogram.
  photo: '',
  resumeUrl: '', // e.g. 'Jul-qifhel-Cana-Resume.pdf' — drop the PDF into /public
  socials: [
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/' },
    { label: 'GitHub', icon: 'github', href: 'https://github.com/Julqifhel13' },
    { label: 'Email', icon: 'mail', href: 'mailto:cjulqifhel@gmail.com' },
  ],
};

export const seo = {
  title: 'Jul-qifhel M. Cana — Executive VA, GoHighLevel Automation & IT Systems',
  description:
    'Executive Virtual Assistant and IT Specialist engineering GoHighLevel CRM workflows, automated lead funnels, high-converting landing pages and enterprise IT asset systems for high-growth companies and legal practices.',
};

/* ---------------------------------------------------------------- navigation */
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects & Builds', href: '#projects' },
  { label: 'Core Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

/* -------------------------------------------------------------- status strip */
export const ticker = [
  { label: 'PH · Online', value: 'Quezon City, Philippines (GMT+8)', status: true },
  { label: 'Focus', value: 'Automation · GHL / CRM · IT Ops' },
  { label: 'Email', value: 'cjulqifhel@gmail.com' },
  { label: 'Direct', value: '+63 991 986 0758' },
];

/* ---------------------------------------------------------------------- hero */
export const hero = {
  // Availability badge sitting above the headline
  availability: 'Available for Full-time, Part-time & Contract Roles',
  headlineLead: 'Building Efficient Digital Solutions',
  headlineAccent: 'Through Web Development',
  headlineAccentSuffix: ',', // stays white, outside the cyan fill
  headlineTail: 'Automation, AI & Reliable IT Systems.',
  intro:
    'Virtual Assistant & IT Specialist with a strong Information Technology foundation from New Era University. I combine technical skills with executive and administrative support—building and improving websites, dashboards, CRM workflows, automations, and digital systems using AI-assisted development, custom code, and modern design tools for growing businesses and consulting organizations.',
  chips: [
    { icon: 'zap', label: 'GoHighLevel Pro' },
    { icon: 'route', label: 'CRM & Pipeline Architect' },
    { icon: 'globe', label: 'IT Support & Systems', tone: 'tertiary' },
    { icon: 'code', label: 'Full-Stack Aware' },
    { icon: 'sparkles', label: 'AI-Assisted Engineer' },
    { icon: 'layers', label: 'Multiple Visual Asset Design', tone: 'tertiary' },
  ],
  primaryCta: { label: 'Hire Me', href: '#contact', icon: 'calendar' },
  directLine: 'Direct: 09919860758',
  card: {
    status: 'Active Automation Engine',
    role: 'VA & IT Automation Specialist & AI Assisted Dev',
    credential: 'BSIT Graduate ’25 • New Era Univ.',
    // The three-stage flow drawn inside the engine panel
    pipeline: [
      { title: 'Lead Capture', meta: 'Multi-Channel', tone: 'idle' },
      { title: 'GHL Engine', meta: 'Filter & Auto-Tag', tone: 'active' },
      { title: 'Instant Convert', meta: 'SMS/Email/CRM Sync', tone: 'success' },
    ],
    verified: 'Concentrix & Yellow Mountain Verified',
    copyLabel: 'Copy Email',
    copiedLabel: 'Copied',
  },
};

/* --------------------------------------------------------------------- stats */
export const stats = [
  {
    value: '15+',
    label: 'Automated Workflows',
    note: 'Built across GoHighLevel, CRM pipelines and multi-channel sequences.',
  },
  {
    value: '18+',
    label: 'Industry Certifications',
    note: 'Oracle Cloud, Cisco, Cognitive Class, Agile and cybersecurity tracks.',
  },
  {
    value: '2025',
    label: 'Most Recent Credential',
    note: 'Continuous upskilling in cloud, data and AI-assisted engineering.',
  },
  {
    value: 'End-to-End',
    label: 'GHL Lifecycle Mastery',
    note: 'From lead capture and routing to booked, nurtured and closed pipelines.',
  },
];

/* --------------------------------------------------------------------- about */
export const about = {
  eyebrow: 'Profile & Strategy',
  // Each entry renders as its own line. Kept as one entry so the heading's
  // `text-wrap: balance` picks the break points instead of forcing them.
  heading: ['Executive Virtual Assistant | AI-Assisted Web Development & Automation Specialist'],
  body:
    'Results-driven Executive Virtual Assistant and IT professional with experience in automation, CRM management, web development, and digital operations. Skilled in GoHighLevel, AI-assisted development using Claude AI, UI/UX design, dashboards, and business portal improvements. Experienced in supporting Yellow Mountain Business Solutions and Kovach Consulting Group by improving websites, workflows, documentation, user experience, and digital systems.',
  objective: {
    label: 'Primary Career Objective',
    quote:
      'To secure a position as an Executive Virtual Assistant or Digital Operations Specialist where I can use my experience in CRM management, automation, AI-assisted development, web development, and administrative support to improve business systems and operations. I aim to continue developing my skills in AI engineering, automation, and digital solutions while delivering efficient, high-quality results for growing businesses.',
    meta: ['Automation', 'Client Systems', 'Executive Efficiency'],
  },
  pillars: [
    {
      icon: 'workflow',
      title: 'Automation & CRM',
      body:
        'GoHighLevel workflow architecture, multi-step trigger sequencing, lead routing, calendar bookings and pipeline management across the full customer lifecycle.',
      tags: ['SMS', 'Workflows', 'GHL'],
      accent: 'primary',
    },
    {
      icon: 'layout',
      title: 'Landing Pages & UI',
      body:
        'Modern and responsive website builds using AI-assisted development, visual design tools, and custom code to create polished, functional, and user-friendly digital experiences.',
      tags: ['Funnels', 'AI-Assisted Engineer'],
      accent: 'secondary',
    },
    {
      icon: 'megaphone',
      title: 'Social Growth & VA',
      body:
        'Multi-platform scheduling, creative copywriting, community and inbox management, client onboarding, and reliable day-to-day executive administration.',
      tags: ['Meta', 'LinkedIn', 'Content'],
      accent: 'tertiary',
    },
    {
      icon: 'server',
      title: 'IT & Asset Systems',
      body:
        'Enterprise hardware and software diagnostics, secure asset management, equipment labelling, user onboarding and controlled inventory reconciliation.',
      tags: ['Support', 'Assets', 'Systems'],
      accent: 'primary',
    },
  ],
};

/* ---------------------------------------------------------------- experience */
export const experience = {
  eyebrow: 'Track Record & Impact',
  heading: 'Professional Experience',
  note:
    'Proven experience supporting business consulting firms and digital operations through AI-assisted development, CRM automation, website and portal improvements, UI/UX design, and administrative systems management.',
  roles: [
    {
      company: 'Kovach Consulting Group (KCG)',
      subtitle:
        'Executive Funnels, Admin Dashboard Modernisation & AI-Assisted Interface Engineering',
      badge: { label: 'AI-Assisted Full-Stack Developer & Digital Operations Specialist', tone: 'tertiary' },
      period: 'AI Assissted Engineer',
      stack: ['Figma', 'Claude AI / ReactJS', 'Canva', 'Google Stitch', 'Social Media Manager', 'Visual Studio Code', 'Antigravity'],
      current: true,
      bullets: [
        {
          title: 'Enterprise Funnels & Admin Dashboard Blueprinting',
          body:
            'Rebuilt and modernised the KCG Admin Dashboard, Admin Portal and Client Portal. Used Figma for rapid UI/UX wireframing, interface composition and visual hierarchy before translating designs into responsive, production-ready application components.',
        },
        {
          title: 'Usability, Visual Hierarchy & Full-Lifecycle Maintenance',
          body:
            'Overhauled client-facing informational and support interfaces — refining typography, responsive spacing and styling. Drove continuous improvement through component tracking, debugging and production deployments across digital channels.',
        },
        {
          title: 'AI-Assisted Engineering & Prompt Architecture',
          body:
            'Used Claude AI as an assisted development driver to architect dashboards and client portal interfaces. Engineered detailed, context-rich prompts capturing exact interface constraints, system logic, responsive states and functional workflows while preserving architectural integrity.',
        },
        {
          title: 'Brand Collateral & Content Operations',
          body:
            'Produced marketing and internal collateral in Canva, sourced and optimised a consistent content schedule, and strengthened the firm’s online brand presence across digital channels.',
        },
      ],
      footer:
        'Delivered a responsive client portal, Landing page and admin dashboard end-to-end — from Figma & Google Stitch architecture through AI-assisted build and deployment.',
      footerTag: 'Kovach Consulting Group · May – October 2026',
    },
    {
      company: 'Yellow Mountain Business Solution',
      subtitle: 'Specialised Consulting for Nonprofit, Law Firm & Mission-Driven Organisations',
      badge: { label: 'Automation Lead', tone: 'secondary' },
      period: 'CRM & Funnels',
      stack: ['GoHighLevel', 'Pipelines', 'SMS/Email', 'Landing Pages', 'Social'],
      bullets: [
        {
          title: 'End-to-End CRM & Multi-Branch Workflows',
          body:
            'Engineered intricate automated workflows in GoHighLevel to triage incoming client intake forms, schedule attorney consultations and trigger automated SMS and email reminders — sharply reducing response lag.',
        },
        {
          title: 'Pipeline Architecture & Onboarding Velocity',
          body:
            'Designed pipeline stages and opportunity tracking systems that let partners monitor legal retainer conversions in real time, with automated trigger-based stage progression.',
        },
        {
          title: 'High-Converting Landing Pages & Code Tweaks',
          body:
            'Built fully responsive landing pages with drag-and-drop builders and custom HTML/CSS injections, lifting conversion performance and eliminating friction points in the intake journey.',
        },
        {
          title: 'Multi-Platform Social Media Growth',
          body:
            'Executed content strategy across Instagram, LinkedIn and Facebook — crafting copy, scheduling sequences, responding to inbound enquiries and optimising engagement.',
        },
      ],
      footer:
        'Automated the full client-intake lifecycle for legal and nonprofit clients, from first form submission to booked consultation.',
      footerTag: 'Legal & Nonprofit Specialisation',
    },
    {
      company: 'Concentrix',
      subtitle: 'Global Enterprise Customer Experience & Technology Solutions',
      badge: { label: 'IT Support', tone: 'primary' },
      period: 'Enterprise Ops',
      stack: ['Hardware', 'Diagnostics', 'Asset Audits', 'Enterprise Ops'],
      bullets: [
        {
          title: 'Multi-Account IT Hardware & Systems Support',
          body:
            'Maintained workstations, enterprise peripherals, VoIP headsets, multi-display configurations and critical OS software environments across several high-volume enterprise accounts.',
        },
        {
          title: 'IT Asset Logistics & Security',
          body:
            'Led hardware equipment labelling, systematic inventory audits, tracking logs, diagnostic triage of returned hardware and controlled secure storage protocols.',
        },
      ],
      footer:
        'Maintained full asset-audit reconciliation across enterprise accounts with no equipment discrepancies.',
      footerTag: 'BPO / Enterprise IT',
    },
  ],
};

/* ------------------------------------------------------------------ projects */
export const projects = {
  eyebrow: 'Showcase',
  heading: 'Featured Projects & Website Builds',
  note:
    'A selection of website, portal, and digital system projects focused on improving user experience, business operations, automation, and functionality. My work includes AI-assisted development, UI/UX improvements, CRM and workflow automation, dashboard development, and website optimization for consulting and growing businesses.',
  items: [
    {
      badge: 'Live Build',
      tone: 'tertiary',
      title: 'Nonprofit & Law Firm Client Intake Funnel',
      body:
        'Custom GoHighLevel landing system built for legal retainers. Combines custom CSS form overlays with a scored intake pipeline, instant follow-up SMS triggers and automated qualification routing to the right attorney.',
      tags: ['GoHighLevel', 'CSS', 'Automation'],
      preview: 'funnel',
      // Screenshots shown when the card is clicked. Files live in
      // public/projects/intake-funnel/ — see that folder's README.
      gallery: [
        {
          src: 'projects/intake-funnel/mila-about.jpg',
          thumb: 'projects/intake-funnel/mila-about-thumb.jpg',
          caption: 'Mission Impact Legal Advisors — founder story & who we serve',
        },
        {
          src: 'projects/intake-funnel/mila-practice-areas.jpg',
          thumb: 'projects/intake-funnel/mila-practice-areas-thumb.jpg',
          caption: 'Mission Impact Legal Advisors — practice areas & service tiers',
        },
        {
          src: 'projects/intake-funnel/mila-mergers.jpg',
          thumb: 'projects/intake-funnel/mila-mergers-thumb.jpg',
          caption: 'Mission Impact Legal Advisors — mergers & transactions landing page',
        },
        {
          src: 'projects/intake-funnel/doctor-mold-pro-about.jpg',
          thumb: 'projects/intake-funnel/doctor-mold-pro-about-thumb.jpg',
          caption: 'Doctor Mold Pro — founder page & conversion sections',
        },
        {
          src: 'projects/intake-funnel/ymbs-home.jpg',
          thumb: 'projects/intake-funnel/ymbs-home-thumb.jpg',
          caption: 'Yellow Mountain Business Solutions — home page',
        },
        {
          src: 'projects/intake-funnel/ymbs-team.jpg',
          thumb: 'projects/intake-funnel/ymbs-team-thumb.jpg',
          caption: 'Yellow Mountain Business Solutions — about & team',
        },
        {
          src: 'projects/intake-funnel/ymbs-services.jpg',
          thumb: 'projects/intake-funnel/ymbs-services-thumb.jpg',
          caption: 'Yellow Mountain Business Solutions — core services & FAQ',
        },
      ],
    },
    {
      badge: 'Automation',
      tone: 'primary',
      title: 'Business Automation & Lead Management',
      body:
        'Built and improved GoHighLevel automations for website forms, consultation requests, and lead management. Created workflows that capture and organize contacts, trigger follow-up actions, support booking processes, and connect website inquiries with CRM systems to improve business operations and lead handling.',
      tags: ['Workflows', 'SMS/Email', 'Calendar'],
      preview: 'engine',
      // GoHighLevel workflow canvases. These are wide, short diagrams — the
      // viewer shows them at full size and pans, so the node labels stay legible.
      gallery: [
        {
          src: 'projects/automations/ymbs-book-call.png',
          thumb: 'projects/automations/ymbs-book-call-thumb.jpg',
          caption:
            'Yellow Mountain — book-a-call: four consultant calendars converge into a tagged confirmation, SMS, email and staff notification',
        },
        {
          src: 'projects/automations/ymbs-contact-us.png',
          thumb: 'projects/automations/ymbs-contact-us-thumb.jpg',
          caption:
            'Yellow Mountain — contact form: tags and updates the contact, then branches on enquiry type to route the right reply',
        },
        {
          src: 'projects/automations/ymbs-get-guidance.png',
          thumb: 'projects/automations/ymbs-get-guidance-thumb.jpg',
          caption:
            'Yellow Mountain — “Get guidance today”: thank-you, tagging, SMS and email, then a delayed internal notification',
        },
        {
          src: 'projects/automations/ymbs-learn-more.png',
          thumb: 'projects/automations/ymbs-learn-more-thumb.jpg',
          caption:
            'Yellow Mountain — “Learn more”: acknowledges the enquiry, alerts the team and sends a scheduling link',
        },
        {
          src: 'projects/automations/ymbs-seo.png',
          thumb: 'projects/automations/ymbs-seo-thumb.jpg',
          caption: 'Yellow Mountain — SEO enquiry: timed email follow-up with an internal alert',
        },
        {
          src: 'projects/automations/ymbs-tech-audit.png',
          thumb: 'projects/automations/ymbs-tech-audit-thumb.jpg',
          caption: 'Yellow Mountain — tech audit request: five-minute delayed email response',
        },
        {
          src: 'projects/automations/jtf-ai-question-collection.png',
          thumb: 'projects/automations/jtf-ai-question-collection-thumb.jpg',
          caption:
            'John T. Floyd — AI receptionist: Conversation AI handles the call, then AI steps analyse the questions, classify the call and log it to a spreadsheet before notifying the team',
        },
        {
          src: 'projects/automations/jtf-completed-call-sms.png',
          thumb: 'projects/automations/jtf-completed-call-sms-thumb.jpg',
          caption:
            'John T. Floyd — completed call: waits for fields to populate, adds a system note, alerts the team and texts the caller a confirmation',
        },
        {
          src: 'projects/automations/cs-mail-received.png',
          thumb: 'projects/automations/cs-mail-received-thumb.jpg',
          caption:
            'Copperstone — mail received: routes by location (Land O’ Lakes / South Tampa), then branches on priority to flag urgent mail and assign a reviewer',
        },
        {
          src: 'projects/automations/cs-mail-scan-request.png',
          thumb: 'projects/automations/cs-mail-scan-request-thumb.jpg',
          caption:
            'Copperstone — mail scan request: creates the contact, tags the request, raises a scan task and follows up after four days',
        },
        {
          src: 'projects/automations/cs-forward-request.png',
          thumb: 'projects/automations/cs-forward-request-thumb.jpg',
          caption:
            'Copperstone — mail forwarding request: logs the request and confirms it to the client a day later',
        },
        {
          src: 'projects/automations/cs-mail-aging-reminder.png',
          thumb: 'projects/automations/cs-mail-aging-reminder-thumb.jpg',
          caption:
            'Copperstone — mail aging reminder: escalating nudges at 7 and 14 days, then a task for the team',
        },
        {
          src: 'projects/automations/cs-package-received.png',
          thumb: 'projects/automations/cs-package-received-thumb.jpg',
          caption: 'Copperstone — package received: branching notification and hand-off logic',
        },
        {
          src: 'projects/automations/cs-tour-request.png',
          thumb: 'projects/automations/cs-tour-request-thumb.jpg',
          caption:
            'Copperstone — virtual office tour request: captures the enquiry and sends a timed follow-up',
        },
        {
          src: 'projects/automations/cs-tour-no-show.png',
          thumb: 'projects/automations/cs-tour-no-show-thumb.jpg',
          caption:
            'Copperstone — tour no-show recovery: appointment status triggers a two-step email win-back',
        },
        {
          src: 'projects/automations/cs-vo-onboarding.png',
          thumb: 'projects/automations/cs-vo-onboarding-thumb.jpg',
          caption:
            'Copperstone — virtual office onboarding: pipeline stage change drives a three-email plus SMS sequence',
        },
        {
          src: 'projects/automations/cs-missed-call.png',
          thumb: 'projects/automations/cs-missed-call-thumb.jpg',
          caption: 'Copperstone — missed call response: instant SMS reply and a follow-up task',
        },
      ],
    },
    {
      badge: 'Client Portal',
      tone: 'secondary',
      title: 'KCG Admin Dashboard & Client Portal',
      body:
        'Rebuilt and modernised Kovach Consulting Group’s admin dashboard, admin portal and client portal. Wireframed in Figma to settle interface composition and visual hierarchy, then built into responsive, production-ready components through AI-assisted development with Claude AI.',
      tags: ['Figma', 'Claude AI', 'Portals'],
      preview: 'portal',
    },

  ],

};



/* -------------------------------------------------------------------- skills */
export const skills = {
  eyebrow: 'Capabilities',
  heading: 'GoHighLevel & Systems Architecture',
  note:
    'An intersection of technical IT problem-solving and marketing automation design, built to let operations run without constant supervision.',
  groups: [
    {
      icon: 'workflow',
      badge: 'Core Focus',
      accent: 'primary',
      title: 'GoHighLevel & CRM',
      items: [
        'CRM setup & custom fields',
        'Multi-branch workflow logic',
        'Lead routing & SMS triggers',
        'Pipelines & opportunities',
        'Funnel construction',
        'Calendar & appointment automation',
      ],
    },
    {
      icon: 'code',
      badge: 'Build & Code',
      accent: 'secondary',
      title: 'Landing Pages & Dev',
      items: [
        'Website builders',
        'AI-Assissted engineering',
        'Claude AI - ReactJS',
        'Figma',
        'Mobile-first layouts',
        'Conversion-focused UI',
        'Google Stitch',
      ],
    },
    {
      icon: 'megaphone',
      badge: 'Growth',
      accent: 'tertiary',
      title: 'Marketing & Social',
      items: [
        'Social media scheduling',
        'Email & SMS copywriting',
        'Content strategy',
        'Community management',
        'Instagram / LinkedIn / Facebook',
        'Engagement optimisation',
      ],

    },
    {
      icon: 'shield',
      badge: 'Credibility',
      accent: 'primary',
      title: 'Technical & Soft Skills',
      items: [
        'IT diagnostics & hardware',
        'Asset management',
        'Data entry & reporting',
        'Time management',
        'Remote team collaboration',
        'Confidentiality & compliance',
      ],
    },
  ],
};

/* ------------------------------------------------------------ certifications */
export const certifications = {
  eyebrow: 'Verified Credentials',
  heading: '18+ Professional Certifications',
  note:
    'Continuous technical mastery across Oracle Cloud, Cisco, IBM Cognitive Class, Agile delivery and cyber-defence fundamentals.',
  filters: [
    { id: 'all', label: 'All' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
    { id: 'data', label: 'AI, Data & Analytics' },
    { id: 'agile', label: 'Agile & Dev' },
    { id: 'leadership', label: 'Leadership & Admin' },
  ],
  items: [
    { title: 'Oracle Cloud Infrastructure Foundations', issuer: 'Oracle', cat: 'cloud', year: '2024' },
    { title: 'Oracle Cloud Data Management Foundations', issuer: 'Oracle', cat: 'cloud', year: '2024' },
    { title: 'Data Analytics Essentials', issuer: 'Cisco', cat: 'data', year: '2024' },
    { title: 'SQL and Relational Databases 101', issuer: 'Cognitive Class', cat: 'data', year: '2023' },
    { title: 'Python 101 for Data Science', issuer: 'Cognitive Class', cat: 'data', year: '2023' },
    { title: 'Big Data 101', issuer: 'Cognitive Class', cat: 'data', year: '2023' },
    { title: 'Data Analysis with Python', issuer: 'Cognitive Class', cat: 'data', year: '2023' },
    { title: 'Machine Learning Foundations', issuer: 'Cognitive Class', cat: 'data', year: '2024' },
    { title: 'Introduction to Cloud Computing', issuer: 'Cognitive Class', cat: 'cloud', year: '2023' },
    { title: 'Docker Essentials: A Developer Introduction', issuer: 'IBM', cat: 'cloud', year: '2024' },
    { title: 'Agile Methodology Fundamentals', issuer: 'Cognitive Class', cat: 'agile', year: '2024' },
    { title: 'Scrum Framework Essentials', issuer: 'Cognitive Class', cat: 'agile', year: '2024' },
    { title: 'Full-Stack Development Foundations', issuer: 'Cognitive Class', cat: 'agile', year: '2024' },
    { title: 'Web Development Fundamentals', issuer: 'Cisco', cat: 'agile', year: '2023' },
    { title: 'Introduction to Cybersecurity', issuer: 'Cisco', cat: 'cloud', year: '2023' },
    { title: 'Cybersecurity Essentials', issuer: 'Cisco', cat: 'cloud', year: '2024' },
    { title: 'The Art of Effective Communication', issuer: 'Professional Track', cat: 'leadership', year: '2024' },
    { title: 'Business Communication & Etiquette', issuer: 'Professional Track', cat: 'leadership', year: '2024' },
    { title: 'Time Management & Productivity', issuer: 'Professional Track', cat: 'leadership', year: '2025' },
  ],
};

/* ----------------------------------------------------------------- education */
export const education = {
  eyebrow: 'Education & Foundation',
  main: {
    degree: 'Bachelor of Science in Information Technology (BSIT)',
    school: 'New Era University',
    place: 'Quezon City, Philippines',
    period: '2021 – 2025',
    body:
      'A strong foundation in Information Technology, including database management, networking, web development, and problem-solving. These skills provide the technical knowledge behind the automations, websites, and portals I build today.',
    tags: ['Systems Administration', 'Database Management', 'Web Development', 'Networking'],
  },
  aside: {
    title: 'Technical Foundations',
    body:
      'Formal IT training means automations are architected, documented and maintainable — not stitched together. Every workflow is built to survive scale, hand-off and audit.',
  },
};

/* ------------------------------------------------------------------- contact */
export const contact = {
  eyebrow: 'Get in Touch',
  heading: ['Let’s Discuss How I Can', 'Improve Your Digital Systems.'],
  body:
    'Whether you need website and dashboard development, CRM and workflow automation, AI-assisted solutions, or dependable executive virtual assistance to support your daily operations, I’m ready to bring my technical, creative, and administrative skills to your team.',
  methods: [
    {
      icon: 'mail',
      label: 'Direct Email',
      value: 'cjulqifhel@gmail.com',
      href: 'mailto:cjulqifhel@gmail.com',
    },
    {
      icon: 'phone',
      label: 'Phone / WhatsApp',
      value: '+63 991 986 0758',
      href: 'tel:+639919860758',
    },
    {
      icon: 'pin',
      label: 'Based In',
      value: 'Quezon City, Philippines · GMT+8',
      href: '',
    },
  ],
  availability: {
    title: 'Currently accepting new client engagements',
    body: 'Remote-first · Flexible with US, AU and EU business hours.',
  },
};

/* -------------------------------------------------------------------- footer */
export const footer = {
  blurb:
    'Executive Virtual Assistant, AI-assisted web developer, automation specialist, and IT systems support professional — building and improving dashboards, websites, CRM workflows, and digital systems that help businesses operate more efficiently.',
  columns: [
    {
      title: 'Direct Contact',
      links: [
        { label: 'cjulqifhel@gmail.com', href: 'mailto:cjulqifhel@gmail.com' },
        { label: '+63 991 986 0758', href: 'tel:+639919860758' },
        { label: 'Quezon City, Philippines', href: '' },
      ],
    },
    {
      title: 'Quick Navigation',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects & Builds', href: '#projects' },
        { label: 'Certifications', href: '#certifications' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  ],
  legal: 'All rights reserved.',
  builtWith: 'Designed & built with React',
};
