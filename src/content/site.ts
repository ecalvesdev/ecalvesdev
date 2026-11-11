export const site = {
  brand: "ELIAS CASTRO",
  name: "Elias de Castro Alves",
  role: "Software Engineer · Full-Stack · Agentes de IA",
  email: "ecalves.dev@gmail.com",
  whatsappE164: "5562992066804",
  whatsappDisplay: "+55 62 99206-6804",
  social: {
    github: "https://github.com/ecalvesdev",
    linkedin: "https://linkedin.com/in/ecalvesdev",
    instagram: "https://instagram.com/ecalves.dev",
  },
  cta: { label: "Vamos conversar", href: "/contato" },
  nav: [
    { id: "inicio", label: "Início", href: "/" },
    { id: "tecnologias", label: "Tecnologias", href: "/#tecnologias" },
    { id: "experiencia", label: "Experiência", href: "/#experiencia" },
    { id: "sobre", label: "Sobre", href: "/#sobre" },
    { id: "servicos", label: "Serviços", href: "/servicos" },
    { id: "contato", label: "Contato", href: "/contato" },
  ],
} as const;

export const hero = {
  status: "Disponível para novos projetos",
  headlineTop: "O código importa.",
  headlineBefore: "A ",
  headlineMark: "solução",
  headlineAfter: ",",
  headlineEnd: "mais ainda.",
  subheadline:
    "Sou o Elias, engenheiro de software. Construo sistemas, automações e agentes de IA que resolvem o problema real da operação — do desenho da arquitetura até estar rodando em produção.",
  role: site.role,
  primaryCta: { label: "Falar sobre meu projeto", href: "/contato" },
  secondaryCta: { label: "Ver o que já construí", href: "/#experiencia" },
  chips: ["Python · Django", "Agentes de IA", "Automação"],
} as const;

export type StackItem = {
  id: string;
  name: string;
  shortLabel: string;
  /** Slug simple-icons; vazio = fallback tipográfico. */
  simpleIconSlug: string;
};

export const stack = {
  title: "As ferramentas do meu dia a dia.",
  note: "Nada de lista para enfeitar: é o que eu abro todo dia para construir aplicações, automações e integrações.",
  categories: {
    languages: [
      { id: "python", name: "Python", shortLabel: "Py", simpleIconSlug: "python" },
      { id: "javascript", name: "JavaScript", shortLabel: "JS", simpleIconSlug: "javascript" },
      { id: "typescript", name: "TypeScript", shortLabel: "TS", simpleIconSlug: "typescript" },
      { id: "php", name: "PHP", shortLabel: "PHP", simpleIconSlug: "php" },
      { id: "sql", name: "SQL", shortLabel: "SQL", simpleIconSlug: "sql" },
      { id: "html5", name: "HTML5", shortLabel: "HTML", simpleIconSlug: "html5" },
      { id: "css3", name: "CSS3", shortLabel: "CSS", simpleIconSlug: "css3" },
    ] satisfies StackItem[],
    frontend: [
      { id: "react", name: "React", shortLabel: "React", simpleIconSlug: "react" },
      { id: "next", name: "Next.js", shortLabel: "Next", simpleIconSlug: "nextdotjs" },
      { id: "tailwind", name: "Tailwind CSS", shortLabel: "TW", simpleIconSlug: "tailwindcss" },
      { id: "htmx", name: "HTMX", shortLabel: "HTMX", simpleIconSlug: "htmx" },
    ] satisfies StackItem[],
    backend: [
      { id: "django", name: "Django", shortLabel: "DJ", simpleIconSlug: "django" },
      { id: "fastapi", name: "FastAPI", shortLabel: "Fast", simpleIconSlug: "fastapi" },
      { id: "flask", name: "Flask", shortLabel: "Flask", simpleIconSlug: "flask" },
      { id: "node", name: "Node.js", shortLabel: "Node", simpleIconSlug: "nodedotjs" },
    ] satisfies StackItem[],
    databases: [
      { id: "postgresql", name: "PostgreSQL", shortLabel: "PG", simpleIconSlug: "postgresql" },
      { id: "mysql", name: "MySQL", shortLabel: "MySQL", simpleIconSlug: "mysql" },
      { id: "sqlite", name: "SQLite", shortLabel: "SQLite", simpleIconSlug: "sqlite" },
    ] satisfies StackItem[],
    automation: [
      { id: "selenium", name: "Selenium", shortLabel: "Sel", simpleIconSlug: "selenium" },
      { id: "playwright", name: "Playwright", shortLabel: "PW", simpleIconSlug: "playwright" },
      { id: "pandas", name: "pandas", shortLabel: "pd", simpleIconSlug: "pandas" },
      { id: "sheets", name: "Google Sheets API", shortLabel: "Sheets", simpleIconSlug: "googlesheets" },
    ] satisfies StackItem[],
    infra: [
      { id: "git", name: "Git", shortLabel: "Git", simpleIconSlug: "git" },
      { id: "github", name: "GitHub", shortLabel: "GH", simpleIconSlug: "github" },
      { id: "docker", name: "Docker", shortLabel: "Docker", simpleIconSlug: "docker" },
      { id: "railway", name: "Railway", shortLabel: "Rwy", simpleIconSlug: "railway" },
      { id: "aws", name: "AWS", shortLabel: "AWS", simpleIconSlug: "aws" },
      { id: "vscode", name: "VS Code", shortLabel: "VS", simpleIconSlug: "vscode" },
      { id: "cursor", name: "Cursor", shortLabel: "Cur", simpleIconSlug: "cursor" },
    ] satisfies StackItem[],
  },
} as const;

