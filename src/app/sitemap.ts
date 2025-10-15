import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://danielespindola.com.br",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://danielespindola.com.br/imoveis",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}