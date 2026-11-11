import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = "2026-11-10";

  return [
    {
      url: "https://ecalves.dev",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://ecalves.dev/servicos",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ecalves.dev/contato",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
