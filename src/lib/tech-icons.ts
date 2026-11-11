import {
  siCss,
  siCursor,
  siDjango,
  siDocker,
  siFastapi,
  siFlask,
  siGit,
  siGithub,
  siGooglesheets,
  siHtml5,
  siHtmx,
  siJavascript,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPandas,
  siPhp,
  siPostgresql,
  siPython,
  siRailway,
  siReact,
  siSelenium,
  siSqlite,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

export type TechIcon = {
  title: string;
  slug: string;
  path: string;
  hex: string;
};

/** Playwright ainda não tem entrada estável no simple-icons; path monocromático próprio. */
const playwrightIcon: TechIcon = {
  title: "Playwright",
  slug: "playwright",
  hex: "2EAD33",
  path: "M12 2.5c-2.35 0-4.4 1.55-5.1 3.78A5.76 5.76 0 0 0 2.5 11.6c0 3.18 2.58 5.76 5.76 5.76.55 0 1.08-.08 1.59-.22.78 2.3 2.95 3.96 5.15 3.96s4.37-1.66 5.15-3.96c.5.14 1.04.22 1.59.22 3.18 0 5.76-2.58 5.76-5.76a5.76 5.76 0 0 0-4.4-5.32C20.4 4.05 18.35 2.5 16 2.5zm-3.1 9.1c-.83 0-1.5-.78-1.5-1.75S8.07 8.1 8.9 8.1s1.5.78 1.5 1.75-.67 1.75-1.5 1.75zm6.2 0c-.83 0-1.5-.78-1.5-1.75s.67-1.75 1.5-1.75 1.5.78 1.5 1.75-.67 1.75-1.5 1.75z",
};

/** Fallbacks reconhecíveis quando o slug não existe no simple-icons instalado. */
const sqlIcon: TechIcon = {
  title: "SQL",
  slug: "sql",
  hex: "4479A1",
  path: "M12 2C7.03 2 3 3.79 3 6v12c0 2.21 4.03 4 9 4s9-1.79 9-4V6c0-2.21-4.03-4-9-4zm0 2c4.08 0 7 .98 7 2s-2.92 2-7 2-7-.98-7-2 2.92-2 7-2zm0 14c-4.08 0-7-.98-7-2v-1.35C6.32 15.5 8.9 16 12 16s5.68-.5 7-1.35V16c0 1.02-2.92 2-7 2zm0-4c-4.08 0-7-.98-7-2v-1.35C6.32 11.5 8.9 12 12 12s5.68-.5 7-1.35V12c0 1.02-2.92 2-7 2zm0-4c-4.08 0-7-.98-7-2V6.65C6.32 7.5 8.9 8 12 8s5.68-.5 7-1.35V8c0 1.02-2.92 2-7 2z",
};

const awsIcon: TechIcon = {
  title: "AWS",
  slug: "aws",
  hex: "FF9900",
  path: "M6.76 17.84c.18.14 2.2 1.66 5.24 1.66 3.18 0 5.1-1.58 5.18-1.64a.4.4 0 0 1 .55.08c.14.18.1.44-.08.57-.12.1-2.4 1.84-5.65 1.84-3.3 0-5.55-1.72-5.75-1.88a.4.4 0 0 1-.08-.56.4.4 0 0 1 .59-.07zm12.5-2.4c-.86.52-2.12.9-2.12.9-.28.1-.4.14-.58-.08-.1-.14-.32-.42-.46-.6-.14-.2-.04-.34.14-.48.14-.1.98-.7 1.66-1.08.1-.06.22 0 .26.1l.1.2c.06.14.12.3.16.4.08.22.08.34-.04.4l-.12.14zm-14.02.12c-.2-.06-.24-.22-.14-.4.04-.1.1-.26.16-.4l.1-.2a.18.18 0 0 1 .26-.1c.68.38 1.52.98 1.66 1.08.18.14.28.28.14.48-.14.18-.36.46-.46.6-.18.22-.3.18-.58.08 0 0-1.26-.38-2.14-.9zM6.9 10.2l1.92.36c.16.04.28.18.28.34v5.34c0 .2-.16.36-.36.36h-.9a.36.36 0 0 1-.36-.36V12.3L6.9 12c-.18-.04-.3-.2-.3-.38v-.9c0-.22.2-.4.4-.52zm10.2 0c.2.12.4.3.4.52v.9c0 .18-.12.34-.3.38l-.58.3v3.94c0 .2-.16.36-.36.36h-.9a.36.36 0 0 1-.36-.36v-5.34c0-.16.12-.3.28-.34l1.92-.36c.2-.04.4.04.5.16zM12 4.4c1.7 0 3.08 1.38 3.08 3.08S13.7 10.56 12 10.56 8.92 9.18 8.92 7.48 10.3 4.4 12 4.4z",
};

const vscodeIcon: TechIcon = {
  title: "VS Code",
  slug: "vscode",
  hex: "007ACC",
  path: "M17.18 2.2 9.9 7.74 5.7 4.54 3.4 5.7v12.6l2.3 1.16 4.2-3.2 7.28 5.54L20.6 20V4zm0 3.56v12.48l-5.72-4.36 5.72-8.12zM5.7 8.1l2.74 2.1-2.74 2.08V8.1z",
};

function fromSimpleIcon(icon: {
  title: string;
  slug: string;
  path: string;
  hex: string;
}): TechIcon {
  return {
    title: icon.title,
    slug: icon.slug,
    path: icon.path,
    hex: icon.hex,
  };
}

const bySlug: Record<string, TechIcon> = {
  python: fromSimpleIcon(siPython),
  javascript: fromSimpleIcon(siJavascript),
  typescript: fromSimpleIcon(siTypescript),
  php: fromSimpleIcon(siPhp),
  html5: fromSimpleIcon(siHtml5),
  css: fromSimpleIcon(siCss),
  css3: fromSimpleIcon(siCss),
  react: fromSimpleIcon(siReact),
  nextdotjs: fromSimpleIcon(siNextdotjs),
  tailwindcss: fromSimpleIcon(siTailwindcss),
  htmx: fromSimpleIcon(siHtmx),
  django: fromSimpleIcon(siDjango),
  fastapi: fromSimpleIcon(siFastapi),
  flask: fromSimpleIcon(siFlask),
  nodedotjs: fromSimpleIcon(siNodedotjs),
  postgresql: fromSimpleIcon(siPostgresql),
  mysql: fromSimpleIcon(siMysql),
  sqlite: fromSimpleIcon(siSqlite),
  selenium: fromSimpleIcon(siSelenium),
  playwright: playwrightIcon,
  pandas: fromSimpleIcon(siPandas),
  googlesheets: fromSimpleIcon(siGooglesheets),
  git: fromSimpleIcon(siGit),
  github: fromSimpleIcon(siGithub),
  docker: fromSimpleIcon(siDocker),
  railway: fromSimpleIcon(siRailway),
  cursor: fromSimpleIcon(siCursor),
  sql: sqlIcon,
  aws: awsIcon,
  vscode: vscodeIcon,
};

/** Luminância relativa aproximada (0–255). Hexes escuros usam fill claro no badge. */
export function isDarkBrandHex(hex: string): boolean {
  const h = hex.replace("#", "");
  if (h.length < 6) return true;
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return 0.299 * r + 0.587 * g + 0.114 * b < 90;
}

export function getTechIcon(slug: string): TechIcon | undefined {
  return bySlug[slug];
}

export function getTechIconFill(slug: string): string | undefined {
  const icon = bySlug[slug];
  if (!icon) return undefined;
  return isDarkBrandHex(icon.hex) ? "#F8FAFC" : `#${icon.hex}`;
}
