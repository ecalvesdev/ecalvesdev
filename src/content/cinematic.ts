export type CinematicStage = {
  id: string;
  title: string;
  description: string;
  src: string;
  poster: string;
};

export const cinematicStages: CinematicStage[] = [
  {
    id: "beyond-code",
    title: "Desenvolvimento com engenharia e entrega.",
    description:
      "Software, apps e automação — do desenho ao que realmente entra em uso.",
    src: "/media/cinematic-1.mp4",
    poster: "/media/cinematic-1-poster.jpg",
  },
  {
    id: "data-intelligence",
    title: "Dados conectados. Decisão com menos ruído.",
    description:
      "Integrações, pipelines e IA em processos reais — informação útil na operação.",
    src: "/media/cinematic-2.mp4",
    poster: "/media/cinematic-2-poster.jpg",
  },
  {
    id: "architectures",
    title: "Arquiteturas que aguentam o próximo passo.",
    description:
      "Sistemas, APIs e agentes com base modular, clara e pronta para evoluir.",
    src: "/media/cinematic-3.mp4",
    poster: "/media/cinematic-3-poster.jpg",
  },
];

export const cinematicClosing = "Código com propósito. Engenharia aplicada.";
