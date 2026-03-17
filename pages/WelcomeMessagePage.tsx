import React, { useContext } from "react";
import { LanguageContext } from "../App";
import { Quote } from "lucide-react";

const WelcomeMessagePage: React.FC = () => {
  const { lang, t } = useContext(LanguageContext);

  return (
    <div className="pt-24 min-h-screen bg-[#0a0a0a] glass-card">
      <div className="bg-[#050505] border-b border-slate-800/80 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-slate-100 mb-4">
          {lang === "ko" ? "학과장 인사말" : "Welcome Message"}
        </h1>
        <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">
          Chair Professor Seunghwa Ryu
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="animate-in fade-in duration-500">

          <div className="flex items-center gap-4 mb-14 text-violet-400 text-gradient">
            <Quote className="w-10 h-10 fill-blue-600" />
            <div className="h-px bg-blue-100 flex-grow"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-[73%] w-full">
              <div className="prose prose-blue max-w-none">
                <div className="text-lg text-slate-200 leading-[1.9] font-medium whitespace-pre-line space-y-6">
                  {t.intro.welcomeContent}
                </div>
              </div>
            </div>
            <div className="md:w-[27%] w-full flex flex-col items-center md:items-end">
              <div className="w-full max-w-sm aspect-[9/16] overflow-hidden rounded-2xl shadow-md group">
                <img
                  src="/images/faculty/full_time/유승화.png"
                  alt="Seunghwa Ryu"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-6 text-2xl font-black text-slate-100 text-center md:text-right">
                Seunghwa Ryu (유승화)
              </p>
              <p className="text-sm text-slate-500 font-bold tracking-widest uppercase text-center md:text-right mt-1">
                Chair, Dept of AX
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessagePage;
