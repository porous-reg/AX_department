import React from "react";
import { Language } from "../types";

interface FacultyMember {
  ko: string;
  en: string;
  img: string;
  website?: string;
  isChair?: boolean;
}

interface FacultyGroup {
  title: {
    ko: string;
    en: string;
  };
  members: FacultyMember[];
}

const coreFaculty: FacultyMember[] = [
  {
    ko: "유승화",
    en: "Seunghwa Ryu",
    isChair: true,
    img: "/images/faculty/full_time/유승화.png",
    website: "https://sites.google.com/site/seunghwalab/",
  },
  {
    ko: "권태혁",
    en: "Tae-Hyuk Kwon",
    img: "/images/faculty/full_time/권태혁.jpg",
    website: "http://kwon.kaist.ac.kr",
  },
  {
    ko: "문일철",
    en: "Il-Chul Moon",
    img: "/images/faculty/full_time/문일철.jpeg",
    website: "https://aai.kaist.ac.kr/",
  },
  {
    ko: "이익진",
    en: "Ikjin Lee",
    img: "/images/faculty/full_time/이익진.jpg",
    website: "http://idol.kaist.ac.kr/",
  },
];

const adjunctFacultyGroups: FacultyGroup[] = [
  {
    title: { ko: "기계", en: "Mechanical Engineering" },
    members: [
      {
        ko: "김산하",
        en: "김산하",
        img: "/images/faculty/adjunct/김산하.jpg",
        website: "https://amselab.kaist.ac.kr/",
      },
      {
        ko: "이승철",
        en: "이승철",
        img: "/images/faculty/adjunct/이승철.jpg",
        website: "https://iailab.kaist.ac.kr/",
      },
      {
        ko: "김현진",
        en: "김현진",
        img: "/images/faculty/adjunct/김현진.jpg",
        website: "http://cvbml.kaist.ac.kr/",
      },
      {
        ko: "오일권",
        en: "오일권",
        img: "/images/faculty/adjunct/오일권.jpg",
        website: "https://srim.kaist.ac.kr/",
      },
      {
        ko: "박인규",
        en: "박인규",
        img: "/images/faculty/adjunct/박인규.jpg",
        website: "http://mint.kaist.ac.kr/",
      },
      {
        ko: "이정철",
        en: "이정철",
        img: "/images/faculty/adjunct/이정철.jpg",
        website: "http://mnil.kaist.ac.kr/",
      },
      {
        ko: "구승범",
        en: "구승범",
        img: "/images/faculty/adjunct/구승범.jpg",
        website: "https://mskbiodyn.kaist.ac.kr/",
      },
      {
        ko: "경기욱",
        en: "경기욱",
        img: "/images/faculty/adjunct/경기욱.jpg",
        website: "http://irobot.kaist.ac.kr/",
      },
      {
        ko: "김성수",
        en: "김성수",
        img: "/images/faculty/adjunct/김성수.jpeg",
        website: "http://mdam.kaist.ac.kr/",
      },
      {
        ko: "김영진",
        en: "김영진",
        img: "/images/faculty/adjunct/김영진.jpg",
        website: "http://upm2.kaist.ac.kr/",
      },
      {
        ko: "공경철",
        en: "공경철",
        img: "/images/faculty/adjunct/공경철.jpg",
        website: "http://robotics.kaist.ac.kr/",
      },
      {
        ko: "윤국진",
        en: "윤국진",
        img: "/images/faculty/adjunct/윤국진.jpg",
        website: "http://vi.kaist.ac.kr/",
      },
      {
        ko: "윤용진",
        en: "윤용진",
        img: "/images/faculty/adjunct/윤용진.jpg",
        website: "https://jdl.kaist.ac.kr/",
      },
      {
        ko: "유홍기",
        en: "유홍기",
        img: "/images/faculty/adjunct/유홍기.avif",
        website: "http://boom.kaist.ac.kr/",
      },
      {
        ko: "황준식",
        en: "Joonsik Hwang",
        img: "/images/faculty/adjunct/황준식.png",
        website: "https://ftpl.kaist.ac.kr/home",
      },
      {
        ko: "이봉재",
        en: "이봉재",
        img: "/images/faculty/adjunct/이봉재.png",
        website: "https://trad.kaist.ac.kr/",
      },
      {
        ko: "남영석",
        en: "남영석",
        img: "/images/faculty/adjunct/남영석.avif",
        website: "https://mel.kaist.ac.kr/",
      },
    ],
  },
  {
    title: { ko: "산업공학", en: "Industrial Engineering" },
    members: [
      {
        ko: "김현정",
        en: "김현정",
        img: "/images/faculty/adjunct/김현정.jpg",
        website: "https://msslab.kaist.ac.kr/",
      },
      {
        ko: "김희영",
        en: "김희영",
        img: "/images/faculty/adjunct/김희영.png",
        website: "https://istat.kaist.ac.kr/",
      },
      {
        ko: "박진규",
        en: "박진규",
        img: "/images/faculty/adjunct/박진규.jpg",
        website: "https://ilp.kaist.ac.kr/sub0303/view/id/49",
      },
      {
        ko: "박찬영",
        en: "박찬영",
        img: "/images/faculty/adjunct/박찬영.jpg",
        website: "https://dsail.kaist.ac.kr/",
      },
      {
        ko: "송호승",
        en: "송호승",
        img: "/images/faculty/adjunct/송호승.jpg",
        website: "https://hoseungs.github.io/",
      },
      {
        ko: "송환준",
        en: "송환준",
        img: "/images/faculty/adjunct/송환준.png",
        website: "https://disl-lab.github.io/",
      },
      {
        ko: "이종석",
        en: "이종석",
        img: "/images/faculty/adjunct/이종석.jpg",
        website: "http://scholar.google.com/citations?user=7BxzwPQAAAAJ&hl=en",
      },
      {
        ko: "홍기혁",
        en: "홍기혁",
        img: "/images/faculty/adjunct/홍기혁.webp",
        website: "https://www.kihyukhong.com/",
      },
    ],
  },
  {
    title: { ko: "건설환경", en: "Civil & Environmental" },
    members: [
      {
        ko: "홍정욱",
        en: "Jung-Wuk Hong",
        img: "/images/faculty/adjunct/홍정욱.png",
        website: "http://aaml.kaist.ac.kr/",
      },
      {
        ko: "김재홍",
        en: "김재홍",
        img: "/images/faculty/adjunct/김재홍.jpg",
        website: "http://concrete.kaist.edu/",
      },
      {
        ko: "한동훈",
        en: "Albert Tonghoon Han",
        img: "/images/faculty/adjunct/한동훈.jpg",
        website: "http://plasc2.kaist.ac.kr/",
      },
      {
        ko: "인소영",
        en: "Soh Young In",
        img: "/images/faculty/adjunct/인소영.jpg",
        website: "http://sohyoung-in.com/",
      },
      {
        ko: "임리사",
        en: "Lisa Lim",
        img: "/images/faculty/adjunct/임리사.png",
        website: "http://healthdesign.kaist.ac.kr/",
      },
      {
        ko: "명재욱",
        en: "Jaewook Myung",
        img: "/images/faculty/adjunct/명재욱.png",
        website: "http://sites.google.com/view/withlab",
      },
      {
        ko: "여화수",
        en: "Hwasoo Yeo",
        img: "/images/faculty/adjunct/여화수.jpg",
        website: "http://aimobility.kaist.ac.kr/",
      },
      {
        ko: "이진우",
        en: "Jinwoo Lee",
        img: "/images/faculty/adjunct/이진우.jpg",
        website: "http://lee.kaist.ac.kr/",
      },
      {
        ko: "김진수",
        en: "Jinsoo Kim",
        img: "/images/faculty/adjunct/김진수.jpg",
        website: "http://sites.google.com/view/climatesystem/",
      },
    ],
  },
  {
    title: { ko: "경영", en: "Business" },
    members: [
      {
        ko: "이철호",
        en: "이철호",
        img: "/images/faculty/adjunct/이철호.jpg",
        website: "http://sites.google.com/view/irontigerlee-kaist",
      },
      {
        ko: "김형철",
        en: "김형철",
        img: "/images/faculty/adjunct/김형철.png",
      },
      {
        ko: "정승원",
        en: "정승원",
        img: "/images/faculty/adjunct/정승원.jpg",
        website: "https://www.eugenejeong.com/",
      },
    ],
  },
  {
    title: { ko: "모빌리티", en: "Mobility" },
    members: [
      {
        ko: "공승현",
        en: "공승현",
        img: "/images/faculty/adjunct/공승현.jpg",
        website: "http://ave.kaist.ac.kr/",
      },
      {
        ko: "금동석",
        en: "금동석",
        img: "/images/faculty/adjunct/금동석.jpg",
        website: "http://axelab.kaist.ac.kr/",
      },
      {
        ko: "김인희",
        en: "김인희",
        img: "/images/faculty/adjunct/김인희.jpg",
        website: "http://inhi.kim/",
      },
      {
        ko: "안승영",
        en: "안승영",
        img: "/images/faculty/adjunct/안승영.jpg",
        website: "http://emc.kaist.ac.kr/",
      },
      {
        ko: "이윤구",
        en: "이윤구",
        img: "/images/faculty/adjunct/이윤구.jpg",
        website: "https://bsl.kaist.ac.kr/",
      },
    ],
  },
  {
    title: { ko: "신소재", en: "Materials Science" },
    members: [
      {
        ko: "홍승범",
        en: "홍승범",
        img: "/images/faculty/adjunct/홍승범.jpg",
        website: "http://mii.kaist.ac.kr/",
      },
      {
        ko: "서동화",
        en: "서동화",
        img: "/images/faculty/adjunct/서동화.jpg",
        website: "https://sites.google.com/view/seo-research-group",
      },
      {
        ko: "김동훈",
        en: "김동훈",
        img: "/images/faculty/adjunct/김동훈.jpg",
        website: "https://caim.kaist.ac.kr/",
      },
    ],
  },
  {
    title: { ko: "문화기술", en: "Culture Technology" },
    members: [
      {
        ko: "우운택",
        en: "Woontack Woo",
        img: "/images/faculty/adjunct/우운택.jpg",
        website: "http://uvrlab.org/",
      },
    ],
  },
  {
    title: {
      ko: "생명화학공학과",
      en: "Chemical and Biomolecular Engineering",
    },
    members: [
      {
        ko: "김현욱",
        en: "Hyun Uk Kim",
        img: "/images/faculty/adjunct/김현욱.jpg",
        website: "https://sbml.kaist.ac.kr/",
      },
      {
        ko: "이상엽",
        en: "이상엽",
        img: "/images/faculty/adjunct/이상엽.jpg",
        website: "http://mbel.kaist.ac.kr/",
      },
      {
        ko: "김지한",
        en: "김지한",
        img: "/images/faculty/adjunct/김지한.jpg",
        website: "http://molsim.kaist.ac.kr/",
      },
    ],
  },
  {
    title: {
      ko: "디지털인문사회과학부",
      en: "Digital Humanities and Social Sciences",
    },
    members: [
      {
        ko: "정두영",
        en: "정두영",
        img: "/images/faculty/adjunct/정두영.png",
      },
      {
        ko: "우동현",
        en: "우동현",
        img: "/images/faculty/adjunct/우동현.jpg",
        website: "https://sites.google.com/view/thenlab",
      },
    ],
  },
  {
    title: {
      ko: "물리",
      en: "Physics",
    },
    members: [
      {
        ko: "안재욱",
        en: "안재욱",
        img: "/images/faculty/adjunct/안재욱.png",
        website: "http://qcl.kaist.ac.kr/",
      },
    ],
  },
  {
    title: {
      ko: "생물",
      en: "Biological Sciences",
    },
    members: [
      {
        ko: "조병관",
        en: "조병관",
        img: "/images/faculty/adjunct/조병관.png",
        website: "http://cholab.or.kr/",
      },
    ],
  },
];

