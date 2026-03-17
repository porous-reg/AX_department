import React, { useContext } from "react";
import { LanguageContext } from "../App";

const IntroDiagram: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const layers = [
    {
      title: lang === "ko" ? "AI-Native 컴퓨팅 기초 역량" : "AI-Native Computing Foundation",
      gradient: "from-[#0a0a0a] to-[#0f172a]",
    },
    {
      title: lang === "ko" ? "수학적·원리 기반 설계 역량" : "Mathematical & Principle-Based Design",
      gradient: "from-[#0f172a] to-[#1e3a8a]",
    },
    {
      title: lang === "ko" ? "AI 이론 및 알고리즘" : "AI Theory & Algorithms",
      gradient: "from-[#1e3a8a] to-[#3b82f6]",
    },
    {
      title: lang === "ko" ? "AI 시스템 및 운영 기술" : "AI Systems & Operations",
      gradient: "from-[#3b82f6] to-[#8b5cf6]",
    },
    {
      title: lang === "ko" ? "차세대 AI 기술" : "Next-Generation AI",
      gradient: "from-[#8b5cf6] to-[#c084fc]",
    },
    {
      title: lang === "ko" ? "응용 및 도메인 적용" : "Domain Applications",
      gradient: "from-[#c084fc] to-[#e879f9]",
    },
    {
      title: lang === "ko" ? "인간중심 AI 설계" : "Human-Centered AI Design",
      gradient: "from-[#e879f9] to-[#fbcfe8]",
      textDark: true,
    },
  ];

  return (
    <section className="pt-56 bg-[#0a0a0a] glass-card">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Header */}
        <div className="mb-16">
          <div className="inline-block text-sm font-bold tracking-[0.2em] text-violet-400 mb-4">
            KAIST AX DEPARTMENT
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-100">
            <span className="text-violet-400 text-gradient">AI-Native</span>{" "}
            {lang === "ko"
              ? "핵심 인재 양성을 위한 교육 체계"
              : "Education System for Future Leaders"}
          </h2>
          <p className="text-slate-400 max-w-4xl mx-auto text-sm md:text-base">
            {lang === "ko"
              ? "AI를 단순 활용하는 수준을 넘어, 초거대 AI 자체를 설계·고도화·운영할 수 있는 AI-Native 핵심 인재를 양성합니다."
              : "Beyond simply using AI, we cultivate AI-Native talents capable of designing, advancing, and operating Foundation AI systems."}
          </p>
        </div>

        {/* Pyramid */}
        <div className="relative flex justify-center mb-20">
            <div
                className="relative w-full max-w-2xl aspect-[4/3] overflow-hidden drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                style={{
                clipPath: "polygon(42% 0%, 58% 0%, 100% 100%, 0% 100%)",
                }}
            >
                {layers.reverse().map((layer, index, arr) => {
                    const total = arr.length;
                    const heightPercent = 100 / total;
                    const ratio = (index) / total;
                    const usableWidth = 16 + ratio * (100 - 16);

                    return (
                        <div
                        key={index}
                        className={`flex items-center justify-center text-center bg-gradient-to-r ${layer.gradient}
                        ${layer.textDark ? "text-slate-900" : "text-slate-100"} font-bold text-[9px] md:text-sm
                        ${index !== 0 ? "border-t-[1px] md:border-t-[2px] border-black/40" : ""}`}
                        style={{ height: `${heightPercent}%` }}
                        >
                            <div
                                className="mx-auto whitespace-normal break-words leading-tight"
                                style={{ maxWidth: `${usableWidth}%` }}>
                                {layer.title}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Core Competencies */}
        <div className="mb-16">
          <h3 className="inline-block text-sm font-bold tracking-[0.2em] text-cyan-400 mb-8">
            {lang === "ko" ? "AI-NATIVE 인재상 — 핵심 역량" : "AI-NATIVE CORE COMPETENCIES"}
          </h3>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              lang === "ko"
                ? { title: "AI 이론 설계 능력", desc: "AI 원리를 깊이 이해하고 새로운 딥러닝 모델 설계" }
                : { title: "AI Design Capability", desc: "Deep understanding of AI principles and designing novel models" },

              lang === "ko"
                ? { title: "초거대 시스템 구축", desc: "초거대 AI 인프라 최적화 및 분산 학습 시스템 운영" }
                : { title: "System Engineering", desc: "Foundation AI infra optimization & distributed systems" },

              lang === "ko"
                ? { title: "차세대 기술 리더", desc: "LLM, 에이전틱 AI 등 파운데이션 모델 기술 선도" }
                : { title: "Next-Generation AI", desc: "Leading Innovation in LLM and Agentic AI" },

              lang === "ko"
                ? { title: "산업적 도메인 응용", desc: "산업 및 공공 환경 특화 AX 설계 및 실제 문제 해결" }
                : { title: "AX Domain Application", desc: "Specialized AX design & problem solving across industries" },

              lang === "ko"
                ? { title: "책임 있는 AI 실현", desc: "인간 중심 철학과 보안·윤리를 내재화한 설계" }
                : { title: "Responsible AI", desc: "Design internalizing human-centered philosophy, ethics, & security" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 shadow-sm hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="text-violet-400 text-gradient font-extrabold text-xl mb-3">
                  {idx + 1}
                </div>
                <h4 className="font-bold mb-2 text-sm text-slate-100">{item.title}</h4>
                <p className="text-xs text-slate-400 whitespace-normal break-keep">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div className="bg-gradient-to-r from-[#0f172a] via-[#1e1b4b] to-[#4c1d95] text-slate-100 p-10 rounded-2xl shadow-[0_0_25px_rgba(139,92,246,0.3)] border border-violet-500/20">
          <div className="text-xs tracking-widest text-violet-300 mb-3 font-semibold">
            VISION
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
            {lang === "ko"
              ? "세상을 바꾸는 AI 혁신, 그 중심에 AX가 있습니다."
              : "AI Innovation that Changes the World, Centered at AX"}
          </h3>
          <p className="max-w-3xl mx-auto text-sm text-slate-300">
            {lang === "ko"
              ? "기존 전산학 중심 교육에서 뛰어넘어, 초거대 AI 중심의 특화 교육과 산학 협력을 통해 파괴적 혁신을 주도합니다."
              : "Leaping beyond traditional CS education, we lead disruptive innovation through specialized Foundation AI curriculum and industry collaboration."}
          </p>
        </div>

      </div>
    </section>
  );
};

export default IntroDiagram;