/** Faixas do marquee: misturas por domínio para ritmo visual. */
export const stackTracks = [
  {
    id: "languages-frontend",
    direction: "left" as const,
    speed: "normal" as const,
    items: [...stack.categories.languages, ...stack.categories.frontend],
  },
  {
    id: "backend-db",
    direction: "right" as const,
    speed: "normal" as const,
    items: [...stack.categories.backend, ...stack.categories.databases],
  },
  {
    id: "automation-infra",
    direction: "left" as const,
    speed: "slow" as const,
    items: [...stack.categories.automation, ...stack.categories.infra],
  },
] as const;

export const stackItems: StackItem[] = [
  ...stack.categories.languages,
  ...stack.categories.frontend,
  ...stack.categories.backend,
  ...stack.categories.databases,
  ...stack.categories.automation,
  ...stack.categories.infra,
];

/** Experiência + expertise em uma seção (sem Specialties separado). */
export const experience = {
  title: "Quatro anos resolvendo problema de verdade.",
  intro:
    "Formação em Gestão da Tecnologia da Informação e atuação em sistemas, automação, integrações e IA aplicada a processos reais.",
  highlights: [
    {
      title: "Automação de Processos",
      description:
        "Fluxos que cortam rotina operacional e liberam tempo para o que exige critério.",
    },
    {
      title: "Dados e Integrações",
      description:
        "Plataformas conectadas e informação útil na operação — sem planilha como sistema.",
    },
    {
      title: "Orquestração de Agentes e Soluções com IA",
      description:
        "Agentes e ferramentas de IA encaixados em tarefas concretas, com limite e propósito claros.",
    },
    {
      title: "Engenharia Full-Stack e Arquitetura",
      description:
        "Interface e API no mesmo desenho: módulos legíveis e base que aguenta evolução.",
    },
  ],
  milestones: [
    {
      label: "Formação",
      detail: "Gestão da Tecnologia da Informação.",
    },
    {
      label: "Automação",
      detail: "Rotinas operacionais automatizadas para reduzir trabalho repetitivo.",
    },
    {
      label: "Sistemas",
      detail: "Construção e manutenção de sistemas administrativos e aplicações.",
    },
    {
      label: "Operações",
      detail: "Ferramentas de gestão e logística para acompanhar atividades no chão.",
    },
    {
      label: "Integrações",
      detail: "Conexão entre plataformas e processamento de informação em volume.",
    },
    {
      label: "IA aplicada",
      detail: "Fluxos com agentes de inteligência artificial ligados a processos reais.",
    },
  ],
} as const;

