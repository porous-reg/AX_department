import React, { useContext } from "react";
import { LanguageContext } from "../App";

type Course = {
  code: string;
  name: { ko: string; en: string };
  type: "Required" | "Elective";
};

type Track = {
  id: string;
  category: { ko: string; en: string };
  courses: Course[];
};

const tracks: Track[] = [
  {
    id: "data_content",
    category: { ko: "Data & Content", en: "Data & Content" },
    courses: [
      { code: "IE.20041", name: { ko: "공학통계 I", en: "Engineering Statistics I" }, type: "Required" },
      { code: "IE.20060", name: { ko: "데이터 구조 및 분석", en: "Data Structure and Analysis" }, type: "Required" },
      { code: "ID.20019", name: { ko: "컴퓨터응용디자인", en: "Computer-Aided Design" }, type: "Required" },
      { code: "CS.40700", name: { ko: "인공지능 개론", en: "Introduction to AI" }, type: "Elective" },
      { code: "CS.30706", name: { ko: "기계학습", en: "Machine Learning" }, type: "Elective" },
      { code: "IE.30031", name: { ko: "OR : 최적화", en: "OR: Optimization" }, type: "Elective" },
      { code: "IE.30043", name: { ko: "통계적 기계학습", en: "Statistical Machine Learning" }, type: "Elective" },
      { code: "ID.30011", name: { ko: "소프트웨어프로토타이핑", en: "Software Prototyping" }, type: "Elective" },
      { code: "ID.49902", name: { ko: "미래디자인:AI와 사회", en: "Future Design: AI and Society" }, type: "Elective" },
      { code: "CTP.40045", name: { ko: "증강현실", en: "Augmented Reality" }, type: "Elective" },
    ],
  },
  {
    id: "physical_mfg",
    category: { ko: "Physical & Mfg", en: "Physical & Mfg" },
    courses: [
      { code: "IE.20051", name: { ko: "제조프로세스 혁신", en: "Manufacturing Process Innovation" }, type: "Required" },
      { code: "CS.40700", name: { ko: "인공지능 개론", en: "Introduction to AI" }, type: "Elective" },
      { code: "CS.30706", name: { ko: "기계학습", en: "Machine Learning" }, type: "Elective" },
      { code: "ME.30040", name: { ko: "공학설계", en: "Engineering Design" }, type: "Elective" },
      { code: "ME.30070", name: { ko: "재료와 가공의 이해", en: "Understanding Materials and Processing" }, type: "Elective" },
      { code: "IE.30031", name: { ko: "OR : 최적화", en: "OR: Optimization" }, type: "Elective" },
      { code: "ME.40058", name: { ko: "신호 및 영상처리를 위한 프로그래밍", en: "Programming for Signal and Image Processing" }, type: "Elective" },
      { code: "ME.40059", name: { ko: "시각지능개론", en: "Introduction to Visual Intelligence" }, type: "Elective" },
      { code: "ME.40062", name: { ko: "자동제어", en: "Automatic Control" }, type: "Elective" },
    ],
  },
  {
    id: "bio_materials",
    category: { ko: "Bio & Materials", en: "Bio & Materials" },
    courses: [
      { code: "IE.20060", name: { ko: "데이터 구조 및 분석", en: "Data Structure and Analysis" }, type: "Required" },
      { code: "MS.20011", name: { ko: "신소재과학개론", en: "Introduction to Materials Science" }, type: "Required" },
      { code: "BiS.20000", name: { ko: "바이오 공학개론", en: "Introduction to Bioengineering" }, type: "Required" },
      { code: "CS.40700", name: { ko: "인공지능 개론", en: "Introduction to AI" }, type: "Elective" },
      { code: "CS.30706", name: { ko: "기계학습", en: "Machine Learning" }, type: "Elective" },
      { code: "BiS.33002", name: { ko: "바이오정보처리", en: "Bio-information Processing" }, type: "Elective" },
      { code: "MS.30060", name: { ko: "소재의 기계적 물성 및 역학", en: "Mechanical Properties and Mechanics of Materials" }, type: "Elective" },
      { code: "CBE.30041", name: { ko: "공정모사와 제어", en: "Process Simulation and Control" }, type: "Elective" },
      { code: "CoE.49901", name: { ko: "스마트 융합특강<단백질과 인공지능>", en: "Smart Convergence Special Topic <Protein and AI>" }, type: "Elective" },
      { code: "CBE.49900", name: { ko: "생명화학공학특강<AI를 이용한 생화공 문제 해결>", en: "CBE Special Topic: Solving CBE Problems using AI" }, type: "Elective" },
      { code: "BCS.40010", name: { ko: "생체 데이터분석 및 모델링 실험", en: "Biological Data Analysis and Modeling Lab" }, type: "Elective" },
    ],
  },
  {
    id: "sustainability",
    category: { ko: "Sustainability", en: "Sustainability" },
    courses: [
      { code: "CE.20012", name: { ko: "환경과 지속가능성 개론", en: "Introduction to Environment and Sustainability" }, type: "Required" },
      { code: "CE.20030", name: { ko: "지반공학개론", en: "Introduction to Geotechnical Engineering" }, type: "Elective" },
      { code: "CE.20050", name: { ko: "스마트시티와 디지털 인프라스트럭쳐 개론", en: "Intro to Smart City and Digital Infrastructure" }, type: "Required" },
      { code: "CS.40700", name: { ko: "인공지능 개론", en: "Introduction to AI" }, type: "Elective" },
      { code: "CS.30706", name: { ko: "기계학습", en: "Machine Learning" }, type: "Elective" },
      { code: "CE.30050", name: { ko: "모빌리티시스템공학개론", en: "Intro to Mobility Systems Engineering" }, type: "Elective" },
      { code: "CE.40075", name: { ko: "자원순환사회를 위한 폐기물관리", en: "Waste Management for Resource Cycling Society" }, type: "Elective" },
      { code: "CE.49903", name: { ko: "건설 및 환경공학 특강<기후 시스템 모델링>", en: "CEE Special Topic: Climate System Modeling" }, type: "Elective" },
      { code: "GGS.50004", name: { ko: "기후변화의 과학", en: "Science of Climate Change" }, type: "Elective" },
      { code: "GGS.50021", name: { ko: "글로벌 환경문제 통합평가론", en: "Integrated Assessment of Global Environmental Problems" }, type: "Elective" },
      { code: "GGS.50023", name: { ko: "기후 및 환경보건 연구방법론", en: "Climate & Environmental Health Research Methods" }, type: "Elective" },
      { code: "GGS.50030", name: { ko: "바이오산업과 녹색성장", en: "Bioindustry and Green Growth" }, type: "Elective" },
      { code: "GGS.50039", name: { ko: "지속가능 기술시스템을 위한 데이터 과학 방법론", en: "Data Science Methodology for Sustainable Tech Systems" }, type: "Elective" },
    ],
  },
];

