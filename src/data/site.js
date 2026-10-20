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
  photo: 'jul-qifhel.jpg',
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
  { label: 'Focus', value: 'Automation · GHL / CRM · IT Ops / AI-Assisted Prompt Engineer· Claude AI' },
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
    'IT graduate turned Executive VA. I build websites, dashboards and CRM automations with AI-assisted development — so operations run without constant supervision.',
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
    'I build systems that absorb the repetitive work: client intake, CRM records, dashboards and back-office tasks. Owners get their hours back and spend them on growth.',
  objective: {
    label: 'Primary Career Objective',
    quote:
      'To work as an Executive Virtual Assistant or Digital Operations Specialist — improving business systems through CRM management, automation and AI-assisted development, while growing into AI engineering.',
    meta: ['Automation', 'Client Systems', 'Executive Efficiency'],
  },
  pillars: [
    {
      icon: 'workflow',
      title: 'Automation & CRM',
      body:
        'GoHighLevel workflows, lead routing, pipelines and calendar bookings across the full customer lifecycle.',
      tags: ['SMS', 'Workflows', 'GHL'],
      accent: 'primary',
    },
    {
      icon: 'layout',
      title: 'Landing Pages & UI',
      body:
        'Responsive website builds using AI-assisted development, modern design tools and custom code.',
      tags: ['Funnels', 'AI-Assisted Engineer'],
      accent: 'secondary',
    },
    {
      icon: 'megaphone',
      title: 'Social Growth & VA',
      body:
        'Multi-platform scheduling, copywriting, inbox management and day-to-day executive administration.',
      tags: ['Meta', 'LinkedIn', 'Content'],
      accent: 'tertiary',
    },
    {
      icon: 'server',
      title: 'IT & Asset Systems',
      body:
        'Hardware and software diagnostics, secure asset management and controlled inventory reconciliation.',
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
    'Supporting consulting firms, law firms and nonprofits through automation, web development and digital operations.',
  roles: [
    {
      company: 'Kovach Consulting Group (KCG)',
      subtitle:
        'Dashboards, Client Portals & AI-Assisted Interface Engineering',
      badge: { label: 'AI-Assisted Full-Stack Developer & Digital Operations Specialist', tone: 'tertiary' },
      period: 'AI Assissted Engineer',
      stack: ['Figma', 'Claude AI / ReactJS', 'Canva', 'Google Stitch', 'Social Media Manager', 'Visual Studio Code', 'Antigravity'],
      current: true,
      bullets: [
        {
          title: 'Enterprise Funnels & Admin Dashboard Blueprinting',
          body:
            'Rebuilt the admin dashboard, admin portal and client portal — wireframed in Figma, shipped as responsive components.',
        },
        {
          title: 'Usability, Visual Hierarchy & Full-Lifecycle Maintenance',
          body:
            'Refined typography, spacing and styling across client-facing interfaces, with ongoing debugging and production deploys.',
        },
        {
          title: 'AI-Assisted Engineering & Prompt Architecture',
          body:
            'Used Claude AI as a development driver, engineering context-rich prompts that preserved architectural integrity.',
        },
        {
          title: 'Brand Collateral & Content Operations',
          body:
            'Produced marketing collateral in Canva and kept a consistent content schedule.',
        },
      ],
      footer:
        'Client portal and admin dashboard delivered end-to-end, Figma through deployment.',
      footerTag: 'Kovach Consulting Group · May – October 2026',
    },
    {
      company: 'Yellow Mountain Business Solution',
      subtitle: 'Consulting for Nonprofits, Law Firms & Mission-Driven Organisations',
      badge: { label: 'Automation Lead', tone: 'secondary' },
      period: 'CRM & Funnels',
      stack: ['GoHighLevel', 'Pipelines', 'SMS/Email', 'Landing Pages', 'Social'],
      bullets: [
        {
          title: 'End-to-End CRM & Multi-Branch Workflows',
          body:
            'Built GoHighLevel workflows that triage intake forms, schedule consultations and trigger SMS and email reminders.',
        },
        {
          title: 'Pipeline Architecture & Onboarding Velocity',
          body:
            'Designed pipeline stages and opportunity tracking so partners could monitor retainer conversions in real time.',
        },
        {
          title: 'High-Converting Landing Pages & Code Tweaks',
          body:
            'Built responsive landing pages with custom HTML and CSS injections, lifting conversion performance.',
        },
        {
          title: 'Multi-Platform Social Media Growth',
          body:
            'Ran content strategy across Instagram, LinkedIn and Facebook — copy, scheduling and inbound replies.',
        },
      ],
      footer:
        'Full client-intake lifecycle automated, from form submission to booked consultation.',
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
            'Maintained workstations, peripherals, VoIP headsets and OS environments across high-volume enterprise accounts.',
        },
        {
          title: 'IT Asset Logistics & Security',
          body:
            'Led equipment labelling, inventory audits, diagnostic triage and secure storage protocols.',
        },
      ],
      footer:
        'Full asset-audit reconciliation with no equipment discrepancies.',
      footerTag: 'BPO / Enterprise IT',
    },
  ],
};

