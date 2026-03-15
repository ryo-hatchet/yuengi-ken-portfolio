import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

const services = [
  {
    num: "01",
    title: "体験型インスタレーションの企画・開発",
    description:
      "イベント、フェス、商業施設などで、参加者の行動が場の体験を変えるインタラクティブな作品をつくる。",
  },
  {
    num: "02",
    title: "テクノロジー遊具・デバイスの発明",
    description:
      "公園、公共空間、コミュニティスペースに設置する、人が集まって遊べるプロダクトの開発。",
  },
  {
    num: "03",
    title: "宴の場の体験設計",
    description:
      "パーティー、企業イベント、地域の祭りなど「人が集まる場」のクリエイティブディレクション。",
  },
  {
    num: "04",
    title: "遊びの研究・発信",
    description:
      "「集合的遊び」に関する知見の体系化、執筆、講演。",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader title="About" subtitle="遊宴技研について" />

        {/* Philosophy quote */}
        <div className="mb-16">
          <blockquote className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent" />
            <p className="pl-8 text-2xl sm:text-3xl md:text-4xl font-black text-text-heading leading-snug tracking-tight">
              人が集まるところに、
              <br />
              遊びを発明する。
            </p>
          </blockquote>
        </div>

        {/* Body text */}
        <div className="max-w-3xl space-y-5 text-text-main leading-[1.9] text-[15px] mb-20">
          <p>
            人は集まると、遊びはじめる。
            誰に言われなくても、笑い、騒ぎ、見知らぬ誰かと手を取り合う。
            その衝動は、祭りの夜にも、公園の午後にも、ビルの屋上にも、画面の向こうにも存在する。
          </p>
          <p className="text-text-heading font-semibold">
            遊宴技研は、テクノロジーで遊びと賑わいを開発する活動体です。
          </p>
          <p>
            テクノロジーは、人と人のあいだに置いたとき、はじめて本当に面白くなる。
            私たちはそう信じて、集まって遊ぶことの可能性を拡張し続けます。
          </p>
          <p>
            遊びは贅沢ではなく、インフラである。
            日常のすぐそばに遊びがあれば、人はもっと笑えるし、もっとつながれる。
          </p>
          <p>
            企画、開発、実装。場の設計からデバイスの発明まで。
            集まって遊ぶ歓声が響く場所を、ひとつでも多くつくること。
            それが遊宴技研の仕事です。
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-metallic/30">
          {services.map((service) => (
            <div
              key={service.num}
              className="bg-bg-main p-8 group hover:bg-bg-card transition-colors duration-300"
            >
              <span className="font-mono text-xs text-accent tracking-wider">
                {service.num}
              </span>
              <h3 className="font-bold text-text-heading mt-2 mb-3 text-[15px]">
                {service.title}
              </h3>
              <p className="text-sm text-text-sub leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        {/* People */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-px bg-accent" />
            <h2 className="text-2xl font-black text-text-heading tracking-tight">
              People
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            {/* Photo */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 flex-shrink-0 relative overflow-hidden">
              <Image
                src="/images/people/myphoto.jpg"
                alt="斧 涼之介"
                fill
                className="object-cover grayscale"
              />
            </div>

            {/* Profile */}
            <div className="flex-1">
              <h3 className="text-xl font-black text-text-heading tracking-tight">
                斧 涼之介
              </h3>
              <p className="font-mono text-xs tracking-[0.15em] text-accent mt-1 mb-5 uppercase">
                Creative Technologist
              </p>
              <div className="space-y-3 text-[15px] text-text-main leading-[1.9]">
                <p>
                  兵庫県新開地の商店街生まれ、商店街育ち。大学・大学院と機械工学を専攻。
                </p>
                <p>
                  ハードウェアのプロトタイピングや、インタラクティブな体験のプランニング・実装が得意。
                  テクノロジーを活用して、人々がワクワクする体験を作るのが好き。
                </p>
                <p className="text-text-sub text-sm">
                  主な受賞歴に、「考える人の粘土像コンクール 兵庫県金賞」(小学3年生の頃)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
