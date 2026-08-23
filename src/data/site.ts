export const profile = {
  name: 'Vibhu Tummallapalli',
  location: 'Charlotte, NC',
  citizenship: 'US Citizen',
  email: 'vibhu.tummallapalli@gmail.com',
  phone: '919-909-9573',
  github: 'https://github.com/VibhuTummallapalli',
  linkedin: 'https://linkedin.com/in/vibhutummallapalli',
  bio: "An AI engineer focused on agentic AI systems, LLM application development, and applied AI/ML. I finished my B.S. in Software Engineering (Data Science concentration) at East Carolina University and started an M.S. in Artificial Intelligence at UNC Charlotte this fall.",
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

/** Coarse buckets that drive the filter row on /work. Keep this list short —
    it is a filter row, not a tag cloud. Tags stay per-project. */
export const categories = [
  'AI & Agents',
  'Research',
  'Full-Stack',
  'Systems',
] as const;

export type Category = (typeof categories)[number];

export type Project = {
  /** Stable id. Used for anchors on /work and for any future detail page. */
  slug: string;
  name: string;
  /** Free-text descriptor, e.g. "Senior Capstone". Shown on /work. */
  kind: string;
  /** Filter bucket on /work. */
  category: Category;
  subtitle?: string;
  org?: string;
  /** Human-readable range, e.g. "Aug 2025 – May 2026". Parsed for sorting. */
  dates: string;
  /** One line of context: what kind of work it was, and who for. */
  role: string;
  /** The paragraph shown in listings. Written to stand on its own. */
  summary: string;
  /** Long-form detail, kept for the resume and any future detail page. */
  bullets: string[];
  tags: string[];
  /** Promotes the project to the home page. Aim for 4-5 at a time. */
  featured?: boolean;
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: 'evalward',
    name: 'EvalWard',
    kind: 'Personal Project',
    category: 'AI & Agents',
    subtitle: 'LLM regression gate for CI/CD',
    dates: 'Aug 2026',
    featured: true,
    role: 'Personal project · open source',
    summary:
      'A CI gate that catches silent quality regressions in LLM-powered features. It re-runs a bank complaint-triage prompt against a 150-case golden dataset built from the public CFPB Consumer Complaint Database, diffs macro-F1 against the last promoted baseline, and blocks the merge when quality drops materially — naming the exact cases that flipped.',
    bullets: [
      'Built a CI/CD regression gate for LLM features in Python: golden-dataset evaluation, run-over-run baseline diffing, and alerting before degraded output ships. Prompt edits pass code review and still break classification silently — nothing throws, and the JSON is still well-formed.',
      'Scored on macro-F1 rather than accuracy, because credit reporting is ~68% of CFPB complaints and a model answering one class unconditionally would score 68% and be worthless; the 150-case set is stratified 16–17 per class instead of mirroring production.',
      'Calibrated the 3% warn / 8% block thresholds against a measured noise floor — four live claude-opus-5 runs of an identical prompt spread 2.7 points — and added rolling 7-run drift detection, since gradual one-point drops never trip a per-run threshold.',
      'Scored four dimensions per case (category match, DeepEval GEval summary relevance, latency, token cost), persisted runs to SQLite with HTML reports and a Streamlit dashboard, and shipped it via GitHub Actions and Docker with Teams alerting.',
    ],
    tags: [
      'Python',
      'Anthropic Claude API',
      'DeepEval',
      'Pydantic',
      'Typer',
      'SQLite',
      'Streamlit',
      'Docker',
      'GitHub Actions',
    ],
    links: [
      { href: 'https://github.com/VibhuTummallapalli/EvalWard', label: 'View on GitHub' },
    ],
  },
  {
    slug: 'metamorphic-testing-multi-agent',
    name: 'Metamorphic Testing of Multi-Agent AI Systems',
    kind: 'Research',
    category: 'Research',
    org: 'ECU College of Engineering and Technology',
    dates: 'Apr 2026',
    featured: true,
    role: 'Research',
    summary:
      'A novel catalog of 9 metamorphic relations for testing multi-agent LLM systems where traditional oracles fail — interchangeability, redundancy invariance, graceful degradation. Reusable Python framework with semantic verifiers; CrewAI harnesses across OpenAI and Ollama via LangChain.',
    bullets: [
      'Designed a novel catalog of 9 metamorphic relations to test multi-agent LLM systems where traditional test oracles fail (interchangeability, redundancy invariance, graceful degradation, etc.).',
      'Built a reusable Python framework with multi-dimensional semantic verifiers (token overlap, difflib similarity, length ratios) to address the test oracle problem for LLM outputs.',
      'Implemented CrewAI test harnesses against domain tasks (financial risk, healthcare cloud security, SaaS market research), executing experiments across OpenAI and Ollama backends via LangChain.',
    ],
    tags: ['Python', 'CrewAI', 'LangChain', 'OpenAI', 'Ollama'],
  },
  {
    slug: 'mcp-tutor-agent',
    name: 'MCP Tutor Agent',
    kind: 'Agentic AI Coursework',
    category: 'AI & Agents',
    dates: 'Jul 2026',
    featured: true,
    role: 'Agentic AI coursework',
    summary:
      'A local-first AI tutoring agent that calls external tools over the Model Context Protocol. Two MCP servers in C# (stdio and streamable HTTP transports) feed their tool catalogs to an LLM agent via the Microsoft Agent Framework, with a streaming Blazor chat UI orchestrated by .NET Aspire.',
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
    slug: 'ncempt-online-testing',
    name: 'NC Early Mathematics Placement Testing',
    kind: 'Senior Capstone',
    category: 'Full-Stack',
    subtitle: 'Online Testing System',
    org: 'NC Early Mathematics Placement Testing',
    dates: 'Aug 2025 – May 2026',
    featured: true,
    role: 'Senior Capstone · 5-person Agile team',
    summary:
      'Full-stack web platform used by 60 NC high schools and 5,000+ students. Role-based access with JWT + 2FA, real-time proctor monitoring over SignalR, and an async email pipeline on GCP Pub/Sub. Shipped through GitHub Actions CI/CD.',
    bullets: [
      'Built a full-stack web platform (React 19/Vite, .NET 8, EF Core, PostgreSQL) used by 60 NC high schools and 5,000+ students, with a version-controlled question bank, automated grading, and session-based access control.',
      'Implemented role-based access (Admin/Coordinator/Proctor/Student) with JWT and 2FA, plus real-time SignalR proctor monitoring with live tracking and pause/resume controls.',
      'Architected an asynchronous email pipeline via GCP Pub/Sub and a Python Cloud Function; deployed to GCP (App Engine, Cloud Run) through GitHub Actions CI/CD as part of a 5-member Agile team using GitLab.',
    ],
    tags: ['React 19', 'Vite', '.NET 8', 'EF Core', 'PostgreSQL', 'SignalR', 'JWT', 'GCP', 'GitHub Actions'],
  },
  {
    slug: 'dental-charting-tool',
    name: 'Dental Charting Tool',
    kind: 'Applied Research',
    category: 'AI & Agents',
    org: 'ECU College of Engineering and Technology',
    dates: 'Jun 2025 – Jan 2026',
    featured: true,
    role: 'Applied research · ECU School of Dental Medicine',
    summary:
      'WPF/.NET desktop app for radiograph analysis with GPT-4o Vision, FDI tooth-numbering, CDT-coded procedure cataloging, and urgency triage. A 5-step prompt pipeline keeps output clinically contextualized. Presented at ECU RCAW and CORAS 2026.',
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
    slug: 'esp32-rust-firmware',
    name: 'ESP32-S3 Embedded Rust Firmware',
    kind: 'Embedded Systems Coursework',
    category: 'Systems',
    dates: 'Jun 2026',
    role: 'Embedded systems coursework',
    summary:
      'Bare-metal (no_std) firmware for the ESP32-S3, written in Rust with the esp-hal HAL and the Embassy async runtime. Reads a pull-up button input to drive an LED with debounced polling and serial logging; runs on hardware or entirely in the Wokwi simulator.',
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
    slug: 'tetherlog',
    name: 'TetherLog',
    kind: 'Coursework',
    category: 'Full-Stack',
    dates: 'Apr 2026 – May 2026',
    role: 'Web development coursework · 2-person team',
    summary:
      'A book-tracking site where readers log progress, follow each other, and post reading updates. Authors can publish and manage their own books. React/Vite frontend; Node.js/Express + SQLite backend with JWT auth and role-based access.',
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
    slug: 'quickdigest',
    name: 'QuickDigest',
    kind: 'Coursework',
    category: 'AI & Agents',
    dates: 'Apr 2026',
    role: 'NLP coursework · 3-person team',
    summary:
      'A news-article summarizer with NLP analysis — sentiment, named entities, keywords — powered by a local Ollama LLM. Configurable short/medium/long summaries with ROUGE evaluation against a reference. Node.js/Express backend.',
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
    title: 'AI / ML',
    iconClass: 'fas fa-brain',
    items: [
      'Agentic AI Systems',
      'Multi-Agent Systems',
      'LLM Application Development',
      'Model Context Protocol (MCP)',
      'Microsoft Agent Framework',
      'CrewAI',
      'LangChain',
      'Prompt Engineering',
      'LLM Evaluation & Testing',
      'LLM-as-a-Judge',
      'DeepEval',
      'Golden Datasets & Regression Gating',
      'Anthropic Claude API',
      'OpenAI / GPT-4o Vision',
      'Ollama',
      'PyTorch',
      'NLP',
    ],
  },
  {
    title: 'Languages',
    iconClass: 'fas fa-code',
    items: ['Python', 'C#', 'Rust', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Frameworks & Web',
    iconClass: 'fas fa-layer-group',
    items: [
      '.NET Aspire',
      '.NET 8',
      'ASP.NET Core',
      'Blazor',
      'Entity Framework Core',
      'WPF',
      'React',
      'Next.js',
      'Vite',
      'SignalR',
      'REST APIs',
      'JWT',
      'Pydantic',
      'Typer',
      'Streamlit',
    ],
  },
  {
    title: 'Cloud & Tools',
    iconClass: 'fas fa-cloud',
    items: [
      'GCP (App Engine, Cloud Run)',
      'Pub/Sub',
      'Docker',
      'GitHub Actions',
      'GitLab CI',
      'PostgreSQL',
      'SQLite',
      'Git',
      'Bash',
      'PowerShell',
      'pytest',
      'Ruff',
      'mypy',
    ],
  },
];