const CourseListPage: React.FC = () => {
  const { lang, t } = useContext(LanguageContext);
  const education = t.education;

  const renderTable = (track: Track) => (
    <div key={track.id} className="mb-12">
      <h2 className="text-2xl font-black text-[#0b2a5b] mb-6 flex items-center gap-4">
        <span className="w-2 h-8 bg-[#004191] rounded-full"></span>
        {lang === "ko" ? track.category.ko : track.category.en}
      </h2>
      <div className="border border-slate-200 rounded-3xl overflow-hidden shadow-md bg-[#0a0a0a] glass-card">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#0a0a0a] border-b border-slate-800/50">
              <tr>
                <th className="px-8 py-6 text-left text-[11px] font-black text-slate-400 uppercase tracking-widest w-1/4">
                  Code
                </th>
                <th className="px-8 py-6 text-left text-[11px] font-black text-slate-400 uppercase tracking-widest w-1/2">
                  Course Name
                </th>
                <th className="px-8 py-6 text-left text-[11px] font-black text-slate-400 uppercase tracking-widest w-1/4">
                  Type
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {track.courses.map((c, i) => (
                <tr
                  key={i}
                  className="hover:bg-slate-900/60 border border-slate-800/30 transition-colors group"
                >
                  <td className="px-8 py-5 text-sm font-black text-blue-900 font-mono tracking-tighter">
                    {c.code}
                  </td>
                  <td className="px-8 py-5 text-[15px] font-bold text-slate-200 leading-tight">
                    {lang === "ko" ? c.name.ko : c.name.en}
                  </td>
                  <td className="px-8 py-5 text-[10px]">
                    <span
                      className={`px-4 py-1.5 rounded-full font-black uppercase tracking-tighter ${c.type === "Required" ? "bg-blue-900 text-white" : "bg-slate-100 text-slate-400"}`}
                    >
                      {lang === "ko" 
                        ? (c.type === "Required" ? "전공필수" : "전공선택") 
                        : c.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-16">
      <div className="bg-[#050505] border-b border-slate-800/80 py-16 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-100 mb-4">
          {education.courseTitle}
        </h1>
        <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">
          {education.courseSubtitle}
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
           <p className="text-sm font-bold text-[#004191] bg-blue-50/10 px-6 py-4 rounded-xl border border-blue-900/20 shadow-sm inline-block">
             {lang === "ko" ? " * 타 전공 트랙의 교과목이라 하더라도 AX학과 졸업이수 학점으로 인정됨." : " * Courses from other major tracks are also recognized as credits for graduation in the AX department."}
           </p>
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {tracks.map(renderTable)}
        </div>
      </div>
    </div>
  );
};

export default CourseListPage;
