import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getInventions, getInventionBySlug } from "@/lib/data";
import ImageLightbox from "@/components/ImageLightbox";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const inventions = getInventions();
  return inventions.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const invention = getInventionBySlug(slug);
  if (!invention) return {};
  return {
    title: `${invention.title} | YUENGI-KEN`,
    description: invention.description,
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

export default async function InventionDetailPage({ params }: Props) {
  const { slug } = await params;
  const invention = getInventionBySlug(slug);

  if (!invention) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg-main">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 戻るリンク */}
        <Link
          href="/inventions"
          className="text-text-sub hover:text-accent transition-colors inline-block mb-8"
        >
          &larr; Inventionsに戻る
        </Link>

        {/* ヒーロー画像 */}
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-8">
          <Image
            src={invention.thumbnail}
            alt={invention.title}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            priority
          />
        </div>

        {/* タイトル */}
        <h1 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
          {invention.title}
        </h1>

        {/* 日付とステータス */}
        <div className="flex items-center gap-4 mb-4">
          <p className="text-text-sub">{invention.date}</p>
          <StatusBadge status={invention.status} />
        </div>

        {/* タグ */}
        <div className="flex flex-wrap gap-2 mb-6">
          {invention.tags.map((tag) => (
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
          {invention.description}
        </p>

        {/* ギャラリー */}
        {invention.images && invention.images.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-bold text-text-heading mb-3">
              ギャラリー
            </h2>
            <ImageLightbox images={invention.images} alt={invention.title} />
          </div>
        )}

        {/* 技術スタック */}
        {invention.techStack.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-bold text-text-heading mb-3">
              使用技術
            </h2>
            <div className="flex flex-wrap gap-2">
              {invention.techStack.map((tech) => (
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