const People: React.FC<{ lang: Language; title: string }> = ({ lang }) => {
  const renderMemberCard = (member: FacultyMember, roleLabel: string) => {
    const cardContent = (
      <>
        <div className="aspect-[4/5] bg-slate-50 rounded-2xl mb-4 flex items-end justify-center overflow-hidden border border-slate-100 group-hover:border-[#004191] transition-all relative">
          <img
            src={member.img}
            alt={member.en}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {member.isChair && (
            <div className="absolute top-2 left-2 bg-blue-900/80 text-white text-[11px] font-medium px-2 py-1 rounded-full uppercase tracking-widest">
              Chair
            </div>
          )}
          <div className="absolute top-3 right-3 w-2 h-2 bg-[#004191] rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
        </div>
        <p className="font-bold text-slate-100 mb-1 min-h-[28px] text-lg">
          {member.ko}
        </p>
        <p className="text-[10px] text-[#004191] font-black tracking-widest uppercase">
          {roleLabel}
        </p>
      </>
    );

    if (member.website && member.website !== "#") {
      return (
        <a
          key={member.ko}
          href={member.website}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          {cardContent}
        </a>
      );
    }

    return (
      <div key={member.ko} className="group block">
        {cardContent}
      </div>
    );
  };

  return (
    <section className="pt-16 pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] glass-card">
      <div className="space-y-16">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-black text-slate-100 mb-2">
              {lang === "ko" ? "중점교원" : "Core Faculty"}
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-28 gap-y-28">
            {coreFaculty.map((member) =>
              renderMemberCard(
                member,
                member.isChair
                  ? lang === "ko"
                    ? "중점교원, 학과장"
                    : "Core Faculty, Chair"
                  : lang === "ko"
                    ? "중점교원"
                    : "Core Faculty"
              )
            )}
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-black text-slate-100 mb-2">
              {lang === "ko" ? "겸임교수" : "Adjunct Faculty"}
            </h2>
          </div>

          <div className="space-y-8">
            {adjunctFacultyGroups.map((group) => (
              <div
                key={group.title.ko}
                className="rounded-[2rem] border border-slate-800 bg-slate-950/70 p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-6 w-1 rounded-full bg-[#004191]" />
                  <h3 className="text-lg font-black text-slate-100 tracking-tight">
                    {lang === "ko" ? group.title.ko : group.title.en}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-16">
                  {group.members.map((member) =>
                    renderMemberCard(
                      member,
                      lang === "ko" ? "겸임교수" : "Adjunct Faculty"
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;
