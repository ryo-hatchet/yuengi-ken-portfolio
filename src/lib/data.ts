import fs from "fs";
import path from "path";

import type { Work, Prototype, ResearchArticle } from "@/types";

import worksData from "@/data/works.json";
import prototypesData from "@/data/prototypes.json";
import researchData from "@/data/research.json";

// --- Works ---

export function getWorks(): Work[] {
  return worksData as Work[];
}

export function getFeaturedWorks(): Work[] {
  return getWorks().filter((work) => work.featured);
}

export function getWorkBySlug(slug: string): Work | undefined {
  return getWorks().find((work) => work.slug === slug);
}

// --- Prototypes ---

export function getPrototypes(): Prototype[] {
  return prototypesData as Prototype[];
}

export function getPrototypeBySlug(slug: string): Prototype | undefined {
  return getPrototypes().find((prototype) => prototype.slug === slug);
}

// --- Research Articles ---

export function getResearchArticles(): ResearchArticle[] {
  return researchData as ResearchArticle[];
}

export function getResearchArticleBySlug(
  slug: string
): ResearchArticle | undefined {
  return getResearchArticles().find((article) => article.slug === slug);
}

export function getResearchContent(slug: string): string {
  const article = getResearchArticleBySlug(slug);
  if (!article) {
    throw new Error(`Research article not found: ${slug}`);
  }
  const filePath = path.join(process.cwd(), article.contentPath);
  return fs.readFileSync(filePath, "utf-8");
}
