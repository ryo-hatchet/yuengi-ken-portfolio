export type Work = {
  slug: string;
  title: string;
  tagline?: string;
  description: string;
  thumbnail: string;
  images: string[];
  video?: string;
  tags: string[];
  techStack: string[];
  links: { label: string; url: string }[];
  year: number;
  date: string;
  featured: boolean;
};

export type Invention = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  techStack: string[];
  status: "進行中" | "完了" | "構想";
  year: number;
  date: string;
};

export type ResearchArticle = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  contentPath: string;
};
