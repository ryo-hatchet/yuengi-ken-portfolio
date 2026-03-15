export default function PartyBoyPage() {
  return (
    <div className="min-h-screen bg-bg-main">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 bg-bg-dark overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[25vw] font-black text-white/[0.03] leading-none tracking-tighter whitespace-nowrap">
            PARTY
          </span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent" />
            <span className="text-xs font-mono tracking-[0.3em] text-text-sub uppercase">
              mascot character
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>

          {/* Character placeholder */}
          <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-2xl">
            <span className="text-7xl sm:text-9xl select-none">🎉</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
            パーティーボーイ
          </h1>
          <p className="font-mono text-sm tracking-[0.25em] text-metallic sm:text-base mb-6">
            PARTY BOY
          </p>
          <p className="text-lg text-metallic leading-relaxed max-w-2xl mx-auto">
            遊宴技研の公式マスコットキャラクター。
            <br />
            人が集まるところに必ず現れ、遊びの火を灯す存在。
          </p>
        </div>
      </section>

      {/* Profile */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-px bg-accent" />
            <h2 className="text-2xl font-black text-text-heading tracking-tight">
              Profile
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-metallic/30">
            {[
              { label: "名前", value: "パーティーボーイ" },
              { label: "英名", value: "Party Boy" },
              { label: "所属", value: "遊宴技研" },
              { label: "役割", value: "マスコットキャラクター" },
              { label: "好きなこと", value: "人が集まること、お祭り、新しい遊び" },
              { label: "特技", value: "場を盛り上げること" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-bg-main p-6 group hover:bg-bg-card transition-colors duration-300"
              >
                <span className="font-mono text-[10px] tracking-wider text-accent uppercase">
                  {item.label}
                </span>
                <p className="font-bold text-text-heading mt-1 text-[15px]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 sm:py-28 bg-bg-card">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-px bg-accent" />
            <h2 className="text-2xl font-black text-text-heading tracking-tight">
              About Party Boy
            </h2>
          </div>

          <div className="space-y-5 text-text-main leading-[1.9] text-[15px]">
            <p>
              パーティーボーイは、遊宴技研の理念「人が集まるところに、遊びを発明する」を体現するマスコットキャラクターです。
            </p>
            <p>
              祭りの夜にも、公園の午後にも、ビルの屋上にも——人が集まる場所には必ずパーティーボーイの姿があります。
              誰よりも先に遊びはじめ、誰よりも楽しそうに笑い、気づけばまわりの人も巻き込んで、場を遊びの渦に変えてしまう。
            </p>
            <p className="text-text-heading font-semibold">
              「遊びは贅沢じゃない、インフラだ！」が口癖。
            </p>
            <p>
              遊宴技研のイベントやプロジェクトに登場し、テクノロジーと遊びの架け橋となる存在として活動しています。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
