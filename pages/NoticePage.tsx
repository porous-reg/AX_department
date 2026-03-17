import React, { useContext } from "react";
import { LanguageContext } from "../App";

const NoticePage: React.FC = () => {
  const { lang, t } = useContext(LanguageContext);

  return (
    <div className="pt-24 pb-16">
      <div className="bg-[#050505] border-b border-slate-800/80 py-16 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-100 mb-4">
          {t.common.noticeTitle}
        </h1>
        <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">
          Department Announcements &amp; Updates
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a0a0a] glass-card rounded-[2.5rem] shadow-md border border-slate-200 p-8 sm:p-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-slate-200 leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-100 mb-4">
              2026학년도 가을학기 입시설명회 안내
            </h2>
            <div className="font-medium whitespace-pre-line text-[15px] text-slate-300">
              {`일시: 2026. 3. 18. (수) 17:30\n장소: KAIST 창의학습관(E11) 102호`}
            </div>
            <div className="mt-12 flex justify-center">
              <img
                src="/images/notice/260311_AX학과_입시설명회_포스터_v4.jpg"
                alt="2026 가을학기 AX학과 입시설명회 포스터"
                className="max-w-full md:max-w-2xl rounded-2xl shadow-lg border border-slate-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticePage;
