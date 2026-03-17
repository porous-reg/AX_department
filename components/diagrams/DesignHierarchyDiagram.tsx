import React, { useContext } from 'react';
import { LanguageContext } from '../../App';

const DesignHierarchyDiagram: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="w-full bg-[#0a0a0a] glass-card rounded-3xl p-8 md:p-12 shadow-[0_0_30px_rgba(6,182,212,0.15)] border border-slate-800 font-sans">
      <div className="text-3xl font-extrabold text-slate-100 mb-2">
        {lang === 'ko' ? '초거대 AI 시스템 설계 계층 — ' : 'Foundation AI System Design Hierarchy — '}
        <span className="text-cyan-400 text-gradient">Core</span>
        {lang === 'ko' ? ' 설계 역량 중심' : ' Core Design Focus'}
      </div>
      <div className="text-sm text-slate-400 mb-10 border-l-4 border-cyan-500 pl-4 py-1 leading-relaxed">
        {lang === 'ko'
          ? 'AX 학과가 집중하는 설계 계층: 파운데이션 모델부터 슈퍼컴퓨팅 인프라까지, AI의 심장을 설계하는 능력'
          : 'The design layers the Dept. of AX focuses on: from foundation models to supercomputing infra, the ability to design AI\'s core engine.'}
      </div>

      <div className="relative overflow-hidden flex justify-center py-6">
        <svg width="100%" height="auto" viewBox="0 0 1080 700" className="max-w-4xl drop-shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          <defs>
            <linearGradient id="ax-ap1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#1e293b' }} /><stop offset="100%" style={{ stopColor: '#334155' }} />
            </linearGradient>
            <linearGradient id="ax-ap2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#0f172a' }} /><stop offset="100%" style={{ stopColor: '#1e293b' }} />
            </linearGradient>
            <linearGradient id="ax-cp1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#06b6d4' }} /><stop offset="100%" style={{ stopColor: '#22d3ee' }} />
            </linearGradient>
            <linearGradient id="ax-cp2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#0891b2' }} /><stop offset="100%" style={{ stopColor: '#06b6d4' }} />
            </linearGradient>
            <linearGradient id="ax-cp3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#0e7490' }} /><stop offset="100%" style={{ stopColor: '#0891b2' }} />
            </linearGradient>
            <linearGradient id="ax-cp4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#155e75' }} /><stop offset="100%" style={{ stopColor: '#0e7490' }} />
            </linearGradient>
            <linearGradient id="ax-cp5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#164e63' }} /><stop offset="100%" style={{ stopColor: '#155e75' }} />
            </linearGradient>
            <filter id="ax-shadow"><feDropShadow dx="0" dy="4" stdDeviation="5" floodOpacity="0.3" floodColor="#000" /></filter>
            <filter id="ax-glow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          </defs>

          {/* Left labels */}
          <text x="42" y="65" fill="#94a3b8" fontSize="13" fontWeight="600">{lang === 'ko' ? 'AX 서비스 활용' : 'AX Service Usage'}</text>
          <line x1="65" y1="76" x2="65" y2="170" stroke="#475569" strokeWidth="1.5" strokeDasharray="4,4" />
          <polygon points="65,74 61,82 69,82" fill="#475569" />
          <polygon points="65,172 61,164 69,164" fill="#475569" />

          <text x="22" y="235" fill="#22d3ee" fontSize="14" fontWeight="800" filter="url(#ax-glow)">{lang === 'ko' ? '초거대 AI 설계' : 'Foundation AI Design'}</text>
          <line x1="65" y1="248" x2="65" y2="500" stroke="#06b6d4" strokeWidth="2.5" strokeDasharray="4,4" filter="url(#ax-glow)" opacity="0.8" />
          <polygon points="65,246 61,254 69,254" fill="#06b6d4" />
          <polygon points="65,502 61,494 69,494" fill="#06b6d4" />

          <text x="20" y="555" fill="#0891b2" fontSize="14" fontWeight="800">{lang === 'ko' ? 'AI 슈퍼컴퓨팅 설계' : 'Supercomputing Design'}</text>
          <line x1="65" y1="568" x2="65" y2="660" stroke="#0891b2" strokeWidth="2.5" strokeDasharray="4,4" />
          <polygon points="65,566 61,574 69,574" fill="#0891b2" />
          <polygon points="65,662 61,654 69,654" fill="#0891b2" />

          {/* Focus area highlight */}
          <rect x="100" y="200" width="550" height="330" rx="16" fill="rgba(6,182,212,0.05)" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />
          <rect x="92" y="215" width="4" height="300" rx="2" fill="#06b6d4" filter="url(#ax-glow)" />

          {/* Application layers */}
          <polygon points="430,40 495,90 365,90" fill="url(#ax-ap1)" stroke="#475569" strokeWidth="1.5" filter="url(#ax-shadow)" />
          <text x="430" y="76" textAnchor="middle" fill="#cbd5e1" fontSize="12" fontWeight="600">{lang === 'ko' ? '멀티모달 인터페이스' : 'Multimodal Interface'}</text>
          <polygon points="430,95 535,170 325,170" fill="url(#ax-ap2)" stroke="#334155" strokeWidth="1.5" filter="url(#ax-shadow)" />
          <text x="430" y="144" textAnchor="middle" fill="#94a3b8" fontSize="13" fontWeight="600">{lang === 'ko' ? 'AX 특화 서비스 기획' : 'AX Service Planning'}</text>

          {/* Divider */}
          <line x1="280" y1="195" x2="580" y2="195" stroke="#06b6d4" strokeWidth="2" strokeDasharray="6,6" filter="url(#ax-glow)" opacity="0.8" />
          <rect x="365" y="183" width="130" height="24" rx="12" fill="#0891b2" />
          <text x="430" y="200" textAnchor="middle" fill="#cffafe" fontSize="10" fontWeight="800" letterSpacing="1">
            {lang === 'ko' ? '핵심 파운데이션 설계 ▼' : 'CORE FOUNDATION ▼'}
          </text>

          {/* Core layers with labels */}
          {[
            {
              p: "430,215 575,290 285,290", color: "url(#ax-cp1)",
              title: lang === 'ko' ? "초거대 모델 플랫폼 설계" : "Foundation Model Platform",
              label1: lang === 'ko' ? "멀티모달, 에이전틱 AI," : "Multimodal, Agentic AI,",
              label2: lang === 'ko' ? "새로운 뉴럴 아키텍처 창조" : "Novel Neural Architectures",
              y: 264, ly: 258
            },
            {
              p: "430,295 615,370 245,370", color: "url(#ax-cp2)",
              title: lang === 'ko' ? "분산 프론티어 학습 설계" : "Frontier Dist Training Sys",
              label1: lang === 'ko' ? "초대규모 병렬 분산 시스템," : "Hyper-Scale Parallel Dist,",
              label2: lang === 'ko' ? "LLM 맞춤형 추론 엔진 최적화" : "Custom LLM Inference Opt",
              y: 344, ly: 340
            },
            {
              p: "430,375 650,450 210,450", color: "url(#ax-cp3)",
              title: lang === 'ko' ? "AI 프레임워크 생태계 설계" : "AI Framework Ecosystem",
              label1: lang === 'ko' ? "오픈소스 프레임워크 확장 개발," : "Open-source FW Dev & Ext,",
              label2: lang === 'ko' ? "AI 특화 가속 컴파일러 개발" : "AI Specialized Compiler Dev",
              y: 424, ly: 420
            },
            {
              p: "430,455 685,530 175,530", color: "url(#ax-cp4)",
              title: lang === 'ko' ? "AI 시스템 아키텍처 설계" : "AI System Architecture",
              label1: lang === 'ko' ? "대규모 GPU 클러스터 구조 설계," : "Large GPU Cluster Arch,",
              label2: lang === 'ko' ? "고성능 분산 인메모리 관리" : "High-Perf In-Memory Mgmt",
              y: 504, ly: 500
            },
            {
              p: "430,535 720,625 140,625", color: "url(#ax-cp5)",
              title: lang === 'ko' ? "AI/가속기 융합 인프라 설계" : "Converged AI Infra Design",
              label1: lang === 'ko' ? "AI NPU 전용 인프라 운영," : "AI NPU Infra Ops,",
              label2: lang === 'ko' ? "글로벌 슈퍼컴퓨팅 데이터센터" : "Global Supercomputing DC",
              y: 592, ly: 588
            }
          ].map((layer, idx) => (
            <React.Fragment key={idx}>
              <polygon points={layer.p} fill={layer.color} stroke="rgba(0,0,0,0.4)" strokeWidth="1.5" filter="url(#ax-shadow)" />
              <text x="430" y={layer.y} textAnchor="middle" fill={idx > 2 ? "white" : "#0f172a"} fontSize="14" fontWeight="800">{layer.title}</text>
              <line x1={layer.p.split(' ')[1].split(',')[0]} y1={layer.ly} x2="700" y2={layer.ly} stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.7" />
              <circle cx={layer.p.split(' ')[1].split(',')[0]} cy={layer.ly} r="3" fill="#22d3ee" filter="url(#ax-glow)" />
              <text x="715" y={layer.ly - 6} fill="#67e8f9" fontSize="14" fontWeight="700">{layer.label1}</text>
              <text x="715" y={layer.ly + 14} fill="#94a3b8" fontSize="13" fontWeight="500">{layer.label2}</text>
            </React.Fragment>
          ))}

          {/* App side annotations */}
          <line x1="495" y1="72" x2="700" y2="72" stroke="#475569" strokeWidth="1.5" strokeDasharray="4,4" />
          <text x="715" y="68" fill="#cbd5e1" fontSize="13" fontWeight="600">{lang === 'ko' ? '차세대 프롬프트 설계' : 'Gen-Next Prompt Design'}</text>
          <text x="715" y="86" fill="#64748b" fontSize="12">{lang === 'ko' ? '비서형 대화 에이전트' : 'Assistant Agents'}</text>

          <line x1="535" y1="140" x2="700" y2="140" stroke="#475569" strokeWidth="1.5" strokeDasharray="4,4" />
          <text x="715" y="136" fill="#cbd5e1" fontSize="13" fontWeight="600">{lang === 'ko' ? '에이전틱 워크플로우' : 'Agentic Workflow'}</text>
          <text x="715" y="154" fill="#64748b" fontSize="12">{lang === 'ko' ? 'Auto-RAG, Tool Use, 오케스트레이션' : 'Auto-RAG, Tool Use, Orchestration'}</text>

          <rect x="700" y="670" width="14" height="14" rx="3" fill="#06b6d4" />
          <text x="720" y="682" fill="#cffafe" fontSize="12" fontWeight="600">{lang === 'ko' ? '초거대 AI 핵심 (학과 코어)' : 'Foundation AI Core (Core Curriculum)'}</text>
          <rect x="910" y="670" width="14" height="14" rx="3" fill="#334155" />
          <text x="930" y="682" fill="#64748b" fontSize="12">
            {lang === 'ko' ? 'AX 서비스·응용' : 'AX Service & Application'}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default DesignHierarchyDiagram;
