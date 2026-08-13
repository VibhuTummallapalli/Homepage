export const profile = {
  name: 'Vibhu Tummallapalli',
  location: 'Charlotte, NC',
  citizenship: 'US Citizen',
  email: 'vibhu.tummallapalli@gmail.com',
  phone: '919-909-9573',
  github: 'https://github.com/VibhuTummallapalli',
  linkedin: 'https://linkedin.com/in/vibhutummallapalli',
  bio: "An AI engineer focused on agentic AI systems, LLM application development, and applied AI/ML. I'm finishing my B.S. in Software Engineering (Data Science concentration) at East Carolina University and starting an M.S. in Artificial Intelligence at UNC Charlotte this fall.",
};

export type Education = {
  school: string;
  degree: string;
  dates: string;
  location: string;
  concentration: string;
  coursework: string;
  logo?: string; // path relative to public/, no leading slash
  iconClass?: string;
};

export const education: Education[] = [
  {
    school: 'University of North Carolina at Charlotte',
    degree: 'Master of Science in Artificial Intelligence',
    dates: 'Aug 2026 – May 2028 (Expected)',
    location: 'Charlotte, NC',
    concentration: 'Applied AI/ML, MLOps & AI for Financial Services',
    coursework:
      'Applied Machine Learning, Applied Artificial Intelligence, Machine Learning Operations (MLOps), Cloud Computing for Data Analysis, AI-Driven Trustworthy Software Development, Advanced Financial Modeling with AI',
    iconClass: 'fas fa-graduation-cap',
  },
  {
    school: 'East Carolina University',
    degree: 'Bachelor of Science in Software Engineering',
    dates: 'May 2026',
    location: 'Greenville, NC',
    concentration: 'Data Science',
    coursework: 'Artificial Intelligence, Big Data Analytics, NLP, Computer Vision',
    logo: 'images/ecu-logo.avif',
  },
];

export type Experience = {
  role: string;
  org: string;
  dates: string;
  bullets: string[];
  logo?: string;
};

export const experience: Experience[] = [
  {
    role: 'Undergraduate Research Assistant',
    org: 'ECU College of Engineering and Technology',
    dates: 'Jun 2025 – May 2026',
    logo: 'images/ecu-logo.avif',
    bullets: [
      'Contributed to 3 faculty research projects in health tech and cybersecurity, owning prototype implementation from design through validation.',
      'Built data ingestion prototypes in Python, C#, and Java that processed external datasets into clean, structured outputs, informed by literature reviews and performance trade-off analyses.',
      'Maintained research environments (Python venvs, Maven, local LLM integrations) and managed Git repositories supporting reproducibility across team members.',
    ],
  },
  {
    role: 'Learning Assistant',
    org: 'Thomas Harriot College of Arts & Sciences',
    dates: 'Jan 2023 – Jan 2026',
    logo: 'images/ecu-logo.avif',
    bullets: [
      'Tutored 50+ students in Algebra, Calculus, and Statistics through weekly review sessions and office hours, raising failing test scores to 80%+ and helping 75% of students achieve a 4.0 in the course.',
      'Supported professors during class by managing materials, taking attendance, and assisting with demonstrations, while reinforcing coursework one-on-one and in groups to improve student comprehension.',
    ],
  },
];

export type ProjectLink = { href: string; label: string };