export const services = {
  title: "O que eu posso construir pra você.",
  intro:
    "Do diagnóstico à entrega. Cada projeto começa entendendo como a sua operação funciona — e só depois vira código. Sem pacote pronto, sem enrolação.",
  items: [
    {
      title: "Desenvolvimento de Sistemas",
      description:
        "Aplicações sob medida para gestão de processos, operações e informação.",
    },
    {
      title: "Automação Empresarial",
      description:
        "Fluxos e integrações que cortam atividade repetitiva no operacional.",
    },
    {
      title: "APIs e Integrações",
      description: "Comunicação estável entre sistemas, serviços e plataformas.",
    },
    {
      title: "Sistemas de Gestão e Logística",
      description:
        "Controle operacional, acompanhamento de atividades e organização de recursos.",
    },
    {
      title: "Soluções com Inteligência Artificial",
      description:
        "Modelos, automações e agentes encaixados em processos reais — com critério.",
    },
    {
      title: "Dashboards e Dados",
      description:
        "Informação organizada e legível para decidir com menos ruído.",
    },
    {
      title: "Modernização de Aplicações",
      description:
        "Evolução do que já existe: arquitetura, desempenho e experiência de uso.",
    },
  ],
} as const;

export const about = {
  label: "03 / SOBRE MIM",
  titleBefore: "O desafio não é apenas escrever código. É construir a ",
  titleHighlight: "solução certa.",
  paragraphs: [
    "Sou Elias de Castro Alves, engenheiro de software e formado em Gestão da Tecnologia da Informação. Há aproximadamente quatro anos, atuo transformando processos complexos em sistemas, automações e soluções digitais que fazem sentido na prática.",
    "Minha experiência envolve o desenvolvimento de aplicações, automação de rotinas operacionais, integração de plataformas, sistemas de gestão e processamento de dados. Trabalho conectando necessidades reais à tecnologia, da definição da arquitetura à implementação.",
    "Acredito em software bem estruturado, seguro e preparado para evoluir. Exploro inteligência artificial e orquestração de agentes como parte dessa evolução, sempre com foco em resolver problemas, não apenas adicionar tecnologia.",
  ],
  tags: [
    "SOFTWARE ENGINEERING",
    "PROCESS AUTOMATION",
    "DATA & INTEGRATIONS",
    "AI SOLUTIONS",
  ],
} as const;

export const heroStats = [
  { value: 4, suffix: "+", label: "anos em produção" },
  { value: 25, suffix: "", label: "tecnologias no dia a dia" },
  { value: 7, suffix: "", label: "frentes de serviço" },
] as const;

export const approach = {
  title: "Do problema ao sistema em produção.",
  pillars: [
    "Análise de requisitos",
    "Planejamento de arquitetura",
    "Desenvolvimento modular",
    "Integração de sistemas",
    "Automação de processos",
    "Segurança e confiabilidade",
    "Qualidade e testes",
    "Evolução consciente",
  ],
} as const;

export const homeCta = {
  title: "Tem um problema pra resolver? Me conta.",
  body: "Em uma conversa curta eu entendo o cenário e digo com franqueza se (e como) consigo ajudar. Sem compromisso.",
  primaryCta: { label: "Chamar no WhatsApp", href: "/contato" },
  secondaryCta: { label: "Ver serviços", href: "/servicos" },
} as const;

export const contact = {
  title: "Vamos falar do seu problema.",
  subtitle:
    "Conte o contexto em poucas linhas. Ao enviar, o WhatsApp abre com a mensagem pronta e eu respondo por lá.",
  formHint:
    "Nome e mensagem. Nada é armazenado neste site — o envio redireciona ao WhatsApp.",
  pageCta: { label: "Conversar sobre um projeto", href: "/contato" },
} as const;

export const footer = {
  tagline: "Engenharia de software que resolve o problema e continua de pé depois da entrega.",
  navLabel: "Navegação",
  contactLabel: "Contato",
} as const;

/** Links de contato/redes para Footer e página Contato (ícones + aria-label). */
export const contactChannels = [
  {
    id: "github",
    label: "GitHub",
    href: site.social.github,
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: site.social.linkedin,
    external: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: site.social.instagram,
    external: true,
  },
  {
    id: "email",
    label: "E-mail",
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: `https://wa.me/${site.whatsappE164}`,
    external: true,
  },
] as const;
