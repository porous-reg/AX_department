import React, { useContext } from "react";
import { LanguageContext } from "../App";
import People from "../components/People";

const PeoplePage: React.FC = () => {
  const { lang, t } = useContext(LanguageContext);
  const title = t.nav.people;
  return (
    <div className="pt-24">
      <div className="bg-[#050505] border-b border-slate-800/80 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-slate-100 mb-4">
          {lang === 'ko' ? '구성원' : 'People'}
        </h1>
        <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">
          {lang === "ko"
            ? "중점교원 및 겸임교수진"
            : "Core and Adjunct Faculty"}
        </p>
      </div>
      <People lang={lang} title={title} />
    </div>
  );
};

export default PeoplePage;