/* ------------------------------------------------------------------ projects */
export const projects = {
  eyebrow: 'Showcase',
  heading: 'Featured Projects & Website Builds',
  note:
    'Websites, dashboards and automations built for consulting firms, law firms and nonprofits.',
  items: [
    {
      badge: 'Live Build',
      tone: 'tertiary',
      title: 'Nonprofit & Law Firm Client Intake Funnel',
      body:
        'GoHighLevel landing system for legal retainers — scored intake pipeline, instant SMS follow-up and automated routing to the right attorney.',
      tags: ['GoHighLevel', 'CSS', 'Automation'],
      scope: '7 screens · 3 clients',
      // Showcase graphic designed in Figma; it carries the story so the card
      // itself stays short. See public/projects/showcase/.
      graphic: 'projects/showcase/intake-funnel.jpg',
      graphicAlt:
        'Client Intake Funnel showcase — the Mission Impact Legal Advisors landing page beside the scored intake pipeline, instant SMS follow-up and attorney routing built in GoHighLevel',
      result: 'Form submission through to booked consultation, running unattended.',
      resultTag: 'Legal · Nonprofit · Services',
      // Screenshots shown when the card is clicked. Files live in
      // public/projects/intake-funnel/ — see that folder's README.
      gallery: [
        {
          src: 'projects/intake-funnel/mila/about.jpg',
          thumb: 'projects/intake-funnel/mila/about-thumb.jpg',
          caption: 'Mission Impact Legal Advisors — founder story & who we serve',
        },
        {
          src: 'projects/intake-funnel/mila/practice-areas.jpg',
          thumb: 'projects/intake-funnel/mila/practice-areas-thumb.jpg',
          caption: 'Mission Impact Legal Advisors — practice areas & service tiers',
        },
        {
          src: 'projects/intake-funnel/mila/mergers.jpg',
          thumb: 'projects/intake-funnel/mila/mergers-thumb.jpg',
          caption: 'Mission Impact Legal Advisors — mergers & transactions landing page',
        },
        {
          src: 'projects/intake-funnel/doctor-mold-pro/about.jpg',
          thumb: 'projects/intake-funnel/doctor-mold-pro/about-thumb.jpg',
          caption: 'Doctor Mold Pro — founder page & conversion sections',
        },
        {
          src: 'projects/intake-funnel/ymbs/home.jpg',
          thumb: 'projects/intake-funnel/ymbs/home-thumb.jpg',
          caption: 'Yellow Mountain Business Solutions — home page',
        },
        {
          src: 'projects/intake-funnel/ymbs/team.jpg',
          thumb: 'projects/intake-funnel/ymbs/team-thumb.jpg',
          caption: 'Yellow Mountain Business Solutions — about & team',
        },
        {
          src: 'projects/intake-funnel/ymbs/services.jpg',
          thumb: 'projects/intake-funnel/ymbs/services-thumb.jpg',
          caption: 'Yellow Mountain Business Solutions — core services & FAQ',
        },
      ],
    },
    {
      badge: 'Automation',
      tone: 'primary',
      title: 'Business Automation & Lead Management',
      body:
        'GoHighLevel automations for website forms, consultation requests and lead management — capture, follow-up, booking and CRM sync.',
      tags: ['Workflows', 'SMS/Email', 'Calendar'],
      scope: '17 workflows · 3 clients',
      graphic: 'projects/showcase/automations.jpg',
      graphicAlt:
        'Business Automation showcase — GoHighLevel workflow canvases for booking confirmation and mail forwarding, with multi-channel capture, branching logic and timed follow-up',
      result: '17 workflows running across three accounts without supervision.',
      resultTag: 'Yellow Mountain · JTF · Copperstone',
      // GoHighLevel workflow canvases. These are wide, short diagrams — the
      // viewer shows them at full size and pans, so the node labels stay legible.
      gallery: [
        {
          src: 'projects/automations/ymbs/book-call.png',
          thumb: 'projects/automations/ymbs/book-call-thumb.jpg',
          caption:
            'Yellow Mountain — book-a-call: four consultant calendars converge into a tagged confirmation, SMS, email and staff notification',
        },
        {
          src: 'projects/automations/ymbs/contact-us.png',
          thumb: 'projects/automations/ymbs/contact-us-thumb.jpg',
          caption:
            'Yellow Mountain — contact form: tags and updates the contact, then branches on enquiry type to route the right reply',
        },
        {
          src: 'projects/automations/ymbs/get-guidance.png',
          thumb: 'projects/automations/ymbs/get-guidance-thumb.jpg',
          caption:
            'Yellow Mountain — “Get guidance today”: thank-you, tagging, SMS and email, then a delayed internal notification',
        },
        {
          src: 'projects/automations/ymbs/learn-more.png',
          thumb: 'projects/automations/ymbs/learn-more-thumb.jpg',
          caption:
            'Yellow Mountain — “Learn more”: acknowledges the enquiry, alerts the team and sends a scheduling link',
        },
        {
          src: 'projects/automations/ymbs/seo.png',
          thumb: 'projects/automations/ymbs/seo-thumb.jpg',
          caption: 'Yellow Mountain — SEO enquiry: timed email follow-up with an internal alert',
        },
        {
          src: 'projects/automations/ymbs/tech-audit.png',
          thumb: 'projects/automations/ymbs/tech-audit-thumb.jpg',
          caption: 'Yellow Mountain — tech audit request: five-minute delayed email response',
        },
        {
          src: 'projects/automations/john-t-floyd/ai-question-collection.png',
          thumb: 'projects/automations/john-t-floyd/ai-question-collection-thumb.jpg',
          caption:
            'John T. Floyd — AI receptionist: Conversation AI handles the call, then AI steps analyse the questions, classify the call and log it to a spreadsheet before notifying the team',
        },
        {
          src: 'projects/automations/john-t-floyd/completed-call-sms.png',
          thumb: 'projects/automations/john-t-floyd/completed-call-sms-thumb.jpg',
          caption:
            'John T. Floyd — completed call: waits for fields to populate, adds a system note, alerts the team and texts the caller a confirmation',
        },
        {
          src: 'projects/automations/copperstone/mail-received.png',
          thumb: 'projects/automations/copperstone/mail-received-thumb.jpg',
          caption:
            'Copperstone — mail received: routes by location (Land O’ Lakes / South Tampa), then branches on priority to flag urgent mail and assign a reviewer',
        },
        {
          src: 'projects/automations/copperstone/mail-scan-request.png',
          thumb: 'projects/automations/copperstone/mail-scan-request-thumb.jpg',
          caption:
            'Copperstone — mail scan request: creates the contact, tags the request, raises a scan task and follows up after four days',
        },
        {
          src: 'projects/automations/copperstone/forward-request.png',
          thumb: 'projects/automations/copperstone/forward-request-thumb.jpg',
          caption:
            'Copperstone — mail forwarding request: logs the request and confirms it to the client a day later',
        },
        {
          src: 'projects/automations/copperstone/mail-aging-reminder.png',
          thumb: 'projects/automations/copperstone/mail-aging-reminder-thumb.jpg',
          caption:
            'Copperstone — mail aging reminder: escalating nudges at 7 and 14 days, then a task for the team',
        },
        {
          src: 'projects/automations/copperstone/package-received.png',
          thumb: 'projects/automations/copperstone/package-received-thumb.jpg',
          caption: 'Copperstone — package received: branching notification and hand-off logic',
        },
        {
          src: 'projects/automations/copperstone/tour-request.png',
          thumb: 'projects/automations/copperstone/tour-request-thumb.jpg',
          caption:
            'Copperstone — virtual office tour request: captures the enquiry and sends a timed follow-up',
        },
        {
          src: 'projects/automations/copperstone/tour-no-show.png',
          thumb: 'projects/automations/copperstone/tour-no-show-thumb.jpg',
          caption:
            'Copperstone — tour no-show recovery: appointment status triggers a two-step email win-back',
        },
        {
          src: 'projects/automations/copperstone/vo-onboarding.png',
          thumb: 'projects/automations/copperstone/vo-onboarding-thumb.jpg',
          caption:
            'Copperstone — virtual office onboarding: pipeline stage change drives a three-email plus SMS sequence',
        },
        {
          src: 'projects/automations/copperstone/missed-call.png',
          thumb: 'projects/automations/copperstone/missed-call-thumb.jpg',
          caption: 'Copperstone — missed call response: instant SMS reply and a follow-up task',
        },
      ],
    },
    {
      badge: 'Client Portal',
      tone: 'secondary',
      title: 'Digital Systems, Dashboard & Website Development.',
      body:
        'Websites, dashboards and portals built with AI-assisted development — improved UX, access controls, payments and platform reliability.',
      tags: ['Figma', 'Claude AI', 'Google Stitch'],
      scope: '14 screens · 3 systems',
      graphic: 'projects/showcase/kcg.jpg',
      graphicAlt:
        'Digital Systems showcase — the Kovach Consulting Group admin dashboard and client portal, rebuilt from Figma wireframes with AI-assisted development',
      result: 'Client portal and admin dashboard delivered end-to-end.',
      resultTag: 'Dashboard · Portal · Website',
      gallery: [
        {
          src: 'projects/kcg/admin-dashboard/overview.jpg',
          thumb: 'projects/kcg/admin-dashboard/overview-thumb.jpg',
          caption: 'KCG admin dashboard — home overview',
        },
        {
          src: 'projects/kcg/admin-dashboard/panel-1.jpg',
          thumb: 'projects/kcg/admin-dashboard/panel-1-thumb.jpg',
          caption: 'KCG admin dashboard — management panel',
        },
        {
          src: 'projects/kcg/admin-dashboard/panel-2.jpg',
          thumb: 'projects/kcg/admin-dashboard/panel-2-thumb.jpg',
          caption: 'KCG admin dashboard — records & detail view',
        },
        {
          src: 'projects/kcg/admin-dashboard/panel-3.jpg',
          thumb: 'projects/kcg/admin-dashboard/panel-3-thumb.jpg',
          caption: 'KCG admin dashboard — workflow section',
        },
        {
          src: 'projects/kcg/admin-dashboard/panel-4.jpg',
          thumb: 'projects/kcg/admin-dashboard/panel-4-thumb.jpg',
          caption: 'KCG admin dashboard — settings & controls',
        },
        {
          src: 'projects/kcg/client-portal/panel-1.jpg',
          thumb: 'projects/kcg/client-portal/panel-1-thumb.jpg',
          caption: 'KCG client portal — landing view',
        },
        {
          src: 'projects/kcg/client-portal/panel-2.jpg',
          thumb: 'projects/kcg/client-portal/panel-2-thumb.jpg',
          caption: 'KCG client portal — client information',
        },
        {
          src: 'projects/kcg/client-portal/panel-3.jpg',
          thumb: 'projects/kcg/client-portal/panel-3-thumb.jpg',
          caption: 'KCG client portal — documents & resources',
        },
        {
          src: 'projects/kcg/client-portal/panel-4.jpg',
          thumb: 'projects/kcg/client-portal/panel-4-thumb.jpg',
          caption: 'KCG client portal — support section',
        },
        {
          src: 'projects/kcg/client-portal/panel-5.jpg',
          thumb: 'projects/kcg/client-portal/panel-5-thumb.jpg',
          caption: 'KCG client portal — account view',
        },
        {
          src: 'projects/kcg/website/section-1.jpg',
          thumb: 'projects/kcg/website/section-1-thumb.jpg',
          caption: 'KCG website — hero section',
        },
        {
          src: 'projects/kcg/website/section-2.jpg',
          thumb: 'projects/kcg/website/section-2-thumb.jpg',
          caption: 'KCG website — services section',
        },
        {
          src: 'projects/kcg/website/section-3.jpg',
          thumb: 'projects/kcg/website/section-3-thumb.jpg',
          caption: 'KCG website — about & credibility section',
        },
        {
          src: 'projects/kcg/website/section-4.jpg',
          thumb: 'projects/kcg/website/section-4-thumb.jpg',
          caption: 'KCG website — contact & footer section',
        },
      ],
    },

  ],

};



/* -------------------------------------------------------------------- skills */
export const skills = {
  eyebrow: 'Capabilities',
  heading: 'GoHighLevel & Systems Architecture',
  note:
    'Where technical IT problem-solving meets marketing automation — built to run without supervision.',
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
    'Oracle Cloud, Cisco, IBM Cognitive Class, Agile delivery and cyber-defence fundamentals.',
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
      'A rigorous IT foundation in systems administration, databases, networking and web development — the backbone behind every automation I build.',
    tags: ['Systems Administration', 'Database Management', 'Web Development', 'Networking'],
  },
  aside: {
    title: 'Technical Foundations',
    body:
      'Formal training means automations are architected and documented, not stitched together — built to survive scale and hand-off.',
  },
};

/* ------------------------------------------------------------------- contact */
export const contact = {
  eyebrow: 'Get in Touch',
  heading: ['Let’s Discuss How I Can', 'Improve Your Digital Systems.'],
  body:
    'Need website and dashboard development, CRM automation, or a dependable executive VA? I am ready to join your team.',
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
    'Executive Virtual Assistant and IT professional building websites, dashboards and automations that run themselves.',
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
