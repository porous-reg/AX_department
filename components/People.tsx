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
    title: { ko: "기계공학과", en: "Mechanical Engineering" },
    members: [
      {
        ko: "김산하",
        en: "Sanha Kim",
        img: "/images/faculty/adjunct/김산하.jpg",
        website: "https://amselab.kaist.ac.kr/",
      },
      {
        ko: "이승철",
        en: "Seungchul Lee",
        img: "/images/faculty/adjunct/이승철.jpg",
        website: "https://iailab.kaist.ac.kr/",
      },
      {
        ko: "김현진",
        en: "Hyunjin Kim",
        img: "/images/faculty/adjunct/김현진.jpg",
        website: "http://cvbml.kaist.ac.kr/",
      },
      {
        ko: "오일권",
        en: "Ilkwon Oh",
        img: "/images/faculty/adjunct/오일권.jpg",
        website: "https://srim.kaist.ac.kr/",
      },
      {
        ko: "박인규",
        en: "Inkyu Park",
        img: "/images/faculty/adjunct/박인규.jpg",
        website: "http://mint.kaist.ac.kr/",
      },
      {
        ko: "이정철",
        en: "Jeongcheol Lee",
        img: "/images/faculty/adjunct/이정철.jpg",
        website: "http://mnil.kaist.ac.kr/",
      },
      {
        ko: "구승범",
        en: "Seungbeom Koo",
        img: "/images/faculty/adjunct/구승범.jpg",
        website: "https://mskbiodyn.kaist.ac.kr/",
      },
      {
        ko: "경기욱",
        en: "Gi-Wook Kyung",
        img: "/images/faculty/adjunct/경기욱.jpg",
        website: "http://irobot.kaist.ac.kr/",
      },
      {
        ko: "김성수",
        en: "Seongsu Kim",
        img: "/images/faculty/adjunct/김성수.jpeg",
        website: "http://mdam.kaist.ac.kr/",
      },
      {
        ko: "김영진",
        en: "Youngjin Kim",
        img: "/images/faculty/adjunct/김영진.jpg",
        website: "http://upm2.kaist.ac.kr/",
      },
      {
        ko: "공경철",
        en: "Kyoungchul Kong",
        img: "/images/faculty/adjunct/공경철.jpg",
        website: "http://robotics.kaist.ac.kr/",
      },
      {
        ko: "윤국진",
        en: "Kuk-Jin Yoon",
        img: "/images/faculty/adjunct/윤국진.jpg",
        website: "http://vi.kaist.ac.kr/",
      },
      {
        ko: "윤용진",
        en: "Yongjin Yoon",
        img: "/images/faculty/adjunct/윤용진.jpg",
        website: "https://jdl.kaist.ac.kr/",
      },
      {
        ko: "유홍기",
        en: "Hongki Yoo",
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
        en: "Bongjae Lee",
        img: "/images/faculty/adjunct/이봉재.png",
        website: "https://trad.kaist.ac.kr/",
      },
      {
        ko: "남영석",
        en: "Youngseok Nam",
        img: "/images/faculty/adjunct/남영석.avif",
        website: "https://mel.kaist.ac.kr/",
      },
      {
        ko: "윤희택",
        en: "Heetaik Yoon",
        img: "/images/faculty/adjunct/윤희택.jpg",
        website: "https://smslab.kaist.ac.kr/",
      },
      {
        ko: "김지태",
        en: "Jitae Kim",
        img: "/images/faculty/adjunct/김지태.jpg",
        website: "https://sites.google.com/view/kimlabkaist",
      },
      {
        ko: "김진환",
        en: "Jinhwan Kim",
        img: "/images/faculty/adjunct/김진환.png",
        website: "https://morin.kaist.ac.kr/",
      },
      {
        ko: "김대겸",
        en: "Dae-Gyeom Kim",
        img: "/images/faculty/adjunct/김대겸.jpg",
        website: "https://fluid.kaist.ac.kr/",
      },
      {
        ko: "박용화",
        en: "Yonghwa Park",
        img: "/images/faculty/adjunct/박용화.jpg",
        website: "https://human.kaist.ac.kr/",
      },
      {
        ko: "이강택",
        en: "Kang-Taek Lee",
        img: "/images/faculty/adjunct/이강택.jpg",
        website: "https://www.ktlee.kaist.ac.kr/",
      },
    ],
  },
  {
    title: { ko: "산업공학과", en: "Industrial Engineering" },
    members: [
      {
        ko: "김현정",
        en: "Hyunjeong Kim",
        img: "/images/faculty/adjunct/김현정.jpg",
        website: "https://msslab.kaist.ac.kr/",
      },
      {
        ko: "김희영",
        en: "Heeyoung Kim",
        img: "/images/faculty/adjunct/김희영.png",
        website: "https://istat.kaist.ac.kr/",
      },
      {
        ko: "박진규",
        en: "Jinkyu Park",
        img: "/images/faculty/adjunct/박진규.jpg",
        website: "https://ilp.kaist.ac.kr/sub0303/view/id/49",
      },
      {
        ko: "박찬영",
        en: "Chanyoung Park",
        img: "/images/faculty/adjunct/박찬영.jpg",
        website: "https://dsail.kaist.ac.kr/",
      },
      {
        ko: "송호승",
        en: "Hoseung Song",
        img: "/images/faculty/adjunct/송호승.jpg",
        website: "https://hoseungs.github.io/",
      },
      {
        ko: "송환준",
        en: "Hwanjun Song",
        img: "/images/faculty/adjunct/송환준.png",
        website: "https://disl-lab.github.io/",
      },
      {
        ko: "이종석",
        en: "Jong-Seok Lee",
        img: "/images/faculty/adjunct/이종석.jpg",
        website: "http://scholar.google.com/citations?user=7BxzwPQAAAAJ&hl=en",
      },
      {
        ko: "홍기혁",
        en: "Kihyuk Hong",
        img: "/images/faculty/adjunct/홍기혁.webp",
        website: "https://www.kihyukhong.com/",
      },
    ],
  },
  {
    title: {
      ko: "건설및환경공학과",
      en: "Civil and Environmental Engineering",
    },
    members: [
      {
        ko: "홍정욱",
        en: "Jung-Wuk Hong",
        img: "/images/faculty/adjunct/홍정욱.png",
        website: "http://aaml.kaist.ac.kr/",
      },
      {
        ko: "김재홍",
        en: "Jaehong Kim",
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
      {
        ko: "정형조",
        en: "Hyung-Jo Jung",
        img: "/images/faculty/adjunct/정형조.jpg",
        website: "http://scaislab.kaist.ac.kr/",
      },
      {
        ko: "김영철",
        en: "Youngchul Kim",
        img: "/images/faculty/adjunct/김영철.jpg",
        website: "http://urbandesignlab.kaist.ac.kr/",
      },
      {
        ko: "부찬희",
        en: "Chanhee Boo",
        img: "/images/faculty/adjunct/부찬희.png",
        website: "http://sites.google.com/view/aemlab",
      },
    ],
  },
  {
    title: {
      ko: "경영공학부 (서울)",
      en: "Management Engineering (Seoul)",
    },
    members: [
      {
        ko: "최현수",
        en: "Hyunsoo Choi",
        img: "/images/faculty/adjunct/최현수.png",
        website: "http://sites.google.com/site/hschoi31/",
      },
      {
        ko: "신승훈",
        en: "Sean Seunghun Shin",
        img: "/images/faculty/adjunct/신승훈.png",
        website: "https://seanshin.com/",
      },
      {
        ko: "한진수",
        en: "Jin Soo Han",
        img: "/images/faculty/adjunct/한진수.jpg",
        website: "http://sites.google.com/view/jinsoohan",
      },
      {
        ko: "김민기",
        en: "Minki Kim",
        img: "/images/faculty/adjunct/김민기.jpg",
        website: "https://sites.google.com/site/minkikimquant/",
      },
      {
        ko: "김경국",
        en: "Kyoung-Kuk Kim",
        img: "/images/faculty/adjunct/김경국.png",
        website: "https://sites.google.com/site/catenoid/",
      },
      {
        ko: "신동혁",
        en: "Donghyuk Shin",
        img: "/images/faculty/adjunct/신동혁.jpg",
        website: "http://dshin32.github.io/",
      },
      {
        ko: "신은철",
        en: "Euncheol Shin",
        img: "/images/faculty/adjunct/신은철.png",
        website: "http://sites.google.com/site/euncheolshin00",
      },
      {
        ko: "백용욱",
        en: "Yongwook Baek",
        img: "/images/faculty/adjunct/백용욱.jpg",
      },
    ],
  },
  {
    title: {
      ko: "기술경영학부 (대전)",
      en: "Business and Technology Management (Daejeon)",
    },
    members: [
      {
        ko: "이철호",
        en: "Chul Ho Lee",
        img: "/images/faculty/adjunct/이철호.jpg",
        website: "http://sites.google.com/view/irontigerlee-kaist",
      },
      {
        ko: "김형철",
        en: "Hyungchul Kim",
        img: "/images/faculty/adjunct/김형철.png",
      },
      {
        ko: "정승원",
        en: "Seungwon (Eugene) Jeong",
        img: "/images/faculty/adjunct/정승원.jpg",
        website: "https://www.eugenejeong.com/",
      },
      {
        ko: "김지희",
        en: "Jihee Kim",
        img: "/images/faculty/adjunct/김지희.png",
        website: "http://www.jiheekim.net/",
      },
      {
        ko: "김륜희",
        en: "Ryunhee Kim",
        img: "/images/faculty/adjunct/김륜희.jpg",
        website:
          "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=1760398",
      },
      {
        ko: "한승헌",
        en: "Seungheon Han",
        img: "/images/faculty/adjunct/한승헌.png",
        website: "http://synosia.kaist.ac.kr/",
      },
      {
        ko: "이수진",
        en: "Sujin Lee",
        img: "/images/faculty/adjunct/이수진.jpg",
        website: "https://humaninnovation.kaist.ac.kr/",
      },
      {
        ko: "정현주",
        en: "Hyun Ju Jung",
        img: "/images/faculty/adjunct/정현주.jpg",
        website: "https://sites.google.com/view/hyun-ju-jung",
      },
      {
        ko: "엄지용",
        en: "Jiyong Eom",
        img: "/images/faculty/adjunct/엄지용.jpg",
        website: "https://kaistceps.quv.kr/",
      },
    ],
  },
  {
    title: {
      ko: "녹색성장지속가능대학원",
      en: "Graduate School of Green Growth and Sustainability",
    },
    members: [
      {
        ko: "윤보학",
        en: "Bohak Yoon",
        img: "/images/faculty/adjunct/윤보학.jpg",
        website: "https://yoongroup.github.io/",
      },
      {
        ko: "최하연",
        en: "Hayon Michelle Choi",
        img: "/images/faculty/adjunct/최하연.jpg",
        website: "https://sites.google.com/view/hchoi-lab",
      },
      {
        ko: "김지효",
        en: "Jihyo Kim",
        img: "/images/faculty/adjunct/김지효.jpg",
        website: "https://etp.kaist.ac.kr/",
      },
      {
        ko: "믹전해원",
        en: "Haewon C. McJeon",
        img: "/images/faculty/adjunct/믹전해원.webp",
        website: "https://kaist-iam.github.io/group/hmcjeon.html",
      },
      {
        ko: "최경록",
        en: "Kyoung Rok Choi",
        img: "/images/faculty/adjunct/최경록.jpg",
        website: "https://bigcats.kaist.ac.kr/",
      },
    ],
  },
  {
    title: {
      ko: "조천식모빌리티대학원",
      en: "Cho Chun Shik Graduate School of Mobility",
    },
    members: [
      {
        ko: "공승현",
        en: "Seunghyun Kong",
        img: "/images/faculty/adjunct/공승현.jpg",
        website: "http://ave.kaist.ac.kr/",
      },
      {
        ko: "금동석",
        en: "Dongseok Geum",
        img: "/images/faculty/adjunct/금동석.jpg",
        website: "http://axelab.kaist.ac.kr/",
      },
      {
        ko: "김인희",
        en: "Inhi Kim",
        img: "/images/faculty/adjunct/김인희.jpg",
        website: "http://inhi.kim/",
      },
      {
        ko: "안승영",
        en: "Seungyoung Ahn",
        img: "/images/faculty/adjunct/안승영.jpg",
        website: "http://emc.kaist.ac.kr/",
      },
      {
        ko: "이윤구",
        en: "Yungu Lee",
        img: "/images/faculty/adjunct/이윤구.jpg",
        website: "https://bsl.kaist.ac.kr/",
      },
    ],
  },
  {
    title: {
      ko: "신소재공학과",
      en: "Materials Science and Engineering",
    },
    members: [
      {
        ko: "홍승범",
        en: "Seungbeom Hong",
        img: "/images/faculty/adjunct/홍승범.jpg",
        website: "http://mii.kaist.ac.kr/",
      },
      {
        ko: "서동화",
        en: "Donghwa Seo",
        img: "/images/faculty/adjunct/서동화.jpg",
        website: "https://sites.google.com/view/seo-research-group",
      },
      {
        ko: "김동훈",
        en: "Donghoon Kim",
        img: "/images/faculty/adjunct/김동훈.jpg",
        website: "https://caim.kaist.ac.kr/",
      },
    ],
  },
  {
    title: {
      ko: "문화기술대학원",
      en: "Graduate School of Culture Technology",
    },
    members: [
      {
        ko: "우운택",
        en: "Woontack Woo",
        img: "/images/faculty/adjunct/우운택.jpg",
        website: "http://uvrlab.org/",
      },
      {
        ko: "윤상호",
        en: "Sangho Yoon",
        img: "/images/faculty/adjunct/윤상호.jpg",
        website: "https://hcitech.org/",
      },
      {
        ko: "이진준",
        en: "Jinjoon Lee",
        img: "/images/faculty/adjunct/이진준.jpg",
        website: "https://tx.kaist.ac.kr/",
      },
      {
        ko: "노준용",
        en: "Junyong Noh",
        img: "/images/faculty/adjunct/노준용.png",
        website: "https://vml.kaist.ac.kr/home",
      },
      {
        ko: "이성희",
        en: "Sung-Hee Lee",
        img: "/images/faculty/adjunct/이성희.png",
        website: "https://lava.kaist.ac.kr/",
      },
    ],
  },
  {
    title: {
      ko: "문술미래전략대학원",
      en: "Moon Soul Graduate School of Future Strategy",
    },
    members: [
      {
        ko: "김형준",
        en: "Hyung Jun Kim",
        img: "/images/faculty/adjunct/김형준.jpg",
        website: "https://melab.kaist.ac.kr/",
      },
    ],
  },
  {
    title: {
      ko: "융합인재학부",
      en: "School of Transdisciplinary Studies",
    },
    members: [
      {
        ko: "가현욱",
        en: "Hyun Wook Ka",
        img: "/images/faculty/adjunct/가현욱.jpg",
        website: "http://aailab.kaist.ac.kr/",
      },
    ],
  },
  {
    title: {
      ko: "산업디자인학과",
      en: "Industrial Design",
    },
    members: [
      {
        ko: "이탁연",
        en: "Takyeon Lee",
        img: "/images/faculty/adjunct/이탁연.jpg",
        website: "https://ai-experience-lab.github.io/",
      },
      {
        ko: "Andrea Bianchi",
        en: "Andrea Bianchi",
        img: "/images/faculty/adjunct/Andrea-Bianchi.jpg",
        website: "https://make.kaist.ac.kr/",
      },
      {
        ko: "남택진",
        en: "Tek-Jin Nam",
        img: "/images/faculty/adjunct/남택진.png",
        website: "https://cidr.kaist.ac.kr/",
      },
    ],
  },
  {
    title: {
      ko: "전기및전자공학부",
      en: "Electrical Engineering",
    },
    members: [
      {
        ko: "김용대",
        en: "Yongdae Kim",
        img: "/images/faculty/adjunct/김용대.jpg",
        website: "http://syssec.kaist.ac.kr/~yongdaek",
      },
      {
        ko: "원유집",
        en: "Youjip Won",
        img: "/images/faculty/adjunct/원유집.png",
        website: "https://oslab.kaist.ac.kr/",
      },
    ],
  },
  {
    title: {
      ko: "전산학부",
      en: "School of Computing",
    },
    members: [
      {
        ko: "김현우",
        en: "Hyunwoo Kim",
        img: "/images/faculty/adjunct/김현우.jpg",
        website: "http://hyunwoojkim.com/",
      },
      {
        ko: "조성호",
        en: "Sungho Jo",
        img: "/images/faculty/adjunct/조성호.jpg",
        website: "http://nmail.kaist.ac.kr/",
      },
      {
        ko: "오태현",
        en: "Taehyun Oh",
        img: "/images/faculty/adjunct/오태현.jpg",
        website: "https://ami.kaist.ac.kr/",
      },
      {
        ko: "한준",
        en: "Jun Han",
        img: "/images/faculty/adjunct/한준.jpg",
        website: "https://www.junhan.org/",
      },
    ],
  },
  {
    title: {
      ko: "디지털인문사회과학부",
      en: "Graduate School of Digital Humanities and Computational Social Sciences",
    },
    members: [
      {
        ko: "정두영",
        en: "Doo-Young Jung",
        img: "/images/faculty/adjunct/정두영.png",
      },
      {
        ko: "우동현",
        en: "Donghyun Woo",
        img: "/images/faculty/adjunct/우동현.jpg",
        website: "https://sites.google.com/view/thenlab",
      },
      {
        ko: "조성아",
        en: "Seonga Cho",
        img: "/images/faculty/adjunct/조성아.png",
        website: "https://sites.google.com/view/seongacho/home",
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
        en: "Sang Yup Lee",
        img: "/images/faculty/adjunct/이상엽.jpg",
        website: "http://mbel.kaist.ac.kr/",
      },
      {
        ko: "김지한",
        en: "Jihan Kim",
        img: "/images/faculty/adjunct/김지한.jpg",
        website: "http://molsim.kaist.ac.kr/",
      },
      {
        ko: "고동연",
        en: "Dong-Yeun Koh",
        img: "/images/faculty/adjunct/고동연.jpg",
        website: "https://mmml.kaist.ac.kr/",
      },
    ],
  },
  {
    title: {
      ko: "바이오및뇌공학과",
      en: "Bio and Brain Engineering",
    },
    members: [
      {
        ko: "이영석",
        en: "Young-suk Lee",
        img: "/images/faculty/adjunct/이영석.jpg",
        website: "https://young.kaist.ac.kr/",
      },
      {
        ko: "이관수",
        en: "Kwansoo Lee",
        img: "/images/faculty/adjunct/이관수.jpg",
        website: "https://synbi.kaist.ac.kr/",
      },
      {
        ko: "강형률",
        en: "Yul Kang",
        img: "/images/faculty/adjunct/강형률.png",
        website: "https://yulkanglab.org/",
      },
    ],
  },
  {
    title: {
      ko: "공학생물학대학원",
      en: "Graduate School of Engineering Biology",
    },
    members: [
      {
        ko: "김동혁",
        en: "Donghyuk Kim",
        img: "/images/faculty/adjunct/익명.jpg",
      },
      {
        ko: "조병관",
        en: "Byung-Kwan Cho",
        img: "/images/faculty/adjunct/조병관.png",
        website: "http://cholab.or.kr/",
      },
      {
        ko: "이선재",
        en: "Sun Jae Lee",
        img: "/images/faculty/adjunct/이선재.jpg",
        website: "https://sites.google.com/view/kaist-life-mining-lab/home",
      },
    ],
  },
  {
    title: {
      ko: "물리학과",
      en: "Physics",
    },
    members: [
      {
        ko: "안재욱",
        en: "Jaewook Ahn",
        img: "/images/faculty/adjunct/안재욱.png",
        website: "http://qcl.kaist.ac.kr/",
      },
      {
        ko: "한명준",
        en: "Myung-Joon Han",
        img: "/images/faculty/adjunct/한명준.png",
        website: "https://sites.google.com/site/myungjoonhan/",
      },
      {
        ko: "김동규",
        en: "Dong Kyu Kim",
        img: "/images/faculty/adjunct/김동규.png",
        website: "https://oqt.kaist.ac.kr/",
      },
      {
        ko: "박용근",
        en: "YongKeun Park",
        img: "/images/faculty/adjunct/박용근.webp",
        website: "https://bmokaist.wordpress.com/",
      },
    ],
  },
  {
    title: {
      ko: "수리과학과",
      en: "Mathematical Sciences",
    },
    members: [
      {
        ko: "백형렬",
        en: "Harry Hyungryul Baik",
        img: "/images/faculty/adjunct/백형렬.png",
        website: "https://sites.google.com/site/hrbaik85/",
      },
      {
        ko: "김재경",
        en: "Jae Kyoung Kim",
        img: "/images/faculty/adjunct/김재경.jpg",
        website: "https://mathsci.kaist.ac.kr/~jaekkim/",
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
          {lang === "ko" ? member.ko : member.en}
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
