import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  getResearchArticles,
  getResearchArticleBySlug,
  getResearchContent,
} from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = getResearchArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getResearchArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | YUENGI-KEN`,
    description: article.excerpt,
  };
}

/** シンプルなMarkdownパーサー */
function parseMarkdown(content: string): React.ReactNode[] {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let currentParagraph: string[] = [];
  let currentList: string[] = [];
  let key = 0;

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(" ");
      elements.push(
        <p key={key++} className="text-text-main leading-relaxed mb-4">
          {renderInline(text)}
        </p>
      );
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={key++} className="list-disc list-inside space-y-1 mb-4 text-text-main">
          {currentList.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();

    // 空行 → 段落区切り
    if (trimmed === "") {
      flushList();
      flushParagraph();
      continue;
    }

    // 見出し
    if (trimmed.startsWith("### ")) {
      flushList();
      flushParagraph();
      elements.push(
        <h3 key={key++} className="text-lg font-bold text-text-heading mt-6 mb-2">
          {trimmed.slice(4)}
        </h3>
      );
      continue;
    }
    if (trimmed.startsWith("## ")) {
      flushList();
      flushParagraph();
      elements.push(
        <h2 key={key++} className="text-xl font-bold text-text-heading mt-8 mb-3">
          {trimmed.slice(3)}
        </h2>
      );
      continue;
    }
    if (trimmed.startsWith("# ")) {
      flushList();
      flushParagraph();
      // トップレベル見出しはタイトルで表示済みなのでスキップ
      continue;
    }

    // リスト項目 (- or 数字.)
    const listMatch = trimmed.match(/^[-*]\s+(.+)$/);
    const orderedMatch = trimmed.match(/^\d+\.\s+(.+)$/);
    if (listMatch) {
      flushParagraph();
      currentList.push(listMatch[1]);
      continue;
    }
    if (orderedMatch) {
      flushParagraph();
      currentList.push(orderedMatch[1]);
      continue;
    }

    // それ以外は段落の一部
    flushList();
    currentParagraph.push(trimmed);
  }

  flushList();
  flushParagraph();

  return elements;
}

/** インラインのMarkdown変換（太字のみ） */
function renderInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const boldMatch = part.match(/^\*\*(.+)\*\*$/);
    if (boldMatch) {
      return (
        <strong key={i} className="font-bold">
          {boldMatch[1]}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default async function ResearchDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getResearchArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const content = getResearchContent(slug);

  return (
    <div className="min-h-screen bg-bg-main">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* 戻るリンク */}
        <Link
          href="/research"
          className="text-text-sub hover:text-accent transition-colors inline-block mb-8"
        >
          &larr; Researchに戻る
        </Link>

        {/* 日付 */}
        <p className="text-text-sub mb-2">{article.date}</p>

        {/* タイトル */}
        <h1 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
          {article.title}
        </h1>

        {/* タグ */}
        <div className="flex flex-wrap gap-2 mb-8">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="bg-accent text-white text-sm px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 本文 */}
        <div className="border-t border-text-sub/20 pt-8">
          {parseMarkdown(content)}
        </div>
      </div>
    </div>
  );
}