export type Project = {
  name: string;
  kind: string;
  subtitle?: string;
  org?: string;
  dates: string;
  bullets: string[];
  tags: string[];
  featured?: boolean;
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    name: 'Metamorphic Testing of Multi-Agent AI Systems',
    kind: 'Research',
    org: 'ECU College of Engineering and Technology',
    dates: 'Apr 2026',
    bullets: [
      'Designed a novel catalog of 9 metamorphic relations to test multi-agent LLM systems where traditional test oracles fail (interchangeability, redundancy invariance, graceful degradation, etc.).',
      'Built a reusable Python framework with multi-dimensional semantic verifiers (token overlap, difflib similarity, length ratios) to address the test oracle problem for LLM outputs.',
      'Implemented CrewAI test harnesses against domain tasks (financial risk, healthcare cloud security, SaaS market research), executing experiments across OpenAI and Ollama backends via LangChain.',
    ],
    tags: ['Python', 'CrewAI', 'LangChain', 'OpenAI', 'Ollama'],
  },
  {
    name: 'MCP Tutor Agent',
    kind: 'Agentic AI Coursework',
    dates: 'Jul 2026',
    bullets: [
      'Built a local-first AI tutoring agent that calls external tools over the Model Context Protocol (MCP), orchestrated end to end with .NET Aspire.',
      'Implemented two MCP servers in C# — one over stdio, one over streamable HTTP — and wired their tool catalogs into an LLM agent using the Microsoft Agent Framework.',
      'Streamed responses token-by-token from an ASP.NET Core minimal API to a Blazor Fluent UI chat, running fully on local models via Ollama.',
    ],
    tags: ['C#', '.NET Aspire', 'MCP', 'Microsoft Agent Framework', 'Blazor', 'Ollama'],
    links: [
      { href: 'https://github.com/VibhuTummallapalli/mcp-tutor-agent', label: 'View on GitHub' },
    ],
  },
  {
    name: 'Dental Charting Tool',
    kind: 'Applied Research',
    org: 'ECU College of Engineering and Technology',
    dates: 'Jun 2025 – Jan 2026',
    bullets: [
      'Built a WPF (.NET)/C# desktop app for the ECU School of Dental Medicine integrating GPT-4o Vision for radiographic analysis, FDI tooth-numbering charting, CDT-coded procedure cataloging, and urgency-based appointment scheduling.',
      'Engineered a 5-step prompt pipeline (observation, chart cross-reference, medical alerts, CDT recommendations, urgency triage) for clinically contextualized output; presented at ECU RCAW and CORAS 2026.',
    ],
    tags: ['C#', 'WPF', '.NET', 'GPT-4o Vision', 'Ollama'],
    links: [
      { href: 'Dental_Charting_Poster_CORAS_2026.pdf', label: 'View poster (CORAS 2026)' },
    ],
  },
  {
    name: 'NC Early Mathematics Placement Testing',
    kind: 'Senior Capstone',
    subtitle: 'Online Testing System',
    org: 'NC Early Mathematics Placement Testing',
    dates: 'Aug 2025 – May 2026',
    bullets: [
      'Built a full-stack web platform (React 19/Vite, .NET 8, EF Core, PostgreSQL) used by 60 NC high schools and 5,000+ students, with a version-controlled question bank, automated grading, and session-based access control.',
      'Implemented role-based access (Admin/Coordinator/Proctor/Student) with JWT and 2FA, plus real-time SignalR proctor monitoring with live tracking and pause/resume controls.',
      'Architected an asynchronous email pipeline via GCP Pub/Sub and a Python Cloud Function; deployed to GCP (App Engine, Cloud Run) through GitHub Actions CI/CD as part of a 5-member Agile team using GitLab.',
    ],
    tags: ['React 19', 'Vite', '.NET 8', 'EF Core', 'PostgreSQL', 'SignalR', 'JWT', 'GCP', 'GitHub Actions'],
  },
  {
    name: 'ESP32-S3 Embedded Rust Firmware',
    kind: 'Embedded Systems Coursework',
    dates: 'Jun 2026',
    bullets: [
      'Wrote bare-metal (no_std) firmware for the ESP32-S3 in Rust using the esp-hal HAL and the Embassy async runtime.',
      'Configured GPIO to read a pull-up button input and drive an LED, with debounced polling, transition-only serial logging, and a custom panic handler.',
      'Validated the firmware in the Wokwi simulator against a defined circuit, so it builds and runs with no physical board.',
    ],
    tags: ['Rust', 'no_std', 'esp-hal', 'Embassy', 'ESP32-S3', 'Wokwi'],
    links: [
      { href: 'https://github.com/VibhuTummallapalli/esp32-rust-button-led', label: 'View on GitHub' },
    ],
  },
  {
    name: 'TetherLog',
    kind: 'Coursework',
    dates: 'Apr 2026 – May 2026',
    bullets: [
      'A book-tracking site where readers log progress, follow each other, and post reading updates. Authors can publish and manage their own books.',
      'React/Vite frontend; Node.js/Express + SQLite backend with JWT authentication and role-based access (Reader, Author).',
    ],
    tags: ['React', 'Vite', 'Node.js', 'Express', 'SQLite', 'JWT'],
    links: [
      { href: 'https://github.com/VibhuTummallapalli/TetherLog', label: 'View on GitHub' },
    ],
  },
  {
    name: 'QuickDigest',
    kind: 'Coursework',
    dates: 'Apr 2026',
    bullets: [
      'A news-article summarizer with NLP analysis (sentiment, named entities, keywords) powered by a local Ollama LLM.',
      'Configurable short/medium/long summaries with ROUGE evaluation against reference text. Built with Node.js/Express.',
    ],
    tags: ['Node.js', 'Express', 'Ollama', 'JavaScript', 'NLP'],
    links: [
      { href: 'https://github.com/VibhuTummallapalli/QuickDigest', label: 'View on GitHub' },
    ],
  },
];

export type SkillGroup = {
  title: string;
  iconClass: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    iconClass: 'fas fa-code',
    items: ['Python', 'C#', 'Java', 'JavaScript', 'Rust', 'SQL'],
  },
  {
    title: 'AI / ML',
    iconClass: 'fas fa-brain',
    items: [
      'LLM Application Dev',
      'CrewAI',
      'LangChain',
      'Prompt Engineering',
      'Anthropic Claude API',
      'Claude Code',
      'GPT-4o',
      'OpenAI Vision',
      'Ollama',
      'PyTorch',
    ],
  },
  {
    title: 'Frameworks & Web',
    iconClass: 'fas fa-layer-group',
    items: [
      '.NET 8',
      'ASP.NET Core',
      'Entity Framework Core',
      'WPF',
      'React',
      'Next.js',
      'Vite',
      'SignalR',
      'JWT',
    ],
  },
  {
    title: 'Cloud & Tools',
    iconClass: 'fas fa-cloud',
    items: [
      'GCP App Engine',
      'Cloud Run',
      'Pub/Sub',
      'GitHub Actions',
      'GitLab CI',
      'PostgreSQL',
      'Wireshark',
      'Bash',
      'PowerShell',
    ],
  },
];
