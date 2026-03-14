import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getPrototypes, getPrototypeBySlug } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const prototypes = getPrototypes();
  return prototypes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const prototype = getPrototypeBySlug(slug);
  if (!prototype) return {};
  return {
    title: `${prototype.title} | YUENGI-KEN`,
    description: prototype.description,
  };
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "進行中": "bg-accent text-white",
    "完了": "bg-green-600 text-white",
    "構想": "bg-gray-400 text-white",
  };
  return (
    <span
      className={`text-sm px-3 py-1 rounded-full ${styles[status] ?? "bg-gray-400 text-white"}`}
    >
      {status}
    </span>
  );
}

export default async function PrototypeDetailPage({ params }: Props) {
  const { slug } = await params;
  const prototype = getPrototypeBySlug(slug);

  if (!prototype) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg-main">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 戻るリンク */}
        <Link
          href="/prototypes"
          className="text-text-sub hover:text-accent transition-colors inline-block mb-8"
        >
          &larr; Prototypesに戻る
        </Link>

        {/* ヒーロー画像エリア */}
        <div className="bg-text-sub/10 h-80 rounded-lg flex items-center justify-center mb-8">
          <span className="text-6xl text-text-sub/30">遊</span>
        </div>

        {/* タイトル */}
        <h1 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
          {prototype.title}
        </h1>

        {/* 日付とステータス */}
        <div className="flex items-center gap-4 mb-4">
          <p className="text-text-sub">{prototype.date}</p>
          <StatusBadge status={prototype.status} />
        </div>

        {/* タグ */}
        <div className="flex flex-wrap gap-2 mb-6">
          {prototype.tags.map((tag) => (
            <span
              key={tag}
              className="bg-accent text-white text-sm px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 説明文 */}
        <p className="text-text-main leading-relaxed mb-8">
          {prototype.description}
        </p>

        {/* 技術スタック */}
        {prototype.techStack.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-bold text-text-heading mb-3">
              使用技術
            </h2>
            <div className="flex flex-wrap gap-2">
              {prototype.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-text-heading text-white text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
