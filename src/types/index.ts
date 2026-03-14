export type Work = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  video?: string;
  tags: string[];
  techStack: string[];
  links: { label: string; url: string }[];
  date: string;
  featured: boolean;
};

export type Prototype = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  techStack: string[];
  status: "進行中" | "完了" | "構想";
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
