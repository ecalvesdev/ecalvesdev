export const kitIcons = {
  ai: "/kit/icons/ai.png",
  architecture: "/kit/icons/architecture.png",
  automation: "/kit/icons/automation.png",
  cloud: "/kit/icons/cloud.png",
  code: "/kit/icons/code.png",
  data: "/kit/icons/data.png",
  integration: "/kit/icons/integration.png",
  performance: "/kit/icons/performance.png",
  scalability: "/kit/icons/scalability.png",
  security: "/kit/icons/security.png",
} as const;

export type KitIconId = keyof typeof kitIcons;

export const kitBackgrounds = {
  blue_grid: "/kit/backgrounds/blue_grid.png",
  diagonal_streaks: "/kit/backgrounds/diagonal_streaks.png",
  data_particles: "/kit/backgrounds/data_particles.png",
  node_network: "/kit/backgrounds/node_network.png",
} as const;

export type KitBackgroundId = keyof typeof kitBackgrounds;

export const kitDecor = {
  corner_brackets: "/kit/decor/corner_brackets.png",
  separator_beam: "/kit/decor/separator_beam.png",
  circuit_lines: "/kit/decor/circuit_lines.png",
  flow_arrows: "/kit/decor/flow_arrows.png",
} as const;

export type KitDecorId = keyof typeof kitDecor;

export type StoryScene = {
  id: string;
  section: string;
  title: string;
  eyebrow: string;
  copy: string;
  background: KitBackgroundId;
  icons: readonly KitIconId[];
  decor?: KitDecorId;
};

/** 7 cenas do storyboard → seções do site (scroll storytelling). */
export const storyboard = [
  {
    id: "identity",
    section: "inicio",
    title: "Identidade",
    eyebrow: "",
    copy: "Engenharia, sistemas e soluções digitais com critério.",
    background: "data_particles",
    icons: [],
    decor: "corner_brackets",
  },
  {
    id: "development",
    section: "tecnologias",
    title: "Desenvolvimento",
    eyebrow: "",
    copy: "Interfaces, APIs e infraestrutura com stack pragmática — o que o projeto precisa.",
    background: "blue_grid",
    icons: ["code"],
  },
  {
    id: "automation",
    section: "experiencia",
    title: "Automação",
    eyebrow: "01",
    copy: "Fluxos que cortam trabalho repetitivo e ligam operações.",
    background: "node_network",
    icons: ["automation"],
    decor: "flow_arrows",
  },
  {
    id: "data",
    section: "experiencia",
    title: "Dados",
    eyebrow: "02",
    copy: "Integrações e processamento para informação útil no dia a dia.",
    background: "data_particles",
    icons: ["data"],
  },
  {
    id: "ai",
    section: "experiencia",
    title: "Orquestração de Agentes",
    eyebrow: "03",
    copy: "Agentes e fluxos de IA alinhados a tarefas concretas.",
    background: "node_network",
    icons: ["ai"],
  },
  {
    id: "architecture",
    section: "abordagem",
    title: "Arquitetura",
    eyebrow: "",
    copy: "Do requisito à execução: módulos claros, integração, segurança e evolução.",
    background: "blue_grid",
    icons: ["architecture", "integration", "security", "cloud"],
    decor: "circuit_lines",
  },
  {
    id: "closing",
    section: "cta",
    title: "Próximo passo",
    eyebrow: "",
    copy: "Serviços ou conversa direta — escolha o caminho agora.",
    background: "diagonal_streaks",
    icons: [],
    decor: "separator_beam",
  },
] as const satisfies readonly StoryScene[];

export type StoryboardSceneId = (typeof storyboard)[number]["id"];

export function getScene(id: StoryboardSceneId): StoryScene {
  const scene = storyboard.find((item) => item.id === id);
  if (!scene) {
    throw new Error(`Storyboard scene not found: ${id}`);
  }
  return scene;
}

/** Capítulos visuais dentro de `#experiencia`. */
export const experienceChapters = [
  {
    sceneId: "automation" as const,
    title: "Automação",
    description:
      "Rotinas com Selenium, Playwright e fluxos integrados — menos repetição, mais critério.",
  },
  {
    sceneId: "data" as const,
    title: "Dados e Integrações",
    description:
      "Plataformas conectadas e processamento de informação para operação e decisão.",
  },
  {
    sceneId: "ai" as const,
    title: "Orquestração de Agentes e Soluções com IA",
    description:
      "Agentes e ferramentas de IA encaixados em tarefas reais, com limite e propósito.",
    featured: true,
  },
] as const;

/** Ícones de destaque na seção Approach. */
export const approachKitIcons = [
  "architecture",
  "security",
  "scalability",
  "performance",
] as const satisfies readonly KitIconId[];

/** Mapeia título de serviço → ícone do kit. */
export function serviceKitIcon(title: string): KitIconId | null {
  const normalized = title.toLowerCase();
  if (normalized.includes("inteligência artificial") || /\bia\b/.test(normalized)) {
    return "ai";
  }
  if (normalized.includes("automação")) return "automation";
  if (normalized.includes("integra")) return "integration";
  if (normalized.includes("dashboard") || normalized.includes("dados")) return "data";
  if (normalized.includes("gestão") || normalized.includes("logística")) return "cloud";
  if (normalized.includes("modernização")) return "architecture";
  if (normalized.includes("desenvolvimento") || normalized.includes("sistemas")) {
    return "code";
  }
  if (normalized.includes("desempenho") || normalized.includes("performance")) {
    return "performance";
  }
  return null;
}

export const approachIconLabels: Record<(typeof approachKitIcons)[number], string> = {
  architecture: "Arquitetura",
  security: "Segurança",
  scalability: "Escalabilidade",
  performance: "Performance",
};

/** Ícones opcionais por marco da timeline de experiência. */
export function milestoneKitIcon(label: string): KitIconId {
  switch (label) {
    case "Formação":
      return "architecture";
    case "Automação":
      return "automation";
    case "Sistemas":
      return "code";
    case "Operações":
      return "cloud";
    case "Integrações":
      return "integration";
    case "IA aplicada":
      return "ai";
    default:
      return "code";
  }
}
