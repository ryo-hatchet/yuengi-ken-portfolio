import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getWorks, getWorkBySlug } from "@/lib/data";
import ImageLightbox from "@/components/ImageLightbox";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const works = getWorks();
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return {};
  return {
    title: `${work.title} | YUENGI-KEN`,
    description: work.description,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg-main">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 戻るリンク */}
        <Link
          href="/works"
          className="text-text-sub hover:text-accent transition-colors inline-block mb-8"
        >
          &larr; Worksに戻る
        </Link>

        {/* ヒーロー画像 */}
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-8">
          <Image
            src={work.thumbnail}
            alt={work.title}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            priority
          />
        </div>

        {/* タイトル */}
        <h1 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
          {work.title}
        </h1>

        {/* タグライン */}
        {work.tagline && (
          <p className="text-lg italic text-accent/80 mb-4 leading-relaxed">
            {work.tagline}
          </p>
        )}

        {/* 日付 */}
        <p className="text-text-sub mb-4">{work.date}</p>

        {/* タグ */}
        <div className="flex flex-wrap gap-2 mb-6">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="bg-accent text-white text-sm px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 説明文 */}
        <p className="text-text-main leading-relaxed mb-8">{work.description}</p>

        {/* ギャラリー */}
        {work.images && work.images.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-bold text-text-heading mb-3">
              ギャラリー
            </h2>
            <ImageLightbox images={work.images} alt={work.title} />
          </div>
        )}

        {/* 技術スタック */}
        {work.techStack.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-bold text-text-heading mb-3">
              使用技術
            </h2>
            <div className="flex flex-wrap gap-2">
              {work.techStack.map((tech) => (
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

        {/* リンク */}
        {work.links.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-bold text-text-heading mb-3">
              リンク
            </h2>
            <ul className="space-y-2">
              {work.links.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {link.label} &rarr;
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 動画 */}
        {work.video && (
          <div className="mb-8">
            <h2 className="text-lg font-bold text-text-heading mb-3">
              動画
            </h2>
            <div className="space-y-4">
              {(Array.isArray(work.video) ? work.video : [work.video]).map((url, i) => (
                <div key={i} className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={url.replace("youtu.be/", "www.youtube.com/embed/").replace("watch?v=", "embed/")}
                    title={`${work.title} - 動画${i + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
