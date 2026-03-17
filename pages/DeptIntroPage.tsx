import React, { useContext } from "react";
import { LanguageContext } from "../App";

const DeptIntroPage: React.FC = () => {
  const { lang, t } = useContext(LanguageContext);
  const intro = t.intro;
  const slideImages = [
    {
      src: "/images/intro-slides/ax_intro_slide-06.png",
      title: lang === "ko" ? "슬라이드 6" : "Slide 6",
    },
    {
      src: "/images/intro-slides/ax_intro_slide-07.png",
      title: lang === "ko" ? "슬라이드 7" : "Slide 7",
    },
    {
      src: "/images/intro-slides/ax_intro_slide-08.png",
      title: lang === "ko" ? "슬라이드 8" : "Slide 8",
    },
    {
      src: "/images/intro-slides/ax_intro_slide-09.png",
      title: lang === "ko" ? "슬라이드 9" : "Slide 9",
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#0a0a0a] glass-card">
      <div className="bg-[#050505] border-b border-slate-800/80 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-slate-100 mb-4">
          {lang === "ko" ? "학과 소개" : "Department Introduction"}
        </h1>
        <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">
          Building the Future of AI-Native Leaders
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div
          id="dept-overview"
          className="animate-in fade-in duration-500 scroll-mt-32"
        >
          <div className="mb-20 max-w-4xl">
            <h2 className="text-3xl font-black text-slate-100 mb-6">
              {intro.deptTitle}
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed font-medium whitespace-pre-line">
              {intro.deptContent}
            </p>
          </div>

          <div className="grid gap-8">
            {slideImages.map((slide) => (
              <div
                key={slide.src}
                className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/80 shadow-[0_0_24px_rgba(15,23,42,0.3)]"
              >
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="w-full h-auto object-contain bg-white"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeptIntroPage;
