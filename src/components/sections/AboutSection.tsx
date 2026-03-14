import SectionHeader from "@/components/SectionHeader";

const services = [
  {
    title: "体験型インスタレーションの企画・開発",
    description:
      "光、音、映像を駆使した没入型の空間体験を企画段階からテクニカルな実装まで一貫して手がけます。",
  },
  {
    title: "テクノロジー遊具・デバイスの発明",
    description:
      "センサーやアクチュエータを活用し、人の動きや声に反応する新しい遊具・デバイスを開発します。",
  },
  {
    title: "宴の場の体験設計",
    description:
      "フェスティバル、パーティー、地域の祭りなど、人が集まる場の体験をデザインし、賑わいを最大化します。",
  },
  {
    title: "遊びの研究・発信",
    description:
      "遊びの原理やインタラクションデザインに関する研究を行い、知見を記事・登壇を通じて発信します。",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-bg-card py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader title="About" subtitle="遊宴技研について" />

        {/* 理念の引用ブロック */}
        <div className="border-l-4 border-accent pl-6 mb-10">
          <p className="text-xl sm:text-2xl font-bold text-text-heading leading-relaxed">
            人が集まるところに、遊びを発明する。
          </p>
        </div>

        {/* 本文 */}
        <div className="space-y-6 text-text-main leading-relaxed mb-16">
          <p>
            人は集まると、遊びはじめる。
            誰に言われなくても、笑い、騒ぎ、見知らぬ誰かと手を取り合う。
            その衝動は、祭りの夜にも、公園の午後にも、ビルの屋上にも、画面の向こうにも存在する。
          </p>
          <p>
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

        {/* 仕事内容カード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-bg-main rounded-lg p-6"
            >
              <h3 className="font-bold text-text-heading mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-text-sub">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
