import { TranslationContent } from "./types";

export const translations: Record<"ko" | "en", TranslationContent> = {
  ko: {
    nav: {
      home: "홈",
      intro: "소개",
      people: "구성원",
      admission: "입학",
      education: "교육",
      announcements: "공지",
    },
    hero: {
      title: "AX학과",
      subtitle: "AI-Native 리더를 육성합니다.",
      cta: "소개 바로가기",
    },
    intro: {
      welcomeTitle: "학과장 인사말",
      welcomeContent: `“현실 문제를 정의하고 해결하는 AI-Native 전문가를 양성합니다.”\n\nKAIST AI 단과대학 AX학과를 찾아주신 여러분을 진심으로 환영합니다.\n\n우리는 지금 AI 기술이 빠르게 확산되는 시대에 살고 있습니다.\n앞으로의 경쟁력은 단순한 활용을 넘어, 문제를 정의하고 이를 해결할 AI 솔루션을 설계하는 능력에서 결정될 것입니다.\n\nAX학과는 과학과 공학의 다양한 도메인 지식과 AI를 결합하여,\n실제 산업과 사회의 문제를 해결하는 인재 양성을 목표로 합니다.\n\n본 학과에서는\n· 제조, 콘텐츠, 바이오, 소재, 도시, 에너지, 경영 등 다양한 도메인과 AI를 연결하고\n· 데이터 기반 접근을 넘어 물리 기반·지식 기반 AI를 활용하며\n· 문제 정의부터 구현까지 이어지는 end-to-end 연구 수행 역량을 교육합니다.\n\n또한 AX학과는 AI컴퓨팅학과, AI시스템학과, AI미래학과와 협력하여\nAI 모델–시스템–응용이 연결된 통합 생태계를 구축하고 있습니다.\n\nKAIST AX학과는, AI를 통해 실제 변화를 만들어갈 여러분과 함께하고자 합니다.`,
      deptTitle: "학과 소개",
      deptContent: `AX학과는 AI+X 융합 인재를 육성하는 카이스트 AI대학 소속 응용학과입니다.\n\n데이터·콘텐츠 AI, 물리·제조 AI, 바이오·소재 AI, AI 지속가능성 등 4개의 특화 트랙을 기반으로, AI 기술을 산업·사회 문제 해결에 직접 적용하는 현장형 융합 인재를 양성합니다.\n\nAX 학과 출신 인재들은 제조업, 서비스업 전반의 AI 전환과 생산성 혁신을 주도할 것으로 기대되며, 한국이 강점을 가진 반도체, 자동차, 조선, 게임, 바이오 등 분야의 도메인 지식을 AI와 결합한 산업 특화형 전문가로 성장하게 됩니다. 해외 유수 대학들이 주로 AI 기초기술 교육에 집중하는 데 비해, KAIST AX학과는 산업별 특화 교육과정을 강조함으로써 차별화된 경쟁력을 확보하려는 포지션을 취하고 있습니다.`,
      objectivesTitle: "교육 목표",
      objectives: [
        {
          title: "AI 이론 및 알고리즘 중심 교육",
          desc: "전통적인 전산학 교육과 달리, AI 이론·수학·알고리즘을 중심으로 하는 특화 교육을 제공합니다.",
        },
        {
          title: "수학적·원리 기반 설계 역량 강화",
          desc: "AI 기술의 수학적 기반·논리 구조·작동 원리를 깊이 이해하고 설계할 수 있는 능력을 강화합니다.",
        },
        {
          title: "차세대 AI 기술 반영",
          desc: "LLM, 생성형 AI, 멀티모달 AI, 에이전틱 AI 등 최신 연구 성과를 커리큘럼에 적극 반영합니다.",
        },
        {
          title: "AI 시스템 및 운영 기술 역량 구축",
          desc: "MLOps, GPU 병렬처리, 분산 학습 등 초거대 AI 운영에 필수적인 시스템 소프트웨어 실전 역량을 강화합니다.",
        },
        {
          title: "응용 및 도메인 적용 역량 확보",
          desc: "AI 모델을 실제 산업·과학·공공 환경에 적용할 수 있는 응용 능력과 AI+X 기반 문제 해결 역량을 확보합니다.",
        },
        {
          title: "인간 중심·책임 기반 AI 설계 교육",
          desc: "AI가 인간과 상호작용하는 특성을 반영하여 책임 있는 설계 원리, AI 윤리 및 철학적 이해를 교육합니다.",
        },
        {
          title: "AI-Native 컴퓨팅 기초 역량 교육",
          desc: "데이터 구조, 소프트웨어 공학, 보안·프라이버시 등 AI-Native 인재를 위한 기초 컴퓨팅 역량 교육을 제공합니다.",
        },
      ],
    },
    admission: {
      title: "입학 안내",
      ugTitle: "학사과정 입학 안내",
      ugDesc:
        "KAIST 학부생은 전공선택 없이 무학과로 입학을 하고 있습니다.\n무학과 입학 후 2학기 때 AX 전공을 포함한 다양한 전공을 선택하고 있습니다.\n이에 대한 자세한 설명은 KAIST 입학처 홈페이지에서 제공하고 있습니다.",
      gradTitle: "대학원과정 입학 안내",
      gradDesc:
        "석사과정, 박사과정, (KAIST석사재학생) 석박사 통합과정, \n(KAIST학사재학생) 학·석박통합연계과정 신입생을 모집합니다.",
      gradSchedule1Title: "2026학년도 가을학기 입학 신입생 입학전형 일정표",
      gradSchedule1Items: [
        {
          category: "원서접수(서류제출 포함)",
          timeline: "2026. 03. 27(금) 10:00 \n~ 04. 07(화) 17:30",
          method:
            "KAIST 입시시스템 (https://gradapply.kaist.ac.kr)에서 지원서 작성 및 전형료 결제",
        },
        {
          category: "1단계 합격자 발표",
          timeline: "2026. 05. 14(목) 14:00 이후",
          method: "KAIST 입시시스템 (https://gradapply.kaist.ac.kr 합격자발표)",
        },

        {
          category: "2단계 전형(면접)",
          timeline: "2026. 05. 16(토) ~ 05. 26(화)",
          method:
            "개인별 2단계 전형 일정 및 장소 확인(입시시스템을 통하여 공지)",
        },
        {
          category: "최종합격자 발표",
          timeline: "2026. 06. 25(목) 14:00 이후",
          method:
            "KAIST 입시시스템 (https://gradapply.kaist.ac.kr 합격자 발표)",
        },
      ],
      gradSchedule2Title:
        "2026학년도 가을학기 입학 (KAIST 학사 재학생 대상)학·석박통합연계과정 \n및 (KAIST 석사과정 재학생 대상) 석사·박사학위통합과정 입학전형 일정표",
      gradSchedule2Items: [
        {
          category: "원서접수(서류제출 포함)",
          timeline: "2026. 04. 08(수) 10:00 \n~ 04. 14(화) 17:30",
          method:
            "KAIST 입시시스템 (https://gradapply.kaist.ac.kr)에서 지원서 작성 및 전형료 결제",
        },
        {
          category: "1단계 합격자 발표",
          timeline: "2026. 05. 14(목) 14:00 이후",
          method:
            "KAIST 입시시스템 (https://gradapply.kaist.ac.kr 합격자발표)\n개인별 2단계 전형 일정 및 장소 확인(입시시스템을 통하여 공지)",
        },
        {
          category: "2단계 전형(면접)",
          timeline: "2026. 05. 16(토) ~ 05. 26(화)",
          method: "-",
        },
        {
          category: "최종합격자 발표",
          timeline: "2026. 06. 25(목) 14:00 이후",
          method:
            "KAIST 입시시스템 (https://gradapply.kaist.ac.kr 합격자 발표)",
        },
      ],
      advisorTitle: "지도 교수 신청 관련 사항",
      advisorContent: [
        "국비로 입학한 학생은 AX 전공 모든 교수를 지도교수로 신청할 수 있습니다. 신청한 지도교수가 국비TO가 있고 학생지도를 희망할 경우 매칭이 됩니다.",
        "교수의 연구비에서 지원받는 KAIST 장학생으로 입학한 학생은 연구비 지원 교수만이 지도교수가 될 수 있습니다.",
        "KAIST프로그램 장학생은 KAIST프로그램 참여 교수만을 지도교수로 신청할 수 있습니다.",
        "일반 장학생은 AX 전공 모든 교수를 지도교수로 신청할 수 있습니다.",
      ],
      advisorTimingTitle: "지도교수 신청 시기",
      advisorTimingItems: [
        { course: "석사과정", timing: "최종 합격자 발표 및 석사 OT 이후 매칭" },
        {
          course: "박사과정",
          timing:
            "원서접수 전 매칭 \n(원서접수 전 지도예정교수 컨택하여 사전 협의 후 지원, 온라인 원서접수 시 지도예정교수 1명 입력 필수)",
        },
        {
          course: "재학생 석박사통합과정",
          timing:
            "원서접수 전 매칭 \n(원서접수 전 지도예정교수 컨택하여 사전 협의 후 지원, 온라인 원서접수 시 지도예정교수 1명 입력 필수)",
        },
        {
          course: "학·석박통합연계과정",
          timing:
            "원서접수 전 매칭 (원서접수 전 지도예정교수와 사전협의 후 지원)",
        },
      ],
      eligibilityTitle: "지원 자격",
      eligibility: [
        {
          course: "석사과정",
          criteria:
            "학사학위자 (혹은 입학시점까지 졸업이 가능한 학사 졸업예정자)",
        },
        {
          course: "박사과정",
          criteria:
            "석사학위자 (혹은 입학시점까지 졸업이 가능한 석사 졸업예정자)",
        },
        {
          course: "석박사 통합과정",
          criteria:
            "학사학위자 (혹은 입학시점까지 졸업이 가능한 학사 졸업예정자)",
        },
        {
          course: "(KAIST석사재학생) 석박사 통합과정",
          criteria:
            "한국과학기술원 석사과정을 1학기만 이수한 자 (2학기 이상 이수자는 자격 없음)",
        },
        {
          course: "(KAIST학사재학생) 학·석박통합연계과정",
          criteria:
            "1. 입시 기준일까지 3학기~4학기만 이수한 KAIST 학사과정 재학생 (5학기 이상 이수자는 자격 없음)\n2. 69학점 이상의 학점을 취득\n3. 누적 평점평균이 3.7 이상 (단, KAIST 소속으로 수행한 우수 연구실적을 제출하는 경우 성적제한 없음)",
        },
      ],
      categoriesTitle: "학생 구분",
      categories: [
        {
          type: "국비 장학생",
          desc: "학생 교육경비의 일부를 정부재원으로 지원하는 제도입니다.",
        },
        {
          type: "KAIST 장학생",
          desc: "학생 교육경비를 지도교수의 연구비에서 지원하는 제도로 입학 시 학생은 교육경비를 지원하는 교수의 지도학생이 되므로 교수의 전공에 따라 학생의 전공분야가 제한될 수 있습니다.",
        },
        {
          type: "일반 장학생",
          desc: "산업체/연구기관/국가기관/교육기관의 추천을 받아 추천기관이 교육비를 부담하는 제도입니다. 지원자는 소속 기관장으로부터 교육비 부담 및 추천 서류를 제출해야 합니다.",
        },
      ],
      admissionHome: "입학처 홈",
      admissionHomeDesc: "KAIST 입학처 메인 홈페이지를 방문하세요.",
      ugKorean: "학부 (한국인)",
      ugKoreanDesc: "한국인 학부 신입생 모집 안내입니다.",
      ugIntl: "학부 (외국인)",
      ugIntlDesc: "외국인 학부 신입생 모집 안내입니다.",
      readMore: "자세히 보기",
    },
    education: {
      title: "교육 과정",
      courseTitle: "교과목 안내",
      courseSubtitle: "AI-Native 리더를 위한 심화 교육과정",
      reqTitle: "이수 요건",
      reqDesc: "학위 이수를 위한 지침 및 기준입니다.",
      reqNotice: "* 아래 이수요건은 잠정적이며 변경될 수 있습니다.",
      ugSubtitle: "(2025학년도 이후 입학생 기준)",
      gradSubtitle: "2026학년도 이후 입학생 이수요건",
      ug: {
        sections: [
          {
            title: "졸업이수학점",
            credits: "총 138학점 이상",
            items: [
              "※ 전공 이외에 심화전공, 부전공, 복수전공, 자유융합전공, 지정융합전공 및 특별지정전공 중에서 반드시 한 가지 이상 선택하여 이수",
            ],
          },
          {
            title: "기초선택 이수요건",
            items: [
              "기초선택 교과목으로 선형대수학개론(MAS.10009)을 반드시 포함하여야 하며, 복수전공 이수자는 선형대수학개론을 반드시 포함하여 3학점 이상 이수하여야 함.",
              "※ 기초선택 이수학점은 학번별 교과목 이수요건 참조",
            ],
          },
          {
            title: "전공: 44학점 이상",
            items: [
              "전공필수 12학점: FX.20001 AI 시대의 법, 윤리, 철학 / AIC.20101 인공지능 개론 / AIC.20102 기계학습 개론 / AIC.20103 딥러닝 개론",
              "전공선택 33학점: 개별연구는 전공선택으로 4학점 까지만 인정",
              "※ 타 학과 개별연구와 URP.91100를 모두 인정",
              "공과대학에서 개설한 전공선택(CoE코드)을 6학점까지 전공선택으로 인정",
            ],
          },
          {
            title: "심화전공",
            credits: "총 15학점 이상",
            items: [
              "일반전공 이수과목을 제외하고, 각 트랙 별 (데이터콘텐츠AI, 물리제조AI, 바이오소재AI, AI지속가능성) 전공과목 15학점 이수",
            ],
          },
          {
            title: "자유융합전공",
            credits: "총 12학점 이상",
            items: [
              "소속 학과를 제외하고 2개 이상 학사조직의 전공교과목 중 12학점 이상 이수",
            ],
          },
          {
            title: "부전공",
            credits: "총 21학점 이상",
            items: [
              "전공필수 교과목 12학점을 포함하여 전공과목 21학점 이상 이수",
              "※ 타 학사조직 전공과목과의 중복 인정 불가",
              "※ 전공선택에 명시된 요건 동일 적용",
            ],
          },
          {
            title: "복수전공",
            credits: "총 40학점 이상",
            items: [
              "전공필수 12학점을 포함하여 전공과목 40학점 이상 이수",
              "※ 타 학사조직 전공과목과의 최대한 6학점까지 중복 인정 가능",
              "※ 전공선택에 명시된 요건 동일 적용",
            ],
          },
          {
            title: "연구: 총 3학점 이상",
            items: [
              "졸업연구 3학점을 포함하여 이수",
              "※ 복수전공 이수자는 연구과목 이수를 면제함",
            ],
          },
          {
            title: "경과조치",
            items: [
              "본 이수요건은 2025학년도 입학생 부터 적용함. 2024학년도 이전 입학생이 전과, 심화전공, 부전공, 복수전공, 자유융합전공 및 특별지정전공 등의 적용을 받는 경우, 본 이수요건을 따를 수 있음",
            ],
          },
        ],
      },
      grad: {
        master: [
          { title: "졸업이수학점", credits: "총 36학점 이상", items: [] },
          {
            title: "공통필수: 3학점 이상",
            items: [
              "CC 5단위 과목 중 택1 하여 이수",
              "※ CC.50010 전산응용개론은 제외함",
              "CC.50001 리더십강좌 (무학점, 2002년도 입학생부터 반드시 이수, 일반 장학생 및 외국인 학생 제외)",
              "CC.00020 윤리 및 안전 I",
            ],
          },
          { title: "전공필수", items: ["없음"] },
          {
            title: "선택: 총 21학점 이상",
            items: [
              "본 학과의 각 트랙 별 과목 500단위 이상 교과목을 12학점 이상 반드시 이수",
              "※ 4개 트랙별 (데이터콘텐츠AI, 물리제조AI, 바이오소재AI, AI지속가능성) 지정과목 참고",
              "타 학과 5단위 이상 및 모든 학과 4단위 학사·대학원 상호인정 교과목은 9학점 이내로 인정",
              "※ 공통필수, 자유선택 과목은 선택과목으로 인정하지 않음",
            ],
          },
          {
            title: "연구: 총 12학점 이상",
            items: [
              "세미나(TBD) 2학점 이상 이수",
              "논문연구 12학점 이상 이수",
            ],
          },
          {
            title: "경과조치",
            items: [
              "본 이수요건은 2026학년도 입학생 부터 적용함. 2025학년도 이전 석사과정 입학생이 전과 등의 적용을 받는 경우, 본 이수요건을 따를 수 있음",
            ],
          },
        ],

        phd: [
          { title: "졸업이수학점", credits: "총 60학점 이상", items: [] },
          {
            title: "공통필수: 3학점 이상",
            items: [
              "CC 5단위 과목 중 택1 하여 이수",
              "※ CC.50010 전산응용개론은 제외함",
              "CC.50001 리더십강좌 (무학점, 2002년도 입학생부터 반드시 이수, 일반 장학생 및 외국인 학생 제외)",
              "CC.00020 윤리 및 안전 I",
            ],
          },
          { title: "전공필수", items: ["없음"] },
          {
            title: "선택: 총 27학점 이상",
            items: [
              "본 학과의 각 트랙 별 과목 500단위 이상 교과목을 18학점 이상 반드시 이수",
              "※ 4개 트랙별 (데이터콘텐츠AI, 물리제조AI, 바이오소재AI, AI지속가능성) 지정과목 참고",
              "※ 석사과정에서 취득한 교과목 및 세미나 과목 학점은 박사과정 이수학점에 누적됨 (단, 연구학점은 제외)",
              "※ 공통필수, 자유선택 과목은 선택과목으로 인정하지 않음",
            ],
          },
          {
            title: "연구: 총 30학점 이상",
            items: [
              "세미나(TBD) 4학점 이상",
              "※ 석사과정에서 이수한 교과목 학점 및 세미나 과목 학점(2학점 이내)은 박사과정 이수학점으로 누적 가산됨",
              "논문연구 30학점 이상 이수",
            ],
          },
          {
            title: "경과조치",
            items: [
              "본 이수요건은 2026학년도 입학생 부터 적용함. 단, 2025학년도 이전 박사과정 입학생이 전과 등의 적용을 받는 경우, 본 이수요건을 따를 수 있음",
            ],
          },
        ],
        integrated: [
          { title: "졸업이수학점", credits: "총 60학점 이상", items: [] },
          {
            title: "공통필수: 3학점 이상",
            items: [
              "CC 5단위 과목 중 택1 하여 이수",
              "※ CC.50010 전산응용개론은 제외함",
              "CC.50001 리더십강좌 (무학점, 2002년도 입학생부터 반드시 이수, 일반 장학생 및 외국인 학생 제외)",
              "CC.00020 윤리 및 안전 I",
            ],
          },
          { title: "전공필수", items: ["없음"] },
          {
            title: "선택: 총 27학점 이상",
            items: [
              "본 학과의 각 트랙 별 과목 500단위 이상 교과목을 18학점 이상 반드시 이수",
              "※ 4개 트랙 별 (데이터콘텐츠AI, 물리제조AI, 바이오소재AI, AI지속가능성) 지정과목 참고",
              "※ 공통필수, 자유선택 과목은 선택과목으로 인정하지 않음",
            ],
          },
          {
            title: "연구: 총 30학점 이상",
            items: ["세미나(TBD) 4학점 이상", "논문연구 30학점 이상 이수"],
          },
          {
            title: "경과조치",
            items: [
              "본 이수요건은 2026학년도 입학생 부터 적용함. 단, 2025학년도 이전 석사박사통합과정 입학생이 전과 등의 적용을 받는 경우, 본 이수요건을 따를 수 있음",
            ],
          },
        ],
      },
    },
    common: {
      footerNote:
        "본 정보는 학과 운영 사정에 따라 변경될 수 있으니 공지사항을 상시 확인하시기 바랍니다.",
      noticeTitle: "공지",
      noticeSubtitle: "학과 공지사항 및 업데이트",
    },
  },
  en: {
    nav: {
      home: "Home",
      intro: "Intro",
      people: "People",
      admission: "Admission",
      education: "Education",
      announcements: "Notice",
    },
    hero: {
      title: "AX",
      subtitle:
        "Nurturing AI-Native leaders who create AI and design advanced systems.",
      cta: "Learn More",
    },
    intro: {
      welcomeTitle: "Welcome Message",
      welcomeContent: `"Beyond using AI, we cultivate AI-Native leaders who create AI and design AI systems."\n\nWelcome to the Department of AX at the KAIST College of AI.\n\nThe world is undergoing a major transformation into an AI-First era. The ability to leverage AI across industries and society has become a fundamental driver of productivity and innovation, and a key determinant of national and corporate competitiveness. At the same time, in global technology competition, the capability to directly design, develop, and operate AI models and systems is emerging as a new standard of technological leadership.\n\nTo respond to these demands of our time, KAIST established the Department of AX. Our mission is to educate AI-Native talent equipped with both scholarly and practical competencies spanning the full AI computing lifecycle—from AI model design and algorithm research to system software, MLOps, data infrastructure, and AI service operations. This represents a new educational paradigm that extends beyond the conventional computer science focus on general-purpose software development, toward building the ability to design and advance next-generation AI technologies—including Foundation Models, Multimodal AI, and Agentic AI—and to deploy and apply them across industrial, scientific, and public domains.\n\nAs the core axis of the KAIST College of AI, the Department of AX works closely with the Department of AI Systems, the Department of AI+X, and the Department of AI and Future Studies to build a vertically integrated education and research ecosystem spanning AI modeling, computing, application, and policy. Through this ecosystem, students develop not only strong technical capabilities but also a balanced sense of social responsibility grounded in Human-Centric AI and AI ethics and philosophy education, enabling them to grow as next-generation AI leaders.\n\nToday, AI is no longer confined to the IT sector. Innovations driven by AI+X convergence are rapidly expanding across diverse fields—including intelligent manufacturing, precision medicine and biotechnology, advanced content creation, and energy and environmental optimization. These transformations are directly linked to Korea’s future industrial competitiveness and national technological sovereignty. The Department of AX embraces the mission of nurturing core talent who will play a central role in Korea’s AI technological ecosystem.\n\nYour challenge is also Korea’s challenge, and your growth is part of Korea’s future. The Department of AX will be a steadfast partner in that journey.`,
      deptTitle: "Department Introduction",
      deptContent: `KAIST’s Department of AX was established to cultivate AI-native core computing talent capable of developing, optimizing, and operating Full-Stack AI systems. The department covers the full spectrum of AI computing—from AI model design to computing infrastructure, system operation, and application-level service development. In an AI-First era, AI computing functions as a foundational technology layer that underpins the creation, execution, scaling, and application of AI across industrial, scientific, and public sectors.\n\nKAIST’s College of AI is structured around three technical pillars and one policy pillar aligned with the demands of the AI-First age:\n• AI Computing/AX — Models and computing technologies\n• AI Systems — Semiconductor and hardware-based infrastructure\n• AI+X — Industry- and domain-specific applications\n• AI Future — Policy, governance, and societal impact\n\nThis structure enables a vertically integrated AI ecosystem that connects AI design, execution, application, and societal adoption, supporting a balanced model of AI talent development that considers both technological advancement and societal deployment. Education extends beyond lecture-based instruction to integrate project-based, research-based, and industry-linked learning, supported by large-scale computing infrastructure and an emerging AI semiconductor ecosystem to strengthen practical AI computing capabilities.`,
      objectivesTitle: "Educational Objectives",
      objectives: [
        {
          title: "AI Theory & Algorithm Centered",
          desc: "Provides specialized education focused on AI theory, mathematics, and algorithms, distinct from traditional CS.",
        },
        {
          title: "Math & Principle-Based Design",
          desc: "Strengthens the ability to deeply understand and design the mathematical foundations and logical structures of AI.",
        },
        {
          title: "Reflecting Next-Gen AI Technologies",
          desc: "Actively incorporates the latest research such as LLM, Generative AI, Multimodal AI, and Agentic AI into the curriculum.",
        },
        {
          title: "AI System & Operation Excellence",
          desc: "Strengthens practical system software skills necessary for operating large-scale AI, including MLOps and GPU parallel processing.",
        },
        {
          title: "Application & Domain Expertise",
          desc: "Acquires problem-solving capabilities based on AI+X by applying AI models to real industrial and scientific environments.",
        },
        {
          title: "Human-Centered & Responsible AI",
          desc: "Teaches responsible design principles, AI ethics, and philosophical understanding of AI-human interaction.",
        },
        {
          title: "AI-Native Computing Fundamentals",
          desc: "Provides basic computing competency in data structures, software engineering, and security for AI-Native talent.",
        },
      ],
    },
    admission: {
      title: "Admission",
      ugTitle: "Undergraduate Admission",
      ugDesc:
        "KAIST undergraduate students are admitted without declaring a major and enter as undeclared students.\nAfter enrollment, they spend their first year exploring foundational coursework and academic interests.\nAt the end of the second semester, they choose their major, which may include AX (AI Transformation) major among other disciplines.\nMore detailed information about this process is available on the KAIST Admissions Office website.",
      gradTitle: "Graduate Admission",
      gradDesc:
        "The Department of AX will begin accepting international graduate students in Spring 2027.\nFor general information, please refer to the KAIST Graduate Admissions website.",
      gradSchedule1Title:
        "2026 Fall Semester Admission Timeline for New Students",
      gradSchedule1Items: [
        {
          category: "Application (incl. documents)",
          timeline: "2026. 03. 27(Fri) 10:00 ~ 04. 07(Tue) 17:30",
          method:
            "Online application at KAIST Admissions System (https://gradapply.kaist.ac.kr)",
        },
        {
          category: "1st Stage Results",
          timeline: "2026. 05. 14(Thu) 14:00+",
          method: "Portal Notice (https://gradapply.kaist.ac.kr)",
        },

        {
          category: "2nd Stage (Interview)",
          timeline: "2026. 05. 16(Sat) ~ 05. 26(Tue)",
          method: "Check individual schedule on the admissions system",
        },
        {
          category: "Final Results",
          timeline: "2026. 06. 25(Thu) 14:00+",
          method: "Portal Notice (https://gradapply.kaist.ac.kr)",
        },
      ],
      gradSchedule2Title:
        "2026 Fall Semester Admission Timeline for KAIST Students (Integrated Programs)",
      gradSchedule2Items: [
        {
          category: "Application (incl. documents)",
          timeline: "2026. 04. 08(Wed) 10:00 ~ 04. 14(Tue) 17:30",
          method:
            "Online application at KAIST Admissions System (https://gradapply.kaist.ac.kr)",
        },
        {
          category: "1st Stage Results",
          timeline: "2026. 05. 14(Thu) 14:00+",
          method: "Portal Notice (https://gradapply.kaist.ac.kr)",
        },
        {
          category: "2nd Stage (Interview)",
          timeline: "2026. 05. 16(Sat) ~ 05. 26(Tue)",
          method: "-",
        },
        {
          category: "Final Results",
          timeline: "2026. 06. 25(Thu) 14:00+",
          method: "Portal Notice (https://gradapply.kaist.ac.kr)",
        },
      ],
      advisorTitle: "Advisor Application Information",
      advisorContent: [
        "Government-funded students can apply to any professor in the AX Department. Matching occurs if the professor has a quota and wishes to advise the student.",
        "KAIST-funded students can only be advised by the professor providing the research funds.",
        "KAIST Program students can only be advised by professors participating in the specific program.",
        "General students can apply to any professor in the AX Department.",
      ],
      advisorTimingTitle: "Advisor Application Timing",
      advisorTimingItems: [
        {
          course: "Master's",
          timing: "Matched after final results and Master's Orientation",
        },
        {
          course: "Ph.D.",
          timing:
            "Pre-matched before application (Contact prospective advisor for agreement, must enter 1 prospective advisor during online application)",
        },
        {
          course: "Integrated (Current Students)",
          timing:
            "Pre-matched before application (Contact prospective advisor for agreement, must enter 1 prospective advisor during online application)",
        },
        {
          course: "B.S.-M.S.-Ph.D. Integrated",
          timing:
            "Pre-matched before application (Contact prospective advisor for agreement)",
        },
      ],
      eligibilityTitle: "Eligibility",
      eligibility: [
        {
          course: "Master's",
          criteria:
            "Bachelor's degree holder (or expected to graduate by the time of admission)",
        },
        {
          course: "Ph.D.",
          criteria:
            "Master's degree holder (or expected to graduate by the time of admission)",
        },
        {
          course: "M.S.-Ph.D. Integrated",
          criteria:
            "Bachelor's degree holder (or expected to graduate by the time of admission)",
        },
        {
          course: "(KAIST M.S. students) M.S.-Ph.D. Integrated",
          criteria:
            "KAIST M.S. students who have completed only 1 semester (Those with 2+ semesters are ineligible)",
        },
        {
          course: "(KAIST B.S. students) B.S.-M.S.-Ph.D. Integrated",
          criteria:
            "1. KAIST B.S. students who have completed 3-4 semesters by the application deadline (Those with 5+ semesters are ineligible)\n2. Earned 69+ credits\n3. Cumulative GPA of 3.7+ (No GPA limit if submitting excellent research results performed at KAIST)",
        },
      ],
      categoriesTitle: "Student Categories",
      categories: [
        {
          type: "Government-funded",
          desc: "A system where part of the student's educational expenses is supported by government funds.",
        },
        {
          type: "KAIST-funded",
          desc: "A system where educational expenses are supported by the advisor's research funds. Students become advisees of the supporting professor, so their major field may be limited by the professor's major.",
        },
        {
          type: "General",
          desc: "A system where educational expenses are borne by a recommending institution (industry, research institute, etc.). Applicants must submit recommendation documents from the head of their institution.",
        },
      ],
      admissionHome: "Admissions Home",
      admissionHomeDesc: "Visit the main KAIST Admissions website.",
      ugKorean: "Undergraduate (Korean Students)",
      ugKoreanDesc: "Admission guide for Korean undergraduate students.",
      ugIntl: "Undergraduate (International Students)",
      ugIntlDesc: "Admission guide for international undergraduate students.",
      readMore: "Read More",
    },
    education: {
      title: "Education",
      courseTitle: "Course Guide",
      courseSubtitle: "Advanced Curriculum for AI-Native Leaders",
      reqTitle: "Graduation Requirements",
      reqDesc: "Guidelines and criteria for completing your degree program.",
      reqNotice: "* The requirements below are tentative and subject to change.",
      ugSubtitle: "Major Course Requirements for Admitted in 2025 and after",
      gradSubtitle: "Completion Requirements for Admitted in 2026 and after",
      ug: {
        sections: [
          {
            title: "Credit Requirement for Graduation",
            credits: "138+ Credits",
            items: [],
          },
          {
            title: "Elective Basic Courses",
            items: [
              "Introduction to Linear Algebra (MAS.10009) must be included",
              "Double major students must also complete at least 3 credits including Introduction to Linear Algebra (MAS.10009)",
            ],
          },
          {
            title: "Major Requirement (44+ Credits)",
            items: [
              "Mandatory (12 Credits): FX.20001 (Law, Ethics, Philosophy in AI Era), AIC.20101 (Intro to AI), AIC.20102 (Machine Learning), AIC.20103 (Deep Learning)",
              "Electives (32 Credits): Up to 4 credits from Individual Study recognized, up to 6 credits from College of Engineering (CoE code) electives recognized",
            ],
          },
        ],
      },
      grad: {
        master: [
          {
            title: "Credit Requirement for Graduation",
            credits: "33+ Credits",
            items: [],
          },
          {
            title: "Mandatory General Courses (3 Credits)",
            items: [
              "Select 1 from CC 500-level (CC.50010 excluded)",
              "CC.50001 Leadership (mandatory for students entering in 2002+)",
              "CC.00020 Ethics & Safety I",
            ],
          },
          { title: "Mandatory Major Courses", items: ["None"] },
          {
            title: "Elective Courses (18+ Credits)",
            items: [
              "At least 12 credits in AIC/CS/IS 500-level or higher courses",
              "Courses from other depts with 500+ level counted up to 6 credits",
              "* Mandatory general and free elective courses are not counted",
            ],
          },
          {
            title: "Research Courses (6+ Credits)",
            items: [
              "At least 4 credits from Thesis Research",
              "2 credits from seminar courses (AIC.93100) are required",
            ],
          },
          {
            title: "Transitional Measures",
            items: ["Apply to students admitted in 2026 and thereafter"],
          },
        ],
        phd: [
          {
            title: "Credit Requirement for Graduation",
            credits: "60+ Credits",
            items: [],
          },
          {
            title: "Mandatory General Courses (3 Credits)",
            items: [
              "Select 1 from CC 500-level (CC.50010 excluded)",
              "CC.50001 Leadership (mandatory for students entering in 2002+)",
              "CC.00020 Ethics & Safety I",
            ],
          },
          {
            title: "Elective Courses (27+ Credits)",
            items: [
              "At least 18 credits in AIC/CS/IS 500-level or higher courses",
              "Courses from other depts with 500+ level counted up to 9 credits",
            ],
          },
          {
            title: "Research Courses (30+ Credits)",
            items: [
              "4 credits from seminar courses (AIC.93100, AIC.93200) are required",
              "* Credits earned in Master's program (up to 2 credits) can be accumulated",
            ],
          },
          {
            title: "Transitional Measures",
            items: ["Apply to students admitted in 2026 and thereafter"],
          },
        ],
        integrated: [
          {
            title: "Credit Requirement for Graduation",
            credits: "60+ Credits",
            items: [],
          },
          {
            title: "Mandatory General Courses (3 Credits)",
            items: [
              "Select 1 from CC 500-level (CC.50010 excluded)",
              "CC.50001 Leadership (mandatory for students entering in 2002+)",
              "CC.00020 Ethics & Safety I",
            ],
          },
          {
            title: "Elective Courses (27+ Credits)",
            items: [
              "At least 18 credits in AIC/CS/IS 500-level or higher courses",
              "Courses from other depts with 500+ level counted up to 9 credits",
            ],
          },
          {
            title: "Research Courses (30+ Credits)",
            items: [
              "4 credits from seminar courses (AIC.93100, AIC.93200) are required",
            ],
          },
          {
            title: "Transitional Measures",
            items: ["Apply to students admitted in 2026 and thereafter"],
          },
        ],
      },
    },
    common: {
      footerNote:
        "Information may change depending on department circumstances. Please check notices regularly.",
      noticeTitle: "Notice",
      noticeSubtitle: "DEPARTMENT ANNOUNCEMENTS & UPDATES",
    },
  },
};
