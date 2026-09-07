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
  location: 'Bacoor City, Philippines',
  timezone: 'GMT+8',
  email: 'jul-qifhel@gmail.com',
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
    { label: 'Email', icon: 'mail', href: 'mailto:jul-qifhel@gmail.com' },
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
  { label: 'Core Skills & GHL', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

/* -------------------------------------------------------------- status strip */
export const ticker = [
  { label: 'PH · Online', value: 'Bacoor City, Philippines (GMT+8)', status: true },
  { label: 'Focus', value: 'Automation · GHL / CRM · IT Ops' },
  { label: 'Email', value: 'jul-qifhel@gmail.com' },
  { label: 'Direct', value: '+63 991 986 0758' },
];

/* ---------------------------------------------------------------------- hero */
export const hero = {
  // Availability badge + credential label sitting above the headline
  availability: 'Available for Full-time, Part-time & Contract Roles',
  credentialLabel: 'GHL Certified Architect',
  headlineLead: 'Scaling Business Operations Through',
  headlineAccent: 'High-Performing Workflows',
  headlineAccentSuffix: ',', // stays white, outside the cyan fill
  headlineTail: 'GoHighLevel & Reliable IT Systems.',
  intro:
    'Virtual Assistant & IT Specialist with a rigorous Information Technology foundation from New Era University. I bridge technical architecture with executive support—engineering GoHighLevel CRM workflows, automated multi-channel lead funnels, custom landing pages, and administrative excellence for high-growth enterprises and legal practices.',
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
  heading: ['Bridging Technical', 'Infrastructure with Creative', 'Business Operations.'],
  body:
    'I make client intake, CRM records and back-office work easier to manage. By building automated systems that run without supervision, I give business leaders back the hours they were spending on manual follow-up — so they can focus on growth instead of admin.',
  objective: {
    label: 'Primary Career Objective',
    quote:
      'To secure an Executive Virtual Assistant position where I can apply my skills in CRM management, social media, automation and administrative support to help businesses work better and save time. I have hands-on experience with visual design and custom coding, which lets me support both the technical and the creative side of an operation.',
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
        'Conversion-focused funnel builds using drag-and-drop builders paired with custom HTML, CSS and JavaScript injections for speed and responsive precision.',
      tags: ['Funnels', 'Code', 'CRO'],
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
    'Proven history supporting non-profits, law firms, mission-driven organisations and multi-account BPO enterprise operations.',
  roles: [
    {
      company: 'Kovach Consulting Group (KCG)',
      subtitle:
        'Executive Funnels, Admin Dashboard Modernisation & AI-Assisted Interface Engineering',
      badge: { label: 'Current Role', tone: 'tertiary' },
      period: 'GHL Automations',
      stack: ['Figma', 'GoHighLevel', 'Claude AI', 'Canva', 'HTML/CSS', 'Client Portals'],
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
        'Delivered a responsive client portal and admin dashboard end-to-end — from Figma architecture through AI-assisted build and deployment.',
      footerTag: 'Active Assignment · 2025 – Present',
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
    'Production-tested architectures engineered for legal consultancies, enterprise IT asset tracking and automated lead re-engagement.',
  items: [
    {
      badge: 'Live Build',
      tone: 'tertiary',
      title: 'Nonprofit & Law Firm Client Intake Funnel',
      body:
        'Custom GoHighLevel landing system built for legal retainers. Combines custom CSS form overlays with a scored intake pipeline, instant follow-up SMS triggers and automated qualification routing to the right attorney.',
      tags: ['GoHighLevel', 'CSS', 'Automation'],
      preview: 'funnel',
    },
    {
      badge: 'Concept / Prototype',
      tone: 'secondary',
      title: 'Enterprise IT Hardware & Asset Portal',
      body:
        'Modernised high-scale device deployment management for BPO environments. Handles asset barcode labelling, provisioning diagnostics and device lifecycle logic in a single operational view.',
      tags: ['IT Systems', 'Inventory', 'Ops'],
      preview: 'portal',
    },
    {
      badge: 'Automation',
      tone: 'primary',
      title: 'Automated Lead Reactivation & Booking Engine',
      body:
        'Multi-touch workflow built to nurture dormant leads into consultation bookings via sequenced SMS and email, with database re-engagement logic and calendar hand-off on positive reply.',
      tags: ['Workflows', 'SMS/Email', 'Calendar'],
      preview: 'engine',
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
      level: 95,
      levelLabel: 'Proficiency',
    },
    {
      icon: 'code',
      badge: 'Build & Code',
      accent: 'secondary',
      title: 'Landing Pages & Dev',
      items: [
        'Landing page builders',
        'Responsive page engineering',
        'HTML / CSS injection',
        'Foundational JavaScript',
        'Mobile-first layouts',
        'Conversion-focused UI',
      ],
      level: 88,
      levelLabel: 'Proficiency',
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
      level: 90,
      levelLabel: 'Proficiency',
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
      level: 92,
      levelLabel: 'Proficiency',
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
      'A rigorous Information Technology foundation covering systems administration, database management, network fundamentals, web development and structured problem-solving — the technical backbone behind every automation and portal I build today.',
    tags: ['Systems Administration', 'Database Management', 'Web Development', 'Networking'],
  },
  aside: {
    title: 'Technical Rigour',
    body:
      'Formal IT training means automations are architected, documented and maintainable — not stitched together. Every workflow is built to survive scale, hand-off and audit.',
  },
};

/* ------------------------------------------------------------------- contact */
export const contact = {
  eyebrow: 'Get in Touch',
  heading: ['Let’s Discuss How I Can', 'Automate Your Workflow.'],
  body:
    'Whether you need end-to-end GoHighLevel pipeline optimisation, landing page development, or a dependable executive virtual assistant to scale daily operations, I’m ready to integrate with your team.',
  methods: [
    {
      icon: 'mail',
      label: 'Direct Email',
      value: 'jul-qifhel@gmail.com',
      href: 'mailto:jul-qifhel@gmail.com',
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
      value: 'Bacoor City, Philippines · GMT+8',
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
    'Executive Virtual Assistant, GoHighLevel automation specialist and IT systems support professional — building operational infrastructure that runs itself.',
  columns: [
    {
      title: 'Direct Contact',
      links: [
        { label: 'jul-qifhel@gmail.com', href: 'mailto:jul-qifhel@gmail.com' },
        { label: '+63 991 986 0758', href: 'tel:+639919860758' },
        { label: 'Bacoor City, Philippines', href: '' },
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
  builtWith: 'Designed & built with Astro',
};
