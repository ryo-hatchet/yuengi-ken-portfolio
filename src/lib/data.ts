import fs from "fs";
import path from "path";

import type { Work, Invention, ResearchArticle } from "@/types";

const dataDir = path.join(process.cwd(), "public", "data");

function readJsonFilesFromDir<T>(dir: string, filename: string): T[] {
  const fullDir = path.join(dataDir, dir);
  if (!fs.existsSync(fullDir)) return [];

  return fs
    .readdirSync(fullDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const filePath = path.join(fullDir, entry.name, filename);
      if (!fs.existsSync(filePath)) return null;
      const content = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(content) as T;
    })
    .filter((item): item is T => item !== null);
}

// --- Works ---

export function getWorks(): Work[] {
  return readJsonFilesFromDir<Work>("works", "work.json").sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getFeaturedWorks(): Work[] {
  return getWorks().filter((work) => work.featured);
}

export function getWorkBySlug(slug: string): Work | undefined {
  return getWorks().find((work) => work.slug === slug);
}

// --- Inventions ---

export function getInventions(): Invention[] {
  return readJsonFilesFromDir<Invention>("inventions", "invention.json").sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getInventionBySlug(slug: string): Invention | undefined {
  return getInventions().find((invention) => invention.slug === slug);
}

// --- Research Articles ---

export function getResearchArticles(): ResearchArticle[] {
  return readJsonFilesFromDir<ResearchArticle>("research", "research.json");
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
